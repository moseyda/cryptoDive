import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SECTIONS = [
  { id: 'collection', title: '1. Information We Collect' },
  { id: 'usage', title: '2. How We Use Your Data' },
  { id: 'sharing', title: '3. Sharing & Disclosure' },
  { id: 'cookies', title: '4. Cookies & Tracking' },
  { id: 'security', title: '5. Data Retention & Security' },
  { id: 'rights', title: '6. Your Privacy Rights' },
  { id: 'transfers', title: '7. International Transfers' },
  { id: 'updates', title: '8. Updates to this Policy' },
];

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState('collection');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = SECTIONS.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 200; 

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#000625] text-white font-sans overflow-x-clip flex flex-col">
      <Navbar />

      {/* Header */}
      <div className="w-full bg-[#101428] border-b border-gray-800/60 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00ffa0]/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <h1 className="text-[40px] md:text-[56px] font-extrabold mb-4">Privacy Policy</h1>
          <p className="text-white/60 text-[16px] md:text-[18px]">Last Updated: 20 July 2026</p>
        </div>
      </div>

      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12 relative z-10">
        
        {/* Sidebar Navigation */}
        <aside className="lg:w-1/4">
          <div className="sticky top-32 bg-[#101428]/50 border border-gray-800/60 rounded-[16px] p-6 backdrop-blur-md">
            <h3 className="text-[18px] font-bold mb-6 text-white">Contents</h3>
            <ul className="space-y-3">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollTo(section.id)}
                    className={`text-left text-[14px] font-medium transition-colors duration-200 ${
                      activeSection === section.id 
                        ? 'text-[#00ffa0]' 
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Content Area */}
        <div className="lg:w-3/4 text-white/80 text-[15px] md:text-[16px] leading-relaxed space-y-12">
          
          <section id="collection" className="scroll-mt-32">
            <h2 className="text-[24px] font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              At CryptoDive ("we", "us", "our"), we collect and process various categories of personal data to provide our cryptocurrency services effectively and securely. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><strong>Identity Information:</strong> Government-issued ID, full name, date of birth, and residential address required for our KYC/AML verification programme.</li>
              <li><strong>Financial Data:</strong> Bank account details, payment card information, and cryptocurrency wallet addresses used for deposits and withdrawals.</li>
              <li><strong>Technical Data:</strong> IP addresses, browser types, operating systems, and device identifiers collected when you interact with our platform.</li>
            </ul>
          </section>

          <section id="usage" className="scroll-mt-32">
            <h2 className="text-[24px] font-bold text-white mb-4">2. How We Use Your Data</h2>
            <p className="mb-4">
              We utilise your personal data for the following lawful purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>To create, manage, and authorise your account.</li>
              <li>To execute your cryptocurrency transactions and fiat withdrawals.</li>
              <li>To comply with legal obligations, including anti-money laundering (AML) and counter-terrorism financing (CTF) regulations.</li>
              <li>To provide customer support and respond to your enquiries.</li>
              <li>To monitor for, detect, and prevent fraudulent or unauthorised activities on our decentralised networks.</li>
            </ul>
          </section>

          <section id="sharing" className="scroll-mt-32">
            <h2 className="text-[24px] font-bold text-white mb-4">3. Sharing & Disclosure</h2>
            <p className="mb-4">
              We do not sell your personal data. We only share your information with trusted third parties under strict confidentiality agreements, including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Identity Verification Providers:</strong> To perform mandatory KYC checks.</li>
              <li><strong>Financial Institutions:</strong> To process fiat deposits and withdrawals.</li>
              <li><strong>Law Enforcement:</strong> We will disclose data to authorities if required by law, subpoena, or court order, particularly in cases of suspected fraud or financial crime.</li>
            </ul>
          </section>

          <section id="cookies" className="scroll-mt-32">
            <h2 className="text-[24px] font-bold text-white mb-4">4. Cookies & Tracking</h2>
            <p className="mb-4">
              Our platform uses cookies and similar tracking technologies to enhance your user experience, remember your preferences, and analyse site traffic. 
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept essential cookies, you may not be able to use certain secure features of our platform.
            </p>
          </section>

          <section id="security" className="scroll-mt-32">
            <h2 className="text-[24px] font-bold text-white mb-4">5. Data Retention & Security</h2>
            <p className="mb-4">
              We employ industry-standard cryptographic security measures to protect your personal data from unauthorised access, alteration, or destruction. This includes end-to-end encryption and secure cold storage for sensitive records.
            </p>
            <p>
              We retain your personal data only for as long as is necessary for the purposes set out in this policy. Note that due to regulatory requirements, we are legally mandated to retain KYC records and transaction history for a minimum of five (5) years even after your account is closed.
            </p>
          </section>

          <section id="rights" className="scroll-mt-32">
            <h2 className="text-[24px] font-bold text-white mb-4">6. Your Privacy Rights</h2>
            <p className="mb-4">
              Under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, you possess several rights regarding your personal data:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Right of Access:</strong> You can request a copy of the personal data we hold about you.</li>
              <li><strong>Right to Rectification:</strong> You can request that we correct any inaccurate or incomplete data.</li>
              <li><strong>Right to Erasure:</strong> You can request the deletion of your data (subject to our legal retention obligations).</li>
              <li><strong>Right to Restrict Processing:</strong> You may ask us to suspend the processing of your data under certain circumstances.</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact our Data Protection Officer via the Customer Support page.
            </p>
          </section>

          <section id="transfers" className="scroll-mt-32">
            <h2 className="text-[24px] font-bold text-white mb-4">7. International Transfers</h2>
            <p className="mb-4">
              As a global cryptocurrency platform, your information may be transferred to, and maintained on, computers located outside of your state, province, or country. 
            </p>
            <p>
              If you are located in the UK or the EEA, we ensure that any transfer of your personal data outside these regions is safeguarded by appropriate legal frameworks, such as Standard Contractual Clauses or equivalent adequacy decisions.
            </p>
          </section>

          <section id="updates" className="scroll-mt-32">
            <h2 className="text-[24px] font-bold text-white mb-4">8. Updates to this Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any significant changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Your continued use of the platform after modifications indicates your acknowledgement of the updated policy.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
