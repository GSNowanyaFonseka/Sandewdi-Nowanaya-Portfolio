import React, { useEffect } from 'react'
import './Header.css';
import headergif from '../assets/header gif.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  useEffect(() => {
    // Add the visible class after component mounts
    const timer = setTimeout(() => {
      document.querySelector('.header-content').classList.add('visible');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="header-section">
      <div className="header-content">
        <h1 id="name" className="fade-in-down"> Sandewdi Nowanya </h1>
        <h1 className="intro-text fade-in-up">
          Computer Science  <br/> @ University of Westminster
        </h1>
        <div className="navigation fade-in">
          <ul className="nav-list">
            <li>
              <a href="https://www.linkedin.com/in/sandewdi-nowanya-790213312" className="fa-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="https://github.com/GSNowanyaFonseka" className="fa-icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
        <div className="header-image fade-in-up">
          <img src={headergif} alt="header gif"/>
        </div>
      </div>
    </section>
  );
};

export default Header;