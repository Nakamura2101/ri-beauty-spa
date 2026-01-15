import React, { useState, useEffect } from 'react';
import { UI_STRINGS, SQUARE_BOOKING_LINK, HERO_IMAGES } from '../constants';

export const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000); // Đổi ảnh sau mỗi 6 giây cho cảm giác chậm rãi hơn
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out ${
              index === currentImageIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
          >
            <img 
              src={img} 
              alt={`Ri Beauty Spa Slide ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-[10000ms] ease-linear"
            />
          </div>
        ))}
        {/* Soft Overlay - Giữ độ trong trẻo cho ảnh */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-16 space-y-8">
          {/* Slogan EN: font Light, tracking rộng */}
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-serif text-white leading-tight font-light tracking-[0.25em] animate-fadeIn whitespace-nowrap drop-shadow-md">
            {UI_STRINGS.sloganEn}
          </h1>
          
          <div className="w-8 h-px bg-white/30 animate-fadeIn"></div>
          
          {/* Slogan JP: font Extra Light, tracking cực rộng */}
          <p className="text-sm md:text-lg lg:text-xl tracking-[0.5em] text-white/80 font-extralight italic animate-fadeIn drop-shadow-sm px-4">
            {UI_STRINGS.sloganJp}
          </p>
        </div>
        
        <div className="flex justify-center animate-fadeIn">
          <a 
            href={SQUARE_BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 bg-white/90 backdrop-blur-sm text-spa-deep text-[10px] uppercase tracking-[0.6em] font-bold transition-all duration-500 hover:bg-white hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 inline-block rounded-sm border border-white/20"
          >
            {UI_STRINGS.bookingCta}
          </a>
        </div>
      </div>

      {/* Progress Indicators - Mảnh mai hơn */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {HERO_IMAGES.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-[1px] transition-all duration-700 rounded-full ${
              index === currentImageIndex ? 'w-12 bg-white' : 'w-4 bg-white/20'
            }`}
          />
        ))}
      </div>

      <div className="absolute left-10 bottom-20 hidden lg:block opacity-30">
        <div className="vertical-text text-[8px] uppercase tracking-[0.6em] text-white origin-left -rotate-90 font-light">
          Healing Nature • Kawasaki Japan
        </div>
      </div>
    </section>
  );
};