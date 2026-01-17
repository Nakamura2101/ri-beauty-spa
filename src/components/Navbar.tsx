import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, LOGO_URL } from '../constants';
import type { ServiceCategory } from '../types';

interface Props {
  onCategorySelect: (cat: ServiceCategory | 'about' | 'corporate') => void;
}

export const Navbar: React.FC<Props> = ({ onCategorySelect }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, catId?: string) => {
    if (catId) {
      onCategorySelect(catId as ServiceCategory);
    } else if (href === '#about') {
      onCategorySelect('about');
    } else if (href === '#corporate-services') {
      onCategorySelect('corporate');
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-6 md:py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <a href="#home" onClick={() => handleNavClick('#home')} className="flex items-center gap-3 group">
          {/* Official Image Logo Replacement */}
          <div className="h-12 w-12 md:h-16 md:w-16 flex items-center justify-center overflow-hidden">
            <img 
              src={LOGO_URL} 
              alt="Ri Beauty Spa Logo" 
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                // Fallback nếu ảnh không load được
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const fallbackText = document.createElement('div');
                  fallbackText.className = "text-spa-deep font-serif text-3xl";
                  fallbackText.innerText = "Ri";
                  parent.appendChild(fallbackText);
                }
              }}
            />
          </div>
          
          <div className="flex flex-col border-l border-spa-deep/10 pl-3">
            <span className={`font-serif text-spa-deep tracking-[0.2em] leading-none transition-all duration-500 ${isScrolled ? 'text-lg' : 'text-xl md:text-2xl'}`}>
              RI BEAUTY
            </span>
            <span className="font-light text-spa-deep/60 tracking-[0.5em] uppercase text-[8px] md:text-[10px] mt-1">
              SPA & WELLNESS
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-12">
          <div className="flex space-x-10 text-[13px] uppercase tracking-[0.25em] font-bold text-black">
            {NAV_ITEMS.map((item) => (
              <div 
                key={item.href} 
                className="relative group py-2"
                onMouseEnter={() => item.subItems && setActiveDropdown(item.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  onClick={() => handleNavClick(item.href)}
                  className="hover:opacity-70 transition-opacity relative flex items-center gap-2 text-left text-black"
                >
                  <div className="flex flex-col">
                    <span className="text-[12px]">{item.labelEn}</span>
                    <span className="text-[15px] tracking-widest font-medium normal-case">{item.labelJp}</span>
                  </div>
                  {item.subItems && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-2.5 h-2.5 opacity-40">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.subItems && (
                  <div className={`absolute left-0 top-full pt-4 transition-all duration-300 ${activeDropdown === item.href ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                    <div className="bg-white shadow-2xl border border-gray-50 py-4 min-w-[260px] rounded-sm">
                      {item.subItems.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => handleNavClick(item.href, sub.id)}
                          className="w-full text-left px-8 py-3 hover:bg-gray-50 transition-all border-l-2 border-transparent hover:border-spa-green"
                        >
                          <div className="flex flex-col">
                            <span className="text-[11px] uppercase tracking-[0.3em] text-black">{sub.labelEn}</span>
                            <span className="text-[15px] tracking-widest text-black font-medium">{sub.labelJp}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-black p-2" aria-label="Toggle Menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`lg:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-6 text-black p-2">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col items-center space-y-12 w-full px-12">
          {NAV_ITEMS.map((item) => (
            <div key={item.href} className="flex flex-col items-center w-full">
              <button 
                className="flex flex-col items-center py-2 border-b border-gray-50 w-full"
                onClick={() => handleNavClick(item.href)}
              >
                <span className="flex items-center gap-2 text-[12px] uppercase tracking-[0.4em] font-bold text-black">
                  <span>{item.labelEn}</span>
                </span>
                <span className="text-xl tracking-widest font-medium mt-1 text-black">{item.labelJp}</span>
              </button>
              {item.subItems && (
                <div className="grid grid-cols-2 gap-4 mt-6 w-full">
                  {item.subItems.map(sub => (
                    <button 
                      key={sub.id} 
                      onClick={() => handleNavClick(item.href, sub.id)}
                      className="flex flex-col items-center p-3 bg-gray-50/50 rounded-sm"
                    >
                      <span className="text-[11px] uppercase tracking-[0.2em] text-black font-bold">{sub.labelEn}</span>
                      <span className="text-base tracking-widest mt-1 font-medium text-black">{sub.labelJp}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};