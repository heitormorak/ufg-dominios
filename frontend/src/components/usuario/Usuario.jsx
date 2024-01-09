import React, {useState} from 'react';
import {
    Container,
    StyledButton,
    StyledDiv,
    StyledFormDiv,
    StyledFormInput,
    StyledFormLabel,
    Title,
    TitleDiv,
    FormContainer,
    FormSection,
    ButtonDiv 
} from './UsuarioElements.js';
import {server} from '../../server.js';
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
            const body = await response.text();
            if(body.match(/Erro:/g)) {
                toast.error(body);
            } else {
                navigate('/login');
            }
        } else {
            console.log("ERRO");
        }
    }


    return (
        <Container>
            <ToastContainer />
            <StyledDiv>
                <TitleDiv>
                    <Title>Cadastro de usuários</Title>
                </TitleDiv>

                <FormContainer>
                    <FormSection>
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
                    </FormSection>
                </FormContainer>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <StyledButton onClick={() => Salvar()}>Salvar</StyledButton>
                </div>
            </StyledDiv>
        </Container>
    );
};
export default Usuario;
