import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

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
    <section className="w-full max-w-7xl mx-auto px-4 py-20 relative z-20">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="bg-[#00ffa0]/10 border border-[#00ffa0]/30 text-[#00ffa0] px-6 py-2 rounded-full font-medium text-[16px] mb-6 inline-flex">
          FAQs
        </div>
        <h2 className="text-white text-[32px] md:text-[58px] font-medium leading-tight mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-white/75 text-[18px] md:text-[24px] max-w-3xl mx-auto">
          Follow design trends and continually update your skills by learning new tools and techniques.
        </p>
      </div>

      {/* Accordion Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
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
                <span className={`text-[20px] md:text-[24px] font-medium transition-colors ${isExpanded ? 'text-[#00ffa0]' : 'text-white group-hover:text-[#00ffa0]'}`}>
                  {faq.question}
                </span>
                <span className={`ml-6 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-colors ${isExpanded ? 'bg-[#00ffa0] text-black' : 'bg-[#00ffa0]/10 text-[#00ffa0] group-hover:bg-[#00ffa0]/20'}`}>
                  {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-white/60 text-[16px] md:text-[18px] leading-relaxed pr-10">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
