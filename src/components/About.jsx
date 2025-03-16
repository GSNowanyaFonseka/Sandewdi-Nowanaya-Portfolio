import React, { useEffect, useRef } from 'react';
import aboutimage from '../assets/about.jpg';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    const textObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('text-visible');
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    // Observe the main section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observe paragraphs for text animation
    document.querySelectorAll('.animated-text').forEach((text) => {
      textObserver.observe(text);
    });

    return () => {
      observer.disconnect();
      textObserver.disconnect();
    };
  }, []);

  return (
    <section id="about" ref={sectionRef}>
      <h1 className="title">About Me</h1>
      <div className="about-container">
        <div className="image-container scale-in">
          <img src={aboutimage} alt="about" className="floating"/>
        </div>
        <div className="text-content">
          <p className="about-text animated-text">
            I am Sandewdi Nowanya, a passionate and 
            dedicated Computer Science student with a strong interest in web development and databases. 
            Currently pursuing my degree at University of Westminster.
            My academic journey has equipped me with a solid foundation in various areas, including object-oriented programming (OOP)
            concepts, web development, database management systems, algorithms, and server-side programming.
          </p>
          <p className="about-text animated-text">
            In addition to my technical skills, I have pursued courses and earned certificates in web development, data visualization,
            utilizing tools such as PowerBI and Tableau. These courses and projects have sharpened my ability to transform complex data into 
            insightful visualizations, enhancing decision-making processes.
          </p>
          <p className="about-text animated-text">
            Beyond my technical expertise, I have developed strong soft skills such as teamwork, communication, problem-solving, and adaptability. 
            These skills have been honed through various group projects and collaborative efforts, ensuring I can effectively contribute to
            and excels in any team environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;