import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BodyCareDetail } from '../components/BodyCareDetail';

export const BodyWellnessPage: React.FC = () => {
  const navigate = useNavigate();

  return <BodyCareDetail onBack={() => navigate('/')} />;
};
