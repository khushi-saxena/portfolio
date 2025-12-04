import React from 'react';
import FooterLink from '../Footer/FooterLink';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import sdsuLogo from './../../assets/sdsu_logo.png';
import ubsLogo from './../../assets/ubs_logo.png';

const About = () => {
  return (
    <div className="section-container">
      <Header
        heading="About Me."
        details="MSCS@ SDSU | Former Software Engineer @ UBS | vGHC Scholar'21 | Azure Developer Community Lead"
      />
      <div className="about-main">
        <h3 className="about-sub-head">My Experience</h3>

        <div className="experience-cards">
          {/* SDSU Experience Card */}
          <div className="experience-card">
            <div className="card-header">
              <img src={sdsuLogo} alt="SDSU Logo" className="company-logo" />
              <div className="card-title">
                <h4>Full Stack Developer (Part-Time)</h4>
                <p className="company-name">San Diego State University</p>
                <p className="duration">Jan 2025 – Present</p>
              </div>
            </div>
            <ul className="card-details">
              <li>Designed and deployed 300+ dynamic web pages & RESTful APIs using Python & Google Apps Script, building internal automation tools that reduced manual effort by 80% for 2,000+ users.</li>
              <li>Built AI-driven automation pipelines (OpenAI API + FastAPI + PostgreSQL) to streamline approvals, data synchronization, and reporting across 10+ university systems.</li>
              <li>Delivered new automation features weekly in an agile environment, integrating user feedback to improve developer productivity and workflow efficiency across academic systems.</li>
              <li>Analyzed workflow execution data to identify automation bottlenecks and implemented algorithmic optimizations reducing API latency by 40%.</li>
              <li>Partnered with stakeholders to identify user pain points and shipped new platform features that improved workflow efficiency and reduced support tickets by 40%.</li>
              <li>Owned end-to-end delivery of new REST and GraphQL APIs, integrating them into production React + FastAPI services used daily by 2,000+ users.</li>
            </ul>
            <div className="tech-stack">
              <span className="tech-label">Tech:</span> Python, FastAPI, React.js, PostgreSQL, CI/CD, OpenAI API
            </div>
          </div>

          {/* UBS Experience Card */}
          <div className="experience-card">
            <div className="card-header">
              <img src={ubsLogo} alt="UBS Logo" className="company-logo" />
              <div className="card-title">
                <h4>Software Engineer</h4>
                <p className="company-name">UBS</p>
                <p className="duration">Aug 2023 – Aug 2024</p>
              </div>
            </div>
            <ul className="card-details">
              <li>Engineered high-performance backend services in Java & SQL supporting distributed data pipelines, improving throughput, reliability, and observability under high-load conditions.</li>
              <li>Led Oracle → PostgreSQL migration using custom migration utilities, achieving 100% data consistency, &lt;2-hour downtime, and 30% query latency reduction through caching and indexing.</li>
              <li>Implemented CI/CD pipelines, automated regression tests, and telemetry monitoring (Azure DevOps + Docker) improving release reliability by 25%.</li>
              <li>Applied object-oriented design and design-pattern principles to modularize services, simplify onboarding, and enhance code maintainability.</li>
              <li>Collaborated in code reviews and implemented secure coding best practices to ensure data integrity and compliance with financial standards.</li>
              <li>Mentored interns on SQL optimization, code reviews, and clean-code practices fostering a culture of scalable, safe engineering.</li>
            </ul>
            <div className="tech-stack">
              <span className="tech-label">Tech:</span> Java, SQL, PostgreSQL, OracleDB, Azure DevOps, Docker, PowerShell, Git, CI/CD
            </div>
          </div>

          {/* DRDO Experience Card */}
          <div className="experience-card">
            <div className="card-header">
              <div className="company-logo-placeholder">DRDO</div>
              <div className="card-title">
                <h4>Research Intern</h4>
                <p className="company-name">Defence Research and Development Organisation</p>
                <p className="duration">Jul 2022 – Dec 2022</p>
              </div>
            </div>
            <ul className="card-details">
              <li>Designed and implemented a C++/Python simulation framework for concurrent edge systems, optimizing performance and reliability across heterogeneous hardware environments.</li>
              <li>Designed multi-threaded modules to test real-time data processing and fault recovery mechanisms under stress.</li>
              <li>Evaluated system robustness using Python (NumPy, OpenCV) and quantified performance metrics for edge-computing reliability.</li>
              <li>Explored early agent-based communication models for low-latency response — foundational to multi-agent LLM architectures and safe, reliable AI systems.</li>
            </ul>
            <div className="tech-stack">
              <span className="tech-label">Tech:</span> Python, NumPy, OpenCV, Multithreading, Real-Time Systems, Debugging Tools
            </div>
          </div>
        </div>
      </div>
      <FooterLink phrase="Check out my " link="projects!" toAdress="/projects" />
      <div className="vector-frame">
        <img src={aboutVector} className="about-vector" alt="about" />
      </div>
    </div>
  );
};

export default About;
