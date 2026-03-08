import React from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { SITE_ORIGIN, SQUARE_BOOKING_LINK } from '../constants';

export const BlogKawasakiMassageGuidePage: React.FC = () => {
  return (
    <>
      <Seo
        title="川崎のマッサージガイド｜初めてでも失敗しない選び方・予約前チェック"
        description="川崎でマッサージを探している方向けに、初めてでも失敗しにくい選び方、予約前のチェックポイント、施術を心地よく受けるコツをわかりやすくまとめました。"
        canonicalPath="/blog/kawasaki-massage-guide/"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: '川崎のマッサージガイド｜初めてでも失敗しない選び方・予約前チェック',
          description:
            '川崎でマッサージを探している方向けに、初めてでも失敗しにくい選び方、予約前のチェックポイント、施術を心地よく受けるコツをわかりやすくまとめました。',
          mainEntityOfPage: `${SITE_ORIGIN}/blog/kawasaki-massage-guide/`,
          author: {
            '@type': 'Organization',
            name: 'Ri Beauty Spa & Wellness',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Ri Beauty Spa & Wellness',
            logo: {
              '@type': 'ImageObject',
              url: `${SITE_ORIGIN}/images/logo.png`,
            },
          },
        }}
      />

      <main className="pt-32 pb-24 bg-[#fdfdfb] text-black">
        <article className="container mx-auto px-6 max-w-5xl">
          <header className="mb-16 space-y-6 text-center">
            <p className="text-[10px] uppercase tracking-[0.5em] text-spa-green font-bold opacity-70">
              KAWASAKI MASSAGE GUIDE
            </p>
            <h1 className="text-3xl md:text-5xl font-serif leading-tight tracking-wide">
              川崎でマッサージを選ぶときのポイント
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-justify">
              川崎にはさまざまなリラクゼーションサービスがあります。初めての方でも安心して選べるよう、目的の整理、施術スタイルの見方、予約前チェックをシンプルにまとめました。
            </p>
          </header>

          <section className="space-y-10 text-[17px] leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">1. まずは目的を決める</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>首・肩・背中など、気になる部位を明確にする</li>
                <li>しっかり圧か、やさしい圧か、好みを決める</li>
                <li>60分・90分など、無理のない時間を選ぶ</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">2. 予約前のチェック</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>アクセス・営業時間・予約の取りやすさ</li>
                <li>メニュー内容と価格のわかりやすさ</li>
                <li>初回でも相談しやすい案内があるか</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">3. 施術をより心地よく受けるコツ</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>施術前に希望の強さを伝える</li>
                <li>痛みや違和感は遠慮なくその場で共有する</li>
                <li>施術後は水分補給と休息を意識する</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">あわせて読みたい</h2>
              <Link
                to="/blog/vietnamese-massage-kawasaki/"
                className="inline-block px-6 py-3 bg-white border border-gray-100 shadow-sm rounded-sm text-[11px] uppercase tracking-[0.25em] font-bold hover:opacity-70"
              >
                ベトナム式マッサージの特徴を読む
              </Link>
            </section>
          </section>

          <section className="mt-16 p-10 bg-white border border-gray-100 shadow-sm rounded-sm text-center space-y-5">
            <h2 className="text-2xl font-serif tracking-wide">ご予約・ご相談はこちら</h2>
            <p className="text-gray-600">
              川崎でのマッサージ選びに迷ったら、目的に合わせてご相談ください。
            </p>
            <a
              href={SQUARE_BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-spa-deep text-white text-[10px] uppercase tracking-[0.4em] font-bold transition-all hover:bg-spa-green rounded-sm"
            >
              RESERVE NOW
            </a>
          </section>
        </article>
      </main>
    </>
  );
};