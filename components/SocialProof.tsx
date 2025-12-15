import React from 'react';
import { TESTIMONIALS } from '../constants';
import Button from './ui/Button';
import { useLanguage } from '../contexts/LanguageContext';

const SocialProof: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-brand-dark" id="results">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('social.headline')}
          </h2>
          <p className="text-xl text-gray-400">
            {t('social.subheadline')}
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          
          {/* Case Study 1 */}
          <div className="bg-[#121212] rounded-3xl overflow-hidden border border-white/5 flex flex-col hover:border-brand-gold/20 transition-colors">
            <div className="bg-white/5 p-6 border-b border-white/5">
              <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">SF</div>
                 <div>
                   <h3 className="font-bold text-lg text-white">{t('social.case1.company')}</h3>
                   <p className="text-sm text-gray-400">{t('social.case1.type')}</p>
                 </div>
              </div>
              <h4 className="text-2xl font-bold text-brand-gold">{t('social.case1.result')}</h4>
            </div>
            <div className="p-8 flex-1 flex flex-col">
               <div className="mb-6">
                 <strong className="block text-sm uppercase text-gray-500 mb-1">{t('social.case1.challenge.label')}</strong>
                 <p className="text-gray-300">{t('social.case1.challenge.text')}</p>
               </div>
               <div className="mb-6">
                 <strong className="block text-sm uppercase text-gray-500 mb-1">{t('social.case1.result.label')}</strong>
                 <ul className="space-y-1 text-gray-300 font-medium">
                   <li>✓ {t('social.case1.result1')}</li>
                   <li>✓ {t('social.case1.result2')}</li>
                   <li>✓ {t('social.case1.result3')}</li>
                 </ul>
               </div>
               <div className="mt-auto pt-6 border-t border-white/5">
                  <p className="italic text-gray-400 text-sm mb-4">{t('social.case1.quote')}</p>
                  <p className="font-bold text-sm text-white">{t('social.case1.author')}</p>
               </div>
            </div>
          </div>

          {/* Case Study 2 */}
           <div className="bg-[#121212] rounded-3xl overflow-hidden border border-white/5 flex flex-col hover:border-brand-purple/20 transition-colors">
            <div className="bg-white/5 p-6 border-b border-white/5">
              <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">TS</div>
                 <div>
                   <h3 className="font-bold text-lg text-white">{t('social.case2.company')}</h3>
                   <p className="text-sm text-gray-400">{t('social.case2.type')}</p>
                 </div>
              </div>
              <h4 className="text-2xl font-bold text-brand-purple">{t('social.case2.result')}</h4>
            </div>
            <div className="p-8 flex-1 flex flex-col">
               <div className="mb-6">
                 <strong className="block text-sm uppercase text-gray-500 mb-1">{t('social.case2.challenge.label')}</strong>
                 <p className="text-gray-300">{t('social.case2.challenge.text')}</p>
               </div>
               <div className="mb-6">
                 <strong className="block text-sm uppercase text-gray-500 mb-1">{t('social.case2.result.label')}</strong>
                 <ul className="space-y-1 text-gray-300 font-medium">
                   <li>✓ {t('social.case2.result1')}</li>
                   <li>✓ {t('social.case2.result2')}</li>
                   <li>✓ {t('social.case2.result3')}</li>
                 </ul>
               </div>
               <div className="mt-auto pt-6 border-t border-white/5">
                  <p className="italic text-gray-400 text-sm mb-4">{t('social.case2.quote')}</p>
                  <p className="font-bold text-sm text-white">{t('social.case2.author')}</p>
               </div>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-[#121212] p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex gap-1 text-brand-gold mb-4">★★★★★</div>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full bg-gray-700 grayscale" />
                <div>
                  <p className="font-bold text-sm text-white">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;