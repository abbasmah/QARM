import { ArrowRight, CheckCircle2, Globe } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

interface GlobalOperationsPageProps { onGetStarted: () => void; }

const IMGS = {
  london: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&q=55&auto=format&fit=crop',
  dubai: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&q=55&auto=format&fit=crop',
  sydney: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=500&q=55&auto=format&fit=crop',
  emerging: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&q=55&auto=format&fit=crop',
};

const markets = [
  {
    flag: '🇬🇧', country: 'United Kingdom', title: 'Mortgage Adviser Operations Support',
    desc: 'The UK mortgage market demands tight FCA compliance and high-volume operational precision. QARM supports mortgage advisers, DAs, ARs, and networks with dedicated back-office infrastructure.',
    context: ['Mortgage advisers, DAs, ARs, and networks','FCA-compliant operational protocols','Criteria Hub, Twenty7Tec, Synaptic support','AIP and full application coordination','Sourcing system and lender portal management'],
    highlight: 'FCA-aware operations. Compliance-first by design.', img: IMGS.london, orange: false,
  },
  {
    flag: '🇦🇺', country: 'Australia', title: 'Mortgage Broker Operations Support',
    desc: "Australia's mortgage broking industry is one of the most broker-driven in the world. MFAA and FBAA members handle high application volumes across multiple lenders — QARM provides the operational infrastructure to manage it all efficiently.",
    context: ['MFAA and FBAA member brokers','NCCP and responsible lending compliance','NextGen.Net, ApplyOnline, Loanapp support','Aggregator platform workflow coordination','Best interests duty documentation support'],
    highlight: "Supporting Australia's growing broker channel.", img: IMGS.sydney, orange: true,
  },
  {
    flag: '🇦🇪', country: 'United Arab Emirates', title: 'Home Finance Operations Support',
    desc: "The UAE's property market is among the fastest-growing in the world. As home finance volumes rise across Dubai, Abu Dhabi, and the Emirates, mortgage consultants need operational infrastructure that matches the pace.",
    context: ['Home finance consultants and mortgage advisers','CBUAE regulation awareness','Islamic finance and conventional mortgage support','Developer and resale property coordination','Multilingual client communication support'],
    highlight: "Supporting the UAE's booming property finance market.", img: IMGS.dubai, orange: false,
  },
  {
    flag: '🌍', country: 'Emerging Markets', title: 'Lending Business Operations',
    desc: 'Across Latin America, Southeast Asia, and Africa, lending businesses are scaling rapidly but without the operational infrastructure to match. QARM provides the back-office foundation for growing lending businesses.',
    context: ['Lending businesses and loan officers','CRM setup and pipeline management','Client communication and follow-up systems','Document organisation and workflow coordination','Operational systems for growing teams'],
    highlight: 'Wherever you originate loans, QARM runs the back office.', img: IMGS.emerging, orange: false,
  },
];

