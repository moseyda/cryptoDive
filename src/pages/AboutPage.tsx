import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#000625] text-white font-sans overflow-x-clip flex flex-col">
      <Navbar />

      <main className="flex-1 w-full max-w-[1000px] mx-auto px-4 pt-32 pb-24 relative z-10">
        {/* Ambient Background Glows */}
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#00ffa0]/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

        <div className="text-center mb-16">
          <h1 className="text-[36px] md:text-[56px] font-extrabold mb-6 leading-tight">
            About <span className="text-[#00ffa0]">Us</span>
          </h1>
          <p className="text-white/60 text-[18px] md:text-[20px] max-w-2xl mx-auto leading-relaxed">
            We are on a mission to democratize finance by building the most secure, transparent, and user-friendly cryptocurrency platform in the world.
          </p>
        </div>

        <div className="bg-[#101428]/60 border border-gray-800/60 rounded-[30px] p-8 md:p-12 backdrop-blur-md">
          <h2 className="text-[24px] md:text-[32px] font-bold text-white mb-6">Our Vision</h2>
          <p className="text-white/70 text-[16px] md:text-[18px] leading-relaxed mb-8">
            Cryptocurrency represents the future of global finance, and we believe it should be accessible to everyone, everywhere. By leveraging cutting-edge blockchain technology and maintaining an unyielding commitment to security, we are paving the way for a decentralized financial ecosystem.
          </p>
          
          <h2 className="text-[24px] md:text-[32px] font-bold text-white mb-6">Our Team</h2>
          <p className="text-white/70 text-[16px] md:text-[18px] leading-relaxed">
            Built by a group of passionate engineers, designers, and crypto enthusiasts, CryptoDive combines years of experience in traditional finance with deep expertise in web3 technologies. We constantly iterate and innovate to provide you with the best tools to manage, trade, and learn about your digital assets.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
