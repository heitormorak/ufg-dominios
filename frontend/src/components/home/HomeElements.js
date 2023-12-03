import styled from 'styled-components';

export const FooterLink = styled.div`
  color: #000;
  margin-bottom: 10px;
  font-size: 10px;
  text-decoration: none;
   
 /* &:hover {
      color: #188454;
      transition: 200ms ease-in;
  }*/
`;

export const BoxCenter = styled.div`
  position: absolute;
  font-size: 20px;
  width: 100%;
  background-color: rgba(217, 217, 217, .85);
  padding: 36px;
  margin: 15% 0 15% 0;
  color: #3F3939;
  text-align: center;
  margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
} 
`;

export const BoxHome = styled.div`
padding: 10px 20px;
position: absolute;
font-size: 10px;
width: 100%;
background-color: #DCDCDC;
color: black;
text-align: center;
margin-right: -24px;
margin-top: 500px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
  display: none;
} 
`;