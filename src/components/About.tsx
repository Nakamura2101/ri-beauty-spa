import React from 'react';
import { UI_STRINGS, LOGO_URL } from '../constants';

interface Props {
  onReadMore: () => void;
}

export const About: React.FC<Props> = ({ onReadMore }) => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Faint Logo Watermark Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <img 
          src={LOGO_URL} 
          alt="" 
          className="w-full max-w-5xl h-auto object-contain grayscale"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Text Content */}
          <div className="w-full lg:w-7/12 space-y-12 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="text-[9px] uppercase tracking-[0.8em] text-black font-bold block">OUR STORY</span>
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-black leading-tight font-light tracking-wide">
                  {UI_STRINGS.aboutTitleJp}
                </h2>
                <p className="text-sm md:text-base tracking-[0.4em] text-black font-bold uppercase">
                  {UI_STRINGS.aboutTitleEn}
                </p>
              </div>
            </div>
            <div className="w-16 h-px bg-spa-green/20"></div>
            
            <div className="text-black leading-relaxed text-base md:text-lg font-light max-w-2xl whitespace-pre-line text-justify italic">
              {UI_STRINGS.aboutTeaserJp}
            </div>
            
            <button 
              onClick={onReadMore}
              className="inline-block text-[10px] uppercase tracking-[0.4em] font-bold text-black border-b border-black/20 pb-2 hover:opacity-70 transition-opacity"
            >
              READ FULL STORY
            </button>
          </div>
          
          {/* Image Content */}
          <div className="w-full lg:w-5/12 order-1 lg:order-2">
            <div className="relative group max-w-md mx-auto lg:mx-0">
              <div className="relative z-10 overflow-hidden rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-50 bg-white">
                <div className="relative aspect-[3/4]">
                  <img 
                    src="/images/home/ourphilosophy.jpg" 
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-[1.05] brightness-[1.02] contrast-[1.02]"
                    alt="Ri Beauty Spa Philosophy"
                  />
                </div>
              </div>
              {/* Decorative frame (centered so the image sits in the middle of the frame) */}
              <div className="absolute -inset-6 border border-spa-green/5 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};