import { AnimatedSection } from '../components/AnimatedSection';
import { Mail, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const FORM_ENDPOINT = 'https://tight-boat-a9d2.winter-pine-b489.workers.dev/';
const CALENDLY_URL = 'https://calendly.com/theqarm-info/30min';

const industries = ['Mortgage', 'Real Estate', 'Insurance', 'Professional Services', 'Other'];
const roles = ['Independent professional', 'Mortgage broker or agent', 'Realtor or real estate professional', 'Insurance professional', 'Team lead', 'Brokerage or agency owner', 'Operations manager', 'Business owner', 'Other'];
const supportOptions = ['CRM and pipeline management', 'Client follow-up', 'Lead management', 'Referral-partner follow-up', 'Document coordination', 'Administrative support', 'Calendar and inbox management', 'Social media and marketing coordination', 'Website support', 'Workflow setup or cleanup', 'Reporting and task management', 'Not sure — recommend a plan'];
const capacities = ['10-hour pilot', 'Approximately 20 hours', 'Approximately 80 hours', 'Approximately 160 hours', 'Custom team capacity', 'Not sure'];
const nextSteps = ['Send me a recommended plan', 'Contact me by email', 'Contact me by phone', 'Book a free workflow review'];

const initialForm = {
  name: '', email: '', phone: '', country: '', region: '', company: '',
  industry: '', role: '',
  support: [] as string[], capacity: '', challenge: '', nextStep: '',
  website: '', // honeypot
};

function Chip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick}
      className={`text-left px-4 py-3 rounded-lg text-sm border transition-all ${active ? 'bg-[#2d5bb5]/20 border-[#4d7fd4] text-white' : 'bg-white/[0.04] border-white/[0.08] text-slate-300 hover:border-white/20'}`}>
      {label}
    </button>
  );
}

