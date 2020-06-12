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
            <NavBar>
                <NavbarBrand className='logo'>ZP</NavbarBrand>
                <NavItem id='projects'>
                    <NavLink>Projects</NavLink>
                </NavItem>
                <NavItem id='packages'>
                    <NavLink>Packages</NavLink>
                </NavItem>
                <NavItem id='credentials'>
                    <NavLink>Credentials</NavLink>
                </NavItem>
                <NavItem id='about'>
                    <NavLink>About</NavLink>
                </NavItem>
            </NavBar>
            </Nav>
        </div>
    )
}

export default NavBar;
