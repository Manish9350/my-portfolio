// components/Projects.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB featuring secure payments, user authentication, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://repository-images.githubusercontent.com/403509239/c50ef91e-f939-4304-ae06-f3e9725a23ad",
      liveDemo: "https://legendary-liger-faf6a1.netlify.app/",
      sourceCode: "https://github.com/Manish9350/college-project-E-Commerce-"
    },
    {
      title: "Uber Clone",
      description: "Full-stack ride-sharing application with real-time tracking, payment integration, and driver-passenger matching system.",
      tech: ["React.js", "Node.js", "MongoDB", "Socket.io"],
      image: "https://media.designrush.com/inspirations/725448/conversions/Uber-Image-1-preview.jpg",
      liveDemo: "#",
      sourceCode: "https://github.com/Manish9350/Uber-clone"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with beautiful data visualization, location-based forecasts, and interactive charts.",
      tech: ["React",  "API Integration"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      liveDemo: `https://weather-app-zeta-one-51.vercel.app/`,
      sourceCode: `https://github.com/Manish9350/weather-app`
    },
    {
      title: "Task Management App",
      description: "Collaborative task management platform with drag-drop functionality, team collaboration, and progress tracking.",
      tech: ["Vue.js", "Firebase", "SCSS", "PWA"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      liveDemo: "#",
      sourceCode: "#"
    }
  ];

  useEffect(() => {
    const projectCards = projectsRef.current?.querySelectorAll('.project-card');
    
    if (projectCards) {
      gsap.fromTo(projectCards,
        {
          y: 100,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Hover animations
      projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { 
            y: -15, 
            scale: 1.02,
            duration: 0.4, 
            ease: "power2.out" 
          });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { 
            y: 0, 
            scale: 1,
            duration: 0.4, 
            ease: "power2.out" 
          });
        });
      });
    }

    return () => {
      // Cleanup
      if (projectCards) {
        projectCards.forEach(card => {
          card.removeEventListener('mouseenter', () => {});
          card.removeEventListener('mouseleave', () => {});
        });
      }
    };
  }, []);

  const handleLiveDemo = (url) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  const handleSourceCode = (url) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <section id="projects" ref={projectsRef} className="projects">
      <div className="container">
        <h2 className="section-title" data-text="Featured Projects">
          Featured Projects
        </h2>
        <p className="section-subtitle">
          Here are some of my recent projects that showcase my skills and passion for development
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-img"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <button 
                      onClick={() => handleLiveDemo(project.liveDemo)}
                      className="project-btn live-demo"
                    >
                      <span>Live Demo</span>
                    </button>
                    <button 
                      onClick={() => handleSourceCode(project.sourceCode)}
                      className="project-btn source-code"
                    >
                      <span>Source Code</span>
                    </button>
                  </div>
                </div>
                <div className="project-number">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Projects Button */}
        <div className="projects-cta">
          <button className="view-more-btn magnetic-btn">
            <span>View All Projects</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;