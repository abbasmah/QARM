import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from 'react';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { GetStartedModal } from './components/GetStartedModal';

// Lazy load all pages — only download JS when route is visited
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const PricingPage = lazy(() => import('./pages/PricingPage').then(m => ({ default: m.PricingPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const BrokerGrowthPage = lazy(() => import('./pages/BrokerGrowthPage').then(m => ({ default: m.BrokerGrowthPage })));
const USMortgagePage = lazy(() => import('./pages/USMortgagePage').then(m => ({ default: m.USMortgagePage })));
const GlobalOperationsPage = lazy(() => import('./pages/GlobalOperationsPage').then(m => ({ default: m.GlobalOperationsPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then(m => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then(m => ({ default: m.TermsPage })));

interface PageMetaData { title: string; description: string; keywords: string; }

const pageMeta: Record<string, PageMetaData> = {
  '/': { title: 'QARM | Mortgage Operations Infrastructure for Canadian Brokers', description: 'QARM delivers premium mortgage operations infrastructure — CRM coordination, pipeline management, workflow systems, and operational support built for Canadian mortgage professionals. Est. 2023.', keywords: 'mortgage operations support Canada, mortgage CRM management, mortgage pipeline coordination, mortgage workflow systems, mortgage broker back office, Filogix CRM support' },
  '/services': { title: 'QARM Services | Mortgage Workflow Management & CRM Coordination Canada', description: 'Full-service mortgage operations support: CRM management, document fulfillment, workflow coordination, underwriting prep, compliance operations, and AI-enhanced workflow systems for Canadian brokers.', keywords: 'mortgage CRM management Canada, mortgage document collection, mortgage workflow coordination, underwriting preparation Canada, Filogix management, Finmo support' },
  '/pricing': { title: 'QARM Pricing | Mortgage Operations Support Plans — Canada', description: 'Transparent mortgage operations support pricing. Part-time ($899 CAD/mo) and full-time ($1,599 CAD/mo) plans. No setup fees. No lock-in contracts.', keywords: 'mortgage operations support pricing Canada, mortgage admin cost Canada, mortgage broker operations cost' },
  '/about': { title: 'About QARM | Mortgage Operations Infrastructure Company — Est. 2023', description: 'QARM has been building mortgage operations infrastructure since 2023. Dedicated operations specialists, systematic workflows, and mortgage-specific training for brokers across Canada and beyond.', keywords: 'QARM mortgage operations company, mortgage operations infrastructure Canada, mortgage broker back office company' },
  '/contact': { title: 'Contact QARM | Book a Mortgage Operations Discovery Call', description: 'Book a discovery call or send a message. QARM responds within one business day. Email: info@theqarm.com', keywords: 'contact QARM, book mortgage operations discovery call, QARM discovery call' },
  '/broker-growth': { title: 'QARM Broker Growth Services | Websites, SEO & Social for Mortgage Brokers', description: 'Websites, social media management, local SEO, email marketing, brand identity, and CRM setup — built exclusively for mortgage brokers.', keywords: 'mortgage broker website Canada, mortgage broker SEO, mortgage broker social media, broker landing page design' },
  '/us-mortgage-operations': { title: 'QARM | Mortgage Operations Support for US Loan Originators (MLOs)', description: 'Dedicated mortgage operations support for American MLOs. Pipeline management, file coordination, LOS management, RESPA-aware compliance operations.', keywords: 'mortgage operations support USA, MLO operations support, mortgage loan originator back office, Encompass pipeline management' },
  '/privacy': { title: 'Privacy Policy | QARM', description: 'QARM Privacy Policy — how we collect, use, and protect your personal information.', keywords: 'QARM privacy policy, mortgage operations privacy' },
  '/terms': { title: 'Terms of Service | QARM', description: 'QARM Terms of Service — terms governing the use of our website and mortgage operations support services.', keywords: 'QARM terms of service, mortgage operations terms' },
  '/global-operations': { title: 'QARM Global | Mortgage Operations Support — UK, UAE, Australia & Emerging Markets', description: 'QARM provides lending operations infrastructure for mortgage advisers in the UK, Australia, UAE, and lending businesses in emerging markets worldwide.', keywords: 'mortgage operations support UK, mortgage adviser back office UK, home finance operations UAE, mortgage broker support Australia, MFAA FBAA operations support' },
};

function PageMeta({ path }: { path: string }) {
  const meta = pageMeta[path] || pageMeta['/'];
  useEffect(() => {
    document.title = meta.title;
    const set = (sel: string, attr: string, val: string) => { const el = document.querySelector(sel); if (el) el.setAttribute(attr, val); };
    set('meta[name="description"]', 'content', meta.description);
    set('meta[name="keywords"]', 'content', meta.keywords);
    set('meta[property="og:title"]', 'content', meta.title);
    set('meta[property="og:description"]', 'content', meta.description);
    set('meta[property="og:url"]', 'content', `https://www.theqarm.com${path}`);
    set('link[rel="canonical"]', 'href', `https://www.theqarm.com${path}`);
  }, [meta, path]);
  return null;
}

// Simple page loader
const PageLoader = () => (
  <div className="min-h-screen bg-[#0a0f1e] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-[#2d5bb5] border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-200">
      <PageMeta path={pathname} />
      <Nav onGetStarted={() => setModalOpen(true)} />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage onGetStarted={() => setModalOpen(true)} />} />
            <Route path="/services" element={<ServicesPage onGetStarted={() => setModalOpen(true)} />} />
            <Route path="/pricing" element={<PricingPage onGetStarted={() => setModalOpen(true)} />} />
            <Route path="/about" element={<AboutPage onGetStarted={() => setModalOpen(true)} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/broker-growth" element={<BrokerGrowthPage onGetStarted={() => setModalOpen(true)} />} />
            <Route path="/us-mortgage-operations" element={<USMortgagePage onGetStarted={() => setModalOpen(true)} />} />
            <Route path="/global-operations" element={<GlobalOperationsPage onGetStarted={() => setModalOpen(true)} />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center text-center px-4 pt-20">
                <div>
                  <p className="text-6xl font-display font-bold text-[#2d5bb5] mb-4">404</p>
                  <h1 className="text-2xl font-display font-bold text-white mb-4">Page not found</h1>
                  <a href="/" className="inline-flex items-center gap-2 bg-[#2d5bb5] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#4d7fd4] transition-all">Back to Home</a>
                </div>
              </div>
            } />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <GetStartedModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
