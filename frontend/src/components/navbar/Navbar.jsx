import React, { useContext } from 'react';
import { Nav, NavLink, NavMenu } from './NavbarElements';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const isLoggedIn = useContext(AuthContext);
  const Login = isLoggedIn.isLoggedIn

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
          {!Login && (
            <NavLink to='/login' activeStyle>
              Login
            </NavLink>
          )}
          {Login && (
            <NavLink to='/logout' activeStyle>
              Logout
            </NavLink>
          )}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
