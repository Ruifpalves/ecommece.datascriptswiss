import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Button from './ui/Button';
import { CheckCircle } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
          {t('cta.headline')}<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-purple">{t('cta.headline.highlight')}</span>
        </h2>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
          {t('cta.subheadline')}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <div className="text-center w-full sm:w-auto">
            <a href="https://form.datascript.ch/" target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
              <Button variant="primary" size="xl" className="w-full sm:w-auto">{t('cta.button.primary')}</Button>
            </a>
            <p className="mt-4 text-xs text-gray-500 font-medium">{t('cta.button.primary.subtitle')}</p>
          </div>

          <div className="text-center w-full sm:w-auto">
             <a href="https://calendar.app.google/AoxeFQ2ntfXfGZca7" target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
              <Button variant="ghost" size="xl" className="w-full sm:w-auto border border-white/20">{t('cta.button.secondary')}</Button>
             </a>
             <p className="mt-4 text-xs text-gray-500 font-medium">{t('cta.button.secondary.subtitle')}</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm text-gray-400 font-medium">
           <div className="flex items-center gap-2"><CheckCircle size={18} className="text-brand-gold" /> {t('cta.feature1')}</div>
           <div className="flex items-center gap-2"><CheckCircle size={18} className="text-brand-gold" /> {t('cta.feature2')}</div>
           <div className="flex items-center gap-2"><CheckCircle size={18} className="text-brand-gold" /> {t('cta.feature3')}</div>
           <div className="flex items-center gap-2"><CheckCircle size={18} className="text-brand-gold" /> {t('cta.feature4')}</div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;