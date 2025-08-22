import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TerminalHeader } from './TerminalHeader';
import { TerminalSidebar } from './TerminalSidebar';
import { TerminalContent } from './TerminalContent';

interface TerminalProps {
  className?: string;
}

const terminalVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 }
};

export const Terminal: React.FC<TerminalProps> = ({ className = "" }) => {
  const [activeTab, setActiveTab] = useState('me');

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

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
          
          {/* Main Content Area */}
          <div className="flex min-h-[600px]">
            {/* Sidebar and Horizontal Tabs */}
            <TerminalSidebar 
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />
            
            {/* Content Area */}
            <TerminalContent activeTab={activeTab} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
