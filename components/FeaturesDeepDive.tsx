import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CheckCircle2 } from 'lucide-react';

interface FeatureProps {
  title: string;
  headline: string;
  bullets: string[];
  metric: string;
  imageSrc: string;
  imageAlt: string;
  scale?: number;
}

const FeatureCard: React.FC<FeatureProps> = ({ title, headline, bullets, metric, imageSrc, imageAlt, scale = 1.8 }) => (
  <div className="bg-[#121212] rounded-[2rem] p-6 md:p-8 border border-white/5 shadow-xl hover:border-brand-gold/30 transition-all duration-300 flex flex-col h-full group hover:bg-[#151515]">
    <div className="mb-8 rounded-2xl overflow-hidden relative aspect-video">
      <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover object-center transition-transform duration-700" style={{ transform: `scale(${scale})` }} onMouseEnter={(e) => e.currentTarget.style.transform = `scale(${scale + 0.05})`} onMouseLeave={(e) => e.currentTarget.style.transform = `scale(${scale})`} />
    </div>
    
    <div className="flex-1 flex flex-col">
      <div className="text-brand-gold font-extrabold text-xs uppercase tracking-[0.15em] mb-3">{title}</div>
      <h3 className="text-2xl font-bold text-white mb-6 leading-tight">{headline}</h3>
      
      <ul className="space-y-4 mb-8 flex-1">
        {bullets.map((bullet, idx) => (
          <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed font-medium">
            <CheckCircle2 size={18} className="text-brand-gold mt-0.5 shrink-0" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      
      <div className="bg-white/5 p-5 rounded-2xl border border-white/5 shadow-sm">
        <p className="text-sm font-bold text-gray-300 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
          {metric}
        </p>
      </div>
    </div>
  </div>
);

const FeaturesDeepDive: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: t('featuresDeep.whatsapp.title'),
      headline: t('featuresDeep.whatsapp.headline'),
      bullets: [
        t('featuresDeep.whatsapp.bullet1'),
        t('featuresDeep.whatsapp.bullet2'),
        t('featuresDeep.whatsapp.bullet3'),
        t('featuresDeep.whatsapp.bullet4')
      ],
      metric: t('featuresDeep.whatsapp.metric'),
      imageSrc: "/WhatsApp Cart Recovery.png",
      imageAlt: "Screenshot: WhatsApp convo showing abandoned cart message + customer positive response",
      scale: 2.5
    },
    {
      title: t('featuresDeep.aiagent.title'),
      headline: t('featuresDeep.aiagent.headline'),
      bullets: [
        t('featuresDeep.aiagent.bullet1'),
        t('featuresDeep.aiagent.bullet2'),
        t('featuresDeep.aiagent.bullet3'),
        t('featuresDeep.aiagent.bullet4')
      ],
      metric: t('featuresDeep.aiagent.metric'),
      imageSrc: "/Website AI Agent.png",
      imageAlt: "Screenshot: Website chat widget showing AI answering 'Where's my order?'",
      scale: 3.0
    },
    {
      title: t('featuresDeep.research.title'),
      headline: t('featuresDeep.research.headline'),
      bullets: [
        t('featuresDeep.research.bullet1'),
        t('featuresDeep.research.bullet2'),
        t('featuresDeep.research.bullet3'),
        t('featuresDeep.research.bullet4')
      ],
      metric: t('featuresDeep.research.metric'),
      imageSrc: "/Product Research AI.png",
      imageAlt: "Screenshot: Dashboard showing 'Trending Products' list with metrics",
      scale: 3.0
    },
    {
      title: t('featuresDeep.video.title'),
      headline: t('featuresDeep.video.headline'),
      bullets: [
        t('featuresDeep.video.bullet1'),
        t('featuresDeep.video.bullet2'),
        t('featuresDeep.video.bullet3'),
        t('featuresDeep.video.bullet4')
      ],
      metric: t('featuresDeep.video.metric'),
      imageSrc: "/Video Generator.png",
      imageAlt: "Screenshot: Before/After product image transforms into video with text overlay",
      scale: 3.0
    },
    {
      title: t('featuresDeep.image.title'),
      headline: t('featuresDeep.image.headline'),
      bullets: [
        t('featuresDeep.image.bullet1'),
        t('featuresDeep.image.bullet2'),
        t('featuresDeep.image.bullet3'),
        t('featuresDeep.image.bullet4')
      ],
      metric: t('featuresDeep.image.metric'),
      imageSrc: "/AI Image Studio.png",
      imageAlt: "Screenshot: Product on white background transforming into lifestyle scene",
      scale: 1.5
    },
    {
      title: t('featuresDeep.analytics.title'),
      headline: t('featuresDeep.analytics.headline'),
      bullets: [
        t('featuresDeep.analytics.bullet1'),
        t('featuresDeep.analytics.bullet2'),
        t('featuresDeep.analytics.bullet3'),
        t('featuresDeep.analytics.bullet4')
      ],
      metric: t('featuresDeep.analytics.metric'),
      imageSrc: "/Advanced Analytics.png",
      imageAlt: "Screenshot: Dashboard with multiple widgets, searches, sentiment, recovery rate",
      scale: 3.0
    }
  ];

  return (
    <section className="py-24 bg-brand-dark" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-6">
            {t('features.headline')} <span className="text-brand-gold">{t('features.headline.highlight')}</span> {t('features.headline.suffix')}
          </h2>
          <p className="text-lg text-gray-400 font-medium">
            {t('features.subheadline')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesDeepDive;