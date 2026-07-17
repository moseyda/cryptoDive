import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function SignUpPage() {



  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row relative bg-[#000625]">

      {/* Simple Logo Header */}
      <div className="absolute top-0 left-0 right-0 w-full z-50 px-8 py-10 max-w-[1728px] mx-auto flex items-center">
        <Link to="/" className="flex items-center cursor-pointer">
          <span className="text-[28px] font-extrabold leading-none tracking-tight">
            <span className="text-[#00ffa0]">Crypto</span>
            <span className="text-white">Dive</span>
          </span>
        </Link>
      </div>

      {/* Left Column: Auth Form */}
      <div className="w-full lg:w-[55%] xl:w-[60%] flex items-center justify-center pt-32 pb-16 px-6 lg:px-16">
        <div className="max-w-[560px] w-full flex flex-col items-start">

          <h1 className="text-white text-[48px] font-bold mb-12">
            Welcome to CryptoDive!
          </h1>

          {/* Primary CTA */}
          <button className="w-full h-[56px] bg-[#00ffa0] text-[#000625] text-[18px] font-bold rounded-[8px] mb-8 flex items-center justify-center gap-2 hover:bg-[#00ffa0]/90 transition-all duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" />
            </svg>
            Sign Up With Email
          </button>

          {/* Divider */}
          <div className="w-full flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] bg-white/10 flex-1"></div>
            <span className="text-white/40 text-[14px]">or</span>
            <div className="h-[1px] bg-white/10 flex-1"></div>
          </div>

          {/* Secondary Buttons */}
          <button className="w-full h-[56px] bg-[#f2f2f2] text-[#1f1f1f] text-[18px] font-medium rounded-[8px] mb-5 flex items-center justify-center gap-3 hover:bg-[#e6e6e6] transition-colors duration-200">
            <div className="flex items-center justify-center w-[24px] h-[24px]">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style={{ display: 'block', width: '24px', height: '24px' }}>
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                <path fill="none" d="M0 0h48v48H0z" />
              </svg>
            </div>
            <span>
              Continue with Google
            </span>
          </button>

          {/* Official Apple Custom Button */}
          <button className="w-full h-[56px] bg-white text-black text-[18px] font-medium rounded-[8px] mb-14 flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors duration-200">
            <div className="flex items-center justify-center w-[24px] h-[24px]">
              <svg viewBox="0 0 384 512" style={{ display: 'block', width: '22px', height: '22px' }}>
                <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
            </div>
            <span>
              Continue with Apple
            </span>
          </button>

          {/* Links */}
          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 mt-2">
            <span className="text-white/60 text-[16px] text-center sm:text-left">
              Already have an account? <Link to="#" className="text-[#00ffa0] font-medium hover:underline">Log In</Link>
            </span>
          </div>

        </div>
      </div>

      {/* Right Column: Promo Visuals */}
      <div className="w-full lg:w-[45%] xl:w-[40%] bg-gradient-to-br from-[#00ffa0]/5 to-transparent flex flex-col items-center justify-center p-6 lg:p-16 border-l border-white/5 relative overflow-hidden">

        {/* Glow behind image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#00ffa0]/20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center max-w-[600px]">
          <img
            src="/assets/phoneapp.png"
            alt="CryptoDive App"
            className="w-full max-w-[500px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,255,160,0.1)] mb-12 animate-float"
          />

          <h2 className="text-white text-[48px] font-bold mb-6 text-center leading-tight">
            Welcome to CryptoDive
          </h2>

          <p className="text-white/60 text-[24px] text-center leading-relaxed max-w-[480px]">
            Enjoy the world's largest cryptocurrency exchange at your fingertips.
          </p>
        </div>

      </div>

    </div>
  );
}
