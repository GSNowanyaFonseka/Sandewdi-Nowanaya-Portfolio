import React from 'react'
import './Projects.css';
import Spacefix from'../assets/spacefix.png';
import AIChatbot from '../assets/ai-chatbot.png';
import portfolio from '../assets/portfolio.png';
import TableauDashboard from '../assets/Tableau Dashboard.png';
import musicplayer from '../assets/music-player.png';
import PowerBIprojectI from '../assets/PowerBI-amozon-prime-video-project.png';
import PowerBIprojectII from '../assets/PowerBI.png';
import ticketingSystem from '../assets/ticketingSystem.png';
import ticketingmanagement from '../assets/plane-ticketing-management.png';
import studentgradetracker from '../assets/student-grade-tracker.png';
import progressionoutcome from '../assets/progression-outcome.png';
import productstore from '../assets/product-store.png';
import homteq from '../assets/homteq.png';
import {ExternalLink, Github} from 'lucide-react';

const Projects = () => {
  return (
    
    <section id="projects">
            <h1 className="title">Projects</h1>
            <div className="project-container">
                <div className="project">
                    <img src={productstore} alt="Project Image"/>
                    <div className="project-content">
                        <h1>Product Store Web Application</h1>
                        <p>Product-Store Web Application using the MERN stack (MongoDB, Express.js, React, Node.js). This application is designed to streamline managing products, enhancing the user experience with 
                            an intuitive interface and robust functionalities. 
                        </p>
                        <div className="project-buttons">
                        <a href="https://product-store-pc5i.onrender.com/" className="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            <p>Live Demo</p>
                        </a>
                        <a href="https://github.com/GSNowanyaFonseka/Sandewdi-Portfolio" className="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                            </svg>
                            <p>GitHub</p>
                        </a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img src={Spacefix} alt="Project Image"/>
                    <div className="project-content">
                        <h1>Spacefix</h1>
                        <p>Developing a classroom booking and management app to optimize university space utilization. The app provides
                            real-time space availability, reduces overcrowding and enhances student aceess to study spaces. 
                        </p>
                        <div className="project-buttons">
                        <a href="https://www.spacefix.lk/" className="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            <p>Live Demo</p>
                        </a>
                        <a href="#" className="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                            </svg>
                            <p>GitHub</p>
                        </a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img src={hometeq} alt="Project Image"/>
                    <div className="project-content">
                        <h1>Homteq</h1>
                        <p>Developed using PHP as the client-side scripting language this project efficiently 
                            connects with MySQL databases to ensure secure and dynamic data handling.
                        </p>
                        <div className="project-buttons">
                        <a href="#" className="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            <p>Live Demo</p>
                        </a>
                        <a href="#" className="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                            </svg>
                            <p>GitHub</p>
                        </a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img src={AIChatbot} alt="Project Image"/>
                    <div className="project-content">
                        <h1>AI-Chatbot</h1>
                        <p>Developed a responsive web-based chatbot application integrating Google's Gemini 1.5 Flash API.
                            The project features a moders UI with real-time messanging, dynamic response generation, and multimedia support allowing users to upload and share images.
                        </p>
                        <div className="project-buttons">
                        <a href="file:///C:/Users/Hp/Desktop/AI-Chatbot/AI-Chatbot/index.html" className="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            <p>Live Demo</p>
                        </a>
                        <a href="file:///C:/Users/Hp/Desktop/AI-Chatbot/AI-Chatbot/index.html" className="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                            </svg>
                            <p>GitHub</p>
                        </a>
                        </div>
                    </div>
                </div>
                <div className="project">
                        <img src={portfolio} alt="Project Image"/>
                        <div className="project-content">
                            <h1>Personal Portfolio</h1>
                            <p>This project involves building a responsive website with HTML, CSS, and JavaScript to showcase a portfolio of work</p>
                            <div className="project-buttons">
                            <a href="https://sandewdi-portfolio.vercel.app/" className="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                                <p className="button-content">Live Demo</p>
                            </a>
                            <a href="https://github.com/GSNowanyaFonseka/Sandewdi-Portfolio" className="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                                </svg>
                                <p>GitHub</p>
                            </a>
                            </div>
                        </div> 
                </div>  
    
                <div className="project">
                    <img src={TableauDashboard} alt="Project Image"/>
                    <div className="project-content">
                        <h1>Aribnb Data Analysis Visualization</h1>
                        <p>Completed a comprehensive data analysis project using Tableau was completed to visually explore and visualize the Airbnb dataset, revealing key insights and trends.</p>
                        <div className="project-buttons">
                        <a href="https://sandewdi-portfolio.vercel.app/" className="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            <p>Live Demo</p>
                        </a>
                        <a href="https://github.com/GSNowanyaFonseka/Sandewdi-Portfolio" className="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                            </svg>
                            <p>GitHub</p>
                        </a>
                        </div>
                    </div>
                </div>
    
                <div className="project">
                    <img src={musicplayer} alt="Project Image"/>
                    <div className="project-content">
                        <h1>Music player</h1>
                        <p>Music Player developed using HTML, CSS, and JavaScript. This project has been a rewarding experience, combining my technical skills with my passion for music.</p>
                        <div className="project-buttons">
                        <a href="https://sandewdi-portfolio.vercel.app/" className="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            <p>Live Demo</p>
                        </a>
                        <a href="https://github.com/GSNowanyaFonseka/Sandewdi-Portfolio" className="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                            </svg>
                            <p>GitHub</p>
                        </a>
                        </div>
                    </div>
                </div>
    
                <div className="project">
                    <img src={PowerBIprojectI} alt="Project Image"/>
                    <div className="project-content">
                        <h1>Amazon prime videos and TV-show analysis</h1>
                        <p>The project uses Kaggle's dataset to create a comprehensive Amazon Prime Video dashboard using Power BI, utilizing interactive map cards and bar charts for effective data visualization.</p>
                        <div className="project-buttons">
                        <a href="https://sandewdi-portfolio.vercel.app/" className="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            <p>Live Demo</p>
                        </a>
                        <a href="https://github.com/GSNowanyaFonseka/Sandewdi-Portfolio" className="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                            </svg>
                            <p>GitHub</p>
                        </a>
                        </div>
                    </div>
                </div>
    
                <div className="project">
                    <img src={PowerBIprojectII} alt="Project Image"/>
                    <div className="project-content">
                        <h1>Reading book preference analysis</h1>
                        <p>This project involves analyzing book preferences through data collected from questionnaires and
                            creating a Power BI dashboard to visually display preferences, trends and patterns among readers.</p>
                        <div className="project-buttons">
                        <a href="https://sandewdi-portfolio.vercel.app/" className="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            <p>Live Demo</p>
                        </a>
                        <a href="https://github.com/GSNowanyaFonseka/Sandewdi-Portfolio" className="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                            </svg>
                            <p>GitHub</p>
                        </a>
                        </div>
                    </div>
                </div>
    
                <div className="project">
                    <img src={ticketingSystem} alt="Project Image"/>
                    <div className="project-content">
                        <h1>Real-Time Event Ticketing System</h1>
                        <p>The project is a comprehensive ticket management system utilizing React and Spring Boot for real-time ticket handling and advanced multithreading and synchronization techniques.</p>
                        <div className="project-buttons">
                        <a href="https://sandewdi-portfolio.vercel.app/" className="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            <p>Live Demo</p>
                        </a>
                        <a href="https://github.com/GSNowanyaFonseka/Sandewdi-Portfolio" className="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                            </svg>
                            <p>GitHub</p>
                        </a>
                        </div>
                    </div>
                </div>
    
                <div className="project">
                    <img src={ticketingmanagement} alt="Project Image"/>
                    <div className="project-content">
                        <h1>Plane Management System</h1>
                        <p>This project involves developing a Plane Management System using Java, specifically for a command-line interface. The system includes features such as ticket booking, removing bookings, retrieving tickets, and displaying seat allocation.</p>
                        <div className="project-buttons">
                        <a href="https://sandewdi-portfolio.vercel.app/" className="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            <p>Live Demo</p>
                        </a>
                        <a href="https://github.com/GSNowanyaFonseka/Sandewdi-Portfolio" className="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                            </svg>
                            <p>GitHub</p>
                        </a>
                        </div>
                    </div>
                </div>
    
                <div className="project">
                    <img src={studentgradetracker} alt="Project Image"/>
                    <div className="project-content">
                        <h1>Student grade tracker</h1>
                        <p>The project involves creating a Student Grade Tracker application using JavaFX, which offers various functionalities like record addition, deletion, updating, and clearing, facilitating efficient management and tracking of students' grades.</p>
                        <div className="project-buttons">
                        <a href="https://sandewdi-portfolio.vercel.app/" className="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            <p>Live Demo</p>
                        </a>
                        <a href="https://github.com/GSNowanyaFonseka/Sandewdi-Portfolio" className="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                            </svg>
                            <p>GitHub</p>
                        </a>
                        </div>
                    </div>
                </div>
    
                <div className="project">
                    <img src={progressionoutcome} alt="Project Image"/>
                    <div className="project-content">
                        <h1>Progression Outcome</h1>
                        <p>This project involves developing a Progression Outcome Application using Python. The application allows users to input credits and outputs the progression status based on the entered data. Additionally, it visualizes all the progression outcomes in a histogram</p>
                        <div className="project-buttons">
                        <a href="https://sandewdi-portfolio.vercel.app/" className="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            <p>Live Demo</p>
                        </a>
                        <a href="https://github.com/GSNowanyaFonseka/Sandewdi-Portfolio" className="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                            </svg>
                            <p>GitHub</p>
                        </a>
                        </div>
                    </div>
                </div>
                </div>
        </section>
  );
};

export default Projects