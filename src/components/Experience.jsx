import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const timelineRef = useRef(null);

  const experiences = [
    {
      type: "education",
      title: "BTech Computer Science Engineering",
      organization: "University",
      period: "2024 - Ongoing",
      location: "India",
      description: "Currently pursuing Bachelor of Technology in Computer Science Engineering with focus on web development, AI, and software engineering principles.",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-600"
    },
    {
      type: "achievement",
      title: "Triskaideka Hackathon",
      organization: "Tech Event",
      period: "2024",
      location: "India",
      description: "Participated in Triskaideka hackathon, showcasing innovative solutions and collaborative problem-solving skills in a competitive environment.",
      icon: <Award className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600"
    },
    {
      type: "achievement",
      title: "Innovesta Hackathon",
      organization: "Innovation Challenge",
      period: "2024",
      location: "India",
      description: "Competed in Innovesta hackathon, demonstrating creativity and technical expertise in developing cutting-edge solutions.",
      icon: <Award className="w-6 h-6" />,
      color: "from-green-500 to-teal-600"
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
    .fromTo(timelineRef.current.children,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.3, ease: "power3.out" },
      "-=0.5"
    );

  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-6xl font-black text-center mb-16 group">
          Experience & <span className="group-hover:neon-text transition-all duration-300">Education</span>
        </h2>

        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-600"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start mb-12 last:mb-0">
              {/* Timeline dot */}
              <div className={`absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} border-4 border-gray-900 z-10`}></div>

              {/* Content */}
              <div className="ml-20 card-gradient p-6 rounded-2xl hover:neon-glow transition-all duration-300 group w-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.color} text-white`}>
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-gray-400 font-medium">{exp.organization}</p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center space-x-1 mb-1">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;