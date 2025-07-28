'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* 🌈 Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-pink-900/20"></div>

      {/* 🔴 Animated background particles */}
      <div
        className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        style={{ top: '20%', left: '10%' }}
      ></div>

      <div
        className="absolute w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
        style={{ top: '60%', right: '10%', animationDelay: '2s' }}
      ></div>

      {/* ✅ Hero Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        {/* ✅ Profile Image with Glow Border */}
        <div className="relative mb-8 inline-block">
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 animate-spin p-1 scale-110 opacity-75"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-pink-400 animate-pulse p-1 scale-105"></div>
            <div className="relative w-48 h-48 mx-auto">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20confident%20software%20developer%20with%20modern%20tech%20background%2C%20clean%20studio%20lighting%2C%20contemporary%20business%20casual%20attire%2C%20focused%20expression%2C%20high-resolution%20portrait%20photography%2C%20minimalist%20dark%20background%20with%20subtle%20tech%20elements%2C%20professional%20photography%20style&width=400&height=400&seq=profile-hero&orientation=squarish"
                alt="Profile"
                className="w-full h-full rounded-full object-cover object-top border-4 border-gray-900 transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-3 animate-float"
              />
            </div>
          </div>
        </div>

        {/* ✅ Heading & Subtitle */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-title">
          John Developer
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-subtitle">
          Full Stack Developer & UI/UX Designer
        </p>

        {/* ✅ Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
            View My Work
          </button>
          <button className="px-8 py-3 border-2 border-purple-500 rounded-full text-purple-400 font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 whitespace-nowrap">
            Contact Me
          </button>
        </div>

        {/* ✅ Floating Elements */}
        <div
          className="absolute top-20 left-20 w-4 h-4 bg-purple-500 rounded-full animate-bounce opacity-60"
        ></div>

        <div
          className="absolute bottom-20 right-20 w-6 h-6 bg-pink-500 rounded-full animate-bounce opacity-40"
          style={{ animationDelay: '1s' }}
        ></div>

        <div
          className="absolute top-1/2 left-10 w-3 h-3 bg-blue-500 rounded-full animate-bounce opacity-50"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      {/* ✅ Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
