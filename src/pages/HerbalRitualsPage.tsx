import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { HerbalRitualsDetail } from '../components/HerbalRitualsDetail';

export const HerbalRitualsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Seo
        title="ハーバルリチュアル｜Ri Beauty Spa & Wellness 川崎"
        description="ハーブの力で心身を整えるリチュアル。香りと温もりに包まれる癒やしの時間をご提供します。"
        canonicalPath="/services/herbal-rituals/"
      />

      <HerbalRitualsDetail onBack={() => navigate('/services/')} />
    </>
  );
};
