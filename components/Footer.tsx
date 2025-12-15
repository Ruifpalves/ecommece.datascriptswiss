import React from 'react';
import { Linkedin, Instagram, Facebook, ShoppingBag } from 'lucide-react';
import Logo from './ui/Logo';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0a0a0a] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
            <Logo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">

          {/* Column 1 */}
          <div>
            <h4 className="font-bold text-white mb-6">{t('footer.services')}</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>{t('footer.service1')}</li>
              <li>{t('footer.service2')}</li>
              <li>{t('footer.service3')}</li>
              <li>{t('footer.service4')}</li>
              <li>{t('footer.service5')}</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-bold text-white mb-6">{t('footer.resources')}</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="https://recoverycalculator.datascript.ch/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
                  {t('footer.resource1')}
                </a>
              </li>
              <li>
                <a href="https://abandonedcard.datascript.ch/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
                  {t('footer.resource2')}
                </a>
              </li>
              <li>
                <a href="https://portfolio.datascript.ch" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
                  {t('footer.resource3')}
                </a>
              </li>
              <li>
                <a href="https://form.datascript.ch/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
                  {t('footer.resource4')}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-bold text-white mb-6">{t('footer.connect')}</h4>
            <ul className="space-y-3 text-sm text-gray-500 mb-6">
              <li>rui@datascript.ch</li>
              <li>+41 44 123 45 67</li>
              <li>Schweiz, Switzerland</li>
            </ul>
            <div className="flex gap-4 text-gray-500">
               <a href="https://www.linkedin.com/in/ru%c3%ad-alves-b5a8ab2bb/" target="_blank" rel="noopener noreferrer">
                 <Linkedin className="hover:text-brand-gold cursor-pointer transition-colors" size={20} />
               </a>
               <a href="https://www.instagram.com/data_scriptgmbh/reels/" target="_blank" rel="noopener noreferrer">
                 <Instagram className="hover:text-brand-gold cursor-pointer transition-colors" size={20} />
               </a>
               <a href="https://www.facebook.com/people/DataScriptgmbh/61559828462583/" target="_blank" rel="noopener noreferrer">
                 <Facebook className="hover:text-brand-gold cursor-pointer transition-colors" size={20} />
               </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-sm text-gray-600">
             {t('footer.copyright')}
           </p>
           <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
             <div className="flex items-center gap-1 text-xs font-bold text-gray-500 border border-gray-800 px-2 py-1 rounded">
                <ShoppingBag size={12} /> {t('footer.shopify')}
             </div>
             <div className="flex items-center gap-1 text-xs font-bold text-gray-500 border border-gray-800 px-2 py-1 rounded">
                {t('footer.gdpr')}
             </div>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;