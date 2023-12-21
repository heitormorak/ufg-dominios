import React from 'react';
import {BoxCenter, BoxHome, FooterLink,} from './HomeElements'

const Home = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'Right',
                height: '100vh',
                backgroundImage: 'url("../../public/background-image.png")',
                backgroundPosition: 'left',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <BoxCenter>
                <h2>GynViewer</h2>
                <span>
            Visualize os dados públicos de Goiânia!             
            </span><br/>
                <span style={{fontWeight: '400'}}>
            Esse sistema permite uma nova abordagem para visualização de dados públicos do município de Goiânia. <br/>
            Atualmente são exibidos dados sobre nível do solo e áreas de risco de alagamento. A visualização é feita através de um mapa interativo em 3D, <br/>
            onde blocos são construídos com altura, localização e cores correspondentes aos dados cadastrados.
            </span>
            </BoxCenter>

            <BoxHome style={{position: 'absolute', bottom: '0', width: '100%'}}>
                <FooterLink>
                    <div>
                        <img src='icone.png'/>
                        <h2> GEOTÉCNICA </h2>
                        <span>
             UFG Copyright © 2010 - 2023
            </span>
                    </div>
                </FooterLink>
            </BoxHome>
        </div>
    );
};

export default Home;
