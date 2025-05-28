
import { Brain, Code, Lightbulb, Target } from 'lucide-react';

export const Philosophy = () => {
  const beliefs = [
    {
      icon: Code,
      title: "Good code doesn't just compile",
      subtitle: "It communicates.",
      description: "Clean, readable code is a love letter to your future self and your teammates."
    },
    {
      icon: Brain,
      title: "AI shouldn't replace thinking",
      subtitle: "It should stretch it.",
      description: "The best AI tools amplify human creativity and problem-solving, not replace it."
    },
    {
      icon: Target,
      title: "Build for impact",
      subtitle: "Not just impressive.",
      description: "Technology should solve real problems and make people's lives genuinely better."
    },
    {
      icon: Lightbulb,
      title: "Stay curious",
      subtitle: "Always learning.",
      description: "The moment you stop learning is the moment you start becoming irrelevant."
    }
  ];

  return (
    <section id="philosophy" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What I Believe In
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            These principles guide every line of code I write and every problem I solve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {beliefs.map((belief, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <belief.icon className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {belief.title}
                  </h3>
                  <p className="text-purple-400 font-medium mb-3">
                    {belief.subtitle}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {belief.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
