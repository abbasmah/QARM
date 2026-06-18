import { AnimatedSection } from '../components/AnimatedSection';
import { Mail } from 'lucide-react';

const Section = ({ num, title, children }: { num: string; title: string; children: React.ReactNode }) => (
  <div className="mb-12">
    <h2 className="font-display font-bold text-2xl text-white mb-2">{num}. {title}</h2>
    <div className="h-px bg-white/[0.08] mb-6" />
    <div className="text-slate-400 leading-relaxed space-y-4">{children}</div>
  </div>
);

const List = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 ml-1">
    {items.map((i) => (
      <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
        <span className="w-1.5 h-1.5 rounded-full bg-[#4d7fd4] mt-2 shrink-0" />{i}
      </li>
    ))}
  </ul>
);

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h1 className="font-display font-bold text-4xl lg:text-5xl text-white mb-6">QARM Privacy Policy</h1>
          <p className="text-slate-400 leading-relaxed mb-3">QARM ("Quality Assistance Relationship Management") values your privacy and is committed to protecting your personal information.</p>
          <p className="text-slate-400 leading-relaxed mb-14">This Privacy Policy explains how we collect, use, and protect information when you use our website and services.</p>

          <Section num="1" title="Information We Collect">
            <p className="font-semibold text-white text-sm mb-2">Personal Information</p>
            <List items={['Name', 'Email address', 'Phone number', 'Company information']} />
            <p className="font-semibold text-white text-sm mb-2 pt-3">Technical Information</p>
            <List items={['IP address', 'Browser type', 'Device information', 'Website usage analytics']} />
            <p className="font-semibold text-white text-sm mb-2 pt-3">Business Information</p>
            <p className="text-sm">Information voluntarily shared during inquiries or service onboarding.</p>
          </Section>

          <Section num="2" title="How We Use Information">
            <p className="text-sm">We use collected information to:</p>
            <List items={['Respond to inquiries', 'Deliver services', 'Improve website performance', 'Communicate with clients', 'Maintain security and operational efficiency']} />
            <p className="text-sm pt-2">We do not sell personal information to third parties.</p>
          </Section>

          <Section num="3" title="Data Security">
            <p className="text-sm">QARM implements reasonable security measures to protect confidential and personal information.</p>
            <p className="text-sm">While we strive to protect data, no online system can guarantee complete security.</p>
          </Section>

          <Section num="4" title="Cookies and Analytics">
            <p className="text-sm">Our website may use cookies and analytics tools to:</p>
            <List items={['Improve user experience', 'Analyze website traffic', 'Optimize performance']} />
            <p className="text-sm pt-2">Users may disable cookies through browser settings.</p>
          </Section>

          <Section num="5" title="Third-Party Services">
            <p className="text-sm">We may use trusted third-party platforms for:</p>
            <List items={['Website hosting', 'Communication', 'Analytics', 'CRM systems']} />
            <p className="text-sm pt-2">These providers may process limited information as necessary to support operations.</p>
          </Section>

          <Section num="6" title="Data Retention">
            <p className="text-sm">We retain information only as long as necessary for operational, legal, or business purposes.</p>
          </Section>

          <Section num="7" title="User Rights">
            <p className="text-sm">Depending on applicable laws, users may request:</p>
            <List items={['Access to personal data', 'Correction of inaccurate information', 'Deletion of personal information']} />
            <p className="text-sm pt-2">Requests may be submitted through our contact information.</p>
          </Section>

          <Section num="8" title="External Links">
            <p className="text-sm">Our website may contain links to external websites. QARM is not responsible for the privacy practices of third-party websites.</p>
          </Section>

          <Section num="9" title="Changes to This Policy">
            <p className="text-sm">QARM may update this Privacy Policy periodically. Updates will be reflected on this page with a revised effective date.</p>
          </Section>

          <Section num="10" title="Contact Us">
            <p className="text-sm">If you have questions regarding this Privacy Policy, please contact:</p>
            <div className="glass-card rounded-xl p-6 mt-2">
              <p className="font-display font-bold text-white text-sm mb-1">QARM</p>
              <p className="text-sm text-slate-400 mb-3">Quality Assistance Relationship Management</p>
              <a href="mailto:info@theqarm.com" className="inline-flex items-center gap-2 text-[#7aa3e5] hover:text-white text-sm transition-colors">
                <Mail size={14} /> info@theqarm.com
              </a>
            </div>
          </Section>
        </AnimatedSection>
      </div>
    </div>
  );
}
