import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SECTIONS = [
  { id: 'agreement', title: '1. Agreement to Terms' },
  { id: 'eligibility', title: '2. Eligibility & Verification' },
  { id: 'security', title: '3. Account Security' },
  { id: 'risks', title: '4. Cryptocurrency Risks' },
  { id: 'fees', title: '5. Fees and Transactions' },
  { id: 'prohibited', title: '6. Prohibited Activities' },
  { id: 'liability', title: '7. Limitation of Liability' },
  { id: 'governing-law', title: '8. Governing Law' },
];

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('agreement');

  // Simple scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = SECTIONS.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 200; // Offset for navbar

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
      const y = element.getBoundingClientRect().top + window.scrollY - 100; // 100px offset
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
          <h1 className="text-[40px] md:text-[56px] font-extrabold mb-4">Terms of Service</h1>
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
          
          <section id="agreement" className="scroll-mt-32">
            <h2 className="text-[24px] font-bold text-white mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">
              These Terms of Service ("Terms") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and CryptoDive ("we", "us", or "our"), concerning your access to and use of the CryptoDive platform and its decentralised services.
            </p>
            <p>
              By accessing the platform, you acknowledge that you have read, understood, and agreed to be bound by all of these Terms. If you do not agree with all of these Terms, then you are expressly prohibited from using the platform and must discontinue use immediately.
            </p>
          </section>

          <section id="eligibility" className="scroll-mt-32">
            <h2 className="text-[24px] font-bold text-white mb-4">2. Eligibility & Verification (KYC/AML)</h2>
            <p className="mb-4">
              To be eligible to use the CryptoDive platform, you must be at least 18 years old and possess the legal capacity to enter into binding contracts. 
            </p>
            <p className="mb-4">
              We are authorised and committed to maintaining rigorous compliance with global Anti-Money Laundering (AML) directives. Therefore, we require comprehensive Identity Verification (Know Your Customer / KYC). You agree to provide complete, accurate, and up-to-date documentation to verify your identity.
            </p>
            <p>
              Failure to comply with our KYC programme may result in the immediate suspension or termination of your account, and the freezing of your assets until compliance is achieved.
            </p>
          </section>

          <section id="security" className="scroll-mt-32">
            <h2 className="text-[24px] font-bold text-white mb-4">3. Account Security</h2>
            <p className="mb-4">
              You are entirely responsible for maintaining the confidentiality of your account credentials, including your passwords and Two-Factor Authentication (2FA) codes. 
            </p>
            <p>
              CryptoDive will never ask for your private keys. You acknowledge that if you lose your credentials or if your account is compromised due to your negligence, we are not liable for any resulting losses. You must notify us immediately of any unauthorised use of your account.
            </p>
          </section>

          <section id="risks" className="scroll-mt-32">
            <h2 className="text-[24px] font-bold text-white mb-4">4. Cryptocurrency Risks</h2>
            <p className="mb-4">
              Trading or holding cryptocurrencies involves significant risk. Prices are highly volatile and can fluctuate dramatically within minutes. You should carefully consider whether trading digital assets is suitable for you in light of your financial condition.
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><strong>No Insurance:</strong> Digital assets are not subject to traditional financial protections such as the FDIC (US) or FSCS (UK).</li>
              <li><strong>Irreversibility:</strong> Cryptocurrency transactions are irreversible. Once funds are sent to an incorrect address, they cannot be recovered.</li>
              <li><strong>Regulatory Risk:</strong> The legal status of certain digital assets may be subject to varying interpretations across jurisdictions, which could impact their value.</li>
            </ul>
            <p>
              By using our services, you expressly acknowledge and accept these inherent risks.
            </p>
          </section>

          <section id="fees" className="scroll-mt-32">
            <h2 className="text-[24px] font-bold text-white mb-4">5. Fees and Transactions</h2>
            <p className="mb-4">
              CryptoDive charges trading fees for executing orders on the platform, which are clearly displayed prior to transaction confirmation. By placing an order, you authorise us to deduct the applicable fees from your account balance.
            </p>
            <p>
              Our fee structure is optimised for high-volume traders, but we reserve the right to amend our fee schedule at any time with prior notice. Network fees (gas fees) dictated by the underlying blockchain are outside our control and are paid by you.
            </p>
          </section>

          <section id="prohibited" className="scroll-mt-32">
            <h2 className="text-[24px] font-bold text-white mb-4">6. Prohibited Activities</h2>
            <p className="mb-4">You may not access or use the platform for any purpose other than that for which we make the platform available. Prohibited activities include, but are not limited to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Engaging in market manipulation, wash trading, or spoofing.</li>
              <li>Using the platform to facilitate illegal gambling, fraud, or money laundering.</li>
              <li>Bypassing or circumventing our KYC/AML controls or attempting to obscure your location (e.g., via VPN) if you reside in a restricted jurisdiction.</li>
              <li>Interfering with the security or operational integrity of the platform.</li>
            </ul>
          </section>

          <section id="liability" className="scroll-mt-32">
            <h2 className="text-[24px] font-bold text-white mb-4">7. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by applicable law, in no event shall CryptoDive, its directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit or lost data, arising from your use of the platform.
            </p>
            <p>
              The platform is provided on an "as-is" and "as-available" basis without warranties of any kind, whether express or implied.
            </p>
          </section>

          <section id="governing-law" className="scroll-mt-32">
            <h2 className="text-[24px] font-bold text-white mb-4">8. Governing Law & Dispute Resolution</h2>
            <p className="mb-4">
              These Terms and your use of the platform are governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law principles.
            </p>
            <p>
              Any legal action or dispute arising out of or relating to these Terms shall be resolved exclusively through binding arbitration in London, United Kingdom. By using the platform, you waive any right to participate in a class action lawsuit or class-wide arbitration.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
