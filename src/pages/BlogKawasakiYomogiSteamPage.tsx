import React from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { SITE_ORIGIN, SQUARE_BOOKING_LINK } from '../constants';

// Representative image for this article (also rendered in the page body).
const HERO_IMAGE = '/images/herbal/YomogiSteaming.jpg';

// Dates are sourced from git history for this article, not from build time.
// datePublished: commit f871112 (initial publication of this post).
const DATE_PUBLISHED = '2026-08-05T09:26:52+09:00';
// dateModified: post-release SEO audit (image + structured data completion).
const DATE_MODIFIED = '2026-08-05T09:47:46+09:00';

export const BlogKawasakiYomogiSteamPage: React.FC = () => {
  return (
    <>
      <Seo
        title="川崎でよもぎ蒸しを受けるなら｜温活の流れ・初めての準備と選び方"
        description="川崎でよもぎ蒸しをお探しの方へ。ハーブの蒸気で内側から温めるケアの仕組み、当日の流れ、初めての方の準備、他のメニューとの組み合わせ方をわかりやすくご案内します。"
        canonicalPath="/blog/kawasaki-yomogi-steam/"
        image={HERO_IMAGE}
        ogType="article"
        structuredData={[
          {
            '@type': 'BlogPosting',
            headline: '川崎でよもぎ蒸しを受けるなら｜温活の流れ・初めての準備と選び方',
            description:
              '川崎でよもぎ蒸しをお探しの方へ。ハーブの蒸気で内側から温めるケアの仕組み、当日の流れ、初めての方の準備、他のメニューとの組み合わせ方をわかりやすくご案内します。',
            mainEntityOfPage: `${SITE_ORIGIN}/blog/kawasaki-yomogi-steam/`,
            image: {
              '@type': 'ImageObject',
              url: `${SITE_ORIGIN}${HERO_IMAGE}`,
              width: 1024,
              height: 768,
            },
            datePublished: DATE_PUBLISHED,
            dateModified: DATE_MODIFIED,
            inLanguage: 'ja-JP',
            author: {
              '@type': 'Organization',
              name: 'Ri Beauty Spa & Wellness',
              url: `${SITE_ORIGIN}/`,
            },
            publisher: {
              '@type': 'Organization',
              name: 'Ri Beauty Spa & Wellness',
              url: `${SITE_ORIGIN}/`,
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
                name: 'よもぎ蒸しは初めてでも大丈夫ですか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'はい。当日は体調やご希望をうかがいながらご案内しますので、初めての方もお気軽にご相談ください。',
                },
              },
              {
                '@type': 'Question',
                name: 'サウナの息苦しさが苦手でも受けられますか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'よもぎ蒸しは専用の椅子に座り、ハーブの蒸気で体を包み込むように温めるケアです。息苦しさを感じにくかったという声が多くありますが、感じ方には個人差がありますので、不安な点は施術前にお伝えください。',
                },
              },
              {
                '@type': 'Question',
                name: '服装や持ち物は必要ですか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '動きやすい服装が安心です。所要時間や当日の準備を含む詳細は、予約時の案内をご確認ください。',
                },
              },
              {
                '@type': 'Question',
                name: '体調に不安がある場合はどうすればいいですか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '妊娠中の方や持病のある方など健康上の不安がある場合は、施術前に必ずスタッフへお申し出ください。必要に応じて、事前に医師へご相談のうえご利用ください。',
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
              KAWASAKI YOMOGI STEAM GUIDE
            </p>
            <h1 className="text-3xl md:text-5xl font-serif leading-tight tracking-wide">
              川崎でよもぎ蒸しを受けるなら｜温活の流れと初めての準備
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-justify">
              「川崎でよもぎ蒸しを試してみたいけれど、どんなケアなのかイメージがわかない」——
              そんな方に向けて、よもぎ蒸しの仕組みと当日の流れ、初めてでも安心して受けるための準備をまとめました。
              ※当店の施術はリラクゼーションを目的とした一般的なサービスであり、医療行為ではありません。
            </p>
          </header>

          <figure className="mb-16">
            <div className="aspect-[4/3] overflow-hidden rounded-sm border border-gray-100 shadow-sm bg-white">
              <img
                src={HERO_IMAGE}
                width={1024}
                height={768}
                alt="よもぎ蒸し用の椅子と専用ケープを身につけた人、よもぎの葉を描いたイラスト"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-[13px] text-gray-500 text-center">
              専用の椅子に座り、ハーブの蒸気で全身をやさしく温めます（イメージイラスト）。
            </figcaption>
          </figure>

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
              <h2 className="text-2xl font-serif tracking-wide">1. よもぎ蒸しとは｜ハーブの蒸気で内側から温めるケア</h2>
              <p className="text-gray-700 text-justify">
                よもぎは、古くから東洋で親しまれてきた伝統的なハーブです。日本でもお灸や薬草として生活に根づいてきました。
                よもぎ蒸しは、そのハーブを蒸した蒸気で体を包み込むように温める、いわゆる「温活」のケアです。
              </p>
              <h3 className="text-xl font-serif tracking-wide">サウナとの違い</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>高温の空気ではなく、ハーブの蒸気でじんわり温める</li>
                <li>専用の椅子に座ったまま受けられる</li>
                <li>体の内側からゆっくり温まる感覚で、息苦しさを感じにくいという声が多い</li>
              </ul>
              <p className="text-gray-600">※感じ方には個人差があります。</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">2. こんな方に選ばれています（川崎で温活をお探しの方へ）</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>冷えが気になる方、寒い季節に体を温める時間を持ちたい方</li>
                <li>心地よく汗をかいて、気分をリセットしたい方</li>
                <li>一日の終わりに、静かに休まる時間をつくりたい方</li>
                <li>強い圧のマッサージが苦手で、座ったまま受けられるケアを探している方</li>
              </ul>
              <p className="text-gray-700 text-justify">
                川崎で「マッサージ以外のリラクゼーションも試したい」という方から選ばれやすいメニューです。
                手技のケアと迷う場合は、
                <Link to="/blog/kawasaki-massage-guide/" className="underline underline-offset-4 hover:opacity-70">
                  川崎でマッサージを選ぶときのポイント
                </Link>
                もあわせてご覧ください。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">3. 当日の流れ（初めての方向け）</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>体調や気になる点をヒアリング</li>
                <li>専用の椅子に座り、ハーブの蒸気で全身をやさしく温める</li>
                <li>途中で熱さや体調が気になったら、遠慮なくスタッフへお伝えいただく</li>
                <li>終了後は水分補給をして、その日は無理をせずゆったり過ごす</li>
              </ul>
              <p className="text-gray-700">
                所要時間や料金は予約ページでご確認いただけます。ご希望の時間帯は空き状況によります。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">4. 初めてでも安心｜準備と過ごし方のコツ</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>動きやすい服装で来店する（当日の準備は予約時の案内をご確認ください）</li>
                <li>施術前後はこまめに水分をとる</li>
                <li>直前の食事は控えめにして、体が温まりやすい状態で受ける</li>
                <li>健康上の不安がある場合は、必ず事前にスタッフへ申し出る</li>
              </ul>
              <p className="text-gray-600 text-justify">
                ※妊娠中の方、持病のある方、皮膚のトラブルがある方などは、必要に応じて事前に医師へご相談のうえご利用ください。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">5. 他のメニューと組み合わせる</h2>
              <p className="text-gray-700 text-justify">
                体を温めてから受けたい方、温まった後にゆっくり整えたい方など、目的に合わせて組み合わせをご相談いただけます。
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <Link to="/services/herbal-rituals/" className="underline underline-offset-4 hover:opacity-70">
                    ハーブの儀式（Herbal Rituals）
                  </Link>
                  ：よもぎ蒸しやハーブティーなど、ハーブを取り入れたメニュー
                </li>
                <li>
                  <Link to="/services/body-wellness/" className="underline underline-offset-4 hover:opacity-70">
                    ボディケア（Body Wellness）
                  </Link>
                  ：肩まわりや脚の重さが気になる方の手技ケア
                </li>
                <li>
                  <Link to="/services/skin-therapy/" className="underline underline-offset-4 hover:opacity-70">
                    スキンケア（Skin Therapy）
                  </Link>
                  ：肌の調子を整えたい方のフェイシャルメニュー
                </li>
              </ul>
              <p className="text-gray-700">
                アクセスは{' '}
                <Link to="/access/" className="underline underline-offset-4 hover:opacity-70">
                  地図・アクセスページ
                </Link>
                {' '}をご確認ください。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">よくある質問（FAQ）</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Q. よもぎ蒸しは初めてでも大丈夫ですか？</strong>
                  <br />
                  A. はい。当日は体調やご希望をうかがいながらご案内しますので、初めての方もお気軽にご相談ください。
                </p>
                <p>
                  <strong>Q. サウナの息苦しさが苦手でも受けられますか？</strong>
                  <br />
                  A. よもぎ蒸しは専用の椅子に座り、ハーブの蒸気で体を包み込むように温めるケアです。息苦しさを感じにくかったという声が多くありますが、感じ方には個人差がありますので、不安な点は施術前にお伝えください。
                </p>
                <p>
                  <strong>Q. 服装や持ち物は必要ですか？</strong>
                  <br />
                  A. 動きやすい服装が安心です。所要時間や当日の準備を含む詳細は、予約時の案内をご確認ください。
                </p>
                <p>
                  <strong>Q. 体調に不安がある場合はどうすればいいですか？</strong>
                  <br />
                  A. 妊娠中の方や持病のある方など健康上の不安がある場合は、施術前に必ずスタッフへお申し出ください。必要に応じて、事前に医師へご相談のうえご利用ください。
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">関連記事（あわせて読みたい）</h2>
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
                <Link
                  to="/kawasaki-massage/"
                  className="inline-block px-6 py-3 bg-white border border-gray-100 shadow-sm rounded-sm text-[11px] uppercase tracking-[0.25em] font-bold hover:opacity-70"
                >
                  川崎のマッサージ・リラクゼーション案内
                </Link>
              </div>
            </section>
          </section>

          <section className="mt-16 p-10 bg-white border border-gray-100 shadow-sm rounded-sm text-center space-y-5">
            <h2 className="text-2xl font-serif tracking-wide">ご予約・ご相談はこちら</h2>
            <p className="text-gray-600">
              川崎でよもぎ蒸しをご検討中の方は、公式予約ページから空き状況をご確認ください。
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
