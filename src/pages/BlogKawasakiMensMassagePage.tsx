import React from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { SITE_ORIGIN, SQUARE_BOOKING_LINK } from '../constants';

export const BlogKawasakiMensMassagePage: React.FC = () => {
  return (
    <>
      <Seo
        title="川崎でメンズ向けマッサージを探す方へ｜男性が通いやすい選び方・予約のポイント"
        description="川崎でメンズ向けマッサージを探している方へ。初めてでも通いやすい選び方、予約前チェック、当日の流れをわかりやすく解説。WEB予約はこちら。"
        canonicalPath="/blog/kawasaki-mens-massage/"
        structuredData={[
          {
            '@type': 'BlogPosting',
            headline: '川崎でメンズ向けマッサージを探す方へ｜男性が通いやすい選び方・予約のポイント',
            description:
              '川崎でメンズ向けマッサージを探している方へ。初めてでも通いやすい選び方、予約前チェック、当日の流れをわかりやすく解説。WEB予約はこちら。',
            mainEntityOfPage: `${SITE_ORIGIN}/blog/kawasaki-mens-massage/`,
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
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '仕事帰りでも利用しやすいですか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'ご希望の時間帯の空き状況によります。予約ページで空き枠をご確認ください。',
                },
              },
              {
                '@type': 'Question',
                name: '60分と90分、どちらが向いていますか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '初めての方や軽い疲れには60分、全身の疲労感が強い方には90分が選ばれやすいです。',
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
        <article className="container mx-auto px-6 max-w-5xl">
          <header className="mb-16 space-y-6 text-center">
            <p className="text-[10px] uppercase tracking-[0.5em] text-spa-green font-bold opacity-70">
              KAWASAKI MEN&apos;S MASSAGE GUIDE
            </p>
            <h1 className="text-3xl md:text-5xl font-serif leading-tight tracking-wide">
              川崎でメンズ向けマッサージを探す方へ｜男性が通いやすい選び方・予約のポイント
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-justify">
              「川崎でマッサージを受けたいけど、男性でも落ち着いて通えるお店がいい」
              そんな方に向けて、メンズ目線での選び方と予約前のチェックをまとめました。初めての方でも迷いにくいよう、ポイントだけをシンプルに紹介します。
            </p>
          </header>

          <section className="space-y-10 text-[17px] leading-relaxed">
            <section className="space-y-5">
              <a
                href={SQUARE_BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-spa-deep text-white text-[11px] uppercase tracking-[0.2em] font-bold transition-all hover:bg-spa-green rounded-sm"
              >
                今すぐ予約する
              </a>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">1. メンズが気にしやすい“通いやすさ”の条件</h2>
              <p className="text-gray-700">
                男性が安心して通えるかどうかは、技術だけでなく「通いやすさ」でも決まります。
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>予約が取りやすい導線（WEB予約が分かりやすい）</li>
                <li>落ち着ける空間（清潔感・静かさ・プライバシー）</li>
                <li>目的に合わせて選べる（短時間で回復したい／全身をゆっくり整えたい）</li>
                <li>仕事帰りでも行ける（時間帯・アクセスの相性）</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">2. 目的別｜メニュー選びの目安（迷ったらここ）</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>デスクワーク疲れ（肩まわり・上半身の重さ）：上半身中心のボディケア</li>
                <li>全身の疲労感／休めていない感じ：リラックス重視の全身ケア</li>
                <li>短時間でリフレッシュしたい：まずは60分、余裕があれば90分</li>
              </ul>
              <p className="text-gray-700">
                迷う場合は、予約時に「上半身がつらい」「全身がだるい」など一言添えるとスムーズです。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">3. 初回でも安心｜当日の流れ</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>体調・気になる点をヒアリング</li>
                <li>施術中に強さを調整（遠慮なくお伝えください）</li>
                <li>施術後はその日は無理をせず、ゆったり過ごす</li>
              </ul>
              <p className="text-gray-700">
                「初めてで不安」「時間が限られている」なども、お気軽にご相談ください。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">4. 予約前チェック（川崎でメンズ向けに探す方へ）</h2>
              <p className="text-gray-700">予約前は次の3つだけ確認すると安心です。</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>所要時間（60分／90分など）</li>
                <li>アクセスと滞在時間（移動＋施術で無理がないか）</li>
                <li>予約の変更ルール（急な予定変更に対応できるか）</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">5. Ri Beauty Spaで相談できること（メンズの方へ）</h2>
              <p className="text-gray-700 text-justify">
                Ri Beauty Spaでは、目的や好みをうかがいながら、はじめての方でも選びやすいようにサポートしています。
                <br />
                →{' '}
                <Link to="/services/body-wellness/" className="underline underline-offset-4 hover:opacity-70">
                  ボディケア（Body Wellness）はこちら
                </Link>
                （/services/body-wellness/）
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">よくある質問（FAQ）</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Q. 仕事帰りでも利用しやすいですか？</strong>
                  <br />
                  A. ご希望の時間帯の空き状況によります。予約ページで空き枠をご確認ください。
                </p>
                <p>
                  <strong>Q. 60分と90分、どちらが向いていますか？</strong>
                  <br />
                  A. 初めての方や軽い疲れには60分、全身の疲労感が強い方には90分が選ばれやすいです。
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
              <h2 className="text-2xl font-serif tracking-wide">関連記事（あわせて読みたい）</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <Link to="/blog/kawasaki-massage-guide/" className="underline underline-offset-4 hover:opacity-70">
                    川崎でマッサージを選ぶときのポイント
                  </Link>
                  （/blog/kawasaki-massage-guide/）
                </li>
                <li>
                  <Link to="/blog/vietnamese-massage-kawasaki/" className="underline underline-offset-4 hover:opacity-70">
                    川崎でベトナム式マッサージをお探しの方へ
                  </Link>
                  （/blog/vietnamese-massage-kawasaki/）
                </li>
              </ul>
            </section>
          </section>

          <section className="mt-16 p-10 bg-white border border-gray-100 shadow-sm rounded-sm text-center space-y-5">
            <h2 className="text-2xl font-serif tracking-wide">ご予約・ご相談はこちら</h2>
            <p className="text-gray-600">
              川崎でメンズ向けマッサージをお探しの方は、公式予約ページから空き状況をご確認ください。
            </p>
            <a
              href={SQUARE_BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-spa-deep text-white text-[10px] uppercase tracking-[0.4em] font-bold transition-all hover:bg-spa-green rounded-sm"
            >
              今すぐ予約する
            </a>
          </section>
        </article>
      </main>
    </>
  );
};
