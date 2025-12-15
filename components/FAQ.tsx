import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9'];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('faq.headline')}
          </h2>
          <p className="text-lg text-gray-400">
            {t('faq.subheadline')}
          </p>
        </div>

        <div className="space-y-4">
          {faqKeys.map((key, idx) => (
            <div key={idx} className="bg-[#121212] rounded-xl border border-white/5 overflow-hidden shadow-sm transition-all hover:border-brand-gold/20">
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-bold text-lg text-gray-200">{t(`faq.${key}`)}</span>
                <span className="text-brand-gold ml-4">
                  {openIndex === idx ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>

              <div
                className={`px-6 text-gray-400 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
                style={{ whiteSpace: 'pre-line' }}
              >
                {t(`faq.a${key.substring(1)}`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;