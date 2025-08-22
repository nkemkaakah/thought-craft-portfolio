/* eslint-disable no-control-regex */
import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TerminalOutput as OutputType } from './TerminalCommandHandler';

interface TerminalOutputProps {
  outputs: OutputType[];
}

export const TerminalOutput: React.FC<TerminalOutputProps> = ({ outputs }) => {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll to bottom when new output is added
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [outputs]);

  const formatOutput = (content: string, type: string) => {
    if (content === 'clear') return null;
    
    // Handle ANSI color codes for directory listings
    const coloredContent = content.replace(/\u001b\[34m(.*?)\u001b\[0m/g, '<span class="text-blue-400">$1</span>');
    
    return (
      <pre 
        className={`font-mono text-sm whitespace-pre-wrap ${
          type === 'error' ? 'text-red-400' : 
          type === 'command' ? 'text-green-400' : 
          'text-zinc-300'
        }`}
        dangerouslySetInnerHTML={{ __html: coloredContent }}
      />
    );
  };

  // Handle clear command
  if (outputs.length > 0 && outputs[outputs.length - 1]?.content === 'clear') {
    return (
      <div className="flex-1 p-4 overflow-y-auto terminal-scrollbar bg-zinc-950">
        <div className="text-green-400 font-mono text-sm mb-4">
          Terminal cleared. Type 'help' for available commands.
        </div>
        <div ref={endRef} />
      </div>
    );
  }

  return (
    <div className="flex-1 p-4 overflow-y-auto terminal-scrollbar bg-zinc-950">
      {outputs.length === 0 && (
        <div className="text-green-400 font-mono text-sm mb-4">
          <div className="mb-2">Welcome to Nkemka's Interactive Portfolio Terminal!</div>
          <div className="text-zinc-400 text-xs mb-4">
            Type 'help' to see available commands or try:
          </div>
          <div className="text-blue-400 text-xs space-y-1 ml-4">
            <div>→ cat about.txt</div>
            <div>→ ls projects/</div>
            <div>→ cat skills.json</div>
          </div>
        </div>
      )}
      
      <AnimatePresence>
        {outputs.map((output, index) => {
          const formattedContent = formatOutput(output.content, output.type);
          if (!formattedContent) return null;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="mb-2"
            >
              {formattedContent}
            </motion.div>
          );
        })}
      </AnimatePresence>
      
      <div ref={endRef} />
    </div>
  );
};
