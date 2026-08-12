import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { useGetStarted } from '../context/GetStartedContext';

const CALENDLY_URL = 'https://calendly.com/theqarm-info/30min';

const faqs = [
  { q: 'Can I start with a smaller plan?', a: 'Yes. Flexible Support starts at 20 hours per month, and a focused 10-hour pilot is available if you\u2019d rather begin with one immediate priority before committing to an ongoing plan.' },
  { q: 'Can I change my support level later?', a: 'Yes. Capacity can be adjusted as your file volume and operational requirements change, subject to availability and your service agreement.' },
  { q: 'Do I need to sign a long-term contract?', a: 'Flexible Support is a month-to-month option with no lock-in. Part-Time and Full-Time plans include a 30-day notice period — the exact cancellation terms are confirmed in your service agreement before you begin.' },
  { q: 'What can QARM handle?', a: 'CRM administration, follow-up coordination, document collection, active-file organization, calendar and inbox management, marketing coordination, and other approved operational workflows — tailored to mortgage, real estate, or insurance.' },
  { q: 'Does QARM provide mortgage advice or underwriting?', a: 'No. For mortgage clients, QARM provides administrative and operational support under the direction and final approval of the licensed mortgage professional. QARM does not independently provide mortgage advice, lender approval, or licensed underwriting services.' },
  { q: 'How quickly can support begin?', a: 'Once your scope is confirmed, we\u2019ll provide an onboarding timeline based on your selected plan, system access requirements, and current capacity.' },
  { q: 'Can QARM work with my existing systems?', a: 'Yes — we work with approved CRM, communication, and project-management platforms. Let us know what you use in the support-plan form and we\u2019ll confirm fit.' },
  { q: 'Is there a setup fee?', a: 'No setup fees. You pay only your selected plan rate from day one.' },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ${open ? 'border-[#2d5bb5]/30' : ''}`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-6 text-left gap-4">
        <span className="font-display font-semibold text-white text-sm leading-relaxed">{q}</span>
        {open ? <ChevronUp size={18} className="text-[#4d7fd4] shrink-0" /> : <ChevronDown size={18} className="text-slate-500 shrink-0" />}
      </button>
      {open && <div className="px-6 pb-6"><p className="text-slate-400 text-sm leading-relaxed">{a}</p></div>}
    </div>
  );
}

interface Tier {
  name: string;
  badge?: string;
  price: string;
  priceUnit?: string;
  capacity: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

const tiers: Tier[] = [
  {
    name: 'Flexible Support',
    price: 'From $349',
    priceUnit: 'CAD / month',
    capacity: 'Up to 20 hours per month',
    description: 'Operational support built around your current workload. Start with 20 hours per month and choose the workflows where you need the most assistance.',
    features: [
      'Up to 20 support hours per month',
      'CRM and pipeline updates',
      'Client and referral-partner follow-ups',
      'Document collection coordination',
      'Lead and calendar management',
      'Weekly progress summary',
      'Flexible month-to-month capacity',
      'No long-term commitment',
    ],
    cta: 'Build My Plan',
  },
  {
    name: 'Part-Time Support',
    badge: 'Most Popular',
    price: '$899',
    priceUnit: 'CAD / month',
    capacity: 'Up to 80 hours per month',
    description: 'Consistent day-to-day support for professionals and growing businesses managing active clients, leads, follow-ups, and administrative workflows.',
    features: [
      'Dedicated operational support',
      'CRM and pipeline management',
      'Client document coordination',
      'Lead and referral-partner follow-up',
      'Calendar and inbox assistance',
      'Marketing coordination',
      'Weekly activity reporting',
      'Structured onboarding',
    ],
    cta: 'Choose Part-Time Support',
    highlighted: true,
  },
  {
    name: 'Full-Time Operations',
    price: '$1,599',
    priceUnit: 'CAD / month',
    capacity: 'Up to 160 hours per month',
    description: 'Comprehensive operational support for high-volume professionals, teams, and businesses requiring dependable daily assistance across multiple functions.',
    features: [
      'Full-time operational capacity',
      'Advanced CRM and pipeline management',
      'Active-file coordination',
      'Client and partner communication support',
      'Document collection and organization',
      'Marketing and campaign coordination',
      'Reporting and workflow management',
      'Priority support and onboarding',
    ],
    cta: 'Choose Full-Time Support',
  },
  {
    name: 'Custom Team',
    price: 'Custom',
    priceUnit: 'Quote',
    capacity: 'Scalable capacity',
    description: 'A tailored support structure for brokerages, agencies, and growing teams that require multiple workflows, specialized roles, or additional capacity.',
    features: [
      'Customized monthly capacity',
      'Multiple support functions',
      'Team and brokerage workflows',
      'Platform-specific assistance',
      'Custom reporting requirements',
      'Scalable staffing options',
      'Dedicated implementation planning',
    ],
    cta: 'Request a Custom Quote',
  },
];

const pilotProjects = [
  'CRM cleanup',
  'Pipeline review and organization',
  'Follow-up backlog',
  'Document checklist organization',
  'Lead database cleanup',
  'Workflow review and recommendations',
];

const planToCapacity: Record<string, string> = {
  'Flexible Support': 'Approximately 20 hours',
  'Part-Time Support': 'Approximately 80 hours',
  'Full-Time Operations': 'Approximately 160 hours',
  'Custom Team': 'Custom team capacity',
};

export function PricingPage() {
  const onGetStarted = useGetStarted();
  return (
    <div className="min-h-screen bg-[#0a0f1e] pt-20">

      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#1e3a8a] rounded-full blur-[160px] opacity-8 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">Pricing</p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white mb-6">Straightforward.<br />No surprises.</h1>
            <p className="text-xl text-slate-400 leading-relaxed">Premium operational infrastructure for mortgage, real estate, and insurance professionals — at a fraction of the cost of hiring in-house.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, idx) => (
              <AnimatedSection key={tier.name} delay={idx * 60}>
                <div className={`rounded-2xl p-8 flex flex-col h-full relative overflow-hidden ${
                  tier.highlighted
                    ? 'bg-gradient-to-b from-[#1c2a4a] to-[#141d35] border border-[#2d5bb5]/30'
                    : 'glass-card'
                }`}>
                  {tier.highlighted && (
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#2d5bb5] rounded-full blur-[80px] opacity-15 pointer-events-none" />
                  )}
                  <div className="flex items-start justify-between mb-4">
                    <p className={`text-xs font-semibold uppercase tracking-widest ${tier.highlighted ? 'text-[#7aa3e5]' : 'text-slate-500'}`}>{tier.name}</p>
                    {tier.badge && (
                      <span className="bg-[#f97316] text-white text-[10px] font-bold uppercase tracking-wider py-1 px-2.5 rounded-full shrink-0">{tier.badge}</span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                    <span className="text-4xl font-display font-bold text-white">{tier.price}</span>
                    {tier.priceUnit && <span className="text-slate-500 text-sm">{tier.priceUnit}</span>}
                  </div>
                  <p className="text-xs text-slate-600 mb-6">{tier.capacity}</p>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">{tier.description}</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckCircle2 size={14} className={`shrink-0 mt-0.5 ${tier.highlighted ? 'text-[#f97316]' : 'text-[#4d7fd4]'}`} />{f}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => onGetStarted(planToCapacity[tier.name])} type="button"
                    className={`w-full py-3.5 text-center rounded-lg text-sm font-semibold transition-all ${
                      tier.highlighted
                        ? 'bg-[#2d5bb5] hover:bg-[#4d7fd4] text-white hover:shadow-xl hover:shadow-[#2d5bb5]/30'
                        : 'border border-[#2d5bb5]/40 hover:border-[#4d7fd4] text-[#7aa3e5] hover:text-white hover:bg-[#2d5bb5]/10'
                    }`}>
                    {tier.cta}
                  </button>
                  {tier.name === 'Flexible Support' && (
                    <p className="text-center text-xs text-slate-600 mt-3">Tell us what you need and receive a recommended scope and price within one business day.</p>
                  )}
                  {tier.name === 'Custom Team' && (
                    <p className="text-center text-xs text-slate-600 mt-3">We'll recommend a structure based on your volume, team, systems, and priorities.</p>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1">
                <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-3">Not Ready for Monthly Support?</p>
                <h3 className="font-display font-bold text-2xl text-white mb-3">Start with a Focused Operations Pilot.</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  Address one defined operational priority and experience how QARM works before selecting an ongoing support plan.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {pilotProjects.map((p) => (
                    <span key={p} className="text-xs text-slate-300 bg-white/[0.04] border border-white/[0.08] rounded-full px-3 py-1.5">{p}</span>
                  ))}
                </div>
                <p className="text-xs text-slate-600">If you upgrade to a monthly support plan within 14 days of completing the pilot, your $149 pilot fee is credited toward your first month.</p>
              </div>
              <div className="md:w-56 shrink-0 text-center md:border-l border-white/[0.08] md:pl-8">
                <div className="flex items-baseline justify-center gap-2 mb-1">
                  <span className="text-4xl font-display font-bold text-white">$149</span>
                  <span className="text-slate-500 text-sm">CAD</span>
                </div>
                <p className="text-xs text-slate-600 mb-6">Up to 10 hours</p>
                <button onClick={() => onGetStarted('10-hour pilot')} type="button"
                  className="w-full py-3.5 text-center bg-[#2d5bb5] hover:bg-[#4d7fd4] text-white rounded-lg text-sm font-semibold transition-all">
                  Start My Pilot
                </button>
              </div>
            </div>
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
                  <h3 className="font-display font-bold text-2xl text-white mb-2">Websites & social media management</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">From $1,499 CAD for a website, from $599 CAD/month for social media — available as an add-on to any plan above, or on their own. Final pricing is scoped to your requirements.</p>
                </div>
                <div className="flex items-center gap-2 text-orange-400 font-semibold text-sm shrink-0 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-white/[0.06] bg-[#080d18]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">FAQ</p>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white">Questions about QARM?</h2>
          </AnimatedSection>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 40}>
                <FaqItem q={faq.q} a={faq.a} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-5">Still have questions?</h2>
            <p className="text-slate-400 mb-8">Book a free workflow review. We'll walk you through the right plan for your business, whether you're in mortgage, real estate, or insurance.</p>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2d5bb5] hover:bg-[#4d7fd4] text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all hover:shadow-xl hover:shadow-[#2d5bb5]/30">
              Book a Free Workflow Review <ArrowRight size={18} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
