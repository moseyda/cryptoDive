import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SparklineChart from '../components/SparklineChart';
import { useAllMarkets } from '../hooks/useAllMarkets';

export default function MarketsPage() {
  const { coins, loading, error } = useAllMarkets('all');

  return (
    <div className="min-h-screen bg-[#000625] text-white font-sans overflow-x-clip flex flex-col">
      <Navbar />

      <main className="flex-1 w-full max-w-[1350px] mx-auto px-4 py-12 relative z-10">
        {/* Ambient Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00ffa0]/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

        <div className="mb-12">
          <h1 className="text-[32px] md:text-[44px] font-bold mb-4">Markets Overview</h1>
          <p className="text-white/60 text-[16px] md:text-[18px] max-w-2xl">
            Explore the top 100 cryptocurrencies by market capitalization. View real-time prices, 24h changes, and 7-day trend charts.
          </p>
        </div>

        {/* Phase 1: Simple Table */}
        <div className="w-full bg-[#101428]/40 border border-gray-800/50 rounded-3xl p-4 md:p-6 backdrop-blur-sm">
          {loading && coins.length === 0 && (
            <div className="text-center text-white/50 py-20 text-[18px]">Loading market data...</div>
          )}

          {error && coins.length === 0 && (
            <div className="text-center text-red-500 py-20 text-[18px]">Error: {error}</div>
          )}

          {coins.length > 0 && (
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
                {coins.map((coin, index) => {
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
                      className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-transparent hover:bg-white/5 rounded-xl transition-colors group cursor-pointer"
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
