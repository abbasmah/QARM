import { Link } from 'react-router-dom';
import {
  ArrowRight, Zap, Send, MessageCircle, Heart, Handshake, Repeat,
  BarChart3, Megaphone, PhoneCall, ClipboardList,
  Cpu, Users,
} from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { useGetStarted } from '../context/GetStartedContext';

const CALENDLY_URL = 'https://calendly.com/theqarm-info/30min';

/* ============================================================
   2. THE QARM GROWTH ENGINE
   Attract -> Capture -> Respond -> Nurture -> Convert -> Retain
   ============================================================ */
export function GrowthEngineSection() {
  const stages = [
    { icon: <Zap size={18} />, label: 'Attract', title: 'Generate demand', orange: false },
    { icon: <Send size={18} />, label: 'Capture', title: 'Capture and organize', orange: true },
    { icon: <MessageCircle size={18} />, label: 'Respond', title: 'Respond instantly', orange: false },
    { icon: <Heart size={18} />, label: 'Nurture', title: 'Build relationships', orange: true },
    { icon: <Handshake size={18} />, label: 'Convert', title: 'Turn opportunities into business', orange: false },
    { icon: <Repeat size={18} />, label: 'Retain', title: 'Keep clients for the long term', orange: true },
  ];
  return (
    <section className="py-28 bg-[#080d18] border-y border-white/[0.05] relative overflow-hidden">
      {/* Growth Engine photography — commissioned image, walkway/skyline */}
      <div className="absolute inset-0">
        <img
          src="/images/growth-engine-1400w.webp"
          srcSet="/images/growth-engine-800w.webp 800w, /images/growth-engine-1400w.webp 1400w"
          sizes="(max-width: 768px) 800px, 1400px"
          alt="Business professional walking along a modern glass walkway overlooking a city skyline"
          width={1400} height={645} className="w-full h-full object-cover opacity-[0.34]" loading="lazy" />
        {/* Lightened mask — let the photo breathe more than the old 0.70-opacity / heavy-gradient treatment */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080d18] via-[#080d18]/50 to-[#080d18]" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#1e3a8a] rounded-full blur-[200px] opacity-[0.08] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">The QARM Growth Engine</p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mb-5">From opportunity to lasting relationships.</h2>
          <p className="text-slate-400 text-lg leading-relaxed">QARM connects marketing, CRM, automation, and human execution across the full client journey — not as separate tools, but as one system.</p>
        </AnimatedSection>

        <div className="relative">
          <div className="hidden lg:block absolute top-6 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-[#2d5bb5]/25 to-transparent" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
            {stages.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 70} className="flex flex-col items-center text-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 relative z-10 border-2 ${s.orange ? 'border-orange-400/40 bg-[#080d18] text-orange-400' : 'border-[#2d5bb5]/40 bg-[#080d18] text-[#7aa3e5]'}`}>
                  {s.icon}
                </div>
                <p className={`text-[10px] font-semibold uppercase tracking-widest mb-2 ${s.orange ? 'text-orange-400' : 'text-[#4d7fd4]'}`}>{s.label}</p>
                <p className="text-xs text-slate-400 leading-snug max-w-[9rem]">{s.title}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   4. SOLUTIONS — four categories replacing the flat services grid
   ============================================================ */
export function SolutionsSection() {
  const solutions = [
    {
      icon: <BarChart3 size={22} />, tag: 'AI & CRM Automation',
      title: 'Intelligent systems. Real results.',
      desc: 'CRM setup and hygiene, automated follow-up sequences, pipeline automation, and reporting — so every opportunity is tracked and nothing depends on memory.',
      orange: false,
    },
    {
      icon: <Megaphone size={22} />, tag: 'Growth & Marketing',
      title: 'More visibility. Better opportunities.',
      desc: 'Database segmentation, reactivation campaigns, and coordinated outreach that keep your pipeline fed between referrals.',
      orange: true,
    },
    {
      icon: <PhoneCall size={22} />, tag: 'Sales & Appointment Support',
      title: 'Conversations that move business forward.',
      desc: 'Lead qualification, follow-up, and appointment coordination — so every booked call is with someone ready to talk.',
      orange: false,
    },
    {
      icon: <ClipboardList size={22} />, tag: 'Managed Operations',
      title: 'A more organized business, every day.',
      desc: 'Documentation, client communication, and workflow coordination that keeps your operations running smoothly in the background.',
      orange: true,
    },
  ];
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">Solutions</p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mb-5">One system. Four working parts.</h2>
          <p className="text-slate-400 text-lg leading-relaxed">Automation, marketing, sales support, and operations — coordinated as a single layer around your business, not four separate vendors.</p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {solutions.map((s, i) => (
            <AnimatedSection key={s.tag} delay={i * 80}>
              <div className={`group rounded-2xl p-7 h-full transition-all duration-300 border ${s.orange ? 'glass-card hover:border-orange-400/30 hover:bg-[#1a1510]/60' : 'glass-card hover:border-[#2d5bb5]/40 hover:bg-[#141d35]/60'}`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-colors ${s.orange ? 'bg-orange-400/10 text-orange-400 group-hover:bg-orange-400/20' : 'bg-[#2d5bb5]/15 text-[#7aa3e5] group-hover:bg-[#2d5bb5]/25'}`}>
                  {s.icon}
                </div>
                <p className={`text-[10px] font-semibold uppercase tracking-widest mb-3 ${s.orange ? 'text-orange-400' : 'text-[#4d7fd4]'}`}>{s.tag}</p>
                <h3 className="font-display font-semibold text-white text-lg mb-3 leading-snug">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   5. AI + HUMAN EXECUTION
   ============================================================ */
export function AIHumanExecutionSection() {
  return (
    <section className="py-28 bg-[#080d18] border-y border-white/[0.05] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#f97316] rounded-full blur-[200px] opacity-[0.05] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <AnimatedSection direction="left">
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">AI + Human Execution</p>
            <h2 className="font-display font-bold text-4xl text-white mb-6 leading-tight">Technology that works with people.</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-5">
              Automation handles the repetitive work — data entry, reminders, and routine follow-up triggers. QARM's team handles what automation can't: judgment, coordination, and the relationships that actually close business.
            </p>
            <p className="text-slate-300 text-base leading-relaxed font-medium mb-8">
              Automation without execution just creates another system to manage. People without systems create inefficiency. QARM combines both.
            </p>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[#7aa3e5] hover:text-white transition-colors group">
              See how the system works <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={100}>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden relative aspect-video shadow-2xl shadow-[#050810]/60 border border-white/[0.08]">
                <img
                  src="/images/ai-human-execution-1400w.webp"
                  srcSet="/images/ai-human-execution-800w.webp 800w, /images/ai-human-execution-1400w.webp 1400w"
                  sizes="(max-width: 1024px) 800px, 700px"
                  alt="A person working at a laptop showing a CRM dashboard, writing in a notebook alongside it — automation and human judgment working together"
                  width={1400} height={788} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080d18]/70 via-transparent to-transparent" />
              </div>
              {/* Floating badges over the photo — Systems / People */}
              <div className="absolute -bottom-6 -left-4 sm:left-4 glass-card rounded-xl p-4 shadow-2xl shadow-[#050810]/70">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#2d5bb5]/20 text-[#7aa3e5] flex items-center justify-center shrink-0"><Cpu size={16} /></div>
                  <div>
                    <p className="text-[9px] text-slate-500 uppercase tracking-widest leading-tight">Systems</p>
                    <p className="text-sm font-display font-bold text-white leading-tight">Scale &amp; efficiency</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-4 sm:right-4 rounded-xl p-4 shadow-xl shadow-[#050810]/70 border border-orange-400/30" style={{ background: 'rgba(9,14,28,0.85)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-orange-400/15 text-orange-400 flex items-center justify-center shrink-0"><Users size={16} /></div>
                  <div>
                    <p className="text-[9px] text-slate-500 uppercase tracking-widest leading-tight">People</p>
                    <p className="text-sm font-display font-bold text-white leading-tight">Judgment &amp; relationships</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   6. INDUSTRIES
   ============================================================ */
export function IndustriesSection() {
  const industries = [
    { name: 'Real Estate', img: '/images/industry-real-estate-1.webp', orange: false },
    { name: 'Mortgage', img: '/images/industry-mortgage.webp', orange: true },
    { name: 'Financial Services', img: '/images/industry-financial-services.webp', orange: false },
    { name: 'Professional Services', img: '/images/industry-professional-services.webp', orange: true },
  ];
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">Industries</p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mb-5">Built for relationship-driven professionals.</h2>
          <p className="text-slate-400 text-lg leading-relaxed">Wherever follow-up and responsiveness drive revenue, QARM's systems apply — with deep specialization in Canadian mortgage operations.</p>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <AnimatedSection key={ind.name} delay={i * 70}>
              <div className={`group relative rounded-2xl overflow-hidden aspect-[3/4] border transition-all duration-300 ${ind.orange ? 'border-orange-400/20 hover:border-orange-400/40' : 'border-[#2d5bb5]/20 hover:border-[#2d5bb5]/50'}`}>
                <img src={ind.img} alt={ind.name} width={500} height={667} loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-display font-semibold text-white text-sm leading-tight">{ind.name}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection>
          <p className="text-center text-sm text-slate-500 mt-10 max-w-lg mx-auto">Canadian mortgage operations remain a core specialization — the same systems extend naturally to real estate and other relationship-driven professionals.</p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ============================================================
   7. HOW QARM WORKS — 5 stages
   Audit -> Build -> Automate -> Execute -> Optimize
   ============================================================ */
export function HowQarmWorksV2Section() {
  const onGetStarted = useGetStarted();
  const steps = [
    { num: '01', title: 'Audit', desc: 'Understand your current systems, lead flow, CRM, and operational bottlenecks.', orange: false },
    { num: '02', title: 'Build', desc: 'Design the workflows, integrations, and processes your business actually needs.', orange: true },
    { num: '03', title: 'Automate', desc: 'Implement CRM automation and structured follow-up systems.', orange: false },
    { num: '04', title: 'Execute', desc: "QARM's team supports the processes that need ongoing human judgment.", orange: true },
    { num: '05', title: 'Optimize', desc: 'Review performance, identify bottlenecks, and continuously improve.', orange: false },
  ];
  return (
    <section className="py-28 relative overflow-hidden">
      {/* How QARM Works photography — commissioned image, mountain road */}
      <div className="absolute inset-0">
        <img
          src="/images/how-it-works-v2-1400w.webp"
          srcSet="/images/how-it-works-v2-800w.webp 800w, /images/how-it-works-v2-1400w.webp 1400w"
          sizes="(max-width: 768px) 800px, 1400px"
          alt="A clear road winding through mountains — representing QARM's structured process"
          width={1400} height={1265} className="w-full h-full object-cover opacity-[0.30]" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-[#0a0f1e]/50 to-[#0a0f1e]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">How QARM Works</p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mb-5">A clear path from insight to impact.</h2>
        </AnimatedSection>
        <div className="relative">
          {/* Desktop: 5-across row, connecting line, zero leftover space */}
          <div className="hidden lg:block absolute top-[52px] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-[#2d5bb5]/20 to-transparent" />
          <div className="hidden lg:grid grid-cols-5 gap-10">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 100} className="flex flex-col items-center text-center">
                <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-8 relative border-2 ${step.orange ? 'border-orange-400/40 bg-orange-400/5' : 'border-[#2d5bb5]/40 glass-card'}`}>
                  <span className={`font-display font-bold text-2xl ${step.orange ? 'text-orange-400' : 'text-[#7aa3e5]'}`}>{step.num}</span>
                </div>
                <h3 className="font-display font-semibold text-white text-xl mb-4">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </AnimatedSection>
            ))}
          </div>

          {/* Mobile/tablet: single vertical column, connecting line down the left — no dangling odd card */}
          <div className="lg:hidden relative max-w-md mx-auto">
            <div className="absolute top-2 bottom-2 left-9 w-px bg-gradient-to-b from-transparent via-[#2d5bb5]/25 to-transparent" />
            <div className="space-y-10">
              {steps.map((step, i) => (
                <AnimatedSection key={step.num} delay={i * 100} className="flex items-start gap-5 relative">
                  <div className={`w-[72px] h-[72px] shrink-0 rounded-full flex items-center justify-center relative z-10 border-2 ${step.orange ? 'border-orange-400/40 bg-[#0a0f1e]' : 'border-[#2d5bb5]/40 bg-[#0a0f1e]'}`}>
                    <span className={`font-display font-bold text-xl ${step.orange ? 'text-orange-400' : 'text-[#7aa3e5]'}`}>{step.num}</span>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-display font-semibold text-white text-lg mb-2">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-14">
          <button onClick={() => onGetStarted()} type="button" className="inline-flex items-center gap-2 bg-[#2d5bb5] hover:bg-[#4d7fd4] text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all hover:shadow-xl hover:shadow-[#2d5bb5]/30">
            Start Step One <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   11. FINAL CTA
   ============================================================ */
export function FinalCTASection() {
  return (
    <section className="py-24 bg-[#080d18] border-y border-white/[0.05] relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/final-cta-1600w.webp"
          srcSet="/images/final-cta-900w.webp 900w, /images/final-cta-1600w.webp 1600w"
          sizes="100vw"
          alt="Premium rooftop terrace at dusk overlooking a city skyline"
          width={1600} height={900} className="w-full h-full object-cover opacity-[0.30]" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080d18] via-[#080d18]/60 to-[#080d18]" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#1e3a8a] rounded-full blur-[200px] opacity-[0.10] pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimatedSection>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mb-5">Find out where your business can work smarter.</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            We'll review your current lead flow, CRM, and operations, and identify where automation and managed execution could have the greatest impact.
          </p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2d5bb5] hover:bg-[#4d7fd4] text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all hover:shadow-xl hover:shadow-[#2d5bb5]/30">
            Book a Free Workflow Review <ArrowRight size={18} />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ============================================================
   1. HERO V2 — Option B, lightened overlay so the photo breathes more
   ============================================================ */
export function HeroV2Section() {
  const onGetStarted = useGetStarted();
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* PLACEHOLDER PHOTO — swap for new growth-mood photography when ready */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-operations-1600w.webp"
          srcSet="/images/hero-operations-900w.webp 900w, /images/hero-operations-1600w.webp 1600w"
          sizes="100vw"
          alt="Placeholder hero background — to be replaced with new growth-themed photography"
          width={1600} height={900} className="w-full h-full object-cover"
          style={{ filter: 'brightness(1.15) saturate(1.2)' }} loading="eager" />
        {/* Lightened radial + linear masks vs. old hero (0.94 center / 0.60 top) — let more of the photo read through */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 900px 700px at 50% 42%, rgba(10,15,30,0.85) 0%, rgba(10,15,30,0.68) 38%, rgba(10,15,30,0.35) 68%, rgba(10,15,30,0.10) 100%)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/45 via-transparent to-[#0a0f1e]" />
      </div>
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#1e3a8a] rounded-full blur-[200px] opacity-[0.12] pointer-events-none" style={{ animation: 'pulse 8s ease-in-out infinite' }} />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h1 className="font-display font-bold text-5xl lg:text-6xl xl:text-[4.25rem] text-white leading-[1.08] tracking-tight mb-6">
            Stop losing opportunities.<br />
            <span className="text-gradient">Start running on systems.</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-4 max-w-xl mx-auto">
            Your CRM, your follow-up, your pipeline — QARM keeps it all moving with CRM automation and a dedicated team behind it.
          </p>
          <p className="text-sm text-slate-500 mb-8">Flexible support from $349 CAD/month. No long-term commitment.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button onClick={() => onGetStarted()} type="button"
              className="flex items-center justify-center gap-2 bg-[#2d5bb5] hover:bg-[#4d7fd4] text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-[#2d5bb5]/30">
              Get Your Support Plan <ArrowRight size={18} />
            </button>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 text-slate-300 hover:text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all duration-200">
              Book a Free Workflow Review
            </a>
          </div>
          <div className="border-t border-white/[0.06] pt-6 max-w-lg mx-auto">
            <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-[0.2em] mb-4">We adapt to the CRM and tools you already use</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
              {['Filogix', 'Velocity', 'Finmo', 'GoHighLevel', 'HubSpot', 'Salesforce'].map((tool) => (
                <span key={tool} className="font-display font-bold text-xs text-slate-500 tracking-wide">{tool}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2d5bb5] to-[#1c2a4a] flex items-center justify-center text-white font-display font-bold text-xs border border-[#2d5bb5]/40">A</div>
            <p className="text-xs text-slate-500">QARM Corp. · Operational support since 2023 · Currently accepting new clients</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ============================================================
   PREVIEW WRAPPER — assembles all new sections in brief order
   for local review only. Not wired into production routes.
   ============================================================ */
export function GrowthSectionsPreviewPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] pt-20">
      <div className="max-w-3xl mx-auto px-4 pt-10 pb-4 text-center">
        <p className="text-xs text-slate-500 uppercase tracking-widest">Internal Preview — Draft sections, not yet live</p>
      </div>
      <GrowthEngineSection />
      <SolutionsSection />
      <AIHumanExecutionSection />
      <IndustriesSection />
      <HowQarmWorksV2Section />
      <FinalCTASection />
    </div>
  );
}
