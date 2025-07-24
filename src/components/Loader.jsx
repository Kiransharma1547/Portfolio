
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loader = () => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(textRef.current, 
      { 
        scale: 0,
        rotation: -180,
        opacity: 0 
      },
      { 
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1.5,
        ease: "back.out(1.7)"
      }
    )
    .to(textRef.current, {
      scale: 1.2,
      duration: 0.5,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    })
    .to(loaderRef.current, {
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      ease: "power2.inOut"
    });

  }, []);

  return (
    <div ref={loaderRef} className="loader-container">
      <div ref={textRef} className="loader-text glitch" data-text="KS">
        KS
      </div>
    </div>
  );
};

export default Loader;
