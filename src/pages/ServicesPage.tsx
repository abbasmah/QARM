import { ArrowRight, CheckCircle2, BarChart3, FileText, MessageSquare, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { useGetStarted } from '../context/GetStartedContext';


const IMGS = {
  hero: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=55&auto=format&fit=crop',
  crm: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=55&auto=format&fit=crop',
  docs: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&q=55&auto=format&fit=crop',
  comms: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&q=55&auto=format&fit=crop',
  scheduling: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=500&q=55&auto=format&fit=crop',
};

const services = [
  { id:'crm', icon:<BarChart3 size={24}/>, label:'CRM & Pipeline Management', headline:'Your pipeline, accurate and current — always.', desc:'A disorganized CRM is a revenue leak. QARM adapts to your existing CRM — Filogix, Velocity, Finmo, GoHighLevel, HubSpot, or another platform you already use — ensuring every client record, deal status, and follow-up flag is current, correct, and actionable.', deliverables:['Daily CRM updates across all active files','Pipeline stage management and deal status tracking','Lead record creation and deduplication','Custom tag and filter organization','Task assignment and deadline tracking','CRM health audits on request'], img: IMGS.crm, orange: false },
  { id:'documents', icon:<FileText size={24}/>, label:'Document & Workflow Coordination', headline:'Complete files. Organized workflows. Nothing falls through.', desc:'QARM coordinates the collection, organization, and tracking of client and deal documentation, and implements structured workflows so every file moves through your process without manual chasing.', deliverables:['Client document request coordination','Document completeness review and checklist tracking','Secure file organization and naming conventions','Process mapping and task tracking per deal stage','Bottleneck identification and resolution','Monthly operational review and reporting'], img: IMGS.docs, orange: true },
  { id:'communication', icon:<MessageSquare size={24}/>, label:'Client & Partner Communication', headline:'Clients always informed. You never in the weeds.', desc:'QARM manages your outbound communication infrastructure — status updates, follow-up sequences, and milestone notifications — without compromising your professional voice.', deliverables:['Proactive client status update emails','Referral partner and third-party communication coordination','Follow-up sequences for pending items','Post-close client communication','Communication templates built to your brand voice','Response time tracking'], img: IMGS.comms, orange: false },
  { id:'scheduling', icon:<Calendar size={24}/>, label:'Lead & Appointment Coordination', headline:'Qualified appointments. Not wasted time.', desc:'QARM manages lead intake, conducts preliminary qualification, and books only qualified, prepared prospects into your schedule — so your time goes to conversations that move forward.', deliverables:['Inbound lead intake and preliminary screening','Appointment booking and calendar management','Pre-call information collection from prospects','Reminder coordination for scheduled appointments','CRM integration of all lead touchpoints','No-show follow-up and rescheduling'], img: IMGS.scheduling, orange: true },
];

export function ServicesPage() {
  const onGetStarted = useGetStarted();
  return (
    <div className="min-h-screen bg-[#0a0f1e] pt-20">
      {/* Hero with photo */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMGS.hero} alt="Professional office" width={1200} height={600} className="w-full h-full object-cover opacity-35" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/30 via-[#0a0f1e]/50 to-[#0a0f1e]" />
        </div>
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">QARM Services</p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white mb-6 leading-tight">The operational layer<br />your business needs.</h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">QARM handles the day-to-day operational work — CRM hygiene, document coordination, client communication, and scheduling — so you can focus on relationships and closing.</p>
            <a href="https://calendly.com/theqarm-info/30min" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-orange-500 text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all hover:shadow-xl hover:shadow-orange-500/30">
              Book a Free Workflow Review <ArrowRight size={18} />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Services with images */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.id} delay={40}>
                <div id={svc.id} className={`rounded-2xl overflow-hidden border transition-all duration-300 ${svc.orange ? 'bg-orange-400/[0.03] border-orange-400/15 hover:border-orange-400/30' : 'glass-card hover:border-[#2d5bb5]/30'}`}>
                  <div className="grid lg:grid-cols-3 items-stretch">
                    {/* Image — alternating sides */}
                    {i % 2 === 0 ? (
                      <div className="relative h-48 lg:h-auto overflow-hidden">
                        <img src={svc.img} alt={svc.label} width={600} height={400} className="w-full h-full object-cover opacity-50" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0f1e]/90 lg:block hidden" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/90 to-transparent lg:hidden" />
                        <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center ${svc.orange ? 'bg-orange-400/20 text-orange-400' : 'bg-[#2d5bb5]/20 text-[#7aa3e5]'}`}>{svc.icon}</div>
                      </div>
                    ) : null}
                    {/* Content */}
                    <div className="lg:col-span-2 p-8 lg:p-10">
                      <div className="grid lg:grid-cols-2 gap-8 items-start">
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            {i % 2 !== 0 && <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${svc.orange ? 'bg-orange-400/15 text-orange-400' : 'bg-[#2d5bb5]/15 text-[#7aa3e5]'}`}>{svc.icon}</div>}
                            <span className={`text-xs font-semibold uppercase tracking-widest ${svc.orange ? 'text-orange-400' : 'text-[#4d7fd4]'}`}>{svc.label}</span>
                          </div>
                          <h2 className="font-display font-bold text-2xl text-white mb-3">{svc.headline}</h2>
                          <p className="text-slate-400 leading-relaxed text-sm">{svc.desc}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">What's included</p>
                          <ul className="space-y-2.5">
                            {svc.deliverables.map((d) => (
                              <li key={d} className="flex items-start gap-3 text-sm text-slate-300">
                                <CheckCircle2 size={14} className={`shrink-0 mt-0.5 ${svc.orange ? 'text-orange-400' : 'text-[#4d7fd4]'}`} />{d}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Image on right for odd items */}
                    {i % 2 !== 0 ? (
                      <div className="relative h-48 lg:h-auto overflow-hidden hidden lg:block">
                        <img src={svc.img} alt={svc.label} width={600} height={400} className="w-full h-full object-cover opacity-50" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a0f1e]/90" />
                      </div>
                    ) : null}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <p className="text-center text-sm text-slate-500 mt-10 max-w-2xl mx-auto">QARM uses AI-enhanced tools to support this work — never to replace it. Every task is handled and reviewed by a real person on the QARM team.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Digital presence cross-sell */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link to="/broker-growth" className="group block glass-card rounded-2xl p-8 sm:p-10 hover:border-orange-400/30 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
                <div className="flex-1">
                  <p className="text-xs font-semibold text-orange-400 uppercase tracking-widest mb-3">Also Available</p>
                  <h3 className="font-display font-bold text-2xl text-white mb-2">Need a website or social media managed too?</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Websites from $1,499 CAD, social media management from $599 CAD/month — available as an add-on to any support plan, or on their own.</p>
                </div>
                <div className="flex items-center gap-2 text-orange-400 font-semibold text-sm shrink-0 group-hover:gap-3 transition-all">
                  Explore Digital Presence Support <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/[0.06] bg-[#080d18]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-5">Ready to offload your operations?</h2>
            <p className="text-slate-400 mb-8">Book a discovery call and we'll identify exactly which services will have the highest impact on your business — whether that's mortgage, real estate, or insurance.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://calendly.com/theqarm-info/30min" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#f97316] hover:bg-orange-500 text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all">
                Book a Free Workflow Review <ArrowRight size={18} />
              </a>
              <Link to="/pricing" className="flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all">
                View Pricing
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
