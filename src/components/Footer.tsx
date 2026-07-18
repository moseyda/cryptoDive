import { Link } from 'react-router-dom';
import { GooglePlayButton, AppStoreButton } from './base/buttons/app-store-buttons-outline';

export default function Footer() {
  const quickLinks = [
    { label: 'About Us', href: '/about' }, 
    { label: 'Feature', href: '#' }, 
    { label: 'Career', href: '#' }, 
    { label: 'Contact Us', href: '#' }
  ];
  const helpLinks = [
    { label: 'Customer Support', href: '#' }, 
    { label: 'Terms', href: '#' }, 
    { label: 'Privacy', href: '#' }, 
    { label: 'FAQs', href: '#' }
  ];
  const otherLinks = [
    { label: 'Start Trading', href: '#' }, 
    { label: 'Earn Free Crypto', href: '#' }, 
    { label: 'Crypto Wallet', href: '#' }, 
    { label: 'Payment Option', href: '#' }
  ];

  return (
    <footer className="w-full relative z-20 mt-20 md:mt-24 bg-[#000625]">
      <div className="w-full max-w-[1350px] mx-auto px-4 pb-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Quick Link */}
          <div className="flex flex-col">
            <h4 className="text-white text-[18px] font-medium mb-4">Quick Link</h4>
            <div className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-white/60 text-[14px] hover:text-[#00ffa0] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Help */}
          <div className="flex flex-col">
            <h4 className="text-white text-[18px] font-medium mb-4">Help</h4>
            <div className="flex flex-col gap-4">
              {helpLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-white/60 text-[14px] hover:text-[#00ffa0] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Others */}
          <div className="flex flex-col">
            <h4 className="text-white text-[18px] font-medium mb-4">Others</h4>
            <div className="flex flex-col gap-4">
              {otherLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-white/60 text-[14px] hover:text-[#00ffa0] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Download App */}
          <div className="flex flex-col items-start gap-4 md:flex-col">
            <h4 className="text-white text-[18px] font-medium mb-4">Download App</h4>
            <div className="flex flex-col gap-2">
              <GooglePlayButton size="md" className="scale-100 md:scale-110 origin-left hover:ring-[#00ffa0]/50 transition-all duration-300 mb-2 md:mb-4" />
              <AppStoreButton size="md" className="scale-100 md:scale-110 origin-left hover:ring-[#00ffa0]/50 transition-all duration-300" />
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/10 mt-16 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/50 text-[14px]">
            © Copyright {new Date().getFullYear()}, all right reserve by cryptodive
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white/50 hover:bg-[#00ffa0] hover:text-black transition-colors duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white/50 hover:bg-[#00ffa0] hover:text-black transition-colors duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white/50 hover:bg-[#00ffa0] hover:text-black transition-colors duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
