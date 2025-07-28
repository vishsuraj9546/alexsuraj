
'use client';

import { useEffect, useState } from 'react';

export default function AIHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" 
             style={{ top: '20%', left: '10%' }}></div>
        <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" 
             style={{ top: '60%', right: '10%', animationDelay: '2s' }}></div>
        <div className="absolute w-64 h-64 bg-red-400/5 rounded-full blur-2xl animate-pulse" 
             style={{ top: '40%', left: '50%', animationDelay: '1s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 via-black to-orange-900/5"></div>
      
      <div className="relative z-10 text-center max-w-6xl px-6">
        <div className="relative mb-12 inline-block">
          {/* Profile Image with Animated Glowing Border */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400 via-orange-500 to-red-400 animate-spin p-1 scale-110 opacity-75"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 animate-pulse p-1 scale-105"></div>
            <div className="relative w-64 h-64 mx-auto">
              <img 
                src="https://static.readdy.ai/image/68245faa3d2894b33c04c4573a75c538/365d846e2de4448c4d64816ddf8a47f4.jfif"
                alt="Suraj Kumar -Full-Stack Developer / AI/ML Engineer"
                className="w-full h-full rounded-full object-cover border-4 border-black transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-3 animate-float"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-400 via-orange-500 to-red-400 bg-clip-text text-transparent font-space-grotesk tracking-tight">
            Suraj Kumar
          </h1>
          
          <div className="text-2xl md:text-3xl text-white/90 font-montserrat font-light">
            AI/ML Engineer
          </div>
          
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-open-sans leading-relaxed">
            Transforming data into intelligent solutions. Passionate about machine learning, 
            deep learning, and building AI systems that make a real-world impact.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
          <button 
            onClick={() => scrollToSection('about')}
            className="px-10 py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full text-white font-semibold font-montserrat hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300 whitespace-nowrap relative overflow-hidden group"
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-10 py-4 border-2 border-red-500 rounded-full text-red-400 font-semibold font-montserrat hover:bg-red-500/10 hover:text-white transition-all duration-300 whitespace-nowrap backdrop-blur-sm"
          >
            Let's Connect
          </button>
        </div>

        {/* Floating tech elements */}
        <div className="absolute top-20 left-20 w-6 h-6 bg-red-500/60 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-8 h-8 bg-orange-500/60 rounded-full animate-bounce opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-10 w-4 h-4 bg-red-400/60 rounded-full animate-bounce opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-10 w-5 h-5 bg-orange-400/60 rounded-full animate-bounce opacity-45" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-red-400/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-red-400 to-orange-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
