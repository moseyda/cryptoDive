import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import './index.css';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#000625] text-white font-sans selection:bg-[#00ffa0]/30 [zoom:80%] overflow-x-clip">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </Router>
  );
}
