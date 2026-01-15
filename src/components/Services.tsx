
import React from 'react';
import { FEATURED_POSTS, UI_STRINGS, SQUARE_BOOKING_LINK } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="personal-services" className="py-24 md:py-32 bg-[#fdfdfb]">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-24 space-y-4">
          <span className="text-[9px] uppercase tracking-[0.8em] text-spa-green font-bold opacity-60 block">CURATED SELECTION</span>
          <div className="space-y-3">
            {/* Tiếng Nhật to hơn và làm tiêu đề chính */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-spa-deep leading-tight font-light tracking-wide">
              {UI_STRINGS.servicesTitleJp}
            </h2>
            {/* Tiếng Anh nhỏ lại làm phụ đề tinh tế */}
            <p className="text-sm md:text-base tracking-[0.4em] text-spa-green/70 font-bold uppercase">
              {UI_STRINGS.servicesTitleEn}
            </p>
          </div>
          <div className="w-10 h-px bg-spa-deep/10 mx-auto mt-8"></div>
        </div>

        {/* Featured Articles Grid */}
        <div className="max-w-full mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {FEATURED_POSTS.map((post) => (
              <div 
                key={post.id} 
                className="flex flex-col space-y-8 group animate-fadeIn"
              >
                {/* Image Wrapper */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-xl">
                  <img 
                    src={post.image} 
                    alt={post.titleJp} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2">
                    <div className="flex flex-col text-right">
                      <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-spa-deep">{post.tagEn}</span>
                      <span className="text-[7px] tracking-widest font-medium text-spa-green">{post.tagJp}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 px-1">
                  <div className="flex flex-col space-y-1">
                    <h3 className="text-xl font-serif text-spa-deep group-hover:text-spa-green transition-colors duration-500 leading-snug tracking-wide">
                      {post.titleEn}
                    </h3>
                    <p className="text-[11px] tracking-widest text-spa-green/80 font-bold uppercase">{post.titleJp}</p>
                  </div>
                  <p className="text-gray-500 font-light text-[14px] leading-relaxed text-justify line-clamp-3">
                    {post.content}
                  </p>
                  <div className="pt-2">
                    <a 
                      href={SQUARE_BOOKING_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-[9px] uppercase tracking-[0.4em] font-bold text-spa-deep border-b border-spa-deep/20 pb-1.5 hover:text-spa-green hover:border-spa-green transition-all"
                    >
                      DETAILS & BOOKING
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
