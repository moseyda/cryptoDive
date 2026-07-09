export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-10 max-w-[1728px] mx-auto w-full">
      {/* Logo */}
      <div className="flex items-center cursor-pointer">
        <span className="text-[28px] font-extrabold leading-none tracking-tight">
          <span className="text-[#00ffa0]">Crypto</span>
          <span className="text-white">Dive</span>
        </span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden lg:flex items-center gap-12 text-[24px] font-medium text-white">
        <li className="cursor-pointer hover:text-[#00ffa0] transition-colors">Home</li>
        <li className="cursor-pointer hover:text-[#00ffa0] transition-colors">Trade</li>
        <li className="cursor-pointer hover:text-[#00ffa0] transition-colors">Market</li>
        <li className="cursor-pointer hover:text-[#00ffa0] transition-colors">Learn</li>
        <li className="cursor-pointer hover:text-[#00ffa0] transition-colors">Support</li>
      </ul>

      {/* Action Buttons */}
      <div className="flex items-center">
        <button className="bg-[#00ffa0] text-black text-[24px] font-semibold px-10 py-4 rounded-[47px] hover:bg-[#00e690] transition-colors transform hover:scale-105 active:scale-95 duration-200">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
