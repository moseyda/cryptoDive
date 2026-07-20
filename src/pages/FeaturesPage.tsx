import { Link } from 'react-router-dom';
import { LineChart, Shield, Zap, BookOpen, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FEATURES = [
  {
    id: 'analytics',
    icon: LineChart,
    title: 'Real-Time Market Analytics',
    desc: 'Track live prices and volume with our highly optimised dashboard. Make informed decisions using advanced charting tools tailored for every level of trader.'
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Bank-Grade Security',
    desc: 'Your digital assets are protected using industry-leading encryption and decentralised networks. We prioritise your peace of mind above all else.'
  },
  {
    id: 'transfers',
    icon: Zap,
    title: 'Instant Global Transfers',
    desc: 'Send and receive crypto across the globe in seconds. Enjoy borderless finance without hidden fees or unnecessary delays.'
  },
  {
    id: 'learning',
    icon: BookOpen,
    title: 'Comprehensive Learning Hub',
    desc: 'Access our curated educational resources to familiarise yourself with web3 technologies and the fundamentals of blockchain.'
  }
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#000625] text-white font-sans overflow-x-clip flex flex-col">
      <Navbar />

      <main className="flex-1 w-full max-w-[1350px] mx-auto px-4 pt-32 pb-24 relative z-10">
        {/* Ambient Background Glows */}
        <div className="absolute top-[10%] right-[0%] w-[500px] h-[500px] bg-[#00ffa0]/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

        {/* Hero Section */}
        <div className="text-center mb-24 mt-8">
          <h1 className="text-[40px] md:text-[64px] font-extrabold mb-6 leading-tight">
            Powerful Features, <br className="hidden md:block" />
            <span className="text-[#00ffa0]">Optimised</span> for You
          </h1>
          <p className="text-white/60 text-[18px] md:text-[22px] max-w-2xl mx-auto leading-relaxed">
            Discover the tools designed to help you navigate the decentralised financial ecosystem with confidence and ease.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 max-w-[1100px] mx-auto">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.id}
                className="group bg-[#101428]/60 border border-gray-800/60 rounded-[35px] p-10 md:p-12 backdrop-blur-md transition-all duration-300 hover:border-[#00ffa0]/30 hover:bg-[#101428]/80 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Subtle internal glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ffa0]/5 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="w-16 h-16 rounded-full bg-[#00ffa0]/10 text-[#00ffa0] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-[24px] md:text-[28px] font-bold text-white mb-4 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-[16px] md:text-[18px] leading-relaxed relative z-10">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="relative max-w-[1100px] mx-auto bg-gradient-to-r from-[#00ffa0]/20 to-blue-500/20 rounded-[40px] p-12 md:p-16 text-center border border-[#00ffa0]/30 overflow-hidden backdrop-blur-sm">
          <div className="absolute inset-0 bg-[#000625]/40 -z-10" />
          
          <h2 className="text-[32px] md:text-[48px] font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-white/70 text-[18px] md:text-[20px] max-w-xl mx-auto mb-10">
            Join thousands of users who have already revolutionised the way they manage their digital assets.
          </p>
          
          <Link 
            to="/markets" 
            className="inline-flex items-center gap-3 bg-[#00ffa0] text-black px-8 py-4 rounded-[8px] font-bold text-[18px] hover:bg-white transition-colors duration-300"
          >
            Explore Markets
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
