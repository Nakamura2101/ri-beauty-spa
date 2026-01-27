import React from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { Services } from '../components/Services';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <Seo
        title="サービス一覧｜Ri Beauty Spa 川崎"
        description="川崎のRi Beauty Spaが提供するフェイシャル、ボディケア、ハーバルリチュアルの一覧ページ。"
        canonicalPath="/services/"
      />

      <main className="pt-32">
        <header className="container mx-auto px-6 mb-10">
          <h1 className="text-4xl md:text-5xl font-serif text-spa-deep tracking-wide">Services</h1>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
            Ri Beauty Spa &amp; Wellnessのサービス一覧。ボディ、スキン、ハーバルの各メニューへこちらからアクセスできます。
          </p>

          <nav aria-label="Service categories" className="mt-8">
            <ul className="flex flex-wrap gap-3">
              <li>
                <Link
                  to="/services/body-wellness/"
                  className="px-5 py-2 bg-white border border-gray-100 shadow-sm rounded-sm text-[11px] uppercase tracking-[0.3em] font-bold text-black hover:opacity-70"
                >
                  BODY WELLNESS
                </Link>
              </li>
              <li>
                <Link
                  to="/services/skin-therapy/"
                  className="px-5 py-2 bg-white border border-gray-100 shadow-sm rounded-sm text-[11px] uppercase tracking-[0.3em] font-bold text-black hover:opacity-70"
                >
                  SKIN THERAPY
                </Link>
              </li>
              <li>
                <Link
                  to="/services/herbal-rituals/"
                  className="px-5 py-2 bg-white border border-gray-100 shadow-sm rounded-sm text-[11px] uppercase tracking-[0.3em] font-bold text-black hover:opacity-70"
                >
                  HERBAL RITUALS
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <Services />
      </main>
    </>
  );
};
