import React from 'react';
import { CheckCircle2, Star, Shield, Clock, Headset, XCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TrustBar: React.FC = () => {
  const { t } = useLanguage();

  const items = [
    { icon: <CheckCircle2 size={18} />, key: "trust.shopify" },
    { icon: <Star size={18} />, key: "trust.rating" },
    { icon: <Shield size={18} />, key: "trust.gdpr" },
    { icon: <Clock size={18} />, key: "trust.uptime" },
    { icon: <Headset size={18} />, key: "trust.support" },
    { icon: <XCircle size={18} />, key: "trust.cancel" },
  ];

  return (
    <div className="bg-[#0a0a0a] border-y border-white/5 py-3 overflow-hidden sticky top-0 z-40 backdrop-blur-md bg-opacity-90">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-2">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[11px] md:text-xs lg:text-sm font-medium text-gray-400 whitespace-nowrap">
              <span className="text-brand-gold flex-shrink-0">{item.icon}</span>
              <span>{t(item.key)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;