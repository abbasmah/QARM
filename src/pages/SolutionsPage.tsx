import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Globe, MapPin, Building2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const CALENDLY = 'https://calendly.com/theqarm-info/30min';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const markets = [
  {
    flag: '🇨🇦',
    region: 'Canada',
    headline: 'The home market. Built for the Canadian mortgage industry.',
    desc: 'QARM was built on the Canadian mortgage landscape — Filogix Expert, Finmo, Velocity, CMHC/Sagen guidelines, provincial compliance (FSRA, BCFSA, AMF), and A/B lender workflows. Every specialist is trained on Canadian mortgage before they ever touch a Canadian file.',
    highlights: [
      'Filogix Expert, Velocity, Finmo proficiency',
      'CMHC, Sagen, and Canada Guaranty guidelines',
      'Provincial compliance (FSRA, BCFSA, AMF, RECA)',
      'PIPEDA-compliant data handling',
      'A-lender and B-lender submission experience',
    ],
    cta: 'Most Popular',
    color: '#2d5bb5',
  },
  {
    flag: '🇺🇸',
    region: 'United States',
    headline: 'Supporting American mortgage brokers and independent MLOs.',
    desc: 'The US mortgage market operates differently — but the operational pain points are identical. QARM supports American mortgage brokers and independent MLOs with CRM coordination, pipeline management, document collection, and workflow systems adapted for the US lending environment including FNMA/FHLMC guidelines, RESPA compliance, and US-specific CRM platforms.',
    highlights: [
      'Fannie Mae / Freddie Mac compliance awareness',
      'Encompass, Velocify, and Salesforce Mortgage CRM',
      'RESPA and TRID-compliant process management',
      'US lender submission coordination',
      'State-specific licensing awareness',
    ],
    cta: 'Available Now',
    color: '#10b981',
  },
  {
    flag: '🌎',
    region: 'Latin America',
    headline: 'Operational support for growing lending markets.',
    desc: 'Latin American mortgage and lending markets are expanding rapidly — and the operational infrastructure to support them often lags behind. QARM provides English and Spanish-capable operations support for lending firms across Mexico, Colombia, Brazil, and the broader Latin American market, bringing structured workflow management to high-growth lending environments.',
    highlights: [
      'Bilingual (English/Spanish) operations support',
      'Adaptable to local lending platform environments',
      'Document coordination for international standards',
      'CRM management across major global platforms',
      'Scalable support for high-growth lending firms',
    ],
    cta: 'Contact Us',
    color: '#f97316',
  },
];

export function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] pt-20">

      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#1e3a8a] rounded-full blur-[160px] opacity-8 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Globe size={18} className="text-[#4d7fd4]" />
              <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest">Global Solutions</p>
            </div>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Mortgage operations<br />infrastructure — wherever you operate.
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
              QARM's operational expertise extends beyond Canada. Whether you're an American MLO, a Latin American lending firm, or an international brokerage with North American operations — QARM has the infrastructure to support you.
            </p>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2d5bb5] hover:bg-[#4d7fd4] text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all hover:shadow-xl hover:shadow-[#2d5bb5]/30">
              Book a Discovery Call <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Market cards */}
      <section className="pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {markets.map((market, i) => (
              <motion.div key={market.region} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 lg:p-12"
                style={{ borderColor: `${market.color}20` }}>
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl">{market.flag}</span>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border"
                          style={{ color: market.color, borderColor: `${market.color}40` }}>
                          {market.cta}
                        </span>
                        <h2 className="font-display font-bold text-2xl text-white mt-2">{market.region}</h2>
                      </div>
                    </div>
                    <h3 className="font-display font-semibold text-xl text-white mb-4 leading-snug">{market.headline}</h3>
                    <p className="text-slate-400 leading-relaxed">{market.desc}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-5">Market-specific capabilities</p>
                    <ul className="space-y-3.5">
                      {market.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-sm text-slate-300">
                          <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: market.color }} />{h}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                        style={{ color: market.color }}>
                        Get started for {market.region} <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What stays the same */}
      <section className="py-24 bg-[#080d18] border-y border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-5">
              Every market. The same standard of excellence.
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Regardless of where you operate, QARM delivers the same structured, accountable, premium operations infrastructure.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Building2 size={20} />, title: 'Dedicated Specialist', desc: 'One operations specialist assigned to your firm — never a shared pool.' },
              { icon: <TrendingUp size={20} />, title: 'Onboarding in 48h', desc: 'From discovery call to fully operational within two business days.' },
              { icon: <MapPin size={20} />, title: 'Market-Adapted', desc: 'Systems and processes adapted to your local regulatory environment.' },
              { icon: <Globe size={20} />, title: 'No Lock-In', desc: 'Cancel or scale anytime. No long-term contracts required.' },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6 text-center">
                <div className="w-10 h-10 bg-[#2d5bb5]/15 rounded-xl flex items-center justify-center text-[#7aa3e5] mx-auto mb-4">{item.icon}</div>
                <h3 className="font-display font-semibold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-5">
              Operating outside Canada?
            </h2>
            <p className="text-slate-400 mb-8">
              Book a discovery call. We'll confirm our capabilities for your specific market and build a custom onboarding plan around your workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#2d5bb5] hover:bg-[#4d7fd4] text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all">
                Book Discovery Call <ArrowRight size={18} />
              </a>
              <Link to="/services"
                className="flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
