import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Technologies = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const techRef = useRef(null);

  const technologies = [
    { name: "HTML", color: "#E34F26" },
    { name: "CSS", color: "#1572B6" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "Python", color: "#3776AB" },
    { name: "Linux", color: "#FCC624" },
    { name: "Gradio", color: "#FF6B6B" },
    { name: "OpenAI", color: "#00A67E" }
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(techRef.current.children,
      { 
        y: 100, 
        opacity: 0, 
        scale: 0.5,
        rotation: 180
      },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        rotation: 0,
        duration: 1, 
        stagger: 0.1, 
        ease: "back.out(1.7)" 
      },
      "-=0.5"
    );

    // Floating animation
    technologies.forEach((_, index) => {
      gsap.to(`.tech-item-${index}`, {
        y: -20,
        duration: 2 + (index * 0.2),
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: index * 0.2
      });
    });

  }, []);

  return (
    <section id="technologies" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-6xl font-black text-center mb-16 group">
          Technologies I <span className="group-hover:neon-text transition-all duration-300">Master</span>
        </h2>

        <div ref={techRef} className="flex flex-wrap justify-center items-center gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className={`tech-item-${index} card-gradient p-6 rounded-2xl hover:neon-glow transition-all duration-300 group cursor-pointer`}
              style={{
                '--tech-color': tech.color
              }}
            >
              <div className="text-center">
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}40)`,
                    border: `2px solid ${tech.color}`,
                    color: tech.color
                  }}
                >
                  {tech.name.charAt(0)}
                </div>
                <h3 
                  className="text-lg font-bold group-hover:scale-105 transition-transform duration-300"
                  style={{ color: tech.color }}
                >
                  {tech.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;