export function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');
  const [form, setForm] = useState(initialForm);

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));
  const toggleSupport = (opt: string) =>
    setForm((f) => ({ ...f, support: f.support.includes(opt) ? f.support.filter((s) => s !== opt) : [...f.support, opt] }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name, email: form.email, phone: form.phone,
          country: form.country, region: form.region, company: form.company,
          industry: form.industry, role: form.role,
          supportNeeded: form.support.join(', '),
          preferredCapacity: form.capacity,
          challenge: form.challenge,
          preferredNextStep: form.nextStep,
          website: form.website,
        }),
      });
      if (!res.ok) throw new Error('submit failed');
      setStatus('submitted');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1e] pt-20">

      {/* Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">Contact</p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white mb-6">Build Your QARM Support Plan</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Tell us where your workload is getting stuck. QARM will review your requirements and recommend an appropriate scope and support plan within one business day.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            {/* Info column */}
            <AnimatedSection className="lg:col-span-2 space-y-6">
              <div className="glass-card rounded-2xl p-7">
                <div className="w-10 h-10 bg-[#2d5bb5]/15 rounded-xl flex items-center justify-center text-[#7aa3e5] mb-5">
                  <Mail size={20} />
                </div>
                <h3 className="font-display font-semibold text-white mb-2">Email</h3>
                <a href="mailto:info@theqarm.com" className="text-[#7aa3e5] text-sm hover:text-white transition-colors">info@theqarm.com</a>
                <p className="text-slate-500 text-xs mt-2">We respond within one business day.</p>
              </div>

              <div className="glass-card rounded-2xl p-7">
                <div className="w-10 h-10 bg-[#2d5bb5]/15 rounded-xl flex items-center justify-center text-[#7aa3e5] mb-5">
                  <Clock size={20} />
                </div>
                <h3 className="font-display font-semibold text-white mb-2">Onboarding Timeline</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  From enquiry to fully operational: <span className="text-white font-semibold">days, not weeks</span>. We handle the briefing, system integration, and SOP setup — you just show up ready to delegate.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-7">
                <h3 className="font-display font-semibold text-white mb-4">What to expect</h3>
                <ul className="space-y-3">
                  {[
                    'We review your requirements the same business day',
                    'You receive a recommended scope and support plan',
                    'We confirm the workflow, access, and reporting details',
                    'Onboarding begins within days, not weeks',
                  ].map((step) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-slate-400">
                      <CheckCircle2 size={14} className="text-[#4d7fd4] shrink-0 mt-0.5" />{step}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <div className="glass-card rounded-2xl p-8 lg:p-10">
                {status === 'submitted' ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-14 h-14 bg-[#1c2a4a] text-[#4d7fd4] rounded-full flex items-center justify-center mb-5">
                      <CheckCircle2 size={28} />
                    </div>
                    <h3 className="font-display font-bold text-xl text-white mb-2">Thank you.</h3>
                    <p className="text-slate-400 text-sm max-w-sm mb-6">Your requirements have been received. QARM will review your information and respond within one business day.</p>
                    {form.nextStep === 'Book a free workflow review' && (
                      <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#2d5bb5] hover:bg-[#4d7fd4] text-white px-6 py-3.5 rounded-lg text-sm font-semibold transition-all">
                        Book My Free Workflow Review <ArrowRight size={16} />
                      </a>
                    )}
                  </div>
                ) : (
                  <>
                    <h2 className="font-display font-bold text-xl text-white mb-2">Build Your QARM Support Plan</h2>
                    <p className="text-slate-500 text-sm mb-8">Tell us where your workload is getting stuck. QARM will review your requirements and recommend an appropriate scope and support plan within one business day.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Honeypot */}
                      <input type="text" value={form.website} onChange={(e) => update('website', e.target.value)}
                        tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] w-px h-px opacity-0" />

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                          <input type="text" required value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Jane Smith"
                            className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#2d5bb5] focus:ring-1 focus:ring-[#2d5bb5] transition-all" />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Business Email</label>
                          <input type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="jane@company.com"
                            className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#2d5bb5] focus:ring-1 focus:ring-[#2d5bb5] transition-all" />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
                          <input type="tel" required value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="(416) 555-0100"
                            className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#2d5bb5] focus:ring-1 focus:ring-[#2d5bb5] transition-all" />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Company Name</label>
                          <input type="text" value={form.company} onChange={(e) => update('company', e.target.value)} placeholder="Pinnacle Group"
                            className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#2d5bb5] focus:ring-1 focus:ring-[#2d5bb5] transition-all" />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Country</label>
                          <input type="text" required value={form.country} onChange={(e) => update('country', e.target.value)} placeholder="Canada"
                            className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#2d5bb5] focus:ring-1 focus:ring-[#2d5bb5] transition-all" />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Province / State / Region</label>
                          <input type="text" required value={form.region} onChange={(e) => update('region', e.target.value)} placeholder="Ontario"
                            className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#2d5bb5] focus:ring-1 focus:ring-[#2d5bb5] transition-all" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">Industry</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                          {industries.map((i) => <Chip key={i} label={i} active={form.industry === i} onClick={() => update('industry', i)} />)}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">Role</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                          {roles.map((r) => <Chip key={r} label={r} active={form.role === r} onClick={() => update('role', r)} />)}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">Type of Support Required (select all that apply)</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {supportOptions.map((s) => <Chip key={s} label={s} active={form.support.includes(s)} onClick={() => toggleSupport(s)} />)}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">Preferred Monthly Capacity</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                          {capacities.map((c) => <Chip key={c} label={c} active={form.capacity === c} onClick={() => update('capacity', c)} />)}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Main Operational Challenge</label>
                        <textarea rows={4} value={form.challenge} onChange={(e) => update('challenge', e.target.value)}
                          placeholder="Tell us about your current workflow and where you're losing the most time..."
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#2d5bb5] focus:ring-1 focus:ring-[#2d5bb5] transition-all resize-none" />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">Preferred Next Step</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {nextSteps.map((n) => <Chip key={n} label={n} active={form.nextStep === n} onClick={() => update('nextStep', n)} />)}
                        </div>
                      </div>

                      {status === 'error' && (
                        <p className="text-sm text-red-400">Something went wrong sending your request — please try again, or email us directly at info@theqarm.com.</p>
                      )}

                      <button type="submit" disabled={status === 'submitting'}
                        className="w-full flex items-center justify-center gap-2 bg-[#2d5bb5] hover:bg-[#4d7fd4] disabled:opacity-60 text-white font-semibold py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-[#2d5bb5]/25">
                        {status === 'submitting' ? 'Sending...' : 'Get My Support Recommendation'} {status !== 'submitting' && <ArrowRight size={18} />}
                      </button>
                      <p className="text-center text-xs text-slate-600">Your information will only be used to review your support requirements and respond to your enquiry.</p>
                    </form>
                  </>
                )}
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </div>
  );
}
