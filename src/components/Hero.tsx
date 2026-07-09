export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 flex flex-col items-center justify-center text-center px-4 w-full max-w-[1728px] mx-auto min-h-[800px]">
      {/* Background ambient light blue circle highlights */}
      <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-blue-500/20 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-[40%] right-[15%] w-[500px] h-[500px] bg-cyan-400/20 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      
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
    </section>
  );
}
