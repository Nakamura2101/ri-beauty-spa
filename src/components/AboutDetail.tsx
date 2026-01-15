import React from 'react';
import { UI_STRINGS } from '../constants';

interface Props {
  onBack: () => void;
}

export const AboutDetail: React.FC<Props> = ({ onBack }) => {
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
              私たちについて
            </h1>
            <p className="text-[10px] tracking-[0.6em] text-spa-green/60 font-bold uppercase ml-[0.6em]">ABOUT RI BEAUTY SPA</p>
          </div>
          <div className="w-12 h-px bg-spa-green/20 mt-12"></div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto">
          {/* Ảnh to và không bị cắt aspect ratio */}
          <div className="relative mb-24 overflow-hidden rounded-sm shadow-2xl">
            <img 
              src="https://i.postimg.cc/DfG42dLr/QPSF7611.jpg" 
              loading="lazy"
              className="w-full h-auto block"
              alt="Spa Atmosphere"
            />
            <div className="absolute inset-0 bg-spa-deep/5 pointer-events-none"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-gray-600 font-light leading-loose text-lg whitespace-pre-line text-justify">
              {UI_STRINGS.aboutFullContentJp}
            </div>

            <div className="bg-eucalyptus/30 p-12 md:p-16 rounded-sm border border-spa-green/5 space-y-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-serif text-spa-deep italic tracking-wide">Akatsuki Tokyo 株式会社</h2>
                <p className="text-[10px] uppercase tracking-[0.4em] text-spa-green font-bold opacity-60">MANAGEMENT & OPERATION</p>
              </div>
              <div className="w-10 h-px bg-spa-green/20"></div>
              <p className="text-gray-500 font-light leading-relaxed">
                Ri Beauty Spa は、Akatsuki Tokyo 株式会社の管理・運営のもと、長く信頼いただけるサロンを目指しています。お客様の満足 và 安全、そして心地よい体験を第一に、これからも丁寧に積み重ねてまいります。
              </p>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
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