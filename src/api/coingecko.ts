import type { CoinGeckoResponse } from '../types/crypto';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchCryptoPrices = async (
  coinIds: string[] = [
    'bitcoin', 'ethereum', 'tether', 'binancecoin', 'solana', 
    'ripple', 'usd-coin', 'cardano', 'avalanche-2', 'dogecoin', 
    'polkadot', 'chainlink', 'matic-network', 'shiba-inu', 
    'litecoin', 'bitcoin-cash', 'uniswap', 'cosmos', 'stellar', 'monero'
  ],
  currencies: string[] = ['inr', 'usd', 'eur', 'gbp', 'aud', 'cad', 'jpy']
): Promise<CoinGeckoResponse> => {
  const ids = coinIds.join(',');
  const vs = currencies.join(',');
  
  const response = await fetch(`${API_BASE_URL}/simple/price?ids=${ids}&vs_currencies=${vs}`);
  
  if (!response.ok) {
    throw new Error(`CoinGecko API error: ${response.statusText}`);
  }
  
  return await response.json();
};
