import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import Mapa from "./components/profundidadesolo/ProfundidadeSolo"
import Amostra from "./components/amostra/Amostra"
import Risco from "./components/risco/Risco.jsx"
import Usuario from "./components/usuario/Usuario.jsx"
import AreasRisco from "./components/areasrisco/AreasRisco"
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout.jsx";
import { AuthProvider } from './context/AuthContext.jsx';


function App() {
  return (
    <AuthProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate  to="/Home" />} />
        <Route path='/mapa' element={<Mapa/>} />
        <Route path='/risco' element={<AreasRisco/>} />
        <Route path='/cadastrorisco' element={<Risco/>} />
        <Route path='/cadastrousuario' element={<Usuario/>} />
        <Route path='/amostra' element={<Amostra/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/logout' element={<Logout/>} />

      </Routes>
    </Router>
    
    </AuthProvider>
  );
}
  
export default App;