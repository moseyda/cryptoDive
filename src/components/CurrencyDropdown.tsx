import { useState, useRef, useEffect } from 'react';

export interface DropdownOption {
  value: string;
  label: string;
  symbol?: string;
  icon?: string;
}

interface CurrencyDropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  align?: 'left' | 'right';
}

export default function CurrencyDropdown({ options, value, onChange, align = 'right' }: CurrencyDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === value) || options[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Trigger */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition-colors border border-transparent hover:border-gray-700"
      >
        <span className="text-white text-[16px] font-medium">{selectedOption.label}</span>
        <svg 
          className={`w-4 h-4 text-white transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          className={`absolute top-full mt-2 w-48 bg-[#101428] border border-gray-700 rounded-xl shadow-2xl z-50 overflow-hidden ${align === 'right' ? 'right-0' : 'left-0'}`}
        >
          <div className="max-h-60 overflow-y-auto custom-scrollbar py-2">
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-[#00ffa0]/10 transition-colors ${
                  value === option.value ? 'bg-[#00ffa0]/5 text-[#00ffa0]' : 'text-white'
                }`}
              >
                {option.icon && (
                  <img src={option.icon} alt={option.label} className="w-5 h-5 rounded-full object-cover" />
                )}
                <span className="font-medium">{option.label}</span>
                {option.symbol && (
                  <span className="ml-auto text-gray-400 text-sm">{option.symbol}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
