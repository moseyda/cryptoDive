import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SparklineChart from '../components/SparklineChart';
import { useAllMarkets } from '../hooks/useAllMarkets';

const CATEGORIES = [
  { id: 'all', label: 'All Crypto' },
  { id: 'gainers', label: 'Top Gainers' },
  { id: 'losers', label: 'Top Losers' },
  { id: 'decentralized-finance-defi', label: 'DeFi' },
  { id: 'smart-contract-platform', label: 'Layer 1' },
];

export default function MarketsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Map local categories (gainers/losers) to 'all' for the API
  const apiCategory = ['all', 'gainers', 'losers'].includes(activeCategory) ? 'all' : activeCategory;
  
  const { coins, loading, error } = useAllMarkets(apiCategory);

  // Apply client-side filters and sorts
  let displayCoins = [...coins];
  
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    displayCoins = displayCoins.filter(c => 
      c.name.toLowerCase().includes(q) || 
      c.symbol.toLowerCase().includes(q)
    );
  }

  if (activeCategory === 'gainers') {
    displayCoins.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
  } else if (activeCategory === 'losers') {
    displayCoins.sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h);
  }

  return (
    <div className="min-h-screen bg-[#000625] text-white font-sans overflow-x-clip flex flex-col">
      <Navbar />

      <main className="flex-1 w-full max-w-[1350px] mx-auto px-4 py-12 relative z-10">
        {/* Ambient Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00ffa0]/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

        <div className="mb-8">
          <h1 className="text-[32px] md:text-[44px] font-bold mb-4">Markets Overview</h1>
          <p className="text-white/60 text-[16px] md:text-[18px] max-w-2xl">
            Explore the top cryptocurrencies. Filter by category, track daily gainers, and find specific assets.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8 bg-[#101428]/80 p-4 rounded-2xl border border-gray-800/50 backdrop-blur-md">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-[14px] font-semibold transition-all duration-300 ${
                  activeCategory === cat.id 
                    ? 'bg-[#00ffa0] text-[#000625] shadow-[0_0_15px_rgba(0,255,160,0.4)]' 
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="w-full lg:w-72 relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input
              type="text"
              placeholder="Search coin name or symbol..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 bg-[#000625] border border-gray-700/50 rounded-full pl-11 pr-4 text-white text-[14px] outline-none focus:border-[#00ffa0]/50 transition-colors placeholder-white/30"
            />
          </div>
        </div>

        {/* Phase 2: Enhanced Table */}
        <div className="w-full bg-[#101428]/40 border border-gray-800/50 rounded-3xl p-4 md:p-6 backdrop-blur-sm">
          {loading && displayCoins.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-10 h-10 border-4 border-[#00ffa0]/20 border-t-[#00ffa0] rounded-full animate-spin mb-4"></div>
              <div className="text-white/50 text-[16px]">Loading market data...</div>
            </div>
          )}

          {error && displayCoins.length === 0 && !loading && (
            <div className="text-center text-red-500 py-20 text-[18px]">Error: {error}</div>
          )}

          {displayCoins.length === 0 && !loading && !error && (
            <div className="text-center text-white/50 py-20 text-[18px]">No coins found for "{searchQuery}".</div>
          )}

          {displayCoins.length > 0 && (
            <div className="flex flex-col w-full">
              {/* Table Header */}
              <div className="hidden md:flex items-center px-4 py-4 text-white/50 text-[14px] md:text-[16px] font-medium border-b border-gray-700/50">
                <div className="w-[8%]">#</div>
                <div className="w-[30%]">Name</div>
                <div className="w-[15%] text-right">Price</div>
                <div className="w-[15%] text-right">Change (24h)</div>
                <div className="w-[20%] text-right">Market Cap</div>
                <div className="w-[12%] text-center">Chart (7d)</div>
              </div>

              {/* Coin Rows */}
              <div className="flex flex-col gap-2 mt-4">
                {displayCoins.map((coin, index) => {
                  const isPositive = coin.price_change_percentage_24h >= 0;
                  const changeColor = isPositive ? 'text-[#00ffa0]' : 'text-[#c30000]';
                  const chartColor = isPositive ? '#00ffa0' : '#c30000';
                  const formattedPrice = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(coin.current_price);
                  
                  const formattedChange = (isPositive ? '+' : '') + coin.price_change_percentage_24h.toFixed(2) + '%';
                  
                  const formattedMarketCap = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    maximumFractionDigits: 0
                  }).format(coin.market_cap || 0);

                  return (
                    <div 
                      key={coin.id}
                      className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-transparent hover:bg-white/5 rounded-xl transition-colors group cursor-pointer border border-transparent hover:border-white/10"
                    >
                      {/* Rank */}
                      <div className="hidden md:block w-[8%] text-white/40 font-medium">
                        {index + 1}
                      </div>

                      {/* Coin Info */}
                      <div className="flex items-center gap-4 w-full md:w-[30%] mb-4 md:mb-0">
                        <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" />
                        <div className="flex flex-col">
                          <span className="text-white text-[16px] font-semibold">{coin.name}</span>
                          <span className="text-white/50 text-[14px] uppercase font-medium">{coin.symbol}</span>
                        </div>
                      </div>

                      {/* Mobile Labels */}
                      <div className="flex md:hidden w-full justify-between mb-2">
                        <span className="text-white/50">Price</span>
                        <span className="text-white font-semibold text-[16px]">{formattedPrice}</span>
                      </div>

                      {/* Price (Desktop) */}
                      <div className="hidden md:block w-[15%] text-right text-white text-[16px] font-semibold">
                        {formattedPrice}
                      </div>

                      {/* Mobile Labels */}
                      <div className="flex md:hidden w-full justify-between mb-2">
                        <span className="text-white/50">Change</span>
                        <span className={changeColor + " font-semibold text-[16px]"}>{formattedChange}</span>
                      </div>

                      {/* Change % (Desktop) */}
                      <div className={`hidden md:block w-[15%] text-right text-[16px] font-semibold ${changeColor}`}>
                        {formattedChange}
                      </div>

                      {/* Market Cap (Desktop Only) */}
                      <div className="hidden md:block w-[20%] text-right text-white text-[16px] font-medium">
                        {formattedMarketCap}
                      </div>

                      {/* Chart */}
                      <div className="w-full md:w-[12%] flex justify-center mt-4 md:mt-0">
                        <SparklineChart 
                          data={coin.sparkline_in_7d?.price || []} 
                          color={chartColor} 
                          width={80} 
                          height={30} 
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </main>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
