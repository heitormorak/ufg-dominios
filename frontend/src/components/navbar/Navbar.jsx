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
          <NavLink to='/Home' activeStyle>
            Home
          </NavLink>          
          <NavLink to='/Mapa' activeStyle>
            Visualizar Profundidade
          </NavLink> 
          <NavLink to='/Risco' activeStyle>
            Visualizar Riscos
          </NavLink>
          <NavLink to='/Amostra' activeStyle>
            Cadastrar
          </NavLink> 
        </NavMenu>        
      </Nav>    
    </> 
  
  );
};
  
export default Navbar;
