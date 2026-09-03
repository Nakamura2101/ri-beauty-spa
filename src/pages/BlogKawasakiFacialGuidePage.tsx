import React from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { SITE_ORIGIN, SQUARE_BOOKING_LINK } from '../constants';

// Representative image for this article (also rendered in the page body).
const HERO_IMAGE = '/images/SKINTHERAPY/BasicFacial.jpg';
// Serum close-up used in the "乾燥" part of the concern-based section.
const HYDRATION_IMAGE = '/images/SKINTHERAPY/IntensiveHydratingPack.jpg';
// Salon treatment image used in the Ri Beauty Spa section.
const SALON_IMAGE = '/images/SKINTHERAPY/IntensiveSebumCare.jpg';

// Dates come from this article's real git history, not the build clock.
// datePublished: initial publication of this post.
const DATE_PUBLISHED = '2026-09-04T07:12:00+09:00';
// dateModified: same as publication - the text has not changed since.
const DATE_MODIFIED = '2026-09-04T07:12:00+09:00';

const TITLE = '川崎のフェイシャルエステ｜毛穴・乾燥ケアの選び方｜Ri Beauty Spa';
const DESCRIPTION =
  '川崎でフェイシャルをお探しの方へ。毛穴のざらつき、乾燥、肌のくすみ感など、いま気になるところからメニューを選ぶときの考え方をまとめました。初めての方に向けた当日の流れや、Ri Beauty Spaのスキンケア（Skin Therapy）で選べるコースもご案内します。';

