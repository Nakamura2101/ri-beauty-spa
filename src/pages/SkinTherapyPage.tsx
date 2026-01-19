import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { SkinTherapyDetail } from '../components/SkinTherapyDetail';

export const SkinTherapyPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Seo
        title="スキンセラピー｜Ri Beauty Spa & Wellness 川崎"
        description="フェイシャルを中心としたスキンケアメニュー。肌状態に合わせた丁寧なケアで、健やかな素肌へ導きます。"
      />

      <SkinTherapyDetail onBack={() => navigate('/')} />
    </>
  );
};
