import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectsRef = useRef(null);
  const { toast } = useToast();

  const projects = [
    {
      title: "AI Chatbot",
      description: "Intelligent conversational AI built with Gradio and OpenAI API, featuring natural language processing and contextual responses.",
      technologies: ["Python", "Gradio", "OpenAI", "NLP"],
      image: "Modern AI chatbot interface with glowing neural network visualization",
      gradient: "from-cyan-500 to-blue-600",
      github: "https://github.com/Kiransharma1547/Chatbot",
      demo: "https://github.com/Kiransharma1547/Chatbot"
    },
    {
      title: "LinuxWorld",
      description: "LinuxWorld project repository.",
      technologies: ["Linux", "Bash", "System"],
      image: "LinuxWorld project screenshot",
      gradient: "from-yellow-500 to-red-600",
      github: "https://github.com/Kiransharma1547/LinuxWorld",
      demo: "https://github.com/Kiransharma1547/LinuxWorld"
    },
    {
      title: "My-portfolio",
      description: "Personal portfolio website project.",
      technologies: ["React", "TailwindCSS", "GSAP"],
      image: "Portfolio website screenshot",
      gradient: "from-green-500 to-teal-600",
      github: "https://github.com/Kiransharma1547/My-portfolio",
      demo: "https://github.com/Kiransharma1547/My-portfolio"
    },
    {
      title: "Pythonmenu.py",
      description: "Python menu-based CLI tool.",
      technologies: ["Python", "CLI"],
      image: "Pythonmenu.py CLI screenshot",
      gradient: "from-purple-500 to-pink-600",
      github: "https://github.com/Kiransharma1547/Pythonmenu.py",
      demo: "https://github.com/Kiransharma1547/Pythonmenu.py"
    },
    {
      title: "Kiransharma1547",
      description: "Personal GitHub profile and code collection.",
      technologies: ["GitHub", "Portfolio"],
      image: "GitHub profile screenshot",
      gradient: "from-blue-500 to-indigo-600",
      github: "https://github.com/Kiransharma1547/Kiransharma1547",
      demo: "https://github.com/Kiransharma1547/Kiransharma1547"
    },
    {
      title: "myportfolio",
      description: "Another portfolio project.",
      technologies: ["React", "Portfolio"],
      image: "myportfolio screenshot",
      gradient: "from-pink-500 to-yellow-500",
      github: "https://github.com/Kiransharma1547/myportfolio",
      demo: "https://github.com/Kiransharma1547/myportfolio"
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
    .fromTo(projectsRef.current.children,
      { y: 100, opacity: 0, rotationX: 45 },
      { y: 0, opacity: 1, rotationX: 0, duration: 1, stagger: 0.3, ease: "back.out(1.7)" },
      "-=0.5"
    );

  }, []);

  const handleProjectClick = (projectTitle) => {
    toast({
      title: `🚧 ${projectTitle}`,
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-6xl font-black text-center mb-16 group">
          Featured <span className="group-hover:neon-text transition-all duration-300">Projects</span>
        </h2>

        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="card-gradient rounded-2xl overflow-hidden hover:neon-glow transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img  
                  alt={`${project.title} project screenshot`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                 src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.gradient} text-white`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button 
                      size="sm" 
                      className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-cyan-500 hover:to-purple-600 transition-all duration-300"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                    >
                      <Github size={16} />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;