
import { Hero } from '@/components/Hero';
import { Philosophy } from '@/components/Philosophy';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { ImpactMetrics } from '@/components/ImpactMetrics';
import { Experiments } from '@/components/Experiments';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      <Navigation />
      <Hero />
      <Philosophy />
      <Projects />
      <Experience />
      <ImpactMetrics />
      <Experiments />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
