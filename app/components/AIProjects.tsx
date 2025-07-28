
'use client';

export default function AIProjects() {
  const projects = [
    {
      id: 1,
      title: 'MocoAI - AI-Powered Platform',
      description: 'Advanced AI platform featuring intelligent automation, machine learning capabilities, and modern user interface for seamless AI interactions and workflow optimization.',
      technologies: ['React', 'AI/ML', 'Node.js', 'Modern UI', 'Automation'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20AI%20platform%20interface%20with%20dark%20theme%2C%20professional%20dashboard%20design%2C%20artificial%20intelligence%20automation%20tools%2C%20sleek%20user%20interface%20with%20advanced%20features%2C%20machine%20learning%20platform%20visualization%2C%20futuristic%20AI%20workspace&width=600&height=400&seq=mocoai-platform&orientation=landscape',
      github: 'https://github.com/vishsuraj9546',
      demo: 'https://mocoai.netlify.app/'
    },
    {
      id: 2,
      title: 'ShopSmartDeal - E-commerce Platform',
      description: 'Smart e-commerce solution with intelligent product recommendations, modern shopping interface, and optimized user experience for online retail.',
      technologies: ['React', 'E-commerce', 'Smart Recommendations', 'Modern UI', 'Optimization'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20e-commerce%20platform%20interface%20with%20smart%20shopping%20features%2C%20product%20showcase%20design%2C%20online%20retail%20website%20with%20clean%20layout%2C%20professional%20shopping%20platform%2C%20user-friendly%20e-commerce%20dashboard%2C%20modern%20web%20application&width=600&height=400&seq=shopsmartdeal-platform&orientation=landscape',
      github: 'https://github.com/vishsuraj9546',
      demo: 'https://shopsmartdeal.netlify.app/'
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-black fade-section opacity-0 transform translate-y-10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent font-space-grotesk">
            AI/ML Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-red-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-white/70 max-w-3xl mx-auto text-lg font-open-sans">
            Explore my portfolio of AI and machine learning projects that showcase innovation and technical excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="group relative bg-red-500/5 rounded-2xl overflow-hidden border border-red-500/20 hover:border-red-500/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top transition-all duration-500 group-hover:scale-110 filter blur-[1px] group-hover:blur-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-black/80 rounded-full text-white hover:bg-red-600 transition-colors duration-300 backdrop-blur-sm transform hover:scale-110"
                  >
                    <i className="ri-github-line text-xl"></i>
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-black/80 rounded-full text-white hover:bg-orange-600 transition-colors duration-300 backdrop-blur-sm transform hover:scale-110"
                  >
                    <i className="ri-external-link-line text-xl"></i>
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300 font-montserrat">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4 leading-relaxed font-open-sans">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-red-500/10 text-red-300 rounded-full text-sm border border-red-500/20 hover:bg-red-500/20 transition-colors duration-300 font-open-sans"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-red-400 transition-colors duration-300 transform hover:scale-110"
                    >
                      <i className="ri-github-line text-xl"></i>
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-orange-400 transition-colors duration-300 transform hover:scale-110"
                    >
                      <i className="ri-external-link-line text-xl"></i>
                    </a>
                  </div>
                  
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full text-red-300 text-sm font-semibold hover:from-red-500/30 hover:to-orange-500/30 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 whitespace-nowrap font-montserrat"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="https://github.com/vishsuraj9546" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full text-white font-semibold font-montserrat hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300 whitespace-nowrap relative overflow-hidden group"
          >
            <span className="relative z-10">View All Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
