import React from 'react';
import { TypewriterText } from '../animations/TypewriterText';

export const TerminalAbout: React.FC = () => {
  const aboutText = `$ cat about.txt

Hi, I'm Nkemka Akah 👋

Seasoned full-stack web developer leveraging AI to craft scalable, 
real-world solutions and currently driving innovation in recruitment tech.

I build tools that think, so you can think bigger.

📍 Location: London, UK
🔥 Currently working at: Rulebase
☕ Fueled by: Curiosity and coffee
⚡ Focus: Building impactful solutions that make a difference

Core Philosophy:
• Write code that solves real problems
• Leverage AI to amplify human potential  
• Build tools that scale and make impact
• Always be learning, always be building

Skills: Full-Stack Development, AI Integration, Problem Solving
Experience: Rulebase, Microsoft, Zenstrin, Iwemi Research

Type 'help' for available commands.

`;

  return (
    <div className="p-6">
      <TypewriterText 
        text={aboutText}
        speed={15}
        className="min-h-[400px]"
      />
    </div>
  );
};
