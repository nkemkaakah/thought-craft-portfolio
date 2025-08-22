import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SkillsInstallerProps {
  skills: Record<string, string[]>;
  onComplete?: () => void;
}

const spinnerFrames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

export const SkillsInstaller: React.FC<SkillsInstallerProps> = ({ skills, onComplete }) => {
  const [isInstalling, setIsInstalling] = useState(true);
  const [installedPackages, setInstalledPackages] = useState<string[]>([]);
  const [spinnerIndex, setSpinnerIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState('');
  const [progress, setProgress] = useState(0);

  const allSkills = Object.values(skills).flat();
  const totalSkills = allSkills.length;

  useEffect(() => {
    if (!isInstalling) return;

    const interval = setInterval(() => {
      setSpinnerIndex((prev) => (prev + 1) % spinnerFrames.length);
    }, 100);

    // Simulate package installation progress
    const categories = Object.keys(skills);
    let categoryIndex = 0;
    let skillIndex = 0;
    let installedCount = 0;

    const installProgress = setInterval(() => {
      if (categoryIndex < categories.length) {
        const category = categories[categoryIndex];
        const categorySkills = skills[category];
        
        setCurrentCategory(category);
        
        if (skillIndex < categorySkills.length) {
          const skill = categorySkills[skillIndex];
          setInstalledPackages(prev => [...prev, skill]);
          installedCount++;
          setProgress(Math.round((installedCount / totalSkills) * 100));
          skillIndex++;
        } else {
          categoryIndex++;
          skillIndex = 0;
        }
      } else {
        // All packages installed
        clearInterval(installProgress);
        setTimeout(() => {
          setIsInstalling(false);
          if (onComplete) onComplete();
        }, 1000);
      }
    }, 150);

    return () => {
      clearInterval(interval);
      clearInterval(installProgress);
    };
  }, [isInstalling, skills, totalSkills, onComplete]);

  if (!isInstalling) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="text-green-400">
          ✓ Successfully installed {totalSkills} packages
        </div>
        
        <div className="space-y-4">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="space-y-2"
            >
              <h4 className="text-purple-400 font-semibold capitalize">
                @nkemka/{category}
              </h4>
              <div className="flex flex-wrap gap-2 ml-4">
                {skillList.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (index * 0.2) + (skillIndex * 0.1) }}
                    className="bg-zinc-700/50 text-gray-300 text-xs px-2 py-1 rounded"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-2 font-mono text-sm">
      <div className="flex items-center gap-2 text-green-400">
        <span className="animate-spin">{spinnerFrames[spinnerIndex]}</span>
        <span>Installing @nkemka/skills packages...</span>
      </div>
      
      {currentCategory && (
        <div className="text-zinc-400 ml-4">
          Installing {currentCategory} dependencies...
        </div>
      )}

      <div className="text-zinc-500 text-xs">
        Progress: {installedPackages.length}/{totalSkills} packages ({progress}%)
      </div>

      {installedPackages.length > 0 && (
        <div className="space-y-1 ml-4">
          {installedPackages.slice(-3).map((pkg, index) => (
            <motion.div
              key={`${pkg}-${index}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-zinc-400 text-xs"
            >
              ✓ {pkg}@latest
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};
