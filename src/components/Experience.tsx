
import { useState } from 'react';
import { Calendar, MapPin, Users, Code, Rocket } from 'lucide-react';

export const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [skillFilter, setSkillFilter] = useState('All');

  const experiences = [
    {
      company: "Microsoft",
      role: "Software Engineer Intern",
      period: "June 2023 - August 2023",
      location: "Lagos, Nigeria",
      type: "Internship",
      challenges: "Cross-platform deployment complexity, cloud service integration, and infrastructure reliability",
      actions: "Self-taught Bash for automation, supported data validation across AWS/Azure/GCP, collaborated with teams to troubleshoot and refine deployment pipelines",
      results: "Improved backend service scalability and reliability, streamlined deployment workflows, and enhanced platform resilience through better collaboration",
      skills: ["Bash", "SQL", "AWS", "Azure", "Google Cloud", "Linux"],
      teamSize: "11 developers"
    },
    {
      company: "Zenstrin",
      role: "Software Engineer",
      period: "2024 - Present",
      location: "Remote",
      type: "Contract",
      challenges: "Real-time data extraction, reducing LLM hallucinations, aligning AI output with business needs",
      actions: "Developed Python-based AI search platform, engineered scalable LLM pipelines, fine-tuned prompts using NLP and guard rails, and collaborated cross-functionally on feature alignment",
      results: "Cut manual data extraction effort by 70%, boosted engagement by 30% through improved LLM responsiveness, and delivered clean, maintainable AI infrastructure",
      skills: ["Python", "LLMs", "Next JS", "NLP", "Backend Development","Data Pipelines", "JSON", "Dashboarding"],
      teamSize: "2 developers"
    },
    {
      company: "Iwemi",
      role: "Web Developer",
      location: "Remote",
      type: "Freelance",
      challenges: "Building a full-stack platform with limited team size, ensuring high performance and payment reliability",
      actions: "Led front-end architecture with React, integrated with Django APIs, automated Stripe payments, and ran performance testing",
      results: "Improved platform stability, boosted efficiency by 30%, and delivered a responsive, user-friendly e-commerce experience on time",
      skills: ["React JS", "Django", "Stripe", "Git", "Tailwind CSS", "Frontend Development"],
      teamSize: "2 developers"
    }
  ];

  const allSkills = [...new Set(experiences.flatMap(exp => exp.skills))];
  const filteredExperiences = skillFilter === 'All' 
    ? experiences 
    : experiences.filter(exp => exp.skills.includes(skillFilter));

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interactive Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Filter by technology to see relevant experience, or explore the full journey.
          </p>
        </div>

        {/* Skill Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSkillFilter('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                skillFilter === 'All'
                  ? 'bg-purple-600 text-white'
                  : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
              }`}
            >
              All Experience
            </button>
            {allSkills.map((skill) => (
              <button
                key={skill}
                onClick={() => setSkillFilter(skill)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  skillFilter === skill
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {filteredExperiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <h4 className="text-xl text-purple-400 font-semibold mb-4">{exp.company}</h4>
                  
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      <span>{exp.teamSize}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:w-2/3">
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <h5 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                        Challenges
                      </h5>
                      <p className="text-gray-300 text-sm">{exp.challenges}</p>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-semibold mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                        Actions
                      </h5>
                      <p className="text-gray-300 text-sm">{exp.actions}</p>
                    </div>
                    <div>
                      <h5 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        Results
                      </h5>
                      <p className="text-gray-300 text-sm">{exp.results}</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-purple-400 font-semibold mb-3">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            skillFilter === skill
                              ? 'bg-purple-600 text-white'
                              : 'bg-slate-700/50 text-gray-300'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
