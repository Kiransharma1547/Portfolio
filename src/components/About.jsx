import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Brain, Terminal } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef(null);

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
    .fromTo(contentRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(cardsRef.current.children,
      { y: 50, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)" },
      "-=0.3"
    );

  }, []);

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Front-End Passion",
      description: "Crafting beautiful, responsive user interfaces with modern web technologies"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Enthusiast",
      description: "Building intelligent UIs and exploring the intersection of AI and web development"
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "Linux Explorer",
      description: "Deep diving into Linux environments and command-line mastery"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-6xl font-black text-center mb-16 group">
          About <span className="group-hover:neon-text transition-all duration-300">Me</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate front-end developer with a deep love for creating exceptional user experiences. 
              My journey in web development is driven by curiosity and a constant desire to learn and innovate.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently pursuing BTech in Computer Science Engineering, I specialize in building AI-powered 
              user interfaces and exploring the endless possibilities of modern web technologies. When I'm not 
              coding, you'll find me diving deep into Linux systems and experimenting with new frameworks.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I believe in writing clean, efficient code that not only works but tells a story. Every project 
              is an opportunity to push boundaries and create something meaningful.
            </p>
          </div>

          <div ref={cardsRef} className="space-y-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="card-gradient p-6 rounded-2xl hover:neon-glow transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-cyan-400 group-hover:text-purple-400 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;