import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AboutDetail } from '../components/AboutDetail';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return <AboutDetail onBack={() => navigate('/')} />;
};
