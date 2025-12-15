import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MessageSquare, TrendingUp, BarChart2 } from 'lucide-react';

const SolutionSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 leading-tight text-white">
            {t('solution.headline')} <span className="text-brand-gold">{t('solution.headline.highlight')}</span> {t('solution.headline.suffix')}
          </h2>
          <p className="text-lg text-gray-400 font-medium">
            {t('solution.subheadline')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="bg-[#121212]/80 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-brand-gold/30 transition-all duration-300 hover:bg-[#1A1A1A] hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-gradient-to-br from-brand-gold to-yellow-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-yellow-500/10 group-hover:scale-110 transition-transform">
              <MessageSquare size={28} className="text-black" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">{t('solution.feature1.title')}</h3>
            <p className="text-gray-400 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: t('solution.feature1.description') }} />
          </div>

          {/* Benefit 2 */}
          <div className="bg-[#121212]/80 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-brand-purple/30 transition-all duration-300 hover:bg-[#1A1A1A] hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-gradient-to-br from-brand-purple to-purple-900 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-purple-500/10 group-hover:scale-110 transition-transform">
              <TrendingUp size={28} className="text-white" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">{t('solution.feature2.title')}</h3>
            <p className="text-gray-400 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: t('solution.feature2.description') }} />
          </div>

           {/* Benefit 3 */}
           <div className="bg-[#121212]/80 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:bg-[#1A1A1A] hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/10 group-hover:scale-110 transition-transform">
              <BarChart2 size={28} className="text-white" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">{t('solution.feature3.title')}</h3>
            <p className="text-gray-400 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: t('solution.feature3.description') }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;