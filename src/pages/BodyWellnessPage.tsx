import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { BodyCareDetail } from '../components/BodyCareDetail';
import { SITE_ORIGIN } from '../constants';

export const BodyWellnessPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Seo
        title="ボディウェルネス｜Ri Beauty Spa & Wellness 川崎"
        description="ボディケアで巡りとバランスを整えるトリートメント。川崎のRi Beauty Spa & Wellnessで深いリラクゼーションを。"
        canonicalPath="/services/body-wellness/"
        structuredData={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'ホーム', item: `${SITE_ORIGIN}/` },
              { '@type': 'ListItem', position: 2, name: 'サービス', item: `${SITE_ORIGIN}/services/` },
              { '@type': 'ListItem', position: 3, name: 'ボディケア', item: `${SITE_ORIGIN}/services/body-wellness/` },
            ],
          },
          {
            '@type': 'Service',
            name: 'ボディケア',
            serviceType: 'ボディウェルネス',
            url: `${SITE_ORIGIN}/services/body-wellness/`,
            description: 'ボディケアで巡りとバランスを整えるトリートメント。川崎のRi Beauty Spa & Wellnessで深いリラクゼーションを。',
          },
        ]}
      />

      <BodyCareDetail onBack={() => navigate('/services/')} />

      <section className="pb-10 bg-[#fdfdfb]">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-gray-700 text-sm md:text-base">
            <Link to="/kawasaki-massage/" className="underline underline-offset-4 hover:opacity-70">
              川崎でマッサージをお探しの方へ →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};
