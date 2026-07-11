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
  const [searchQuery, setSearchQuery] = useState('');
  const [openDirection, setOpenDirection] = useState<'down' | 'up'>('down');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

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

  // Focus search input and determine open direction when opened
  useEffect(() => {
    if (isOpen) {
      if (dropdownRef.current) {
        const rect = dropdownRef.current.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        // If less than ~320px below, open upwards to avoid page scrollbars
        if (spaceBelow < 320) {
          setOpenDirection('up');
        } else {
          setOpenDirection('down');
        }
      }
      
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    } else {
      setSearchQuery(''); // Reset search when closed
    }
  }, [isOpen]);

  const filteredOptions = options.filter(opt => 
    opt.label.toLowerCase().includes(searchQuery.toLowerCase()) || 
    opt.value.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Trigger */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition-colors border border-transparent hover:border-gray-700"
      >
        {selectedOption.icon && (
          <img src={selectedOption.icon} alt={selectedOption.label} className="w-5 h-5 rounded-full object-cover flex-shrink-0" />
        )}
        <span className="text-white text-[16px] font-medium whitespace-nowrap">{selectedOption.label}</span>
        {selectedOption.symbol && (
          <span className="text-gray-400 font-medium text-[16px] flex-shrink-0">{selectedOption.symbol}</span>
        )}
        <svg 
          className={`w-4 h-4 flex-shrink-0 text-white transition-transform duration-200 ml-1 ${isOpen ? 'rotate-180' : ''}`} 
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
          className={`absolute ${openDirection === 'up' ? 'bottom-full mb-2' : 'top-full mt-2'} w-56 bg-[#101428] border border-gray-700 rounded-xl shadow-2xl z-50 overflow-hidden ${align === 'right' ? 'right-0' : 'left-0'}`}
        >
          {/* Search Input */}
          <div className="p-2 border-b border-gray-700">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#000625] text-white text-sm rounded-lg pl-9 pr-3 py-2 outline-none border border-transparent focus:border-[#00ffa0]/50 transition-colors placeholder-gray-500"
              />
            </div>
          </div>

          {/* Options List */}
          <div className="max-h-60 overflow-y-auto custom-scrollbar py-2">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
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
              ))
            ) : (
              <div className="px-4 py-3 text-sm text-gray-500 text-center">
                No results found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
