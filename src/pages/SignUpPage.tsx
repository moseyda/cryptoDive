import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function SignUpPage() {
  const [step, setStep] = useState(0);
  const [agreed, setAgreed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full relative bg-[#000625] flex flex-col">

      {/* Risk Warning Banner */}
      <div className="absolute top-0 left-0 right-0 w-full z-[60] bg-[#121629] border-b border-white/5 py-3 px-4 flex justify-center items-center overflow-hidden">
        <p className="text-white/80 text-[14px] md:text-[15px] text-center whitespace-nowrap">
          Don't invest unless you're prepared to lose all the money you invest. This is a high-risk investment and you should not expect to be protected if something goes wrong.{' '}
          <Link to="#" className="text-[#00ffa0] hover:underline font-medium">Take 2 mins to learn more.</Link>
        </p>
      </div>

      {/* Simple Logo Header */}
      <div className="absolute top-[50px] md:top-[48px] left-0 right-0 w-full z-50 px-6 md:px-8 py-8 flex items-center">
        <Link to="/" className="flex items-center cursor-pointer">
          <span className="text-[28px] font-extrabold leading-none tracking-tight">
            <span className="text-[#00ffa0]">Crypto</span>
            <span className="text-white">Dive</span>
          </span>
        </Link>
      </div>

      {/* Central Wrapper */}
      <div className="flex-1 w-full max-w-[1350px] mx-auto flex flex-col items-center justify-center relative z-10">

        {step === 0 ? (
          // Original Step 0: Two-Column Layout
          <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 px-6 lg:px-12 pt-20 pb-8 animate-in fade-in duration-300">

            {/* Left Side: Auth Form */}
            <div className="w-full max-w-[400px] flex flex-col items-start flex-shrink-0 relative z-20">

              <h1 className="text-white text-[24px] lg:text-[32px] font-bold mb-8 whitespace-nowrap">
                Welcome to CryptoDive!
              </h1>

              {/* Primary CTA */}
              <button 
                onClick={() => setStep(1)}
                className="w-full h-[48px] bg-[#00ffa0] text-[#000625] text-[16px] font-semibold rounded-[8px] mb-8 flex items-center justify-center relative hover:bg-[#00ffa0]/90 transition-all duration-300 cursor-pointer"
              >
                <div className="absolute left-6 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" />
                  </svg>
                </div>
                <span>Sign Up With Email or Phone</span>
              </button>

              {/* Divider */}
              <div className="w-full flex items-center justify-center gap-4 mb-8">
                <div className="h-[1px] bg-white/10 flex-1"></div>
                <span className="text-white/40 text-[14px]">or</span>
                <div className="h-[1px] bg-white/10 flex-1"></div>
              </div>

              {/* Secondary Buttons */}
              <button className="w-full h-[48px] bg-[#f2f2f2] text-[#1f1f1f] text-[16px] font-medium rounded-[8px] mb-5 flex items-center justify-center relative hover:bg-[#e6e6e6] transition-colors duration-200 cursor-pointer">
                <div className="absolute left-6 flex items-center justify-center w-[24px] h-[24px]">
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
              <button className="w-full h-[48px] bg-white text-black text-[16px] font-medium rounded-[8px] mb-10 flex items-center justify-center relative hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                <div className="absolute left-6 flex items-center justify-center w-[24px] h-[24px]">
                  <svg viewBox="0 0 384 512" style={{ display: 'block', width: '24px', height: '24px' }}>
                    <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                </div>
                <span>
                  Continue with Apple
                </span>
              </button>

              {/* Links */}
              <div className="w-full flex justify-center items-center mt-2">
                <span className="text-white/60 text-[16px] text-center">
                  Already have an account? <Link to="/login" className="text-[#00ffa0] font-medium hover:underline">Log In</Link>
                </span>
              </div>

            </div>

            {/* Right Side: Promo Visuals */}
            <div className="w-full max-w-[480px] relative flex justify-center items-center mt-12 lg:mt-0">
              {/* Glow behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#00ffa0]/20 blur-[100px] rounded-full pointer-events-none z-0"></div>

              <img
                src="/assets/phoneapp.png"
                alt="CryptoDive App"
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,255,160,0.15)] relative z-10"
              />
            </div>

          </div>
        ) : (
          // Steps 1 & 2: Centered Layout (No Image, No Other Buttons)
          <div className="w-full flex flex-col items-center justify-center px-6 pt-20 pb-8 mt-12 md:mt-0 animate-in fade-in duration-300">
            {/* Ambient Corner Glows for Centered Layout */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[300px] h-[300px] bg-[#00ffa0]/10 blur-[100px] rounded-full pointer-events-none z-0"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#00ffa0]/10 blur-[100px] rounded-full pointer-events-none z-0"></div>

            <div className="w-full max-w-[400px] flex flex-col items-start flex-shrink-0 relative z-20">

              {/* Back Button */}
              <button 
                onClick={() => setStep(step - 1)}
                className="text-white/50 hover:text-white transition-colors mb-6 flex items-center gap-2 text-[14px]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Back
              </button>

              <h1 className="text-white text-[28px] lg:text-[32px] font-semibold mb-8 whitespace-nowrap">
                Create Account
              </h1>

              {step === 1 && (
                <div className="w-full flex flex-col w-full animate-in slide-in-from-right-4 fade-in duration-300">
                  {/* Input Field */}
                  <div className="w-full flex flex-col mb-6">
                    <label className="text-white/80 text-[14px] mb-2 font-medium">Email/Phone number</label>
                    <input
                      type="text"
                      className="w-full h-[48px] bg-transparent border border-white/20 rounded-[8px] px-4 text-white outline-none focus:border-[#00ffa0] transition-colors"
                    />
                  </div>

                  {/* Terms Agreement Checkbox */}
                  <label className="flex items-start gap-3 mb-8 cursor-pointer group">
                    <div className="relative flex items-center justify-center w-5 h-5 mt-0.5">
                      <input 
                        type="checkbox" 
                        className="peer appearance-none w-5 h-5 border border-white/30 rounded-[4px] bg-transparent checked:bg-[#00ffa0] checked:border-[#00ffa0] transition-colors cursor-pointer"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                      />
                      <svg className="absolute w-3 h-3 text-[#000625] opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p className="text-[13px] text-white/50 leading-snug group-hover:text-white/70 transition-colors">
                      By creating an account, I agree to Binance's{' '}
                      <Link to="/terms" className="text-[#00ffa0] hover:underline" onClick={(e) => e.stopPropagation()}>Terms of Service</Link> and{' '}
                      <Link to="/privacy" className="text-[#00ffa0] hover:underline" onClick={(e) => e.stopPropagation()}>Privacy Notice</Link>.
                    </p>
                  </label>

                  {/* Primary CTA */}
                  <button 
                    onClick={() => {
                      if (agreed) setStep(2);
                    }}
                    disabled={!agreed}
                    className={`w-full h-[48px] text-[16px] font-semibold rounded-[8px] mb-8 flex items-center justify-center transition-all duration-300 ${
                      agreed 
                        ? 'bg-[#00ffa0] text-[#000625] hover:bg-[#00ffa0]/90 cursor-pointer shadow-[0_0_15px_rgba(0,255,160,0.3)]' 
                        : 'bg-white/10 text-white/40 cursor-not-allowed'
                    }`}
                  >
                    Next
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="w-full flex flex-col w-full animate-in slide-in-from-right-4 fade-in duration-300">
                  {/* Password Field */}
                <div className="w-full flex flex-col mb-8 relative">
                  <label className="text-white/80 text-[14px] mb-2 font-medium">Password</label>
                  <div className="relative w-full">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full h-[48px] bg-transparent border border-white/20 rounded-[8px] pl-4 pr-12 text-white outline-none focus:border-[#00ffa0] transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                    >
                      {showPassword ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                          <line x1="1" y1="1" x2="23" y2="23"></line>
                        </svg>
                      ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                  {/* Primary CTA */}
                  <button 
                    className="w-full h-[48px] bg-[#00ffa0] text-[#000625] text-[16px] font-semibold rounded-[8px] mb-8 flex items-center justify-center hover:bg-[#00ffa0]/90 transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(0,255,160,0.3)]"
                  >
                    Sign Up
                  </button>
                </div>
              )}

              {/* Links */}
              <div className="w-full flex justify-center items-center mt-2">
                <span className="text-white/60 text-[16px] text-center">
                  Already have an account? <Link to="/login" className="text-[#00ffa0] font-medium hover:underline">Log In</Link>
                </span>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* Footer */}
      <div className="w-full flex justify-center items-center gap-8 text-white/50 text-[12px] z-50 pb-3 mt-auto">
        <span>CryptoDive &copy; 2026</span>
        <Link to="#" className="hover:text-white transition-colors">Cookie Preferences</Link>
      </div>

    </div>
  );
}
