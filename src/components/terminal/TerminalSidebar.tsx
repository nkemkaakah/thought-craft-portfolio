import React from 'react';
import { User, Code, FolderOpen, GitCommit, GraduationCap, Mail } from 'lucide-react';

interface TerminalSidebarProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const terminalTabs = [
  { id: 'me', label: 'About', icon: User, command: 'cat about.txt' },
  { id: 'skills', label: 'Skills', icon: Code, command: 'npm install @nkemka/skills' },
  { id: 'projects', label: 'Projects', icon: FolderOpen, command: 'ls -la projects/' },
  { id: 'experience', label: 'Experience', icon: GitCommit, command: 'git log --oneline experience' },
  { id: 'education', label: 'Education', icon: GraduationCap, command: 'cat education.txt' },
  { id: 'contact', label: 'Contact', icon: Mail, command: 'curl -X GET /api/contact' }
];

export const TerminalSidebar: React.FC<TerminalSidebarProps> = ({ activeTab, onTabChange }) => {
  return (
    <>
      {/* Mobile: Horizontal tabs */}
      <div className="md:hidden border-b border-zinc-700">
        <div className="flex overflow-x-auto scrollbar-hide">
          {terminalTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex-shrink-0 flex flex-col items-center gap-1 px-4 py-3 text-xs font-mono transition-colors ${
                  activeTab === tab.id
                    ? 'text-green-400 border-b-2 border-green-400'
                    : 'text-zinc-400 hover:text-zinc-300'
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Desktop: Vertical sidebar */}
      <div className="hidden md:block w-64 border-r border-zinc-700 bg-zinc-900/50">
        <div className="p-4">
          <div className="space-y-2">
            {terminalTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-mono transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-green-400/10 text-green-400 border border-green-400/30'
                      : 'text-zinc-400 hover:text-zinc-300 hover:bg-zinc-800/50'
                  }`}
                >
                  <Icon size={16} />
                  <div className="flex-1 text-left">
                    <div className="font-medium">{tab.label}</div>
                    <div className="text-xs text-zinc-500 mt-0.5">{tab.command}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
