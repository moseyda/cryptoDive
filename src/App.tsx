import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { useCryptoRates } from './hooks/useCryptoRates';
import { formatCurrency } from './utils/currency';

export default function App() {
  const { rates, loading, error } = useCryptoRates();

  return (
    <div className="min-h-screen bg-[#000625] text-white font-sans overflow-x-hidden selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      
      {/* Temporary API Verification Block */}
      <main className="max-w-7xl mx-auto px-6 py-20 relative z-20">
        <div className="bg-[#101428]/80 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
          <h2 className="text-[24px] font-bold text-[#00ffa0] mb-4">Live API Verification (CoinGecko)</h2>
          {loading && <p className="text-gray-400 animate-pulse text-[18px]">Fetching live rates...</p>}
          {error && <p className="text-red-400">Error: {error}</p>}
          {rates && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {Object.entries(rates).map(([coin, prices]) => (
                <div key={coin} className="bg-[#000625] p-6 rounded-xl border border-gray-800">
                  <h3 className="text-xl font-bold capitalize text-white mb-3">{coin}</h3>
                  <p className="text-gray-400 font-medium">INR: <span className="text-blue-400 font-mono tracking-tight">{formatCurrency(prices.inr, 'INR')}</span></p>
                  <p className="text-gray-400 font-medium">USD: <span className="text-green-400 font-mono tracking-tight">{formatCurrency(prices.usd, 'USD')}</span></p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
