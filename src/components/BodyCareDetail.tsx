import React from 'react';
import { BODY_WELLNESS_ADDITIONAL_OPTIONS, BODY_WELLNESS_MAIN_THERAPIES, SQUARE_BOOKING_LINK } from '../constants';

interface Props {
  onBack: () => void;
}

export const BodyCareDetail: React.FC<Props> = ({ onBack }) => {
  const mainServices = BODY_WELLNESS_MAIN_THERAPIES;
  const optionServices = BODY_WELLNESS_ADDITIONAL_OPTIONS;

  return (
    <div className="min-h-screen bg-[#fdfdfb] pt-32 pb-24 animate-fadeIn text-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-24 flex flex-col items-center text-center">
          <button 
            onClick={onBack}
            className="mb-12 text-[14px] uppercase tracking-[0.4em] font-bold text-black flex items-center gap-3 hover:opacity-60 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            BACK TO HOME
          </button>
          
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-black italic tracking-tight">
              ボディケア
            </h1>
            <p className="text-[13px] tracking-[0.6em] text-black font-bold uppercase ml-[0.6em]">BODY WELLNESS</p>
          </div>
          <div className="w-12 h-px bg-spa-green/20 mt-12"></div>
        </div>

        {/* Part 1: Main Services */}
        <div className="max-w-6xl mx-auto mb-32">
          <div className="mb-16 border-l-2 border-spa-green pl-6 py-2">
            <h2 className="text-4xl md:text-5xl font-serif text-black">ボディケアサービス</h2>
            <p className="text-[12px] uppercase tracking-[0.3em] text-black font-bold mt-1">MAIN THERAPIES</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {mainServices.map((article) => (
              <div key={article.id} className="flex flex-col space-y-6 group">
                <div className="relative">
                  <div className="aspect-[16/10] overflow-hidden rounded-sm shadow-2xl bg-white p-2">
                    <img 
                      src={article.imageSrc} 
                      alt={article.titleJp} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-5 left-5 bg-white/95 px-3 py-1.5 shadow-sm">
                    <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-black">{article.tag}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-3xl font-serif text-black leading-tight">
                      {article.titleJp}
                    </h3>
                    <p className="text-[11px] tracking-widest text-black font-bold uppercase">{article.subtitleEn}</p>
                  </div>
                  <div className="text-black font-light text-base leading-relaxed text-justify">
                    {article.description.map((p, idx) => (
                      <p key={idx} className="mb-3 last:mb-0">
                        {p}
                      </p>
                    ))}
                  </div>
                  <a href={article.ctaHref} target="_blank" rel="noopener noreferrer" className="inline-block text-[11px] uppercase tracking-[0.4em] font-bold text-black border-b border-black/30 pb-1 hover:opacity-70 transition-opacity">
                    {article.ctaLabel}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Additional Options - Larger Grid for more items */}
        <div className="max-w-6xl mx-auto bg-[#F0F4EF] p-8 md:p-20 rounded-sm border border-gray-100">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-black">追加オプション</h2>
            <p className="text-[12px] uppercase tracking-[0.4em] text-black font-bold mt-2">ADDITIONAL OPTIONS</p>
            <div className="w-10 h-px bg-spa-green/20 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {optionServices.map((article) => (
              <div key={article.id} className="flex flex-col space-y-4 text-center group">
                 <div className="relative aspect-square w-20 h-20 md:w-24 md:h-24 mx-auto overflow-hidden rounded-full border-4 border-white shadow-md">
                  <img 
                    src={article.imageSrc} 
                    alt={article.titleJp} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="space-y-2">
                  <div className="space-y-1">
                    <h3 className="text-[16px] md:text-[18px] font-serif text-black font-bold leading-tight px-1">
                      {article.titleJp}
                    </h3>
                    <p className="text-[9px] md:text-[10px] tracking-[0.1em] text-black font-bold uppercase">{article.subtitleEn}</p>
                  </div>
                  <p className="text-black font-light text-[12px] md:text-[15px] leading-relaxed px-2 line-clamp-2 group-hover:line-clamp-none transition-all">
                    {article.descriptionShort}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 pt-10 border-t border-gray-200 text-center">
             <p className="text-[12px] text-black font-light italic mb-8">
               ※ オプションメニューは、メインコースと組み合わせてご利用いただけます。
             </p>
             <a 
              href={SQUARE_BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-spa-deep text-white px-10 py-4 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-spa-green transition-all shadow-lg rounded-sm"
            >
              オプションを含めて予約する
            </a>
          </div>
        </div>

        {/* Back Button Footer */}
        <div className="mt-40 text-center">
          <div className="w-20 h-px bg-spa-green/20 mx-auto mb-12"></div>
          <button 
            onClick={onBack}
            className="px-16 py-6 bg-spa-deep text-white text-[12px] uppercase tracking-[0.5em] font-bold transition-all hover:bg-spa-green shadow-2xl rounded-sm"
          >
            ホームへ戻る
          </button>
        </div>
      </div>
    </div>
  );
};