import { lazy } from 'react';
import type { RouteRecord } from 'vite-react-ssg';
import Layout from './Layout';

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

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center text-center px-4 pt-20">
    <div>
      <p className="text-6xl font-display font-bold text-[#2d5bb5] mb-4">404</p>
      <h1 className="text-2xl font-display font-bold text-white mb-4">Page not found</h1>
      <a href="/" className="inline-flex items-center gap-2 bg-[#2d5bb5] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#4d7fd4] transition-all">Back to Home</a>
    </div>
  </div>
);

export const routes: RouteRecord[] = [
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'services', Component: ServicesPage },
      { path: 'pricing', Component: PricingPage },
      { path: 'about', Component: AboutPage },
      { path: 'contact', Component: ContactPage },
      { path: 'broker-growth', Component: BrokerGrowthPage },
      { path: 'us-mortgage-operations', Component: USMortgagePage },
      { path: 'global-operations', Component: GlobalOperationsPage },
      { path: 'privacy', Component: PrivacyPage },
      { path: 'terms', Component: TermsPage },
      { path: '*', Component: NotFound },
    ],
  },
];
