import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Booking } from '../components/Booking';
import { Contact } from '../components/Contact';
import { UI_STRINGS, LOGO_URL } from '../constants';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Seo
        title="Ri Beauty Spa & Wellness｜川崎のリラクゼーションスパ"
        description="川崎にあるRi Beauty Spa & Wellness。フェイシャル、ボディ、ハーブ療法で心と身体を整える上質なスパ体験。"
        canonicalPath="/"
      />

      <main>
        <Hero />

        <About onReadMore={() => navigate('/about/')} />

        <Services />

      {/* Corporate Services Section with Background Image */}
      <section id="corporate-services" className="relative py-24 md:py-40 overflow-hidden border-y border-gray-50">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/corporate-bg.jpg"
            alt="Corporate background"
            className="w-full h-full object-cover"
          />
          {/* Soft Overlay */}
          <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <span className="text-[10px] uppercase tracking-[0.5em] text-spa-green font-bold opacity-60 mb-6 block">BUSINESS SOLUTIONS</span>
          <div className="space-y-3 mb-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-spa-deep leading-tight font-light tracking-wide">
              法人向けサービス
            </h2>
            <p className="text-sm md:text-base tracking-[0.4em] text-spa-green/70 font-bold uppercase">CORPORATE SERVICES</p>
          </div>
          <div className="w-12 h-px bg-spa-green/20 mx-auto mb-10"></div>
          <button
            onClick={() => navigate('/corporate/')}
            className="inline-block px-14 py-6 bg-spa-accent text-white text-[11px] uppercase tracking-[0.5em] font-bold transition-all hover:brightness-110 shadow-xl hover:shadow-2xl rounded-sm"
          >
            法人向けお問い合わせ
          </button>
        </div>
      </section>

      <Booking />
      <Contact />

        {/* Disclaimer Section */}
        <section className="relative py-20 bg-[#fafafa] border-t border-gray-100 overflow-hidden">
        {/* Faint Logo Watermark Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
          <img src={LOGO_URL} alt="" className="w-full max-w-4xl h-auto object-contain grayscale" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3">
                <h3 className="text-[11px] uppercase tracking-[0.5em] text-spa-green font-bold mb-4">{UI_STRINGS.disclaimerTitle}</h3>
                <p className="text-spa-deep/40 text-[10px] leading-relaxed uppercase tracking-wider">
                  Ri Beauty Spa & Body Wellness
                  <br />
                  Legal Information Update 2024
                </p>
              </div>
              <div className="md:w-2/3 border-l border-gray-100 md:pl-12">
                <p className="text-gray-400 text-xs font-light leading-relaxed mb-4 text-justify whitespace-pre-line">
                  {UI_STRINGS.disclaimerContent}
                </p>
              </div>
            </div>
          </div>
        </div>
        </section>
      </main>
    </>
  );
};
