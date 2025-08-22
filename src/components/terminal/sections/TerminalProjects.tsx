import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Lock } from 'lucide-react';

export const TerminalProjects: React.FC = () => {
  const [displayedProjects, setDisplayedProjects] = useState<number>(0);

  const projects = [
    {
      name: 'voxguard/',
      permissions: 'drwxr-xr-x',
      owner: 'nkemka',
      group: 'staff',
      size: '8192',
      date: 'Dec 20 2024',
      description: 'Real-time voice fraud detection platform',
      tech: ['FastAPI', 'Typescript', 'LangGraph', 'Postgres', 'Python', 'React', 'TailwindCSS'],
      status: 'production',
      url: 'https://voxguard.vercel.app/',
      github: 'https://github.com/nkemkaakah/voxguard',
      isPrivate: false,
      metrics: '82% deepfake accuracy'
    },
    {
      name: 'zenfinder/',
      permissions: 'drwxr-xr-x',
      owner: 'nkemka',
      group: 'staff',
      size: '4096',
      date: 'Oct 15 2024',
      description: 'AI-powered talent and lead discovery tool',
      tech: ['Python', 'LangChain', 'OpenAI', 'React'],
      status: 'production',
      url: 'https://zenfinder.ai/',
      isPrivate: true,
      metrics: '50,000+ users'
    },
   
    {
      name: 'iwemiresearch/',
      permissions: 'drwxr-xr-x',
      owner: 'nkemka',
      group: 'staff',
      size: '2048',
      date: 'Aug 12 2024',
      description: 'E-commerce platform with secure payments',
      tech: ['React', 'Django', 'Stripe', 'Git'],
      status: 'production',
      url: 'https://www.iwemiresearch.org/',
      isPrivate: true,
      metrics: '30% efficiency boost'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayedProjects(prev => {
        if (prev < projects.length) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 800);

    return () => clearInterval(timer);
  }, [projects.length]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'production': return 'text-green-400';
      case 'deployed': return 'text-blue-400';
      case 'prototype': return 'text-yellow-400';
      default: return 'text-zinc-400';
    }
  };

  const getTechBadgeColor = (tech: string) => {
    const colors = {
      'Python': 'bg-blue-500/20 text-blue-400',
      'React': 'bg-cyan-500/20 text-cyan-400',
      'Node.js': 'bg-green-500/20 text-green-400',
      'Django': 'bg-emerald-500/20 text-emerald-400',
      'PostgreSQL': 'bg-purple-500/20 text-purple-400',
      'LangChain': 'bg-orange-500/20 text-orange-400',
      'OpenAI': 'bg-pink-500/20 text-pink-400',
    };
    return colors[tech as keyof typeof colors] || 'bg-zinc-600/20 text-zinc-400';
  };

  return (
    <div className="p-6 font-mono text-sm">
      <div className="mb-4 text-green-400">
        $ ls -la projects/
      </div>
      
      <div className="space-y-1 mb-6">
        <div className="text-zinc-400">total {projects.length}</div>
        
        {projects.slice(0, displayedProjects).map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            className="group"
          >
            {/* Directory listing line */}
            <div className="flex items-center gap-2 text-zinc-300 hover:bg-zinc-800/30 px-2 py-1 rounded">
              <span className="text-blue-400">{project.permissions}</span>
              <span className="w-12 text-zinc-500">{project.owner}</span>
              <span className="w-12 text-zinc-500">{project.group}</span>
              <span className="w-16 text-right text-zinc-500">{project.size}</span>
              <span className="w-24 text-zinc-500">{project.date}</span>
              <span className="text-purple-400 font-medium flex items-center gap-2">
                {project.name}
                {project.isPrivate && <Lock size={12} className="text-yellow-400" />}
              </span>
            </div>

            {/* Project details (shown on hover/focus) */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              transition={{ duration: 0.3, delay: (index * 0.2) + 0.3 }}
              className="ml-8 mt-2 p-3 bg-zinc-800/20 rounded border-l-2 border-purple-500/30"
            >
              <div className="space-y-2">
                <div className="text-zinc-300">{project.description}</div>
                
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500">Status:</span>
                  <span className={`${getStatusColor(project.status)} capitalize font-medium`}>
                    {project.status}
                  </span>
                  <span className="text-zinc-500">•</span>
                  <span className="text-zinc-400">{project.metrics}</span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded text-xs font-medium ${getTechBadgeColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-3">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-green-400 hover:text-green-300 text-xs font-medium"
                    >
                      <ExternalLink size={12} />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-xs font-medium"
                    >
                      <Github size={12} />
                      Source Code
                    </a>
                  )}
                  {project.isPrivate && !project.github && (
                    <span className="flex items-center gap-1 text-yellow-400 text-xs">
                      <Lock size={12} />
                      Private Repository
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {displayedProjects === projects.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="text-zinc-400 text-xs"
        >
          <div>Found {projects.length} projects in ~/portfolio/projects/</div>
          <div className="mt-1">
            Use 'cd project_name/' to explore individual projects
          </div>
        </motion.div>
      )}
    </div>
  );
};
