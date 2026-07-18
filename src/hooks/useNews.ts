import { useState, useEffect } from 'react';
import { fetchCryptoNews, type NewsArticle } from '../api/news';

export const useNews = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadNews = async (isBackground = false) => {
      try {
        if (!isBackground) setLoading(true);
        const data = await fetchCryptoNews();
        
        if (mounted) {
          // Keep top 15 news items so it doesn't overwhelm the page
          setNews(data.slice(0, 15));
          setError(null);
        }
      } catch (err) {
        if (mounted) {
          if (news.length === 0) {
            setError('Failed to load news feed. Please try again later.');
          }
        }
      } finally {
        if (mounted && !isBackground) {
          setLoading(false);
        }
      }
    };

    loadNews(false);
    
    // Poll for new news every 5 minutes (300000ms)
    const interval = setInterval(() => loadNews(true), 300000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  return { news, loading, error };
};
