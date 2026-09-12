import { ArrowRight, Home, FileText, MessageSquare, Calendar, BarChart3, Users } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { useGetStarted } from '../context/GetStartedContext';

const CALENDLY_URL = 'https://calendly.com/theqarm-info/30min';

export function RealEstatePage() {
  const onGetStarted = useGetStarted();
  return (
    <div className="min-h-screen bg-[#0a0f1e] pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/realestate-hero-1600w.webp"
            srcSet="/images/realestate-hero-640w.webp 640w, /images/realestate-hero-900w.webp 900w, /images/realestate-hero-1600w.webp 1600w"
            sizes="100vw"
            alt="Modern residential real estate development at dusk"
            width={1600} height={1067} className="w-full h-full object-cover opacity-[0.30]" loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/60 via-[#0a0f1e]/80 to-[#0a0f1e]" />
        </div>
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2d5bb5]/30 bg-[#2d5bb5]/10 text-[#7aa3e5] text-xs font-semibold tracking-wide mb-8">
              Real Estate Operations
            </div>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Operations support built for<br /><span className="text-gradient">real estate professionals.</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-10">
              CRM management, listing coordination, client follow-up, and marketing support — so you spend your time on showings and closings, not administration.
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
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-5">Where real estate professionals lose time.</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: 'Listing Coordination', desc: 'Photos, descriptions, MLS updates, and marketing materials competing for attention across every active listing.', orange: false },
              { title: 'Lead Follow-Up Gaps', desc: 'Buyer and seller leads go cold when follow-up depends on remembering to reach out.', orange: true },
              { title: 'Transaction Paperwork', desc: 'Offers, disclosures, and closing documents pile up alongside client-facing work.', orange: false },
              { title: 'Database Neglect', desc: 'Past clients and referral partners who could bring repeat business hear from you inconsistently, if at all.', orange: true },
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

      {/* Services + photo */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">Real Estate Operations Support</p>
            <h2 className="font-display font-bold text-4xl text-white mb-5">What QARM handles for real estate professionals.</h2>
          </AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4/3' }}>
              <img src="/images/realestate-secondary.webp" alt="Real estate development planning with site maps and material samples"
                width={800} height={533} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/60 to-transparent" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: <Home size={20} />, title: 'Listing Management', desc: 'MLS updates, listing coordination, and marketing material organization kept current across your active inventory.', orange: false },
                { icon: <BarChart3 size={20} />, title: 'CRM & Pipeline Management', desc: 'Buyer and seller pipelines kept accurate — stages, next actions, and follow-up dates never fall behind.', orange: true },
                { icon: <FileText size={20} />, title: 'Transaction Coordination', desc: 'Offers, disclosures, and closing paperwork organized and tracked from contract to close.', orange: false },
                { icon: <MessageSquare size={20} />, title: 'Client Communication', desc: 'Consistent updates to buyers, sellers, and referral partners throughout every transaction.', orange: true },
                { icon: <Calendar size={20} />, title: 'Showing & Appointment Coordination', desc: 'Scheduling for showings, open houses, and client meetings handled without back-and-forth.', orange: false },
                { icon: <Users size={20} />, title: 'Database & Referral Outreach', desc: 'Past-client and referral-partner outreach kept active, so repeat business does not depend on memory.', orange: true },
              ].map((svc) => (
                <div key={svc.title} className={`rounded-xl p-5 h-full border transition-all ${svc.orange ? 'bg-orange-400/5 border-orange-400/15 hover:border-orange-400/30' : 'glass-card hover:border-[#2d5bb5]/40'}`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${svc.orange ? 'bg-orange-400/15 text-orange-400' : 'bg-[#2d5bb5]/15 text-[#7aa3e5]'}`}>{svc.icon}</div>
                  <h3 className="font-display font-semibold text-white text-sm mb-2">{svc.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-5">Ready to offload your real estate operations?</h2>
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
