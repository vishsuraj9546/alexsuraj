
'use client';

import { useState, useEffect } from 'react';

export default function AINavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: 'ri-home-line' },
    { id: 'about', label: 'About', icon: 'ri-user-line' },
    { id: 'skills', label: 'Skills', icon: 'ri-code-line' },
    { id: 'projects', label: 'Projects', icon: 'ri-folder-line' },
    { id: 'certificates', label: 'Certificates', icon: 'ri-award-line' },
    { id: 'contact', label: 'Contact', icon: 'ri-mail-line' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-red-500/5' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent font-space-grotesk">
            Suraj Kumar
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 font-semibold transition-all duration-300 capitalize font-montserrat group ${
                  activeSection === item.id 
                    ? 'text-red-400' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-400 to-orange-500 transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="relative w-16 h-8 bg-red-500/20 rounded-full border border-red-500/30 transition-all duration-300 hover:bg-red-500/30"
            >
              <div className={`absolute top-1 left-1 w-6 h-6 bg-gradient-to-r from-red-400 to-orange-500 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
                isDarkMode ? 'translate-x-8' : 'translate-x-0'
              }`}>
                <i className={`${isDarkMode ? 'ri-moon-line' : 'ri-sun-line'} text-white text-sm`}></i>
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white/70 hover:text-white transition-colors duration-300"
          >
            <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 bg-black/90 backdrop-blur-sm rounded-lg mt-2 border border-red-500/20">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center space-x-3 px-6 py-3 font-semibold transition-all duration-300 capitalize font-montserrat ${
                  activeSection === item.id 
                    ? 'text-red-400 bg-red-500/10' 
                    : 'text-white/70 hover:text-white hover:bg-red-500/5'
                }`}
              >
                <i className={`${item.icon} text-lg`}></i>
                <span>{item.label}</span>
              </button>
            ))}
            
            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="w-full flex items-center space-x-3 px-6 py-3 font-semibold transition-all duration-300 font-montserrat text-white/70 hover:text-white hover:bg-red-500/5"
            >
              <i className={`${isDarkMode ? 'ri-moon-line' : 'ri-sun-line'} text-lg`}></i>
              <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
