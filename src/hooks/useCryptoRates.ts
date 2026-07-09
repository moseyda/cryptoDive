import { useState, useEffect } from 'react';
import { fetchCryptoPrices } from '../api/coingecko';
import { CoinGeckoResponse } from '../types/crypto';

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
          setError(err instanceof Error ? err.message : 'Failed to fetch rates');
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
