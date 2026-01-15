
import React from 'react';
import { UI_STRINGS } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.6em] text-spa-green font-bold opacity-60 block">GET IN TOUCH</span>
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-serif text-spa-deep font-light tracking-tight">
              {UI_STRINGS.contactTitleEn}
            </h2>
            <p className="text-xs tracking-[0.5em] text-spa-green/60 font-bold uppercase">{UI_STRINGS.contactTitleJp}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-16 text-center">
          <div className="space-y-4">
            <h3 className="text-[10px] uppercase tracking-[0.5em] text-spa-green font-bold mb-6">{UI_STRINGS.addressLabel}</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              〒212-0016 神奈川県川崎市<br />
              幸区南幸町2-10-12-101
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-[10px] uppercase tracking-[0.5em] text-spa-green font-bold mb-6">{UI_STRINGS.phoneLabel}</h3>
            <p className="text-3xl font-serif text-spa-deep tracking-tight">
              070-4790-6868
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-[10px] uppercase tracking-[0.5em] text-spa-green font-bold mb-6">{UI_STRINGS.emailLabel}</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              ribeauty.jp@gmail.com
            </p>
          </div>
        </div>

        {/* Embedded Map Visual */}
        <div className="mt-20 h-[500px] w-full bg-white shadow-2xl border border-gray-50 overflow-hidden relative group rounded-sm">
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1600" 
            alt="Map Preview" 
            className="w-full h-full object-cover opacity-60 grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <a 
              href="https://maps.app.goo.gl/3J9Y9BoVDvfHbAcY7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-spa-deep text-white px-12 py-5 shadow-2xl text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-spa-green transition-all duration-300"
            >
              {UI_STRINGS.viewMap}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
