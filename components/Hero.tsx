import React from 'react';
import Button from './ui/Button';
import Logo from './ui/Logo';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';
import { ShieldCheck, Star, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-32 overflow-hidden bg-brand-dark">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-hero-glow pointer-events-none"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-purple/20 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navbar */}
        <div className="flex justify-between items-center mb-16 lg:mb-24">
            <Logo />
            <LanguageSwitcher />
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Copy Column */}
          <div className="lg:col-span-6 text-center lg:text-left mb-16 lg:mb-0">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold mb-8 animate-fade-in-up">
              <TrendingUp size={16} className="text-brand-gold" />
              <span className="text-gray-200">{t('hero.badge')}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              {t('hero.headline')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-purple">{t('hero.headline.highlight')}</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              {t('hero.subheadline')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a href="https://form.datascript.ch/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-14 w-full sm:w-auto">
                  {t('hero.cta.primary')}
                </Button>
              </a>
              <a href="https://calendar.app.google/AoxeFQ2ntfXfGZca7" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="lg" className="h-14 border border-white/10 w-full sm:w-auto">
                  {t('hero.cta.secondary')}
                </Button>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <div className="flex text-brand-gold drop-shadow-lg">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <span className="text-gray-300">{t('hero.rating')}</span>
              </div>
              <div className="flex items-center gap-2">
                 <ShieldCheck size={16} className="text-brand-purple" />
                 <span className="text-gray-300">{t('hero.gdpr')}</span>
              </div>
            </div>
          </div>

          {/* Visual Column - Glassmorphism Dashboard */}
          <div className="lg:col-span-6 relative perspective-1000">
            
            {/* Main Dashboard Card */}
            <div className="relative bg-[#121212]/80 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] transform transition-transform hover:scale-[1.01] duration-500">
              {/* Header Mock */}
              <div className="bg-white/5 px-6 py-4 border-b border-white/5 flex justify-between items-center">
                 <div className="flex items-center gap-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    </div>
                 </div>
                 <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Client Dashboard</div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-brand-dark p-4 rounded-xl border border-white/5">
                    <p className="text-xs text-gray-500 font-semibold mb-1 uppercase">Revenue Today</p>
                    <p className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">€4,732</p>
                  </div>
                  <div className="bg-brand-dark p-4 rounded-xl border border-white/5">
                    <p className="text-xs text-gray-500 font-semibold mb-1 uppercase">Recovered</p>
                    <p className="text-xl font-extrabold text-white">43</p>
                  </div>
                  <div className="bg-brand-dark p-4 rounded-xl border border-white/5">
                    <p className="text-xs text-gray-500 font-semibold mb-1 uppercase">Conversion</p>
                    <p className="text-xl font-extrabold text-brand-purple">41%</p>
                  </div>
                </div>

                {/* Chat Simulation */}
                <div className="bg-brand-dark rounded-2xl border border-white/5 p-5 relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold"></div>
                   <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center text-brand-dark font-bold text-xs">AI</div>
                        <div>
                          <span className="text-sm font-bold text-gray-200 block">WhatsApp Agent</span>
                          <span className="text-[10px] text-green-500 font-medium flex items-center gap-1">● Active</span>
                        </div>
                      </div>
                   </div>
                   
                   <div className="space-y-4">
                      {/* AI Message */}
                      <div className="flex gap-3">
                        <div className="bg-[#1A1A1A] p-4 rounded-2xl rounded-tl-none max-w-[90%] text-sm text-gray-300 border border-white/5">
                          Hi Maria! We noticed you left these <strong className="text-white">Wireless Earbuds Pro</strong> in your cart. Still interested?
                        </div>
                      </div>

                      {/* User Reply */}
                      <div className="flex gap-3 justify-end">
                        <div className="bg-brand-purple p-4 rounded-2xl rounded-tr-none max-w-[85%] text-sm text-white font-medium shadow-lg shadow-purple-900/20">
                          Yes, do you have a discount?
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
            
            {/* Floating Element - Product Insight */}
            <div className="hidden md:block absolute -bottom-10 -right-4 bg-[#121212] border border-brand-gold/30 p-4 rounded-xl shadow-2xl w-64 animate-[float_6s_ease-in-out_infinite]">
               <div className="flex justify-between items-center mb-2">
                 <p className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">🔥 Opportunity Detected</p>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-gray-800 rounded-lg shrink-0 flex items-center justify-center text-xl">🎧</div>
                 <div>
                   <p className="text-sm font-bold text-white leading-tight">Wireless Audio</p>
                   <p className="text-xs text-gray-400 mt-1">High demand, low stock</p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;