// components/Footer.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Footer.css';

const Footer = () => {
  const footerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(footerRef.current,
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          end: "bottom bottom",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Stagger animation for footer content
    gsap.fromTo(contentRef.current.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.3,
        ease: "power2.out"
      }
    );
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Manish9350', icon: '🐙' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/manishverma2003/', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
    { name: 'Instagram', url: 'https://instagram.com', icon: '📷' }
  ];

  return (
    <footer ref={footerRef} className="footer">
      <div className="container">
        <div ref={contentRef} className="footer-content">
          
          {/* Main Footer Section */}
          <div className="footer-main">
            <div className="footer-info">
              <h3 className="footer-logo">John Doe</h3>
              <p className="footer-description">
                Full Stack Developer passionate about creating amazing digital experiences 
                and solving complex problems through code.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.name}
                  >
                    <span className="social-icon">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4>Quick Links</h4>
                <ul>
                  <li><button onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>Home</button></li>
                  <li><button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About</button></li>
                  <li><button onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>Skills</button></li>
                  <li><button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>Projects</button></li>
                </ul>
              </div>

              <div className="link-group">
                <h4>Services</h4>
                <ul>
                  <li><a href="#web-development">Web Development</a></li>
                  <li><a href="#mobile-apps">Mobile Apps</a></li>
                  <li><a href="#ui-ux">UI/UX Design</a></li>
                  <li><a href="#consulting">Consulting</a></li>
                </ul>
              </div>

              <div className="link-group">
                <h4>Contact Info</h4>
                <ul className="contact-info">
                  <li>📧 manish93506@gmail.com</li>
                  <li>📱 +91 70151 89739</li>
                  <li>📍 Samalkha, Panipat, haryana, India (132101)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>&copy; 2025 Manish Verma. All rights reserved.</p>
            </div>
            
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <button onClick={scrollToTop} className="back-to-top">
                ↑ Back to Top
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;