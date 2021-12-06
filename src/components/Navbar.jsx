import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
  } from './NavbarElements';

const Navbar = (props) => {
 
  return (
    <Nav>
        <Bars />

        <NavMenu>
        <NavLink to='/home' activeStyle>
            Home
        </NavLink>
        <NavLink to='/fetch' activeStyle>
            My Fetch API
        </NavLink>
        <NavLink to='/image' activeStyle>
            My Image
        </NavLink>
        </NavMenu>
       
      </Nav>
  );
};

export default withRouter(Navbar);
