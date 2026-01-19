import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CorporateDetail } from '../components/CorporateDetail';

export const CorporatePage: React.FC = () => {
  const navigate = useNavigate();

  return <CorporateDetail onBack={() => navigate('/')} />;
};
