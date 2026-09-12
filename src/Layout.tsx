import { Outlet, useLocation } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { useEffect, useState, Suspense } from 'react';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { GetStartedModal } from './components/GetStartedModal';
import { GetStartedProvider } from './context/GetStartedContext';

interface PageMetaData { title: string; description: string; keywords: string; ogTitle?: string; ogDescription?: string; }

const pageMeta: Record<string, PageMetaData> = {
  '/': { title: 'QARM | CRM Automation & Operations Support — Mortgage, Real Estate & Financial Services', description: 'QARM combines CRM automation, structured follow-up, and managed operations so mortgage, real estate, and financial services professionals stop losing opportunities to disorganized systems. Est. 2023.', keywords: 'CRM automation, mortgage operations support Canada, real estate operations support, financial services operations support, growth systems, lead follow-up automation, pipeline coordination, workflow systems, AI-enhanced operations, Filogix, Velocity, Finmo, back office support', ogTitle: 'QARM — Systems and Support for Relationship-Driven Businesses', ogDescription: 'CRM automation, growth systems, and managed operations — for professionals who run their business on relationships.' },
  '/services': { title: 'QARM Solutions | AI & CRM Automation, Growth Marketing, Sales Support & Managed Operations', description: 'QARM\'s four solution pillars — AI & CRM automation, growth marketing, sales & appointment support, and managed operations — for mortgage, real estate, and financial services professionals.', keywords: 'CRM automation software, sales appointment coordination, growth marketing systems, pipeline coordination, document coordination, client communication support, Filogix, Velocity, Finmo, mortgage operations, real estate operations, financial services operations' },
  '/pricing': { title: 'QARM Pricing | Flexible to Full-Time Operations Support Plans', description: 'Flexible operational support from $349 CAD/month. Part-time ($899), full-time ($1,599), and custom team plans available. No setup fees.', keywords: 'operations support pricing, mortgage operations cost, real estate operations cost, insurance operations cost, operations support pricing Canada' },
  '/about': { title: 'About QARM | Operational Infrastructure Company — Est. 2023', description: 'QARM has provided dedicated operational infrastructure since 2023 — a specialist team supporting mortgage, real estate, financial services, and other relationship-driven professionals across Canada, the US, and international markets.', keywords: 'QARM company, operations infrastructure company, mortgage operations company, real estate operations company, financial services operations company' },
  '/contact': { title: 'Contact QARM | Get Your Support Plan', description: 'Tell QARM where your workload is getting stuck and receive a recommended operational support plan within one business day.', keywords: 'contact QARM, get support plan, QARM enquiry' },
  '/broker-growth': { title: 'QARM Digital Presence | Websites & Social Media Management', description: 'Professional websites and social media management for mortgage, real estate, and insurance professionals — from $1,499 CAD.', keywords: 'professional website design, social media management, small business website, mortgage broker website, real estate agent website' },
  '/us-mortgage-operations': { title: 'QARM | Mortgage Operations Support for US Loan Originators (MLOs)', description: 'Dedicated mortgage operations support for American MLOs. Pipeline management, file coordination, and RESPA-aware compliance coordination — final compliance review stays with your licensed team.', keywords: 'mortgage operations support USA, MLO operations support, mortgage loan originator back office' },
  '/privacy': { title: 'Privacy Policy | QARM', description: 'QARM Privacy Policy — how we collect, use, and protect your personal information.', keywords: 'QARM privacy policy, operations support privacy' },
  '/terms': { title: 'Terms of Service | QARM', description: 'QARM Terms of Service — terms governing the use of our website and operations support services.', keywords: 'QARM terms of service, operations support terms' },
  '/global-operations': { title: 'QARM Global | Mortgage Operations Support — UK, UAE, Australia & Emerging Markets', description: 'QARM provides operational infrastructure for mortgage advisers and brokers in the UK, Australia, UAE, and lending businesses in emerging markets.', keywords: 'mortgage operations support UK, mortgage adviser back office UK, home finance operations UAE, mortgage broker support Australia' },
  '/real-estate': { title: 'QARM Real Estate | CRM, Listing & Client Follow-Up Support', description: 'QARM provides CRM management, listing coordination, transaction support, and client follow-up for real estate professionals.', keywords: 'real estate operations support, real estate CRM management, listing coordination, real estate transaction coordination, real estate virtual support' },
  '/mortgage': { title: 'QARM Mortgage Operations | CRM, File & Client Support', description: "QARM's founding specialization — CRM management, file and condition tracking, client communication, and marketing support for mortgage brokers and agents.", keywords: 'mortgage operations support, mortgage CRM management, mortgage file coordination, mortgage broker back office, condition tracking' },
  '/professional-services': { title: 'QARM Professional Services | Operations Support for Relationship-Driven Businesses', description: 'QARM provides CRM management, client communication, scheduling, and marketing support for consultants, advisors, and service-based professionals.', keywords: 'professional services operations support, consultant CRM management, advisor back office, client communication support' },
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
  const [presetCapacity, setPresetCapacity] = useState<string | undefined>(undefined);
  const { pathname } = useLocation();
  const onGetStarted = (preset?: string) => {
    setPresetCapacity(preset);
    setModalOpen(true);
  };

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
          <Footer />
        </GetStartedProvider>
      </main>
      <GetStartedModal isOpen={modalOpen} onClose={() => setModalOpen(false)} presetCapacity={presetCapacity} />
    </div>
  );
}
