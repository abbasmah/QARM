import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, ChevronDown, ChevronUp, CheckCircle2, Calendar, MessageSquare, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { useGetStarted } from '../context/GetStartedContext';
import {
  HeroV2Section, GrowthEngineSection, SolutionsSection, AIHumanExecutionSection,
  IndustriesSection, HowQarmWorksV2Section, FinalCTASection,
} from './HomeSections';

const faqs = [
  { q: 'What types of professionals does QARM support?', a: 'Mortgage brokers and agents, real estate professionals, insurance advisors, and service-based professionals who need CRM, follow-up, document coordination, or administrative support.' },
  { q: 'Can I start small before committing?', a: 'Yes. Flexible Support starts at 20 hours per month, and a focused 10-hour pilot is available for $149 CAD if you want to begin with one immediate priority.' },
  { q: 'Do I need to sign a long-term contract?', a: 'Flexible Support is month-to-month with no lock-in. Part-Time and Full-Time plans include a notice period confirmed in your service agreement.' },
  { q: 'What systems does QARM work with?', a: 'QARM adapts to your existing platforms — Filogix, Velocity, Finmo, GoHighLevel, HubSpot, Salesforce, and most major CRM and workflow tools.' },
  { q: 'How quickly can support begin?', a: 'Once your scope is confirmed, QARM provides an onboarding timeline based on your plan and system access requirements.' },
  { q: 'Does QARM provide mortgage advice or underwriting?', a: 'No. For mortgage clients, QARM provides administrative and operational support under the direction of the licensed mortgage professional.' },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ${open ? 'border-[#2d5bb5]/30' : ''}`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-6 text-left gap-4">
        <span className="font-display font-semibold text-white text-sm leading-relaxed">{q}</span>
        {open ? <ChevronUp size={18} className="text-[#4d7fd4] shrink-0" /> : <ChevronDown size={18} className="text-slate-400 shrink-0" />}
      </button>
      {open && <div className="px-6 pb-6"><p className="text-slate-400 text-sm leading-relaxed">{a}</p></div>}
    </div>
  );
}

export function HomePage() {
  const onGetStarted = useGetStarted();
  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      {/* 1. HERO — Option B */}
      <HeroV2Section />

      {/* 2. WHERE IS YOUR BUSINESS LOSING TIME? — kept unchanged */}
      <section className="py-28 border-t border-white/[0.05]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">Sound Familiar?</p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mb-5">Where is your business losing time?</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: 'Follow-Up Gaps', desc: 'Leads, clients, and referral partners are not being contacted consistently.', orange: false },
              { title: 'Pipeline Disorganization', desc: 'Your CRM does not accurately reflect what needs attention next.', orange: true },
              { title: 'Administrative Overload', desc: 'Document requests, appointments, updates, and repetitive tasks consume valuable hours.', orange: false },
              { title: 'Inconsistent Marketing', desc: 'Important campaigns and client touchpoints are delayed when files become busy.', orange: true },
            ].map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 80}>
                <div className={`rounded-2xl p-7 h-full border ${p.orange ? 'bg-orange-400/[0.03] border-orange-400/15' : 'glass-card'}`}>
                  <h3 className={`font-display font-semibold text-lg mb-2 ${p.orange ? 'text-orange-400' : 'text-white'}`}>{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <p className="text-center text-sm text-slate-400 mt-10 max-w-lg mx-auto">QARM builds support around the areas creating the most pressure — not around a generic task list.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. GROWTH ENGINE — new, photo section (breathing rhythm: card / card / photo) */}
      <GrowthEngineSection />

      {/* 4. SOLUTIONS — new, replaces flat services grid */}
      <SolutionsSection />

      {/* 5. AI + HUMAN EXECUTION — new */}
      <AIHumanExecutionSection />

      {/* 6. INDUSTRIES — new */}
      <IndustriesSection />

      {/* 7. HOW QARM WORKS v2 — new, photo section (breathing rhythm) */}
      <HowQarmWorksV2Section />

      {/* 8. PRICING PREVIEW — kept unchanged */}
      <section className="py-28 bg-[#080d18] border-y border-white/[0.05] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#f97316] rounded-full blur-[180px] opacity-[0.05] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection className="mb-10">
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">Pricing</p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mb-5">Straightforward. No surprises.</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">Support plans start at $349 CAD per month. No setup fees. No long-term lock-in.</p>
          </AnimatedSection>
          <AnimatedSection delay={80}>
            <div className="grid sm:grid-cols-4 gap-4 mb-10">
              {[
                { label: 'Flexible', price: 'From $349', sub: '20 hrs/mo', orange: false },
                { label: 'Part-Time', price: '$899', sub: '80 hrs/mo', orange: true },
                { label: 'Full-Time', price: '$1,599', sub: '160 hrs/mo', orange: false },
                { label: 'Custom', price: 'Quote', sub: 'Scalable', orange: false },
              ].map((t) => (
                <div key={t.label} className={`rounded-2xl p-6 border text-center ${t.orange ? 'bg-orange-400/[0.05] border-orange-400/20' : 'glass-card'}`}>
                  <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${t.orange ? 'text-orange-400' : 'text-slate-400'}`}>{t.label}</p>
                  <p className="text-2xl font-display font-bold text-white">{t.price}</p>
                  <p className="text-xs text-slate-400 mt-1">{t.sub}</p>
                </div>
              ))}
            </div>
            <Link to="/pricing" className="inline-flex items-center gap-2 bg-[#2d5bb5] hover:bg-[#4d7fd4] text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all hover:shadow-xl hover:shadow-[#2d5bb5]/30">
              View Plans and Build Mine <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* 9. WHY QARM — kept unchanged */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#1e3a8a] rounded-full blur-[180px] opacity-[0.08] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl text-white mb-3">Why QARM over a generic agency?</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: <TrendingUp size={18} />, title: 'No forced migrations', desc: 'QARM adapts to your existing CRM and workflow — you keep using the tools you already know.', orange: false },
              { icon: <CheckCircle2 size={18} />, title: 'Direct accountability', desc: 'Every client has a single point of contact for strategy and direction — not a rotating account manager.', orange: true },
              { icon: <Calendar size={18} />, title: 'No long-term lock-in', desc: 'Scale up or down to match your volume. Flexible Support is month-to-month with no commitment.', orange: false },
              { icon: <MessageSquare size={18} />, title: 'Capacity available now', desc: 'QARM is currently accepting new clients. Onboarding typically begins within days of confirmation.', orange: true },
            ].map((p, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div className={`rounded-xl p-6 border ${p.orange ? 'bg-orange-400/[0.03] border-orange-400/15' : 'glass-card'}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${p.orange ? 'bg-orange-400/15 text-orange-400' : 'bg-[#2d5bb5]/15 text-[#7aa3e5]'}`}>{p.icon}</div>
                    <h3 className={`font-display font-semibold text-sm ${p.orange ? 'text-orange-400' : 'text-white'}`}>{p.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ — kept unchanged */}
      <section className="py-20 bg-[#080d18] border-y border-white/[0.05]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">FAQ</p>
            <h2 className="font-display font-bold text-3xl text-white">Common questions.</h2>
          </AnimatedSection>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 40}>
                <FaqItem q={faq.q} a={faq.a} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA — new, replaces FAQ as the weak page-ending */}
      <FinalCTASection />
    </div>
  );
}
