import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Megaphone, PhoneCall, ClipboardList } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { useGetStarted } from '../context/GetStartedContext';

const CALENDLY_URL = 'https://calendly.com/theqarm-info/30min';

const pillars = [
  { icon: <BarChart3 size={20} />, name: 'AI & CRM Automation', orange: false },
  { icon: <Megaphone size={20} />, name: 'Growth & Marketing', orange: true },
  { icon: <PhoneCall size={20} />, name: 'Sales & Appointment Support', orange: false },
  { icon: <ClipboardList size={20} />, name: 'Managed Operations', orange: true },
];

export function IndustriesPage() {
  const onGetStarted = useGetStarted();
  return (
    <div className="min-h-screen bg-[#0a0f1e] pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#1e3a8a] rounded-full blur-[160px] opacity-[0.08] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">Industries</p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white mb-6 leading-tight">
              One operating model.<br /><span className="text-gradient">Four industries.</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              QARM's system — CRM automation, growth support, sales coordination, and managed operations — was built for mortgage professionals, and extends naturally to any relationship-driven business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* The shared framework */}
      <section className="py-20 border-y border-white/[0.05] bg-[#080d18]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">The Same System, Every Industry</p>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-5">Four pillars. Adapted, not reinvented.</h2>
            <p className="text-slate-400 leading-relaxed">The tools change by industry — CRM platform, document types, referral sources. The underlying system does not.</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p) => (
              <div key={p.name} className={`rounded-2xl p-6 text-center border ${p.orange ? 'bg-orange-400/[0.03] border-orange-400/15' : 'glass-card'}`}>
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-4 ${p.orange ? 'bg-orange-400/10 text-orange-400' : 'bg-[#2d5bb5]/15 text-[#7aa3e5]'}`}>
                  {p.icon}
                </div>
                <p className="font-display font-semibold text-white text-sm">{p.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries — Mortgage featured, three equal below */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">Where QARM Operates</p>
            <h2 className="font-display font-bold text-4xl text-white mb-5">Built for mortgage. Extends naturally beyond it.</h2>
          </AnimatedSection>

          {/* Featured: Mortgage & Lending */}
          <AnimatedSection className="mb-6">
            <Link to="/mortgage" className="group block glass-card rounded-2xl p-8 lg:p-10 hover:border-[#2d5bb5]/40 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                <div className="flex-1">
                  <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-3">QARM's Founding Specialization</p>
                  <h3 className="font-display font-bold text-3xl text-white mb-3">Mortgage &amp; Lending</h3>
                  <p className="text-slate-400 leading-relaxed mb-4 max-w-xl">
                    CRM management, file and condition tracking, client communication, and marketing support for mortgage brokers and agents — the specialization QARM was built around.
                  </p>
                  <p className="text-sm text-slate-400">Supporting clients across Canada, the United States, and selected international markets.</p>
                </div>
                <div className="flex items-center gap-2 text-[#7aa3e5] font-semibold text-sm shrink-0 group-hover:gap-3 transition-all">
                  Explore Mortgage &amp; Lending <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </AnimatedSection>

          {/* Three equal industries */}
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: 'Real Estate', href: '/real-estate', desc: 'CRM management, listing coordination, transaction support, and client follow-up for real estate professionals.', orange: false },
              { name: 'Financial Services & Insurance', href: '/financial-services', desc: 'CRM management, client communication, policy and file coordination, and follow-up for advisors and agents.', orange: true },
              { name: 'Professional Services', href: '/professional-services', desc: 'CRM management, client communication, scheduling, and marketing support for consultants and service-based professionals.', orange: false },
            ].map((ind) => (
              <AnimatedSection key={ind.href}>
                <Link to={ind.href} className={`group block rounded-2xl p-7 h-full border transition-all duration-300 ${ind.orange ? 'bg-orange-400/[0.03] border-orange-400/15 hover:border-orange-400/30' : 'glass-card hover:border-[#2d5bb5]/40'}`}>
                  <h3 className="font-display font-semibold text-white text-lg mb-3">{ind.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{ind.desc}</p>
                  <div className={`flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all ${ind.orange ? 'text-orange-400' : 'text-[#7aa3e5]'}`}>
                    Learn more <ArrowRight size={14} />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/[0.06] bg-[#080d18]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-5">Not sure where you fit?</h2>
            <p className="text-slate-400 mb-8">Every industry runs on the same underlying system. Book a free workflow review and we'll show you exactly how it applies to your business.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => onGetStarted()} type="button"
                className="inline-flex items-center justify-center gap-2 bg-[#2d5bb5] hover:bg-[#4d7fd4] text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all hover:shadow-xl hover:shadow-[#2d5bb5]/30">
                Get Your Support Plan <ArrowRight size={18} />
              </button>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 text-slate-300 hover:text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all">
                Book a Free Workflow Review
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
