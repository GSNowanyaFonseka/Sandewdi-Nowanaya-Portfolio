import React from 'react'
import './Education.css';
import iit from "../assets/IIT.png"
import uow from "../assets/UOW.png"


const Education = () => {
  return (
        <section id="education">
            <h1 class="title">Educational Qualifications</h1>
            <div class="education-container">
                <div class="education-content one">
                        <img src={iit} alt="iit-logo" id="iit"/>
                        <h1>IIT</h1>
                        <h3>Foundation Degree</h3>
                        <h4>Jan 2023 - Aug 2023</h4>
                        <p>Successfully attained a Merit Pass in the Foundation Certificate 
                            for Higher Education at the Informatics Institute of Technology (IIT). Equipped with a solid academic foundation.</p>
                </div>
                <div class="education-content two">
                        <img src={uow} alt="uow-logo" id="uow"/>
                        <h1>University of Westminster</h1>
                        <h3>BSc (Hons) in Computer Science</h3>
                        <h4>2023 - Current</h4>
                        <p>Currently a second year computer science student with a strong passion for data science and web development.</p>
                </div>
            </div>
        </section>
  )
}

export default Education