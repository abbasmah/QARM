import { ArrowRight, CheckCircle2, Globe, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { useGetStarted } from '../context/GetStartedContext';

const CALENDLY_URL = 'https://calendly.com/theqarm-info/30min';

const IMGS = {
  hero: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=900&q=55&auto=format&fit=crop',
  website: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&q=55&auto=format&fit=crop',
  social: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&q=55&auto=format&fit=crop',
};

const services = [
  {
    icon: <Globe size={22} />,
    title: 'Websites & Landing Pages',
    desc: 'A professional, purpose-built website or landing page — designed, built, and launched for you.',
    includes: ['Custom design aligned to your brand', 'Mobile-first, fast-loading build', 'Lead capture forms and CTA optimization', 'Services, about, and contact pages', 'Hosting and ongoing maintenance available', 'SEO-ready from day one'],
    img: IMGS.website,
    orange: false,
    price: 'From $1,499 CAD',
    priceNote: 'One-time build. Final price depends on page count, design complexity, and functionality.',
  },
  {
    icon: <Share2 size={22} />,
    title: 'Social Media Management',
    desc: 'Consistent, professional social media presence — without you having to plan or post it yourself.',
    includes: ['Consistent posting on your chosen platforms', 'Branded content creation and copywriting', 'Industry-relevant and market-update content', 'Monthly content calendar for your review', 'Basic community engagement', 'Performance reporting'],
    img: IMGS.social,
    orange: true,
    price: 'From $599 CAD/month',
    priceNote: 'Monthly retainer. Final price depends on platforms, posting frequency, and content needs.',
  },
];

export function BrokerGrowthPage() {
  const onGetStarted = useGetStarted();
  return (
    <div className="min-h-screen bg-[#0a0f1e] pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMGS.hero} alt="Digital presence" width={1200} height={600} className="w-full h-full object-cover opacity-10" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/70 to-[#0a0f1e]" />
        </div>
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#f97316] rounded-full blur-[180px] opacity-[0.08] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-400/20 bg-orange-400/5 text-orange-300 text-xs font-semibold tracking-wide mb-8">
              Digital Presence & Marketing Support
            </div>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white mb-6 leading-tight">
              We run your operations.<br /><span className="text-gradient">We can also build<br />your online presence.</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
              Beyond day-to-day operations, QARM offers website and social media support for mortgage, real estate, insurance, and service-based professionals who want a stronger digital presence without hiring separately for it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => onGetStarted()} type="button"
                className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-orange-500 text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all hover:shadow-xl hover:shadow-orange-500/30">
                Get Your Support Plan <ArrowRight size={18} />
              </button>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all">
                Book a Free Workflow Review
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services with images */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">What's Available</p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mb-5">A stronger presence, handled for you.</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Available as an add-on to any QARM support plan, or as a standalone engagement.</p>
          </AnimatedSection>
          <div className="space-y-5">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 40}>
                <div className={`rounded-2xl overflow-hidden border transition-all duration-300 ${svc.orange ? 'bg-orange-400/[0.03] border-orange-400/15 hover:border-orange-400/30' : 'glass-card hover:border-[#2d5bb5]/30'}`}>
                  <div className="grid lg:grid-cols-3 items-stretch">
                    <div className="relative h-48 lg:h-auto overflow-hidden">
                      <img src={svc.img} alt={svc.title} width={600} height={400} className="w-full h-full object-cover opacity-55" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0f1e]/80 lg:block hidden" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/80 to-transparent lg:hidden" />
                      <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center ${svc.orange ? 'bg-orange-400/25 text-orange-400' : 'bg-[#2d5bb5]/25 text-[#7aa3e5]'}`}>{svc.icon}</div>
                    </div>
                    <div className="lg:col-span-2 p-8 lg:p-10">
                      <div className="grid lg:grid-cols-2 gap-8 items-start">
                        <div>
                          <h2 className="font-display font-bold text-xl text-white mb-3">{svc.title}</h2>
                          <p className="text-slate-400 leading-relaxed text-sm mb-5">{svc.desc}</p>
                          <div className={`inline-block rounded-xl px-4 py-3 ${svc.orange ? 'bg-orange-400/10' : 'bg-[#2d5bb5]/10'}`}>
                            <p className={`text-lg font-display font-bold ${svc.orange ? 'text-orange-400' : 'text-[#7aa3e5]'}`}>{svc.price}</p>
                            <p className="text-xs text-slate-500 mt-1 max-w-[220px]">{svc.priceNote}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">What's included</p>
                          <ul className="space-y-2.5">
                            {svc.includes.map((d) => (
                              <li key={d} className="flex items-start gap-3 text-sm text-slate-300">
                                <CheckCircle2 size={14} className={`shrink-0 mt-0.5 ${svc.orange ? 'text-orange-400' : 'text-[#4d7fd4]'}`} />{d}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#080d18] border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-10 lg:p-14 border-orange-400/20">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-400/20 bg-orange-400/5 text-orange-300 text-xs font-semibold mb-6">Operations + Digital Bundle</span>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-5">Combine operations with a digital presence.</h2>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto">Pair a QARM operations plan with a website build or social media management, and let one partner handle both your backend and your presence.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => onGetStarted()} type="button"
                  className="flex items-center justify-center gap-2 bg-[#f97316] hover:bg-orange-500 text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all hover:shadow-xl hover:shadow-orange-500/30">
                  Get Your Support Plan <ArrowRight size={18} />
                </button>
                <Link to="/pricing" className="flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all">
                  View Operations Pricing
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
