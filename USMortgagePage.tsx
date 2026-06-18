import { ArrowRight, Target, Shield, Zap, Users, Award, Globe, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { CountUp } from '../components/CountUp';

interface AboutPageProps { onGetStarted: () => void; }

const IMGS = {
  team: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=55&auto=format&fit=crop',
  global: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=50&auto=format&fit=crop',
};

export function AboutPage({ onGetStarted }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-[#0a0f1e] pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#f97316] rounded-full blur-[200px] opacity-[0.05] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">About QARM</p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white mb-6 leading-tight">Built for mortgage<br />professionals. Full stop.</h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">QARM was founded on a single conviction: mortgage professionals deserve operational infrastructure built specifically for their industry — not adapted from something else.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission with photo */}
      <section className="pb-24 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">Our Mission</p>
              <h2 className="font-display font-bold text-4xl text-white mb-6 leading-tight">The operational infrastructure<br />your brokerage deserves.</h2>
              <p className="text-slate-400 leading-relaxed mb-5">The best mortgage brokers aren't losing to competitors — they're losing to their own inboxes, disorganised CRMs, and hours spent chasing documents instead of building relationships.</p>
              <p className="text-slate-400 leading-relaxed mb-5">QARM exists to eliminate that friction. We build the operational backbone that lets high-performing brokers do what they do best — originate, advise, and close — while QARM runs everything behind the scenes with precision and accountability.</p>
              <p className="text-slate-400 leading-relaxed">This isn't generalist support. It's a mortgage-specific operations system, staffed by trained specialists who understand your world.</p>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={150}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl" style={{aspectRatio:'4/3'}}>
                  <img src={IMGS.team} alt="Professional team collaborating" width={800} height={600} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/60 to-transparent" />
                </div>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  {[
                    { icon:<Target size={18}/>, label:'Mortgage-Specific', desc:'Built exclusively for the mortgage industry.', orange:false },
                    { icon:<Shield size={18}/>, label:'Privacy-Compliant', desc:'PIPEDA-compliant data handling always.', orange:true },
                    { icon:<Zap size={18}/>, label:'AI-Enhanced', desc:'Workflow intelligence with human oversight.', orange:false },
                    { icon:<Users size={18}/>, label:'Dedicated Teams', desc:'One specialist assigned to your brokerage.', orange:true },
                  ].map((v) => (
                    <div key={v.label} className={`rounded-xl p-4 border ${v.orange ? 'bg-orange-400/5 border-orange-400/20' : 'glass-card'}`}>
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center mb-3 ${v.orange ? 'bg-orange-400/15 text-orange-400' : 'bg-[#2d5bb5]/15 text-[#7aa3e5]'}`}>{v.icon}</div>
                      <h3 className="font-display font-semibold text-white text-xs mb-1">{v.label}</h3>
                      <p className="text-slate-500 text-[10px] leading-relaxed">{v.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Org cards */}
      <section className="py-24 bg-[#080d18] border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">Our Organisation</p>
            <h2 className="font-display font-bold text-4xl text-white mb-5">A structured team built around your success.</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">QARM operates as a dedicated operational organisation — not a freelance network. Each client is supported by a structured team with defined accountability at every level.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon:<BarChart3 size={22}/>, role:'Operations Leadership', desc:'Strategic oversight of client operations, quality standards, and delivery consistency across all accounts.', orange:false },
              { icon:<Users size={22}/>, role:'Mortgage Operations Specialists', desc:'Mortgage-trained specialists assigned to each client — managing CRM, pipeline, documents, and workflows daily.', orange:true },
              { icon:<Award size={22}/>, role:'Client Success Management', desc:'Dedicated account managers who oversee onboarding, quality assurance, and ongoing client relationships.', orange:false },
              { icon:<Globe size={22}/>, role:'Market Development', desc:"Teams expanding QARM's capabilities across Canada, US, UK, Australia, UAE, and emerging markets.", orange:true },
            ].map((t, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className={`rounded-2xl p-7 h-full border ${t.orange ? 'bg-orange-400/5 border-orange-400/20' : 'glass-card'}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${t.orange ? 'bg-orange-400/15 text-orange-400' : 'bg-[#2d5bb5]/15 text-[#7aa3e5]'}`}>{t.icon}</div>
                  <h3 className="font-display font-semibold text-white mb-3">{t.role}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats with countup */}
      <section className="py-16 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { val:2023, suffix:'', label:'Founded', sub:'Est. in Toronto, Canada', isYear:true, orange:false },
              { val:50, suffix:'+', label:'Mortgage professionals served', sub:'Canada, US, UK, AU, UAE', orange:true },
              { val:48, suffix:'h', label:'Average onboarding', sub:'From discovery call to live', orange:false },
              { val:5, suffix:'', label:'Markets active', sub:'Canada, US, UK, AU, UAE', orange:true },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <p className={`text-3xl font-display font-bold mb-1 ${s.orange ? 'text-orange-400' : 'text-[#7aa3e5]'}`}>
                  {s.isYear ? '2023' : <CountUp end={s.val} suffix={s.suffix} />}
                </p>
                <p className="text-sm font-semibold text-slate-300 mb-1">{s.label}</p>
                <p className="text-xs text-slate-500">{s.sub}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Vision with global photo */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMGS.global} alt="Global reach" width={1200} height={600} className="w-full h-full object-cover opacity-[0.07]" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/80 to-[#0a0f1e]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">Where We're Going</p>
            <h2 className="font-display font-bold text-4xl text-white mb-5">Building the mortgage operations platform for North America and beyond.</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">The long-term vision is a proprietary mortgage workflow platform — purpose-built CRM tools, automation systems, and AI-powered infrastructure that scales with every business we serve.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { phase:'Now', title:'Premium Operational Support', desc:'Dedicated mortgage operations specialists across Canada, US, UK, Australia, and UAE.', orange:false },
              { phase:'Next', title:'AI-Powered Systems', desc:'Proprietary automation tools, mortgage workflow dashboards, and AI-enhanced pipeline intelligence.', orange:true },
              { phase:'Future', title:'North American Platform', desc:'A full-stack mortgage operations platform for lending professionals globally.', orange:false },
            ].map((v, i) => (
              <AnimatedSection key={v.phase} delay={i * 100}>
                <div className={`rounded-2xl p-7 h-full border ${v.orange ? 'bg-orange-400/5 border-orange-400/20' : 'glass-card'}`}>
                  <span className={`inline-block text-[10px] font-bold uppercase tracking-widest border px-2.5 py-1 rounded-full mb-5 ${v.orange ? 'text-orange-400 border-orange-400/30' : 'text-[#4d7fd4] border-[#2d5bb5]/30'}`}>{v.phase}</span>
                  <h3 className="font-display font-semibold text-white text-lg mb-3">{v.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/[0.06] bg-[#080d18]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-5">Work with a partner who knows your industry.</h2>
            <p className="text-slate-400 mb-8">Book a discovery call and see what QARM's mortgage-specific operations infrastructure can do for your business.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://calendly.com/theqarm-info/30min" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#f97316] hover:bg-orange-500 text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all hover:shadow-xl hover:shadow-orange-500/30">
                Book Discovery Call <ArrowRight size={18} />
              </a>
              <Link to="/services" className="flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all">
                Explore Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
