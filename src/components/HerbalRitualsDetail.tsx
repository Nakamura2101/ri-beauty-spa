import React from 'react';
import { HERBAL_RITUALS_SECTIONS, SQUARE_BOOKING_LINK } from '../constants';
import type { HerbalRitualsSection, RitualContentBlock } from '../constants';

interface Props {
  onBack: () => void;
}

const splitLeadingEmoji = (text: string, emoji: string) => {
  const trimmed = text.trimStart();
  if (!trimmed.startsWith(emoji)) return null;

  const withoutEmoji = trimmed.slice(emoji.length).trimStart();
  return { emoji, text: withoutEmoji };
};

const renderBlock = (block: RitualContentBlock) => {
  const baseText = 'text-black font-light text-[15px] md:text-[16px] leading-[1.9] tracking-[0.02em] text-left';
  const emphasisText = 'text-black font-medium text-[15px] md:text-[16px] leading-[1.9] tracking-[0.02em] text-left';

  switch (block.type) {
    case 'paragraph':
      return (
        <p className={`${baseText} ritualP`}>
          {block.text}
        </p>
      );
    case 'highlight': {
      const parts = splitLeadingEmoji(block.text, '🌿');
      return (
        <p className={`${emphasisText} ritualHighlight flex items-baseline gap-2`}>
          {parts ? (
            <>
              <span aria-hidden="true">{parts.emoji}</span>
              <span>{parts.text}</span>
            </>
          ) : (
            block.text
          )}
        </p>
      );
    }
    case 'bullets': {
      const titleParts = block.title ? splitLeadingEmoji(block.title, '✨') : null;
      return (
        <div className="ritualBullets">
          {block.title ? (
            <p className={`${emphasisText} ritualBulletsTitle flex items-baseline gap-2`}>
              {titleParts ? (
                <>
                  <span aria-hidden="true">{titleParts.emoji}</span>
                  <span>{titleParts.text}</span>
                </>
              ) : (
                block.title
              )}
            </p>
          ) : null}
          <ul className="ritualList space-y-2">
            {block.items.map((item, idx) => (
              <li key={idx} className={`${baseText} ritualLi`}>{item}</li>
            ))}
          </ul>
        </div>
      );
    }
    case 'note':
      return (
        <p className="ritualNote text-black font-light leading-[1.75] tracking-[0.02em] text-[12px] md:text-[13px] text-left">
          {block.text}
        </p>
      );
    case 'qa':
      return (
        <div>
          {block.items.map((qaItem, idx) => (
            <div key={idx} className="mb-4 last:mb-0">
              <p className={`${emphasisText} mb-2`}>
                {qaItem.question}
              </p>
              <div>
                {qaItem.answers.map((answer, aIdx) => (
                  <p key={aIdx} className={`${baseText} ritualP last:mb-0`}>
                    {answer}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    case 'checklist':
      return (
        <ul className="ritualList space-y-2">
          {block.items.map((item, idx) => (
            <li key={idx} className={`${baseText} ritualLi`}>
              {item}
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
};

const RitualSection: React.FC<{ section: HerbalRitualsSection; index: number }> = ({ section, index }) => {
  const isImageLeft = index % 2 === 0; // 01,03 image LEFT; 02,04 image RIGHT

  return (
    <div
      className={`flex flex-col ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center lg:items-start gap-14 lg:gap-20`}
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2 relative group">
        <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-2xl bg-white p-2">
          <img
            src={section.image}
            alt={section.titleJp}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </div>
        {/* Decorative Frame */}
        <div
          className={`absolute -z-10 w-full h-full border border-spa-green/10 top-8 ${isImageLeft ? '-left-8' : '-right-8'}`}
        ></div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-left lg:pt-1">
        <div className="max-w-[560px] mx-auto lg:mx-0">
          <h2 className="text-3xl md:text-4xl font-serif text-black leading-tight tracking-wide mb-2">
            {section.titleJp}
          </h2>
          <p className="text-[10px] tracking-widest text-black font-bold uppercase mb-4">
            {section.titleEn}
          </p>

          <div className="ritualBody">
            {section.blocks.map((block, idx) => (
              <React.Fragment key={idx}>{renderBlock(block)}</React.Fragment>
            ))}
          </div>

          <div className="mt-6">
            <a
              href={SQUARE_BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-b border-black/20 pb-2 text-[11px] uppercase tracking-[0.5em] font-bold text-black hover:text-spa-green hover:border-spa-green transition-all"
            >
              EXPERIENCE NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HerbalRitualsDetail: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#fdfdfb] pt-32 pb-24 animate-fadeIn text-black">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="mb-24 flex flex-col items-center">
          <button 
            onClick={onBack}
            className="mb-12 text-[12px] uppercase tracking-[0.4em] font-bold text-black flex items-center gap-3 hover:opacity-60 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            BACK TO HOME
          </button>
          
          <div className="space-y-3 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-black italic tracking-tight">
              ハーブの儀式
            </h1>
            <p className="text-[12px] tracking-[0.6em] text-black font-bold uppercase ml-[0.6em]">HERBAL RITUALS</p>
          </div>
          <div className="w-12 h-px bg-spa-green/20 mt-12"></div>
        </div>

        {/* Article Grid - Alternating Layout */}
        <div className="max-w-5xl mx-auto space-y-48">
          {HERBAL_RITUALS_SECTIONS.map((section, index) => (
            <RitualSection key={section.id} section={section} index={index} />
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="mt-40 text-center">
          <div className="w-20 h-px bg-spa-green/20 mx-auto mb-12"></div>
          <button 
            onClick={onBack}
            className="px-16 py-6 bg-spa-deep text-white text-[11px] uppercase tracking-[0.5em] font-bold transition-all hover:bg-spa-green shadow-2xl rounded-sm"
          >
            ホームへ戻る
          </button>
        </div>
      </div>
    </div>
  );
};