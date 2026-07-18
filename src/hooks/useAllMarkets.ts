import { useState, useEffect } from 'react';
import { fetchAllMarkets, type MarketCoin } from '../api/market';

export const useAllMarkets = (category: string = 'all') => {
  const [coins, setCoins] = useState<MarketCoin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadCoins = async (isBackground = false) => {
      try {
        if (!isBackground) setLoading(true);
        const data = await fetchAllMarkets(category, 1, 100);
        
        if (mounted) {
          setCoins(data);
          setError(null);
        }
      } catch (err) {
        if (mounted) {
          // If we fail, we probably hit CoinGecko rate limits. 
          // We will gracefully keep the previous data if we have it.
          if (coins.length === 0) {
            setError('Failed to load market data. Please try again in a minute.');
          }
        }
      } finally {
        if (mounted && !isBackground) {
          setLoading(false);
        }
      }
    };

    loadCoins(false);
    
    // Poll every 60 seconds for updates to avoid instant rate limiting
    const interval = setInterval(() => loadCoins(true), 60000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [category]); // Re-fetch when category changes

  return { coins, loading, error };
};
