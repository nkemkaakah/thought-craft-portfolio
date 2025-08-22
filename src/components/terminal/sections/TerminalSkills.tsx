import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SkillsInstaller } from '../animations/SkillsInstaller';

export const TerminalSkills: React.FC = () => {
  const [showInstaller, setShowInstaller] = useState(true);

  const skillCategories = {
    languages: ['Python', 'JavaScript', 'TypeScript', 'Java', 'HTML', 'CSS', 'SQL', 'NoSQL', 'C', 'C++'],
    frontend: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive Design'],
    backend: ['FastAPI', 'SpringBoot', 'Node.js', 'PostgreSQL', 'MongoDB', 'Vector DBs'],
    ai_ml: ['LangChain', 'OpenAI API', 'NLP', 'Machine Learning', 'LLM Integration', 'AI Development'],
    developer_tools: ['AWS', 'Postman', 'Git', 'Docker', 'Supabase', 'Firebase', 'Azure', 'Jira'],
    databases: ['PostgreSQL', 'MongoDB', 'Vector Databases', 'SQL', 'NoSQL', 'Database Design']
  };

  const handleInstallComplete = () => {
    setShowInstaller(false);
  };

  return (
    <div className="p-6 font-mono">
      <div className="mb-4 text-green-400">
        $ npm install @nkemka/skills
      </div>
      
      {showInstaller ? (
        <SkillsInstaller 
          skills={skillCategories}
          onComplete={handleInstallComplete}
        />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-4"
        >
          <div className="text-green-400 mb-6">
            <div>Package installation complete!</div>
            <div className="text-zinc-400 text-sm">
              Run 'npm ls' to view installed dependencies
            </div>
          </div>

          <div className="space-y-1 text-zinc-400 text-sm">
            <div>$ npm ls</div>
            <div>@nkemka/skills@latest</div>
          </div>

          <div className="ml-4 space-y-4">
            {Object.entries(skillCategories).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
                className="space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">├──</span>
                  <span className="text-blue-400 font-semibold">
                    {category}@latest
                  </span>
                  <span className="text-zinc-500">({skills.length} dependencies)</span>
                </div>
                <div className="ml-6 space-y-1">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + (index * 0.1) + (skillIndex * 0.05) }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-zinc-600">
                        {skillIndex === skills.length - 1 ? '└──' : '├──'}
                      </span>
                      <span className="text-zinc-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-6 text-green-400 text-sm"
          >
            <div>✓ All packages installed successfully</div>
            <div className="text-zinc-400">
              Total: {Object.values(skillCategories).flat().length} skills available
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};
