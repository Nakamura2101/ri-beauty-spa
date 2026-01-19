import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { BodyCareDetail } from '../components/BodyCareDetail';

export const BodyWellnessPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Seo
        title="ボディウェルネス｜Ri Beauty Spa & Wellness 川崎"
        description="ボディケアで巡りとバランスを整えるトリートメント。川崎のRi Beauty Spa & Wellnessで深いリラクゼーションを。"
      />

      <BodyCareDetail onBack={() => navigate('/')} />
    </>
  );
};
