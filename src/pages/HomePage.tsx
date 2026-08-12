import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, ChevronDown, ChevronUp, BarChart3, ShieldCheck, FileText, Calendar, MessageSquare, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { useGetStarted } from '../context/GetStartedContext';

const CALENDLY_URL = 'https://calendly.com/theqarm-info/30min';

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
        {open ? <ChevronUp size={18} className="text-[#4d7fd4] shrink-0" /> : <ChevronDown size={18} className="text-slate-500 shrink-0" />}
      </button>
      {open && <div className="px-6 pb-6"><p className="text-slate-400 text-sm leading-relaxed">{a}</p></div>}
    </div>
  );
}

export function HomePage() {
  const onGetStarted = useGetStarted();
  return (
    <div className="min-h-screen bg-[#0a0f1e]">

      {/* 1. HERO — pain-driven, specific */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-[#1e3a8a] rounded-full blur-[200px] opacity-[0.12] pointer-events-none" style={{animation:'pulse 8s ease-in-out infinite'}} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#f97316] rounded-full blur-[200px] opacity-[0.05] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div style={{animation:'slide-up 0.7s ease forwards'}}>
              <h1 className="font-display font-bold text-5xl lg:text-6xl xl:text-[4.25rem] text-white leading-[1.08] tracking-tight mb-6">
                Stop chasing files.<br />
                <span className="text-gradient">Start closing deals.</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-4 max-w-xl">
                Your CRM is out of date. Follow-ups are falling through. Documents are being chased instead of deals. QARM takes over the operational work so you can get back to what actually grows your business.
              </p>
              <p className="text-sm text-slate-500 mb-8">Flexible support from $349 CAD/month. No long-term commitment.</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button onClick={() => onGetStarted()} type="button"
                  className="flex items-center justify-center gap-2 bg-[#2d5bb5] hover:bg-[#4d7fd4] text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-[#2d5bb5]/30">
                  Get Your Support Plan <ArrowRight size={18} />
                </button>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 text-slate-300 hover:text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all duration-200">
                  Book a Free Workflow Review
                </a>
              </div>
              {/* Tools strip — inline under hero CTAs */}
              <div className="border-t border-white/[0.06] pt-6">
                <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-[0.2em] mb-4">We adapt to the platforms you already use</p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {['Filogix', 'Velocity', 'Finmo', 'GoHighLevel', 'HubSpot', 'Salesforce'].map((tool) => (
                    <span key={tool} className="font-display font-bold text-xs text-slate-500 tracking-wide">{tool}</span>
                  ))}
                </div>
              </div>
              {/* Founder line — real social proof */}
              <div className="flex items-center gap-3 mt-6">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2d5bb5] to-[#1c2a4a] flex items-center justify-center text-white font-display font-bold text-xs border border-[#2d5bb5]/40">A</div>
                <p className="text-xs text-slate-500">QARM Corp. · Operational support since 2023 · Currently accepting new clients</p>
              </div>
            </div>

            {/* Dashboard preview */}
            <div className="relative hidden lg:block" style={{animation:'slide-up 0.7s ease 0.2s both',opacity:0}}>
              <div className="absolute -inset-4 rounded-3xl overflow-hidden opacity-30">
                <img
                  src="/images/hero-operations-1600w.webp"
                  srcSet="/images/hero-operations-900w.webp 900w, /images/hero-operations-1600w.webp 1600w"
                  sizes="(max-width: 1024px) 900px, 1600px"
                  alt="Glass folders and documents connected by glowing data streams — representing organized operational workflows"
                  width={1600} height={900} className="w-full h-full object-cover rounded-3xl" loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e]/80 to-transparent" />
              </div>
              <div className="relative glass-card rounded-2xl p-6 glow-blue">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Sample Operations Dashboard</p>
                    <h3 className="text-white font-display font-semibold text-sm">Pipeline Overview</h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />Live
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: 'Active Files', value: '24', change: '+3', up: true },
                    { label: 'Pending Docs', value: '7', change: '-4', up: false },
                    { label: 'CRM Updated', value: '100%', change: '+8%', up: true },
                  ].map((m) => (
                    <div key={m.label} className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-3">
                      <p className="text-[9px] text-slate-500 uppercase tracking-wider mb-1.5">{m.label}</p>
                      <p className="text-lg font-display font-bold text-white">{m.value}</p>
                      <p className={`text-[9px] font-medium mt-1 ${m.up ? 'text-emerald-400' : 'text-red-400'}`}>{m.change} this week</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {[
                    { action: 'Document Review Complete', client: 'Client File A — Application review', time: '2m ago', color: 'emerald' },
                    { action: 'CRM Updated', client: 'Client File B — Documents requested', time: '18m ago', color: 'blue' },
                    { action: 'Follow-Up Sent', client: 'Client File C — Follow-up scheduled', time: '1h ago', color: 'orange' },
                    { action: 'Appointment Booked', client: 'Client File D — Appointment confirmed', time: '2h ago', color: 'blue' },
                  ].map((item) => (
                    <div key={item.client} className="flex items-center gap-3 p-2.5 bg-white/[0.03] rounded-lg border border-white/[0.04]">
                      <div className={`w-2 h-2 rounded-full shrink-0 ${item.color === 'emerald' ? 'bg-emerald-400' : item.color === 'blue' ? 'bg-[#4d7fd4]' : 'bg-orange-400'}`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-white truncate">{item.action}</p>
                        <p className="text-[10px] text-slate-500 truncate">{item.client}</p>
                      </div>
                      <span className="text-[10px] text-slate-600 shrink-0">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-5 -left-6 glass-card-light rounded-xl p-4 shadow-2xl border border-emerald-400/20" style={{animation:'float 4s ease-in-out 0.5s infinite'}}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-emerald-500/10 rounded-lg flex items-center justify-center"><CheckCircle2 size={16} className="text-emerald-400" /></div>
                  <div><p className="text-[10px] text-slate-500">Onboarding</p><p className="text-base font-display font-bold text-white">Days, not weeks</p></div>
                </div>
              </div>
              <div className="absolute top-1/2 -right-8 glass-card-light rounded-xl p-3 shadow-xl border border-[#f97316]/20" style={{animation:'float 5s ease-in-out 1s infinite'}}>
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 bg-[#f97316]/10 rounded-lg flex items-center justify-center"><ShieldCheck size={13} className="text-orange-400" /></div>
                  <div><p className="text-[9px] text-slate-500">Data Handling</p><p className="text-xs font-display font-bold text-white">Privacy-First</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHERE IS YOUR BUSINESS LOSING TIME? — immediately after hero */}
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
            <p className="text-center text-sm text-slate-500 mt-10 max-w-lg mx-auto">QARM builds support around the areas creating the most pressure — not around a generic task list.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW */}
      <section className="py-28 bg-[#080d18] border-y border-white/[0.05] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.12]">
          <img
            src="/images/services-pipeline-1400w.webp"
            srcSet="/images/services-pipeline-800w.webp 800w, /images/services-pipeline-1400w.webp 1400w"
            sizes="(max-width: 768px) 800px, 1400px"
            alt="Colorful pipeline visualization showing documents and tasks flowing through organized stages"
            width={1400} height={1050} className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080d18]/60 via-[#080d18]/40 to-[#080d18]/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">What We Handle</p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mb-5">Core operational support.</h2>
            <p className="text-slate-400 text-lg leading-relaxed">From CRM hygiene to full pipeline coordination — QARM manages the operational layer so nothing falls through the cracks.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <BarChart3 size={22} />, title: 'CRM & Pipeline Management', desc: 'Your CRM stays current, accurate, and actionable — Filogix, Velocity, Finmo, GoHighLevel, HubSpot, and more.', orange: false },
              { icon: <FileText size={22} />, title: 'Document & Workflow Coordination', desc: 'Document collection, organization, and structured workflows so nothing falls through.', orange: true },
              { icon: <MessageSquare size={22} />, title: 'Client & Partner Communication', desc: 'Proactive status updates to clients and referral partners. You stay out of your inbox.', orange: false },
              { icon: <Calendar size={22} />, title: 'Lead & Appointment Coordination', desc: 'Qualified lead intake and calendar management — every booked call is with an engaged prospect.', orange: true },
            ].map((svc, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className={`group rounded-2xl p-7 h-full transition-all duration-300 border ${svc.orange ? 'glass-card hover:border-orange-400/30 hover:bg-[#1a1510]/60' : 'glass-card hover:border-[#2d5bb5]/40 hover:bg-[#141d35]/60'}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-colors ${svc.orange ? 'bg-orange-400/10 text-orange-400 group-hover:bg-orange-400/20' : 'bg-[#2d5bb5]/15 text-[#7aa3e5] group-hover:bg-[#2d5bb5]/25'}`}>
                    {svc.icon}
                  </div>
                  <h3 className="font-display font-semibold text-white text-lg mb-3">{svc.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[#7aa3e5] hover:text-white transition-colors group">
              View all services <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. HOW QARM WORKS — 3 steps for homepage */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">How It Works</p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mb-5">Three steps. No complexity.</h2>
            <p className="text-slate-400 text-lg">Tell us what you need. We'll handle the rest.</p>
          </AnimatedSection>
          <AnimatedSection className="mb-16">
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-[#2d5bb5]/10 border border-white/[0.06]">
              <img
                src="/images/how-it-works-1400w.webp"
                srcSet="/images/how-it-works-800w.webp 800w, /images/how-it-works-1400w.webp 1400w"
                sizes="(max-width: 768px) 800px, 1400px"
                alt="Three glass capsules showing the QARM process: scattered documents becoming organized, then fully structured and checked off"
                width={1400} height={933} className="w-full h-auto" loading="lazy" />
            </div>
          </AnimatedSection>
          <div className="relative">
            <div className="hidden lg:block absolute top-[52px] left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-[#2d5bb5]/20 to-transparent" />
            <div className="grid lg:grid-cols-3 gap-10">
              {[
                { num: '01', title: 'Tell Us What You Need', desc: 'Complete the short support-plan form. Identify what\'s creating the most pressure in your operations right now.', accent: 'blue' },
                { num: '02', title: 'Receive a Recommended Plan', desc: 'QARM reviews your requirements and recommends a scope, capacity, and monthly plan within one business day.', accent: 'orange' },
                { num: '03', title: 'Onboard and Execute', desc: 'We document responsibilities, set up access, and begin handling your operations under your direction.', accent: 'blue' },
              ].map((step, i) => (
                <AnimatedSection key={i} delay={i * 120} className="flex flex-col items-center text-center">
                  <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-8 relative border-2 ${step.accent === 'orange' ? 'border-orange-400/40 bg-orange-400/5' : 'border-[#2d5bb5]/40 glass-card'}`}>
                    <span className={`font-display font-bold text-2xl ${step.accent === 'orange' ? 'text-orange-400' : 'text-[#7aa3e5]'}`}>{step.num}</span>
                  </div>
                  <h3 className="font-display font-semibold text-white text-xl mb-4">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
          <div className="text-center mt-14">
            <button onClick={() => onGetStarted()} type="button" className="inline-flex items-center gap-2 bg-[#2d5bb5] hover:bg-[#4d7fd4] text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all hover:shadow-xl hover:shadow-[#2d5bb5]/30">
              Start Step One <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 5. PRICING PREVIEW */}
      <section className="py-28 bg-[#080d18] border-y border-white/[0.05]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
                  <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${t.orange ? 'text-orange-400' : 'text-slate-500'}`}>{t.label}</p>
                  <p className="text-2xl font-display font-bold text-white">{t.price}</p>
                  <p className="text-xs text-slate-500 mt-1">{t.sub}</p>
                </div>
              ))}
            </div>
            <Link to="/pricing" className="inline-flex items-center gap-2 bg-[#2d5bb5] hover:bg-[#4d7fd4] text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all hover:shadow-xl hover:shadow-[#2d5bb5]/30">
              View Plans and Build Mine <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* 6. WHY QARM — conversion-focused only, security moves to compact footer trust bar */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* PLACEHOLDER: Client experience — ready for real quotes when available */}
      {/* To add a real testimonial later, uncomment and replace the quote/attribution:
      <section className="py-20 bg-[#080d18] border-y border-white/[0.05]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-6">Client Experience</p>
            <blockquote className="text-xl text-slate-300 leading-relaxed mb-6">"[Real client quote here]"</blockquote>
            <p className="text-sm text-slate-500">— [Role], [Province/State]</p>
          </AnimatedSection>
        </div>
      </section>
      */}

      {/* 7. FAQ */}
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

      {/* 8. FINAL CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0d1424] border-y border-white/[0.06]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#1e3a8a] rounded-full blur-[120px] opacity-10 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mb-5">Ready to take back your time?</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">Tell us what's creating the most pressure. We'll recommend a plan within one business day.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => onGetStarted()} type="button"
                className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-orange-500 text-white px-10 py-5 rounded-lg text-base font-semibold transition-all hover:shadow-xl hover:shadow-orange-500/30">
                Get Your Support Plan <ArrowRight size={18} />
              </button>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white px-8 py-5 rounded-lg text-sm font-semibold transition-all">
                Book a Free Workflow Review
              </a>
            </div>
            <p className="text-slate-600 text-xs mt-4">No obligation. Responds within 1 business day.</p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
