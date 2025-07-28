'use client';

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-6 fade-section opacity-0 transform translate-y-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              Passionate Full Stack Developer
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a dedicated full-stack developer with over 5 years of experience creating innovative web applications. 
              My passion lies in crafting seamless user experiences while building robust, scalable backend systems.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I specialize in modern technologies including React, Node.js, Python, and cloud platforms. 
              I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300">
                <div className="text-3xl font-bold text-pink-400 mb-2">5+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20developer%20workspace%20with%20multiple%20monitors%20showing%20code%2C%20clean%20desk%20setup%2C%20ambient%20lighting%2C%20professional%20programming%20environment%2C%20dark%20theme%20IDE%2C%20contemporary%20office%20space%2C%20high-tech%20atmosphere%2C%20minimalist%20design%2C%20coding%20workspace%20photography&width=600&height=400&seq=about-workspace&orientation=landscape"
                alt="Developer workspace"
                className="relative w-full h-80 object-cover object-top rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-800/30 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-code-s-slash-line text-2xl text-white"></i>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Clean Code</h4>
            <p className="text-gray-400">Writing maintainable, scalable, and efficient code following best practices.</p>
          </div>

          <div className="text-center p-6 bg-gray-800/30 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-palette-line text-2xl text-white"></i>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Creative Design</h4>
            <p className="text-gray-400">Designing intuitive and visually appealing user interfaces that enhance user experience.</p>
          </div>

          <div className="text-center p-6 bg-gray-800/30 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-rocket-line text-2xl text-white"></i>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Performance</h4>
            <p className="text-gray-400">Optimizing applications for maximum speed and scalability across all platforms.</p>
          </div>
        </div>
      </div>
    </section>
  );
}