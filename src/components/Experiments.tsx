
import { Beaker, Lightbulb, Rocket, Code, Brain, Zap } from 'lucide-react';

export const Experiments = () => {
  const experiments = [
    {
      icon: Brain,
      title: "AI Code Reviewer",
      status: "In Progress",
      description: "Building an intelligent code review system that learns from team preferences and coding standards.",
      nextSteps: "Implement context-aware suggestions and integrate with popular Git platforms.",
      techStack: ["OpenAI", "AST Parsing", "Python"],
      stage: "70%"
    },
    {
      icon: Zap,
      title: "Micro-Interaction Library",
      status: "Prototype",
      description: "A React library for beautiful, accessible micro-interactions that enhance user experience.",
      nextSteps: "Add more animation presets and create comprehensive documentation.",
      techStack: ["React", "Framer Motion", "TypeScript"],
      stage: "40%"
    },
    {
      icon: Rocket,
      title: "Voice-Controlled IDE",
      status: "Concept",
      description: "Exploring hands-free coding through voice commands and natural language processing.",
      nextSteps: "Build MVP with basic voice recognition and command mapping.",
      techStack: ["Web Speech API", "NLP", "VS Code Extension"],
      stage: "15%"
    },
    {
      icon: Code,
      title: "Smart Documentation Generator",
      status: "Beta",
      description: "Automatically generates and maintains code documentation using AI and static analysis.",
      nextSteps: "Improve accuracy and add support for more programming languages.",
      techStack: ["AST", "GPT-3.5", "Markdown"],
      stage: "85%"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Prototype': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Concept': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Beta': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Beaker className="text-purple-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Labs & Experiments
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Exploring the boundaries of what's possible. These are my playground projects 
            where curiosity meets code.
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
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(experiment.status)}`}>
                      {experiment.status}
                    </span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-2 mb-4">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: experiment.stage }}
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
              🧪 <strong>Lab Philosophy:</strong> "The best way to predict the future is to build it."
            </p>
            <p className="text-purple-400">
              Not every experiment makes it to production, but every experiment teaches something valuable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
