import { ArrowRight, BarChart3, FileText, MessageSquare, Calendar, Megaphone } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { useGetStarted } from '../context/GetStartedContext';

const CALENDLY_URL = 'https://calendly.com/theqarm-info/30min';

export function ProfessionalServicesPage() {
  const onGetStarted = useGetStarted();
  return (
    <div className="min-h-screen bg-[#0a0f1e] pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/professional-hero-1600w.webp"
            srcSet="/images/professional-hero-640w.webp 640w, /images/professional-hero-900w.webp 900w, /images/professional-hero-1600w.webp 1600w"
            sizes="100vw"
            alt="Professional reviewing business strategy documents in a modern office"
            width={1600} height={1067} className="w-full h-full object-cover opacity-[0.28]" loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/60 via-[#0a0f1e]/82 to-[#0a0f1e]" />
        </div>
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2d5bb5]/30 bg-[#2d5bb5]/10 text-[#7aa3e5] text-xs font-semibold tracking-wide mb-8">
              Professional Services Operations
            </div>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Operations support for<br /><span className="text-gradient">relationship-driven professionals.</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-10">
              CRM management, client communication, follow-up, and marketing support — for consultants, advisors, and service-based professionals whose business runs on relationships and referrals.
            </p>
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
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-5">Where relationship-driven professionals lose time.</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: 'Client Communication Gaps', desc: 'Updates and check-ins slip when client-facing work takes priority.', orange: false },
              { title: 'CRM Disorganization', desc: 'Your CRM does not accurately reflect who needs follow-up or what stage each relationship is at.', orange: true },
              { title: 'Administrative Overload', desc: 'Scheduling, document coordination, and repetitive tasks consume hours that could go toward billable or client-facing work.', orange: false },
              { title: 'Inconsistent Marketing', desc: 'Content, outreach, and referral-partner touchpoints pause whenever the workload picks up.', orange: true },
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
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">Professional Services Operations Support</p>
            <h2 className="font-display font-bold text-4xl text-white mb-5">What QARM handles for professional service providers.</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <BarChart3 size={20} />, title: 'CRM & Pipeline Management', desc: 'Client and prospect records kept accurate — stages, next actions, and follow-up dates never fall behind.', orange: false },
              { icon: <FileText size={20} />, title: 'Document & Workflow Coordination', desc: 'Client documentation, intake forms, and recurring paperwork organized and tracked.', orange: true },
              { icon: <MessageSquare size={20} />, title: 'Client Communication', desc: 'Consistent updates and check-ins with clients and referral partners.', orange: false },
              { icon: <Calendar size={20} />, title: 'Scheduling & Appointment Coordination', desc: 'Consultations, meetings, and recurring appointments coordinated without back-and-forth.', orange: true },
              { icon: <Megaphone size={20} />, title: 'Marketing & Visibility', desc: 'Content scheduling, email campaigns, and consistent brand activity kept moving.', orange: false },
              { icon: <BarChart3 size={20} />, title: 'Database & Referral Outreach', desc: 'Past-client and referral-partner outreach kept active, supporting repeat and referral business.', orange: true },
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

      {/* CTA */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-5">Ready to offload your operations?</h2>
            <p className="text-slate-400 mb-8">Book a free workflow review. We'll map your current workflow and show you exactly how QARM fits into your business.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => onGetStarted()} type="button"
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
