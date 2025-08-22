import React from 'react';
import { TypewriterText } from '../animations/TypewriterText';

export const TerminalEducation: React.FC = () => {
  const educationText = `$ cat education.txt

╔══════════════════════════════════════════════════════════════╗
║                        EDUCATION RECORD                      ║
╚══════════════════════════════════════════════════════════════╝

🎓 UNIVERSITY OF MANCHESTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Degree: Bachelor of Science in Computer Science
Duration: 2022 - Present (Expected 2025)
Location: Manchester, United Kingdom
Status: Currently pursuing

📚 CORE MODULES:
• Software Engineering & Project Management
• Data Structures & Algorithms  
• Database Systems & Architecture
• Web Development Technologies
• Artificial Intelligence & Machine Learning
• Computer Networks & Security
• Human-Computer Interaction

🏆 NOTABLE ACHIEVEMENTS:
• Consistent Dean's List recognition
• Active member of Computer Science Society
• Participant in multiple hackathons and coding competitions
• Led group projects with successful deployment outcomes

🔬 RESEARCH INTERESTS:
• AI-powered web applications
• Large Language Model integration
• User experience optimization
• Scalable system architecture

💡 PRACTICAL EXPERIENCE:
During studies, I've applied theoretical knowledge through:
• Multiple internships (Microsoft, Zenstrin)
• Freelance development projects
• Open-source contributions
• Personal projects showcased in portfolio

📋 RELEVANT COURSEWORK:
• Advanced Web Technologies (JavaScript, React, Node.js)  
• Database Design & Implementation (SQL, NoSQL)
• Software Engineering Principles & Practices
• Algorithms & Computational Complexity
• Computer Systems & Architecture

Current Focus: Bridging academic learning with real-world 
software development, specializing in full-stack web development 
and AI integration.

EOF
`;

  return (
    <div className="p-6">
      <TypewriterText 
        text={educationText}
        speed={10}
        className="min-h-[500px]"
      />
    </div>
  );
};
