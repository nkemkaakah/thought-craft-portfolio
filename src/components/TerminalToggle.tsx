import { Terminal, Palette } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTerminalMode } from '@/contexts/TerminalModeContext';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export const TerminalToggle = () => {
  const { isTerminalMode, toggleTerminalMode } = useTerminalMode();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.button
            onClick={toggleTerminalMode}
            className={`fixed top-20 right-4 cursor-pointer z-50 w-12 h-12 backdrop-blur-sm border rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-lg ${
              isTerminalMode 
                ? 'bg-zinc-800/90 border-zinc-700/50 hover:bg-zinc-700/90' 
                : 'bg-slate-800/90 border-slate-700/50 hover:bg-slate-700/90'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={false}
              animate={{ rotate: isTerminalMode ? 0 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isTerminalMode ? (
                <Palette size={20} className="text-purple-400" />
              ) : (
                <Terminal size={20} className="text-green-400" />
              )}
            </motion.div>
          </motion.button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p className="text-sm font-mono">
            {isTerminalMode ? 'Portfolio Theme' : 'Terminal Theme'}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
