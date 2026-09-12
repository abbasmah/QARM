import { ArrowRight, BarChart3, FileText, MessageSquare, Calendar, ShieldCheck, Users } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { RelatedIndustries } from '../components/RelatedIndustries';
import { useGetStarted } from '../context/GetStartedContext';

const CALENDLY_URL = 'https://calendly.com/theqarm-info/30min';

export function MortgagePage() {
  const onGetStarted = useGetStarted();
  return (
    <div className="min-h-screen bg-[#0a0f1e] pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/mortgage-fs-hero-1600w.webp"
            srcSet="/images/mortgage-fs-hero-640w.webp 640w, /images/mortgage-fs-hero-900w.webp 900w, /images/mortgage-fs-hero-1600w.webp 1600w"
            sizes="100vw"
            alt="Mortgage documents, house model, and financial charts on a desk"
            width={1600} height={1067} className="w-full h-full object-cover opacity-[0.28]" loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/60 via-[#0a0f1e]/82 to-[#0a0f1e]" />
        </div>
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2d5bb5]/30 bg-[#2d5bb5]/10 text-[#7aa3e5] text-xs font-semibold tracking-wide mb-8">
              Mortgage &amp; Financial Services Operations
            </div>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white mb-6 leading-tight">
              QARM's founding specialization:<br /><span className="text-gradient">mortgage operations support.</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-4">
              CRM management, file coordination, follow-up, and marketing support for mortgage brokers, agents, and financial services professionals — so you spend your time on clients and closing, not paperwork.
            </p>
            <p className="text-sm text-slate-400 mb-10">Supporting clients across Canada, the United States, and selected international markets.</p>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#2d5bb5] hover:bg-[#4d7fd4] text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all hover:shadow-xl hover:shadow-[#2d5bb5]/30">
              Book a Free Workflow Review <ArrowRight size={18} />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Where time gets lost */}
      <section className="py-20 border-y border-white/[0.05] bg-[#080d18]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">Sound Familiar?</p>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-5">Where mortgage professionals lose time.</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: 'File & Condition Management', desc: 'Document collection and condition tracking consume hours that could go toward new business.', orange: false },
              { title: 'CRM & Pipeline Gaps', desc: 'Your CRM does not accurately reflect which files need attention or which renewals are approaching.', orange: true },
              { title: 'Follow-Up Inconsistency', desc: 'Leads, past clients, and referral partners do not hear from you consistently.', orange: false },
              { title: 'Marketing Pauses', desc: 'Social content and email campaigns stall whenever active files get busy.', orange: true },
            ].map((p) => (
              <AnimatedSection key={p.title}>
                <div className={`rounded-2xl p-7 h-full border ${p.orange ? 'bg-orange-400/[0.03] border-orange-400/15' : 'glass-card'}`}>
                  <h3 className={`font-display font-semibold text-lg mb-2 ${p.orange ? 'text-orange-400' : 'text-white'}`}>{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">Mortgage Operations Support</p>
            <h2 className="font-display font-bold text-4xl text-white mb-5">What QARM handles for mortgage professionals.</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <BarChart3 size={20} />, title: 'CRM & Pipeline Management', desc: 'Daily updates across your CRM — pipeline stages, next actions, and renewal tracking kept accurate.', orange: false },
              { icon: <FileText size={20} />, title: 'File & Condition Management', desc: 'Borrower document collection and condition tracking organized to lender specification.', orange: true },
              { icon: <MessageSquare size={20} />, title: 'Client & Partner Communication', desc: 'Status updates with clients, referral partners, and lenders throughout the file lifecycle.', orange: false },
              { icon: <Calendar size={20} />, title: 'Lead & Appointment Coordination', desc: 'Inbound lead intake and calendar management for consultations and closings.', orange: true },
              { icon: <Users size={20} />, title: 'Database & Renewal Outreach', desc: 'Past-client and renewal outreach kept active — so repeat and referral business does not depend on memory.', orange: false },
              { icon: <ShieldCheck size={20} />, title: 'Compliance-Aware Operations', desc: 'Administrative and operational support performed under the direction and final approval of the licensed professional.', orange: true },
            ].map((svc) => (
              <div key={svc.title} className={`rounded-xl p-6 h-full border transition-all ${svc.orange ? 'bg-orange-400/5 border-orange-400/15 hover:border-orange-400/30' : 'glass-card hover:border-[#2d5bb5]/40'}`}>
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-4 ${svc.orange ? 'bg-orange-400/15 text-orange-400' : 'bg-[#2d5bb5]/15 text-[#7aa3e5]'}`}>{svc.icon}</div>
                <h3 className="font-display font-semibold text-white text-sm mb-2">{svc.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory disclaimer */}
      <section className="py-12 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs text-slate-400 leading-relaxed text-center">Mortgage-related services are limited to administrative and operational support performed under the direction and final approval of the licensed mortgage professional. QARM does not independently provide mortgage advice, lender approval, or licensed underwriting services.</p>
        </div>
      </section>

      <RelatedIndustries current="/mortgage" />

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-5">Ready to offload your mortgage operations?</h2>
            <p className="text-slate-400 mb-8">Book a free workflow review. We'll map your current workflow and show you exactly how QARM fits into your process.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => onGetStarted(undefined, 'Mortgage')} type="button"
                className="inline-flex items-center justify-center gap-2 bg-[#2d5bb5] hover:bg-[#4d7fd4] text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all hover:shadow-xl hover:shadow-[#2d5bb5]/30">
                Get Your Support Plan <ArrowRight size={18} />
              </button>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 text-slate-300 hover:text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all">
                Book a Free Workflow Review
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
