export interface CryptoPrice {
  inr: number;
  usd: number;
}

export interface CoinGeckoResponse {
  [coinId: string]: CryptoPrice;
}
