
import { Hero } from '@/components/Hero';
import { Philosophy } from '@/components/Philosophy';
import { Projects } from '@/components/Projects';
import Experience from '@/components/Experience';
import { ImpactMetrics } from '@/components/ImpactMetrics';
import { Experiments } from '@/components/Experiments';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Navigation } from '@/components/Navigation';
import { Terminal } from '@/components/terminal/Terminal';
import { TerminalToggle } from '@/components/TerminalToggle';
import { TerminalPrompt } from '@/components/TerminalPrompt';
import { useTerminalMode } from '@/contexts/TerminalModeContext';
import { AnimatePresence } from 'framer-motion';

const Index = () => {
  const { isTerminalMode } = useTerminalMode();

  return (
    <div className={`min-h-screen transition-all duration-500 ease-in-out ${isTerminalMode ? 'bg-zinc-950' : 'bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900'}`}>
      {/* Theme Toggle Button (Portfolio ⟷ Terminal) */}
      <TerminalToggle />
      
      {/* Terminal Mode Prompt - encourages users to try terminal theme */}
      <TerminalPrompt />
      
      <AnimatePresence mode="wait">
        {isTerminalMode ? (
          <Terminal key="terminal-theme" />
        ) : (
          <div key="portfolio-theme" className="min-h-screen">
            <Navigation />
            <Hero />
            <Philosophy />
            <Projects />
            <Experience />
            <ImpactMetrics />
            <Experiments />
            <Testimonials />
            <Contact />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
