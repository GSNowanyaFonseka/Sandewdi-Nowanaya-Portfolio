import React from 'react'
import './Certificate.css';
import IIT from '../assets/IIT.png'
import DataVisualisation  from '../assets/Data Visualisation with MS Power BI.png'
import DataAnalytics from '../assets/Data Analytics.png'
import linkedin from '../assets/linkedin.webp'
import Java from '../assets/Java.png'
import Javaoop from '../assets/JAVA OOP.png'
import Python from '../assets/Python.png'
import sql from '../assets/SQL.png'
import greatlearning from '../assets/great-learning.jpg'
import HackerRankIcon from '../assets/HackerRank_Icon-1000px.png'
import uom from '../assets/University_of_Moratuwa_logo.png'
import ITSecurity from '../assets/IT Security.png'
import LearningGitHub from '../assets/Learning GitHub.png'
import JSEnhancingDOM from '../assets/JavaScript-Enhancing DOM.png'
import JavaScriptLanguage from '../assets/Learning JavaScript Language.png'
import XMLLearning from '../assets/XML Essential Training.png'
import TableauCertificate from '../assets/Tableau-certificate.png'
import mysql from '../assets/MYSQL.png'
import hultprize from '../assets/HULTPRIZE.jpg'





const Certificate = () => {
  return (
    <section id="certifications">
            <h1 className="title">Certifications</h1>
            <div className="timeline-section">
                <div className="timeline-items">
                    <div className="timeline-item">
                        <div className="timeline-dot"><img src={IIT}/></div>
                        <div className="timeline-date">2025</div>
                        <div className="timeline-content">
                            <h3>HULT PRIZE</h3>
                            <p>Informatics Institute of Technology</p>
                            <img src={hultprize} alt="certificate"/> 
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"><img src={IIT}/></div>
                        <div className="timeline-date">2024</div>
                        <div className="timeline-content">
                            <h3>Analyzing and Visualizing Data with Microsoft Power BI</h3>
                            <p>Informatics Institute of Technology</p>
                            <img src={DataVisualisation} alt="certificate"/> 
                        </div>
                    </div>
        
                    <div className="timeline-item">
                        <div className="timeline-dot"><img src={linkedin}/></div>
                        <div className="timeline-date">2024</div>
                        <div className="timeline-content">
                            <h3>Data Analytics: Dashboard vs. Data Stories</h3>
                            <p>Linkedin</p>
                            <img src={DataAnalytics} alt="certificate"/> 
                        </div>
                    </div>
        
                    <div className="timeline-item">
                        <div className="timeline-dot"><img src={linkedin}/></div>
                        <div className="timeline-date">2024</div>
                        <div className="timeline-content">
                            <h3>Java</h3>
                            <p>Linkedin</p>
                            <img src={Java} alt="certificate"/> 
                        </div>
                    </div>
        
                    <div className="timeline-item">
                        <div className="timeline-dot"><img src={linkedin}/></div>
                        <div className="timeline-date">2024</div>
                        <div className="timeline-content">
                            <h3>Java Object Oriented Programming</h3>
                            <p>Linkedin</p>
                            <img src={Javaoop} alt="certificate"/> 
                        </div>
                    </div>
        
                    <div className="timeline-item">
                        <div className="timeline-dot"><img src={uom}/></div>
                        <div className="timeline-date">2024</div>
                        <div className="timeline-content">
                            <h3>Python for Beginners</h3>
                            <p>University of Moratuwa</p>
                            <img src={Python} alt="certificate"/> 
                        </div>
                    </div>
        
                    <div className="timeline-item">
                        <div className="timeline-dot"><img src={HackerRankIcon}/></div>
                        <div className="timeline-date">2024</div>
                        <div className="timeline-content">
                            <h3>SQL</h3>
                            <p>HackerRank</p>
                            <img src={sql} alt="certificate"/> 
                        </div>
                    </div>
        
                    <div className="timeline-item">
                        <div className="timeline-dot"><img src={greatlearning}/></div>
                        <div className="timeline-date">2024</div>
                        <div className="timeline-content">
                            <h3>MySQL</h3>
                            <p>Great Learning</p>
                            <img src={mysql} alt="certificate"/> 
                        </div>
                    </div>
        
                    <div className="timeline-item">
                        <div className="timeline-dot"><img src={linkedin}/></div>
                        <div className="timeline-date">2024</div>
                        <div className="timeline-content">
                            <h3>IT Security Foundation Core Concepts</h3>
                            <p>Linkedin</p>
                            <img src={ITSecurity} alt="certificate"/> 
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"><img src={linkedin}/></div>
                        <div className="timeline-date">2024</div>
                        <div className="timeline-content">
                            <h3>Learning GitHub</h3>
                            <p>Linkedin</p>
                            <img src={LearningGitHub} alt="certificate"/> 
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"><img src={linkedin}/></div>
                        <div className="timeline-date">2024</div>
                        <div className="timeline-content">
                            <h3>JavaScript-Enhncing DOM</h3>
                            <p>Linkedin</p>
                            <p>2024</p>
                            <img src={JSEnhancingDOM} alt="certificate"/> 
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"><img src={linkedin}/></div>
                        <div className="timeline-date">2024</div>
                        <div className="timeline-content">
                            <h3>Learning JavaScript Language</h3>
                            <p>Linkedin</p>
                            <p>2024</p>
                            <img src={JavaScriptLanguage} alt="certificate"/> 
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"><img src={linkedin}/></div>
                        <div className="timeline-date">2024</div>
                        <div className="timeline-content">
                            <h3>XML-Essential Training</h3>
                            <p>Linkedin</p>
                            <p>2024</p>
                            <img src={XMLLearning} alt="certificate"/> 
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"><img src={linkedin}/></div>
                        <div className="timeline-date">2024</div>
                        <div className="timeline-content">
                            <h3>Using Tablaue to Discover Powerful Buisness Insights</h3>
                            <p>Linkedin</p>
                            <p>2024</p>
                            <img src={TableauCertificate} alt="certificate"/> 
                        </div>
                    </div>

                </div>
            </div>
        </section>
  );
};

export default Certificate;