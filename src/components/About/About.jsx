import React from 'react'
import FooterLink from '../Footer/FooterLink';
import Header from '../Header/Header'
import aboutVector from './../../assets/about_vector.png'
import "./About.css";
import hello from './../../assets/hello.gif';
const About = () => {
    return (
        <div className="section-container">
        <Header
        heading="About Me."
        details="Computer Engineering Undergraduate| Full-Stack Dev| Blogger"/>
        <div className="about-main">
            <div className="about-main-left">
            <h3 className="about-sub-head">My Experience</h3>
              <p className="about details">
                I had worked as an Full-Stack Dev Intern at Megahoot.com.There I Developed a website from scratch using React Framework,REST-APIs and developed ongoing projects and Made their UI better using different languages and framework
                  <a className="about-link-element" href="https://drive.google.com/file/d/1iZsfLebb1VesN8BK2CM1CJ-1VfIYjFRm/view">.Check here!</a>
              </p>
              <h3 className="about-sub-head">Open Source Contributor</h3>
              <p className="about details">
                  I am an Open Source enthusiast and had contributed to different projects.Check out my{''}
                  <a className="about-link-element" href="https://github.com/Khushi0321"> Contributions!</a>
              </p>
              <h3 className="about-sub-head">Blogger</h3>
              <p className="about details">
                  I write about personal growth and tech.Check out my{''}
                  <a className="about-link-element" href="https://khushi321.medium.com/"> Blogs here!</a>
              </p>
            </div>
            <div className="about-main-right">
 
              <img src={hello} alt="animation" className="about-anime"></img>
           
            </div>
        </div>
        <FooterLink
        phrase="Check out my "
        link="projects!"
        toAdress="/projects"
        />
        <div className="vector-frame">
          <img src={aboutVector} className="about-vector" alt="about"></img>
        </div>
        </div>
    )
}

export default About
