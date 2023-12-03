import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate  to="/Home" />} />
        {/* TO DO:
        <Route path='/Mapa' element={<Mapa/>} /> 
        <Route path='/Risco' element={<AreasRisco/>} />  
        <Route path='/Amostra' element={<Amostra/>} />   */}
        <Route path='/Home' element={<Home/>} />  
      </Routes>
    </Router>
    
    </>
  );
}
  
export default App;