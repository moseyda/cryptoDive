import { useState, useEffect } from 'react';
import { fetchMarketTrends, type MarketCoin } from '../api/market';

export const useMarketTrends = () => {
  const [trends, setTrends] = useState<MarketCoin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadTrends = async (isBackground = false) => {
      try {
        if (!isBackground) setLoading(true);
        // We use the top 5 requested by the user:
        const data = await fetchMarketTrends(['bitcoin', 'ethereum', 'solana', 'dogecoin', 'ripple']);
        
        // Coingecko sometimes returns results out of order, let's sort by market cap or original array order.
        // The API sorts by market_cap_desc natively though.
        if (mounted) {
          setTrends(data);
          setError(null);
        }
      } catch (err) {
        if (mounted && !isBackground) {
          setError(err instanceof Error ? err.message : 'Failed to fetch market trends');
        }
      } finally {
        if (mounted && !isBackground) {
          setLoading(false);
        }
      }
    };

    loadTrends(false);
    
    // Refresh every 60 seconds without unmounting the table
    const interval = setInterval(() => loadTrends(true), 60000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  return { trends, loading, error };
};
