import React, { useState } from 'react';
import './LoginElements.css'; 
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import {NavLink} from "../navbar/NavbarElements.js";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const server = 'http://localhost:8080';

    async function Auth() {
        const body = {
            username: username,
            password: password
        }
        const response = await fetch(`${server}/login`, {
            method: "POST",             
            headers:{
                accept : "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify(body)            
        })
        if (response.status >= 200 && response.status <=300){
            const body = await response.json()
            navigate('/risco');       
        } else {
            toast.error("Error");
        }        
    }

    return (
        
        <div className="login-container">
            <ToastContainer />
            <form className="login-form" onSubmit={Auth()}>
                <h1>Login</h1>
                <div className="input-group">
                    <label htmlFor="username">Usuário</label>
                    <input
                        id="username"
                        type="text"
                        maxLength={30}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Senha</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Entrar</button>
                <NavLink to='/cadastrousuario' activeStyle>
                    Cadastrar Usuário
                </NavLink>
            </form>
        </div>
    );
};

export default Login;
