// components/Hero.js
import React from 'react';
import { useTextAnimation } from '../hooks/useTextAnimation';
import './Hero.css';

// Import your image - make sure the path is correct
// import heroImage from '../assets/1.jpeg'; // Update this path to match your file structure

const Hero = () => {
  const titleRef = useTextAnimation('words');
  const subtitleRef = useTextAnimation('chars');

  const handleWorkClick = () => {
    document.getElementById('projects')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const handleContactClick = () => {
    window.open('https://www.linkedin.com/in/manishverma2003/', '_blank', 'noopener noreferrer');
  };

  const handleDownloadResume = () => {
    // Add your resume download logic here
    // const resumeUrl = '/resume.pdf';
    // window.open(resumeUrl, '_blank');
    
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">Available for Freelance</div>
          <h1 ref={titleRef} className="hero-title display-font">
            Hi, I'm <span className="accent">Manish Verma</span>
          </h1>
          <h2 ref={subtitleRef} className="hero-subtitle accent-font">
            Full Stack Developer & UI/UX Designer
          </h2>
          <p className="hero-description body-font">
            I create immersive digital experiences with cutting-edge 
            technologies and thoughtful design principles. Passionate about 
            building responsive, user-friendly applications that make an impact.
          </p>
          <div className="cta-group">
            <button onClick={handleWorkClick} className="cta-button magnetic-btn">
              <span>View My Work</span>
            </button>
            <button onClick={handleContactClick} className="cta-button secondary magnetic-btn">
              <span>Connect on LinkedIn</span>
            </button>
            <button onClick={handleDownloadResume} className="cta-button secondary magnetic-btn">
              <span>Download Resume</span>
            </button>
          </div>
          
          <div className="hero-socials">
            <a href="https://github.com/Manish9350" target="_blank" rel="noopener noreferrer" className="social-link">
              <span>GitHub</span>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
              <span>Twitter</span>
            </a>
            <a href="https://www.linkedin.com/in/manishverma2003/" target="_blank" rel="noopener noreferrer" className="social-link">
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-image-container">
            {/* Use actual image */}
            <img 
              src='1.jpeg' 
              alt="Manish Verma - Full Stack Developer"
              className="hero-image"
            />
            
            {/* Graphic elements overlay */}
            <div className="graphic-overlay">
              <div className="graphic-element graphic-1"></div>
              <div className="graphic-element graphic-2"></div>
              <div className="graphic-element graphic-3"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;