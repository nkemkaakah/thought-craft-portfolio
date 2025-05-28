
import { useEffect, useState } from 'react';
import { TrendingUp, Users, Clock, Award } from 'lucide-react';

export const ImpactMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);

  const metrics = [
    {
      icon: Clock,
      value: 85,
      suffix: '%',
      label: 'Reduction in sourcing time',
      description: 'Zenfinder impact',
      color: 'text-green-400'
    },
    {
      icon: Users,
      value: 50000,
      suffix: '+',
      label: 'Users served',
      description: 'Across all platforms',
      color: 'text-blue-400'
    },
    {
      icon: TrendingUp,
      value: 500,
      suffix: '+',
      label: 'Orders processed weekly',
      description: 'GrubGo efficiency',
      color: 'text-purple-400'
    },
    {
      icon: Award,
      value: 15,
      suffix: '+',
      label: 'Projects delivered',
      description: 'On time and on budget',
      color: 'text-yellow-400'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('impact-metrics');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const duration = 2000; // 2 seconds
        const increment = value / (duration / 50);
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= value) {
            setDisplayValue(value);
            clearInterval(timer);
          } else {
            setDisplayValue(Math.floor(current));
          }
        }, 50);

        return () => clearInterval(timer);
      }
    }, [isVisible, value]);

    return (
      <span className="text-4xl md:text-5xl font-bold">
        {displayValue.toLocaleString()}{suffix}
      </span>
    );
  };

  return (
    <section id="impact-metrics" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real-World Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that matter - the tangible value created through thoughtful engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 text-center group hover:transform hover:scale-105"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 mb-6 group-hover:scale-110 transition-transform duration-200`}>
                <metric.icon className={`${metric.color}`} size={32} />
              </div>
              
              <div className={`${metric.color} mb-2`}>
                <AnimatedNumber value={metric.value} suffix={metric.suffix} />
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">
                {metric.label}
              </h3>
              
              <p className="text-gray-400 text-sm">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 inline-block">
            <p className="text-gray-300 text-lg">
              "Good metrics tell a story. Great metrics inspire action."
            </p>
            <p className="text-purple-400 mt-2 font-medium">- My approach to measuring success</p>
          </div>
        </div>
      </div>
    </section>
  );
};
