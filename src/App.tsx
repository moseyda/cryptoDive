import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExchangeWidget from './components/ExchangeWidget';
import MarketTrends from './components/MarketTrends';
import LearnCrypto from './components/LearnCrypto';
import FAQ from './components/FAQ';

export default function App() {
  return (
    <div className="min-h-screen bg-[#000625] text-white font-sans overflow-x-hidden selection:bg-[#00ffa0]/30">
      <Navbar />
      <Hero />
      <ExchangeWidget />
      <MarketTrends />
      <LearnCrypto />
      <FAQ />
    </div>
  );
}
