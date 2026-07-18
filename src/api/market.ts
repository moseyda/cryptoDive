export interface MarketCoin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
  sparkline_in_7d?: {
    price: number[];
  };
}

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchMarketTrends = async (
  coinIds: string[] = ['bitcoin', 'ethereum', 'solana', 'dogecoin', 'ripple']
): Promise<MarketCoin[]> => {
  const ids = coinIds.join(',');
  const response = await fetch(
    `${API_BASE_URL}/coins/markets?vs_currency=usd&ids=${ids}&order=market_cap_desc&per_page=5&page=1&sparkline=true&price_change_percentage=24h`
  );
  
  if (!response.ok) {
    throw new Error(`CoinGecko API error: ${response.statusText}`);
  }
  
  return await response.json();
};

export const fetchAllMarkets = async (
  category?: string,
  page: number = 1,
  perPage: number = 100
): Promise<MarketCoin[]> => {
  const categoryParam = category && category !== 'all' ? `&category=${category}` : '';
  const response = await fetch(
    `${API_BASE_URL}/coins/markets?vs_currency=usd${categoryParam}&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=true&price_change_percentage=24h`
  );
  
  if (!response.ok) {
    throw new Error(`CoinGecko API error: ${response.statusText}`);
  }
  
  return await response.json();
};
