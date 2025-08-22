import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CurlAnimation } from '../animations/CurlAnimation';

interface ContactForm {
  name: string;
  email: string;
  message: string;
  projectType: string;
}

export const TerminalContact: React.FC = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
    projectType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<'success' | 'error' | null>(null);

  const contactData = {
    name: "Nkemka Akah",
    email: "nkemkaomeiza@gmail.com",
    linkedin: "https://www.linkedin.com/in/nkemka-akah-861408253/",
    github: "https://github.com/nkemkaakah",
    location: "London, UK",
    timezone: "GMT (UTC+0)",
    status: "Available for opportunities",
    response_time: "< 24 hours",
    preferred_contact: "email",
    interests: [
      "Full-stack development",
      "AI integration",
      "Scalable solutions",
      "Remote collaboration"
    ],
    currently_working_on: "Rulebase - LLM-powered compliance platform",
    open_to: [
      "Full-time opportunities",
      "Freelance projects",
      "Technical consulting",
      "Open source collaboration"
    ]
  };

  const handleAnimationComplete = () => {
    setShowAnimation(false);
  };

  const handleSendMessage = () => {
    setShowForm(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await fetch("https://thought-craft-portfolio.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitResult('success');
        setFormData({
          name: '',
          email: '',
          message: '',
          projectType: 'general'
        });
      } else {
        setSubmitResult('error');
      }
    } catch (error) {
      console.error("Network error:", error);
      setSubmitResult('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 font-mono">
      <div className="mb-4 text-green-400">
        $ curl -X GET https://api.nkemka.dev/contact
      </div>
      
      {showAnimation ? (
        <CurlAnimation 
          data={contactData}
          onComplete={handleAnimationComplete}
        />
      ) : showForm ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <div className="text-green-400 mb-4">
            $ curl -X POST https://api.nkemka.dev/contact --data-binary @message.json
          </div>

          {submitResult === 'success' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-900/30 border border-green-400/30 rounded p-4 mb-4"
            >
              <div className="text-green-400">✓ HTTP/1.1 200 OK</div>
              <div className="text-zinc-400 text-sm">Message sent successfully! I'll get back to you within 24 hours.</div>
            </motion.div>
          )}

          {submitResult === 'error' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-red-900/30 border border-red-400/30 rounded p-4 mb-4"
            >
              <div className="text-red-400">✗ HTTP/1.1 500 Internal Server Error</div>
              <div className="text-zinc-400 text-sm">Failed to send message. Please try again or use direct email.</div>
            </motion.div>
          )}

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700">
              <div className="text-zinc-400 text-sm mb-3">// message.json</div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 w-20">"name":</span>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="flex-1 bg-zinc-700/50 border border-zinc-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-green-400"
                    placeholder='"Your Name"'
                    required
                  />
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 w-20">"email":</span>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="flex-1 bg-zinc-700/50 border border-zinc-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-green-400"
                    placeholder='"your@email.com"'
                    required
                  />
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-blue-400 w-20">"type":</span>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="flex-1 bg-zinc-700/50 border border-zinc-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-green-400"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="fullstack">Full-Stack Development</option>
                    <option value="ai">AI/ML Integration</option>
                    <option value="consulting">Technical Consulting</option>
                    <option value="collaboration">Collaboration</option>
                  </select>
                </div>
                
                <div className="flex items-start gap-2">
                  <span className="text-blue-400 w-20">"message":</span>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="flex-1 bg-zinc-700/50 border border-zinc-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-green-400 resize-none"
                    placeholder='"Tell me about your project or just say hello!"'
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-green-600 hover:bg-green-700 disabled:bg-zinc-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                    Sending...
                  </>
                ) : (
                  <>📤 Send Message</>
                )}
              </button>
              
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="border border-zinc-600 hover:border-zinc-500 text-zinc-400 hover:text-white px-4 py-2 rounded text-sm transition-colors"
              >
                ← Back to Contact Info
              </button>
            </div>
          </form>
        </motion.div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-green-400 text-sm">
            <span>HTTP/1.1 200 OK</span>
            <span className="text-zinc-500">• Response time: 247ms</span>
          </div>
          
          <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700">
            <pre className="text-white text-sm overflow-auto font-mono whitespace-pre-wrap">
              {JSON.stringify(contactData, null, 2)}
            </pre>
          </div>

          <div className="text-zinc-400 text-xs space-y-1">
            <div>Connection closed by remote host.</div>
            <div className="mt-4 text-zinc-500">
              💡 Quick actions:
            </div>
            <div className="ml-4 space-y-1">
              <div>• Email: <a href={`mailto:${contactData.email}`} className="text-blue-400 hover:underline">{contactData.email}</a></div>
              <div>• LinkedIn: <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Professional Profile</a></div>
              <div>• GitHub: <a href={contactData.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Code Repository</a></div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-zinc-700">
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors flex items-center gap-2"
              >
                📝 Send Message via API
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
