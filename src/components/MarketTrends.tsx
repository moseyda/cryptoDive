import { useMarketTrends } from '../hooks/useMarketTrends';
import SparklineChart from './SparklineChart';

export default function MarketTrends() {
  const { trends, loading, error } = useMarketTrends();

  const handleTradeClick = () => {
    const element = document.getElementById('exchange-widget');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full max-w-[1728px] mx-auto px-4 py-20 relative z-20">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-[#00ffa0] text-[20px] md:text-[24px] font-medium mb-4">
          Trade Crypto
        </h2>
        <h3 className="text-white text-[32px] md:text-[58px] font-medium text-center leading-tight">
          Crypto Market Trade And Metrics
        </h3>
      </div>

      {loading && trends.length === 0 && (
        <div className="text-center text-white/50 py-10">Loading market data...</div>
      )}

      {error && trends.length === 0 && (
        <div className="text-center text-red-500 py-10">Error: {error}</div>
      )}

      {trends.length > 0 && (
        <div className="flex flex-col gap-4 w-full">
          {/* Table Header (hidden on mobile, visible on md+) */}
          <div className="hidden md:flex items-center px-8 py-4 text-white/50 text-[18px] font-medium border-b border-gray-700/50">
            <div className="w-[30%]">Name</div>
            <div className="w-[20%] text-center">Change (24h)</div>
            <div className="w-[20%] text-right">Price</div>
            <div className="w-[15%] text-center">Chart (7d)</div>
            <div className="w-[15%] text-right">Action</div>
          </div>

          {/* Coin Rows */}
          {trends.map((coin) => {
            const isPositive = coin.price_change_percentage_24h >= 0;
            const changeColor = isPositive ? 'text-[#00ffa0]' : 'text-[#c30000]';
            const chartColor = isPositive ? '#00ffa0' : '#c30000';
            const formattedPrice = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(coin.current_price);
            
            const formattedChange = (isPositive ? '+' : '') + coin.price_change_percentage_24h.toFixed(2) + '%';

            return (
              <div 
                key={coin.id}
                className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:px-8 md:py-6 bg-[#101428]/40 border border-gray-800/50 rounded-3xl hover:bg-[#101428]/80 hover:border-[#00ffa0]/30 transition-all group"
              >
                {/* Coin Info */}
                <div className="flex items-center gap-4 w-full md:w-[30%] mb-4 md:mb-0">
                  <img src={coin.image} alt={coin.name} className="w-12 h-12 rounded-full bg-white/5 p-1" />
                  <div className="flex flex-col">
                    <span className="text-white text-[20px] md:text-[24px] font-semibold">{coin.name}</span>
                    <span className="text-white/50 text-[16px] md:text-[20px] uppercase font-semibold">{coin.symbol}</span>
                  </div>
                </div>

                {/* Mobile labels */}
                <div className="flex md:hidden w-full justify-between mb-2">
                  <span className="text-white/50">Change</span>
                  <span className={changeColor + " font-semibold text-[18px]"}>{formattedChange}</span>
                </div>
                
                {/* Change % (Desktop) */}
                <div className={`hidden md:block w-[20%] text-center text-[20px] font-semibold ${changeColor}`}>
                  {formattedChange}
                </div>

                {/* Mobile labels */}
                <div className="flex md:hidden w-full justify-between mb-4">
                  <span className="text-white/50">Price</span>
                  <span className="text-white font-semibold text-[18px]">{formattedPrice}</span>
                </div>

                {/* Price (Desktop) */}
                <div className="hidden md:block w-[20%] text-right text-white text-[20px] font-semibold">
                  {formattedPrice}
                </div>

                {/* Chart */}
                <div className="w-full md:w-[15%] flex justify-center mb-6 md:mb-0">
                  <SparklineChart 
                    data={coin.sparkline_in_7d?.price || []} 
                    color={chartColor} 
                    width={100} 
                    height={35} 
                  />
                </div>

                {/* Action */}
                <div className="w-full md:w-[15%] flex justify-end">
                  <button 
                    onClick={handleTradeClick}
                    className="w-full md:w-auto bg-[#00ffa0]/10 text-[#00ffa0] text-[18px] md:text-[20px] font-semibold px-8 py-3 rounded-full hover:bg-[#00ffa0] hover:text-black transition-colors"
                  >
                    Trade
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Footer Action */}
      <div className="flex justify-center mt-12">
        <button className="flex items-center gap-4 md:gap-8 opacity-50 hover:opacity-100 transition-opacity duration-300 group focus:outline-none">
          <div className="w-[100px] md:w-[250px] h-[1px] bg-gradient-to-r from-transparent to-[#00ffa0]/50" />
          
          <span className="text-[#00ffa0] text-[16px] md:text-[18px] font-semibold group-hover:text-white transition-colors">
            View Other Crypto
          </span>

          <div className="w-[100px] md:w-[250px] h-[1px] bg-gradient-to-l from-transparent to-[#00ffa0]/50" />
        </button>
      </div>
    </section>
  );
}
