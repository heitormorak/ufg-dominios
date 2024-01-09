import React, {useState} from 'react';
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
} from './AmostraElements';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {server} from '../../server.js';

const Amostra = () => {

    const [numRel, setNumRel] = useState('');
    const [cooY, setCooY] = useState('');
    const [cooX, setCooX] = useState('');
    const [nspt1, setNspt1] = useState('');
    const [nspt2, setNspt2] = useState('');
    const [numAmostra, setNumAmostra] = useState('');

    async function Salvar() {
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
                setNumRel('');
                setCooY('');
                setCooX('');
                setNspt1('');
                setNspt2('');
                setNumAmostra('');

                toast.success('Cadastro realizado com sucesso!');
            }
        } else {
            toast.error("Erro");
        }
    }


    return (
        <Container>
            <ToastContainer />
            <StyledDiv>
                <TitleDiv>
                    <Title>Cadastro de amostras</Title>
                </TitleDiv>

                <Search/>

                <FormContainer>
                    <FormSection>
                        <StyledFormDiv>
                            <StyledFormLabel>Número do Relatório</StyledFormLabel>
                            <StyledFormInput value={numRel} onChange={(e) => setNumRel(e.target.value)}/>
                        </StyledFormDiv>

                        <StyledFormDiv>
                            <StyledFormLabel>Coordenada Y</StyledFormLabel>
                            <StyledFormInput value={cooY} onChange={(e) => setCooY(e.target.value)}/>
                        </StyledFormDiv>

                        <StyledFormDiv>
                            <StyledFormLabel>Coordenada X</StyledFormLabel>
                            <StyledFormInput value={cooX} onChange={(e) => setCooX(e.target.value)}/>
                        </StyledFormDiv>
                    </FormSection>

                    <FormSection>
                        <StyledFormDiv>
                            <StyledFormLabel>Número da amostra</StyledFormLabel>
                            <StyledFormInput value={numAmostra} onChange={(e) => setNumAmostra(e.target.value)}/>
                        </StyledFormDiv>

                        <StyledFormDiv>
                            <StyledFormLabel>Nspt 1o+2o - última amostra</StyledFormLabel>
                            <StyledFormInput value={nspt1} onChange={(e) => setNspt1(e.target.value)}/>
                        </StyledFormDiv>

                        <StyledFormDiv>
                            <StyledFormLabel>Nspt 2o+3o - última amostra</StyledFormLabel>
                            <StyledFormInput value={nspt2} onChange={(e) => setNspt2(e.target.value)}/>
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