import React from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { SQUARE_BOOKING_LINK } from '../constants';

export const FacialPage: React.FC = () => {
  return (
    <>
      <Seo
        title="フェイシャル｜Ri Beauty Spa & Wellness 川崎"
        description="川崎のRi Beauty Spa & Wellnessのフェイシャル（スキンケア）メニュー。肌状態に合わせた丁寧なケアで、健やかな素肌へ。"
        canonicalPath="/services/facial/"
      />

      <main className="pt-32 pb-24 bg-[#fdfdfb] text-black">
        <div className="container mx-auto px-6">
          <header className="mb-14 text-center">
            <h1 className="text-5xl md:text-6xl font-serif italic tracking-tight">フェイシャル</h1>
            <p className="mt-3 text-[12px] uppercase tracking-[0.5em] font-bold text-black/70">
              FACIAL
            </p>
            <div className="w-12 h-px bg-spa-green/20 mx-auto mt-8" />
          </header>

          <section className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-700 font-light leading-relaxed text-justify">
              Ri Beauty Spa &amp; Wellness（川崎）では、クレンジング〜保湿、毛穴・くすみ・乾燥など、肌状態に合わせたフェイシャル（スキンケア）を提供しています。
              初めての方も安心してご相談ください。
            </p>

            <div className="bg-white border border-gray-100 shadow-sm p-8 rounded-sm">
              <h2 className="text-2xl font-serif">関連ページ</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to="/services/skin-therapy/"
                  className="px-5 py-2 bg-white border border-gray-100 shadow-sm rounded-sm text-[11px] uppercase tracking-[0.3em] font-bold text-black hover:opacity-70"
                >
                  SKIN THERAPY
                </Link>
                <Link
                  to="/services/"
                  className="px-5 py-2 bg-white border border-gray-100 shadow-sm rounded-sm text-[11px] uppercase tracking-[0.3em] font-bold text-black hover:opacity-70"
                >
                  SERVICES
                </Link>
              </div>

              <div className="mt-8">
                <a
                  href={SQUARE_BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-spa-deep text-white px-10 py-4 text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-spa-green transition-all shadow-lg rounded-sm"
                >
                  フェイシャルを予約する
                </a>
              </div>
            </div>

            <p className="text-[12px] text-gray-500 font-light">
              ※ 本ページはSEOのための静的HTML（SSG）対応ページです。
            </p>
          </section>
        </div>
      </main>
    </>
  );
};
