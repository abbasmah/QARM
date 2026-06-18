import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, BarChart3, ShieldCheck, FileText, Calendar, MessageSquare, Target, Star, TrendingUp, Clock, Award, Globe } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { CountUp } from '../components/CountUp';

interface HomePageProps { onGetStarted: () => void; }

const IMGS = {
  hero: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=700&q=55&auto=format&fit=crop',
  brokerDesk: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=55&auto=format&fit=crop',
  teamWork: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=55&auto=format&fit=crop',
  toronto: 'https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=900&q=50&auto=format&fit=crop',
  office: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=50&auto=format&fit=crop',
};

const testimonials = [
  { quote: "QARM changed how my brokerage operates. I handed off document coordination and CRM management, and immediately freed up 20 hours a week. Funding volume is up significantly.", name: "D. Richards", role: "Mortgage Broker", location: "Ontario, Canada", initial: "D" },
  { quote: "I was spending more time updating Filogix than actually talking to clients. QARM took over my entire pipeline within 48 hours. My deal flow hasn't changed but my stress level has dropped significantly.", name: "R. Sharma", role: "Mortgage Agent", location: "Ontario, Canada", initial: "R" },
  { quote: "As a high-volume broker I was drowning in admin. QARM handles everything from condition fulfillment to lender follow-ups. My closing ratio improved because I'm actually spending time with clients now.", name: "M. Fournier", role: "Senior Mortgage Broker", location: "Quebec, Canada", initial: "M" },
];

