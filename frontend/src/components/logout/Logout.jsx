import React from 'react';
import {useNavigate} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import {NavLink} from "../navbar/NavbarElements.js";

const Logout = () => {
    const navigate = useNavigate();

    async function Logout() {
        document.cookie = null;
        navigate('/login');

    }

    return (
        <div className="login-container">
            <ToastContainer/>
            <form className="login-form">
                <h1>Confirme caso deseje realizar o Login</h1>

                <button type="button" onClick={Logout}>Desconectar</button>
            </form>
        </div>
    );
};
export default Logout;