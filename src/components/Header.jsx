// components/Header.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Header.css';

const Header = () => {
  const headerRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(navRef.current.children,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, delay: 0.5 }
    );
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header ref={headerRef} className="header">
      <div className="container">
        <div className="logo">
          <span>Portfolio</span>
        </div>
        <nav ref={navRef} className="nav">
          <button onClick={() => scrollToSection('home')}>Home</button>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('skills')}>Skills</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;