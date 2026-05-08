import { motion } from 'motion/react';

export function TermsOfServicePage() {
  return (
    <main className="pt-28 pb-24 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-slate prose-lg md:prose-xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">QARM Terms of Service</h1>
          
          <p className="text-slate-600 mb-12">
            Welcome to QARM (Quality Assistance Relationship Management). By accessing or using our website and services, you agree to comply with and be bound by the following Terms of Service.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">1. Services</h2>
              <p className="text-slate-600 mb-4">QARM provides remote mortgage operations support services for mortgage brokers and related businesses. Services may include, but are not limited to:</p>
              <ul className="list-disc pl-5 text-slate-600 space-y-1 mb-6">
                <li>Document collection</li>
                <li>CRM and system updates</li>
                <li>Client follow-ups</li>
                <li>Administrative support</li>
                <li>Mortgage file processing assistance</li>
              </ul>
              <p className="text-slate-600">QARM does not provide legal, financial, mortgage underwriting, or lending advice.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">2. Use of Website</h2>
              <p className="text-slate-600 mb-4">By using this website, you agree to:</p>
              <ul className="list-disc pl-5 text-slate-600 space-y-1 mb-6">
                <li>Use the website lawfully</li>
                <li>Not misuse or attempt to disrupt website functionality</li>
                <li>Not copy or reproduce website content without permission</li>
              </ul>
              <p className="text-slate-600">We reserve the right to restrict access or terminate services if misuse is detected.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">3. Client Responsibilities</h2>
              <p className="text-slate-600 mb-4">Clients are responsible for:</p>
              <ul className="list-disc pl-5 text-slate-600 space-y-1 mb-6">
                <li>Providing accurate information</li>
                <li>Maintaining compliance with applicable mortgage regulations</li>
                <li>Reviewing all submitted documents and communications</li>
                <li>Ensuring final approval of mortgage-related decisions</li>
              </ul>
              <p className="text-slate-600">QARM acts as an operational support provider only.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">4. Confidentiality</h2>
              <p className="text-slate-600 mb-4">QARM takes confidentiality seriously. Any client data shared with QARM will be treated as confidential and used solely for operational purposes.</p>
              <p className="text-slate-600">Employees, contractors, and remote staff are expected to maintain strict confidentiality standards.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">5. Limitation of Liability</h2>
              <p className="text-slate-600 mb-4">QARM shall not be held liable for:</p>
              <ul className="list-disc pl-5 text-slate-600 space-y-1 mb-6">
                <li>Indirect or consequential damages</li>
                <li>Business interruption</li>
                <li>Loss of profits</li>
                <li>Delays caused by third-party systems or client-side errors</li>
              </ul>
              <p className="text-slate-600">All services are provided on an "as available" basis.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">6. Intellectual Property</h2>
              <p className="text-slate-600 mb-4">All content on this website, including:</p>
              <ul className="list-disc pl-5 text-slate-600 space-y-1 mb-6">
                <li>Branding</li>
                <li>Logos</li>
                <li>Graphics</li>
                <li>Text</li>
                <li>Designs</li>
              </ul>
              <p className="text-slate-600 mb-4">are the property of QARM unless otherwise stated.</p>
              <p className="text-slate-600">Unauthorized use is prohibited.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">7. Third-Party Services</h2>
              <p className="text-slate-600">Our website may contain links or integrations with third-party services or platforms. QARM is not responsible for the practices or content of those third parties.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">8. Changes to Terms</h2>
              <p className="text-slate-600">QARM may update these Terms of Service at any time without prior notice. Continued use of the website constitutes acceptance of updated terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">9. Contact Information</h2>
              <p className="text-slate-600 mb-4">For questions regarding these Terms, please contact:</p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-slate-700">
                <p className="font-bold text-slate-900 mb-1">QARM</p>
                <p className="mb-2">Quality Assistance Relationship Management</p>
                <a href="mailto:info@theqarm.com" className="text-brand-600 hover:text-brand-700 font-medium">info@theqarm.com</a>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
