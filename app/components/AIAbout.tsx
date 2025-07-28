
'use client';

export default function AIAbout() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-black fade-section opacity-100 transform translate-y-10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent font-space-grotesk">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-red-400 to-orange-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400 via-orange-500 to-red-400 animate-pulse p-1 scale-110 opacity-60 blur-sm"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 animate-spin p-1 scale-105 opacity-40 blur-sm"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-red-500 animate-ping p-1 scale-125 opacity-20"></div>
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-orange-500 p-1 shadow-2xl shadow-red-500/50">
                  <div className="w-full h-full rounded-full bg-black p-2">
                    <img 
                      src="https://static.readdy.ai/image/68245faa3d2894b33c04c4573a75c538/365d846e2de4448c4d64816ddf8a47f4.jfif"
                      alt="Suraj Kumar"
                      className="w-full h-full rounded-full object-cover transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-6 animate-float hover:shadow-2xl hover:shadow-red-500/30"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-fade-in-right">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white font-montserrat bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                Passionate Full-stack Developer
              </h3>
              <p className="text-lg text-white/80 leading-relaxed font-open-sans">
                I'm a dedicated Full-stack Developer with expertise in developing intelligent systems that solve real-world problems. 
                My journey in AI/Machine Learning, Deep learning and natural language processing.
              </p>
              <p className="text-lg text-white/80 leading-relaxed font-open-sans">
                I specialize in Python, Django, and JavaScript frameworks. I believe in creating solutions 
                that are not just technically sound but also user-friendly and impactful.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-red-500/10 p-6 rounded-xl backdrop-blur-sm border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-red-400 mb-2 font-space-grotesk">25+</div>
                  <div className="text-white/80 font-open-sans">Projects</div>
                </div>
              </div>
              <div className="bg-orange-500/10 p-6 rounded-xl backdrop-blur-sm border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-orange-400 mb-2 font-space-grotesk">3+</div>
                  <div className="text-white/80 font-open-sans">Years Experience</div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full text-white font-semibold font-montserrat hover:shadow-xl hover:shadow-red-500/40 transform hover:scale-105 transition-all duration-300 whitespace-nowrap relative overflow-hidden group"
            >
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-orange-500 blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-red-500/5 rounded-2xl backdrop-blur-sm border border-red-500/20 hover:border-red-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-500/30 group-hover:shadow-xl group-hover:shadow-red-500/50 transition-shadow duration-300">
                <i className="ri-code-s-slash-line text-3xl text-white"></i>
              </div>
              <h4 className="text-xl font-semibold text-white mb-4 font-montserrat">Full-stack Development</h4>
              <p className="text-white/70 font-open-sans">Building complete web applications from frontend to backend with modern technologies.</p>
            </div>
          </div>

          <div className="text-center p-8 bg-orange-500/5 rounded-2xl backdrop-blur-sm border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/30 group-hover:shadow-xl group-hover:shadow-orange-500/50 transition-shadow duration-300">
                <i className="ri-brain-line text-3xl text-white"></i>
              </div>
              <h4 className="text-xl font-semibold text-white mb-4 font-montserrat">AI & Machine Learning</h4>
              <p className="text-white/70 font-open-sans">Implementing intelligent algorithms and neural networks for complex problem solving.</p>
            </div>
          </div>

          <div className="text-center p-8 bg-red-500/5 rounded-2xl backdrop-blur-sm border border-red-500/20 hover:border-red-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-500/30 group-hover:shadow-xl group-hover:shadow-red-500/50 transition-shadow duration-300">
                <i className="ri-database-line text-3xl text-white"></i>
              </div>
              <h4 className="text-xl font-semibold text-white mb-4 font-montserrat">Database Design</h4>
              <p className="text-white/70 font-open-sans">Designing efficient database structures and optimizing data management systems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
