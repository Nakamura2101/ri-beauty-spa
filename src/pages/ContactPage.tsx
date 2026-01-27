import React from 'react';
import { Seo } from '../components/Seo';
import { Contact } from '../components/Contact';

export const ContactPage: React.FC = () => {
  return (
    <>
      <Seo
        title="お問い合わせ｜Ri Beauty Spa & Wellness 川崎"
        description="ご予約・お問い合わせはこちら。川崎のRi Beauty Spa & Wellnessに関するご相談やご質問を承ります。"
        canonicalPath="/contact/"
      />

      <main className="pt-32">
        <Contact />
      </main>
    </>
  );
};
