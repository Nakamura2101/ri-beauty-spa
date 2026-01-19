import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HerbalRitualsDetail } from '../components/HerbalRitualsDetail';

export const HerbalRitualsPage: React.FC = () => {
  const navigate = useNavigate();

  return <HerbalRitualsDetail onBack={() => navigate('/')} />;
};
