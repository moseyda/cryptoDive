import './index.css';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#000625] text-white font-sans overflow-x-hidden selection:bg-blue-500/30">
      <Navbar />
      
      {/* Future sections will go here */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center text-gray-500 text-sm border border-dashed border-gray-700/50 rounded-2xl py-32 mt-10">
          Hero Section Placeholder
        </div>
      </main>
    </div>
  );
}
