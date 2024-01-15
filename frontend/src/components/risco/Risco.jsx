import React, {useState, useEffect } from 'react';
import Search from './search';
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
} from './RiscoElements';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {server} from '../../server.js';
import {useNavigate} from "react-router-dom";

const Risco = () => {
    const navigate = useNavigate();
    const [numRel, setNumRel] = useState('');
    const [cooY, setCooY] = useState('');
    const [cooX, setCooX] = useState('');
    const [numMorad, setNumMorad] = useState('');
    const [numPessoa, setNumPessoa] = useState('');
    const [grauRisco, setGrauRisco] = useState('');
    const [descricao, setDescricao] = useState('');
    const [grauVulne, setGrauVulne] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    const toastOptions = {
        transition: Slide,
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true
    };

    const handleKeyPress = (event) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);

        // Verifica se o valor não é um número 
        if (!/^\d+$/.test(keyValue)) {
            event.preventDefault();
        }
    };

    const handleKeyPressCoordinates = (event) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);

        // Verifica se o valor não é um número ou se já existe um ponto decimal
        if (!/^\d*\.?\d*$/.test(keyValue)) {
            event.preventDefault();
        }
    };

    const validateFields = () => {
        if (!numRel || !cooY || !cooX || !numMorad || !numPessoa || !grauRisco || !descricao) {
            toast.error('Todos os campos são obrigatórios', toastOptions);
            return false;
        }
        return true;
    };
    

    async function Salvar() {

        if (!validateFields()) {
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        const body = {
            num_rel: numRel,
            cooX: cooX,
            cooY: cooY,
            num_morad: numMorad,
            num_pessoa: numPessoa,
            grau_risco: grauRisco,
            descricao: descricao,
            grau_vulne: grauVulne,
            token: document.cookie
        }
        const response = await fetch(`${server}/riscos`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
    
        if (response.status >= 200 && response.status < 300) {
            const body = await response.text();
            if(body.match(/Erro:/g)) {
                toast.error(body, toastOptions);
            } else {
                setNumRel('');
                setCooY('');
                setCooX('');
                setNumMorad('');
                setNumPessoa('');
                setGrauRisco('');
                setDescricao('');
                setGrauVulne('');

                toast.success('Cadastro realizado com sucesso!', toastOptions);
            }
        } else {
            toast.error("Error", toastOptions);
        }
    }

    return (
        <Container>
            <ToastContainer />
            <StyledDiv>
            <TitleDiv>
                    <Title>Cadastro de riscos</Title>
                </TitleDiv>

                <Search/>

                <FormContainer>
                    <FormSection>
                        <StyledFormDiv>
                            <StyledFormLabel>Número do Relatório</StyledFormLabel>
                            <StyledFormInput value={numRel} onChange={(e) => setNumRel(e.target.value)} onKeyPress={handleKeyPress}/>
                        </StyledFormDiv>

                        <StyledFormDiv>
                            <StyledFormLabel>Coordenada Y</StyledFormLabel>
                            <StyledFormInput value={cooY} onChange={(e) => setCooY(e.target.value)} onKeyPress={handleKeyPressCoordinates}/>
                        </StyledFormDiv>

                        <StyledFormDiv>
                            <StyledFormLabel>Coordenada X</StyledFormLabel>
                            <StyledFormInput value={cooX} onChange={(e) => setCooX(e.target.value)} onKeyPress={handleKeyPressCoordinates}/>
                        </StyledFormDiv>

                        <StyledFormDiv>
                            <StyledFormLabel>Número da moradia</StyledFormLabel>
                            <StyledFormInput value={numMorad} onChange={(e) => setNumMorad(e.target.value)} onKeyPress={handleKeyPress}/>
                        </StyledFormDiv>
                    </FormSection>

                    <FormSection>
                        <StyledFormDiv>
                            <StyledFormLabel>Número de pessoas</StyledFormLabel>
                            <StyledFormInput value={numPessoa} onChange={(e) => setNumPessoa(e.target.value)} onKeyPress={handleKeyPress}/>
                        </StyledFormDiv>

                        <StyledFormDiv>
                            <StyledFormLabel>Grau de risco</StyledFormLabel>
                            <select
                                value={grauRisco}
                                onChange={(e) => setGrauRisco(e.target.value)}
                            >
                                <option value="">Selecione o grau de risco</option>
                                <option value="Baixo">Baixo</option>
                                <option value="Médio">Médio</option>
                                <option value="Alto">Alto</option>
                                <option value="Muito Alto">Muito Alto</option>
                            </select>
                        </StyledFormDiv>

                        <StyledFormDiv>
                            <StyledFormLabel>Descrição</StyledFormLabel>
                            <StyledFormInput value={descricao} onChange={(e) => setDescricao(e.target.value)}/>
                        </StyledFormDiv>

                        <StyledFormDiv>
                            <StyledFormLabel>Grau de vulnerabilidade</StyledFormLabel>
                            <select
                                value={grauVulne}
                                onChange={(e) => setGrauVulne(e.target.value)}
                            >
                                <option value="">Selecione o grau de vulnerabilidade</option>
                                <option value="Baixo">Baixo</option>
                                <option value="Médio">Médio</option>
                                <option value="Alto">Alto</option>
                                <option value="Muito Alto">Muito Alto</option>
                            </select>
                        </StyledFormDiv>
                    </FormSection>
                </FormContainer>

                <ButtonDiv>
                    <StyledButton onClick={() => Salvar()}>Salvar</StyledButton>
                </ButtonDiv>
            </StyledDiv>
        </Container>
    );
};
export default Risco;
