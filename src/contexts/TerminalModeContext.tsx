import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TerminalThemeContextType {
  isTerminalTheme: boolean;
  toggleTheme: () => void;
}

const TerminalThemeContext = createContext<TerminalThemeContextType | undefined>(undefined);

export const useTerminalMode = () => {
  const context = useContext(TerminalThemeContext);
  if (!context) {
    throw new Error('useTerminalMode must be used within a TerminalModeProvider');
  }
  return {
    isTerminalMode: context.isTerminalTheme,
    toggleTerminalMode: context.toggleTheme
  };
};

interface TerminalModeProviderProps {
  children: ReactNode;
}

export const TerminalModeProvider: React.FC<TerminalModeProviderProps> = ({ children }) => {
  const [isTerminalTheme, setIsTerminalTheme] = useState(false);

  const toggleTheme = () => {
    setIsTerminalTheme(prev => !prev);
  };

  return (
    <TerminalThemeContext.Provider value={{ isTerminalTheme, toggleTheme }}>
      {children}
    </TerminalThemeContext.Provider>
  );
};
