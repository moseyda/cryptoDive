export interface NewsArticle {
  id: string;
  guid: string;
  published_on: number;
  imageurl: string;
  title: string;
  url: string;
  body: string;
  source: string;
  source_info: {
    name: string;
    img: string;
    lang: string;
  };
}

const NEWS_API_URL = '/api/cryptocompare/news/?lang=EN';

export const fetchCryptoNews = async (): Promise<NewsArticle[]> => {
  const response = await fetch(NEWS_API_URL);
  
  if (!response.ok) {
    throw new Error(`News API error: ${response.statusText}`);
  }
  
  const data = await response.json();
  return data.Data || [];
};
