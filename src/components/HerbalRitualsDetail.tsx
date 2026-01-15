
import React from 'react';
import { HERBAL_ARTICLES, SQUARE_BOOKING_LINK } from '../constants';

interface Props {
  onBack: () => void;
}

export const HerbalRitualsDetail: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#fdfdfb] pt-32 pb-24 animate-fadeIn">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-24 flex flex-col items-center">
          <button 
            onClick={onBack}
            className="mb-12 text-[10px] uppercase tracking-[0.4em] font-bold text-spa-green flex items-center gap-3 hover:opacity-60 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            BACK TO HOME
          </button>
          
          <div className="space-y-3 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-spa-deep italic tracking-tight">
              ハーブの儀式
            </h1>
            <p className="text-[10px] tracking-[0.6em] text-spa-green/60 font-bold uppercase ml-[0.6em]">HERBAL RITUALS</p>
          </div>
          <div className="w-12 h-px bg-spa-green/20 mt-12"></div>
        </div>

        {/* Article Grid */}
        <div className="max-w-5xl mx-auto space-y-48">
          {HERBAL_ARTICLES.map((article, index) => (
            <div 
              key={article.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-20`}
            >
              <div className="w-full lg:w-1/2 relative group">
                <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-2xl">
                  <img 
                    src={article.image} 
                    alt={article.titleJp} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className={`absolute -z-10 w-full h-full border border-spa-green/10 top-8 ${index % 2 === 0 ? '-left-8' : '-right-8'}`}></div>
              </div>

              <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
                <span className="text-[9px] uppercase tracking-[0.8em] text-spa-green font-bold opacity-60">
                  SECTION 0{index + 1}
                </span>
                <div className="space-y-1">
                  <h2 className="text-3xl md:text-4xl font-serif text-spa-deep leading-tight tracking-wide">
                    {article.titleJp}
                  </h2>
                  <p className="text-[10px] tracking-widest text-spa-green/60 font-bold uppercase">{article.titleEn}</p>
                </div>
                <div className="text-gray-500 font-light leading-relaxed text-[15px] md:text-base whitespace-pre-line text-justify">
                  {article.content}
                </div>
                <div className="pt-6">
                  <a 
                    href={SQUARE_BOOKING_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-b border-spa-deep/20 pb-2 text-[9px] uppercase tracking-[0.5em] font-bold text-spa-deep hover:text-spa-green hover:border-spa-green transition-all"
                  >
                    EXPERIENCE NOW
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-40 text-center">
          <div className="w-20 h-px bg-spa-green/20 mx-auto mb-12"></div>
          <button 
            onClick={onBack}
            className="px-16 py-6 bg-spa-deep text-white text-[10px] uppercase tracking-[0.5em] font-bold transition-all hover:bg-spa-green shadow-2xl"
          >
            ホームへ戻る
          </button>
        </div>
      </div>
    </div>
  );
};
