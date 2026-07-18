import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-6 max-w-[1350px] mx-auto w-full relative z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center cursor-pointer">
        <span className="text-[24px] font-extrabold leading-none tracking-tight">
          <span className="text-[#00ffa0]">Crypto</span>
          <span className="text-white">Dive</span>
        </span>
      </Link>

      {/* Navigation Links */}
      <ul className="hidden lg:flex items-center gap-8 text-[18px] font-medium text-white">
        <li className="cursor-pointer hover:text-[#00ffa0] transition-colors">Home</li>
        <li className="cursor-pointer hover:text-[#00ffa0] transition-colors">Trade</li>
        <li className="cursor-pointer hover:text-[#00ffa0] transition-colors">Market</li>
        <li className="cursor-pointer hover:text-[#00ffa0] transition-colors">Learn</li>
        <li className="cursor-pointer hover:text-[#00ffa0] transition-colors">Support</li>
      </ul>

      {/* Action Buttons */}
      <div className="flex items-center gap-6">
        <Link 
          to="/login" 
          className="text-white text-[16px] font-semibold hover:text-[#00ffa0] transition-colors"
        >
          Log In
        </Link>
        <Link 
          to="/signup" 
          className="bg-[#00ffa0] text-black text-[16px] font-semibold px-6 py-2 rounded-[8px] hover:bg-[#00e690] transition-colors transform hover:scale-105 active:scale-95 duration-200 inline-block"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
