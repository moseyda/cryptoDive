import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import MarketsPage from './pages/MarketsPage';
import LearnPage from './pages/LearnPage';
import AboutPage from './pages/AboutPage';
import './index.css';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#000625] text-white font-sans selection:bg-[#00ffa0]/30 overflow-x-clip">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/markets" element={<MarketsPage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}
