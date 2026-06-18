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

export function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h1 className="font-display font-bold text-4xl lg:text-5xl text-white mb-6">QARM Terms of Service</h1>
          <p className="text-slate-400 leading-relaxed mb-14">Welcome to QARM (Quality Assistance Relationship Management). By accessing or using our website and services, you agree to comply with and be bound by the following Terms of Service.</p>

          <Section num="1" title="Services">
            <p className="text-sm">QARM provides remote mortgage operations support services for mortgage brokers and related businesses. Services may include, but are not limited to:</p>
            <List items={['Document collection', 'CRM and system updates', 'Client follow-ups', 'Administrative support', 'Mortgage file processing assistance']} />
            <p className="text-sm pt-2">QARM does not provide legal, financial, mortgage underwriting, or lending advice.</p>
          </Section>

          <Section num="2" title="Use of Website">
            <p className="text-sm">By using this website, you agree to:</p>
            <List items={['Use the website lawfully', 'Not misuse or attempt to disrupt website functionality', 'Not copy or reproduce website content without permission']} />
            <p className="text-sm pt-2">We reserve the right to restrict access or terminate services if misuse is detected.</p>
          </Section>

          <Section num="3" title="Client Responsibilities">
            <p className="text-sm">Clients are responsible for:</p>
            <List items={['Providing accurate information', 'Maintaining compliance with applicable mortgage regulations', 'Reviewing all submitted documents and communications', 'Ensuring final approval of mortgage-related decisions']} />
            <p className="text-sm pt-2">QARM acts as an operational support provider only.</p>
          </Section>

          <Section num="4" title="Confidentiality">
            <p className="text-sm">QARM takes confidentiality seriously. Any client data shared with QARM will be treated as confidential and used solely for operational purposes.</p>
            <p className="text-sm">Employees, contractors, and remote staff are expected to maintain strict confidentiality standards.</p>
          </Section>

          <Section num="5" title="Limitation of Liability">
            <p className="text-sm">QARM shall not be held liable for:</p>
            <List items={['Indirect or consequential damages', 'Business interruption', 'Loss of profits', 'Delays caused by third-party systems or client-side errors']} />
            <p className="text-sm pt-2">All services are provided on an "as available" basis.</p>
          </Section>

          <Section num="6" title="Intellectual Property">
            <p className="text-sm">All content on this website, including:</p>
            <List items={['Branding', 'Logos', 'Graphics', 'Text', 'Designs']} />
            <p className="text-sm pt-2">are the property of QARM unless otherwise stated.</p>
            <p className="text-sm">Unauthorized use is prohibited.</p>
          </Section>

          <Section num="7" title="Third-Party Services">
            <p className="text-sm">Our website may contain links or integrations with third-party services or platforms. QARM is not responsible for the practices or content of those third parties.</p>
          </Section>

          <Section num="8" title="Changes to Terms">
            <p className="text-sm">QARM may update these Terms of Service at any time without prior notice. Continued use of the website constitutes acceptance of updated terms.</p>
          </Section>

          <Section num="9" title="Contact Information">
            <p className="text-sm">For questions regarding these Terms, please contact:</p>
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
