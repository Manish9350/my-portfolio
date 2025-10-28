// components/Cursor.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Cursor.css';

const Cursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const trailRefs = useRef([]);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    let trailCount = 0;

    // Move cursor function
    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Create trail effect
      if (trailCount % 3 === 0) {
        createTrail(mouseX, mouseY);
      }
      trailCount++;

      // Update cursor position immediately
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    };

    // Create trail elements
    const createTrail = (x, y) => {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = x + 'px';
      trail.style.top = y + 'px';
      document.body.appendChild(trail);

      trailRefs.current.push(trail);

      // Remove trail after animation
      setTimeout(() => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
        trailRefs.current = trailRefs.current.filter(t => t !== trail);
      }, 600);
    };

    // Animation loop for smooth follower
    const animate = () => {
      // Smooth follower movement
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;

      follower.style.left = followerX + 'px';
      follower.style.top = followerY + 'px';

      requestAnimationFrame(animate);
    };

    // Hover effects
    const handleMouseEnter = (e) => {
      const target = e.target;
      
      if (target.matches('button, .cta-button, .magnetic-btn')) {
        cursor.classList.add('hover', 'hover-btn');
      } else if (target.matches('a, .nav-btn')) {
        cursor.classList.add('hover', 'hover-link');
      } else if (target.matches('input, textarea, select')) {
        cursor.classList.add('hover', 'typing');
      } else if (target.matches('.project-card, .skill-item')) {
        cursor.classList.add('hover', 'hover-image');
      } else if (target.matches('p, h1, h2, h3, h4, h5, h6, span')) {
        cursor.classList.add('hover-text');
      }
    };

    const handleMouseLeave = (e) => {
      cursor.classList.remove('hover', 'hover-btn', 'hover-link', 'hover-image', 'hover-text', 'typing');
    };

    // Click effect
    const handleMouseDown = () => {
      cursor.classList.add('click');
      follower.classList.add('click');
    };

    const handleMouseUp = () => {
      cursor.classList.remove('click');
      follower.classList.remove('click');
    };

    // Add event listeners
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Add hover listeners to specific elements
    const hoverElements = document.querySelectorAll(
      'button, a, .cta-button, .magnetic-btn, .nav-btn, input, textarea, select, .project-card, .skill-item, p, h1, h2, h3, h4, h5, h6'
    );
    
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Start animation
    animate();

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);

      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });

      // Clean up trail elements
      trailRefs.current.forEach(trail => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      });
      trailRefs.current = [];
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor"></div>
      <div ref={followerRef} className="cursor-follower"></div>
    </>
  );
};

export default Cursor;