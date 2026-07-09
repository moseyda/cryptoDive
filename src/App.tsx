import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-[#000625] text-white font-sans overflow-x-hidden selection:bg-blue-500/30">
      <Navbar />
      
      <Hero />
    </div>
  );
}
