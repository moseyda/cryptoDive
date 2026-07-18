import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LEARN_CONTENT = [
  {
    id: 'what-is-crypto',
    title: 'What is cryptocurrency?',
    content: 'Cryptocurrency is a type of digital money that uses cryptography to secure transactions and control the creation of new coins. Unlike traditional currencies, most cryptocurrencies operate on decentralised networks rather than being managed by a bank or government. People use cryptocurrency to send payments, invest, or interact with online services. Well known examples include Bitcoin, Ethereum and Solana. Each cryptocurrency has its own purpose, technology and level of adoption, so it is important to understand what you are buying before investing.',
    placeholderLink: '#placeholder-1'
  },
  {
    id: 'what-is-blockchain',
    title: 'What is a blockchain?',
    content: 'A blockchain is a digital ledger that records transactions across a network of computers. Instead of storing records in one central location, copies of the ledger are shared across many participants, making it difficult to alter past transactions. New transactions are grouped into blocks, which are linked together in chronological order to form a chain. Blockchains are designed to provide transparency and security. Bitcoin, Ethereum and many other cryptocurrencies rely on blockchain technology to verify and record transactions.',
    placeholderLink: '#placeholder-2'
  },
  {
    id: 'what-is-wallet',
    title: 'What is a cryptocurrency wallet?',
    content: 'A cryptocurrency wallet is a tool that allows you to store and manage the cryptographic keys needed to access your digital assets. Wallets do not usually store the cryptocurrency itself. Instead, they hold the private keys that prove ownership of funds recorded on the blockchain. Software wallets, such as mobile or desktop apps, are convenient for everyday use, while hardware wallets provide extra security by keeping private keys offline. Popular examples include MetaMask, Trust Wallet and Ledger hardware wallets.',
    placeholderLink: '#placeholder-3'
  },
  {
    id: 'how-to-invest',
    title: 'How do I start investing in cryptocurrency?',
    content: 'Start by learning the basics of how cryptocurrencies and blockchain technology work. Choose a reputable cryptocurrency exchange, create an account and complete any required identity checks. Begin with an amount you can afford to lose and consider well established cryptocurrencies before exploring higher risk options. Store your assets securely, especially if you plan to hold them for a long time. Avoid making decisions based on social media hype or fear of missing out, and always carry out your own research before investing.',
    placeholderLink: '#placeholder-4'
  },
  {
    id: 'how-to-secure',
    title: 'How do I keep my cryptocurrency secure?',
    content: 'Protect your cryptocurrency by using strong, unique passwords and enabling two factor authentication wherever possible. Never share your private keys or recovery phrase with anyone, and store them securely offline. For larger holdings, consider using a hardware wallet rather than leaving funds on an exchange. Be cautious of phishing emails, fake websites and investment scams that promise guaranteed returns. Regularly update your devices and wallet software to benefit from the latest security improvements.',
    placeholderLink: '#placeholder-5'
  },
  {
    id: 'crypto-risks',
    title: 'What are the risks of crypto?',
    content: 'Cryptocurrency can be highly volatile, with prices sometimes changing significantly within hours. There is also the risk of scams, hacking, fraudulent projects and phishing attacks. Unlike traditional bank accounts, cryptocurrency transactions are usually irreversible, so mistakes or theft can result in permanent losses. Some projects fail because of poor development or lack of adoption. Regulations may also change over time, affecting how cryptocurrencies can be bought, sold or used. Never invest more than you are prepared to lose.',
    placeholderLink: '#placeholder-6'
  }
];

export default function LearnPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        // Add a slight delay to allow rendering, and offset for the fixed navbar
        setTimeout(() => {
          const yOffset = -100; 
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-[#000625] text-white font-sans overflow-x-clip flex flex-col">
      <Navbar />

      <main className="flex-1 w-full max-w-[1000px] mx-auto px-4 pt-32 pb-24 relative z-10">
        {/* Ambient Background Glows */}
        <div className="fixed top-20 right-[-10%] w-[500px] h-[500px] bg-[#00ffa0]/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
        <div className="fixed bottom-0 left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

        <div className="text-center mb-20">
          <h1 className="text-[36px] md:text-[56px] font-extrabold mb-6 leading-tight">
            How <span className="text-[#00ffa0]">Crypto</span> Works
          </h1>
          <p className="text-white/60 text-[18px] md:text-[20px] max-w-2xl mx-auto leading-relaxed">
            Your comprehensive guide to understanding the foundations of digital currencies, blockchain technology, and how to safely navigate the web3 ecosystem.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {LEARN_CONTENT.map((section, index) => (
            <article 
              key={section.id} 
              id={section.id}
              className="bg-[#101428]/60 border border-gray-800/60 rounded-[30px] p-8 md:p-12 backdrop-blur-md transition-all hover:border-[#00ffa0]/30 hover:bg-[#101428]/80 group scroll-mt-28"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#00ffa0]/10 text-[#00ffa0] flex items-center justify-center text-[20px] font-bold shrink-0 group-hover:bg-[#00ffa0] group-hover:text-black transition-colors">
                  {index + 1}
                </div>
                <h2 className="text-[24px] md:text-[32px] font-bold text-white leading-tight">
                  {section.title}
                </h2>
              </div>
              
              <p className="text-white/70 text-[16px] md:text-[18px] leading-relaxed mb-8">
                {section.content}
              </p>

              <div className="flex justify-start">
                <a 
                  href={section.placeholderLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#00ffa0] text-[16px] font-semibold hover:text-white transition-colors"
                >
                  Still have questions?
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
