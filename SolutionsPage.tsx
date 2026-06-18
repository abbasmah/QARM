import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { QarmLogo } from './QarmLogo';

interface NavProps {
  onGetStarted: () => void;
}

const navLinks = [
  { label: 'Services', href: '/services' },
  {
    label: 'Solutions',
    children: [
      { label: 'Broker Growth Services', href: '/broker-growth', desc: 'Websites, SEO & social for brokers' },
      { label: 'US Mortgage Operations', href: '/us-mortgage-operations', desc: 'Built for American MLOs' },
      { label: 'Global Operations', href: '/global-operations', desc: 'UK, UAE & emerging markets' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/the.qarm/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/qarmofficial/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];

export function Nav({ onGetStarted }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSolutionsOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#080d1a]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-xl shadow-black/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <QarmLogo className="w-9 h-9" />
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-xl text-white tracking-tight">QARM</span>
              <span className="text-[8.5px] font-medium text-slate-400 tracking-[0.2em] uppercase hidden md:block">
                Quality · Assistance · Relationship · Management
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => setSolutionsOpen(false)}
                    className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-white/[0.06] transition-all"
                  >
                    {link.label} <ChevronDown size={14} className={`transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {solutionsOpen && (
                    <div
                      onMouseEnter={() => setSolutionsOpen(true)}
                      onMouseLeave={() => setSolutionsOpen(false)}
                      className="absolute top-full left-0 mt-1 w-64 bg-[#0d1424]/98 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-5 py-4 hover:bg-white/[0.06] transition-colors border-b border-white/[0.04] last:border-0"
                        >
                          <p className="text-sm font-semibold text-white">{child.label}</p>
                          <p className="text-xs text-slate-500 mt-0.5">{child.desc}</p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href!}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.href ? 'text-white bg-white/[0.08]' : 'text-slate-400 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
            <div className="w-px h-5 bg-white/10 mx-2" />
            {/* Social icons */}
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="p-2 text-slate-500 hover:text-white transition-colors rounded-lg hover:bg-white/[0.06]"
                aria-label={s.label}>
                {s.icon}
              </a>
            ))}
            <div className="w-px h-5 bg-white/10 mx-2" />
            <a
              href="https://calendly.com/theqarm-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#2d5bb5] hover:bg-[#4d7fd4] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#2d5bb5]/30"
            >
              Book Discovery Call
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#080d1a]/98 backdrop-blur-xl border-b border-white/[0.06] px-4 pb-6">
          <div className="space-y-1 pt-2">
            <Link to="/services" className="block px-4 py-3 rounded-lg text-sm font-medium text-slate-400 hover:text-white">Services</Link>
            <div className="px-4 py-2">
              <p className="text-xs font-semibold text-slate-600 uppercase tracking-widest mb-2">Solutions</p>
              <Link to="/broker-growth" className="block py-2 text-sm text-slate-400 hover:text-white">Broker Growth Services</Link>
              <Link to="/us-mortgage-operations" className="block py-2 text-sm text-slate-400 hover:text-white">US Mortgage Operations</Link>
              <Link to="/global-operations" className="block py-2 text-sm text-slate-400 hover:text-white">Global Operations</Link>
            </div>
            <Link to="/pricing" className="block px-4 py-3 rounded-lg text-sm font-medium text-slate-400 hover:text-white">Pricing</Link>
            <Link to="/about" className="block px-4 py-3 rounded-lg text-sm font-medium text-slate-400 hover:text-white">About</Link>
            <Link to="/contact" className="block px-4 py-3 rounded-lg text-sm font-medium text-slate-400 hover:text-white">Contact</Link>
            <div className="flex gap-3 px-4 pt-2">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white border border-white/10 rounded-lg">{s.icon}</a>
              ))}
            </div>
            <div className="pt-3">
              <a href="https://calendly.com/theqarm-info/30min" target="_blank" rel="noopener noreferrer"
                className="block w-full text-center bg-[#2d5bb5] hover:bg-[#4d7fd4] text-white px-5 py-3.5 rounded-lg text-sm font-semibold transition-all">
                Book Discovery Call
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
