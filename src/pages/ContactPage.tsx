import { AnimatedSection } from '../components/AnimatedSection';
import { Mail, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { useState } from 'react';
export function ContactPage() {
 const [submitted, setSubmitted] = useState(false);
 const [formData, setFormData] = useState({
 firstName: '',
 lastName: '',
 email: '',
 phone: '',
 company: '',
 volume: '',
 message: '',
 });

 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 const subject = `QARM Contact: ${formData.firstName} ${formData.lastName} — ${formData.company}`;
 const body = `Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Brokerage: ${formData.company}
Monthly Volume: ${formData.volume}

Message:
${formData.message}`.trim();

 window.location.href = `mailto:info@theqarm.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
 setSubmitted(true);
 };

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
 setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 return (
 <div className="min-h-screen bg-[#0a0f1e] pt-20">

 {/* Hero */}
 <section className="py-20 lg:py-28 relative overflow-hidden">
 <div className="absolute inset-0 bg-grid opacity-25" />
 <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
 <AnimatedSection>
 <p className="text-xs font-semibold text-[#4d7fd4] uppercase tracking-widest mb-4">Contact</p>
 <h1 className="font-display font-bold text-5xl lg:text-6xl text-white mb-6">
 Let's talk operations.
 </h1>
 <p className="text-xl text-slate-400 leading-relaxed">
 Book a discovery call or send us a message. We respond within one business day.
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
 <a href="mailto:info@theqarm.com" className="text-[#7aa3e5] text-sm hover:text-white transition-colors">
 info@theqarm.com
 </a>
 <p className="text-slate-500 text-xs mt-2">We respond within one business day.</p>
 </div>

 <div className="glass-card rounded-2xl p-7">
 <div className="w-10 h-10 bg-[#2d5bb5]/15 rounded-xl flex items-center justify-center text-[#7aa3e5] mb-5">
 <Clock size={20} />
 </div>
 <h3 className="font-display font-semibold text-white mb-2">Onboarding Timeline</h3>
 <p className="text-slate-400 text-sm leading-relaxed">
 From discovery call to fully operational: <span className="text-white font-semibold">48 hours</span>. We handle the briefing, system integration, and SOP setup — you just show up ready to delegate.
 </p>
 </div>

 <div className="glass-card rounded-2xl p-7">
 <h3 className="font-display font-semibold text-white mb-4">What to expect</h3>
 <ul className="space-y-3">
 {[
 'We review your message the same business day',
 'A discovery call is booked at your convenience',
 'We map your workflow in 30 minutes',
 'Your specialist is matched and onboarded within 48h',
 ].map((step) => (
 <li key={step} className="flex items-start gap-3 text-sm text-slate-400">
 <CheckCircle2 size={14} className="text-[#4d7fd4] shrink-0 mt-0.5" />
 {step}
 </li>
 ))}
 </ul>
 </div>
 </AnimatedSection>

 {/* Form */}
 <AnimatedSection className="lg:col-span-3">
 <div className="glass-card rounded-2xl p-8 lg:p-10">
 {submitted ? (
 <div className="flex flex-col items-center justify-center py-16 text-center">
 <div className="w-14 h-14 bg-[#1c2a4a] text-[#4d7fd4] rounded-full flex items-center justify-center mb-5">
 <CheckCircle2 size={28} />
 </div>
 <h3 className="font-display font-bold text-xl text-white mb-2">Message Sent</h3>
 <p className="text-slate-400 text-sm max-w-sm">Your email client has opened with your message ready to send. We'll follow up within one business day.</p>
 </div>
 ) : (
 <>
 <h2 className="font-display font-bold text-xl text-white mb-2">Send us a message</h2>
 <p className="text-slate-500 text-sm mb-8">Fill in your details and we'll be in touch to schedule a discovery call.</p>

 <form onSubmit={handleSubmit} className="space-y-5">
 <div className="grid sm:grid-cols-2 gap-5">
 <div>
 <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">First Name</label>
 <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange}
 placeholder="Jane"
 className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#2d5bb5] focus:ring-1 focus:ring-[#2d5bb5] transition-all" />
 </div>
 <div>
 <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Last Name</label>
 <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange}
 placeholder="Smith"
 className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#2d5bb5] focus:ring-1 focus:ring-[#2d5bb5] transition-all" />
 </div>
 </div>

 <div className="grid sm:grid-cols-2 gap-5">
 <div>
 <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Work Email</label>
 <input type="email" name="email" required value={formData.email} onChange={handleChange}
 placeholder="jane@brokerage.ca"
 className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#2d5bb5] focus:ring-1 focus:ring-[#2d5bb5] transition-all" />
 </div>
 <div>
 <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Phone</label>
 <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
 placeholder="(416) 555-0100"
 className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#2d5bb5] focus:ring-1 focus:ring-[#2d5bb5] transition-all" />
 </div>
 </div>

 <div className="grid sm:grid-cols-2 gap-5">
 <div>
 <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Brokerage</label>
 <input type="text" name="company" value={formData.company} onChange={handleChange}
 placeholder="Pinnacle Mortgage Group"
 className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#2d5bb5] focus:ring-1 focus:ring-[#2d5bb5] transition-all" />
 </div>
 <div>
 <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Monthly Deals</label>
 <select name="volume" value={formData.volume} onChange={handleChange}
 className="w-full bg-[#0d1424] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2d5bb5] focus:ring-1 focus:ring-[#2d5bb5] transition-all">
 <option value="" className="bg-[#0d1424]">Select range</option>
 <option value="1-5" className="bg-[#0d1424]">1–5 deals/month</option>
 <option value="6-15" className="bg-[#0d1424]">6–15 deals/month</option>
 <option value="16-30" className="bg-[#0d1424]">16–30 deals/month</option>
 <option value="30+" className="bg-[#0d1424]">30+ deals/month</option>
 </select>
 </div>
 </div>

 <div>
 <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Message</label>
 <textarea name="message" rows={4} value={formData.message} onChange={handleChange}
 placeholder="Tell us about your current workflow and where you're losing the most time..."
 className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#2d5bb5] focus:ring-1 focus:ring-[#2d5bb5] transition-all resize-none" />
 </div>

 <button
 type="submit"
 className="w-full flex items-center justify-center gap-2 bg-[#2d5bb5] hover:bg-[#4d7fd4] text-white font-semibold py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-[#2d5bb5]/25"
 >
 Send Message <ArrowRight size={18} />
 </button>
 <p className="text-center text-xs text-slate-600">We respond within one business day.</p>
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
