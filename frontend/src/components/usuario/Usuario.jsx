import React, {useState} from 'react';
import {
    Container,
    FormContainer,
    FormSection,
    StyledButton,
    StyledDiv,
    StyledFormDiv,
    StyledFormInput,
    StyledFormLabel,
    Title,
    TitleDiv
} from './UsuarioElements.js';
import {server} from '../../server.js';
import {Slide, toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Usuario = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [usuario, setUsuario] = useState('');

    const toastOptions = {
        transition: Slide,
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true
    };
    const validateFields = () => {
        if (!email || !senha || !usuario) {
            toast.error('Todos os campos são obrigatórios', toastOptions);
            return false;
        }
        if(!/^.*@.*\..*/.test(email)) {
            toast.error('Email não está no formato correto', toastOptions);
            return false;
        }
        return true;
    };

    async function Salvar() {

        if (!validateFields()) {
            return;
        }

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
            if (body.match(/Erro:/g)) {
                toast.error(body, toastOptions);
            } else {
                setEmail('');
                setUsuario('');
                setSenha('');
                toast.success("Usuário cadastrado com sucesso", toastOptions);
            }
        } else {
            toast.error("ERRO", toastOptions);
            console.log("ERRO");
        }
    }


    return (
        <Container>
            <ToastContainer/>
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