export function GlobalOperationsPage({ onGetStarted }: GlobalOperationsPageProps) {
  return (
    <div className="min-h-screen bg-[#0a0f1e] pt-20">
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#1e3a8a] rounded-full blur-[160px] opacity-8 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#f97316] rounded-full blur-[180px] opacity-[0.04] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2d5bb5]/30 bg-[#2d5bb5]/10 text-[#7aa3e5] text-xs font-semibold tracking-wide mb-8">
              <Globe size={12} /> Global Operations
            </div>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Wherever you originate loans,<br /><span className="text-gradient">QARM runs the back office.</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
              QARM's operational infrastructure adapts to lending markets around the world — UK, Australia, UAE, and emerging economies where volumes are growing faster than back-office capacity.
            </p>
            <a href="https://calendly.com/theqarm-info/30min" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2d5bb5] hover:bg-[#4d7fd4] text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all hover:shadow-xl hover:shadow-[#2d5bb5]/30">
              Book a Discovery Call <ArrowRight size={18} />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Consistent deliverables */}
      <section className="border-y border-white/[0.05] bg-white/[0.02] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-widest mb-10">What QARM delivers in every market</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'CRM & Pipeline Hygiene', desc: 'Accurate, current client records in whatever system you use — always.', orange: false },
              { title: 'Document Coordination', desc: 'Collection, organisation, and verification of all client and lender documentation.', orange: true },
              { title: 'Client Communication', desc: 'Professional follow-up sequences and status updates — in your voice.', orange: false },
              { title: 'Workflow Systems', desc: 'Structured processes that eliminate manual chaos and keep deals moving forward.', orange: true },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={i * 70}>
                <div className={`rounded-2xl p-6 h-full border ${s.orange ? 'bg-orange-400/5 border-orange-400/20' : 'glass-card'}`}>
                  <h3 className={`font-display font-semibold mb-2 ${s.orange ? 'text-orange-400' : 'text-white'}`}>{s.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Markets with images */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">Markets We Serve</p>
            <h2 className="font-display font-bold text-4xl text-white">Tailored to your local lending environment.</h2>
          </AnimatedSection>
          <div className="space-y-6">
            {markets.map((market, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div className={`rounded-2xl overflow-hidden border transition-all duration-300 ${market.orange ? 'bg-orange-400/5 border-orange-400/20 hover:border-orange-400/35' : 'glass-card hover:border-[#2d5bb5]/30'}`}>
                  <div className="grid lg:grid-cols-3 items-stretch">
                    {/* Image */}
                    <div className="relative h-56 lg:h-auto overflow-hidden">
                      <img src={market.img} alt={market.country} width={600} height={400} className="w-full h-full object-cover opacity-60" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0f1e]/80 lg:block hidden" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/80 to-transparent lg:hidden" />
                      <div className="absolute top-4 left-4">
                        <span className="text-4xl">{market.flag}</span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="lg:col-span-2 p-8 lg:p-10">
                      <div className="grid lg:grid-cols-2 gap-8 items-start">
                        <div>
                          <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${market.orange ? 'text-orange-400' : 'text-[#4d7fd4]'}`}>{market.country}</p>
                          <h2 className="font-display font-bold text-2xl text-white mb-4">{market.title}</h2>
                          <p className="text-slate-400 leading-relaxed text-sm mb-5">{market.desc}</p>
                          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold ${market.orange ? 'border-orange-400/30 bg-orange-400/10 text-orange-300' : 'border-[#2d5bb5]/30 bg-[#2d5bb5]/10 text-[#7aa3e5]'}`}>
                            {market.highlight}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Built for</p>
                          <ul className="space-y-2.5">
                            {market.context.map((c) => (
                              <li key={c} className="flex items-start gap-3 text-sm text-slate-300">
                                <CheckCircle2 size={14} className={`shrink-0 mt-0.5 ${market.orange ? 'text-orange-400' : 'text-[#4d7fd4]'}`} />{c}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Global stats */}
      <section className="py-20 bg-[#080d18] border-y border-white/[0.05]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl text-white mb-4">Active across 5 lending markets.</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {[
              { flag: '🇨🇦', market: 'Canada', status: 'Full service', orange: true },
              { flag: '🇺🇸', market: 'United States', status: 'MLO support', orange: false },
              { flag: '🇬🇧', market: 'UK', status: 'FCA-aware ops', orange: false },
              { flag: '🇦🇺', market: 'Australia', status: 'MFAA/FBAA ops', orange: false },
              { flag: '🇦🇪', market: 'UAE', status: 'Home finance', orange: false },
            ].map((m, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div className={`rounded-2xl p-5 border ${m.orange ? 'bg-orange-400/5 border-orange-400/20' : 'glass-card'}`}>
                  <span className="text-2xl mb-3 block">{m.flag}</span>
                  <p className={`font-display font-bold text-sm mb-1 ${m.orange ? 'text-orange-400' : 'text-white'}`}>{m.market}</p>
                  <p className="text-[10px] text-slate-500">{m.status}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-5">Operating outside North America?</h2>
            <p className="text-slate-400 mb-8">Tell us about your market and your workflow. We'll tell you whether — and how — QARM can support your business.</p>
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
