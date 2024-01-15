import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthContext } from '../../context/AuthContext';

const Logout = () => {
    const navigate = useNavigate();

    const { setIsLoggedIn } = useContext(AuthContext);

    function Logout() {
        localStorage.removeItem('token'); 
        setIsLoggedIn(false);
        navigate('/login');
    }

    return (
        <div className="login-container">
            <ToastContainer/>
            <form className="login-form">
                <h1>Confirme caso deseje realizar o Logout</h1>

                <button type="button" onClick={Logout}>Desconectar</button>
            </form>
        </div>
    );
};

export default Logout;
