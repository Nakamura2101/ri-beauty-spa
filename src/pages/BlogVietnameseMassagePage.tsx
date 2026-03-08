import React from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { SITE_ORIGIN, SQUARE_BOOKING_LINK } from '../constants';

export const BlogVietnameseMassagePage: React.FC = () => {
  return (
    <>
      <Seo
        title="川崎でベトナム式マッサージを受けるなら？特徴・リラクゼーション効果・初めての選び方"
        description="川崎でベトナム式マッサージをお探しの方へ。ベトナム伝統の手技の特徴、一般的なリラクゼーション効果、初めての方に向けた選び方や受け方をわかりやすく紹介します。"
        canonicalPath="/blog/vietnamese-massage-kawasaki/"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: '川崎でベトナム式マッサージを受けるなら？特徴・リラクゼーション効果・初めての選び方',
          description:
            '川崎でベトナム式マッサージをお探しの方へ。ベトナム伝統の手技の特徴、一般的なリラクゼーション効果、初めての方に向けた選び方や受け方をわかりやすく紹介します。',
          mainEntityOfPage: `${SITE_ORIGIN}/blog/vietnamese-massage-kawasaki/`,
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
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_ORIGIN}/` },
              { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_ORIGIN}/services/` },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Vietnamese Massage Guide',
                item: `${SITE_ORIGIN}/blog/vietnamese-massage-kawasaki/`,
              },
            ],
          },
        }}
      />

      <main className="pt-32 pb-24 bg-[#fdfdfb] text-black">
        <article className="container mx-auto px-6 max-w-5xl">
          <header className="mb-16 space-y-6 text-center">
            <p className="text-[10px] uppercase tracking-[0.5em] text-spa-green font-bold opacity-70">
              KAWASAKI WELLNESS GUIDE
            </p>
            <h1 className="text-3xl md:text-5xl font-serif leading-tight tracking-wide">
              川崎でベトナム式マッサージをお探しの方へ
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-justify">
              Ri Beauty Spa では、ベトナム伝統の手技を取り入れたボディケアをご提供しています。ゆったりとしたロングストロークと心地よい圧のバランスで、首・肩・背中・腰まわりのこわばりをやさしくほぐし、深いリラクゼーションへ導きます。※当店の施術はリラクゼーションを目的とした一般的なサービスです。
            </p>
          </header>

          <section className="space-y-10 text-[17px] leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">ベトナム式マッサージの特徴</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>面で流す手技と、ポイントを押さえる手技のバランス</li>
                <li>首・肩・背中・腰など、疲れが出やすい部位に合わせた施術設計</li>
                <li>施術後に「軽さ」を感じやすい穏やかなリラクゼーションアプローチ</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">初めての方に向けた選び方</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>最初に「強さの好み」と「疲れを感じる部位」を伝える</li>
                <li>我慢せず、施術中に強さを微調整してもらう</li>
                <li>終了後は水分補給をして、ゆったり過ごす</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">関連サービス</h2>
              <div className="flex flex-wrap gap-3">
                <Link to="/services/body-wellness/" className="px-5 py-2 bg-white border border-gray-100 shadow-sm rounded-sm text-[11px] uppercase tracking-[0.3em] font-bold hover:opacity-70">
                  BODY WELLNESS
                </Link>
                <Link to="/services/herbal-rituals/" className="px-5 py-2 bg-white border border-gray-100 shadow-sm rounded-sm text-[11px] uppercase tracking-[0.3em] font-bold hover:opacity-70">
                  HERBAL RITUALS
                </Link>
                <Link to="/services/skin-therapy/" className="px-5 py-2 bg-white border border-gray-100 shadow-sm rounded-sm text-[11px] uppercase tracking-[0.3em] font-bold hover:opacity-70">
                  SKIN THERAPY
                </Link>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">よくある質問（FAQ）</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Q. 痛い施術ですか？</strong>
                  <br />
                  A. 強さは調整できます。心地よさを優先して受けるのがおすすめです。
                </p>
                <p>
                  <strong>Q. どのくらいの頻度で受けるのがおすすめですか？</strong>
                  <br />
                  A. ライフスタイルやお疲れの感じ方に合わせて、無理のないペースで取り入れる方が多いです。気になる方は来店時にご相談ください。
                </p>
                <p>
                  <strong>Q. 男性でも利用できますか？</strong>
                  <br />
                  A. 店舗の利用条件に沿ってご案内しています。ご予約時にお気軽にお問い合わせください。
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">あわせて読みたい</h2>
              <Link
                to="/blog/kawasaki-massage-guide/"
                className="inline-block px-6 py-3 bg-white border border-gray-100 shadow-sm rounded-sm text-[11px] uppercase tracking-[0.25em] font-bold hover:opacity-70"
              >
                川崎でマッサージを選ぶポイントを読む
              </Link>
            </section>
          </section>

          <section className="mt-16 p-10 bg-white border border-gray-100 shadow-sm rounded-sm text-center space-y-5">
            <h2 className="text-2xl font-serif tracking-wide">ご予約・ご相談はこちら</h2>
            <p className="text-gray-600">
              川崎でベトナム式マッサージをご検討中の方は、公式予約ページから空き状況をご確認ください。
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
