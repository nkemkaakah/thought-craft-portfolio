import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TerminalAbout } from './sections/TerminalAbout';
import { TerminalSkills } from './sections/TerminalSkills';
import { TerminalProjects } from './sections/TerminalProjects';
import { TerminalExperience } from './sections/TerminalExperience';
import { TerminalEducation } from './sections/TerminalEducation';
import { TerminalContact } from './sections/TerminalContact';

interface TerminalContentProps {
  activeTab: string;
}

const contentVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    x: -20,
    transition: { duration: 0.2 }
  }
};

const renderContent = (activeTab: string) => {
  switch (activeTab) {
    case 'me':
      return <TerminalAbout />;
    case 'skills':
      return <TerminalSkills />;
    case 'projects':
      return <TerminalProjects />;
    case 'experience':
      return <TerminalExperience />;
    case 'education':
      return <TerminalEducation />;
    case 'contact':
      return <TerminalContact />;
    default:
      return <TerminalAbout />;
  }
};

export const TerminalContent: React.FC<TerminalContentProps> = ({ activeTab }) => {
  return (
    <div className="flex-1 min-h-[500px] overflow-y-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="h-full"
        >
          {renderContent(activeTab)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
