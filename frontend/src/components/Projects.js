import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useScrollAnimation } from '../utils/scrollAnimation';
import CountUp from './CountUp';
import foodDeliveryPreview from '../assets/food-delivery-preview.png';
import eduStayPreview from '../assets/edustay-preview.png';
import learnBasePreview from '../assets/learnbase-preview.png';
import './Projects.css';

const Projects = () => {
  useScrollAnimation();
  
  const projects = [
    {
      title: 'Food Delivery System',
      description: 'Responsive React-based food delivery interface with restaurant browsing, cart management, and order placement. Implemented Hooks Context for state management, integrated REST APIs for live order updates.',
      tech: ['React', 'JavaScript', 'CSS'],
      github: 'https://github.com/Divagarkathiresan/food-delivery',
      live: 'https://food-delivery-frontend-uixs.onrender.com',
      type: 'Frontend - UI/UX - Responsive Design',
      image: foodDeliveryPreview,
      imageAlt: 'Foodie Bee food delivery system interface'
    },
    {
      title: 'LearnBase',
      description: 'Full-stack LMS using Spring Boot and React. Developed APIs for authentication, courses, assignments, and roles (student/admin). Implemented JWT + RBAC security and built a responsive frontend with Hooks/Context.',
      tech: ['React', 'Spring Boot', 'MySQL', 'JWT', 'REST API'],
      github: 'https://github.com/Divagarkathiresan/Learning-Management-System',
      live: 'https://learning-management-system-cn9j.onrender.com',
      type: 'Full Stack - System Architecture',
      image: learnBasePreview,
      imageAlt: 'LearnBase learning management system interface'
    },
    {
      title: 'EduStay',
      description: 'Full-stack accommodation management system using Spring Boot and React. REST APIs for authentication, property listings, bookings, and role-based access. JWT-based authentication with RBAC security.',
      tech: ['React', 'Spring Boot', 'MySQL', 'JWT', 'REST API'],
      github: 'https://github.com/Divagarkathiresan/EduStay/tree/postgreSql',
      live: 'https://edustay-frontend-56xj.onrender.com',
      type: 'Full Stack',
      image: eduStayPreview,
      imageAlt: 'EduStay accommodation search interface'
    },
    {
      title: 'GlycoSense',
      description: 'AI-powered virtual health assistant for diabetes risk prediction. Integrated machine learning models, explainable AI (XAI), analytics dashboards, and conversational interfaces to deliver personalized preventive healthcare insights.',
      tech: ['React', 'FastAPI', 'Machine Learning', 'XAI', 'Python'],
      github: 'https://github.com/Divagarkathiresan',
      type: 'AI / ML - Full Stack - Healthcare'
    },
    {
      title: 'PolyQuery',
      description: 'An AI-powered multilingual QA system that lets you ask questions about any document in your language. Upload PDFs or text files, ask in any of 10+ languages, and get intelligent answers powered by Mistral AI and semantic search. PolyQuery automatically translates, analyzes, and responds—making document comprehension truly borderless.',
      tech: ['FastAPI', 'FAISS', 'SentenceTransformers', 'Google Gemini AI', 'Python'],
      github: 'https://github.com/Divagarkathiresan',
      type: 'AI / NLP - Multilingual - Document Intelligence'
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title animate-on-scroll from-bottom">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card animate-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {project.image && (
                <div className="project-preview">
                  <img src={project.image} alt={project.imageAlt} />
                  <span className="preview-label">Live interface</span>
                </div>
              )}
              <div className="project-header">
                <div className="project-type">{project.type}</div>
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              {project.metric && (
                <div className="project-number" aria-label={`${project.metric.value}${project.metric.suffix || ''} ${project.metric.label}`}>
                  <strong><CountUp value={project.metric.value} suffix={project.metric.suffix || ''} /></strong>
                  <span>{project.metric.label}</span>
                </div>
              )}
              {project.metrics && (
                <div className="project-metrics">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {project.metrics.map((metric, metricIndex) => (
                      <li key={metricIndex}>{metric}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> View Code
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
