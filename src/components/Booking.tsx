import React from 'react';
import { UI_STRINGS, SQUARE_BOOKING_LINK, GOOGLE_MAPS_LINK } from '../constants';

export const Booking: React.FC = () => {
  return (
    <section id="booking" className="py-24 md:py-32 bg-[#f8f7f5]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch border border-spa-light shadow-2xl rounded-sm overflow-hidden min-h-[600px]">
          
          {/* Booking Content with Background Image */}
          <div className="relative flex-1 flex flex-col justify-center overflow-hidden">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://i.postimg.cc/V665QX19/RUSZ4198.jpg" 
                alt="Reservation Background" 
                className="w-full h-full object-cover"
              />
              {/* Soft Gradient Overlay - Giữ khả năng đọc chữ */}
              <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]"></div>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 p-10 md:p-20 space-y-12">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.8em] text-spa-green font-bold block opacity-60">RESERVATION</span>
                <div className="space-y-2">
                  <h2 className="text-3xl md:text-5xl font-serif text-spa-deep font-light leading-tight tracking-tight">
                    {UI_STRINGS.bookingTitleJp}
                  </h2>
                  <p className="text-[8px] md:text-[9px] tracking-[0.6em] text-spa-green/50 font-bold uppercase">
                    {UI_STRINGS.bookingTitleEn}
                  </p>
                </div>
                <div className="w-16 h-px bg-spa-green/30 mt-6"></div>
              </div>
              
              <p className="text-gray-600 font-light text-lg leading-relaxed max-w-lg">
                {UI_STRINGS.bookingContent}
              </p>
              
              <div className="pt-8">
                <a 
                  href={SQUARE_BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-16 py-6 bg-spa-green text-white text-[10px] uppercase tracking-[0.5em] font-bold transition-all hover:bg-spa-deep shadow-xl hover:shadow-2xl hover:-translate-y-1 transform rounded-sm text-center min-w-[300px]"
                >
                  {UI_STRINGS.bookingCta}
                </a>
              </div>
            </div>
          </div>
          
          {/* Maps / QR Section */}
          <div className="w-full md:w-96 bg-white p-12 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-spa-light">
            <div className="bg-gray-50 p-6 shadow-sm mb-8 rounded-sm border border-gray-100">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://maps.app.goo.gl/3J9Y9BoVDvfHbAcY7" 
                alt="Maps QR" 
                className="w-40 h-40 opacity-80 mix-blend-multiply"
              />
            </div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-spa-deep font-bold mb-4 opacity-70">
              {UI_STRINGS.qrCodeLabel}
            </p>
            <a 
              href={GOOGLE_MAPS_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-bold text-spa-green uppercase tracking-widest hover:text-spa-deep underline underline-offset-8 transition-colors"
            >
              Googleマップを開く
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};