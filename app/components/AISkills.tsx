"use client";

import { useEffect, useState } from "react";

// ✅ Example skills array (apne hisaab se modify kar lena)
const skills = [
  { name: "React", icon: "ri-reactjs-line", level: 90 },
  { name: "Next.js", icon: "ri-nextjs-line", level: 85 },
  { name: "TailwindCSS", icon: "ri-tailwind-css-line", level: 80 },
];

const techCategories = [
  {
    title: "Frontend",
    icon: "ri-code-s-slash-line",
    techs: ["React", "Next.js", "Tailwind", "Framer Motion"]
  },
  {
    title: "Backend",
    icon: "ri-database-2-line",
    techs: ["Node.js", "Express", "MongoDB"]
  }
];

export default function AISkills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // ✅ Intersection Observer for animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });

    const section = document.querySelector("#skills");
    if (section) observer.observe(section);

    // ✅ Cleanup observer on unmount
    return () => observer.disconnect();
  }, []); // ✅ useEffect yahan properly close kiya gaya hai

  // ✅ React Component ka return YAHAN se start hoga
  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-6 bg-black fade-section opacity-0 transform translate-y-10"
    >
      <div className="container mx-auto max-w-7xl">
        {/* ---- Heading Section ---- */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent font-space-grotesk">
            Skills & Technologies
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-red-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-white/70 max-w-3xl mx-auto text-lg font-open-sans">
            Here are the technologies and tools I use to build intelligent full-stack solutions
          </p>
        </div>

        {/* ---- Skills Progress Bars ---- */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {skills.map((skill, index) => (
            <div key={skill.name} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <div className="relative bg-black/50 p-6 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-red-500/30 group-hover:shadow-xl group-hover:shadow-red-500/50">
                      <i className={`${skill.icon} text-white text-xl`}></i>
                    </div>
                    <span className="text-white font-semibold text-lg font-montserrat">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-red-400 font-semibold text-lg font-space-grotesk animate-pulse">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden shadow-inner">
                  <div
                    className={`h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full transition-all duration-1000 ease-out relative ${
                      isVisible ? "w-full" : "w-0"
                    }`}
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-400 rounded-full animate-pulse opacity-50"></div>
                    <div className="absolute right-0 top-0 w-2 h-full bg-white rounded-full animate-pulse shadow-lg shadow-white/50"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ---- Tech Categories ---- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={category.title}
              className="text-center p-8 bg-red-500/5 rounded-2xl backdrop-blur-sm border border-red-500/20 hover:border-red-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/20 relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-500/30 group-hover:shadow-xl group-hover:shadow-red-500/50 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <i className={`${category.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-montserrat bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent group-hover:from-red-300 group-hover:to-orange-400 transition-all duration-300">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.techs.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="inline-block px-3 py-1 bg-red-500/10 text-red-300 rounded-full text-sm font-open-sans mr-2 mb-2 hover:bg-red-500/20 transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-red-500/30 border border-red-500/20 hover:border-red-500/40"
                      style={{ animationDelay: `${techIndex * 0.05}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
