import React from 'react';
import { Seo } from '../components/Seo';
import { SQUARE_BOOKING_LINK } from '../constants';

export const PricePage: React.FC = () => {
  return (
    <>
      <Seo
        title="料金｜Ri Beauty Spa & Wellness 川崎"
        description="Ri Beauty Spa & Wellness（川崎）の料金・メニューのご案内。ボディウェルネス、スキン（フェイシャル）、ハーバルリチュアルなど。"
        canonicalPath="/price/"
      />

      <main className="pt-32 pb-24 bg-[#fdfdfb] text-black">
        <div className="container mx-auto px-6">
          <header className="mb-14 text-center">
            <h1 className="text-5xl md:text-6xl font-serif italic tracking-tight">料金</h1>
            <p className="mt-3 text-[12px] uppercase tracking-[0.5em] font-bold text-black/70">
              PRICE
            </p>
            <div className="w-12 h-px bg-spa-green/20 mx-auto mt-8" />
          </header>

          <section className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-700 font-light leading-relaxed text-justify">
              川崎のRi Beauty Spa &amp; Wellnessでは、お客様の状態や目的に合わせて、ボディ・スキン（フェイシャル）・ハーバルなどの
              メニューをご提案します。最新の料金・空き状況は予約ページをご確認ください。
            </p>

            <div className="bg-white border border-gray-100 shadow-sm p-8 rounded-sm">
              <h2 className="text-2xl font-serif">主なカテゴリ</h2>
              <ul className="mt-4 space-y-2 text-gray-700 font-light">
                <li>・ボディウェルネス（ボディケア）</li>
                <li>・スキンセラピー（フェイシャル）</li>
                <li>・ハーバルリチュアル（ハーブ）</li>
              </ul>

              <div className="mt-8">
                <a
                  href={SQUARE_BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-spa-deep text-white px-10 py-4 text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-spa-green transition-all shadow-lg rounded-sm"
                >
                  料金を確認して予約する
                </a>
              </div>
            </div>

            <p className="text-[12px] text-gray-500 font-light">
              ※ 本ページはSEOのための静的HTML（SSG）対応ページです。最終的な内容は随時更新される場合があります。
            </p>
          </section>
        </div>
      </main>
    </>
  );
};
