import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, MessageCircle, Phone } from 'lucide-react';

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

export default function SupportPage() {
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

      </main>

      <Footer />
    </div>
  );
}
