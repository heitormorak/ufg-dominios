import React, {useState, useEffect, useCallback} from 'react';
import {render} from 'react-dom';
import {StaticMap} from 'react-map-gl';
import DeckGL from '@deck.gl/react';
import {LinearInterpolator} from '@deck.gl/core';
import { setDefaultCredentials, API_VERSIONS} from '@deck.gl/carto';
import {GeoJsonLayer} from '@deck.gl/layers'; 
import { server } from '../../server.js';
import { Container, DeckContainer } from '../RenderMapsElements.js';


const INITIAL_VIEW_STATE = {
  latitude: -16.690329,
  longitude: -49.253840,
  zoom: 11,
  pitch: 60,
  bearing: 0
};

// Colors for the breaks of the polygon layer
const POLYGON_COLORS = {
  COLOR_1: [255, 0, 127],
  COLOR_2: [255, 77, 77],
  COLOR_3: [255, 128, 0],
  COLOR_4: [255, 214, 51],
  COLOR_5: [255, 194, 133],
  COLOR_6: [255, 221, 154],
  OTHER: [254, 246, 181]
};

setDefaultCredentials({
  apiVersion: API_VERSIONS.V2,
  username: 'public',
  apiKey: 'SdBjYyF8NhILWw7kU0n2NQ'
});

const transitionInterpolator = new LinearInterpolator();

export default function App({
  mrliIndex = 'txn_amt',
  industry = 'ret',
  week = ['2020-01-01', '2020-01-05'],
  mapStyle = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
}) {

  const [viewState, updateViewState] = useState(INITIAL_VIEW_STATE); 
  const [polygonData, setPolygonData] = useState(null); // initialize as null

  const rotateCamera = useCallback(() => {
    updateViewState(v => ({
      ...v,
      bearing: v.bearing + 0.5,
      transitionDuration: 1000,
      transitionInterpolator,
      onTransitionEnd: rotateCamera
    }));
  }, []);  

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${server}/getriscos`);
      if (response.status >= 200 && response.status <= 300) {
        const polygon = await response.json();
        setPolygonData(polygon);
      } else {
        console.log("ERRO: ", response);
      }
    }

    fetchData();
  }, []);

  const layers = polygonData
    ? [
      new GeoJsonLayer({
        id: 'geojson-layer',
        data: polygonData,      
        getLineColor: [0, 0, 0, 0],
        getFillColor: object => {
          if (object.properties.grau_risco == 'Muito Alto') {
            return POLYGON_COLORS.COLOR_2;
          } else if (object.properties.grau_risco == 'Alto'){
            return POLYGON_COLORS.COLOR_3;
          } else {
            return POLYGON_COLORS.COLOR_4;
          }
        },
        lineWidthMinPixels: 0,
        pickable: true,
        filled: true,
        extruded: true,
        wireframe: true,
        getElevation: f => {
          return f.properties.index *100;
        },
        transitions: {
          getElevation: {
            duration: 1000,
            enter: () => [0]
          }
        }
      })
    ] : [];
  
  const getTooltip = ({object}) => {
    if (!object) return false;
    const {grau_risco} = object.properties;
    const {grau_vulne} = object.properties;
    const {index} = object.properties;
    
    return `Número de pessoas: ${index*10}
     Grau de risco: ${grau_risco} 
     Grau de vulnerabilidade: ${grau_vulne}`;        
  };

  return (
    <Container>
      <DeckContainer>
        <DeckGL
          style={{ backgroundColor: '', position: 'relative', display: 'flex', justifyContent: 'center', width: '100%', height: '100%', flexWrap: 'wrap' }}
          controller={true}
          viewState={viewState}
          layers={layers}
          getTooltip={getTooltip}
          onLoad={rotateCamera}
          onViewStateChange={(v) => updateViewState(v.viewState)}
        >
          <StaticMap reuseMaps mapStyle={mapStyle} preventStyleDiffing={true} />
        </DeckGL>
      </DeckContainer>
    </Container>
  );
}

export function renderToDOM(container) {
  render(<AreasRisco />, container);  
}

