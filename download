import { ArrowRight, CheckCircle2, BarChart3, FileText, MessageSquare, Target, Calendar, ShieldCheck, Workflow, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';

interface ServicesPageProps { onGetStarted: () => void; }

const IMGS = {
  hero: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=55&auto=format&fit=crop',
  crm: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=55&auto=format&fit=crop',
  docs: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&q=55&auto=format&fit=crop',
  comms: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&q=55&auto=format&fit=crop',
  underwriting: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&q=55&auto=format&fit=crop',
  scheduling: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=500&q=55&auto=format&fit=crop',
  compliance: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&q=55&auto=format&fit=crop',
  workflow: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=55&auto=format&fit=crop',
  ai: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=500&q=55&auto=format&fit=crop',
};

const services = [
  { id:'crm', icon:<BarChart3 size={24}/>, label:'CRM & Pipeline Management', headline:'Your pipeline, accurate and current — always.', desc:'A disorganized CRM is a revenue leak. QARM manages your CRM in Filogix Expert, Finmo, Velocity, GoHighLevel, or HubSpot — ensuring every client record, deal status, and follow-up flag is current, correct, and actionable.', deliverables:['Daily CRM updates across all active files','Pipeline stage management and deal status tracking','Lead record creation and deduplication','Custom tag and filter organisation','Task assignment and deadline tracking','CRM health audits on request'], img: IMGS.crm, orange: false },
  { id:'workflow', icon:<Workflow size={24}/>, label:'Workflow Coordination', headline:'Structured systems that eliminate the chaos.', desc:'QARM implements and manages structured operational workflows that standardise how your brokerage handles every deal — from initial application to post-funding. Nothing falls through the cracks.', deliverables:['Process mapping and SOP documentation','Task and checklist management per deal stage','Bottleneck identification and resolution','Cross-team communication coordination','Workflow optimisation using your existing tools','Monthly operational review and reporting'], img: IMGS.workflow, orange: true },
  { id:'documents', icon:<FileText size={24}/>, label:'Document & Condition Fulfillment', headline:'Complete files. Clean submissions. Faster closings.', desc:'Document chasing is one of the most time-consuming parts of a broker\'s day. QARM coordinates the collection, organisation, and verification of all required documentation — ensuring files go to lenders complete the first time.', deliverables:['Client document request coordination (NOA, T4s, paystubs, IDs)','Document completeness review against lender requirements','Secure file organisation and naming conventions','Condition fulfillment tracking and follow-up','A-lender and B-lender specific preparation','CMHC/Sagen document standards compliance'], img: IMGS.docs, orange: false },
  { id:'communication', icon:<MessageSquare size={24}/>, label:'Client Communication Systems', headline:'Clients always informed. You never in the weeds.', desc:'QARM manages your outbound communication infrastructure — status updates, follow-up sequences, and milestone notifications — without compromising your professional voice.', deliverables:['Proactive client status update emails','Realtor and lawyer communication coordination','Commitment letter and condition notification management','Follow-up sequences for pending documents','Post-approval client communication','Communication templates built to your brand voice'], img: IMGS.comms, orange: true },
  { id:'underwriting', icon:<Target size={24}/>, label:'Underwriting Preparation', headline:'Files submitted right the first time.', desc:'QARM prepares submission packages to lender specification — reducing conditions, accelerating turnaround, and protecting your lender relationships.', deliverables:['Equifax and TransUnion bureau review and summary','Deal structuring notes and liability breakdown','Submission package compilation per lender requirements','GDS/TDS ratio verification','Employment and income documentation review','Pre-submission completeness checklist'], img: IMGS.underwriting, orange: false },
  { id:'scheduling', icon:<Calendar size={24}/>, label:'Scheduling & Lead Coordination', headline:'Qualified appointments. Not wasted calls.', desc:'QARM manages lead intake, conducts preliminary qualification, and books only qualified, prepared prospects into your schedule — ensuring your time is spent on conversations that move forward.', deliverables:['Inbound lead intake and preliminary screening','Appointment booking and calendar management','Pre-call information collection from prospects','Reminder coordination for scheduled appointments','CRM integration of all lead touchpoints','No-show follow-up and rescheduling'], img: IMGS.scheduling, orange: true },
  { id:'compliance', icon:<ShieldCheck size={24}/>, label:'Compliance & Post-Funding Operations', headline:'Clean files. PIPEDA-compliant. Every time.', desc:'QARM handles post-funding file organisation, provincial compliance checklists, and data management to PIPEDA standards — protecting your brokerage and your licence.', deliverables:['Post-funding file audit and organisation','Provincial brokerage compliance checklist completion','PIPEDA-compliant data handling and storage standards','File archiving and retention protocol management','Regulatory update tracking (FSRA, BCFSA, AMF)','Compliance reporting support'], img: IMGS.compliance, orange: false },
  { id:'ai', icon:<Database size={24}/>, label:'AI-Enhanced Workflow Systems', headline:'Human expertise. AI-optimised efficiency.', desc:'QARM integrates AI workflow tools to enhance the speed and consistency of operational tasks — automating data entry, document categorisation, and routine follow-ups while keeping human oversight on every decision.', deliverables:['Automated data entry verification and correction','Document classification and routing','Follow-up sequence automation configuration','CRM workflow automation setup and management','AI-assisted note-taking and summary generation','Workflow analytics and performance reporting'], img: IMGS.ai, orange: true },
];

export function ServicesPage({ onGetStarted }: ServicesPageProps) {
  return (
    <div className="min-h-screen bg-[#0a0f1e] pt-20">
      {/* Hero with photo */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMGS.hero} alt="Professional mortgage office" width={1200} height={600} className="w-full h-full object-cover opacity-35" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/30 via-[#0a0f1e]/50 to-[#0a0f1e]" />
        </div>
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">QARM Services</p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white mb-6 leading-tight">The operational layer<br />your brokerage needs.</h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">QARM handles every component of your mortgage operations infrastructure — from CRM hygiene to compliance — so you can focus on origination and relationships.</p>
            <a href="https://calendly.com/theqarm-info/30min" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-orange-500 text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all hover:shadow-xl hover:shadow-orange-500/30">
              Book a Discovery Call <ArrowRight size={18} />
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/[0.06] bg-[#080d18]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-5">Ready to offload your operations?</h2>
            <p className="text-slate-400 mb-8">Book a discovery call and we'll identify exactly which services will have the highest impact on your brokerage.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://calendly.com/theqarm-info/30min" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#f97316] hover:bg-orange-500 text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all">
                Book Discovery Call <ArrowRight size={18} />
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
