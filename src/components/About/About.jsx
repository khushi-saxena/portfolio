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
        details="MSCS@ SDSU | Former Software Engineer @ UBS | vGHC Scholar'21 | Azure Developer Community Lead"/>
        <div className="about-main">
            <div className="about-main-left">
            <h3 className="about-sub-head">My Experience</h3>
              <p className="about details">
                <b>Software Engineer, UBS August 2023 - August 2024</b>
                <ul>
                <li> Defined and Implemented the Oracle to PostgreSQL migration strategy for the CRR application.</li>
                <li> Led the creation and management of the database deployment package, ensuring smooth deployment and functionality.</li>
                <li> Reengineered the existing OracleDB structure into a streamlined PostgreSQL schema, managing to reduce data retrieval
                time by 30 percent through optimized indexing strategies while ensuring all functionality remained intact during migration.</li>
                </ul>
                <i>Tech: OracleDB, PostgreSQL, Powershell, Azure</i><br></br><br></br>
               
                <b>Research Intern, Defence Research and Development Organisation (DRDO) July 2022 - December 2022</b>
                <ul>
                  <li>Designed a facial recognition model to identify and verify individuals using facial features, leveraging the Haar Cascades
                  algorithm for precise face detection in images and videos.</li> 
                 <li> Engineered the model to capture, analyze, and compare facial patterns, enhancing the reliability of identity verification
                 processes</li> 
                  <li>Optimized theface detection process by refining algorithm parameters, improving accuracy and detection speed in various
                  lighting and environmental conditions.</li>
                </ul>
                 
                  <i>Tech : Python,Face Recognition,Machine Learning</i><br></br><br></br>

                  <b>Software Development Engineer Intern, DG Techno Soft June 2021 - September 2021</b>
                  <ul>
                  <li> Crafted a web application for a coaching center using React.js, enabling students to easily access information on current
                  courses, classes, and lectures.</li>
                  <li> Enhanced user experience by implementing a dynamic interface, allowing students to navigate and find relevant information about their coursework efficiently.
                  </li>
                  <li>Increased student engagement and usage through a responsive design, tailored to meet the needs of students seeking
                  course-related updates.
                    </li></ul> {/* <a className="about-link-element" href="https://drive.google.com/file/d/1aCpj38kxO8S2cMg-6hZc2pqv1MndPk0u/view">.Check here!</a> */}
              </p>
              <h3 className="about-sub-head">Open Source Contributor</h3>
              <p className="about details">
             I am passionate about open source development and have actively contributed to various projects. This involvement has not only enhanced my technical skills but also allowed me to collaborate with diverse communities, fostering innovation and sharing knowledge.Check out my{''}
                  <a className="about-link-element" href="https://github.com/Khushi-saxena"> Contributions!</a>
              </p>
              <h3 className="about-sub-head">Blogger</h3>
              <p className="about details">
                  I write about personal growth and tech.Check out my{''}
                  <a className="about-link-element" href="https://medium.com/@khushi-saxena"> Blogs here!</a>
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
