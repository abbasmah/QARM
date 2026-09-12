import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const allIndustries = [
  { name: 'Real Estate', href: '/real-estate' },
  { name: 'Mortgage & Lending', href: '/mortgage' },
  { name: 'Financial Services & Insurance', href: '/financial-services' },
  { name: 'Professional Services', href: '/professional-services' },
];

export function RelatedIndustries({ current }: { current: string }) {
  const others = allIndustries.filter((i) => i.href !== current);
  return (
    <section className="py-16 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-3">Explore Other Industries</p>
          <p className="text-slate-400 text-sm">The same operating system, adapted to every relationship-driven business.</p>
        </AnimatedSection>
        <div className="grid sm:grid-cols-3 gap-4">
          {others.map((ind) => (
            <Link key={ind.href} to={ind.href}
              className="group glass-card rounded-xl p-5 flex items-center justify-between hover:border-[#2d5bb5]/40 transition-all duration-300">
              <span className="text-sm font-semibold text-white">{ind.name}</span>
              <ArrowRight size={16} className="text-[#7aa3e5] group-hover:translate-x-1 transition-transform shrink-0 ml-3" />
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/industries" className="text-sm text-[#7aa3e5] hover:text-white font-semibold transition-colors">
            View all industries &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
