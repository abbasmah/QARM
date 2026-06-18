import { useState } from 'react';
import { CheckCircle2, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

interface PricingPageProps { onGetStarted: () => void; }

const faqs = [
  { q: 'What exactly does an operations specialist do versus a virtual assistant?', a: 'A generic virtual assistant handles tasks. A QARM operations specialist manages systems. They understand the Canadian mortgage workflow end-to-end — from Filogix data entry standards to lender-specific submission requirements — and operate as a proactive member of your team, not just a task executor.' },
  { q: 'Are QARM specialists trained on Canadian mortgage processes specifically?', a: 'Yes. Every QARM specialist is trained on Canadian mortgage concepts before onboarding your brokerage — including A and B lender products, CMHC/Sagen requirements, provincial compliance (FSRA, BCFSA, AMF), and the tools Canadian brokers use daily: Filogix Expert, Velocity, Finmo, and GHL.' },
  { q: 'How quickly can we get started?', a: 'After your discovery call, QARM can have a specialist matched, briefed, and integrated into your workflow within 48 hours. We handle the onboarding — you just show up to a briefing call.' },
  { q: 'How is client and CRM data kept secure?', a: 'All QARM specialists operate under signed NDAs and PIPEDA-compliant data handling protocols. Client data is never stored on personal devices, and all system access is managed through your existing tools with proper role-based permissions.' },
  { q: 'Can I scale up or down my hours if my volume changes?', a: 'Yes. QARM is designed to flex with mortgage market seasonality. You can upgrade, downgrade, or pause your plan with 30 days notice — no lock-in contracts.' },
  { q: 'What CRMs and tools does QARM support?', a: 'Filogix Expert, Finmo, Velocity, GoHighLevel, HubSpot, and Salesforce. We can also adapt to other tools your brokerage uses — just let us know during the discovery call.' },
  { q: 'Do I get a dedicated specialist or a shared team?', a: 'Both plans include a dedicated operations specialist assigned to your brokerage — not a shared team. You also get a dedicated QARM account manager who oversees quality and is your escalation point.' },
  { q: 'Is there a setup fee?', a: 'No setup fees. No onboarding fees. You pay only your monthly plan rate from day one.' },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ${open ? 'border-[#2d5bb5]/30' : ''}`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-6 text-left gap-4">
        <span className="font-display font-semibold text-white text-sm leading-relaxed">{q}</span>
        {open ? <ChevronUp size={18} className="text-[#4d7fd4] shrink-0" /> : <ChevronDown size={18} className="text-slate-500 shrink-0" />}
      </button>
      {open && <div className="px-6 pb-6"><p className="text-slate-400 text-sm leading-relaxed">{a}</p></div>}
    </div>
  );
}

export function PricingPage({ onGetStarted }: PricingPageProps) {
  return (
    <div className="min-h-screen bg-[#0a0f1e] pt-20">

      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#1e3a8a] rounded-full blur-[160px] opacity-8 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">Pricing</p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white mb-6">Straightforward.<br />No surprises.</h1>
            <p className="text-xl text-slate-400 leading-relaxed">Premium mortgage operations infrastructure — at a fraction of the cost of hiring in-house.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">

            {/* Part-time */}
            <AnimatedSection delay={50}>
              <div className="glass-card rounded-2xl p-10 flex flex-col h-full">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Part-Time Support</p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-display font-bold text-white">$899</span>
                  <span className="text-slate-500">CAD / month</span>
                </div>
                <p className="text-xs text-slate-600 mb-8">~$11.25/hr · 80 hours/month · 4 hrs/day, Mon–Fri</p>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">Ideal for individual brokers and smaller teams looking to offload core CRM and administrative coordination without full-time overhead.</p>
                <ul className="space-y-3.5 mb-10 flex-grow">
                  {['Dedicated operations specialist','CRM management & pipeline updates (daily)','Document collection coordination','Client & realtor follow-up management','Appointment scheduling & calendar management','Lead intake coordination','Dedicated QARM account manager','No lock-in contract — cancel anytime'].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 size={15} className="text-[#4d7fd4] shrink-0 mt-0.5" />{f}
                    </li>
                  ))}
                </ul>
                <a href="https://calendly.com/theqarm-info/30min" target="_blank" rel="noopener noreferrer"
                  className="block w-full py-4 text-center border border-[#2d5bb5]/40 hover:border-[#4d7fd4] text-[#7aa3e5] hover:text-white hover:bg-[#2d5bb5]/10 rounded-lg text-sm font-semibold transition-all">
                  Get Started
                </a>
              </div>
            </AnimatedSection>

            {/* Full-time */}
            <AnimatedSection delay={120}>
              <div className="bg-gradient-to-b from-[#1c2a4a] to-[#141d35] border border-[#2d5bb5]/30 rounded-2xl p-10 flex flex-col relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#2d5bb5] rounded-full blur-[80px] opacity-15 pointer-events-none" />
                <div className="flex items-start justify-between mb-4">
                  <p className="text-xs font-semibold text-[#7aa3e5] uppercase tracking-widest">Full-Time Support</p>
                  <span className="bg-[#f97316] text-white text-[10px] font-bold uppercase tracking-wider py-1 px-2.5 rounded-full">Most Popular</span>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-display font-bold text-white">$1,599</span>
                  <span className="text-slate-400">CAD / month</span>
                </div>
                <p className="text-xs text-slate-500 mb-8">~$10/hr · 160 hours/month · 8 hrs/day, Mon–Fri</p>
                <p className="text-slate-300 text-sm mb-8 leading-relaxed">Complete operational coverage for high-volume brokers and teams. Your dedicated specialist manages your entire operational workflow.</p>
                <ul className="space-y-3.5 mb-10 flex-grow">
                  {['Everything in Part-Time, plus:','Full pipeline management (end-to-end)','Underwriting prep & bureau review','Lender submissions & follow-up coordination','Lead intake & appointment setting','Compliance & post-funding file audits','Provincial compliance checklist management','AI-enhanced workflow optimization','Monthly operational performance report'].map((f, i) => (
                    <li key={f} className={`flex items-start gap-3 text-sm ${i === 0 ? 'text-[#7aa3e5] font-semibold' : 'text-slate-200'}`}>
                      <CheckCircle2 size={15} className="text-[#f97316] shrink-0 mt-0.5" />{f}
                    </li>
                  ))}
                </ul>
                <a href="https://calendly.com/theqarm-info/30min" target="_blank" rel="noopener noreferrer"
                  className="block w-full py-4 text-center bg-[#2d5bb5] hover:bg-[#4d7fd4] text-white rounded-lg text-sm font-semibold transition-all hover:shadow-xl hover:shadow-[#2d5bb5]/30">
                  Get Started
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Comparison */}
          <AnimatedSection delay={180} className="mt-6">
            <div className="glass-card rounded-2xl p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div><p className="text-3xl font-display font-bold text-white mb-1">$899/mo</p><p className="text-xs text-slate-500">QARM Part-Time</p></div>
                <div className="md:border-x border-white/[0.06]"><p className="text-3xl font-display font-bold text-[#f97316] mb-1">vs $4,000–6,000/mo</p><p className="text-xs text-slate-500">Canadian admin hire (salary + benefits + overhead)</p></div>
                <div><p className="text-3xl font-display font-bold text-emerald-400 mb-1">No setup fee</p><p className="text-xs text-slate-500">No recruitment cost. No training overhead. Cancel anytime.</p></div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-white/[0.06] bg-[#080d18]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">FAQ</p>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white">Questions about QARM?</h2>
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

      {/* CTA */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-5">Still have questions?</h2>
            <p className="text-slate-400 mb-8">Book a no-obligation discovery call. We'll walk you through the right plan for your brokerage.</p>
            <a href="https://calendly.com/theqarm-info/30min" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2d5bb5] hover:bg-[#4d7fd4] text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all hover:shadow-xl hover:shadow-[#2d5bb5]/30">
              Book a Discovery Call <ArrowRight size={18} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
