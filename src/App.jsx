import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Technologies from '@/components/Technologies';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import ParticleBackground from '@/components/ParticleBackground';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Kiran Sharma - Front-End Developer & AI Enthusiast</title>
        <meta name="description" content="Passionate Front-End Developer skilled in C, HTML, CSS, JavaScript, Linux, and Python. Turning code into experience with clean UI, creative logic, and future-ready web tech." />
        <meta name="keywords" content="Kiran Sharma, Front-End Developer, AI Enthusiast, JavaScript, Python, Linux, Web Development" />
        <meta property="og:title" content="Kiran Sharma - Front-End Developer & AI Enthusiast" />
        <meta property="og:description" content="Passionate Front-End Developer skilled in C, HTML, CSS, JavaScript, Linux, and Python." />
        <meta property="og:type" content="website" />
      </Helmet>

      {loading && <Loader />}
      
      <div className={`min-h-screen gradient-bg ${loading ? 'hidden' : 'block'}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Technologies />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Toaster />
        <footer className="text-center text-gray-500 py-6 text-sm">
          © 2025 Kiran Sharma. All rights reserved.
        </footer>
      </div>
    </>
  );
}

export default App;