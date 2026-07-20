import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, MessageCircle, Phone, ChevronDown } from 'lucide-react';
import Dropdown from '../components/Dropdown';

const CONTACT_METHODS = [
  {
    icon: Mail,
    title: 'Email',
    desc: 'support@cryptodive.com',
    sub: 'Replies within 24 hours'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    desc: 'Available 24/7',
    sub: 'For urgent issues'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    desc: '+44 800 123 4567',
    sub: 'Premium users only'
  }
];

const FAQS = [
  {
    q: 'How do I withdraw my funds?',
    a: "Go to your wallet, select 'Withdraw', enter the destination address, and confirm via 2FA."
  },
  {
    q: 'Are my assets safe?',
    a: "Yes. We use cold storage for 95% of assets and enforce mandatory 2FA on all accounts."
  },
  {
    q: 'I lost my 2FA device.',
    a: "Contact our security team using the form below with your identity verification documents to reset your access."
  },
  {
    q: 'What are the trading fees?',
    a: "We charge a flat 0.1% fee on all spot trades. There are no hidden deposit fees."
  }
];

const CATEGORY_OPTIONS = [
  { value: 'account', label: 'Account Access' },
  { value: 'deposit', label: 'Deposits & Withdrawals' },
  { value: 'trading', label: 'Trading' },
  { value: 'other', label: 'Other' }
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [category, setCategory] = useState('account');

  return (
    <div className="min-h-screen bg-[#000625] text-white font-sans overflow-x-clip flex flex-col">
      <Navbar />

      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 pt-32 pb-24 relative z-10">
        {/* Ambient Glows */}
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-[#00ffa0]/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
        <div className="absolute top-[30%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

        {/* Hero Section */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-[40px] md:text-[64px] font-extrabold mb-6 leading-tight">
            How can we <span className="text-[#00ffa0]">help?</span>
          </h1>
          <p className="text-white/60 text-[18px] md:text-[22px] max-w-2xl mx-auto leading-relaxed">
            Straightforward support when you need it. No fluff, just answers.
          </p>
        </div>

        {/* Quick Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 max-w-[1000px] mx-auto">
          {CONTACT_METHODS.map((method, idx) => {
            const Icon = method.icon;
            return (
              <div 
                key={idx}
                className="bg-[#101428]/60 border border-gray-800/60 rounded-[24px] p-8 backdrop-blur-md transition-all duration-300 hover:border-[#00ffa0]/30 hover:bg-[#101428]/80 hover:-translate-y-1 text-center group"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-[#00ffa0]/10 text-[#00ffa0] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-[20px] font-bold text-white mb-2">{method.title}</h3>
                <p className="text-[#00ffa0] text-[16px] font-medium mb-1">{method.desc}</p>
                <p className="text-white/40 text-[14px]">{method.sub}</p>
              </div>
            );
          })}
        </div>

        {/* FAQ & Form Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-[1100px] mx-auto">
          
          {/* FAQ Accordion */}
          <div>
            <h2 className="text-[28px] font-bold text-white mb-8">Common Questions</h2>
            <div className="space-y-4">
              {FAQS.map((faq, idx) => {
                const isExpanded = openFaq === idx;
                return (
                  <div 
                    key={idx}
                    className={`border-b ${isExpanded ? 'border-[#00ffa0]' : 'border-gray-700/50'} pb-6 transition-colors duration-300`}
                  >
                    <button
                      onClick={() => setOpenFaq(isExpanded ? null : idx)}
                      className="w-full flex items-center justify-between py-4 text-left group focus:outline-none"
                    >
                      <span className={`text-[16px] md:text-[20px] font-medium transition-colors pr-8 ${isExpanded ? 'text-[#00ffa0]' : 'text-white group-hover:text-[#00ffa0]'}`}>
                        {faq.q}
                      </span>
                      <span className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-colors ${isExpanded ? 'bg-[#00ffa0] text-black' : 'bg-[#00ffa0]/10 text-[#00ffa0] group-hover:bg-[#00ffa0]/20'}`}>
                        <ChevronDown size={20} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                      </span>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
                    >
                      <p className="text-white/60 text-[14px] md:text-[16px] leading-relaxed pr-10 lg:pr-20">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Ticket Form */}
          <div>
            <h2 className="text-[28px] font-bold text-white mb-8">Submit a Ticket</h2>
            <form className="bg-[#101428]/60 border border-gray-800/60 rounded-[24px] p-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-5">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[14px] font-medium text-white/60">Name</label>
                    <input 
                      type="text" 
                      placeholder="Jane Doe" 
                      className="w-full bg-[#000625] border border-gray-800/60 rounded-[12px] px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#00ffa0]/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[14px] font-medium text-white/60">Email</label>
                    <input 
                      type="email" 
                      placeholder="jane@example.com" 
                      className="w-full bg-[#000625] border border-gray-800/60 rounded-[12px] px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#00ffa0]/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[14px] font-medium text-white/60">Category</label>
                  <Dropdown 
                    options={CATEGORY_OPTIONS} 
                    value={category} 
                    onChange={setCategory} 
                    align="left" 
                    showSearch={false}
                    fullWidth={true}
                    variant="form"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[14px] font-medium text-white/60">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Describe your issue..." 
                    className="w-full bg-[#000625] border border-gray-800/60 rounded-[12px] px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#00ffa0]/50 transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#00ffa0] hover:bg-white text-black font-bold text-[16px] py-4 rounded-[12px] transition-colors duration-300 mt-2"
                >
                  Submit Ticket
                </button>

              </div>
            </form>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
