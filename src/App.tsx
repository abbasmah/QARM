import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ChevronRight, 
  FileEdit, 
  Files, 
  MessageSquare, 
  PhoneCall, 
  ShieldCheck, 
  Target, 
  Users, 
  Zap,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';
import { GetStartedModal } from './components/GetStartedModal';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-brand-500 selection:text-white">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <QarmLogo />
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl text-slate-900 leading-none tracking-tight">QARM</span>
                <span className="text-[9.8px] font-medium text-slate-500 tracking-widest hidden md:block uppercase">Quality &middot; Assistance &middot; Relationship &middot; Management</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Services</a>
              <a href="#benefits" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Why us</a>
              <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Process</a>
              <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Pricing</a>
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
            <a href="#services" className="block text-slate-600 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#benefits" className="block text-slate-600 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Why us</a>
            <a href="#how-it-works" className="block text-slate-600 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Process</a>
            <a href="#pricing" className="block text-slate-600 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
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

      <main className="pt-20">
        
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-24 lg:pb-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-100/40 via-white to-white -z-10" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100/50 text-brand-600 text-sm font-semibold mb-6 border border-brand-200">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                  </span>
                  Canadian Mortgage Broker Specialists
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
                  Expert Mortgage Operations Support <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">for Canadian Brokers</span>
                </h1>
                
                <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed">
                  Hire top-tier mortgage broker virtual assistants trained specifically for Canada. Outsource document collection, CRM management, and backend processing to scale faster without the overhead.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Book a Discovery Call"
                    className="flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Book a Discovery Call <ArrowRight size={20} />
                  </button>
                  <a href="#pricing" className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-full text-base font-semibold transition-all">
                    View Transparent Pricing
                  </a>
                </div>
                
                <div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <img key={i} className="inline-block h-8 w-8 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={`Broker avatar ${i}`} loading="lazy" />
                    ))}
                  </div>
                  <p>Trusted by 50+ mortgage brokers across Canada</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative lg:ml-auto w-full max-w-lg aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-brand-900/10 border border-slate-100"
              >
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                  alt="Canadian mortgage broker working with a remote virtual assistant"
                  loading="eager"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {/* Floating UI Element */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Task Completed: Document Review</p>
                      <p className="text-sm text-slate-500">NOA, Paystubs & IDs verified for Smith Application.</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* LOGO CLOUD */}
        <section className="bg-white border-y border-slate-100 py-10">
           <div className="max-w-7xl mx-auto px-4 text-center">
             <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">Our VAs are proficient in Canadian broker tools</p>
             <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               <span className="font-display font-bold text-xl text-slate-800">Filogix</span>
               <span className="font-display font-bold text-xl text-slate-800">Velocity</span>
               <span className="font-display font-bold text-xl text-slate-800">Finmo</span>
               <span className="font-display font-bold text-xl text-slate-800">GoHighLevel</span>
               <span className="font-display font-bold text-xl text-slate-800">HubSpot</span>
             </div>
           </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Complete Mortgage Operations Support</h2>
              <p className="text-lg text-slate-600">Our highly skilled Canadian-trained virtual assistants seamlessly integrate into your workflow, taking over the crucial but time-consuming backend processing tasks.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  icon: <Files size={24} />, 
                  title: "Condition Fulfillment & Docs", 
                  desc: "We chase clients for NOAs, T4s, and IDs, ensuring perfectly pristine and compliant files for Canadian A and B-lenders." 
                },
                { 
                  icon: <MessageSquare size={24} />, 
                  title: "Client & Partner Follow-ups", 
                  desc: "Providing proactive updates on commitment letters to clients, realtors, and lawyers so you stay out of the weeds." 
                },
                { 
                  icon: <FileEdit size={24} />, 
                  title: "Filogix & CRM Management", 
                  desc: "Accurate mortgage application data entry into Filogix Expert, Finmo, Velocity, and HubSpot to keep your pipeline spotless." 
                },
                { 
                  icon: <Target size={24} />, 
                  title: "Underwriting Preparation", 
                  desc: "Reviewing Equifax/TransUnion bureaus, organizing detailed notes, and structuring submission packages for fast approvals." 
                },
                { 
                  icon: <PhoneCall size={24} />, 
                  title: "Remote Administrative Staff", 
                  desc: "Handling lead intake securely, collecting preliminary details, and booking highly qualified appointments on your calendar." 
                },
                { 
                  icon: <ShieldCheck size={24} />, 
                  title: "Canadian Compliance Audits", 
                  desc: "Meticulous post-funding organization, ensuring all provincial brokerage compliance checklists and PIPEDA standards are met." 
                }
              ].map((service, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US (Bento Box style) */}
        <section id="benefits" className="py-24 bg-brand-900 text-white rounded-[3rem] mx-2 lg:mx-6 my-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-brand-600 rounded-full blur-[120px] opacity-50"></div>
          <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-blue-400 rounded-full blur-[120px] opacity-20"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-[31px] font-bold mb-6 text-[#cad5e2]">Why top-producing brokers choose QARM</h2>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
                  Not just another VA agency. We specifically source, vet, and train talent exclusively for the Canadian mortgage ecosystem. Avoid the painful onboarding of generic assistants.
                </p>
                
                <div className="space-y-6">
                  {[
                    "Top 1% of offshore talent, strictly vetted for English proficiency.",
                    "Pre-trained on Canadian mortgage concepts and CRM tools.",
                    "No long-term lock-in contracts. Cancel anytime.",
                    "Dedicated account manager to ensure relationship success."
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400">
                        <CheckCircle2 size={16} />
                      </div>
                      <p className="text-slate-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-3xl border border-slate-700">
                  <div className="text-4xl font-display font-bold text-white mb-2">48h</div>
                  <p className="text-slate-400 text-sm">Average time to match and begin onboarding your new VA.</p>
                </div>
                <div className="bg-brand-600/50 backdrop-blur-sm p-6 rounded-3xl border border-brand-500">
                  <div className="text-4xl font-display font-bold text-white mb-2">70%</div>
                  <p className="text-blue-100 text-sm">Cost reduction compared to hiring local Canadian administrative staff.</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-3xl border border-slate-700 col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <Users className="text-brand-400" size={32} />
                    <div className="text-2xl font-bold text-white">Scale Effortlessly</div>
                  </div>
                  <p className="text-slate-400 text-sm">Flexible engagement models designed around the seasonality and volume of your specific brokerage. Pre-trained and ready to execute.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="how-it-works" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-16">Get matched in 3 simple steps</h2>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connector line for desktop */}
              <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-[2px] bg-slate-100 z-0"></div>

              {[
                { step: "01", title: "Discovery Call", desc: "We map out your current bottlenecks, tools, and the exact tasks you want off your plate." },
                { step: "02", title: "Handpicked Match", desc: "We select the perfect candidate from our fully-trained roster who fits your work style and timezone." },
                { step: "03", title: "Scale Up", desc: "We help integrate them into your systems. In days, you're closing more loans with less stress." },
              ].map((item, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center">
                  <div className="w-24 h-24 bg-white border-4 border-brand-50 rounded-full flex items-center justify-center text-2xl font-bold text-brand-600 mb-6 font-display shadow-lg shadow-slate-100">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-600 max-w-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
              <p className="text-lg text-slate-600">No hidden fees. No long-term contracts. Just access to top-tier, trained talent ready to scale your business.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Part Time Plan */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-sm relative flex flex-col h-full"
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Part-Time VA</h3>
                  <p className="text-slate-500">Perfect for individual brokers scaling up.</p>
                </div>
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-display font-bold text-slate-900">$899</span>
                    <span className="text-slate-500 font-medium">/ month</span>
                  </div>
                  <p className="text-sm text-slate-400 mt-2">Estimated ~$11/hour CAD</p>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {[
                    "80 hours per month (4h/day)",
                    "Dedicated Mortgage-Trained VA",
                    "Document Collection & Review",
                    "Basic CRM Management",
                    "Client Status Updates",
                    "Dedicated Account Manager",
                    "Cancel anytime"
                  ].map((feature, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle2 className="text-brand-500 shrink-0" size={20} />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  aria-label="Get Started with Part-time VA"
                  className="w-full py-4 px-6 rounded-xl font-semibold border-2 border-brand-900 text-brand-900 hover:bg-brand-50 transition-colors"
                >
                  Get Started
                </button>
              </motion.div>

              {/* Full Time Plan */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-brand-900 rounded-3xl p-8 lg:p-10 border border-brand-800 shadow-xl shadow-brand-900/20 relative flex flex-col h-full text-white"
              >
                <div className="absolute top-0 right-8 transform -translate-y-1/2">
                  <span className="bg-brand-500 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full">
                    Most Popular
                  </span>
                </div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Full-Time VA</h3>
                  <p className="text-slate-300">Total operational takeover for high-volume teams.</p>
                </div>
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-display font-bold text-white">$1,599</span>
                    <span className="text-slate-300 font-medium">/ month</span>
                  </div>
                  <p className="text-sm text-brand-300 mt-2">Estimated ~$10/hour CAD</p>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {[
                    "160 hours per month (8h/day)",
                    "Everything in Part-Time, plus:",
                    "Complex Underwriting Prep",
                    "Lender Submissions & Follow-ups",
                    "Full Pipeline Management",
                    "Lead Intake & Appointment Setting",
                    "Compliance & Post-Funding Checklists"
                  ].map((feature, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle2 className="text-brand-400 shrink-0" size={20} />
                      <span className="text-slate-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  aria-label="Get Started with Full-time VA"
                  className="w-full py-4 px-6 rounded-xl font-semibold bg-brand-500 text-white hover:bg-brand-400 transition-colors shadow-lg shadow-brand-500/25"
                >
                  Get Started
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-slate-600">Everything you need to know about our virtual assistant services for Canadian mortgage brokers.</p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">What does a mortgage broker virtual assistant do?</h3>
                <p className="text-slate-600">A virtual assistant for mortgage brokers handles backend operations like document collection, strict CRM updates in platforms like Filogix or Finmo, routine client follow-ups, and underwriting preparation, freeing you to focus on origination.</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Are your VAs trained specifically on Canadian mortgage processes?</h3>
                <p className="text-slate-600">Yes, our remote mortgage staff specializes entirely in the Canadian market. They are familiar with local lender requirements, compliance checklists, and the precise tools Canadian brokers use daily.</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">How quickly can we start outsourcing our workflow?</h3>
                <p className="text-slate-600">Our matching and onboarding process takes about 48 hours. We handle the heavy lifting of pairing you with a pre-trained assistant ready to plug straight into your business.</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Is our CRM and client data kept secure?</h3>
                <p className="text-slate-600">Absolutely. Security is our top priority. Our virtual assistants operate under strict confidentially agreements and data privacy policies fully compliant with PIPEDA and Canadian financial handling standards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL PREVIEW */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex justify-center text-yellow-400 mb-6">
              {[1,2,3,4,5].map(i => <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>)}
            </div>
            <h3 className="text-2xl md:text-3xl font-medium leading-tight text-slate-800 mb-8 max-w-3xl border-l-4 border-brand-500 pl-6 mx-auto text-left italic">
              "QARM completely transformed my brokerage. I handed off condition fulfillment and CRM data entry, freeing up 20 hours a week to focus purely on realtor relationships. My funding volume is up $2.5M per month organically."
            </h3>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-slate-300 rounded-full mb-3 bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop')] bg-cover bg-center"></div>
              <div className="font-bold text-slate-900">David R.</div>
              <div className="text-sm text-slate-500">Mortgage Broker, Ontario</div>
            </div>
          </div>
        </section>

      </main>

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
                Quality Assistance & Relationship Management. <br/>
                We provide elite, Canadian-trained virtual assistants specifically for mortgage professionals.
              </p>
              <div className="flex gap-4">
                {/* Social icons could go here */}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-brand-400 transition-colors">Underwriting Support</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Client Communication</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">CRM Management</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Document Collection</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-6">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 mt-4">
                  <MessageSquare size={16} className="text-brand-500" />
                  <a href="mailto:qarmllc@gmail.com" className="hover:text-brand-400 transition-colors">qarmllc@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; 2023 Quality Assistance & Relationship Management. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
