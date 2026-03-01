import React from 'react';
import { Seo } from '../components/Seo';
import { CorporateDetail } from '../components/CorporateDetail';
import { SITE_ORIGIN } from '../constants';

export const CorporatePage: React.FC = () => {
  return (
    <>
      <Seo
        title="法人向け福利厚生・団体利用｜Ri Beauty Spa & Wellness 川崎"
        description="法人・団体向けのご利用案内。福利厚生、従業員ウェルビーイング施策、イベント利用など、川崎のRi Beauty Spaへお気軽にご相談ください。"
        canonicalPath="/corporate/"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: '法人向けサービス｜Ri Beauty Spa & Wellness',
          url: `${SITE_ORIGIN}/corporate/`,
          description:
            '法人・団体向けのご利用案内。福利厚生、従業員ウェルビーイング施策、イベント利用など、川崎のRi Beauty Spaへお気軽にご相談ください。',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_ORIGIN}/` },
              { '@type': 'ListItem', position: 2, name: 'Corporate', item: `${SITE_ORIGIN}/corporate/` },
            ],
          },
        }}
      />

      <CorporateDetail />
    </>
  );
};
