import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { AboutDetail } from '../components/AboutDetail';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Seo
        title="当サロンについて｜Ri Beauty Spa & Wellness 川崎"
        description="Ri Beauty Spa & Wellnessのコンセプトやこだわりをご紹介。川崎で心身を整える上質なリラクゼーション体験をお届けします。"
      />

      <AboutDetail onBack={() => navigate('/')} />
    </>
  );
};