export const BlogKawasakiFacialGuidePage: React.FC = () => {
  return (
    <>
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        canonicalPath="/blog/kawasaki-facial-guide/"
        image={HERO_IMAGE}
        ogType="article"
        structuredData={[
          {
            '@type': 'BlogPosting',
            headline: TITLE,
            description: DESCRIPTION,
            mainEntityOfPage: `${SITE_ORIGIN}/blog/kawasaki-facial-guide/`,
            image: {
              '@type': 'ImageObject',
              url: `${SITE_ORIGIN}${HERO_IMAGE}`,
              width: 648,
              height: 800,
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
                name: 'フェイシャルは初めてですが、どのメニューを選べばいいですか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '毛穴・乾燥・くすみ感など、いちばん気になる点をひとつお伝えください。当日、肌の状態を確認しながらご提案します。',
                },
              },
              {
                '@type': 'Question',
                name: '施術のあと、そのまま外出できますか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '当日のご予定が決まっている場合は、ご予約時か施術前にお知らせください。ご予定に合わせて内容をご相談いただけます。',
                },
              },
              {
                '@type': 'Question',
                name: 'ベーシックなフェイシャルとハーブピーリングは何が違いますか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'クレンジングと保湿を中心に肌の土台を整えるのがベーシックフェイシャル、肌の質感の変化を目的としたメニューがハーブピーリングです。',
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
              KAWASAKI FACIAL GUIDE
            </p>
            <h1 className="text-3xl md:text-5xl font-serif leading-tight tracking-wide">
              川崎でフェイシャルを探す方へ｜毛穴・乾燥・くすみが気になるときの選び方
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-justify">
              サロンのフェイシャルは、メニュー名だけを見ても違いがわかりにくいものです。
              ここでは「いま、肌のどこが気になるか」から選んでいく考え方を、初めての方に向けてまとめました。
              ※当店の施術はリラクゼーションと美容を目的とした一般的なサービスであり、医療行為ではありません。
            </p>
          </header>

          {/* Capped to the asset's native width so it is never upscaled. */}
          <figure className="mb-16 max-w-md mx-auto">
            <div className="aspect-[81/100] overflow-hidden rounded-sm border border-gray-100 shadow-sm bg-white">
              <img
                src={HERO_IMAGE}
                width={648}
                height={800}
                alt="白いヘアバンドをつけて施術台に横たわる方の顔に、施術者がガラスの器から美容液をとって塗布している様子"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-[13px] text-gray-500 text-center">
              肌の状態をうかがいながら、その日のケアを組み立てていきます。
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
              <h2 className="text-2xl font-serif tracking-wide">1. フェイシャルを選ぶ前に確認したいこと</h2>
              <p className="text-gray-700 text-justify">
                メニューを比べる前に、次の三つを整理しておくと迷いにくくなります。
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>いちばん気になるのは、毛穴・乾燥・肌のくすみ感のどれか</li>
                <li>肌の土台を整えたいのか、肌の質感まで変えていきたいのか</li>
                <li>施術のあとの予定（そのまま外出するか、ゆっくり帰れるか）</li>
              </ul>
              <p className="text-gray-700 text-justify">
                ひとつに絞りきれなくても構いません。当日、肌の状態を見ながらご相談いただけます。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">2. 毛穴・乾燥・くすみ感｜悩み別の選び方</h2>
              <p className="text-gray-700 text-justify">
                気になるところによって、選びやすいメニューの方向性は変わります。
              </p>

              <h3 className="text-xl font-serif tracking-wide">毛穴のざらつき・黒ずみが気になるとき</h3>
              <p className="text-gray-700 text-justify">
                毎日の洗顔では落としきれない毛穴の汚れをケアするメニューが向いています。
                当店では「毛穴ケア（ディープクレンジング）」のほか、Tゾーンの角栓や皮脂が気になる方向けに「毛穴集中ケア」をご用意しています。
              </p>

              <h3 className="text-xl font-serif tracking-wide">乾燥・つっぱりが気になるとき</h3>
              <p className="text-gray-700 text-justify">
                クレンジングと保湿を中心とした「ベーシックフェイシャル」が選びやすい選択肢です。
                乾燥が続いているときは、オプションの「保湿パック」を組み合わせて、うるおいを与える日にしていただけます。
              </p>
              <figure className="pt-2 max-w-xs mx-auto">
                <div className="aspect-[4/5] overflow-hidden rounded-sm border border-gray-100 shadow-sm bg-white">
                  <img
                    src={HYDRATION_IMAGE}
                    width={640}
                    height={800}
                    loading="lazy"
                    alt="目を閉じた頬の近くで、ガラスのスポイトから美容液を一滴たらしている肌のクローズアップ"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-[13px] text-gray-500 text-center">
                  乾燥が気になる日は、保湿を重ねて。
                </figcaption>
              </figure>

              <h3 className="text-xl font-serif tracking-wide">肌のくすみ感が気になるとき</h3>
              <p className="text-gray-700 text-justify">
                夏のあいだの紫外線と乾燥が重なると、秋口に肌の印象が沈んで見えることがあります。
                明るい印象を目指したい方には「ブライトニングケア」、肌の質感まで変えていきたい方にはハーブピーリングの「ツヤ肌コース」もご検討いただけます。
              </p>
              <p className="text-gray-600">
                ※感じ方や肌の変化には個人差があり、効果を保証するものではありません。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">3. 初めてフェイシャルを受ける方へ</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>当日は肌の状態と気になる点をうかがってから、メニューをご案内します</li>
                <li>普段のスキンケアや、肌に合わなかったものがあればお知らせください</li>
                <li>施術中に刺激や違和感があれば、その場でスタッフへお伝えいただけます</li>
                <li>施術後は、保湿と紫外線対策をいつもより丁寧に</li>
              </ul>
              <p className="text-gray-600 text-justify">
                ※皮膚のトラブルがある方、妊娠中の方、持病のある方などは、施術前にお申し出ください。必要に応じて、事前に医師へご相談のうえご利用ください。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">4. Ri Beauty SpaのSkin Therapy</h2>
              <p className="text-gray-700 text-justify">
                当店は川崎市幸区にあるサロンで、フェイシャルはスキンケア（Skin Therapy）のメニューとしてご用意しています。
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>ベーシックフェイシャルから、毛穴・くすみなど目的別のメニューまでお選びいただけます</li>
                <li>デコルテケア・保湿パック・ヘッドケアなどのオプションを組み合わせられます</li>
                <li>施術の前後には、アーティチョークのハーブティーをお出ししています</li>
              </ul>
              <figure className="pt-2 max-w-3xl mx-auto">
                <div className="aspect-[3/2] overflow-hidden rounded-sm border border-gray-100 shadow-sm bg-white">
                  <img
                    src={SALON_IMAGE}
                    width={1199}
                    height={799}
                    loading="lazy"
                    alt="施術台で目を閉じている方の頬に、施術者が白いヘッドの美容機器をあてているフェイシャルの様子"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-[13px] text-gray-500 text-center">
                  肌状態に合わせて、その日の内容をご提案します。
                </figcaption>
              </figure>
              <p className="text-gray-700">
                メニューの一覧は{' '}
                <Link to="/services/skin-therapy/" className="underline underline-offset-4 hover:opacity-70">
                  スキンケア（Skin Therapy）のページ
                </Link>
                、フェイシャル全体のご案内は{' '}
                <Link to="/services/facial/" className="underline underline-offset-4 hover:opacity-70">
                  フェイシャルのページ
                </Link>
                、場所は{' '}
                <Link to="/access/" className="underline underline-offset-4 hover:opacity-70">
                  地図・アクセスページ
                </Link>
                {' '}をご覧ください。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">よくある質問（FAQ）</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Q. フェイシャルは初めてですが、どのメニューを選べばいいですか？</strong>
                  <br />
                  A. 毛穴・乾燥・くすみ感など、いちばん気になる点をひとつお伝えください。当日、肌の状態を確認しながらご提案します。
                </p>
                <p>
                  <strong>Q. 施術のあと、そのまま外出できますか？</strong>
                  <br />
                  A. 当日のご予定が決まっている場合は、ご予約時か施術前にお知らせください。ご予定に合わせて内容をご相談いただけます。
                </p>
                <p>
                  <strong>Q. ベーシックなフェイシャルとハーブピーリングは何が違いますか？</strong>
                  <br />
                  A. クレンジングと保湿を中心に肌の土台を整えるのがベーシックフェイシャル、肌の質感の変化を目的としたメニューがハーブピーリングです。
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">関連記事（あわせて読みたい）</h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/blog/kawasaki-herbal-peel/"
                  className="inline-block px-6 py-3 bg-white border border-gray-100 shadow-sm rounded-sm text-[11px] uppercase tracking-[0.25em] font-bold hover:opacity-70"
                >
                  川崎のハーブピーリングを読む
                </Link>
                <Link
                  to="/blog/kawasaki-massage-guide/"
                  className="inline-block px-6 py-3 bg-white border border-gray-100 shadow-sm rounded-sm text-[11px] uppercase tracking-[0.25em] font-bold hover:opacity-70"
                >
                  川崎でマッサージを選ぶポイントを読む
                </Link>
                <Link
                  to="/services/skin-therapy/"
                  className="inline-block px-6 py-3 bg-white border border-gray-100 shadow-sm rounded-sm text-[11px] uppercase tracking-[0.25em] font-bold hover:opacity-70"
                >
                  スキンケア（Skin Therapy）はこちら
                </Link>
              </div>
            </section>
          </section>

          <section className="mt-16 p-10 bg-white border border-gray-100 shadow-sm rounded-sm text-center space-y-5">
            <h2 className="text-2xl font-serif tracking-wide">ご予約・ご相談はこちら</h2>
            <p className="text-gray-600">
              川崎でフェイシャルをご検討中の方は、公式予約ページから空き状況をご確認ください。
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
