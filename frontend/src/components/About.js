import React from 'react';
import { useScrollAnimation } from '../utils/scrollAnimation';
import CountUp from './CountUp';
import './About.css';

const About = () => {
  useScrollAnimation();
  
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title animate-on-scroll from-bottom">About Me</h2>
        <div className="about-content">
          <div className="about-text animate-on-scroll">
            <p>
              I'm a passionate Full Stack Developer with expertise in modern web technologies. 
              Currently pursuing B.E in Computer Science and Design from Sri Krishna College 
              of Engineering and Technology, Coimbatore.
            </p>
            <p>
              I specialize in building scalable web applications using React.js for frontend 
              and Spring Boot for backend development.
            </p>
            <p>
              Passionate about continuous learning and staying updated with latest web development trends. 
              Always eager to tackle complex problems and collaborate with innovative teams to deliver 
              exceptional user experiences.
            </p>
            <div className="education">
              <h3>Education</h3>
              <div className="education-item">
                <h4>B.E, Computer Science and Design</h4>
                <p>Sri Krishna College of Engineering and Technology</p>
                <p>Coimbatore, Tamil Nadu</p>
              </div>
            </div>

          </div>
          <div className="about-sidebar animate-on-scroll from-right">
            <div className="about-stats">
              <div className="stat">
                <h3><CountUp value={4} suffix="+" /></h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3><CountUp value={3} suffix="+" /></h3>
                <p>Years Learning</p>
              </div>
              <div className="stat">
                <h3><CountUp value={100} suffix="%" /></h3>
                <p>Dedication</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
