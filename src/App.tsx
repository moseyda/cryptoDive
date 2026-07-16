import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExchangeWidget from './components/ExchangeWidget';
import MarketTrends from './components/MarketTrends';
import LearnCrypto from './components/LearnCrypto';
import FAQ from './components/FAQ';

export default function App() {
  return (
    <div className="min-h-screen bg-[#000625] text-white font-sans selection:bg-[#00ffa0]/30 [zoom:80%] overflow-x-clip">
      <Navbar />
      <Hero />
      <ExchangeWidget />
      <MarketTrends />
      <LearnCrypto />
      <FAQ />
    </div>
  );
}
