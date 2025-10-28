// hooks/useTextAnimation.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export const useTextAnimation = (type = 'words') => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const split = new SplitText(textRef.current, {
        type: type,
        linesClass: type === 'lines' ? 'line' : '',
        wordsClass: type === 'words' ? 'word' : '',
        charsClass: type === 'chars' ? 'char' : ''
      });

      gsap.from(split[type], {
        duration: 1,
        y: 100,
        opacity: 0,
        rotationX: -90,
        stagger: 0.05,
        ease: 'power3.out',
        delay: 0.2
      });
    }
  }, [type]);

  return textRef;
};