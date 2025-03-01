import React from 'react'
import './Skill.css';

import frontendDeveloper from '../assets/frontend-developer.gif';
import html from '../assets/html.png';
import css from '../assets/css.png';
import JavaScript from '../assets/JavaScript.png';
import react from '../assets/react.png';
import Bootstrap from '../assets/Bootstrap.png';

import backendDeveloper from '../assets/backend-developer.gif';
import nodejs from '../assets/nodejs.png';
import springboot from '../assets/spring-boot.png';
import MongoDB from '../assets/MongoDB.png';
import php from '../assets/PHP.png';

import dataVisualization from '../assets/data-visualization gif.gif';
import Powerbi from '../assets/Power-BI.png';
import Tableau from '../assets/Tableau.png';
import Excel from '../assets/Microsoft-Excel.png';
import MySQL from '../assets/MySQL.webp';


const Skill = () => {
  return (
    <section id="skills">
            <h1 className="title">Skills</h1>
            <div className="skills-container">
                <div className="skill">
                    <div>
                        <h1>Front-End Development</h1>
                    </div>
                    <div className="layer1">
                        <img src={frontendDeveloper} alt="Initial GIF"/>
                    </div>
                    <div className="skills-desc">
                        <p>As a dedicated frontend developer, I have honed my expertise 
                            through hands-on experience with HTML, CSS, JavaScript, and React. 
                            My projects have enabled me to develop responsive, user-friendly web applications 
                            that prioritize performance and design.</p>
                    </div>
                    <div className="skill-content">
                        <img src={html} alt="Image" className="animated-image"/>
                        <img src={css} alt="Image" className="animated-image"/>
                        <img src={JavaScript} alt="Image" className="animated-image"/>
                        <img src={react} alt="Image" className="animated-image"/>
                        <img src={Bootstrap} alt="Image" className="animated-image"/>
                    </div>
                    
                </div>
            </div>
    
            <div className="skills-container">
                <div className="skill">
                    <div>
                        <h1>Backend Development</h1>
                    </div>
                    <div className="layer2">
                        <img src={backendDeveloper} alt="Initial GIF"/>
                    </div>
                    <div className="skills-desc">
                        <p>With a strong passion for backend development, I have 
                            built a solid skill set in PHP, MongoDB, Spring Boot, and Node.js. 
                            My projects reflect my ability to create efficient, secure, and scalable server-side applications. 
                            I specialize in designing robust APIs and integrating modern databases to ensure seamless and reliable performance.</p>
                    </div>
                    <div className="skill-content">
                        <img src={nodejs} alt="Image" className="animated-image"/>
                        <img src={springboot} alt="Image" className="animated-image"/>
                        <img src={MongoDB} alt="Image" className="animated-image"/>
                        <img src={php} alt="Image" className="animated-image"/>
                    </div>
                    
                </div>
            </div>
    
            <div className="skills-container">
                <div className="skill">
                    <div>
                        <h1>Data Visualization</h1>
                    </div>
                    <div className="layer3">
                        <img src={dataVisualization} alt="Initial GIF"/>
                    </div>
                    <div className="skills-desc">
                        <p>Additionally, I have honed my skills in data visualization and analysis, 
                            using tools like Power BI and Tableau, along with programming languages such as Python, 
                            to transform complex data into actionable insights.</p>
                    </div>
                    <div className="skill-content">
                        <img src={Powerbi} alt="Image" className="animated-image"/>
                    <img src={Tableau} alt="Image" className="animated-image"/>
                        <img src={Excel} alt="Image" className="animated-image"/>
                        <img src={MySQL} alt="Image" className="animated-image"/>
                    </div>
                    
                </div>
            </div>
        </section>
  );
};

export default Skill;