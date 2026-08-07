import React from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { SITE_ORIGIN, SQUARE_BOOKING_LINK } from '../constants';

// Representative image for this article (also rendered in the page body).
const HERO_IMAGE = '/images/SKINTHERAPY/RadiantGlowPeel.jpg';
// Secondary image used in the body-care section.
const BODY_IMAGE = '/images/SKINTHERAPY/BodyRenewalHerbalPeel.png';

// Dates come from this article's real git history, not the build clock.
// datePublished: commit e950023 (initial publication of this post).
const DATE_PUBLISHED = '2026-08-08T00:37:23+09:00';
// dateModified: commit 1b7fd95 (truthfulness pass that rewrote the unsupported
// popularity wording). This is the commit in which the article text changed.
const DATE_MODIFIED = '2026-08-08T06:55:09+09:00';

const TITLE = '川崎でハーブピーリングを受けるなら｜施術の流れと肌悩み別コースの選び方';
const DESCRIPTION =
  '川崎でハーブピーリングをお探しの方へ。天然由来のハーブを使ったスキンケアメニューの考え方、顔・背中など肌悩み別のコースの選び方、当日の流れとアフターケアのポイントをわかりやすくご案内します。';

export const BlogKawasakiHerbalPeelPage: React.FC = () => {
  return (
    <>
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        canonicalPath="/blog/kawasaki-herbal-peel/"
        image={HERO_IMAGE}
        ogType="article"
        structuredData={[
          {
            '@type': 'BlogPosting',
            headline: TITLE,
            description: DESCRIPTION,
            mainEntityOfPage: `${SITE_ORIGIN}/blog/kawasaki-herbal-peel/`,
            image: {
              '@type': 'ImageObject',
              url: `${SITE_ORIGIN}${HERO_IMAGE}`,
              width: 700,
              height: 499,
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
                name: 'ハーブピーリングは初めてでも受けられますか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'はい。当日は肌の状態や気になる点をうかがいながらご案内しますので、初めての方もお気軽にご相談ください。',
                },
              },
              {
                '@type': 'Question',
                name: '顔以外もケアできますか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '背中・ヒップ・二の腕・脇に対応した「ボディ・リニューアル・ハーブピーリング」をご用意しています。自分では手の届きにくい部位のケアにお選びいただけます。',
                },
              },
              {
                '@type': 'Question',
                name: 'どのコースを選べばいいかわかりません。',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'くすみが気になる、ニキビ跡が気になる、背中をケアしたいなど、気になる点を一言お伝えいただければ、肌の状態を確認しながらご提案します。',
                },
              },
              {
                '@type': 'Question',
                name: '施術中に気になることがあったらどうすればいいですか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '感じ方には個人差があります。気になる点があれば、施術中でも遠慮なくスタッフへお伝えください。',
                },
              },
              {
                '@type': 'Question',
                name: '肌トラブルや持病がある場合は受けられますか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '皮膚のトラブルがある方、妊娠中の方、持病のある方など健康上の不安がある場合は、施術前に必ずスタッフへお申し出ください。必要に応じて、事前に医師へご相談のうえご利用ください。',
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
              KAWASAKI HERBAL PEEL GUIDE
            </p>
            <h1 className="text-3xl md:text-5xl font-serif leading-tight tracking-wide">
              川崎でハーブピーリングを受けるなら｜施術の流れとコースの選び方
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-justify">
              「川崎でハーブピーリングを受けてみたいけれど、どんな施術なのか、自分の肌に合うのかがわからない」——
              そんな方に向けて、ハーブピーリングの考え方、肌悩み別のコースの選び方、当日の流れとアフターケアのポイントをまとめました。
              ※当店の施術はリラクゼーションと美容を目的とした一般的なサービスであり、医療行為ではありません。
            </p>
          </header>

          {/* Capped to the asset's native width so it is never upscaled. */}
          <figure className="mb-16 max-w-3xl mx-auto">
            <div className="aspect-[7/5] overflow-hidden rounded-sm border border-gray-100 shadow-sm bg-white">
              <img
                src={HERO_IMAGE}
                width={700}
                height={499}
                alt="白いタオルで髪をまとめた人の顔に、手袋をつけた手で緑色のハーブパウダーをなじませている様子。手元には器に入ったハーブパウダー"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-[13px] text-gray-500 text-center">
              天然由来のハーブを肌になじませていく、Ri Beauty Spaのハーブピーリング。
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
              <h2 className="text-2xl font-serif tracking-wide">1. ハーブピーリングとは｜天然由来のハーブを使ったスキンケア</h2>
              <p className="text-gray-700 text-justify">
                ハーブピーリングは、天然由来のハーブ成分を肌になじませていくスキンケアメニューです。
                Ri Beauty Spaでは、くすみやニキビ跡、毛穴の目立ちなど、肌の「気になるところ」に合わせてコースをお選びいただけます。
              </p>
              <h3 className="text-xl font-serif tracking-wide">サロンでのフェイシャルとの位置づけ</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>クレンジングと保湿を中心とした「ベーシックフェイシャル」とは異なり、肌の質感の変化を目的としたメニュー</li>
                <li>肌のターンオーバー（生まれ変わりの流れ）をサポートするという考え方のケア</li>
                <li>顔だけでなく、背中などのボディにも対応したコースがある</li>
              </ul>
              <p className="text-gray-600">
                ※感じ方や肌の変化には個人差があります。医療行為ではなく、効果を保証するものではありません。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">2. こんな肌悩みの方に向いています（川崎でフェイシャルをお探しの方へ）</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>肌のくすみが気になり、明るい印象を目指したい方</li>
                <li>ニキビ跡や肌荒れが気になり、肌の調子を整えたい方</li>
                <li>毛穴の目立ちやざらつきなど、肌の手触りが気になる方</li>
                <li>背中・二の腕・脇など、自分では手の届きにくい部位をケアしたい方</li>
              </ul>
              <p className="text-gray-700 text-justify">
                川崎で「マッサージだけでなく肌のケアも一緒に相談したい」という場合にも、検討いただけるメニューです。
                ボディのケアと迷う場合は、
                <Link to="/blog/kawasaki-massage-guide/" className="underline underline-offset-4 hover:opacity-70">
                  川崎でマッサージを選ぶときのポイント
                </Link>
                もあわせてご覧ください。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">3. 肌悩み別｜コースの選び方</h2>
              <p className="text-gray-700 text-justify">
                Ri Beauty Spaのハーブピーリングは、目的に合わせて次の3つからお選びいただけます。
              </p>
              <h3 className="text-xl font-serif tracking-wide">ツヤ肌コース（Radiant Glow Peel）</h3>
              <p className="text-gray-700 text-justify">
                くすみが気になる方や、内側から発光するようなツヤ感のある肌印象を目指したい方向けのコースです。
              </p>
              <h3 className="text-xl font-serif tracking-wide">ニキビ肌ケアコース（Acne Care Peel）</h3>
              <p className="text-gray-700 text-justify">
                トラブルの起きやすい肌を落ち着かせ、健やかな状態へ整えていきたい方向けのコースです。
                ニキビ跡や肌荒れが気になる場合に検討いただけます。
              </p>
              <h3 className="text-xl font-serif tracking-wide">ボディ・リニューアル（背中・ヒップ・二の腕・脇）</h3>
              <p className="text-gray-700 text-justify">
                背中のニキビや、ヒップ・二の腕・脇の黒ずみなど、自分では届きにくい部位を集中してケアするコースです。
                露出が増える季節の前のケアとしても検討できるコースです。
              </p>
              <figure className="pt-2 max-w-3xl mx-auto">
                <div className="aspect-[4/3] overflow-hidden rounded-sm border border-gray-100 shadow-sm bg-white">
                  <img
                    src={BODY_IMAGE}
                    width={773}
                    height={588}
                    alt="施術台でうつ伏せになった人の背中全体に、緑色のハーブパウダーが広げられている様子"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-[13px] text-gray-500 text-center">
                  背中などのボディにも対応したコースをご用意しています。
                </figcaption>
              </figure>
              <p className="text-gray-700">
                メニューの詳細は{' '}
                <Link to="/services/skin-therapy/" className="underline underline-offset-4 hover:opacity-70">
                  スキンケア（Skin Therapy）のページ
                </Link>
                {' '}でご確認いただけます。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">4. 当日の流れ（初めての方向け）</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>肌の状態や気になる点、これまでのスキンケアについてヒアリング</li>
                <li>ご希望と肌の状態に合わせてコースをご提案</li>
                <li>クレンジングで肌を整えたうえで、ハーブを肌になじませていく</li>
                <li>施術中に気になることがあれば、その場でスタッフへお伝えいただく</li>
                <li>終了後は、当日の過ごし方についてご案内</li>
              </ul>
              <p className="text-gray-700">
                所要時間や料金は予約ページでご確認いただけます。ご希望の時間帯は空き状況によります。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">5. 施術後に意識したいアフターケア</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>保湿をいつもより丁寧に行う</li>
                <li>紫外線対策を意識する</li>
                <li>肌をこすらない、強い刺激のあるケアは控えめにする</li>
                <li>肌に気になる変化があれば、早めにスタッフへご相談いただく</li>
              </ul>
              <p className="text-gray-600 text-justify">
                ※皮膚のトラブルがある方、妊娠中の方、持病のある方などは、必要に応じて事前に医師へご相談のうえご利用ください。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">6. 組み合わせて選べるオプション</h2>
              <p className="text-gray-700 text-justify">
                オプションメニューは、メインコースと組み合わせてご利用いただけます。目的に合わせてご相談ください。
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>保湿パック：乾燥が気になるときの集中ケア</li>
                <li>デコルテケア：首・肩まわりまで含めて整えたい方に</li>
                <li>ヘッドケア：頭の重さや目の疲れが気になる方に</li>
              </ul>
              <p className="text-gray-700">
                フェイシャル全体のご案内は{' '}
                <Link to="/services/facial/" className="underline underline-offset-4 hover:opacity-70">
                  フェイシャルのページ
                </Link>
                、アクセスは{' '}
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
                  <strong>Q. ハーブピーリングは初めてでも受けられますか？</strong>
                  <br />
                  A. はい。当日は肌の状態や気になる点をうかがいながらご案内しますので、初めての方もお気軽にご相談ください。
                </p>
                <p>
                  <strong>Q. 顔以外もケアできますか？</strong>
                  <br />
                  A. 背中・ヒップ・二の腕・脇に対応した「ボディ・リニューアル・ハーブピーリング」をご用意しています。自分では手の届きにくい部位のケアにお選びいただけます。
                </p>
                <p>
                  <strong>Q. どのコースを選べばいいかわかりません。</strong>
                  <br />
                  A. くすみが気になる、ニキビ跡が気になる、背中をケアしたいなど、気になる点を一言お伝えいただければ、肌の状態を確認しながらご提案します。
                </p>
                <p>
                  <strong>Q. 施術中に気になることがあったらどうすればいいですか？</strong>
                  <br />
                  A. 感じ方には個人差があります。気になる点があれば、施術中でも遠慮なくスタッフへお伝えください。
                </p>
                <p>
                  <strong>Q. 肌トラブルや持病がある場合は受けられますか？</strong>
                  <br />
                  A. 皮膚のトラブルがある方、妊娠中の方、持病のある方など健康上の不安がある場合は、施術前に必ずスタッフへお申し出ください。必要に応じて、事前に医師へご相談のうえご利用ください。
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">関連記事（あわせて読みたい）</h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/blog/kawasaki-yomogi-steam/"
                  className="inline-block px-6 py-3 bg-white border border-gray-100 shadow-sm rounded-sm text-[11px] uppercase tracking-[0.25em] font-bold hover:opacity-70"
                >
                  川崎のよもぎ蒸し（温活）を読む
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
              川崎でハーブピーリングをご検討中の方は、公式予約ページから空き状況をご確認ください。
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
