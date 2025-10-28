// components/Contact.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(contactRef.current.children,
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Form field animations
    const formFields = formRef.current.querySelectorAll('input, textarea, button');
    gsap.fromTo(formFields,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.5 }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" ref={contactRef} className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>
              I'm always interested in new opportunities and exciting projects.
              Feel free to reach out if you'd like to collaborate!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong> manish93506@gmail.com
              </div>
              <div className="contact-item">
                <strong>Phone:</strong> +91 70151 89739
              </div>
              <div className="contact-item">
                <strong>Location:</strong> Samalkha, Panipat, Haryana, India(132101)
              </div>
            </div>
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;