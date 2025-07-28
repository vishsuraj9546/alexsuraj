'use client';

export default function Skills() {
  const skills = [
    { name: 'JavaScript', level: 95, icon: 'ri-javascript-line' },
    { name: 'React', level: 90, icon: 'ri-reactjs-line' },
    { name: 'Node.js', level: 85, icon: 'ri-nodejs-line' },
    { name: 'Python', level: 80, icon: 'ri-code-line' },
    { name: 'TypeScript', level: 88, icon: 'ri-file-code-line' },
    { name: 'Next.js', level: 85, icon: 'ri-nextjs-line' },
    { name: 'MongoDB', level: 82, icon: 'ri-database-2-line' },
    { name: 'AWS', level: 75, icon: 'ri-cloud-line' }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-6 fade-section opacity-0 transform translate-y-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <i className={`${skill.icon} text-white text-xl`}></i>
                  </div>
                  <span className="text-white font-semibold">{skill.name}</span>
                </div>
                <span className="text-purple-400 font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out transform scale-x-0 group-hover:scale-x-100 origin-left"
                  style={{ 
                    width: `${skill.level}%`,
                    animationDelay: `${index * 0.1}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gray-800/30 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-computer-line text-3xl text-white"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Frontend</h3>
            <p className="text-gray-400 mb-4">Creating responsive and interactive user interfaces</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Vue.js</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">TypeScript</span>
            </div>
          </div>

          <div className="text-center p-8 bg-gray-800/30 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-server-line text-3xl text-white"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Backend</h3>
            <p className="text-gray-400 mb-4">Building robust server-side applications and APIs</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Express</span>
            </div>
          </div>

          <div className="text-center p-8 bg-gray-800/30 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-cloud-line text-3xl text-white"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Cloud & DevOps</h3>
            <p className="text-gray-400 mb-4">Deploying and managing applications in the cloud</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">AWS</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Docker</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}