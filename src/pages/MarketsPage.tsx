import { useState } from 'react';
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SparklineChart from '../components/SparklineChart';
import { useAllMarkets } from '../hooks/useAllMarkets';
import { useNews } from '../hooks/useNews';

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
  const [expandedCoinId, setExpandedCoinId] = useState<string | null>(null);

  // Map local categories (gainers/losers) to 'all' for the API
  const apiCategory = ['all', 'gainers', 'losers'].includes(activeCategory) ? 'all' : activeCategory;
  
  const { coins, loading: coinsLoading, error: coinsError } = useAllMarkets(apiCategory);
  const { news, loading: newsLoading, error: newsError } = useNews();

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

      <main className="flex-1 w-full max-w-[1500px] mx-auto px-4 pt-28 pb-12 relative z-10">
        {/* Ambient Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00ffa0]/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
        <div className="absolute top-[50%] left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

        <div className="mb-8">
          <h1 className="text-[32px] md:text-[44px] font-bold mb-4">Markets Overview</h1>
          <p className="text-white/60 text-[16px] md:text-[18px] max-w-2xl">
            Explore the top cryptocurrencies. Filter by category, track daily gainers, and catch up on the latest financial news.
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
                className={`px-4 py-2 rounded-[8px] text-[14px] font-semibold transition-all duration-300 ${
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
              className="w-full h-11 bg-[#000625] border border-gray-700/50 rounded-[8px] pl-11 pr-4 text-white text-[14px] outline-none focus:border-[#00ffa0]/50 transition-colors placeholder-white/30"
            />
          </div>
        </div>

        {/* Phase 3: Split Grid Layout */}
        <div className="flex flex-col xl:flex-row gap-8 items-start">
          
          {/* Left Column: Crypto Table */}
          <div className="w-full xl:w-[70%] bg-[#101428]/40 border border-gray-800/50 rounded-3xl p-4 md:p-6 backdrop-blur-sm">
            <h2 className="text-[20px] font-bold mb-6 text-white flex items-center gap-3">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </div>
              Live Market Data
            </h2>

            {coinsLoading && displayCoins.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="w-10 h-10 border-4 border-[#00ffa0]/20 border-t-[#00ffa0] rounded-full animate-spin mb-4"></div>
                <div className="text-white/50 text-[16px]">Loading market data...</div>
              </div>
            )}

            {coinsError && displayCoins.length === 0 && !coinsLoading && (
              <div className="text-center text-red-500 py-20 text-[18px]">Error: {coinsError}</div>
            )}

            {displayCoins.length === 0 && !coinsLoading && !coinsError && (
              <div className="text-center text-white/50 py-20 text-[18px]">No coins found for "{searchQuery}".</div>
            )}

            {displayCoins.length > 0 && (
              <div className="flex flex-col w-full">
                {/* Table Header */}
                <div className="hidden md:flex items-center px-4 py-4 text-white/50 text-[14px] md:text-[16px] font-medium border-b border-gray-700/50">
                  <div className="w-[8%]">#</div>
                  <div className="w-[28%]">Name</div>
                  <div className="w-[15%] text-right">Price</div>
                  <div className="w-[15%] text-right">Change</div>
                  <div className="w-[20%] text-right">Market Cap</div>
                  <div className="w-[14%] text-center">Chart (7d)</div>
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
                      notation: 'compact',
                      maximumFractionDigits: 2
                    }).format(coin.market_cap || 0);

                    return (
                      <div key={coin.id} className="flex flex-col bg-transparent hover:bg-white/5 rounded-xl transition-colors border border-transparent hover:border-white/10 overflow-hidden">
                        {/* Main Row */}
                        <div 
                          onClick={() => setExpandedCoinId(expandedCoinId === coin.id ? null : coin.id)}
                          className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 group cursor-pointer w-full"
                        >
                          {/* Rank */}
                          <div className="hidden md:block w-[8%] text-white/40 font-medium">
                          {index + 1}
                        </div>

                        {/* Coin Info */}
                        <div className="flex items-center gap-4 w-full md:w-[28%] mb-4 md:mb-0">
                          <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" />
                          <div className="flex flex-col">
                            <span className="text-white text-[16px] font-semibold truncate max-w-[150px]">{coin.name}</span>
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
                          <div className="w-full md:w-[14%] flex justify-center mt-4 md:mt-0">
                            <SparklineChart 
                              data={coin.sparkline_in_7d?.price || []} 
                              color={chartColor} 
                              width={80} 
                              height={30} 
                            />
                          </div>
                        </div>

                        {/* Expandable TradingView Chart */}
                        {expandedCoinId === coin.id && (
                          <div className="w-full h-[400px] border-t border-gray-800/50 p-4 bg-[#0a0e27] animate-in slide-in-from-top-2 fade-in duration-300">
                            <AdvancedRealTimeChart 
                              theme="dark" 
                              symbol={`${coin.symbol.toUpperCase()}USD`} 
                              autosize 
                              hide_side_toolbar={false}
                              allow_symbol_change={false}
                              backgroundColor="#0a0e27"
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: News Feed */}
          <div className="w-full xl:w-[30%] bg-[#101428]/40 border border-gray-800/50 rounded-3xl p-4 md:p-6 backdrop-blur-sm sticky top-24">
            <h2 className="text-[20px] font-bold mb-6 text-white flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
              </svg>
              Latest Financial News
            </h2>

            {newsLoading && news.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="w-8 h-8 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mb-4"></div>
                <div className="text-white/50 text-[14px]">Fetching latest headlines...</div>
              </div>
            )}

            {newsError && news.length === 0 && !newsLoading && (
              <div className="text-center text-red-500 py-10 text-[14px]">Error: {newsError}</div>
            )}

            {news.length > 0 && (
              <div className="flex flex-col gap-4 overflow-y-auto custom-scrollbar max-h-[800px] pr-2">
                {news.map((article) => {
                  const date = new Date(article.published_on * 1000);
                  const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                  
                  return (
                    <a 
                      key={article.id} 
                      href={article.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col gap-3 p-4 bg-[#000625]/50 border border-gray-800 rounded-2xl hover:border-blue-500/50 hover:bg-[#000625] transition-all group"
                    >
                      <div className="flex items-center justify-between text-[12px] text-white/50 font-medium">
                        <div className="flex items-center gap-2">
                          <img src={article.source_info.img} alt={article.source_info.name} className="w-4 h-4 rounded-full bg-white" />
                          <span className="text-blue-400">{article.source_info.name}</span>
                        </div>
                        <span>{timeString}</span>
                      </div>
                      
                      <h3 className="text-white text-[15px] font-semibold leading-snug group-hover:text-blue-400 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <div className="flex gap-3">
                        <p className="text-white/60 text-[13px] line-clamp-3 flex-1">
                          {article.body}
                        </p>
                        {article.imageurl && (
                          <img 
                            src={article.imageurl} 
                            alt="News thumbnail" 
                            className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
                          />
                        )}
                      </div>
                    </a>
                  );
                })}
              </div>
            )}
          </div>

        </div>
      </main>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
