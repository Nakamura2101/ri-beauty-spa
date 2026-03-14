import React from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { SITE_ORIGIN, SQUARE_BOOKING_LINK } from '../constants';

export const KawasakiMassagePage: React.FC = () => {
  return (
    <>
      <Seo
        title="川崎のマッサージ・リラクゼーション｜Ri Beauty Spa｜予約・アクセス"
        description="川崎でマッサージ・リラクゼーションをお探しの方へ。目的別の目安、初回の流れ、予約・アクセスを上質にご案内。空き状況の確認はこちら。"
        canonicalPath="/kawasaki-massage/"
        structuredData={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'ホーム', item: `${SITE_ORIGIN}/` },
              { '@type': 'ListItem', position: 2, name: '川崎マッサージ', item: `${SITE_ORIGIN}/kawasaki-massage/` },
            ],
          },
          {
            '@type': 'LocalBusiness',
            name: 'Ri Beauty Spa & Wellness',
            url: `${SITE_ORIGIN}/kawasaki-massage/`,
            telephone: '[PHONE]',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '南幸町2-10-12-101',
              addressLocality: '川崎市幸区',
              addressRegion: '神奈川県',
              postalCode: '212-0016',
              addressCountry: 'JP',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '[LAT]',
              longitude: '[LNG]',
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: '[OPENING_HOURS_DAY_OF_WEEK]',
                opens: '[OPENING_HOURS_OPEN]',
                closes: '[OPENING_HOURS_CLOSE]',
              },
            ],
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '60分と90分、どちらを選べばいいですか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '初めての方や軽い疲れには60分、全身の疲労感が強い方には90分が選ばれやすいです。',
                },
              },
              {
                '@type': 'Question',
                name: '当日は何分前に行けばいいですか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '初回はカウンセリングがあるため、5〜10分前の到着がおすすめです。',
                },
              },
              {
                '@type': 'Question',
                name: '服装や持ち物は必要ですか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '動きやすい服装が安心です。詳細は予約時の案内をご確認ください。',
                },
              },
              {
                '@type': 'Question',
                name: '予約の変更・キャンセルはできますか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '可能です。予約ページの案内に沿ってお手続きください。',
                },
              },
            ],
          },
        ]}
      />

      <main className="pt-32 pb-24 bg-[#fdfdfb] text-black">
        <article className="container mx-auto px-6 max-w-6xl">
          <header className="mb-16 md:mb-20 space-y-8 text-center">
            <p className="text-[10px] uppercase tracking-[0.5em] text-spa-green font-bold opacity-70">KAWASAKI MASSAGE</p>
            <h1 className="text-3xl md:text-5xl font-serif leading-tight tracking-wide max-w-4xl mx-auto">
              川崎のマッサージ・リラクゼーション
            </h1>
            <p className="text-sm md:text-lg uppercase tracking-[0.35em] text-spa-deep/75 font-medium max-w-4xl mx-auto">
              Ri Beauty Spa
            </p>
            <p className="text-xl md:text-3xl font-serif leading-relaxed tracking-wide max-w-4xl mx-auto text-spa-deep/90">
              頑張る自分へのご褒美に、心ほどけるひとときを。
            </p>
            <p className="text-lg md:text-xl text-spa-deep/85 leading-relaxed max-w-3xl mx-auto text-center">
              日常の緊張をほどき、静かに整える時間を。
            </p>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-center">
              目的に合わせた選び方と、初めての方でも安心できる流れをご案内します。
            </p>
            <a
              href={SQUARE_BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-spa-deep text-white text-[11px] uppercase tracking-[0.22em] font-bold transition-all hover:bg-spa-green rounded-sm"
            >
              空き状況を確認して予約する
            </a>
          </header>

          <section className="space-y-14 md:space-y-16">
            <section className="space-y-7">
              <h2 className="text-2xl md:text-3xl font-serif tracking-wide">お疲れ別｜おすすめ</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <article className="bg-white border border-gray-100 shadow-sm rounded-sm p-7 space-y-4">
                  <h3 className="text-xl font-serif tracking-wide">肩まわりの重さ・デスクワーク疲れ</h3>
                  <p className="text-gray-700 leading-relaxed">上半身中心のボディケアで、こわばりやすい部分を丁寧に整えます。</p>
                </article>
                <article className="bg-white border border-gray-100 shadow-sm rounded-sm p-7 space-y-4">
                  <h3 className="text-xl font-serif tracking-wide">脚のだるさ・巡りの滞りが気になる</h3>
                  <p className="text-gray-700 leading-relaxed">ゆったりとしたケアで、全身のコンディションを整えたい方に。</p>
                </article>
                <article className="bg-white border border-gray-100 shadow-sm rounded-sm p-7 space-y-4">
                  <h3 className="text-xl font-serif tracking-wide">疲労感・休めていない感じ</h3>
                  <p className="text-gray-700 leading-relaxed">深呼吸しやすい状態へ。リラックス重視で全身をやさしく整えます。</p>
                </article>
              </div>
              <p className="text-gray-700 leading-relaxed">
                迷う場合は、予約時に「肩がつらい」「全身が重い」など一言添えてください。
              </p>
            </section>

            <section className="bg-white border border-gray-100 shadow-sm rounded-sm p-7 md:p-9 space-y-5">
              <h2 className="text-2xl md:text-3xl font-serif tracking-wide">初めての方へ｜当日の流れ</h2>
              <ul className="space-y-3 text-gray-700 leading-relaxed list-disc pl-6">
                <li>体調や気になる点をヒアリング</li>
                <li>施術中に強さを調整（遠慮なくお伝えください）</li>
                <li>施術後はその日は無理をせず、ゆったり過ごす</li>
              </ul>
            </section>

            <section className="bg-white border border-gray-100 shadow-sm rounded-sm p-7 md:p-9 space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif tracking-wide">技術・安心感（Professionalism）</h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                当店では、はじめての方にも安心していただけるよう、状態やお好みを伺いながら無理のないご提案を行います。
              </p>
              <p className="text-gray-700 leading-relaxed">
                状態やお好みを伺い、無理のないご提案で整える時間をご用意します。
              </p>
              <p className="text-gray-700 leading-relaxed">
                気になる点があれば、予約時にお気軽にご相談ください。
              </p>
            </section>

            <section className="bg-white border border-gray-100 shadow-sm rounded-sm p-7 md:p-9 space-y-3">
              <h2 className="text-2xl md:text-3xl font-serif tracking-wide">Ri Beauty Spaで相談できること</h2>
              <p className="text-gray-700 leading-relaxed">
                <Link to="/services/body-wellness/" className="underline underline-offset-4 hover:opacity-70">
                  ボディケア（Body Wellness）はこちら
                </Link>
              </p>
            </section>

            <section className="bg-white border border-gray-100 shadow-sm rounded-sm p-7 md:p-9 space-y-5">
              <h2 className="text-2xl md:text-3xl font-serif tracking-wide">予約・アクセス</h2>
              <a
                href={SQUARE_BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-spa-deep text-white text-[11px] uppercase tracking-[0.2em] font-bold transition-all hover:bg-spa-green rounded-sm"
              >
                空き状況を確認して予約する
              </a>
              <p className="text-gray-700 leading-relaxed">当日予約：空き状況によります（予約ページをご確認ください）</p>
              <Link
                to="/access/"
                className="inline-block px-6 py-3 bg-white border border-gray-200 shadow-sm rounded-sm text-[11px] uppercase tracking-[0.2em] font-bold text-black hover:text-spa-green hover:border-spa-green transition-all"
              >
                地図・アクセスはこちら
              </Link>
            </section>

            <section className="bg-white border border-gray-100 shadow-sm rounded-sm p-7 md:p-9 space-y-5">
              <h2 className="text-2xl md:text-3xl font-serif tracking-wide">よくある質問（FAQ）</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Q. 60分と90分、どちらを選べばいいですか？</strong>
                  <br />
                  A. 初めての方や軽い疲れには60分、全身の疲労感が強い方には90分が選ばれやすいです。
                </p>
                <p>
                  <strong>Q. 当日は何分前に行けばいいですか？</strong>
                  <br />
                  A. 初回はカウンセリングがあるため、5〜10分前の到着がおすすめです。
                </p>
                <p>
                  <strong>Q. 服装や持ち物は必要ですか？</strong>
                  <br />
                  A. 動きやすい服装が安心です。詳細は予約時の案内をご確認ください。
                </p>
                <p>
                  <strong>Q. 予約の変更・キャンセルはできますか？</strong>
                  <br />
                  A. 可能です。予約ページの案内に沿ってお手続きください。
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif tracking-wide">関連記事（あわせて読みたい）</h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/blog/kawasaki-massage-guide/"
                  className="inline-block px-6 py-3 bg-white border border-gray-100 shadow-sm rounded-sm text-[11px] uppercase tracking-[0.25em] font-bold hover:opacity-70"
                >
                  川崎でマッサージを選ぶポイントを読む
                </Link>
                <Link
                  to="/blog/vietnamese-massage-kawasaki/"
                  className="inline-block px-6 py-3 bg-white border border-gray-100 shadow-sm rounded-sm text-[11px] uppercase tracking-[0.25em] font-bold hover:opacity-70"
                >
                  ベトナム式マッサージの特徴を読む
                </Link>
              </div>
            </section>
          </section>
        </article>
      </main>
    </>
  );
};
