import React from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { SITE_ORIGIN, SQUARE_BOOKING_LINK } from '../constants';

// Representative image for this article (also rendered in the page body).
const HERO_IMAGE = '/images/body/LymphaticDrainage.JPG';
// Room image used in the oil/aroma section.
const ROOM_IMAGE = '/images/herbal/EssentialOils.jpg';
// Leg-care image used in the "脚のだるさ・むくみ" section.
const LEG_IMAGE = '/images/body/footcare.JPG';

// Dates come from this article's real git history, not the build clock.
// datePublished: initial publication of this post.
const DATE_PUBLISHED = '2026-08-22T10:28:27+09:00';
// dateModified: same as publication - the text has not changed since.
const DATE_MODIFIED = '2026-08-22T10:28:27+09:00';

const TITLE = '川崎のアロマリンパマッサージ｜オイルケアの選び方と受け方';
const DESCRIPTION =
  '川崎でアロマリンパマッサージをお探しの方へ。オイルを使ったアロマリンパトリートメントがどんな施術か、指圧系のケアとの選び分け、脚のだるさやむくみが気になる日の過ごし方を、初めての方に向けてご案内します。';

export const BlogKawasakiAromaLymphaticPage: React.FC = () => {
  return (
    <>
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        canonicalPath="/blog/kawasaki-aroma-lymphatic-massage/"
        image={HERO_IMAGE}
        ogType="article"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: TITLE,
          description: DESCRIPTION,
          mainEntityOfPage: `${SITE_ORIGIN}/blog/kawasaki-aroma-lymphatic-massage/`,
          image: {
            '@type': 'ImageObject',
            url: `${SITE_ORIGIN}${HERO_IMAGE}`,
            width: 2048,
            height: 1152,
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
        }}
      />

      <main className="pt-32 pb-24 bg-[#fdfdfb] text-black">
        <article className="container mx-auto px-6 max-w-5xl">
          <header className="mb-16 space-y-6 text-center">
            <p className="text-[10px] uppercase tracking-[0.5em] text-spa-green font-bold opacity-70">
              KAWASAKI AROMA LYMPHATIC GUIDE
            </p>
            <h1 className="text-3xl md:text-5xl font-serif leading-tight tracking-wide">
              川崎でアロマリンパマッサージを探す方へ｜むくみ・脚のだるさ・疲れが気になるとき
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-justify">
              夕方になると脚が重い、一日の終わりに体がだるい。そんなときにオイルを使ったケアを探す方に向けて、
              アロマリンパトリートメントの受け方と、ほぐし系との選び分けをまとめました。
              ※当店の施術はリラクゼーションを目的とした一般的なサービスであり、医療行為ではありません。
            </p>
          </header>

          <figure className="mb-16">
            <div className="aspect-[16/9] overflow-hidden rounded-sm border border-gray-100 shadow-sm bg-white">
              <img
                src={HERO_IMAGE}
                width={2048}
                height={1152}
                alt="施術台でタオルをかけた状態のお腹まわりに、オイルをなじませた手のひらをあてている施術の様子"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-[13px] text-gray-500 text-center">
              オイルを使い、手のひら全体でゆっくりたどっていきます。
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
              <h2 className="text-2xl font-serif tracking-wide">1. アロマリンパトリートメントとは</h2>
              <p className="text-gray-700 text-justify">
                精油を合わせたオイルを肌にのばしながら、手のひら全体でゆっくりたどっていくボディケアです。
                一点ずつ押す手技とは異なり、脚から腰、背中から腕へと、広い範囲をひと続きの動きでたどります。
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>オイルを使うため、肌の上をなめらかにたどる手技になる</li>
                <li>強い圧よりも、ゆっくりとした一定のリズムを大切にする</li>
                <li>香りに包まれた状態で受けるため、呼吸が静かになりやすい</li>
              </ul>
              <p className="text-gray-600">
                ※感じ方には個人差があり、効果を保証するものではありません。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">2. オイル系のケアを選びたいとき</h2>
              <p className="text-gray-700 text-justify">
                指圧やもみほぐしと迷ったときは、「どう過ごしたいか」で決めると選びやすくなります。
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>肩や背中の張りを、しっかりした圧で受けたい日は指圧系</li>
                <li>強い刺激が苦手で、静かに過ごしたい日はオイル系</li>
                <li>脚や腕など、広い範囲をまとめたい日はオイル系</li>
              </ul>
              <p className="text-gray-700 text-justify">
                Ri Beauty Spaでは決まった香りをお出しするのではなく、その日の気分に合わせて精油をお選びいただいています。
              </p>
              <figure className="pt-2 max-w-xs mx-auto">
                <div className="aspect-[9/16] overflow-hidden rounded-sm border border-gray-100 shadow-sm bg-white">
                  <img
                    src={ROOM_IMAGE}
                    width={450}
                    height={800}
                    loading="lazy"
                    alt="間接照明のやわらかな灯りと、ドライフラワーを生けた花瓶、アロマディフューザーが並ぶ施術室の一角"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-[13px] text-gray-500 text-center">
                  照明を落とした空間で、香りとともに。
                </figcaption>
              </figure>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">3. 脚のだるさ・むくみ・日々の疲れが気になる方へ</h2>
              <p className="text-gray-700 text-justify">
                立ち仕事の方も、一日中座ったままの方も、夕方には脚が重く感じられることがあります。
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>夕方になると靴がきつく感じる</li>
                <li>ふくらはぎが張っていて、脚が重い</li>
                <li>足元が冷えて、なかなか寝つけない</li>
                <li>特定の部位というより、全身がなんとなくだるい</li>
              </ul>
              <p className="text-gray-700 text-justify">
                こうした日は、脚から下半身をゆっくりたどるケアが心地よく感じられます。足先が気になる場合は、フットケアとの組み合わせもご相談いただけます。
              </p>
              <figure className="pt-2 max-w-3xl mx-auto">
                <div className="aspect-[16/9] overflow-hidden rounded-sm border border-gray-100 shadow-sm bg-white">
                  <img
                    src={LEG_IMAGE}
                    width={2048}
                    height={1152}
                    loading="lazy"
                    alt="グレーのタオルの上で、施術者の両手が足の甲と足首をやさしく包み込むように支えている様子"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-[13px] text-gray-500 text-center">
                  脚まわりは、足先から上へとたどります。
                </figcaption>
              </figure>
              <p className="text-gray-600 text-justify">
                ※だるさが長く続く場合や痛み・腫れをともなう場合は、医療機関へご相談ください。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">4. Ri Beauty Spaのアロマリンパトリートメント</h2>
              <p className="text-gray-700 text-justify">
                当店ではボディケアメニューのひとつとしてご用意しています。
                施術前に、気になる部位・圧・香りの好みをうかがってから始めます。
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>「脚を中心に」など、部位のご希望をお伝えいただけます</li>
                <li>力加減は、施術中でもお申しつけいただけます</li>
                <li>前後にはアーティチョークのハーブティーをお出ししています</li>
              </ul>
              <p className="text-gray-700">
                メニューと料金は{' '}
                <Link to="/services/body-wellness/" className="underline underline-offset-4 hover:opacity-70">
                  ボディケア（Body Wellness）のページ
                </Link>
                、川崎エリアでの探し方は{' '}
                <Link to="/kawasaki-massage/" className="underline underline-offset-4 hover:opacity-70">
                  川崎のマッサージ・リラクゼーション案内
                </Link>
                {' '}をご覧ください。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">よくある質問（FAQ）</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Q. ほぐし系のマッサージとは何が違いますか？</strong>
                  <br />
                  A. オイルを使い、手のひら全体でゆっくりたどる手技が中心です。一点ずつ押してほしい場合は、指圧系のボディケアをご案内します。
                </p>
                <p>
                  <strong>Q. 香りは選べますか？</strong>
                  <br />
                  A. はい。その日の気分をうかがいながらお選びいただけます。苦手な香りがある方は、事前にお知らせください。
                </p>
                <p>
                  <strong>Q. 施術後、オイルのべたつきは残りますか？</strong>
                  <br />
                  A. 最後に余分なオイルを拭き取ります。このあとの予定が気になる場合は、当日お伝えください。
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
              空き状況は公式の予約ページからご確認いただけます。
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
