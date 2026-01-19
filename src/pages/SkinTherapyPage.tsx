import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SkinTherapyDetail } from '../components/SkinTherapyDetail';

export const SkinTherapyPage: React.FC = () => {
  const navigate = useNavigate();

  return <SkinTherapyDetail onBack={() => navigate('/')} />;
};
