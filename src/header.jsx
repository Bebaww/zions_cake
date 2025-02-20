// components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './header.css';

function Header({ currentPage }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="header">
            <h1>ZION'S PASTRY</h1>
            
            {/* 3-dot icon for mobile */}
            <div className="menu-icon" onClick={toggleMenu}>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
            
            {/* Navigation Menu */}
            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                <ul>
                    {currentPage === "home" && (
                        <>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li>
                                <ScrollLink 
                                    to="contact-section" 
                                    smooth={true} 
                                    duration={500}
                                    onClick={toggleMenu}
                                >
                                    Contact
                                </ScrollLink>
                            </li>
                        </>
                    )}
                    {currentPage === "menu" && (
                        <>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li>
                                <ScrollLink 
                                    to="contact-section" 
                                    smooth={true} 
                                    duration={500}
                                    onClick={toggleMenu}
                                >
                                    Contact
                                </ScrollLink>
                            </li>
                        </>
                    )}
                    {currentPage === "about" && (
                        <>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li>
                                <ScrollLink 
                                    to="contact-section" 
                                    smooth={true} 
                                    duration={500}
                                    onClick={toggleMenu}
                                >
                                    Contact
                                </ScrollLink>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
