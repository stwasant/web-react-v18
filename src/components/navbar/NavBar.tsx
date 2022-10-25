/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

// Assets
import logo from '../../assets/images/logo.svg';
import navIcon1 from '../../assets/icons/nav-icon1.svg';
import navIcon2 from '../../assets/icons/nav-icon2.svg';
import navIcon3 from '../../assets/icons/nav-icon3.svg';

// Styles
import './navbar.css';


const NavBar = () => {

    const [activeLink, setActiveLink] = useState<string>('home');
    const [scrolled, setScrolled] = useState<boolean>(false);

    const onUpdateActiveLink = (value: string): void => {
        setActiveLink(value);
    }

    useEffect (() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    },[])

return (
    <Router>

    
    <Navbar expand='lg' className={ scrolled ? 'scrolled' : '' }>
        <Container>
            <Navbar.Brand href='#home'>
                <img src={ logo } alt='Logo' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-naav'>
                <span className='navbar-toogler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ms-auto'>
                    <Nav.Link   href='#home' 
                                className={ activeLink === 'home' ? 'active navbar-link' : 'navbar-link' }
                                onClick={() => onUpdateActiveLink('home')}
                    >
                        Home
                    </Nav.Link>
                    <Nav.Link   href='#skills' 
                                className={ activeLink === 'skills' ? 'active navbar-link' : 'navbar-link' }
                                onClick={() => onUpdateActiveLink('skills')}
                    >
                        Skills
                    </Nav.Link>
                    <Nav.Link   href='#projects' 
                                className={ activeLink === 'projects' ? 'active navbar-link' : 'navbar-link' }
                                onClick={() => onUpdateActiveLink('projects')}
                    >
                        Projects
                    </Nav.Link>
                </Nav>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <a href='#'><img src={ navIcon1 } alt=''/></a>
                        <a href='#'><img src={ navIcon2 } alt=''/></a>
                        <a href='#'><img  src={ navIcon3} alt=''/></a>
                    </div>
                    <HashLink to='#connect'>
                        <button className="vvd"><span>Let’s Connect</span></button>
                    </HashLink>
                </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </Router>
  )
}

export default NavBar