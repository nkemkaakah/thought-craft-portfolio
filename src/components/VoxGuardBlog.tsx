import { Play, ExternalLink, TrendingUp, Shield, Users, Clock } from 'lucide-react';
import { useState } from 'react';

export const VoxGuardBlog = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const stats = [
    { icon: TrendingUp, label: "Fraud Detection Rate", value: "82%" },
    { icon: Shield, label: "Businesses Protected", value: "50+" },
    { icon: Users, label: "Agents Assisted", value: "500+" },
    { icon: Clock, label: "Real-time Response", value: "<2s" }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mb-16">
      {/* Featured Badge */}
      <div className="flex items-center justify-center mb-6">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2">
          <span className="text-purple-400 font-semibold text-sm flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            Featured Project: Just Launched
          </span>
        </div>
      </div>

      {/* Main Blog Container */}
      <div className="bg-gradient-to-br from-slate-800/90 via-purple-900/20 to-slate-800/90 backdrop-blur-xl rounded-3xl border border-purple-500/20 shadow-2xl shadow-purple-500/10 overflow-hidden">
        
        {/* Header */}
        <div className="p-8 pb-4 border-b border-purple-500/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            VoxGuard: Fighting AI Fraud with AI
          </h2>
          <p className="text-purple-300 text-lg font-medium">
            How we built real-time defense against voice cloning attacks
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 p-8">
          
          {/* Blog Content - Scrollable */}
          <div className="space-y-6">
            <div className="max-h-96 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-slate-700/50">
              <div className="space-y-5 text-gray-300 leading-relaxed">
                
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <h3 className="text-red-400 font-semibold mb-2">🚨 The Problem</h3>
                  <p className="text-gray-300">
                    Fraudsters are weaponizing AI voice cloning to steal billions from businesses. In the UK alone, 
                    <strong className="text-white"> 28% of adults were targeted</strong> by voice cloning scams in 2024, 
                    with <strong className="text-white">over £1 billion stolen</strong>. Yet call centers remain completely defenseless.
                  </p>
                </div>

                <div>
                  <h3 className="text-purple-400 font-semibold mb-3">💡 The Insight</h3>
                  <p>
                    Traditional fraud detection works in isolation - after the damage is done. But fraud happens 
                    <strong className="text-white"> in real-time, during conversations</strong>, with human psychology at the center.
                  </p>
                </div>

                <div>
                  <h3 className="text-blue-400 font-semibold mb-3">🛡️ The Solution</h3>
                  <p className="mb-3">VoxGuard is an end-to-end fraud prevention platform that:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Detects deepfakes and social engineering in real-time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Coaches agents during live calls with instant risk alerts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Transforms every fraud attempt into institutional learning</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                  <h3 className="text-purple-400 font-semibold mb-2">🎯 The Impact</h3>
                  <p>
                    This isn't just fraud detection—it's <strong className="text-white">fraud education</strong>. 
                    Every attempted attack becomes training data that strengthens the entire organization.
                    We're not just stopping fraud; we're building immunity.
                  </p>
                </div>

                <div>
                  <h3 className="text-yellow-400 font-semibold mb-3">🤔 The Big Question</h3>
                  <p>
                    What other industries face similar "real-time human deception" challenges that traditional 
                    security tools miss? Healthcare? Education? Legal services?
                  </p>
                </div>

              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 text-center border border-slate-600/50">
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Section */}
          <div className="space-y-6">
            <div className="relative bg-slate-900/50 rounded-xl overflow-hidden border border-purple-500/20">
              <div className="aspect-video relative">
                {!isVideoPlaying ? (
                  <div 
                    className="w-full h-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center cursor-pointer group"
                    onClick={() => setIsVideoPlaying(true)}
                  >
                    <div className="text-center">
                      <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500 transition-colors group-hover:scale-110 transition-transform">
                        <Play className="text-white w-8 h-8 ml-1" fill="currentColor" />
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-2">Watch VoxGuard in Action</h3>
                      <p className="text-gray-300 text-sm">See how we catch AI voice cloning attempts in real-time</p>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src="https://www.loom.com/embed/97d3249f726d438e89aa5113b077209b?sid=9ffa7fee-47bd-4aba-97ca-f0b0f78fa6e9"
                    frameBorder="0"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <a
                href="https://voxguard.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2"
              >
                <ExternalLink size={20} />
                Try VoxGuard Demo
              </a>
              
              <a
                href="https://github.com/nkemkaakah/voxguard"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 px-6 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View Source Code
              </a>
            </div>

            {/* Tech Stack Tags */}
            <div className="pt-4 border-t border-slate-600/50">
              <p className="text-gray-400 text-sm mb-3">Built with:</p>
              <div className="flex flex-wrap gap-2">
                {['FastAPI', 'WebSockets', 'LangGraph', 'React', 'AI/ML'].map((tech) => (
                  <span key={tech} className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
