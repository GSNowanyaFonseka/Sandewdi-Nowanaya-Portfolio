import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

// Import your logo image properly
import logo from '../assets/Sandewdi Nowanya.png'; // Adjust the path based on your project structure

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
        <nav className="navbar">
        <div className="logo-image">
            <img src={logo} alt="Logo" />
        </div>
        <ul className="links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#contact-form">Contact</a></li>
        </ul>
        <div className="toggle-btn" onClick={toggleMenu}>
            {isOpen ? <X /> : <Menu />}
        </div>
        <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#contact-form">Contact</a></li>
        </div>
        </nav>
  );
};

export default Navbar;