'use client';

import { useState } from 'react';

export default function AICertificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);

  // ✅ Tumhare khud ke certificate details
  const certificates = [
    {
      id: 1,
      title: "Python for Data Science",
      provider: "Great Learning",
      description: "Comprehensive Python course focused on data analysis, visualization, and machine learning basics.",
      date: "2023",
      skills: ["Python", "Pandas", "NumPy", "Data Visualization"],
      image: "/certificates/cert1.jpeg",
      icon: "ri-code-line"
    },
    {
      id: 2,
      title: "React & Redux Development",
      provider: "Knowledge Gate",
      description: "Advanced React development with Redux, hooks, and state management patterns.",
      date: "2023",
      skills: ["React", "Redux", "Hooks", "Components"],
      image: "/certificates/cert2.jpeg",
      icon: "ri-reactjs-line"
    },
    {
      id: 3,
      title: "AI & ML Internship",
      provider: "YBI Foundation",
      description: "Hands-on internship on AI/ML models, real-world project development and deployment.",
      date: "2024",
      skills: ["AI", "ML", "Python", "Deployment"],
      image: "/certificates/cert3.jpeg",
      icon: "ri-brain-line"
    },
    {
      id: 4,
      title: "Innovation2Educate Program",
      provider: "Government of India",
      description: "Participated in government initiative for educational innovation and technology advancement.",
      date: "2023",
      skills: ["Innovation", "Education", "Technology", "Leadership"],
      image: "/certificates/cert4.jpeg",
      icon: "ri-government-line"
    }
  ];

  const openCertificate = (certId: number) => {
    setSelectedCertificate(certId);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="certificates" className="min-h-screen py-20 px-6 bg-black fade-section opacity-100 transform translate-y-10">
      <div className="container mx-auto max-w-7xl">
        
        {/* ✅ Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent font-space-grotesk">
            Certificates
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-red-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-white/70 font-open-sans max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise and commitment to continuous learning.
          </p>
        </div>

        {/* ✅ Certificate Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="group relative bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-2xl overflow-hidden backdrop-blur-sm border border-red-500/20 hover:border-red-500/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30 group-hover:shadow-xl group-hover:shadow-red-500/50 transition-all duration-300">
                    <i className={`${cert.icon} text-2xl text-white`}></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white font-montserrat group-hover:text-red-400 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-red-400 font-semibold font-open-sans">{cert.provider}</p>
                  </div>
                </div>

                {/* ✅ Certificate Image */}
                <div className="mb-6">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                </div>

                {/* ✅ Description */}
                <p className="text-white/70 font-open-sans mb-6 leading-relaxed">
                  {cert.description}
                </p>

                {/* ✅ Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-red-500/10 text-red-400 rounded-full text-sm font-medium font-open-sans border border-red-500/20 hover:bg-red-500/20 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* ✅ View Button */}
                <div className="flex items-center justify-between">
                  <span className="text-white/50 font-open-sans text-sm">
                    <i className="ri-calendar-line mr-2"></i>
                    {cert.date}
                  </span>
                  <button
                    onClick={() => openCertificate(cert.id)}
                    className="px-6 py-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full text-white font-semibold font-montserrat hover:shadow-lg hover:shadow-red-500/40 transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
                  >
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Certificate Modal */}
        {selectedCertificate && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-black border border-red-500/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white font-montserrat">
                    {certificates.find(cert => cert.id === selectedCertificate)?.title}
                  </h3>
                  <button onClick={closeCertificate} className="text-white/70 hover:text-white transition-colors duration-300">
                    <i className="ri-close-line text-2xl"></i>
                  </button>
                </div>
                
                <div className="mb-6">
                  <img
                    src={certificates.find(cert => cert.id === selectedCertificate)?.image}
                    alt="Certificate"
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-red-400 font-montserrat mb-2">Provider</h4>
                    <p className="text-white/80 font-open-sans">{certificates.find(cert => cert.id === selectedCertificate)?.provider}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-red-400 font-montserrat mb-2">Description</h4>
                    <p className="text-white/80 font-open-sans leading-relaxed">{certificates.find(cert => cert.id === selectedCertificate)?.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-red-400 font-montserrat mb-2">Skills Covered</h4>
                    <div className="flex flex-wrap gap-2">
                      {certificates.find(cert => cert.id === selectedCertificate)?.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-red-500/10 text-red-400 rounded-full text-sm font-medium font-open-sans border border-red-500/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
