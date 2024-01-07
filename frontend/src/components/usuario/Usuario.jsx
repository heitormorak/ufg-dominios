import React, {useState} from 'react';
import {
    Container,
    StyledButton,
    StyledDiv,
    StyledFormDiv,
    StyledFormInput,
    StyledFormLabel,
    Title
} from './UsuarioElements.js';
import {server} from '../../server.js';
import {useNavigate} from 'react-router-dom'

const Usuario = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [usuario, setUsuario] = useState('');
    const navigate = useNavigate();
    async function Salvar() {
        const body = {
            email: email,
            senha: senha,
            usuario: usuario
        }
        const response = await fetch(`${server}/usuarios`, {
            method: "POST",
            headers: {
                accept: "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify(body)
        })
        if (response.status >= 200 && response.status <= 300) {
            navigate('/login');
        } else {
            console.log("ERRO");
        }
    }


    return (
        <Container>
            <StyledDiv>
                <div style={{
                    backgroundColor: '',
                    display: 'flex',
                    width: '100%',
                    height: '20%',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Title>Cadastro de Usuário</Title>
                </div>

                <div style={{backgroundColor: '', display: 'flex', width: '100%', height: '60%'}}>
                    <div style={{
                        backgroundColor: '',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%'
                    }}>
                        <StyledFormDiv>
                            <StyledFormLabel>Email</StyledFormLabel>
                            <StyledFormInput value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </StyledFormDiv>

                        <StyledFormDiv>
                            <StyledFormLabel>Usuario</StyledFormLabel>
                            <StyledFormInput value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
                        </StyledFormDiv>

                        <StyledFormDiv>
                            <StyledFormLabel>Senha</StyledFormLabel>
                            <StyledFormInput value={senha} onChange={(e) => setSenha(e.target.value)}/>
                        </StyledFormDiv>
                    </div>
                </div>
                <div style={{
                    backgroundColor: '',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100px',
                    width: '100px',
                    margin: '0px 0'
                }}>
                    <StyledButton onClick={() => Salvar()}>Salvar</StyledButton>
                </div>
            </StyledDiv>
        </Container>
    );
};
export default Usuario;
