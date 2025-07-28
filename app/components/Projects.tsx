'use client';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with modern payment integration, inventory management, and responsive design.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20showcasing%20clean%20product%20catalog%20layout%2C%20professional%20shopping%20cart%20design%2C%20minimalist%20dark%20theme%2C%20contemporary%20web%20design%2C%20high-quality%20product%20photography%2C%20elegant%20user%20interface%20elements%2C%20premium%20online%20store%20aesthetic&width=600&height=400&seq=project-ecommerce&orientation=landscape',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20task%20management%20dashboard%20interface%20with%20kanban%20board%20layout%2C%20modern%20project%20management%20tools%2C%20clean%20organizational%20system%2C%20dark%20theme%20productivity%20app%2C%20sleek%20user%20interface%20design%2C%20contemporary%20workflow%20management&width=600&height=400&seq=project-taskmanager&orientation=landscape',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 3,
      title: 'Weather Analytics Dashboard',
      description: 'Real-time weather data visualization with interactive charts, forecasting, and location-based weather insights.',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20weather%20analytics%20dashboard%20with%20interactive%20charts%20and%20graphs%2C%20real-time%20data%20visualization%2C%20clean%20meteorological%20interface%2C%20professional%20weather%20app%20design%2C%20dark%20theme%20dashboard%2C%20contemporary%20data%20visualization%20tools&width=600&height=400&seq=project-weather&orientation=landscape',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 4,
      title: 'Social Media Platform',
      description: 'A modern social networking platform with real-time messaging, content sharing, and advanced privacy controls.',
      technologies: ['Vue.js', 'Express', 'Redis', 'WebSocket'],
      image: 'https://readdy.ai/api/search-image?query=Contemporary%20social%20media%20platform%20interface%20with%20clean%20feed%20layout%2C%20modern%20messaging%20system%2C%20sleek%20user%20profiles%2C%20dark%20theme%20social%20network%20design%2C%20professional%20social%20app%20interface%2C%20elegant%20content%20sharing%20features&width=600&height=400&seq=project-social&orientation=landscape',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 5,
      title: 'AI-Powered Chat Bot',
      description: 'An intelligent chatbot with natural language processing, contextual understanding, and integration capabilities.',
      technologies: ['Python', 'TensorFlow', 'Flask', 'OpenAI'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20AI%20chatbot%20interface%20with%20sleek%20conversation%20design%2C%20futuristic%20chat%20bubbles%2C%20professional%20messaging%20system%2C%20dark%20theme%20AI%20assistant%2C%20contemporary%20chatbot%20interface%2C%20high-tech%20communication%20platform&width=600&height=400&seq=project-chatbot&orientation=landscape',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with smooth animations, modern design, and optimal performance across all devices.',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20portfolio%20website%20design%20with%20modern%20layout%2C%20elegant%20project%20showcase%2C%20clean%20personal%20branding%2C%20contemporary%20web%20design%2C%20minimalist%20dark%20theme%2C%20premium%20developer%20portfolio%20aesthetic&width=600&height=400&seq=project-portfolio&orientation=landscape',
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6 fade-section opacity-0 transform translate-y-10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a href={project.github} className="p-3 bg-gray-900/80 rounded-full text-white hover:bg-purple-600 transition-colors duration-300 backdrop-blur-sm">
                    <i className="ri-github-line text-xl"></i>
                  </a>
                  <a href={project.demo} className="p-3 bg-gray-900/80 rounded-full text-white hover:bg-pink-600 transition-colors duration-300 backdrop-blur-sm">
                    <i className="ri-external-link-line text-xl"></i>
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a href={project.github} className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                    <i className="ri-github-line text-xl"></i>
                  </a>
                  <a href={project.demo} className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                    <i className="ri-external-link-line text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
}