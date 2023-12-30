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
  height: 100%;
  flex-wrap: wrap;
  border-radius: 20px;
  opacity: 0.98;
`;

export const Title = styled(Label)`
  background-color: #f0f0f0;
  text-transform: uppercase;
  font-family: tisa_sans_probold;
  font-weight: normal;
  font-style: normal;
  font-size: 35px;
`;

export const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 14px;
  font-family: Roboto, sans-serif;
  border-radius: 6px;
  border: none;
  font-size: 16px;
  background: linear-gradient(180deg, #2ea44f 0%, #107E2C 100%);
  color: #fff;
  background-origin: border-box;
  box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25), inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);
  cursor: pointer;
`;

export const StyledFormDiv = styled.div`
  background-color: '';
  display: flex;
  flex-direction: column;
  height: 50px;
  width: 500px;
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
  border: none;
  margin-bottom: 10px;
  border-radius: 5px;
`;