export function HomePage({ onGetStarted }: HomePageProps) {
  return (
    <div className="min-h-screen bg-[#0a0f1e]">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-[#1e3a8a] rounded-full blur-[200px] opacity-[0.12] pointer-events-none" style={{animation:'pulse 8s ease-in-out infinite'}} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#f97316] rounded-full blur-[200px] opacity-[0.05] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div style={{animation:'slide-up 0.7s ease forwards'}}>
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-[#2d5bb5]/30 bg-[#2d5bb5]/10 text-[#7aa3e5] text-xs font-semibold tracking-wide mb-8">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4d7fd4] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#4d7fd4]" />
                </span>
                Mortgage Operations Infrastructure — Canada
              </div>
              <h1 className="font-display font-bold text-5xl lg:text-6xl xl:text-[4.25rem] text-white leading-[1.08] tracking-tight mb-6">
                Your pipeline,<br />
                <span className="text-gradient">managed with<br />precision.</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                QARM is the operational backbone for Canadian mortgage brokers — handling CRM coordination, workflow management, client follow-up systems, and pipeline operations so you close more and chase less.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="https://calendly.com/theqarm-info/30min" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#2d5bb5] hover:bg-[#4d7fd4] text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-[#2d5bb5]/30">
                  Book a Discovery Call <ArrowRight size={18} />
                </a>
                <Link to="/services" className="flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 text-slate-300 hover:text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all duration-200">
                  Explore Services
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex gap-0.5">{[...Array(5)].map((_,i) => <Star key={i} size={15} className="fill-orange-400 text-orange-400" />)}</div>
                <p className="text-sm text-slate-400">Trusted by <span className="text-white font-semibold">50+ mortgage professionals</span> across Canada</p>
              </div>
            </div>

            {/* RIGHT — Dashboard + floating cards */}
            <div className="relative hidden lg:block" style={{animation:'slide-up 0.7s ease 0.2s both',opacity:0}}>
              {/* Photo layer */}
              <div className="absolute -inset-4 rounded-3xl overflow-hidden opacity-15">
                <img src={IMGS.hero} alt="" width={800} height={600} className="w-full h-full object-cover" loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e]/80 to-transparent" />
              </div>

              {/* Dashboard card */}
              <div className="relative glass-card rounded-2xl p-6 glow-blue">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Operations Dashboard</p>
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
                    { action: 'Document Review Complete', client: 'Smith, J. — TD Bank submission', time: '2m ago', color: 'emerald' },
                    { action: 'CRM Updated', client: 'Chen, M. — Commitment received', time: '18m ago', color: 'blue' },
                    { action: 'Follow-Up Sent', client: 'Patel, R. — NOA requested', time: '1h ago', color: 'orange' },
                    { action: 'Appointment Booked', client: 'Sharma, A. — Discovery call set', time: '2h ago', color: 'blue' },
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

              {/* Floating card — top right */}
              <div className="absolute -top-6 -right-6 glass-card-light rounded-xl p-4 shadow-2xl animate-float border border-[#2d5bb5]/20">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#f97316]/15 rounded-lg flex items-center justify-center"><TrendingUp size={16} className="text-orange-400" /></div>
                  <div><p className="text-[10px] text-slate-500">Avg. time saved</p><p className="text-base font-display font-bold text-white">22 hrs/wk</p></div>
                </div>
              </div>

              {/* Floating card — bottom left */}
              <div className="absolute -bottom-5 -left-6 glass-card-light rounded-xl p-4 shadow-2xl border border-emerald-400/20" style={{animation:'float 4s ease-in-out 0.5s infinite'}}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-emerald-500/10 rounded-lg flex items-center justify-center"><CheckCircle2 size={16} className="text-emerald-400" /></div>
                  <div><p className="text-[10px] text-slate-500">Onboarding time</p><p className="text-base font-display font-bold text-white">48 hours</p></div>
                </div>
              </div>

              {/* Floating card — mid right */}
              <div className="absolute top-1/2 -right-8 glass-card-light rounded-xl p-3 shadow-xl border border-[#f97316]/20" style={{animation:'float 5s ease-in-out 1s infinite'}}>
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 bg-[#f97316]/10 rounded-lg flex items-center justify-center"><ShieldCheck size={13} className="text-orange-400" /></div>
                  <div><p className="text-[9px] text-slate-500">PIPEDA</p><p className="text-xs font-display font-bold text-white">Compliant</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS STRIP */}
      <section className="border-y border-white/[0.05] bg-white/[0.015] py-10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-[10px] font-semibold text-slate-600 uppercase tracking-[0.3em] mb-7">Operations specialists proficient in</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {['Filogix Expert','Velocity','Finmo','GoHighLevel','HubSpot','Salesforce'].map((tool) => (
              <span key={tool} className="font-display font-bold text-sm text-slate-500 hover:text-slate-200 transition-colors cursor-default tracking-wide">{tool}</span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS COUNTER STRIP */}
      <section className="py-16 border-b border-white/[0.05]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 50, suffix: '+', label: 'Brokers served', color: 'text-[#7aa3e5]' },
              { value: 22, suffix: ' hrs', label: 'Reclaimed weekly', color: 'text-orange-400' },
              { value: 70, suffix: '%', label: 'Lower than local hire', color: 'text-[#7aa3e5]' },
              { value: 48, suffix: 'h', label: 'To fully operational', color: 'text-orange-400' },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <p className={`text-4xl font-display font-bold mb-2 ${s.color}`}>
                  <CountUp end={s.value} suffix={s.suffix} duration={2000} />
                </p>
                <p className="text-xs text-slate-500 uppercase tracking-wider">{s.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">What We Handle</p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mb-5">Complete mortgage operations,<br />covered.</h2>
            <p className="text-slate-400 text-lg leading-relaxed">From CRM hygiene to full pipeline coordination — QARM manages the operational layer so nothing falls through the cracks.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <BarChart3 size={22} />, title: 'CRM & Pipeline Management', desc: 'Your CRM stays current, accurate, and actionable. We manage Filogix, Finmo, Velocity, and GHL so your pipeline reflects reality at all times.', orange: false },
              { icon: <FileText size={22} />, title: 'Document & Condition Fulfillment', desc: 'We coordinate document collection — NOAs, T4s, pay stubs, IDs — organized to lender spec and ready for clean submissions.', orange: true },
              { icon: <MessageSquare size={22} />, title: 'Client Communication Systems', desc: 'Proactive status updates to clients, realtors, and legal. Your clients are always informed without you spending time in your inbox.', orange: false },
              { icon: <Target size={22} />, title: 'Underwriting Preparation', desc: 'Bureau review, deal structuring notes, and submission package organization. Files go to underwriting complete the first time.', orange: true },
              { icon: <Calendar size={22} />, title: 'Scheduling & Lead Coordination', desc: 'Qualified lead intake, preliminary information gathering, and calendar management — every booked call is with an engaged prospect.', orange: false },
              { icon: <ShieldCheck size={22} />, title: 'Compliance & Post-Funding', desc: 'Post-funding file organization, provincial compliance checklists, and PIPEDA-compliant data handling as standard operating procedure.', orange: true },
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

      {/* WHY QARM */}
      <section className="py-28 bg-[#080d18] border-y border-white/[0.05] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.13]">
          <img src={IMGS.office} alt="" width={1200} height={600} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection direction="left">
              <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">Why QARM</p>
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mb-6 leading-tight">
                Not a generic agency.<br /><span className="text-gradient-blue">An operational partner.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">Generic assistants need months of onboarding and still don't understand the difference between a commitment letter and a commitment letter condition. QARM specialists are trained exclusively on Canadian mortgage workflows before they ever touch your pipeline.</p>
              <div className="space-y-4">
                {[
                  { text: 'Pre-trained on Canadian lender requirements, A/B products, and CMHC/Sagen guidelines.', orange: false },
                  { text: 'Proficient in Filogix Expert, Finmo, Velocity, GHL, and HubSpot on day one.', orange: true },
                  { text: 'Operate under NDAs and PIPEDA-compliant data handling protocols.', orange: false },
                  { text: 'Dedicated account management ensures quality, consistency, and accountability.', orange: true },
                  { text: 'No long-term lock-in. Scale up or down to match your volume.', orange: false },
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${point.orange ? 'bg-orange-400/15 border border-orange-400/30' : 'bg-[#2d5bb5]/20 border border-[#2d5bb5]/30'}`}>
                      <CheckCircle2 size={12} className={point.orange ? 'text-orange-400' : 'text-[#4d7fd4]'} />
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{point.text}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={150}>
              <div className="relative">
                {/* Main photo */}
                <div className="rounded-2xl overflow-hidden shadow-2xl" style={{aspectRatio:'4/3'}}>
                  <img src={IMGS.brokerDesk} alt="Professional mortgage team collaborating" width={800} height={600} className="w-full h-full object-cover opacity-90" loading="lazy" />
                </div>
                {/* Stat cards — 4 individual rounded cards */}
                <div className="grid grid-cols-4 gap-3 mt-4">
                  <div className="bg-[#141d35] border border-white/10 rounded-2xl py-4 px-2 text-center">
                    <p className="text-[10px] text-slate-400 mb-1.5 uppercase tracking-wide">Since</p>
                    <p className="text-2xl font-display font-bold text-white">2023</p>
                  </div>
                  <div className="bg-[#141d35] border border-white/10 rounded-2xl py-4 px-2 text-center">
                    <p className="text-2xl font-display font-bold text-[#7aa3e5] mb-1"><CountUp end={20} suffix="+" /></p>
                    <p className="text-[10px] text-slate-400 leading-tight">hrs/wk saved</p>
                  </div>
                  <div className="bg-[#141d35] border border-white/10 rounded-2xl py-4 px-2 text-center">
                    <p className="text-2xl font-display font-bold text-[#7aa3e5] mb-1"><CountUp end={48} suffix="h" /></p>
                    <p className="text-[10px] text-slate-400 leading-tight">onboarding</p>
                  </div>
                  <div className="bg-[#f97316]/10 border border-[#f97316]/30 rounded-2xl py-4 px-2 text-center">
                    <p className="text-2xl font-display font-bold text-orange-400 mb-1"><CountUp end={70} suffix="%" /></p>
                    <p className="text-[10px] text-orange-200/70 leading-tight">cost savings</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">How It Works</p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mb-5">Operational in 48 hours.</h2>
            <p className="text-slate-400 text-lg">A streamlined onboarding designed around your workflow — not a generic playbook.</p>
          </AnimatedSection>
          <div className="relative">
            <div className="hidden lg:block absolute top-[52px] left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-[#f97316]/30 to-transparent" />
            <div className="grid lg:grid-cols-3 gap-10">
              {[
                { num: '01', title: 'Discovery Call', desc: 'We map your current workflow, identify operational bottlenecks, and clarify exactly what your business needs to run more efficiently.', accent: 'blue' },
                { num: '02', title: 'Precision Match', desc: 'We match you with a specialist from our mortgage-trained roster based on your CRM stack, deal volume, and workflow preferences.', accent: 'orange' },
                { num: '03', title: 'Integration & Execution', desc: 'Your QARM specialist integrates into your systems. Within 48 hours, your pipeline is being actively managed and your inbox is quieter.', accent: 'blue' },
              ].map((step, i) => (
                <AnimatedSection key={i} delay={i * 120} className="flex flex-col items-center text-center">
                  <div className={`w-28 h-28 rounded-full flex items-center justify-center mb-8 relative border-2 ${step.accent === 'orange' ? 'border-orange-400/40 bg-orange-400/5 glow-orange' : 'border-[#2d5bb5]/40 glass-card glow-blue'}`}>
                    <span className={`font-display font-bold text-3xl ${step.accent === 'orange' ? 'text-orange-400' : 'text-gradient'}`}>{step.num}</span>
                    {step.accent === 'orange' && <div className="absolute -inset-1 rounded-full border border-orange-400/20 animate-ping opacity-30" />}
                  </div>
                  <h3 className="font-display font-semibold text-white text-xl mb-4">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 relative overflow-hidden">
        {/* Toronto skyline bg */}
        <div className="absolute inset-0">
          <img src={IMGS.toronto} alt="" width={1200} height={600} className="w-full h-full object-cover opacity-[0.06]" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080d18] via-[#080d18]/80 to-[#080d18]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">Client Results</p>
            <h2 className="font-display font-bold text-4xl text-white">What brokers are saying.</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="glass-card rounded-2xl p-8 flex flex-col h-full hover:border-[#2d5bb5]/30 transition-all duration-300">
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_,j) => <Star key={j} size={14} className="fill-orange-400 text-orange-400" />)}
                  </div>
                  <blockquote className="text-slate-300 text-sm leading-relaxed flex-grow mb-6">"{t.quote}"</blockquote>
                  <div className="border-t border-white/[0.06] pt-5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2d5bb5] to-[#1c2a4a] flex items-center justify-center text-white font-display font-bold text-sm shrink-0 border border-[#2d5bb5]/40">
                      {t.initial}
                    </div>
                    <div>
                      <p className="font-display font-semibold text-white text-sm">{t.name}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{t.role} · {t.location}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL REACH */}
      <section className="py-20 border-y border-white/[0.05] bg-[#080d18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">Global Reach</p>
            <h2 className="font-display font-bold text-3xl text-white mb-3">Serving mortgage professionals worldwide.</h2>
            <p className="text-slate-400">Operational infrastructure built for every major English-speaking lending market.</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { flag: '🇨🇦', country: 'Canada', note: 'Primary market', href: '/services', orange: true },
              { flag: '🇺🇸', country: 'United States', note: 'MLO support', href: '/us-mortgage-operations', orange: false },
              { flag: '🇬🇧', country: 'United Kingdom', note: 'FCA-compliant', href: '/global-operations', orange: false },
              { flag: '🇦🇺', country: 'Australia', note: 'MFAA/FBAA ops', href: '/global-operations', orange: false },
              { flag: '🇦🇪', country: 'UAE', note: 'Home finance', href: '/global-operations', orange: false },
            ].map((m) => (
              <Link key={m.country} to={m.href}
                className={`flex flex-col items-center p-5 rounded-2xl border text-center transition-all duration-300 hover:-translate-y-1 ${m.orange ? 'bg-orange-400/5 border-orange-400/20 hover:border-orange-400/40' : 'glass-card hover:border-[#2d5bb5]/40'}`}>
                <span className="text-3xl mb-3">{m.flag}</span>
                <p className={`font-display font-semibold text-sm mb-1 ${m.orange ? 'text-orange-400' : 'text-white'}`}>{m.country}</p>
                <p className="text-[10px] text-slate-500">{m.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SNAPSHOT */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection className="mb-16">
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">Pricing</p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mb-5">Straightforward. No surprises.</h2>
            <p className="text-slate-400 text-lg">No setup fees. No long-term commitments. Cancel anytime.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <AnimatedSection delay={60}>
              <div className="glass-card rounded-2xl p-8 text-left h-full flex flex-col">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Part-Time Support</p>
                <div className="flex items-baseline gap-2 mb-1"><span className="text-4xl font-display font-bold text-white">$899</span><span className="text-slate-500 text-sm">CAD / month</span></div>
                <p className="text-xs text-slate-600 mb-7">~$11/hr · 80 hrs/month · 4 hrs/day</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {['CRM management & pipeline updates','Document collection coordination','Client & realtor follow-ups','Appointment scheduling','Dedicated account management'].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300"><CheckCircle2 size={14} className="text-[#4d7fd4] mt-0.5 shrink-0" />{f}</li>
                  ))}
                </ul>
                <a href="https://calendly.com/theqarm-info/30min" target="_blank" rel="noopener noreferrer"
                  className="block w-full py-3.5 text-center border border-[#2d5bb5]/40 hover:border-[#4d7fd4] text-[#7aa3e5] hover:text-white hover:bg-[#2d5bb5]/10 rounded-lg text-sm font-semibold transition-all">
                  Get Started
                </a>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={130}>
              <div className="bg-gradient-to-b from-[#1c2a4a] to-[#141d35] border border-[#2d5bb5]/30 rounded-2xl p-8 text-left relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#f97316] rounded-full blur-[80px] opacity-10 pointer-events-none" />
                <div className="flex items-start justify-between mb-3">
                  <p className="text-xs font-semibold text-[#7aa3e5] uppercase tracking-widest">Full-Time Support</p>
                  <span className="bg-[#f97316] text-white text-[10px] font-bold uppercase tracking-wider py-1 px-2.5 rounded-full">Most Popular</span>
                </div>
                <div className="flex items-baseline gap-2 mb-1"><span className="text-4xl font-display font-bold text-white">$1,599</span><span className="text-slate-400 text-sm">CAD / month</span></div>
                <p className="text-xs text-slate-500 mb-7">~$10/hr · 160 hrs/month · 8 hrs/day</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {['Everything in Part-Time, plus:','Underwriting prep & bureau review','Lender submissions & follow-ups','Full pipeline management','Lead intake & appointment setting','Compliance & post-funding audits'].map((f, i) => (
                    <li key={f} className={`flex items-start gap-2.5 text-sm ${i === 0 ? 'text-orange-400 font-semibold' : 'text-slate-200'}`}>
                      <CheckCircle2 size={14} className="text-orange-400 mt-0.5 shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <a href="https://calendly.com/theqarm-info/30min" target="_blank" rel="noopener noreferrer"
                  className="block w-full py-3.5 text-center bg-[#f97316] hover:bg-orange-500 text-white rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-orange-500/30">
                  Get Started
                </a>
              </div>
            </AnimatedSection>
          </div>
          <div className="mt-8"><Link to="/pricing" className="inline-flex items-center gap-1.5 text-sm text-[#7aa3e5] hover:text-white transition-colors">View full pricing details <ChevronRight size={14} /></Link></div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0d1424] border-y border-white/[0.06]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#1e3a8a] rounded-full blur-[120px] opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#f97316] rounded-full blur-[150px] opacity-[0.06] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mb-5">Ready to scale your operations?</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">Book a 30-minute discovery call. We'll identify your top operational bottlenecks and build a plan to resolve them.</p>
            <a href="https://calendly.com/theqarm-info/30min" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-orange-500 text-white px-10 py-5 rounded-lg text-base font-semibold transition-all hover:shadow-xl hover:shadow-orange-500/30">
              Book Your Discovery Call <ArrowRight size={18} />
            </a>
            <p className="text-slate-600 text-xs mt-4">No obligation. Responds within 1 business day.</p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
