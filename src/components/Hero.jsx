import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Github, Linkedin, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import CodingModel from '@/components/CodingModel';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const socialRef = useRef(null);
  const { toast } = useToast();

  useEffect(() => {
    const tl = gsap.timeline({ delay: 4 });

    tl.fromTo(titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(descriptionRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.3"
    )
    .fromTo(buttonsRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "power3.out" },
      "-=0.3"
    )
    .fromTo(socialRef.current.children,
      { scale: 0, rotation: 180 },
      { scale: 1, rotation: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" },
      "-=0.3"
    );

  }, []);

  const handleDownloadResume = () => {
    toast({
      title: "🚧 Resume Download",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleViewProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div>
            <h1 ref={titleRef} className="text-5xl md:text-7xl font-black mb-4 group">
              <span className="block">Kiran</span>
              <span className="block group-hover:neon-text transition-all duration-300" data-text="Sharma">Sharma</span>
            </h1>
            <h2 ref={subtitleRef} className="text-xl md:text-2xl text-gray-300 mb-6">
              Front-End Developer & AI Enthusiast
            </h2>
            <p ref={descriptionRef} className="text-lg text-gray-400 max-w-lg leading-relaxed">
              Turning code into experience with clean UI, creative logic, and future-ready web tech.
            </p>
          </div>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={handleViewProjects}
              className="breathing-effect bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 neon-glow"
            >
              <Eye className="mr-2" size={20} />
              View Projects
            </Button>
            <Button 
              onClick={handleDownloadResume}
              variant="outline" 
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>

          <div ref={socialRef} className="flex space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 neon-glow floating"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 neon-glow floating"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Right Content - 3D Model and Photo */}
        <div className="relative">
          <div className="relative z-10">
            <CodingModel />
          </div>
          
          {/* Profile Photo */}
          <div className="absolute top-4 right-4 z-20">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-cyan-400 neon-glow floating">
              <img  
                alt="Kiran Sharma - Front-End Developer"
                className="w-full h-full object-cover"
               src="https://storage.googleapis.com/hostinger-horizons-assets-prod/5105070e-5b8c-4d3f-a6e6-58d3e2e1fdaa/e717602ef332aeaf7cfb3c30310fb90d.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;