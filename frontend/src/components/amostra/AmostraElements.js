import styled from 'styled-components';
import { Label, Input } from 'reactstrap';

export const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  flex-wrap: wrap;
  align-items: center;
`;

export const StyledDiv = styled.div`
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  width: 80%;
  height: 80%;
  flex-wrap: wrap;
  border-radius: 20px;
  opacity: 0.98;
`;

export const Title = styled(Label)`
  background-color: #f0f0f0;
  text-transform: uppercase;
  font-family: 'San Francisco', 'Helvetica Neue', sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 35px;
`;

export const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 14px;
  font-family: Roboto, sans-serif;
  border: none;
  font-size: 16px;
  background: black;
  color: #fff;
  background-origin: border-box;
  border-radius: 8px;
  cursor: pointer;
  max-width: 200px; 
  width: 100%; 
`;

export const StyledFormDiv = styled.div`
  background-color: '';
  display: flex;
  flex-direction: column;
  height: 50px;
  width: 50%;
  margin: 30px 0;
`;

export const StyledFormLabel = styled(Label)`
  text-align: start;
  margin-bottom: 10px;
  font-size: 18px;
`;

export const StyledFormInput = styled(Input)`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;

  @media (max-width: 768px) {
    width: 40%; 
  }

  @media (max-width: 480px) {
    width: 40%; 
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center;
  }
`;


export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45%; 
  @media (max-width: 768px) {
    width: 80%; 
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;