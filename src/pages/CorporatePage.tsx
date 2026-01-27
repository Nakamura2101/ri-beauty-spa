import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { CorporateDetail } from '../components/CorporateDetail';

export const CorporatePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Seo
        title="法人・団体のご利用｜Ri Beauty Spa & Wellness 川崎"
        description="法人・団体向けのご利用案内。福利厚生やイベント、ペア・グループでのスパ体験など、お気軽にご相談ください。"
        canonicalPath="/corporate/"
      />

      <CorporateDetail onBack={() => navigate('/')} />
    </>
  );
};
