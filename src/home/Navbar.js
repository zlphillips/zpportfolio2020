import React, {useState, useEffect} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';


const NavBar = () => {
    return (
        <div className='navbar'>
            <Nav>
                    <NavLink id='home'>Home</NavLink>
                    <NavLink id='projects'>Projects</NavLink>
                    <NavLink id='packages'>Packages</NavLink>
                    <NavLink id='credentials'>Credentials</NavLink>
                    <NavLink id='about'>About</NavLink>
                    
            </Nav>
        </div>
    )
}

export default NavBar;
