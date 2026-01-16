
import React from 'react';
import type { Language } from '../types';

interface Props {
  current: Language;
  onLanguageChange: (lang: Language) => void;
}

export const LanguageSwitcher: React.FC<Props> = ({ current, onLanguageChange }) => {
  return (
    <div className="flex space-x-3 text-[10px] font-bold uppercase tracking-[0.2em] text-spa-deep/60">
      <button 
        onClick={() => onLanguageChange('vi')}
        className={`hover:text-spa-green transition-colors ${current === 'vi' ? 'text-spa-deep border-b border-spa-deep' : ''}`}
      >
        VN
      </button>
      <span className="opacity-20 font-light">|</span>
      <button 
        onClick={() => onLanguageChange('en')}
        className={`hover:text-spa-green transition-colors ${current === 'en' ? 'text-spa-deep border-b border-spa-deep' : ''}`}
      >
        EN
      </button>
      <span className="opacity-20 font-light">|</span>
      <button 
        onClick={() => onLanguageChange('jp')}
        className={`hover:text-spa-green transition-colors ${current === 'jp' ? 'text-spa-deep border-b border-spa-deep' : ''}`}
      >
        JP
      </button>
    </div>
  );
};
