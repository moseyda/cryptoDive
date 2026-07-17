import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ExchangeWidget from '../components/ExchangeWidget';
import MarketTrends from '../components/MarketTrends';
import LearnCrypto from '../components/LearnCrypto';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ExchangeWidget />
      <MarketTrends />
      <LearnCrypto />
      <FAQ />
      <Footer />
    </>
  );
}
