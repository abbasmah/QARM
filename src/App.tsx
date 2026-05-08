import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu,
  X,
  Facebook,
  Instagram,
  Mail
} from 'lucide-react';
import { GetStartedModal } from './components/GetStartedModal';
import { HomePage } from './pages/HomePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';

// Scroll to top helper
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

// Custom SVG Logo component matching the QARM brand
const QarmLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Outer shadows and rings */}
    <circle cx="50" cy="50" r="46" fill="#1e293b" />
    <circle cx="50" cy="50" r="40" fill="#1e3a8a" />
    <circle cx="50" cy="50" r="32" fill="#3b82f6" opacity="0.9" />
    <circle cx="50" cy="50" r="26" fill="#0f172a" />
    {/* The Q character */}
    <text x="50" y="60" fontSize="30" fill="white" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Q</text>
  </svg>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-brand-500 selection:text-white flex flex-col">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link to="/">
                <div className="flex items-center gap-3">
                  <QarmLogo />
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-2xl text-slate-900 leading-none tracking-tight">QARM</span>
                    <span className="text-[9.8px] font-medium text-slate-500 tracking-widest hidden md:block uppercase">Quality &middot; Assistance &middot; Relationship &middot; Management</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="/#services" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Services</a>
              <a href="/#benefits" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Why us</a>
              <a href="/#how-it-works" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Process</a>
              <a href="/#pricing" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Pricing</a>
              <button 
                onClick={() => setIsModalOpen(true)}
                aria-label="Get Started with QARM"
                className="bg-brand-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-brand-900/20 active:scale-95"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-4">
            <a href="/#services" className="block text-slate-600 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="/#benefits" className="block text-slate-600 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Why us</a>
            <a href="/#how-it-works" className="block text-slate-600 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Process</a>
            <a href="/#pricing" className="block text-slate-600 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
            <button 
              onClick={() => {
                setIsModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
              aria-label="Get Started with QARM Mobile"
              className="w-full bg-brand-900 text-white px-5 py-3 rounded-xl font-semibold mt-4"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>

      <div className="flex-grow flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage onGetStarted={() => setIsModalOpen(true)} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        </Routes>
      </div>

      {/* FOOTER */}
      <footer className="bg-brand-900 text-slate-300 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <QarmLogo className="w-8 h-8" />
                <span className="font-display font-bold text-2xl text-white">QARM</span>
              </div>
              <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
                Quality Assistance &amp; Relationship Management (QARM).
                <br />
                We provide elite, Canadian-trained virtual assistants specifically for mortgage professionals.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Services</h4>
              <ul className="space-y-4 text-slate-300">
                <li><a href="/#services" className="hover:text-brand-400 transition-colors">Underwriting Support</a></li>
                <li><a href="/#services" className="hover:text-brand-400 transition-colors">Client Communication</a></li>
                <li><a href="/#services" className="hover:text-brand-400 transition-colors">CRM Management</a></li>
                <li><a href="/#services" className="hover:text-brand-400 transition-colors">Document Collection</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact us</h4>
              <ul className="space-y-3 mt-4">
                <li className="flex items-center gap-3">
                  <Mail className="text-slate-400" size={20} />
                  <a href="mailto:info@theqarm.com" className="hover:text-brand-400 transition-colors">info@theqarm.com</a>
                </li>
              </ul>
              
              <div className="flex items-center gap-4 mt-8">
                <a 
                  href="https://www.facebook.com/profile.php?id=61560173617844" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-brand-400 hover:border-brand-400 hover:bg-brand-900/50 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:scale-105 transition-all duration-300"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="https://www.instagram.com/the.qarm/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-brand-400 hover:border-brand-400 hover:bg-brand-900/50 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:scale-105 transition-all duration-300"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>

          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; 2023 Quality Assistance &amp; Relationship Management (QARM). All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
