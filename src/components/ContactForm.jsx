import React from 'react'
import './Contact.css'
import contact from '../assets/contact.png'

const Contact = () => {
  return (
    <div>
  <h1 className="title">Contact me</h1>
        <section id="contact-form">
            
            <div className="item">
                <div className="contact">
                    <div className="first-text">Let's get in touch</div>
                    <img src={contact} className="image"/>
                    <div className="social-links">
                        <div className="next">
                            <p><i className="fa-solid fa-envelope"></i><a href="mailto:sandewdi.20222033@iit.ac.lk">sandewdi.20222033@iit.ac.lk</a></p>
                            <p><i className="fa-solid fa-square-phone"></i>+94 710783342</p>
                        </div>
                    </div>
                    <a href="./media/Sandewdi-Nowanya-CV.pdf" download className="button">Download CV</a>
                </div>
                <div className="submit-form">
                    <h4 className="third-text text">Contact Us</h4>
                    <form name="submit-to-google-sheet">
                            <input type="text" name="Name" className="input" placeholder="Name" required/>
                            <input type="email" name="Email" className="input" placeholder="Email" required/>
                            <textarea name="Message" id="message" className="input" placeholder="Message" required cols="30" rows="10"></textarea>
                            <button type="submit" className="submit">Submit</button>
                            <span id="msg"></span>
                    </form>
                </div>
            </div>
        </section>   </div>
  );
};

export default Contact;