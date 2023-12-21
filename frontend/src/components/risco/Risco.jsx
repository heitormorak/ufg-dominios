import React, {useState} from 'react';
import Search from './search';
import {
    Container,
    StyledButton,
    StyledDiv,
    StyledFormDiv,
    StyledFormInput,
    StyledFormLabel,
    Title
} from './RiscoElements';
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
            nspt2: nspt2,
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
        if (response.status >= 200 && response.status <= 300) {
            const body = await response.json()
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
                    <Title>Cadastro de riscos</Title>
                </div>

                <Search/>

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

                    </div>

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
                            <StyledFormLabel>Nspt 2o+3o - última amostra</StyledFormLabel>
                            <StyledFormInput value={nspt2} onChange={(e) => setNspt2(e.target.value)}/>
                        </StyledFormDiv>

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
export default Risco;
