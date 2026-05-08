import { motion } from 'motion/react';

export function PrivacyPolicyPage() {
  return (
    <main className="pt-28 pb-24 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-slate prose-lg md:prose-xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">QARM Privacy Policy</h1>

          <p className="text-slate-600 mb-4">
            QARM (“Quality Assistance Relationship Management”) values your privacy and is committed to protecting your personal information.
          </p>
          <p className="text-slate-600 mb-12">
            This Privacy Policy explains how we collect, use, and protect information when you use our website and services.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">1. Information We Collect</h2>
              
              <h3 className="text-lg font-bold text-slate-900 mb-2 mt-6">Personal Information</h3>
              <ul className="list-disc pl-5 text-slate-600 space-y-1 mb-6">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company information</li>
              </ul>
              
              <h3 className="text-lg font-bold text-slate-900 mb-2 mt-6">Technical Information</h3>
              <ul className="list-disc pl-5 text-slate-600 space-y-1 mb-6">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Website usage analytics</li>
              </ul>
              
              <h3 className="text-lg font-bold text-slate-900 mb-2 mt-6">Business Information</h3>
              <p className="text-slate-600">Information voluntarily shared during inquiries or service onboarding.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">2. How We Use Information</h2>
              <p className="text-slate-600 mb-4">We use collected information to:</p>
              <ul className="list-disc pl-5 text-slate-600 space-y-1 mb-6">
                <li>Respond to inquiries</li>
                <li>Deliver services</li>
                <li>Improve website performance</li>
                <li>Communicate with clients</li>
                <li>Maintain security and operational efficiency</li>
              </ul>
              <p className="text-slate-600">We do not sell personal information to third parties.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">3. Data Security</h2>
              <p className="text-slate-600 mb-4">QARM implements reasonable security measures to protect confidential and personal information.</p>
              <p className="text-slate-600">While we strive to protect data, no online system can guarantee complete security.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">4. Cookies and Analytics</h2>
              <p className="text-slate-600 mb-4">Our website may use cookies and analytics tools to:</p>
              <ul className="list-disc pl-5 text-slate-600 space-y-1 mb-6">
                <li>Improve user experience</li>
                <li>Analyze website traffic</li>
                <li>Optimize performance</li>
              </ul>
              <p className="text-slate-600">Users may disable cookies through browser settings.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">5. Third-Party Services</h2>
              <p className="text-slate-600 mb-4">We may use trusted third-party platforms for:</p>
              <ul className="list-disc pl-5 text-slate-600 space-y-1 mb-6">
                <li>Website hosting</li>
                <li>Communication</li>
                <li>Analytics</li>
                <li>CRM systems</li>
              </ul>
              <p className="text-slate-600">These providers may process limited information as necessary to support operations.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">6. Data Retention</h2>
              <p className="text-slate-600">We retain information only as long as necessary for operational, legal, or business purposes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">7. User Rights</h2>
              <p className="text-slate-600 mb-4">Depending on applicable laws, users may request:</p>
              <ul className="list-disc pl-5 text-slate-600 space-y-1 mb-6">
                <li>Access to personal data</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of personal information</li>
              </ul>
              <p className="text-slate-600">Requests may be submitted through our contact information.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">8. External Links</h2>
              <p className="text-slate-600">Our website may contain links to external websites. QARM is not responsible for the privacy practices of third-party websites.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">9. Changes to This Policy</h2>
              <p className="text-slate-600">QARM may update this Privacy Policy periodically. Updates will be reflected on this page with a revised effective date.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">10. Contact Us</h2>
              <p className="text-slate-600 mb-4">If you have questions regarding this Privacy Policy, please contact:</p>
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
