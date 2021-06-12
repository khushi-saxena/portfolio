import React from 'react';
import "./Contact.css";
import Header from '../Header/Header';
import FooterLink from '../Footer/FooterLink';
import ContactVector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import medium from './../../assets/me.png';
import web from './../../assets/web.png';



const Contact = () => {
    return (
        <div className="section-container">
             <Header
         heading="Get in Touch"
         details="Feel free to drop me an email."
        />
        <div className="contact-form-container">
            <form className="contact-form" action="https://formspree.io/f/moqywjzp"
  method="POST">
                <input 
                type="email"
                placeholder="Your Email ID"
                name="_replyto"
                className="input-box email-input"/>

                <textarea
                type="text"
                placeholder="Your message"
                name="message"
                className="input-box body-input">

                </textarea>
            <button type="submit" className="contact-btn">Send Email</button>
            </form>
        </div>

        <div className="social-icons-container">
          <a href="https://github.com/Khushi0321" className="social-icon">
              <img src={github} alt="social"/>
          </a>
          <a href="https://www.linkedin.com/in/khushi321/" className="social-icon">
              <img src={linkedin} alt="social"/>
          </a>
          <a href="https://khushi321.medium.com/" className="social-icon">
              <img src={medium} alt="social"/>
          </a>
          <a href="https://khushi0321.github.io/portfolio/#/" className="social-icon">
              <img src={web} alt="social"/>
          </a>


        </div>
        <FooterLink
        phrase="Read more "
        link=" about me."
        toAdress="/about"/>

<div className='vector-frame'>
                <img
                    src={ContactVector}
                    alt='vector'
                    className='about-vector'
                />
            </div>
        </div>
        
    )
}

export default Contact
