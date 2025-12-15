import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ShoppingCart, MailWarning, Banknote } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[500px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-6">
            {t('problem.headline')} <span className="text-brand-purple underline decoration-brand-gold/50 decoration-4 underline-offset-4">{t('problem.headline.highlight')}</span> {t('problem.headline.suffix')}
          </h2>
          <p className="text-lg text-gray-400 font-medium">
            {t('problem.subheadline')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Card 1 */}
          <div className="p-8 rounded-3xl bg-[#121212] border border-white/5 text-center shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400"></div>
            <div className="w-16 h-16 mx-auto bg-red-900/20 text-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <ShoppingCart size={32} strokeWidth={2.5} />
            </div>
            <h3 className="text-5xl font-extrabold text-white mb-2">{t('problem.stat1.number')}</h3>
            <p className="text-lg font-bold text-gray-300 mb-4">{t('problem.stat1.title')}</p>
            <p className="text-gray-500 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: t('problem.stat1.description') }} />
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-3xl bg-[#121212] border border-white/5 text-center shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-orange-400"></div>
             <div className="w-16 h-16 mx-auto bg-orange-900/20 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <MailWarning size={32} strokeWidth={2.5} />
            </div>
            <h3 className="text-5xl font-extrabold text-white mb-2">{t('problem.stat2.number')}</h3>
            <p className="text-lg font-bold text-gray-300 mb-4">{t('problem.stat2.title')}</p>
             <p className="text-gray-500 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: t('problem.stat2.description') }} />
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-3xl bg-[#121212] border border-white/5 text-center shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-600 to-gray-400"></div>
             <div className="w-16 h-16 mx-auto bg-gray-800 text-gray-300 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Banknote size={32} strokeWidth={2.5} />
            </div>
            <h3 className="text-5xl font-extrabold text-white mb-2">{t('problem.stat3.number')}</h3>
            <p className="text-lg font-bold text-gray-300 mb-4">{t('problem.stat3.title')}</p>
             <p className="text-gray-500 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: t('problem.stat3.description') }} />
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-[#1A1A1A] border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-lg">
          <div className="flex gap-6 items-start">
            <span className="text-4xl">⚠️</span>
            <div>
              <p className="text-lg text-gray-300 font-medium leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t('problem.callout.intro') }} />
              <ul className="text-gray-400 space-y-2 ml-4">
                <li>• {t('problem.callout.bullet1')}</li>
                <li>• {t('problem.callout.bullet2')}</li>
                <li>• {t('problem.callout.bullet3')}</li>
              </ul>
              <p className="text-lg text-white font-bold mt-4">{t('problem.callout.conclusion')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;