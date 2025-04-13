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
            dedicated Computer Science student with a strong interest in web development, 
            data analysis, and artificial intelligence. I enjoy turning ideas into real-world applications, and I’m passionate about building 
            solutions that are both innovative and practical.
          </p>
          <p className="about-text animated-text">
          Over time, I’ve worked on a variety of projects—from developing full-stack web applications using the MERN stack and Spring Boot, 
          to analyzing real-world datasets using Python, SQL, and Power BI. These experiences have helped me strengthen my skills in both front-end and back-end development, 
          as well as data processing and visualization.
          </p>
          <p className="about-text animated-text">
          I’m proficient in Java, Python, PHP, SQL, React.js, Node.js, and Spring Boot, and I bring strong problem-solving, teamwork, and communication skills to every project 
          I take on. I'm constantly learning and adapting, with a drive to grow both personally and professionally in the tech industry.
          </p>
          <p className="about-text animated-text">
          Let’s build something impactful together !
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;