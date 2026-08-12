import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetCapacity?: string;
}

// Deployed Cloudflare Worker — receives the form POST and sends the email via Resend
const FORM_ENDPOINT = 'https://tight-boat-a9d2.winter-pine-b489.workers.dev/';
const CALENDLY_URL = 'https://calendly.com/theqarm-info/30min';

const industries = ['Mortgage', 'Real Estate', 'Insurance', 'Professional Services', 'Other'];

const roles = [
  'Independent professional',
  'Mortgage broker or agent',
  'Realtor or real estate professional',
  'Insurance professional',
  'Team lead',
  'Brokerage or agency owner',
  'Operations manager',
  'Business owner',
  'Other',
];

const supportOptions = [
  'CRM and pipeline management',
  'Client follow-up',
  'Lead management',
  'Referral-partner follow-up',
  'Document coordination',
  'Administrative support',
  'Calendar and inbox management',
  'Social media and marketing coordination',
  'Website support',
  'Workflow setup or cleanup',
  'Reporting and task management',
  'Not sure — recommend a plan',
];

const capacities = ['10-hour pilot', 'Approximately 20 hours', 'Approximately 80 hours', 'Approximately 160 hours', 'Custom team capacity', 'Not sure'];

const nextSteps = ['Send me a recommended plan', 'Contact me by email', 'Contact me by phone', 'Book a free workflow review'];

const initialForm = {
  name: '', email: '', phone: '', country: '', region: '', company: '',
  industry: '', role: '',
  support: [] as string[], capacity: '', challenge: '', nextStep: '',
  website: '', // honeypot — real visitors never fill this in, bots often do
};

