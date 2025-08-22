import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitCommit, Calendar, MapPin, Users } from 'lucide-react';

export const TerminalExperience: React.FC = () => {
  const [displayedCommits, setDisplayedCommits] = useState(0);

  const experiences = [
    {
      hash: 'f9e8d7c',
      date: 'July 2025 - September 2025',
      company: 'Rulebase',
      role: 'Software Engineer Intern',
      location: 'London, UK',
      teamSize: 'Cross-functional team',
      type: 'Internship',
      message: 'feat: delivered React TypeScript components improving analyst speed by 35%',
      details: 'Built LLM-powered QA insights UI components, collaborated with ML teams on risk-scoring integration, optimized state management for compliance workflows',
      impact: 'Improved analyst decision-making speed by 35%, reduced compliance review latency by 20%',
      skills: ['React', 'TypeScript', 'Ruby on Rails', 'LLMs', 'API Design', 'UI/UX']
    },
    {
      hash: 'a1b2c3d',
      date: '2024-Present',
      company: 'Zenstrin',
      role: 'Software Engineer',
      location: 'Remote',
      teamSize: '2 developers',
      type: 'Contract',
      message: 'feat: built AI search platform reducing manual effort by 70%',
      details: 'Developed Python-based AI search platform, engineered scalable LLM pipelines, fine-tuned prompts using NLP and guard rails',
      impact: 'Cut manual data extraction effort by 70%, boosted engagement by 30%',
      skills: ['Python', 'LLMs', 'Next.js', 'NLP', 'Data Pipelines']
    },
    {
      hash: 'e4f5g6h',
      date: '2023',
      company: 'Microsoft',
      role: 'Software Engineer Intern',
      location: 'Lagos, Nigeria', 
      teamSize: '11 developers',
      type: 'Internship',
      message: 'fix: improved backend service scalability and cloud deployment',
      details: 'Self-taught Bash for automation, supported data validation across AWS/Azure/GCP, collaborated with teams to troubleshoot deployment pipelines',
      impact: 'Improved backend service scalability and reliability, streamlined deployment workflows',
      skills: ['Bash', 'SQL', 'AWS', 'Azure', 'Google Cloud', 'Linux']
    },
    {
      hash: 'i7j8k9l',
      date: '2024',
      company: 'Iwemi Research',
      role: 'Web Developer',
      location: 'Remote',
      teamSize: '2 developers',
      type: 'Freelance',
      message: 'feat: delivered responsive e-commerce platform with Stripe integration',
      details: 'Led front-end architecture with React, integrated with Django APIs, automated Stripe payments, and ran performance testing',
      impact: 'Improved platform stability, boosted efficiency by 30%',
      skills: ['React.js', 'Django', 'Stripe', 'Git', 'Tailwind CSS']
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayedCommits(prev => {
        if (prev < experiences.length) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [experiences.length]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Contract': return 'text-green-400';
      case 'Internship': return 'text-blue-400';
      case 'Freelance': return 'text-purple-400';
      case 'Full-time': return 'text-yellow-400';
      default: return 'text-zinc-400';
    }
  };

  return (
    <div className="p-6 font-mono text-sm">
      <div className="mb-4 text-green-400">
        $ git log --oneline experience
      </div>
      
      <div className="space-y-4">
        {experiences.slice(0, displayedCommits).map((exp, index) => (
          <motion.div
            key={exp.hash}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="group"
          >
            {/* Git commit line */}
            <div className="flex items-center gap-3 mb-2">
              <span className="text-yellow-400 font-mono">{exp.hash}</span>
              <span className="text-white">{exp.message}</span>
            </div>

            {/* Expanded commit details */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              transition={{ duration: 0.4, delay: (index * 0.3) + 0.2 }}
              className="ml-8 p-4 bg-zinc-800/20 rounded border-l-2 border-yellow-400/30 space-y-3"
            >
              {/* Header info */}
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <div className="flex items-center gap-2">
                  <GitCommit size={16} className="text-purple-400" />
                  <span className="text-purple-400 font-semibold">{exp.role}</span>
                  <span className="text-white">@</span>
                  <span className="text-blue-400 font-semibold">{exp.company}</span>
                </div>
                <div className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(exp.type)} bg-current bg-opacity-20`}>
                  {exp.type}
                </div>
              </div>

              {/* Meta information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-zinc-400 text-xs">
                <div className="flex items-center gap-1">
                  <Calendar size={12} />
                  <span>{exp.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={12} />
                  <span>{exp.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={12} />
                  <span>{exp.teamSize}</span>
                </div>
              </div>

              {/* Commit details */}
              <div className="space-y-2">
                <div>
                  <span className="text-zinc-500">Changes: </span>
                  <span className="text-zinc-300">{exp.details}</span>
                </div>
                <div>
                  <span className="text-zinc-500">Impact: </span>
                  <span className="text-green-400">{exp.impact}</span>
                </div>
              </div>

              {/* Technologies (like file changes) */}
              <div className="space-y-1">
                <div className="text-zinc-500 text-xs">Modified files:</div>
                <div className="flex flex-wrap gap-1 ml-2">
                  {exp.skills.map((skill, skillIndex) => {
                    // Map skills to appropriate file extensions
                    const getFileExtension = (skillName: string) => {
                      const skill = skillName.toLowerCase();
                      if (skill.includes('python') || skill.includes('llm')) return '.py';
                      if (skill.includes('react') || skill.includes('next')) return '.tsx';
                      if (skill.includes('javascript') || skill.includes('js')) return '.js';
                      if (skill.includes('typescript')) return '.ts';
                      if (skill.includes('sql')) return '.sql';
                      if (skill.includes('docker')) return '.dockerfile';
                      if (skill.includes('aws') || skill.includes('cloud')) return '.yml';
                      if (skill.includes('bash') || skill.includes('linux')) return '.sh';
                      if (skill.includes('django')) return '.py';
                      if (skill.includes('tailwind') || skill.includes('css')) return '.css';
                      if (skill.includes('git')) return '.gitignore';
                      if (skill.includes('data') || skill.includes('pipeline')) return '.py';
                      if (skill.includes('nlp') || skill.includes('ai')) return '.py';
                      return '.config';
                    };

                    const fileName = skill.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
                    const fileExt = getFileExtension(skill);
                    
                    return (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (index * 0.3) + 0.4 + (skillIndex * 0.05) }}
                        className="text-xs px-2 py-1 bg-zinc-700/50 text-zinc-300 rounded font-mono"
                      >
                        {fileName}{fileExt}
                      </motion.span>
                    );
                  })}
                </div>
              </div>

              {/* Diff stats */}
              <div className="text-xs text-zinc-500 border-t border-zinc-700 pt-2">
                <div className="flex items-center gap-4">
                  <span className="text-green-400">+{Math.floor(Math.random() * 500) + 100} additions</span>
                  <span className="text-red-400">-{Math.floor(Math.random() * 100) + 20} deletions</span>
                  <span>{exp.skills.length} files changed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {displayedCommits === experiences.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="mt-6 text-zinc-400 text-xs space-y-1"
        >
          <div>Found {experiences.length} commits in experience branch</div>
          <div>Use 'git show &lt;hash&gt;' to view detailed commit information</div>
          <div>Use 'git log --stat' to view file change statistics</div>
        </motion.div>
      )}
    </div>
  );
};
