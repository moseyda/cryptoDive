import { useState } from 'react';
import { useCryptoRates } from '../hooks/useCryptoRates';

export default function ExchangeWidget() {
  const { rates, loading } = useCryptoRates();
  
  const [spendAmount, setSpendAmount] = useState<string>('');
  const [receiveAmount, setReceiveAmount] = useState<string>('');
  
  const [spendCurrency] = useState<'inr' | 'usd'>('inr');
  const [receiveCoin] = useState('bitcoin');

  const handleSpendChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSpendAmount(val);
    
    if (!val || isNaN(Number(val)) || !rates) {
      setReceiveAmount('');
      return;
    }
    
    const price = rates[receiveCoin]?.[spendCurrency];
    if (price) {
      const received = Number(val) / price;
      setReceiveAmount(received.toFixed(6));
    }
  };

  const handleReceiveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setReceiveAmount(val);
    
    if (!val || isNaN(Number(val)) || !rates) {
      setSpendAmount('');
      return;
    }
    
    const price = rates[receiveCoin]?.[spendCurrency];
    if (price) {
      const spent = Number(val) * price;
      setSpendAmount(spent.toFixed(2));
    }
  };

  return (
    <div className="relative z-20 w-full max-w-5xl mx-auto px-4 -mt-10 mb-20">
      <div className="bg-[#101428]/80 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center gap-4 md:gap-6">
        
        {/* Spend Input Block */}
        <div className="flex-1 w-full flex items-center justify-between border-b md:border-b-0 md:border-r border-gray-700/50 pb-4 md:pb-0 md:pr-6">
          <div className="flex flex-col w-full">
            <span className="text-[14px] text-white/75 font-medium mb-2">I Will Spend</span>
            <input 
              type="number"
              placeholder="0.00"
              value={spendAmount}
              onChange={handleSpendChange}
              className="bg-transparent text-white text-[24px] md:text-[32px] font-bold outline-none w-full placeholder-gray-600 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors ml-4">
            <span className="text-white text-[16px] font-medium">INR</span>
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>

        {/* Receive Input Block */}
        <div className="flex-1 w-full flex items-center justify-between pb-4 md:pb-0 md:pr-6">
          <div className="flex flex-col w-full">
            <span className="text-[14px] text-white/75 font-medium mb-2">I Will Receive</span>
            <input 
              type="number"
              placeholder="0.00"
              value={receiveAmount}
              onChange={handleReceiveChange}
              className="bg-transparent text-[#00ffa0] text-[24px] md:text-[32px] font-bold outline-none w-full placeholder-gray-600/50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors ml-4">
            <span className="text-white text-[16px] font-medium">BTC</span>
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>

        {/* Action Button */}
        <button 
          className="w-full md:w-auto bg-[#00ffa0] text-black text-[18px] font-semibold px-10 py-4 rounded-[7px] hover:bg-[#00e690] transition-transform transform hover:scale-105 active:scale-95 duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-[0_0_15px_rgba(0,255,160,0.3)]"
          disabled={loading || !rates || !spendAmount}
        >
          {loading ? 'Fetching...' : 'Buy Crypto'}
        </button>

      </div>
    </div>
  );
}
