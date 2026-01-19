import React, { useState, useEffect } from 'react';
import type { ServiceCategory } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { AboutDetail } from './components/AboutDetail';
import { Services } from './components/Services';
import { Booking } from './components/Booking';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { B2BForm } from './components/B2BForm';
import { CorporateDetail } from './components/CorporateDetail';
import { HerbalRitualsDetail } from './components/HerbalRitualsDetail';
import { BodyCareDetail } from './components/BodyCareDetail';
import { SkinTherapyDetail } from './components/SkinTherapyDetail';
import { UI_STRINGS, LOGO_URL } from './constants';

const App: React.FC = () => {
  const [showB2BForm, setShowB2BForm] = useState(false);
  const [isViewingAbout, setIsViewingAbout] = useState(false);
  const [isViewingCorporate, setIsViewingCorporate] = useState(false);
  const [isViewingRituals, setIsViewingRituals] = useState(false);
  const [isViewingBodyCare, setIsViewingBodyCare] = useState(false);
  const [isViewingSkinCare, setIsViewingSkinCare] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [isViewingAbout, isViewingCorporate, isViewingRituals, isViewingBodyCare, isViewingSkinCare]);

  const handleCategorySelect = (cat: ServiceCategory | 'about' | 'corporate') => {
    if (cat === 'about') {
      setIsViewingAbout(true);
      setIsViewingCorporate(false);
      setIsViewingRituals(false);
      setIsViewingBodyCare(false);
      setIsViewingSkinCare(false);
      return;
    }

    if (cat === 'corporate') {
      setIsViewingCorporate(true);
      setIsViewingAbout(false);
      setIsViewingRituals(false);
      setIsViewingBodyCare(false);
      setIsViewingSkinCare(false);
      return;
    }

    setIsViewingAbout(false);
    setIsViewingCorporate(false);
    setIsViewingRituals(cat === 'rituals');
    setIsViewingBodyCare(cat === 'body');
    setIsViewingSkinCare(cat === 'skin');

    if (cat !== 'rituals' && cat !== 'body' && cat !== 'skin') {
      setTimeout(() => {
        const id = cat === 'corporate' ? 'corporate-services' : 'personal-services';
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const closeDetails = () => {
    setIsViewingAbout(false);
    setIsViewingCorporate(false);
    setIsViewingRituals(false);
    setIsViewingBodyCare(false);
    setIsViewingSkinCare(false);
  };

  if (isViewingAbout) {
    return (
      <div className="min-h-screen">
        <Navbar onCategorySelect={handleCategorySelect} />
        <AboutDetail onBack={closeDetails} />
        <Footer />
      </div>
    );
  }

  if (isViewingCorporate) {
    return (
      <div className="min-h-screen">
        <Navbar onCategorySelect={handleCategorySelect} />
        <CorporateDetail onBack={closeDetails} />
        <Footer />
      </div>
    );
  }

  if (isViewingRituals) {
    return (
      <div className="min-h-screen">
        <Navbar onCategorySelect={handleCategorySelect} />
        <HerbalRitualsDetail onBack={closeDetails} />
        <Footer />
      </div>
    );
  }

  if (isViewingBodyCare) {
    return (
      <div className="min-h-screen">
        <Navbar onCategorySelect={handleCategorySelect} />
        <BodyCareDetail onBack={closeDetails} />
        <Footer />
      </div>
    );
  }

  if (isViewingSkinCare) {
    return (
      <div className="min-h-screen">
        <Navbar onCategorySelect={handleCategorySelect} />
        <SkinTherapyDetail onBack={closeDetails} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar onCategorySelect={handleCategorySelect} />
      
      <main>
        <Hero />
        <About onReadMore={() => setIsViewingAbout(true)} />
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
              onClick={() => setIsViewingCorporate(true)}
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
            <img 
              src={LOGO_URL} 
              alt="" 
              className="w-full max-w-4xl h-auto object-contain grayscale"
            />
          </div>

          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
               <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="md:w-1/3">
                    <h3 className="text-[11px] uppercase tracking-[0.5em] text-spa-green font-bold mb-4">{UI_STRINGS.disclaimerTitle}</h3>
                    <p className="text-spa-deep/40 text-[10px] leading-relaxed uppercase tracking-wider">
                      Ri Beauty Spa & Body Wellness<br/>
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

      <Footer />
      
      {/* Floating Booking Action */}
      <div className="fixed bottom-8 right-8 z-40">
        <a 
          href="https://ribeautyspa.square.site/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-spa-soft/90 backdrop-blur-md text-white flex items-center gap-4 px-8 py-5 rounded-full shadow-2xl hover:bg-spa-green hover:scale-105 transition-all duration-300 group border border-white/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
          </svg>
          <span className="text-xs uppercase tracking-[0.4em] font-bold border-l border-white/20 pl-4 whitespace-nowrap text-black">
            今すぐ予約
          </span>
        </a>
      </div>

      {showB2BForm && <B2BForm onClose={() => setShowB2BForm(false)} />}
    </div>
  );
};

export default App;