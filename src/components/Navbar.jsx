import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

// Import your logo image properly
import logo from '../assets/Sandewdi Nowanya.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    
    // Get the target section ID
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Replace URL without hash
    window.history.pushState("", document.title, window.location.pathname);
    
    // Close the mobile menu if it's open
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo-image">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="links">
        <li><a href="#home" onClick={handleNavClick}>Home</a></li>
        <li><a href="#about" onClick={handleNavClick}>About</a></li>
        <li><a href="#education" onClick={handleNavClick}>Education</a></li>
        <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
        <li><a href="#skills" onClick={handleNavClick}>Skills</a></li>
        <li><a href="#certifications" onClick={handleNavClick}>Certifications</a></li>
        <li><a href="#contact-form" onClick={handleNavClick}>Contact</a></li>
      </ul>
      <button 
        className="toggle-btn" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
        type="button"
      >
        {isOpen ? <X /> : <Menu />}
      </button>
      <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home" onClick={handleNavClick}>Home</a></li>
          <li><a href="#about" onClick={handleNavClick}>About</a></li>
          <li><a href="#education" onClick={handleNavClick}>Education</a></li>
          <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
          <li><a href="#skills" onClick={handleNavClick}>Skills</a></li>
          <li><a href="#certifications" onClick={handleNavClick}>Certifications</a></li>
          <li><a href="#contact-form" onClick={handleNavClick}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;