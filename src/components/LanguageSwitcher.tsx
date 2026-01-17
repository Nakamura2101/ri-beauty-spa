
import React from 'react';
import type { Language } from '../types';

interface Props {
  current: Language;
  onLanguageChange: (lang: Language) => void;
}

export const LanguageSwitcher: React.FC<Props> = ({ current, onLanguageChange }) => {
  return (
    <div className="flex space-x-3 text-[12px] font-bold uppercase tracking-[0.2em] text-black">
      <button 
        onClick={() => onLanguageChange('vi')}
        className={`hover:opacity-70 transition-opacity ${current === 'vi' ? 'text-black border-b border-black' : ''}`}
      >
        VN
      </button>
      <span className="opacity-20 font-light">|</span>
      <button 
        onClick={() => onLanguageChange('en')}
        className={`hover:opacity-70 transition-opacity ${current === 'en' ? 'text-black border-b border-black' : ''}`}
      >
        EN
      </button>
      <span className="opacity-20 font-light">|</span>
      <button 
        onClick={() => onLanguageChange('jp')}
        className={`hover:opacity-70 transition-opacity ${current === 'jp' ? 'text-black border-b border-black' : ''}`}
      >
        JP
      </button>
    </div>
  );
};
