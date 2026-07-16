import { BookOpen, Coins, TrendingUp, Briefcase } from 'lucide-react';

const CATEGORIES = [
  { id: 'learn', label: 'Learn Crypto', icon: BookOpen, active: true },
  { id: 'earn', label: 'Learn Earn', icon: Coins, active: false },
  { id: 'trade', label: 'How To Trade', icon: TrendingUp, active: false },
  { id: 'portfolio', label: 'Build Portfolio', icon: Briefcase, active: false },
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
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-20 relative z-20">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-white text-[32px] md:text-[58px] font-medium leading-tight mb-6">
          Let’s Know How Crypto Works
        </h2>
        <p className="text-white/75 text-[18px] md:text-[24px] max-w-4xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              className={`flex flex-col items-center justify-center p-8 rounded-[40px] md:rounded-[55px] transition-all group ${
                cat.active 
                  ? 'bg-[#00ffa0]/10 border border-[#00ffa0] shadow-[0_0_30px_rgba(0,255,160,0.15)]' 
                  : 'bg-[#00ffa0]/5 border border-transparent hover:bg-[#00ffa0]/10'
              }`}
            >
              <div className="w-[70px] md:w-[91px] h-[70px] md:h-[91px] rounded-[20px] bg-[#00ffa0]/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon className="text-[#00ffa0] w-8 h-8 md:w-10 md:h-10" />
              </div>
              <span className={`text-[18px] md:text-[24px] font-semibold ${cat.active ? 'text-[#00ffa0]' : 'text-white/80 group-hover:text-[#00ffa0]'}`}>
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ARTICLES.map((article) => (
          <div 
            key={article.id}
            className="flex flex-col items-center text-center bg-[#00ffa0]/5 border border-[#00ffa0]/10 rounded-[45px] p-10 hover:bg-[#00ffa0]/10 transition-colors"
          >
            <h3 className="text-white text-[22px] md:text-[24px] font-semibold mb-4 leading-snug h-[60px] flex items-center">
              {article.title}
            </h3>
            <p className="text-white/60 text-[18px] md:text-[20px] mb-8 line-clamp-2">
              {article.desc}
            </p>
            <button className="mt-auto px-8 py-3 rounded-full border border-[#00ffa0] bg-[#00ffa0]/10 text-[#00ffa0] text-[18px] md:text-[20px] font-semibold hover:bg-[#00ffa0] hover:text-black transition-colors w-[203px]">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
