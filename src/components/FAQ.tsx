import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    id: 1,
    question: 'What is cryptocurrency?',
    answer: 'Cryptocurrency is a digital or virtual currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend. Many cryptocurrencies are decentralized networks based on blockchain technology.',
  },
  {
    id: 2,
    question: 'How do I start investing in cryptocurrency?',
    answer: 'To start investing, you first need to choose a reputable cryptocurrency exchange. After creating an account and verifying your identity, you can deposit fiat currency (like USD or INR) and use it to purchase digital assets.',
  },
  {
    id: 3,
    question: 'What is a blockchain?',
    answer: 'A blockchain is a distributed digital ledger that stores data of any kind. A blockchain can record information about cryptocurrency transactions, NFT ownership, or Defi smart contracts, ensuring the data cannot be altered retroactively.',
  },
  {
    id: 4,
    question: 'How do I keep my cryptocurrency secure?',
    answer: 'You can keep your cryptocurrency secure by using hardware wallets for long-term storage, enabling Two-Factor Authentication (2FA) on your exchange accounts, and never sharing your private keys or seed phrases with anyone.',
  },
  {
    id: 5,
    question: 'What is a cryptocurrency wallet?',
    answer: 'A cryptocurrency wallet is a software program or physical device that allows you to store your public and private keys and interact with various blockchain networks to monitor your balance, send money, and conduct other operations.',
  },
  {
    id: 6,
    question: 'What are the risks of cryptocurrency?',
    answer: 'Cryptocurrency markets are highly volatile, meaning prices can fluctuate wildly in short periods. Other risks include regulatory changes, cybersecurity threats, and the potential loss of access if you lose your private keys.',
  },
];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="w-full relative z-20 py-20 mt-32 md:mt-40">
      <div className="w-full max-w-[1728px] mx-auto px-4 relative">
        {/* Ambient Background Glows */}
        <div className="absolute top-[10%] left-[-5%] md:left-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#00ffa0]/10 rounded-full blur-[120px] md:blur-[180px] -z-10 pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] md:right-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#00ffa0]/5 rounded-full blur-[120px] md:blur-[180px] -z-10 pointer-events-none" />

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Header Left */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left lg:sticky lg:top-32">
            <h2 className="text-white text-[32px] md:text-[48px] lg:text-[58px] font-medium leading-tight mb-6 lg:whitespace-nowrap">
              Frequently Asked Questions
            </h2>
            <p className="text-white/75 text-[18px] md:text-[24px] max-w-lg">
              Follow design trends and continually update your skills by learning new tools and techniques.
            </p>
          </div>

          {/* Accordion Right Stack */}
          <div className="w-full lg:w-1/2 flex flex-col gap-y-6">
            {FAQS.map((faq) => {
              const isExpanded = expandedId === faq.id;

              return (
                <div 
                  key={faq.id} 
                  className={`border-b ${isExpanded ? 'border-[#00ffa0]' : 'border-gray-700/50'} pb-6 transition-colors duration-300`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex items-center justify-between py-4 text-left group focus:outline-none"
                  >
                    <span className={`text-[20px] md:text-[24px] font-medium transition-colors pr-8 ${isExpanded ? 'text-[#00ffa0]' : 'text-white group-hover:text-[#00ffa0]'}`}>
                      {faq.question}
                    </span>
                    <span className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-colors ${isExpanded ? 'bg-[#00ffa0] text-black' : 'bg-[#00ffa0]/10 text-[#00ffa0] group-hover:bg-[#00ffa0]/20'}`}>
                      <ChevronDown size={20} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </span>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-white/60 text-[16px] md:text-[18px] leading-relaxed pr-10 lg:pr-20">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
