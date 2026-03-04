import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { SkinTherapyDetail } from '../components/SkinTherapyDetail';
import { SITE_ORIGIN } from '../constants';

export const SkinTherapyPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Seo
        title="スキンセラピー｜Ri Beauty Spa & Wellness 川崎"
        description="フェイシャルを中心としたスキンケアメニュー。肌状態に合わせた丁寧なケアで、健やかな素肌へ導きます。"
        canonicalPath="/services/skin-therapy/"
        structuredData={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'ホーム', item: `${SITE_ORIGIN}/` },
              { '@type': 'ListItem', position: 2, name: 'サービス', item: `${SITE_ORIGIN}/services/` },
              { '@type': 'ListItem', position: 3, name: 'スキンケア', item: `${SITE_ORIGIN}/services/skin-therapy/` },
            ],
          },
          {
            '@type': 'Service',
            name: 'スキンケア',
            serviceType: 'フェイシャル・スキンセラピー',
            url: `${SITE_ORIGIN}/services/skin-therapy/`,
            description: 'フェイシャルを中心としたスキンケアメニュー。肌状態に合わせた丁寧なケアで、健やかな素肌へ導きます。',
          },
        ]}
      />

      <SkinTherapyDetail onBack={() => navigate('/services/')} />
    </>
  );
};
