import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CurlAnimationProps {
  data: Record<string, any>;
  onComplete?: () => void;
}

const spinnerFrames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

export const CurlAnimation: React.FC<CurlAnimationProps> = ({ data, onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [spinnerIndex, setSpinnerIndex] = useState(0);
  const [response, setResponse] = useState('');

  useEffect(() => {
    const spinnerInterval = setInterval(() => {
      setSpinnerIndex((prev) => (prev + 1) % spinnerFrames.length);
    }, 100);

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
      setResponse(JSON.stringify(data, null, 2));
      if (onComplete) onComplete();
    }, 2500);

    return () => {
      clearInterval(spinnerInterval);
      clearTimeout(loadingTimeout);
    };
  }, [data, onComplete]);

  if (!isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2 text-green-400 text-sm">
          <span>HTTP/1.1 200 OK</span>
          <span className="text-zinc-500">• Response time: 247ms</span>
        </div>
        
        <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700">
          <pre className="text-white text-sm overflow-auto font-mono whitespace-pre-wrap">
            {response}
          </pre>
        </div>

        <div className="text-zinc-400 text-xs">
          Connection closed by remote host.
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-2 font-mono">
      <div className="flex items-center gap-2 text-green-400">
        <span className="animate-spin">{spinnerFrames[spinnerIndex]}</span>
        <span>Connecting to api.nkemka.dev...</span>
      </div>
      
      <div className="text-zinc-400 text-sm space-y-1 ml-4">
        <div>• Resolving host...</div>
        <div>• Establishing TLS connection...</div>
        <div>• Sending GET request...</div>
        <div>• Waiting for response...</div>
      </div>
    </div>
  );
};
