export interface CryptoJob {
  id: number;
  url: string;
  jobTitle: string;
  companyName: string;
  companyLogo: string;
  jobIndustry: string[];
  jobType: string[];
  jobGeo: string;
  jobLevel: string;
  pubDate: string;
}

export async function fetchCryptoJobs(): Promise<CryptoJob[]> {
  try {
    const response = await fetch('/api/jobicy/remote-jobs?tag=crypto');
    if (!response.ok) {
      throw new Error('Failed to fetch jobs');
    }
    const data = await response.json();
    return data.jobs || [];
  } catch (error) {
    console.error('Error fetching crypto jobs:', error);
    return [];
  }
}
