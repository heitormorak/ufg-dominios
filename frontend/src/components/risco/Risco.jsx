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
} from './RiscoElements';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {server} from '../../server.js';

const Risco = () => {

    const [numRel, setNumRel] = useState('');
    const [cooY, setCooY] = useState('');
    const [cooX, setCooX] = useState('');
    const [numMorad, setNumMorad] = useState('');
    const [nspt2, setNspt2] = useState('');
    const [numPessoa, setNumPessoa] = useState('');
    const [grauRisco, setGrauRisco] = useState('');
    const [descricao, setDescricao] = useState('');
    const [grauVulne, setGrauVulne] = useState('');

    async function Salvar() {
        const body = {
            num_rel: numRel,
            cooX: cooX,
            cooY: cooY,
            num_morad: numMorad,
            num_pessoa: numPessoa,
            grau_risco: grauRisco,
            descricao: descricao,
            grau_vulne: grauVulne
        }
        const response = await fetch(`${server}/riscos`, {
            method: "POST",
            headers: {
                accept: "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify(body)
        })
        if (response.status >= 200 && response.status < 300) {
            const body = await response.text();
            if(body.match(/Erro:/g)) {
                toast.error(body);
            } else {
                setNumRel('');
                setCooY('');
                setCooX('');
                setNumMorad('');
                setNumPessoa('');
                setGrauRisco('');
                setDescricao('');
                setGrauVulne('');

                toast.success('Cadastro realizado com sucesso!');
            }
        } else {
            toast.error("Error");
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

                        <StyledFormDiv>
                            <StyledFormLabel>Número da moradia</StyledFormLabel>
                            <StyledFormInput value={numMorad} onChange={(e) => setNumMorad(e.target.value)}/>
                        </StyledFormDiv>
                    </FormSection>

                    <FormSection>
                        <StyledFormDiv>
                            <StyledFormLabel>Número de pessoas</StyledFormLabel>
                            <StyledFormInput value={numPessoa} onChange={(e) => setNumPessoa(e.target.value)}/>
                        </StyledFormDiv>

                        <StyledFormDiv>
                            <StyledFormLabel>Grau de risco</StyledFormLabel>
                            <StyledFormInput value={grauRisco} onChange={(e) => setGrauRisco(e.target.value)}/>
                        </StyledFormDiv>

                        <StyledFormDiv>
                            <StyledFormLabel>Descrição</StyledFormLabel>
                            <StyledFormInput value={descricao} onChange={(e) => setDescricao(e.target.value)}/>
                        </StyledFormDiv>

                        <StyledFormDiv>
                            <StyledFormLabel>Grau de vulnerabilidade</StyledFormLabel>
                            <StyledFormInput value={grauVulne} onChange={(e) => setGrauVulne(e.target.value)}/>
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
