import { useState, useEffect, useRef } from 'react';
import { BookOpen, Coins, TrendingUp, Briefcase } from 'lucide-react';

const CATEGORIES = [
  { id: 'learn', label: 'Learn Crypto', icon: BookOpen },
  { id: 'earn', label: 'Learn Earn', icon: Coins },
  { id: 'trade', label: 'How To Trade', icon: TrendingUp },
  { id: 'portfolio', label: 'Build Portfolio', icon: Briefcase },
];

const ARTICLES = [
  { id: 1, title: 'What is cryptocurrency?', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data' },
  { id: 2, title: 'What is a blockchain?', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data' },
  { id: 3, title: 'What is a cryptocurrency wallet?', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data' },
  { id: 4, title: 'How do I start investing in cryptocurrency?', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data' },
  { id: 5, title: 'How do I keep my cryptocurrency secure?', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data' },
  { id: 6, title: 'What are the risks of crypto?', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data' },
];

export default function LearnCrypto() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    if (activeIndex >= CATEGORIES.length - 1) return; // Stop at the last item

    const timer = setTimeout(() => {
      setActiveIndex((current) => current + 1);
    }, 3000);

    return () => clearTimeout(timer);
  }, [hasStarted, activeIndex]);

  return (
    <section ref={sectionRef} className="w-full relative z-20 py-20 mt-32 md:mt-40">
      <div className="w-full max-w-[1728px] mx-auto px-4 relative">
        {/* Ambient Background Glow */}
        <div className="absolute top-[50%] right-[-5%] md:right-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#00ffa0]/10 rounded-full blur-[120px] md:blur-[180px] -z-10 pointer-events-none" />

        <style>{`
          @keyframes fillBar {
            0% { width: 0%; }
            100% { width: 100%; }
          }
          .animate-fill-bar {
            animation: fillBar 3s linear forwards;
          }
        `}</style>

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-white text-[32px] md:text-[58px] font-medium leading-tight mb-6">
          Let's Know How Crypto Works
        </h2>
        <p className="text-white/75 text-[18px] md:text-[24px] max-w-4xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Animated Progress Categories */}
      <div className="flex flex-wrap md:flex-nowrap w-full gap-4 md:gap-8 mb-16">
        {CATEGORIES.map((cat, index) => {
          const Icon = cat.icon;
          const isActive = index === activeIndex;
          const isPast = index < activeIndex;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveIndex(index)}
              className="flex-1 min-w-[45%] md:min-w-0 flex flex-col items-start gap-4 focus:outline-none group p-4 rounded-2xl hover:bg-[#00ffa0]/5 transition-colors"
            >
              {/* Label & Icon */}
              <div className={`flex items-center gap-3 transition-colors duration-300 ${isActive || isPast ? 'text-[#00ffa0]' : 'text-white/50 group-hover:text-white'}`}>
                <Icon className="w-6 h-6 md:w-8 md:h-8" />
                <span className="text-[16px] md:text-[20px] font-semibold whitespace-nowrap">
                  {cat.label}
                </span>
              </div>
              
              {/* Progress Bar Track (Skeleton) */}
              <div className="w-full h-1.5 md:h-2 bg-white/10 rounded-full overflow-hidden relative">
                {/* Active/Filled Bar */}
                {isActive && (
                  <div 
                    key={`active-${activeIndex}`}
                    className="absolute top-0 left-0 h-full bg-[#00ffa0] rounded-full animate-fill-bar shadow-[0_0_10px_#00ffa0]"
                  />
                )}
                {isPast && (
                  <div className="absolute top-0 left-0 h-full bg-[#00ffa0] rounded-full w-full shadow-[0_0_10px_#00ffa0]" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ARTICLES.map((article) => (
          <div 
            key={article.id}
            className="group relative flex flex-col items-center text-center bg-[#00ffa0]/5 border border-[#00ffa0]/10 rounded-[35px] py-8 px-10 hover:bg-[#00ffa0]/10 transition-colors overflow-hidden"
          >
            <div className="relative z-10 flex flex-col items-center h-full w-full">
              <h3 className="text-white text-[22px] md:text-[24px] font-semibold mb-3 leading-snug min-h-[56px] flex items-center shrink-0">
                {article.title}
              </h3>
              <p className="text-white/60 text-[18px] md:text-[20px] line-clamp-2">
                {article.desc}
              </p>
            </div>

            {/* Fading Blur Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-[70%] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-20">
              <div className="absolute inset-0 backdrop-blur-md [mask-image:linear-gradient(to_top,black_40%,transparent)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000625] via-[#000625]/80 to-transparent opacity-90" />
            </div>

            {/* Hover Button */}
            <button className="absolute bottom-6 z-30 flex items-center justify-center gap-3 md:gap-4 transition-all duration-300 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 w-full px-8 focus:outline-none">
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#00ffa0]/50" />
              
              <span className="text-[#00ffa0] text-[16px] md:text-[18px] font-semibold hover:text-white transition-colors">
                Learn More
              </span>

              <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#00ffa0]/50" />
            </button>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
