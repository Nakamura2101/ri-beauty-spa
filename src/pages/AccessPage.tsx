import React from 'react';
import { Seo } from '../components/Seo';

export const AccessPage: React.FC = () => {
  return (
    <>
      <Seo
        title="アクセス｜Ri Beauty Spa & Wellness 川崎"
        description="Ri Beauty Spa & Wellness（川崎）へのアクセス。住所・地図・ご来店の目安をご案内します。"
        canonicalPath="/access/"
      />

      <main className="pt-32 pb-24 bg-[#fdfdfb] text-black">
        <div className="container mx-auto px-6">
          <header className="mb-14 text-center">
            <h1 className="text-5xl md:text-6xl font-serif italic tracking-tight">アクセス</h1>
            <p className="mt-3 text-[12px] uppercase tracking-[0.5em] font-bold text-black/70">
              ACCESS
            </p>
            <div className="w-12 h-px bg-spa-green/20 mx-auto mt-8" />
          </header>

          <section className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white border border-gray-100 shadow-sm p-8 rounded-sm">
              <h2 className="text-2xl font-serif">住所（川崎）</h2>
              <p className="mt-4 text-gray-700 font-light leading-relaxed">
                〒212-0016 神奈川県川崎市幸区南幸町2-10-12-101
              </p>

              <div className="mt-6">
                <a
                  href="https://maps.app.goo.gl/3J9Y9BoVDvfHbAcY7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-b border-black/20 pb-2 text-[11px] uppercase tracking-[0.5em] font-bold text-black hover:text-spa-green hover:border-spa-green transition-all"
                >
                  Google Maps を開く
                </a>
              </div>
            </div>

            <p className="text-gray-700 font-light leading-relaxed text-justify">
              ご来店前に場所が不安な場合は、お気軽にお問い合わせください。川崎エリアでのリラクゼーション・フェイシャル・ボディケアをご提供します。
            </p>

            <p className="text-[12px] text-gray-500 font-light">
              ※ 本ページはSEOのための静的HTML（SSG）対応ページです。
            </p>
          </section>
        </div>
      </main>
    </>
  );
};
