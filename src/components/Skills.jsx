import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 }
      ],
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Backend/Logic",
      skills: [
        { name: "Python", level: 80 },
        { name: "C", level: 75 }
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Environment",
      skills: [
        { name: "Linux", level: 85 }
      ],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Tools",
      skills: [
        { name: "OpenAI", level: 70 },
        { name: "Gradio", level: 75 }
      ],
      color: "from-orange-500 to-red-600"
    }
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
    .fromTo(skillsRef.current.children,
      { y: 50, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)" },
      "-=0.5"
    );

    // Animate skill bars
    skillCategories.forEach((category, categoryIndex) => {
      category.skills.forEach((skill, skillIndex) => {
        gsap.fromTo(`.skill-bar-${categoryIndex}-${skillIndex}`,
          { width: "0%" },
          {
            width: `${skill.level}%`,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              toggleActions: "play none none reverse"
            },
            delay: (categoryIndex * 0.2) + (skillIndex * 0.1)
          }
        );
      });
    });

  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-6xl font-black text-center mb-16 group">
          My <span className="group-hover:neon-text transition-all duration-300">Skills</span>
        </h2>

        <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="card-gradient p-6 rounded-2xl hover:neon-glow transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold mb-6 text-center group-hover:text-cyan-400 transition-colors duration-300">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`skill-bar-${categoryIndex}-${skillIndex} h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-300`}
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;