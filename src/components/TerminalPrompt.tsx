import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X } from 'lucide-react';
import { useTerminalMode } from '@/contexts/TerminalModeContext';

export const TerminalPrompt = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { isTerminalMode, toggleTerminalMode } = useTerminalMode();

  useEffect(() => {
    // Show the prompt after 3 seconds on first visit
    const timer = setTimeout(() => {
      const hasSeenPrompt = localStorage.getItem('hasSeenTerminalPrompt');
      if (!hasSeenPrompt && !isTerminalMode && !isDismissed) {
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isTerminalMode, isDismissed]);

  const handleTryTerminal = () => {
    toggleTerminalMode();
    setIsVisible(false);
    localStorage.setItem('hasSeenTerminalPrompt', 'true');
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('hasSeenTerminalPrompt', 'true');
  };

  if (isTerminalMode) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 max-w-sm"
        >
          <div className="bg-gradient-to-r from-slate-900 to-zinc-900 border border-green-400/30 rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-400/20 rounded-full flex items-center justify-center">
                  <Terminal size={20} className="text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Hey Developer! 👋</h3>
                  <p className="text-green-400 text-xs font-mono">Try Terminal Mode</p>
                </div>
              </div>
              <button
                onClick={handleDismiss}
                className="text-zinc-400 hover:text-white transition-colors p-1"
              >
                <X size={16} />
              </button>
            </div>
            
            <p className="text-zinc-300 text-sm mb-4 leading-relaxed">
              Experience my portfolio like a real developer - explore through 
              <span className="text-green-400 font-mono"> terminal commands</span>!
            </p>
            
            <div className="flex gap-2">
              <button
                onClick={handleTryTerminal}
                className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Terminal size={16} />
                Launch Terminal
              </button>
              <button
                onClick={handleDismiss}
                className="px-4 py-2 border border-zinc-600 hover:border-zinc-500 text-zinc-400 hover:text-white rounded-lg text-sm transition-colors"
              >
                Maybe Later
              </button>
            </div>
            
            <div className="mt-3 text-xs text-zinc-500 font-mono text-center">
              $ whoami && cat skills.json
            </div>
          </div>
          
          {/* Pulsing dot indicator */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
