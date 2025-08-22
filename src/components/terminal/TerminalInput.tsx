import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalInputProps {
  onCommand: (command: string) => void;
  commandHistory: string[];
}

export const TerminalInput: React.FC<TerminalInputProps> = ({ onCommand, commandHistory }) => {
  const [currentCommand, setCurrentCommand] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus input when component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentCommand.trim()) {
      onCommand(currentCommand.trim());
      setCurrentCommand('');
      setHistoryIndex(-1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentCommand('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Basic tab completion for common commands
      const commands = ['help', 'clear', 'ls', 'cat', 'cd', 'pwd', 'whoami', 'date', 'echo', 'ps', 'top', 'history', 'uname', 'neofetch', 'github', 'linkedin', 'email'];
      const matches = commands.filter(cmd => cmd.startsWith(currentCommand));
      if (matches.length === 1) {
        setCurrentCommand(matches[0] + ' ');
      }
    }
  };

  return (
    <div className="flex items-center gap-2 p-4 border-t border-zinc-700 bg-zinc-900/50">
      <span className="text-green-400 font-mono text-sm">
        <span className="text-green-400">nkemka@portfolio</span>
        <span className="text-blue-400">:~/</span>
        <span className="text-white">$</span>
      </span>
      <form onSubmit={handleSubmit} className="flex-1">
        <input
          ref={inputRef}
          type="text"
          value={currentCommand}
          onChange={(e) => setCurrentCommand(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent text-white font-mono text-sm outline-none caret-green-400"
          placeholder="Type 'help' for available commands"
          autoComplete="off"
          spellCheck="false"
        />
      </form>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="text-green-400 font-mono"
      >
        █
      </motion.span>
    </div>
  );
};
