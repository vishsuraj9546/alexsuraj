'use client';

import { useState } from 'react';

export default function AIContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // ✅ Form Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('✅ Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus(data.error || '❌ Error sending message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('❌ Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 7000);
    }
  };

  // ✅ Input Change Handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6 bg-black fade-section">
      <div className="container mx-auto max-w-6xl">
        {/* 🏷️ Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent font-space-grotesk">
            Let's Connect
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-red-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-white/70 max-w-3xl mx-auto text-lg font-open-sans">
            Ready to collaborate on AI/ML projects or discuss innovative solutions? Let's build something amazing together.
          </p>
        </div>

        {/* 📩 Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* 📌 Contact Info */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-6 font-montserrat">Get In Touch</h3>
            <p className="text-white/70 mb-8 text-lg font-open-sans">
              Whether you have a machine learning project, need AI consultation, or want to discuss the future of technology,
              I'm here to help bring your ideas to life.
            </p>

            {/* 📧 Email */}
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                <i className="ri-mail-line text-white text-2xl"></i>
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg font-montserrat">Email</h4>
                <p className="text-white/70 font-open-sans">sr6447868@gmail.com</p>
              </div>
            </div>

            {/* 📞 Phone */}
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                <i className="ri-phone-line text-white text-2xl"></i>
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg font-montserrat">Phone</h4>
                <p className="text-white/70 font-open-sans">+91 9546860925</p>
              </div>
            </div>

            {/* 📍 Location */}
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                <i className="ri-map-pin-line text-white text-2xl"></i>
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg font-montserrat">Location</h4>
                <p className="text-white/70 font-open-sans">India</p>
              </div>
            </div>

            {/* 🌐 Social Links */}
            <div className="pt-8">
              <h4 className="text-white font-semibold mb-6 text-lg font-montserrat">Follow Me</h4>
              <div className="flex space-x-4">
                {/* 🔗 GitHub */}
                <a href="https://github.com/vishsuraj9546" target="_blank" rel="noopener noreferrer"
                  className="w-14 h-14 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center text-white/70 hover:bg-red-600 hover:text-white transition-all">
                  <i className="ri-github-line text-xl"></i>
                </a>
                {/* 🔗 LinkedIn */}
                <a href="https://www.linkedin.com/in/suraj-kumar-6a2759283/" target="_blank" rel="noopener noreferrer"
                  className="w-14 h-14 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center text-white/70 hover:bg-red-600 hover:text-white transition-all">
                  <i className="ri-linkedin-line text-xl"></i>
                </a>
                {/* 🔗 Instagram */}
                <a href="https://www.instagram.com/rolex_suraj_9546/?hl=en" target="_blank" rel="noopener noreferrer"
                  className="w-14 h-14 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center text-white/70 hover:bg-red-600 hover:text-white transition-all">
                  <i className="ri-instagram-line text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* 📜 Contact Form */}
          <div className="bg-red-500/5 backdrop-blur-sm border border-red-500/20 p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-3 font-montserrat">Name</label>
                <input
                  type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-red-500/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-red-500"
                  placeholder="Your name" required
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-3 font-montserrat">Email</label>
                <input
                  type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-red-500/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-red-500"
                  placeholder="your.email@example.com" required
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-3 font-montserrat">Message</label>
                <textarea
                  id="message" name="message" value={formData.message} onChange={handleChange}
                  rows={5} maxLength={500}
                  className="w-full px-4 py-3 bg-black/50 border border-red-500/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-red-500"
                  placeholder="Tell me about your AI/ML project..." required
                />
                <p className="text-white/50 text-sm mt-2">{formData.message.length}/500 characters</p>
              </div>

              {/* Submit Button */}
              <button
                type="submit" disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg text-white font-semibold hover:scale-105 transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* ✅ Status Message */}
              {submitStatus && (
                <div className={`text-center p-3 rounded-lg ${
                  submitStatus.includes('success') 
                    ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                }`}>
                  {submitStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
