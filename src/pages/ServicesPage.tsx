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
      />

      <main className="pt-32">
        <div className="container mx-auto px-6 mb-10">
          <div className="flex flex-wrap gap-3">
            <Link
              to="/services/body-wellness"
              className="px-5 py-2 bg-white border border-gray-100 shadow-sm rounded-sm text-[11px] uppercase tracking-[0.3em] font-bold text-black hover:opacity-70"
            >
              BODY WELLNESS
            </Link>
            <Link
              to="/services/skin-therapy"
              className="px-5 py-2 bg-white border border-gray-100 shadow-sm rounded-sm text-[11px] uppercase tracking-[0.3em] font-bold text-black hover:opacity-70"
            >
              SKIN THERAPY
            </Link>
            <Link
              to="/services/herbal-rituals"
              className="px-5 py-2 bg-white border border-gray-100 shadow-sm rounded-sm text-[11px] uppercase tracking-[0.3em] font-bold text-black hover:opacity-70"
            >
              HERBAL RITUALS
            </Link>
          </div>
        </div>

        <Services />
      </main>
    </>
  );
};
