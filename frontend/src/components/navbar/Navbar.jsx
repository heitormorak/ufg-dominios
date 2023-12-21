import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      
      <Nav style={{ display: 'flex', justifyContent: 'center' }}>
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>          
          <NavLink to='/mapa' activeStyle>
            Visualizar Profundidade
          </NavLink> 
          <NavLink to='/risco' activeStyle>
            Visualizar Riscos
          </NavLink>
          <NavLink to='/amostra' activeStyle>
            Cadastrar amostra
          </NavLink>
          <NavLink to='/cadastrorisco' activeStyle>
            Cadastrar risco
          </NavLink>
        </NavMenu>        
      </Nav>    
    </> 
  
  );
};
  
export default Navbar;
