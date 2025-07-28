'use client';

import AIHero from './components/AIHero';
import AIAbout from './components/AIAbout';
import AISkills from './components/AISkills';
import AIProjects from './components/AIProjects';
import AICertificates from './components/AICertificates';
import AIContact from './components/AIContact';
import AINavigation from './components/AINavigation';
import AIFooter from './components/AIFooter';
import { useEffect } from 'react';
import { AnimationWrapper } from './components/AnimationWrapper';

export default function Home() {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
    document.documentElement.style.scrollBehavior = 'smooth';

    // Add custom scrollbar styles
    const styles = document.createElement('style');
    styles.textContent = `
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #000;
      }
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #ef4444, #f97316);
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, #dc2626, #ea580c);
      }
    `;
    document.head.appendChild(styles);

    return () => {
      document.head.removeChild(styles);
    };
  }, []);

  return (
    <AnimationWrapper>
      <div className="bg-black text-white min-h-screen">
        <AINavigation />
        <AIHero />
        <AIAbout />
        <AISkills />
        <AIProjects />
        <AICertificates />
        <AIContact />
        <AIFooter />
      </div>
    </AnimationWrapper>
  );
}