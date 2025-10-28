// components/About.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(contentRef.current.children,
      {
        x: -100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section id="about" ref={aboutRef} className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div ref={contentRef} className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with 3+ months of experience
              creating digital solutions. I love turning complex problems into
              simple, beautiful designs.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or enjoying outdoor activities.
            </p>
            <div className="stats">
              <div className="stat">
                <h3>5+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>3+</h3>
                <p>Months Experience</p>
              </div>
              {/* <div className="stat">
                <h3>30+</h3>
                <p>Happy Clients</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;