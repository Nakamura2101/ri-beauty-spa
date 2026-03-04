import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { HerbalRitualsDetail } from '../components/HerbalRitualsDetail';
import { SITE_ORIGIN } from '../constants';

export const HerbalRitualsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Seo
        title="ハーバルリチュアル｜Ri Beauty Spa & Wellness 川崎"
        description="ハーブの力で心身を整えるリチュアル。香りと温もりに包まれる癒やしの時間をご提供します。"
        canonicalPath="/services/herbal-rituals/"
        structuredData={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'ホーム', item: `${SITE_ORIGIN}/` },
              { '@type': 'ListItem', position: 2, name: 'サービス', item: `${SITE_ORIGIN}/services/` },
              { '@type': 'ListItem', position: 3, name: 'ハーブの儀式', item: `${SITE_ORIGIN}/services/herbal-rituals/` },
            ],
          },
          {
            '@type': 'Service',
            name: 'ハーブの儀式',
            serviceType: 'ハーバルリチュアル',
            url: `${SITE_ORIGIN}/services/herbal-rituals/`,
            description: 'ハーブの力で心身を整えるリチュアル。香りと温もりに包まれる癒やしの時間をご提供します。',
          },
        ]}
      />

      <HerbalRitualsDetail onBack={() => navigate('/services/')} />
    </>
  );
};
