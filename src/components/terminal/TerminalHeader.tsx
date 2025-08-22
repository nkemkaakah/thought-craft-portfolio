import React from 'react';

export const TerminalHeader: React.FC = () => {
  return (
    <div className="bg-zinc-800 px-4 py-3 flex items-center gap-3 border-b border-zinc-700">
      {/* Traffic Light Buttons */}
      <div className="flex gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      
      {/* Terminal Title */}
      <div className="text-zinc-400 text-sm hidden md:block font-mono">
        nkemkaakah@Nkemkas-MacBook-Pro:~/portfolio$
      </div>
    </div>
  );
};
