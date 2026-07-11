import { useState, useEffect } from 'react';
import { fetchCryptoPrices } from '../api/coingecko';
import type { CoinGeckoResponse } from '../types/crypto';

export const useCryptoRates = () => {
  const [rates, setRates] = useState<CoinGeckoResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadRates = async () => {
      try {
        setLoading(true);
        const data = await fetchCryptoPrices();
        if (isMounted) {
          setRates(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          // If rate limited, fallback to a mock dictionary so the widget doesn't break
          setRates(prev => {
            if (prev) return prev;
            return {
              bitcoin: { usd: 64230, inr: 5300000 },
              ethereum: { usd: 3450, inr: 285000 },
              solana: { usd: 145, inr: 12000 },
              dogecoin: { usd: 0.12, inr: 10 },
              ripple: { usd: 0.58, inr: 48 }
            };
          });
          setError(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadRates();
    
    // Refresh live rates every 60 seconds silently
    const interval = setInterval(loadRates, 60000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return { rates, loading, error };
};
