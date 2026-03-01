import React from 'react';
import { Seo } from '../components/Seo';
import { AboutDetail } from '../components/AboutDetail';
import { SITE_ORIGIN } from '../constants';

export const AboutPage: React.FC = () => {
  return (
    <>
      <Seo
        title="当サロンについて・理念｜Ri Beauty Spa & Wellness 川崎"
        description="Ri Beauty Spa & Wellnessの理念、こだわり、運営情報をご紹介。川崎で心身を整える上質なリラクゼーション体験をお届けします。"
        canonicalPath="/about/"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: '当サロンについて｜Ri Beauty Spa & Wellness',
          url: `${SITE_ORIGIN}/about/`,
          description:
            'Ri Beauty Spa & Wellnessの理念、こだわり、運営情報をご紹介。川崎で心身を整える上質なリラクゼーション体験をお届けします。',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_ORIGIN}/` },
              { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE_ORIGIN}/about/` },
            ],
          },
        }}
      />

      <AboutDetail />
    </>
  );
};
