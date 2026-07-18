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

const NEWS_API_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://cointelegraph.com/rss';

export const fetchCryptoNews = async (): Promise<NewsArticle[]> => {
  const response = await fetch(NEWS_API_URL);
  
  if (!response.ok) {
    throw new Error(`News API error: ${response.statusText}`);
  }
  
  const data = await response.json();
  
  if (data.status !== 'ok') {
    throw new Error('Failed to parse RSS feed');
  }

  // Map RSS items to our existing NewsArticle interface so we don't break the UI
  return data.items.map((item: any) => {
    // Parse pubDate to Unix timestamp
    const pubDate = new Date(item.pubDate).getTime() / 1000;
    
    // Extract thumbnail or placeholder
    const imageurl = item.thumbnail || 'https://cointelegraph.com/favicon.ico';
    
    // Clean up HTML from description
    const rawBody = item.description.replace(/<[^>]+>/g, '');
    const body = rawBody.length > 150 ? rawBody.substring(0, 150) + '...' : rawBody;

    return {
      id: item.guid,
      guid: item.guid,
      published_on: pubDate,
      imageurl,
      title: item.title,
      url: item.link,
      body,
      source: 'Cointelegraph',
      source_info: {
        name: 'Cointelegraph',
        img: 'https://cointelegraph.com/favicon.ico',
        lang: 'EN'
      }
    };
  });
};
