
'use client';

export default function AIFooter() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-red-500/20 py-12">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent font-space-grotesk mb-4">
              Suraj Kumar
            </div>
            <p className="text-white/70 mb-6 font-open-sans">
              AI/ML Engineer passionate about creating intelligent solutions that transform industries and improve lives through the power of artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/vishsuraj9546" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center text-white/70 hover:bg-red-600 hover:text-white hover:border-red-500 transition-all duration-300 hover:scale-110"
              >
                <i className="ri-github-line text-lg"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/suraj-kumar-6a2759283/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center text-white/70 hover:bg-red-600 hover:text-white hover:border-red-500 transition-all duration-300 hover:scale-110"
              >
                <i className="ri-linkedin-line text-lg"></i>
              </a>
              <a 
                href="https://www.instagram.com/rolex_suraj_9546/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center text-white/70 hover:bg-red-600 hover:text-white hover:border-red-500 transition-all duration-300 hover:scale-110"
              >
                <i className="ri-instagram-line text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-montserrat">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-white/70 hover:text-red-400 transition-colors duration-300 font-open-sans"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-montserrat">Contact Info</h4>
            <div className="space-y-3 text-white/70 font-open-sans">
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-red-400"></i>
                <span>sr6447868@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-red-400"></i>
                <span>+91 9546860925</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-map-pin-line text-red-400"></i>
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-500/20 mt-12 pt-8 text-center">
          <p className="text-white/60 font-open-sans">
            © 2024 Suraj Kumar. All rights reserved. Built with passion for AI/ML innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}
