import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CorporatePage } from './pages/CorporatePage';
import { ServicesPage } from './pages/ServicesPage';
import { BodyWellnessPage } from './pages/BodyWellnessPage';
import { SkinTherapyPage } from './pages/SkinTherapyPage';
import { HerbalRitualsPage } from './pages/HerbalRitualsPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/" element={<AboutPage />} />
        <Route path="/corporate" element={<CorporatePage />} />
        <Route path="/corporate/" element={<CorporatePage />} />

        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/" element={<ServicesPage />} />
        <Route path="/services/body-wellness" element={<BodyWellnessPage />} />
        <Route path="/services/body-wellness/" element={<BodyWellnessPage />} />
        <Route path="/services/skin-therapy" element={<SkinTherapyPage />} />
        <Route path="/services/skin-therapy/" element={<SkinTherapyPage />} />
        <Route path="/services/herbal-rituals" element={<HerbalRitualsPage />} />
        <Route path="/services/herbal-rituals/" element={<HerbalRitualsPage />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact/" element={<ContactPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

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
    </div>
  );
};

export default App;