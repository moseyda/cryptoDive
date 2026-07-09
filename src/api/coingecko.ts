import type { CoinGeckoResponse } from '../types/crypto';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchCryptoPrices = async (
  coinIds: string[] = ['bitcoin', 'ethereum', 'solana', 'dogecoin'],
  currencies: string[] = ['inr', 'usd']
): Promise<CoinGeckoResponse> => {
  const ids = coinIds.join(',');
  const vs = currencies.join(',');
  
  const response = await fetch(`${API_BASE_URL}/simple/price?ids=${ids}&vs_currencies=${vs}`);
  
  if (!response.ok) {
    throw new Error(`CoinGecko API error: ${response.statusText}`);
  }
  
  return await response.json();
};
