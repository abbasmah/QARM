import { ArrowRight, CheckCircle2, Star, BarChart3, FileText, MessageSquare, Target, Calendar, ShieldCheck } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { CountUp } from '../components/CountUp';

interface USMortgagePageProps { onGetStarted: () => void; }

const IMGS = {
  hero: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=55&auto=format&fit=crop',
  mlo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=700&q=55&auto=format&fit=crop',
};

export function USMortgagePage({ onGetStarted }: USMortgagePageProps) {
  return (
    <div className="min-h-screen bg-[#0a0f1e] pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMGS.hero} alt="US city skyline" width={1200} height={600} className="w-full h-full object-cover opacity-8" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/80 to-[#0a0f1e]" />
        </div>
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#f97316] rounded-full blur-[180px] opacity-[0.05] pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2d5bb5]/30 bg-[#2d5bb5]/10 text-[#7aa3e5] text-xs font-semibold tracking-wide mb-8">
              🇺🇸 United States — Mortgage Operations
            </div>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Mortgage operations support<br /><span className="text-gradient">built for American MLOs.</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-10">
              QARM delivers dedicated mortgage loan originator support — pipeline management, file coordination, CRM hygiene, and compliance operations — so you close more loans and spend less time on paperwork.
            </p>
            <a href="https://calendly.com/theqarm-info/30min" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-orange-500 text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all hover:shadow-xl hover:shadow-orange-500/30">
              Book a Discovery Call <ArrowRight size={18} />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* US tools */}
      <section className="py-20 border-y border-white/[0.05] bg-[#080d18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">Built for the US Market</p>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-5">We understand how American mortgage lending works.</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'LOS Platforms', items: ['Encompass (ICE)','Calyx Point','Blend','BytePro','SimpleNexus'], orange: false },
              { title: 'CRM Systems', items: ['Salesforce','HubSpot','Total Expert','Surefire','Velocify'], orange: true },
              { title: 'Compliance', items: ['RESPA/TRID','HMDA reporting','TILA disclosures','NMLS filing support','State licensing compliance'], orange: false },
              { title: 'Loan Types', items: ['Conventional (Fannie/Freddie)','FHA & VA loans','USDA loans','Jumbo & non-QM','DSCR & investor loans'], orange: true },
            ].map((col, i) => (
              <AnimatedSection key={i} delay={i * 70}>
                <div className={`rounded-2xl p-6 h-full ${col.orange ? 'bg-orange-400/5 border border-orange-400/20' : 'glass-card'}`}>
                  <p className={`text-xs font-semibold uppercase tracking-widest mb-4 ${col.orange ? 'text-orange-400' : 'text-[#4d7fd4]'}`}>{col.title}</p>
                  <ul className="space-y-2.5">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle2 size={13} className={col.orange ? 'text-orange-400 shrink-0' : 'text-[#4d7fd4] shrink-0'} />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services + photo */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">MLO Operations Support</p>
            <h2 className="font-display font-bold text-4xl text-white mb-5">What QARM handles for US loan originators.</h2>
          </AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{aspectRatio:'4/3'}}>
              <img src={IMGS.mlo} alt="MLO at work" width={800} height={600} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { val: 660, prefix:'$', suffix:'/mo', label:'USD equivalent', orange: false },
                    { val: 48, suffix:'h', label:'Onboarding', orange: true },
                    { val: 0, suffix:'', label:'Employment obligations', orange: false },
                  ].map((s,i) => (
                    <div key={i} className={`rounded-xl p-3 text-center ${s.orange ? 'bg-orange-400/15 border border-orange-400/30' : 'glass-card-light'}`}>
                      <p className={`text-lg font-display font-bold ${s.orange ? 'text-orange-400' : 'text-white'}`}>
                        {s.prefix}<CountUp end={s.val} suffix={s.suffix} />
                      </p>
                      <p className="text-[9px] text-slate-400 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon:<BarChart3 size={20}/>, title:'LOS & CRM Management', desc:'Daily updates in your loan origination system and CRM. Pipeline stages, task tracking, and borrower records kept accurate.', orange:false },
                { icon:<FileText size={20}/>, title:'File & Condition Management', desc:'Borrower document collection — pay stubs, W-2s, bank statements, 1003s — organised to AUS and lender spec.', orange:true },
                { icon:<Target size={20}/>, title:'Processing Support', desc:'Pre-underwriting file review, PTD/PTF condition tracking, appraisal coordination, and submission preparation.', orange:false },
                { icon:<MessageSquare size={20}/>, title:'Borrower Communication', desc:'Status updates with borrowers, realtors, settlement agents, and title companies throughout the loan lifecycle.', orange:true },
                { icon:<Calendar size={20}/>, title:'Lead Management', desc:'Inbound lead intake, pre-qualification data gathering, and calendar management for closeable opportunities.', orange:false },
                { icon:<ShieldCheck size={20}/>, title:'Compliance Operations', desc:'RESPA/TRID timeline tracking, disclosure management, and post-closing file organisation to NMLS standards.', orange:true },
              ].map((svc, i) => (
                <AnimatedSection key={i} delay={i * 60}>
                  <div className={`rounded-xl p-5 h-full border transition-all ${svc.orange ? 'bg-orange-400/5 border-orange-400/15 hover:border-orange-400/30' : 'glass-card hover:border-[#2d5bb5]/40'}`}>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${svc.orange ? 'bg-orange-400/15 text-orange-400' : 'bg-[#2d5bb5]/15 text-[#7aa3e5]'}`}>{svc.icon}</div>
                    <h3 className="font-display font-semibold text-white text-sm mb-2">{svc.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{svc.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-[#080d18] border-y border-white/[0.05]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-10 border-[#f97316]/20 hover:border-orange-400/30 transition-all">
              <div className="flex justify-center gap-1 mb-6">{[...Array(5)].map((_,i) => <Star key={i} size={16} className="fill-orange-400 text-orange-400" />)}</div>
              <blockquote className="text-xl text-slate-300 leading-relaxed mb-8">"As a solo MLO doing 15+ units a month I couldn't keep up with the file management. QARM handles my pipeline tracking, borrower follow-ups, and condition chasing. My processor relationship improved because files arrive complete. Huge ROI."</blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f97316] to-[#c2410c] flex items-center justify-center text-white font-display font-bold">R</div>
                <div className="text-left">
                  <p className="font-display font-semibold text-white">R. Martinez</p>
                  <p className="text-sm text-slate-500">Mortgage Loan Originator · Texas, United States</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-5">Ready to offload your loan operations?</h2>
            <p className="text-slate-400 mb-8">Book a discovery call. We'll map your current workflow and show you exactly how QARM fits into your origination process.</p>
            <a href="https://calendly.com/theqarm-info/30min" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-orange-500 text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all hover:shadow-xl hover:shadow-orange-500/30">
              Book a Discovery Call <ArrowRight size={18} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
