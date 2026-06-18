import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { QarmLogo } from './QarmLogo';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-[#050810] border-t border-white/[0.06]">
      {/* CTA Strip */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-xs font-semibold text-[#4d7fd4] tracking-widest uppercase mb-3">Ready to reclaim your time?</p>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-white leading-tight">
                Let's build your operations<br className="hidden lg:block" /> infrastructure.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://calendly.com/theqarm-info/30min" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#2d5bb5] hover:bg-[#4d7fd4] text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-[#2d5bb5]/30">
                Book a Discovery Call
              </a>
              <Link to="/pricing"
                className="flex items-center justify-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <QarmLogo className="w-8 h-8" />
              <span className="font-display font-bold text-xl text-white">QARM</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              Premium mortgage operations infrastructure for brokers and mortgage professionals across Canada, the United States, and global lending markets. CRM coordination, pipeline management, and workflow systems built for the modern mortgage business.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
              <Mail size={14} className="text-[#4d7fd4]" />
              <a href="mailto:info@theqarm.com" className="hover:text-white transition-colors">info@theqarm.com</a>
            </div>
            {/* Social */}
            <div className="flex gap-3">
              <a href="https://www.instagram.com/the.qarm/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] rounded-lg text-slate-400 hover:text-white transition-all"
                aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://www.facebook.com/qarmofficial/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] rounded-lg text-slate-400 hover:text-white transition-all"
                aria-label="Facebook">
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                { label: 'CRM & Pipeline Management', href: '/services#crm' },
                { label: 'Workflow Coordination', href: '/services#workflow' },
                { label: 'Client Communication', href: '/services#communication' },
                { label: 'Underwriting Support', href: '/services#underwriting' },
                { label: 'Broker Growth Services', href: '/broker-growth' },
                { label: 'US Mortgage Operations', href: '/us-mortgage-operations' },
                { label: 'Global Operations', href: '/global-operations' },
              ].map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About QARM', href: '/about' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
              <li>
                <a href="mailto:info@theqarm.com" className="text-sm text-slate-400 hover:text-white transition-colors">info@theqarm.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hr-brand mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">
            © QARM — Quality Assistance & Relationship Management. Est. 2023. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
