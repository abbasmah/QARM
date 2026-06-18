import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GetStartedModal({ isOpen, onClose }: GetStartedModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', company: '', volume: '', needs: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `QARM Inquiry: ${formData.firstName} ${formData.lastName} — ${formData.company}`;
    const body = `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany / Brokerage: ${formData.company}\nMonthly Deal Volume: ${formData.volume}\n\nOperational needs:\n${formData.needs}`.trim();
    window.location.href = `mailto:info@theqarm.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', volume: '', needs: '' });
      }, 400);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose} className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <motion.div initial={{ opacity: 0, scale: 0.96, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }} transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl bg-[#0d1424] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-white/[0.08]">
              <div>
                <h2 className="text-xl font-display font-bold text-white">Book a Discovery Call</h2>
                <p className="text-sm text-slate-400 mt-1">We'll map your workflow and have your operations running in 48 hours.</p>
              </div>
              <button onClick={onClose} className="p-2 text-slate-500 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors" type="button">
                <X size={20} />
              </button>
            </div>
            <div className="p-6 sm:p-8 overflow-y-auto">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-14 text-center">
                  <div className="w-14 h-14 bg-[#1c2a4a] text-[#4d7fd4] rounded-full flex items-center justify-center mb-5">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">Request Sent</h3>
                  <p className="text-slate-400 text-sm max-w-xs">Your email client has been opened. We'll respond within one business day to schedule your discovery call.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[['firstName','First Name','Jane'],['lastName','Last Name','Smith']].map(([name,label,ph]) => (
                      <div key={name}>
                        <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">{label}</label>
                        <input type="text" name={name} required value={(formData as any)[name]} onChange={handleChange} placeholder={ph}
                          className="w-full bg-white/[0.04] border border-white/[0.1] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#2d5bb5] focus:ring-1 focus:ring-[#2d5bb5] transition-all" />
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Work Email</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="jane@brokerage.ca"
                        className="w-full bg-white/[0.04] border border-white/[0.1] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#2d5bb5] focus:ring-1 focus:ring-[#2d5bb5] transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Phone</label>
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="(416) 555-0100"
                        className="w-full bg-white/[0.04] border border-white/[0.1] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#2d5bb5] focus:ring-1 focus:ring-[#2d5bb5] transition-all" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Brokerage / Company</label>
                      <input type="text" name="company" required value={formData.company} onChange={handleChange} placeholder="Pinnacle Mortgage Group"
                        className="w-full bg-white/[0.04] border border-white/[0.1] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#2d5bb5] focus:ring-1 focus:ring-[#2d5bb5] transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Monthly Deal Volume</label>
                      <select name="volume" value={formData.volume} onChange={handleChange}
                        className="w-full bg-[#0d1424] border border-white/[0.1] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2d5bb5] focus:ring-1 focus:ring-[#2d5bb5] transition-all">
                        <option value="" className="bg-[#0d1424]">Select range</option>
                        <option value="1-5 deals" className="bg-[#0d1424]">1–5 deals/month</option>
                        <option value="6-15 deals" className="bg-[#0d1424]">6–15 deals/month</option>
                        <option value="16-30 deals" className="bg-[#0d1424]">16–30 deals/month</option>
                        <option value="30+ deals" className="bg-[#0d1424]">30+ deals/month</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Where are your biggest operational bottlenecks?</label>
                    <textarea name="needs" required rows={3} value={formData.needs} onChange={handleChange}
                      placeholder="e.g. CRM is always out of date, document chasing takes hours, follow-ups fall through the cracks..."
                      className="w-full bg-white/[0.04] border border-white/[0.1] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#2d5bb5] focus:ring-1 focus:ring-[#2d5bb5] transition-all resize-none" />
                  </div>
                  <div className="pt-2">
                    <a href="https://calendly.com/theqarm-info/30min" target="_blank" rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-[#2d5bb5] hover:bg-[#4d7fd4] text-white font-semibold py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-[#2d5bb5]/25 mb-3">
                      Schedule via Calendly <ArrowRight size={18} />
                    </a>
                    <button type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 text-slate-300 font-semibold py-3.5 rounded-lg transition-all text-sm">
                      Or send us a message instead
                    </button>
                    <p className="text-center text-xs text-slate-600 mt-3">No obligation. Responds within 1 business day.</p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
