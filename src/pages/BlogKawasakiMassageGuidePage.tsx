import React from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { SITE_ORIGIN, SQUARE_BOOKING_LINK } from '../constants';

export const BlogKawasakiMassageGuidePage: React.FC = () => {
  return (
    <>
      <Seo
        title="川崎でマッサージを選ぶときのポイント｜目的別の選び方・予約前チェック"
        description="川崎でマッサージを探している方へ。目的別の選び方（肩こり・むくみ・疲労感）や予約前チェック、当日の流れを簡潔に解説。Ri Beauty Spaの予約はこちら。"
        canonicalPath="/blog/kawasaki-massage-guide/"
        structuredData={[
          {
            '@type': 'BlogPosting',
            headline: '川崎でマッサージを選ぶときのポイント｜目的別の選び方・予約前チェック',
            description:
              '川崎でマッサージを探している方へ。目的別の選び方（肩こり・むくみ・疲労感）や予約前チェック、当日の流れを簡潔に解説。Ri Beauty Spaの予約はこちら。',
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
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '60分と90分、どちらを選べばいいですか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '軽い疲れや初めての方は60分、全身の疲労感が強い方は90分が選ばれやすいです。迷う場合は目的を添えてご相談ください。',
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
            <section className="space-y-5">
              <p className="text-gray-700 text-justify">
                川崎でマッサージを受けたいと思ったとき、店選びで迷う方は少なくありません。ここでは、目的に合う選び方と予約前に確認したいポイント、そして施術を心地よく受けるコツを短くまとめました。まずは気軽にチェックしてみてください。
              </p>
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
                <li>メニュー内容と料金がわかりやすいか</li>
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
              <h2 className="text-2xl font-serif tracking-wide">4. 目的別｜施術タイプの目安（迷ったらここ）</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>肩こり・首こり：ボディケア（もみほぐし/指圧系）で上半身中心に</li>
                <li>むくみ・脚の重さ：オイル/リンパ系でゆっくり流すケア</li>
                <li>疲労感・眠りの浅さ：リラックス重視で呼吸が深くなる全身ケア</li>
              </ul>
              <p className="text-gray-600">
                ※感じ方には個人差があります。初めての方はご希望を伺いながら調整します。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">5. 初回でも安心｜当日の流れ</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>体調・気になる部位をヒアリング</li>
                <li>施術中に強さを調整（我慢せずお伝えください）</li>
                <li>施術後は水分補給と休息を意識</li>
              </ul>
              <p className="text-gray-700">「どれを選べばいいかわからない」場合も、お気軽にご相談ください。</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">6. Ri Beauty Spaで相談できること（初めての方へ）</h2>
              <p className="text-gray-700 text-justify">
                Ri Beauty Spaでは、はじめての方でも迷いにくいように、目的（肩まわり・むくみ・疲労感など）や好みの圧をうかがい、メニュー選びをサポートしています。
              </p>
              <p className="text-gray-700">
                「どれを選べばいいかわからない」「短時間でリフレッシュしたい」など、まずはお気軽にご相談ください。
              </p>
              <p className="text-gray-700">
                →{' '}
                <Link to="/services/body-wellness/" className="underline underline-offset-4 hover:opacity-70">
                  ボディケア（Body Wellness）はこちら
                </Link>
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">よくある質問（FAQ）</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Q. 60分と90分、どちらを選べばいいですか？</strong>
                  <br />
                  A. 軽い疲れや初めての方は60分、全身の疲労感が強い方は90分が選ばれやすいです。迷う場合は目的を添えてご相談ください。
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
              <h2 className="text-2xl font-serif tracking-wide">あわせて読みたい</h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/blog/vietnamese-massage-kawasaki/"
                  className="inline-block px-6 py-3 bg-white border border-gray-100 shadow-sm rounded-sm text-[11px] uppercase tracking-[0.25em] font-bold hover:opacity-70"
                >
                  ベトナム式マッサージの特徴を読む
                </Link>
                <Link
                  to="/services/body-wellness/"
                  className="inline-block px-6 py-3 bg-white border border-gray-100 shadow-sm rounded-sm text-[11px] uppercase tracking-[0.25em] font-bold hover:opacity-70"
                >
                  ボディケア（Body Wellness）はこちら
                </Link>
              </div>
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