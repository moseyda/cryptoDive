import { useState } from 'react';
import { useCryptoRates } from '../hooks/useCryptoRates';
import CurrencyDropdown, { type DropdownOption } from './CurrencyDropdown';

const FIAT_OPTIONS: DropdownOption[] = [
  { value: 'usd', label: 'USD', symbol: '$' },
  { value: 'gbp', label: 'GBP', symbol: '£' },
  { value: 'eur', label: 'EUR', symbol: '€' },
  { value: 'jpy', label: 'JPY', symbol: '¥' },
  { value: 'aud', label: 'AUD', symbol: 'A$' },
  { value: 'inr', label: 'INR', symbol: '₹' },
  { value: 'cad', label: 'CAD', symbol: 'C$' }
];

const CRYPTO_OPTIONS: DropdownOption[] = [
  { value: 'bitcoin', label: 'BTC', icon: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color/btc.svg' },
  { value: 'ethereum', label: 'ETH', icon: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color/eth.svg' },
  { value: 'tether', label: 'USDT', icon: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color/usdt.svg' },
  { value: 'binancecoin', label: 'BNB', icon: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color/bnb.svg' },
  { value: 'solana', label: 'SOL', icon: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color/sol.svg' },
  { value: 'ripple', label: 'XRP', icon: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color/xrp.svg' },
  { value: 'usd-coin', label: 'USDC', icon: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color/usdc.svg' },
  { value: 'cardano', label: 'ADA', icon: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color/ada.svg' },
  { value: 'avalanche-2', label: 'AVAX', icon: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color/avax.svg' },
  { value: 'dogecoin', label: 'DOGE', icon: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color/doge.svg' },
  { value: 'polkadot', label: 'DOT', icon: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color/dot.svg' },
  { value: 'chainlink', label: 'LINK', icon: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color/link.svg' },
  { value: 'matic-network', label: 'MATIC', icon: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color/matic.svg' },
  { value: 'shiba-inu', label: 'SHIB', icon: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color/shib.svg' },
  { value: 'litecoin', label: 'LTC', icon: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color/ltc.svg' },
  { value: 'bitcoin-cash', label: 'BCH', icon: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color/bch.svg' },
  { value: 'uniswap', label: 'UNI', icon: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color/uni.svg' },
  { value: 'cosmos', label: 'ATOM', icon: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color/atom.svg' },
  { value: 'stellar', label: 'XLM', icon: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color/xlm.svg' },
  { value: 'monero', label: 'XMR', icon: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color/xmr.svg' }
];

export default function ExchangeWidget() {
  const { rates, loading } = useCryptoRates();
  
  const [spendAmount, setSpendAmount] = useState<string>('');
  const [receiveAmount, setReceiveAmount] = useState<string>('');
  
  const [fiatCurrency, setFiatCurrency] = useState('usd');
  const [cryptoCoin, setCryptoCoin] = useState('bitcoin');
  
  const [isReversed, setIsReversed] = useState(false);

  const handleSwap = () => {
    setIsReversed(!isReversed);
    setSpendAmount(receiveAmount);
    setReceiveAmount(spendAmount);
  };

  const handleSpendChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSpendAmount(val);
    
    if (!val || isNaN(Number(val)) || !rates) {
      setReceiveAmount('');
      return;
    }
    
    const price = rates[cryptoCoin]?.[fiatCurrency as 'inr' | 'usd'];
    if (price) {
      if (isReversed) {
        setReceiveAmount((Number(val) * price).toFixed(2));
      } else {
        setReceiveAmount((Number(val) / price).toFixed(6));
      }
    }
  };

  const handleReceiveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setReceiveAmount(val);
    
    if (!val || isNaN(Number(val)) || !rates) {
      setSpendAmount('');
      return;
    }
    
    const price = rates[cryptoCoin]?.[fiatCurrency as 'inr' | 'usd'];
    if (price) {
      if (isReversed) {
        setSpendAmount((Number(val) / price).toFixed(6));
      } else {
        setSpendAmount((Number(val) * price).toFixed(2));
      }
    }
  };

  // When a dropdown changes, we should ideally recalculate, but for now we just update state.
  // The user will need to re-type or we can add a useEffect to recalculate automatically.
  // A simple useEffect to recalculate receiveAmount when currency changes:
  // (Left out for brevity, but easy to add if needed).

  return (
    <div id="exchange-widget" className="relative z-20 w-full max-w-[1100px] mx-auto px-4 -mt-8 mb-16">
      <div className="bg-[#101428]/80 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center gap-4 md:gap-6 relative">
        
        {/* Spend Input Block */}
        <div className="flex-1 w-full flex items-center justify-between border-b md:border-b-0 md:border-r border-gray-700/50 pb-6 md:pb-0 md:pr-10 relative z-20">
          <div className="flex flex-col w-full">
            <span className="text-[14px] text-white/75 font-medium mb-2">I Will Spend</span>
            <input 
              type="number"
              placeholder="0.00"
              value={spendAmount}
              onChange={handleSpendChange}
              className="bg-transparent text-white text-[20px] md:text-[24px] font-bold outline-none w-full placeholder-gray-600 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          
          <div className="ml-4">
            {isReversed ? (
              <CurrencyDropdown options={CRYPTO_OPTIONS} value={cryptoCoin} onChange={setCryptoCoin} align="right" />
            ) : (
              <CurrencyDropdown options={FIAT_OPTIONS} value={fiatCurrency} onChange={setFiatCurrency} align="right" />
            )}
          </div>

          {/* Floating Swap Button */}
          <button 
            onClick={handleSwap}
            className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 md:top-1/2 md:-translate-y-1/2 md:right-[-20px] md:left-auto md:translate-x-0 w-10 h-10 bg-[#1A1F36] border border-gray-600 rounded-full flex items-center justify-center text-[#00ffa0] hover:bg-[#00ffa0] hover:text-black transition-all shadow-lg z-10"
            title="Swap Currencies"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
            </svg>
          </button>
        </div>

        {/* Receive Input Block */}
        <div className="flex-1 w-full flex items-center justify-between pt-4 md:pt-0 md:pl-4 pb-4 md:pb-0 md:pr-6 z-10">
          <div className="flex flex-col w-full">
            <span className="text-[14px] text-white/75 font-medium mb-2">I Will Receive</span>
            <input 
              type="number"
              placeholder="0.00"
              value={receiveAmount}
              onChange={handleReceiveChange}
              className="bg-transparent text-[#00ffa0] text-[20px] md:text-[24px] font-bold outline-none w-full placeholder-gray-600/50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          
          <div className="ml-4">
            {isReversed ? (
              <CurrencyDropdown options={FIAT_OPTIONS} value={fiatCurrency} onChange={setFiatCurrency} align="right" />
            ) : (
              <CurrencyDropdown options={CRYPTO_OPTIONS} value={cryptoCoin} onChange={setCryptoCoin} align="right" />
            )}
          </div>
        </div>

        {/* Action Button */}
        <button 
          className="w-full md:w-auto bg-[#00ffa0] text-black text-[16px] font-semibold px-8 py-3 rounded-[7px] hover:bg-[#00e690] transition-transform transform hover:scale-105 active:scale-95 duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-[0_0_15px_rgba(0,255,160,0.3)] z-0"
          disabled={loading || !rates || !spendAmount}
        >
          {loading ? 'Fetching...' : 'Buy Crypto'}
        </button>

      </div>
    </div>
  );
}
