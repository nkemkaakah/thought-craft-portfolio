
import { Mail, MessageSquare, Calendar, Coffee, Send } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    projectType: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Me",
      description: "For detailed project discussions",
      action: "your.email@example.com",
      color: "text-blue-400"
    },
    {
      icon: MessageSquare,
      title: "Let's Chat",
      description: "Quick questions or brainstorming",
      action: "LinkedIn DM",
      color: "text-green-400"
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "15-min coffee chat about your project",
      action: "Book a slot",
      color: "text-purple-400"
    },
    {
      icon: Coffee,
      title: "Grab Coffee",
      description: "If you're in the Bay Area",
      action: "San Francisco, CA",
      color: "text-yellow-400"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have an idea? Need a technical partner? Or just want to talk about the future of tech? 
            I'm always excited to connect with fellow builders and dreamers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
            
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                  <method.icon className={method.color} size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white mb-1">{method.title}</h4>
                  <p className="text-gray-400 text-sm mb-2">{method.description}</p>
                  <p className={`${method.color} font-medium`}>{method.action}</p>
                </div>
              </div>
            ))}

            <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl border border-purple-500/20">
              <h4 className="text-lg font-semibold text-white mb-2">🚀 Quick Response Promise</h4>
              <p className="text-gray-300 text-sm">
                I typically respond within 24 hours. For urgent matters, reach out on LinkedIn for faster response.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">Project Type</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                >
                  <option value="general">General Inquiry</option>
                  <option value="fullstack">Full-Stack Development</option>
                  <option value="ai">AI/ML Integration</option>
                  <option value="consulting">Technical Consulting</option>
                  <option value="collaboration">Collaboration</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Tell me about your project, idea, or just say hello!"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center border-t border-slate-700/50 pt-8">
          <p className="text-gray-400">
            © 2024 Your Name. Built with React, TypeScript, and lots of ☕
          </p>
          <p className="text-gray-500 text-sm mt-2">
            This portfolio is open source and continuously evolving.
          </p>
        </div>
      </div>
    </section>
  );
};
