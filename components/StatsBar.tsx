import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const StatsBar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-r from-brand-purple to-[#4D0542] py-16 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white divide-x-0 lg:divide-x divide-white/10">
          <div className="p-4">
            <div className="text-4xl lg:text-5xl font-extrabold mb-2 text-brand-gold">€2.7M+</div>
            <div className="text-white/70 font-medium uppercase tracking-wider text-sm">{t('stats.revenue')}</div>
          </div>
          <div className="p-4">
            <div className="text-4xl lg:text-5xl font-extrabold mb-2">1,200+</div>
            <div className="text-white/70 font-medium uppercase tracking-wider text-sm">{t('stats.stores')}</div>
          </div>
          <div className="p-4">
            <div className="text-4xl lg:text-5xl font-extrabold mb-2 text-brand-gold">37%</div>
            <div className="text-white/70 font-medium uppercase tracking-wider text-sm">{t('stats.recovery')}</div>
          </div>
          <div className="p-4">
            <div className="text-4xl lg:text-5xl font-extrabold mb-2">15K+</div>
            <div className="text-white/70 font-medium uppercase tracking-wider text-sm">{t('stats.convos')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;