export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 flex flex-col items-center justify-center text-center px-4 w-full max-w-[1728px] mx-auto min-h-[800px]">
      {/* Background ambient light blue circle highlights */}
      <div className="absolute top-[0%] left-[5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#5873FF]/20 blur-[120px] md:blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-[30%] right-[5%] w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-[#5873FF]/15 blur-[100px] md:blur-[150px] rounded-full pointer-events-none z-0"></div>
      
      {/* Floating Crypto Icons */}
      <div className="absolute top-[10%] left-[5%] md:left-[10%] animate-float z-0">
        <img src="/assets/Bitcoin.svg" alt="Bitcoin" className="w-16 h-16 md:w-24 md:h-24 opacity-80 rotate-12 drop-shadow-2xl" />
      </div>
      <div className="absolute top-[15%] right-[5%] md:right-[15%] animate-float-reverse z-0">
        <img src="/assets/Ethereum.svg" alt="Ethereum" className="w-14 h-14 md:w-20 md:h-20 opacity-80 -rotate-12 drop-shadow-2xl" />
      </div>
      <div className="absolute top-[45%] left-[2%] md:left-[8%] animate-float-slow z-0">
        <img src="/assets/BinanceCoin.svg" alt="Binance" className="w-12 h-12 md:w-16 md:h-16 opacity-70 rotate-6 drop-shadow-2xl" />
      </div>
      <div className="absolute top-[50%] right-[2%] md:right-[10%] animate-float-fast z-0">
        <img src="/assets/Tether.svg" alt="Tether" className="w-12 h-12 md:w-20 md:h-20 opacity-70 -rotate-6 drop-shadow-2xl" />
      </div>
      <div className="absolute bottom-[20%] left-[10%] md:left-[20%] animate-float-fast z-0">
        <img src="/assets/Cardano.svg" alt="Cardano" className="w-10 h-10 md:w-16 md:h-16 opacity-60 -rotate-12 drop-shadow-2xl" />
      </div>
      <div className="absolute bottom-[15%] right-[10%] md:right-[22%] animate-float-slow z-0">
        <img src="/assets/Dodge.svg" alt="Doge" className="w-12 h-12 md:w-16 md:h-16 opacity-60 rotate-12 drop-shadow-2xl" />
      </div>
      
      {/* Content Container to ensure it stays above the blur */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Headline */}
        <h1 className="text-[50px] md:text-[70px] lg:text-[95px] font-bold text-[#00ffa0] leading-[1.1] max-w-[900px] mb-8 drop-shadow-[0_0_15px_rgba(0,255,160,0.3)]">
          Secure & Intuitive Crypto Trading
        </h1>
        
        {/* Subtitle */}
        <p className="text-[20px] md:text-[24px] text-white font-normal leading-relaxed max-w-[850px] mb-14 opacity-90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10">
          <button className="bg-[#00ffa0] text-black text-[20px] md:text-[24px] font-semibold px-12 py-5 rounded-[60px] hover:bg-[#00e690] transition-transform transform hover:scale-105 active:scale-95 duration-200">
            Get Started
          </button>
          <button className="border-2 border-[#00ffa0] text-white text-[20px] md:text-[24px] font-semibold px-12 py-5 rounded-[60px] hover:bg-[#00ffa0]/10 transition-transform transform hover:scale-105 active:scale-95 duration-200">
            Start Trading
          </button>
        </div>
      </div>
    </section>
  );
}
