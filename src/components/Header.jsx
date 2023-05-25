import React from 'react'
import { 
    Navbar, 
    NavbarBrand, 
    Collapse, 
    NavbarToggler, 
    Nav, 
    NavItem } from 'reactstrap'
import {NavLink} from 'react-router-dom'
import TechmakersLogo from '../assets/femleads.png'

export default function Header() {

    const[menuOpen, setMenuOpen] = React.useState(false);

    return(
    <Navbar sticky='top' dark expand='md' >      
        <NavbarBrand className='ms-5' href='/'>
        <img className ='float-start' src={TechmakersLogo} alt='Dublin techmakers logo'/>
           <h3 className='mt-4'>Women Techmakers Dublin</h3>
        </NavbarBrand>
        <NavbarToggler onClick ={() => setMenuOpen(!menuOpen)}/>
        <Collapse isOpen={menuOpen} navbar>
            <Nav className='ms-auto'navbar>
                <NavItem>
                    <NavLink className='nav-link' to='/'>
                        <i className='fa fa-home fa-lg' />  Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/campaigns'>
                        <i className='fa fa-list fa-lg' /> Campaigns
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/contact'>
                        <i className='fa fa-address-card fa-lg' /> Contact
                    </NavLink>
                </NavItem>
            </Nav>
        </Collapse>   
    </Navbar>
    )
}