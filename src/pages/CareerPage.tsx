import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { fetchCryptoJobs } from '../api/career';
import type { CryptoJob } from '../api/career';
import { Briefcase, MapPin, ExternalLink, Clock } from 'lucide-react';

export default function CareerPage() {
  const [jobs, setJobs] = useState<CryptoJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadJobs() {
      try {
        const data = await fetchCryptoJobs();
        setJobs(data);
      } catch (err) {
        setError('Failed to load career opportunities. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
    
    loadJobs();
  }, []);

  return (
    <div className="min-h-screen bg-[#000625] text-white font-sans overflow-x-clip flex flex-col">
      <Navbar />

      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 pt-32 pb-24 relative z-10">
        {/* Ambient Glows */}
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-[#00ffa0]/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-5%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

        {/* Hero Section */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-[40px] md:text-[64px] font-extrabold mb-6 leading-tight">
            Shape the Future of <br className="hidden md:block" />
            <span className="text-[#00ffa0]">Decentralised Finance</span>
          </h1>
          <p className="text-white/60 text-[18px] md:text-[22px] max-w-3xl mx-auto leading-relaxed">
            Explore the latest remote career opportunities across the Web3, Crypto, and Blockchain ecosystem. Find your next role and build the financial infrastructure of tomorrow.
          </p>
        </div>

        {/* Content Area */}
        <div className="w-full">
          {loading ? (
            // Skeleton Loader
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-[#101428]/60 border border-gray-800/60 rounded-[24px] p-6 animate-pulse">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full shrink-0" />
                    <div className="flex-1">
                      <div className="h-6 bg-white/10 rounded w-3/4 mb-2" />
                      <div className="h-4 bg-white/5 rounded w-1/2" />
                    </div>
                  </div>
                  <div className="flex gap-3 mb-6">
                    <div className="h-8 w-24 bg-white/5 rounded-full" />
                    <div className="h-8 w-24 bg-white/5 rounded-full" />
                  </div>
                  <div className="h-10 bg-white/10 rounded-lg w-full" />
                </div>
              ))}
            </div>
          ) : error ? (
            // Error State
            <div className="text-center py-20 bg-[#101428]/60 border border-red-500/30 rounded-[30px]">
              <p className="text-red-400 text-[18px]">{error}</p>
            </div>
          ) : jobs.length === 0 ? (
            // Empty State
            <div className="text-center py-20 bg-[#101428]/60 border border-gray-800/60 rounded-[30px]">
              <Briefcase className="w-12 h-12 text-white/20 mx-auto mb-4" />
              <h3 className="text-[24px] font-bold text-white mb-2">No roles found</h3>
              <p className="text-white/60">Check back later for new opportunities in the crypto space.</p>
            </div>
          ) : (
            // Jobs Grid
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jobs.map((job) => (
                <div 
                  key={job.id}
                  className="group bg-[#101428]/60 border border-gray-800/60 rounded-[24px] p-6 md:p-8 backdrop-blur-md transition-all duration-300 hover:border-[#00ffa0]/40 hover:bg-[#101428]/90 hover:-translate-y-1 flex flex-col"
                >
                  <div className="flex items-start gap-4 mb-6">
                    {/* Company Logo */}
                    {job.companyLogo ? (
                      <img 
                        src={job.companyLogo} 
                        alt={`${job.companyName} logo`} 
                        className="w-14 h-14 rounded-xl object-contain bg-white shrink-0 p-1"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <Briefcase className="w-6 h-6 text-white/50" />
                      </div>
                    )}
                    
                    <div>
                      <h3 className="text-[20px] md:text-[22px] font-bold text-white leading-tight mb-1 group-hover:text-[#00ffa0] transition-colors line-clamp-2">
                        {job.jobTitle}
                      </h3>
                      <p className="text-white/60 text-[15px] font-medium">
                        {job.companyName}
                      </p>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[13px] font-medium">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.jobGeo || 'Remote'}
                    </div>
                    {job.jobType && job.jobType.length > 0 && (
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00ffa0]/10 border border-[#00ffa0]/20 text-[#00ffa0] text-[13px] font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        {job.jobType[0]}
                      </div>
                    )}
                  </div>

                  <div className="mt-auto pt-4 border-t border-white/10">
                    <a 
                      href={job.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 hover:bg-[#00ffa0] text-white hover:text-black font-semibold transition-all duration-300"
                    >
                      Apply Now
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
