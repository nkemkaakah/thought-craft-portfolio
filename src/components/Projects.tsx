
import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "Zenfinder",
      description: "AI-powered recruitment platform that revolutionizes how companies find and connect with top talent.",
      purpose: "Built to solve the inefficiency in modern recruitment - helping companies find the right candidates 85% faster.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      tags: ["#AI", "#ProblemSolver", "#ProductThinking"],
      techStack: ["React", "Node.js", "OpenAI", "PostgreSQL"],
      metrics: "Reduced sourcing time by 85% for 50k+ users",
      links: {
        live: "#",
        github: "#",
        post: "#"
      }
    },
    {
      title: "GrubGo",
      description: "Smart food delivery optimization system that reduces delivery times and improves customer satisfaction.",
      purpose: "Created to tackle the last-mile delivery problem with intelligent routing and real-time optimization.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      tags: ["#LLM", "#Optimization", "#RealTime"],
      techStack: ["Python", "FastAPI", "Redis", "React"],
      metrics: "Processed 500+ simulated orders/week during testing",
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      title: "CodeMentor AI",
      description: "Intelligent code review assistant that provides contextual feedback and learning suggestions.",
      purpose: "Designed to accelerate developer learning by providing instant, personalized code feedback.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      tags: ["#AI", "#Education", "#DeveloperTools"],
      techStack: ["TypeScript", "OpenAI", "WebSockets", "MongoDB"],
      metrics: "Helped 1000+ developers improve code quality",
      links: {
        live: "#",
        github: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projects with Purpose
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Each project solves a real problem and creates measurable impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-purple-600/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-purple-400 font-semibold mb-2">Why I built this:</h4>
                  <p className="text-gray-300 text-sm">{project.purpose}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-purple-400 font-semibold mb-2">Impact:</h4>
                  <p className="text-green-400 text-sm font-medium">{project.metrics}</p>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-slate-700/50 text-gray-300 text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="flex items-center gap-2 border border-gray-600 hover:border-gray-500 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
