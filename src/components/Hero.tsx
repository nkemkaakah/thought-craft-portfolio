
import { ArrowDown, Coffee, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            I build tools that{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              think
            </span>
            , so you can think{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              bigger
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Full-stack developer crafting AI-powered solutions that solve real problems. 
            Currently building the future of recruitment tech.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-500/20">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300">Currently working on</span>
              <span className="text-purple-400 font-semibold">Zenfinder</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400">
              <Coffee size={16} />
              <span>Fueled by curiosity</span>
              <Zap size={16} className="text-yellow-400" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 px-8 py-4 rounded-full font-semibold transition-all duration-200"
            >
              Let's Connect
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
};
