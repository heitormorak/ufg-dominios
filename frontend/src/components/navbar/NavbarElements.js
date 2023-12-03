import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: white;
  height: 5vh;
  width: 100vw;
  display: flex;
  aling-items: center;
  justify-content: space-between;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  text-transform: uppercase;
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: white;
    background: #242322;
  }
`;

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

export const Box = styled.div`
  padding: 10px 20px;
  position: absolute;
  font-size: 10px;
  width: 100%;
  background-color: #DCDCDC;
  color: black;
  text-align: center;
  margin-right: -24px;
  margin-top: 1450px;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
	display: none;
  }  
`;

