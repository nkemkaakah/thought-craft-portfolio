import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { TerminalHeader } from './TerminalHeader';
import { TerminalSidebar } from './TerminalSidebar';
import { TerminalContent } from './TerminalContent';
import { TerminalInput } from './TerminalInput';
import { TerminalOutput } from './TerminalOutput';
import { TerminalCommandHandler, TerminalOutput as OutputType } from './TerminalCommandHandler';

interface TerminalProps {
  className?: string;
}

const terminalVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 }
};

export const Terminal: React.FC<TerminalProps> = ({ className = "" }) => {
  const [outputs, setOutputs] = useState<OutputType[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [commandHandler] = useState(() => new TerminalCommandHandler());
  const [isInteractive, setIsInteractive] = useState(true);

  // Tab-based navigation state (for fallback mode)
  const [activeTab, setActiveTab] = useState('me');

  const handleCommand = (command: string) => {
    // Add command to history
    const newHistory = [...commandHistory, command];
    setCommandHistory(newHistory);

    // Process command and get output
    const result = commandHandler.processCommand(command, newHistory);
    
    // Handle clear command
    if (result.length > 0 && result[result.length - 1]?.content === 'clear') {
      setOutputs([]);
      return;
    }
    
    // Add new outputs
    setOutputs(prev => [...prev, ...result]);
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const toggleMode = useCallback(() => {
    setIsInteractive(!isInteractive);
  }, [isInteractive]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+` to toggle between interactive and guided mode
      if (e.ctrlKey && e.key === '`') {
        e.preventDefault();
        toggleMode();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleMode]);

  return (
    <motion.div
      variants={terminalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`bg-zinc-950 min-h-screen font-mono ${className}`}
    >
      <div className="max-w-7xl mx-auto p-4">
        <div className="bg-zinc-900 rounded-lg border border-zinc-700 overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <TerminalHeader />
          
          {/* Mode Toggle */}
          <div className="flex items-center justify-between px-4 py-2 bg-zinc-800/50 border-b border-zinc-700">
            <div className="text-xs text-zinc-500 font-mono">
              {isInteractive ? 'Interactive Terminal Mode' : 'Guided Navigation Mode'}
            </div>
            <button
              onClick={toggleMode}
              className="text-xs text-blue-400 hover:text-blue-300 transition-colors font-mono"
            >
              Switch to {isInteractive ? 'Guided' : 'Interactive'} Mode <span className="text-zinc-600">(Ctrl+`)</span>
            </button>
          </div>

          {isInteractive ? (
            /* Interactive Terminal Mode */
            <div className="flex flex-col min-h-[600px]">
              <TerminalOutput outputs={outputs} />
              <TerminalInput 
                onCommand={handleCommand}
                commandHistory={commandHistory}
              />
            </div>
          ) : (
            /* Guided Navigation Mode */
            <div className="flex min-h-[600px]">
              <TerminalSidebar 
                activeTab={activeTab}
                onTabChange={handleTabChange}
              />
              <TerminalContent activeTab={activeTab} />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
