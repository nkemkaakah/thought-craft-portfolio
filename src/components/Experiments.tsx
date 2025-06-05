
import { Beaker, Lightbulb, Shield, Globe, Database, BookOpen, GraduationCap } from 'lucide-react';

export const Experiments = () => {
  const experiments = [
    {
      icon: Shield,
      title: "Cybersecurity Mastery",
      status: "Learning",
      description: "Deep diving into cybersecurity fundamentals through comprehensive Udemy coursework, covering network security, ethical hacking, and threat analysis.",
      nextSteps: "Complete penetration testing modules and earn cybersecurity certification.",
      techStack: ["Kali Linux", "Wireshark", "Metasploit", "OWASP"],
      stage: "35%",
      type: "course"
    },
    {
      icon: Globe,
      title: "WordPress Development",
      status: "Learning",
      description: "Mastering WordPress development from themes to plugins through structured Udemy training, focusing on custom solutions and performance optimization.",
      nextSteps: "Build custom theme from scratch and deploy client-ready WordPress solutions.",
      techStack: ["WordPress", "PHP", "MySQL", "Custom Themes"],
      stage: "60%",
      type: "course"
    },
    {
      icon: Database,
      title: "Advanced Full-Stack Platform",
      status: "Building",
      description: "Developing a cutting-edge full-stack application using modern technologies and cloud infrastructure to solve real-world problems.",
      nextSteps: "Implement authentication system and deploy to AWS with CI/CD pipeline.",
      techStack: ["Next.js", "Django", "PostgreSQL", "AWS", "Docker"],
      stage: "45%",
      type: "project"
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning Journey",
      status: "Ongoing",
      description: "Staying ahead of the curve by constantly exploring new technologies, frameworks, and industry best practices.",
      nextSteps: "Explore AI/ML integration and cloud-native architectures.",
      techStack: ["Various", "Emerging Tech", "Best Practices"],
      stage: "∞",
      type: "mindset"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Learning': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Building': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Ongoing': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'course': return <BookOpen size={12} className="text-purple-400" />;
      case 'project': return <Database size={12} className="text-green-400" />;
      case 'mindset': return <GraduationCap size={12} className="text-blue-400" />;
      default: return null;
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Beaker className="text-purple-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Skills in Progress
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Currently expanding my expertise through hands-on learning and real-world projects. 
            Here's what I'm diving into right now.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {experiments.map((experiment, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <experiment.icon className="text-white" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">{experiment.title}</h3>
                    <div className="flex items-center gap-2">
                      {getTypeIcon(experiment.type)}
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(experiment.status)}`}>
                        {experiment.status}
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-2 mb-4">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: experiment.stage === "∞" ? "100%" : experiment.stage }}
                    ></div>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {experiment.description}
              </p>

              <div className="mb-4">
                <h4 className="text-purple-400 font-semibold mb-2 flex items-center gap-2">
                  <Lightbulb size={16} />
                  What's Next:
                </h4>
                <p className="text-gray-300 text-sm">
                  {experiment.nextSteps}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {experiment.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-slate-700/50 text-gray-300 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <p className="text-lg text-gray-300 mb-4">
              📚 <strong>Learning Philosophy:</strong> "Stay curious, stay growing."
            </p>
            <p className="text-purple-400">
              Every skill learned today becomes tomorrow's competitive advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
