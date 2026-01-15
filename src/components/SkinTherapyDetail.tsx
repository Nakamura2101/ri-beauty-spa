import React from 'react';
import { SKIN_CARE_ARTICLES, SQUARE_BOOKING_LINK } from '../constants';

interface Props {
  onBack: () => void;
}

export const SkinTherapyDetail: React.FC<Props> = ({ onBack }) => {
  const mainServices = SKIN_CARE_ARTICLES.filter(item => item.tagEn !== 'OPTION');
  const optionServices = SKIN_CARE_ARTICLES.filter(item => item.tagEn === 'OPTION');

  return (
    <div className="min-h-screen bg-[#fdfdfb] pt-32 pb-24 animate-fadeIn">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-24 flex flex-col items-center text-center">
          <button 
            onClick={onBack}
            className="mb-12 text-[10px] uppercase tracking-[0.4em] font-bold text-spa-green flex items-center gap-3 hover:opacity-60 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            BACK TO HOME
          </button>
          
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-spa-deep italic tracking-tight">
              スキンケア
            </h1>
            <p className="text-[10px] tracking-[0.6em] text-spa-green/60 font-bold uppercase ml-[0.6em]">SKIN THERAPY</p>
          </div>
          <div className="w-12 h-px bg-spa-green/20 mt-12"></div>
        </div>

        {/* Part 1: Main Services */}
        <div className="max-w-6xl mx-auto mb-32">
          <div className="mb-16 border-l-4 border-spa-green pl-6 py-2">
            <h2 className="text-2xl md:text-3xl font-serif text-spa-deep">スキンセラピー サービス</h2>
            <p className="text-[9px] uppercase tracking-[0.3em] text-spa-green/60 font-bold mt-1">MAIN TREATMENTS</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {mainServices.map((article, index) => (
              <div key={article.id} className="flex flex-col space-y-6 group">
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm shadow-lg">
                  <img 
                    src={article.image} 
                    alt={article.titleJp} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 px-3 py-1.5 shadow-sm">
                    <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-spa-green">{article.tagEn}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-serif text-spa-deep group-hover:text-spa-green transition-colors leading-tight">
                      {article.titleJp}
                    </h3>
                    <p className="text-[9px] tracking-widest text-spa-green/40 font-bold uppercase">{article.titleEn}</p>
                  </div>
                  <p className="text-gray-500 font-light text-sm leading-relaxed text-justify">
                    {article.content}
                  </p>
                  <a href={SQUARE_BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="inline-block text-[9px] uppercase tracking-[0.4em] font-bold text-spa-deep border-b border-gray-100 pb-1 hover:border-spa-green hover:text-spa-green transition-all">
                    EXPERIENCE NOW
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Additional Options */}
        <div className="max-w-6xl mx-auto bg-gray-50/50 p-12 md:p-20 rounded-sm border border-gray-100">
          <div className="mb-16 text-center">
            <h2 className="text-2xl md:text-3xl font-serif text-spa-deep">スキンケア・オプション</h2>
            <p className="text-[9px] uppercase tracking-[0.4em] text-spa-green/60 font-bold mt-2">ADDITIONAL OPTIONS</p>
            <div className="w-10 h-px bg-spa-green/20 mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {optionServices.map((article) => (
              <div key={article.id} className="flex flex-col space-y-6 text-center group">
                 <div className="relative aspect-square w-24 h-24 mx-auto overflow-hidden rounded-full border-4 border-white shadow-xl">
                  <img 
                    src={article.image} 
                    alt={article.titleJp} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-lg font-serif text-spa-deep font-bold">
                      {article.titleJp}
                    </h3>
                    <p className="text-[8px] tracking-[0.2em] text-spa-green/60 font-bold uppercase">{article.titleEn}</p>
                  </div>
                  <p className="text-gray-500 font-light text-xs leading-relaxed px-4 line-clamp-3 group-hover:line-clamp-none transition-all">
                    {article.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
             <p className="text-[10px] text-gray-400 font-light italic">
               ※ オプションメニューは、メインコースと組み合わせてご利用いただけます。
             </p>
             <div className="mt-8">
               <a 
                href={SQUARE_BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-spa-deep text-white px-10 py-4 text-[9px] uppercase tracking-[0.3em] font-bold hover:bg-spa-green transition-all shadow-lg rounded-sm"
              >
                予約ページへ
              </a>
             </div>
          </div>
        </div>

        {/* Back Button Footer */}
        <div className="mt-40 text-center">
          <div className="w-20 h-px bg-spa-green/20 mx-auto mb-12"></div>
          <button 
            onClick={onBack}
            className="px-16 py-6 bg-spa-deep text-white text-[10px] uppercase tracking-[0.5em] font-bold transition-all hover:bg-spa-green shadow-2xl rounded-sm"
          >
            ホームへ戻る
          </button>
        </div>
      </div>
    </div>
  );
};