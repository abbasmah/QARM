import { Outlet, useLocation } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { useEffect, useState, Suspense } from 'react';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { GetStartedModal } from './components/GetStartedModal';
import { GetStartedProvider } from './context/GetStartedContext';

interface PageMetaData { title: string; description: string; keywords: string; ogTitle?: string; ogDescription?: string; }

const pageMeta: Record<string, PageMetaData> = {
  '/': { title: 'QARM | Mortgage Operations Infrastructure for Canadian Brokers', description: 'QARM delivers premium mortgage operations infrastructure — CRM coordination, pipeline management, workflow systems, and operational support built for Canadian mortgage professionals. Est. 2023.', keywords: 'mortgage operations support Canada, mortgage CRM management, mortgage pipeline coordination, mortgage workflow systems, mortgage broker back office, Filogix CRM support', ogTitle: 'QARM — Operational Infrastructure for Relationship-Driven Professionals', ogDescription: 'Premium workflow, CRM, and pipeline operations support — built for professionals who run their business on relationships.' },
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
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta property="og:title" content={meta.ogTitle ?? meta.title} />
      <meta property="og:description" content={meta.ogDescription ?? meta.description} />
      <meta property="og:url" content={`https://www.theqarm.com${path}`} />
      <link rel="canonical" href={`https://www.theqarm.com${path}`} />
    </Head>
  );
}

const PageLoader = () => (
  <div className="min-h-screen bg-[#0a0f1e] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-[#2d5bb5] border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function Layout() {
  const [modalOpen, setModalOpen] = useState(false);
  const { pathname } = useLocation();
  const onGetStarted = () => setModalOpen(true);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-200">
      <PageMeta path={pathname} />
      <Nav onGetStarted={onGetStarted} />
      <main>
        <GetStartedProvider value={onGetStarted}>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </GetStartedProvider>
      </main>
      <Footer />
      <GetStartedModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