function Chip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left px-4 py-3 rounded-lg text-sm border transition-all ${
        active
          ? 'bg-[#2d5bb5]/20 border-[#4d7fd4] text-white'
          : 'bg-white/[0.03] border-white/[0.1] text-slate-300 hover:border-white/20'
      }`}
    >
      {label}
    </button>
  );
}

export function GetStartedModal({ isOpen, onClose, presetCapacity }: GetStartedModalProps) {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');
  const [form, setForm] = useState(initialForm);
  const totalSteps = 3;

  useEffect(() => {
    if (isOpen && presetCapacity) {
      setForm((f) => ({ ...f, capacity: presetCapacity }));
    }
  }, [isOpen, presetCapacity]);

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));
  const toggleSupport = (opt: string) =>
    setForm((f) => ({
      ...f,
      support: f.support.includes(opt) ? f.support.filter((s) => s !== opt) : [...f.support, opt],
    }));

  const reset = () => {
    setForm(initialForm);
    setStep(1);
    setStatus('idle');
  };

  const handleClose = () => {
    onClose();
    setTimeout(reset, 400);
  };

  const canAdvance =
    step === 1 ? form.name && form.email && form.phone && form.country && form.region
    : step === 2 ? form.support.length > 0
    : true;

  const handleSubmit = async () => {
    setStatus('submitting');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          country: form.country,
          region: form.region,
          company: form.company,
          industry: form.industry,
          role: form.role,
          supportNeeded: form.support.join(', '),
          preferredCapacity: form.capacity,
          challenge: form.challenge,
          preferredNextStep: form.nextStep,
          website: form.website, // honeypot
        }),
      });
      if (!res.ok) throw new Error('submit failed');
      setStatus('submitted');
    } catch {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={handleClose} className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <motion.div initial={{ opacity: 0, scale: 0.96, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }} transition={{ duration: 0.2 }}
            className="relative w-full max-w-xl bg-[#0d1424] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">

            <div className="flex items-center justify-between p-6 sm:p-7 border-b border-white/[0.08]">
              <div>
                <h2 className="text-xl font-display font-bold text-white">Build Your QARM Support Plan</h2>
                <p className="text-sm text-slate-400 mt-1">
                  {status === 'submitted'
                    ? 'Request received.'
                    : 'Tell us where your workload is getting stuck. QARM will review your requirements and recommend an appropriate scope and support plan within one business day.'}
                </p>
              </div>
              <button onClick={handleClose} className="p-2 text-slate-500 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors shrink-0" type="button">
                <X size={20} />
              </button>
            </div>

            {status !== 'submitted' && presetCapacity && (
              <div className="px-6 sm:px-7 pt-4">
                <span className="inline-flex items-center gap-1.5 text-xs text-[#7aa3e5] bg-[#2d5bb5]/10 border border-[#2d5bb5]/20 rounded-full px-3 py-1.5">
                  <CheckCircle2 size={12} /> Pre-selected: {presetCapacity}
                </span>
              </div>
            )}

            {status !== 'submitted' && (
              <div className="flex gap-1.5 px-6 sm:px-7 pt-5">
                {[1, 2, 3].map((n) => (
                  <div key={n} className={`h-1 flex-1 rounded-full ${n <= step ? 'bg-[#4d7fd4]' : 'bg-white/[0.08]'}`} />
                ))}
              </div>
            )}

            <div className="p-6 sm:p-7 overflow-y-auto">
              {status === 'submitted' ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="w-14 h-14 bg-[#1c2a4a] text-[#4d7fd4] rounded-full flex items-center justify-center mb-5">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">Thank you.</h3>
                  <p className="text-slate-400 text-sm max-w-sm mb-6">
                    Your requirements have been received. QARM will review your information and respond within one business day.
                  </p>
                  {form.nextStep === 'Book a free workflow review' && (
                    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#2d5bb5] hover:bg-[#4d7fd4] text-white px-6 py-3.5 rounded-lg text-sm font-semibold transition-all">
                      Book My Free Workflow Review <ArrowRight size={16} />
                    </a>
                  )}
                </div>
              ) : (
                <div className="space-y-6">
                  {step === 1 && (
                    <div className="space-y-5">
                      {/* Honeypot — hidden from real visitors, catches basic bots */}
                      <input type="text" name="website" value={form.website} onChange={(e) => update('website', e.target.value)}
                        tabIndex={-1} autoComplete="off" aria-hidden="true"
                        className="absolute -left-[9999px] w-px h-px opacity-0" />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Full Name</label>
                          <input type="text" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Jane Smith"
                            className="w-full bg-white/[0.04] border border-white/[0.1] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#2d5bb5] focus:ring-1 focus:ring-[#2d5bb5] transition-all" />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Business Email</label>
                          <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="jane@brokerage.ca"
                            className="w-full bg-white/[0.04] border border-white/[0.1] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#2d5bb5] focus:ring-1 focus:ring-[#2d5bb5] transition-all" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Phone</label>
                          <input type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="(416) 555-0100"
                            className="w-full bg-white/[0.04] border border-white/[0.1] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#2d5bb5] focus:ring-1 focus:ring-[#2d5bb5] transition-all" />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Company Name</label>
                          <input type="text" value={form.company} onChange={(e) => update('company', e.target.value)} placeholder="Pinnacle Group"
                            className="w-full bg-white/[0.04] border border-white/[0.1] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#2d5bb5] focus:ring-1 focus:ring-[#2d5bb5] transition-all" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Country</label>
                          <input type="text" value={form.country} onChange={(e) => update('country', e.target.value)} placeholder="Canada"
                            className="w-full bg-white/[0.04] border border-white/[0.1] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#2d5bb5] focus:ring-1 focus:ring-[#2d5bb5] transition-all" />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Province / State / Region</label>
                          <input type="text" value={form.region} onChange={(e) => update('region', e.target.value)} placeholder="Ontario"
                            className="w-full bg-white/[0.04] border border-white/[0.1] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#2d5bb5] focus:ring-1 focus:ring-[#2d5bb5] transition-all" />
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-3 uppercase tracking-wider">Type of Support Needed (select all that apply)</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {supportOptions.map((s) => <Chip key={s} label={s} active={form.support.includes(s)} onClick={() => toggleSupport(s)} />)}
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-3 uppercase tracking-wider">Preferred Monthly Capacity</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                          {capacities.map((c) => <Chip key={c} label={c} active={form.capacity === c} onClick={() => update('capacity', c)} />)}
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Biggest Current Operational Challenge</label>
                        <textarea rows={3} value={form.challenge} onChange={(e) => update('challenge', e.target.value)}
                          placeholder="e.g. CRM is always out of date, document chasing takes hours, follow-ups fall through the cracks..."
                          className="w-full bg-white/[0.04] border border-white/[0.1] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#2d5bb5] focus:ring-1 focus:ring-[#2d5bb5] transition-all resize-none" />
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-3 uppercase tracking-wider">Industry</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                          {industries.map((i) => <Chip key={i} label={i} active={form.industry === i} onClick={() => update('industry', i)} />)}
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-3 uppercase tracking-wider">Role</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                          {roles.map((r) => <Chip key={r} label={r} active={form.role === r} onClick={() => update('role', r)} />)}
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-3 uppercase tracking-wider">Preferred Next Step</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {nextSteps.map((n) => <Chip key={n} label={n} active={form.nextStep === n} onClick={() => update('nextStep', n)} />)}
                        </div>
                      </div>
                    </div>
                  )}

                  {status === 'error' && (
                    <p className="text-sm text-red-400">Something went wrong sending your request — please try again, or email us directly at info@theqarm.com.</p>
                  )}

                  <div className="flex items-center justify-between pt-2">
                    {step > 1 ? (
                      <button type="button" onClick={() => setStep(step - 1)}
                        className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors px-2 py-2">
                        <ArrowLeft size={16} /> Back
                      </button>
                    ) : <span />}

                    {step < totalSteps ? (
                      <button type="button" disabled={!canAdvance} onClick={() => setStep(step + 1)}
                        className="inline-flex items-center gap-2 bg-[#2d5bb5] hover:bg-[#4d7fd4] disabled:opacity-40 disabled:cursor-not-allowed text-white px-6 py-3.5 rounded-lg text-sm font-semibold transition-all">
                        Continue <ArrowRight size={16} />
                      </button>
                    ) : (
                      <button type="button" disabled={status === 'submitting'} onClick={handleSubmit}
                        className="inline-flex items-center gap-2 bg-[#2d5bb5] hover:bg-[#4d7fd4] disabled:opacity-60 text-white px-6 py-3.5 rounded-lg text-sm font-semibold transition-all">
                        {status === 'submitting' ? 'Sending...' : 'Get My Support Recommendation'}
                      </button>
                    )}
                  </div>
                  <p className="text-center text-xs text-slate-600">Your information will only be used to review your support requirements and respond to your enquiry.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
