import React, {useState, useEffect} from 'react';
import SearchBar from './search';
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
} from './AmostraElements';
import { ToastContainer, toast, Slide } from 'react-toastify';
import {server} from '../../server.js';
import {useNavigate} from "react-router-dom";

const Amostra = () => {
    const navigate = useNavigate();

    const [numRel, setNumRel] = useState('');
    const [cooY, setCooY] = useState('');
    const [cooX, setCooX] = useState('');
    const [nspt1, setNspt1] = useState('');
    const [nspt2, setNspt2] = useState('');
    const [numAmostra, setNumAmostra] = useState('');

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
        if (!numRel || !cooY || !cooX || !nspt1 || !nspt2 || !numAmostra) {
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
            num_amostra: numAmostra,
            cooX: cooX,
            cooY: cooY,
            nspt1: nspt1,
            nspt2: nspt2,
        }

        const response = await fetch(`${server}/amostras`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });

        if (response.status >= 200 && response.status <= 300) {
            const body = await response.text();
            if(body.match(/Erro:/g)) {
                toast.error(body, toastOptions);
            } else {
                setNumRel('');
                setCooY('');
                setCooX('');
                setNspt1('');
                setNspt2('');
                setNumAmostra('');

                toast.success('Cadastro realizado com sucesso!', toastOptions);
            }
        } else {
            toast.error("Erro", toastOptions);
        }
    } 

    const onSearch = async (num_rel) => {
        try {
            const token = localStorage.getItem('token');

            const body = {
                num_rel: num_rel,
            }

            const response = await fetch(`${server}/searchamostras`, {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });

            if (response.status >= 200 && response.status <= 300) {
                const data = await response.json();
                setNumRel(data.num_rel);
                setCooY(data.cooY);
                setCooX(data.cooX);
                setNspt1(data.nspt12);
                setNspt2(data.nspt23);
                setNumAmostra(data.num_amostra);
            } else if (response.status >= 404){
                toast.error('Amostra não encontrada', toastOptions);
            }
            else {
                console.error('error');
            }
        } catch (error) {
            console.error('Erro na busca:', error);
        }
    };
   
    return (
        <Container>
            <ToastContainer/>            
            <StyledDiv>
                <TitleDiv>
                    <Title>Cadastro de amostras</Title>
                </TitleDiv>

                <SearchBar onSearch={onSearch} />

                <FormContainer>
                    <FormSection>
                        <StyledFormDiv>
                            <StyledFormLabel>Número do Relatório</StyledFormLabel>
                            <StyledFormInput value={numRel} onChange={(e) => setNumRel(e.target.value)}  onKeyPress={handleKeyPress}/>
                        </StyledFormDiv>

                        <StyledFormDiv>
                            <StyledFormLabel>Coordenada Y</StyledFormLabel>
                            <StyledFormInput value={cooY} onChange={(e) => setCooY(e.target.value)} onKeyPress={handleKeyPressCoordinates}/>
                        </StyledFormDiv>

                        <StyledFormDiv>
                            <StyledFormLabel>Coordenada X</StyledFormLabel>
                            <StyledFormInput value={cooX} onChange={(e) => setCooX(e.target.value)} onKeyPress={handleKeyPressCoordinates}/>
                        </StyledFormDiv>
                    </FormSection>

                    <FormSection>
                        <StyledFormDiv>
                            <StyledFormLabel>Número da amostra</StyledFormLabel>
                            <StyledFormInput value={numAmostra} onChange={(e) => setNumAmostra(e.target.value)} onKeyPress={handleKeyPress}/>
                        </StyledFormDiv>

                        <StyledFormDiv>
                            <StyledFormLabel>Nspt 1o+2o - última amostra</StyledFormLabel>
                            <StyledFormInput value={nspt1} onChange={(e) => setNspt1(e.target.value)} onKeyPress={handleKeyPress}/>
                        </StyledFormDiv>

                        <StyledFormDiv>
                            <StyledFormLabel>Nspt 2o+3o - última amostra</StyledFormLabel>
                            <StyledFormInput value={nspt2} onChange={(e) => setNspt2(e.target.value)} onKeyPress={handleKeyPress}/>
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
export default Amostra;