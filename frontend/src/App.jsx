import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import Mapa from "./components/profundidadesolo/ProfundidadeSolo"
import Amostra from "./components/amostra/Amostra"
import Risco from "./components/risco/Risco.jsx"
import AreasRisco from "./components/areasrisco/AreasRisco"


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate  to="/Home" />} />
        <Route path='/mapa' element={<Mapa/>} />
        <Route path='/risco' element={<AreasRisco/>} />
        <Route path='/cadastrorisco' element={<Risco/>} />
        <Route path='/amostra' element={<Amostra/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </Router>
    
    </>
  );
}
  
export default App;