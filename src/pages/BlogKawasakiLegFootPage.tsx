import React from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { SITE_ORIGIN, SQUARE_BOOKING_LINK } from '../constants';

// Representative image for this article (also rendered in the page body).
const HERO_IMAGE = '/images/salon/leg-massage.webp';
// Foot-care menu photo used in the menu-selection section.
const FOOT_IMAGE = '/images/body/footcare.JPG';
// Treatment room image used in the "Ri Beauty Spaでの過ごし方" section.
const ROOM_IMAGE = '/images/salon/treatment-room-twin.webp';

// Dates come from this article's real git history, not the build clock.
// datePublished: initial publication of this post.
const DATE_PUBLISHED = '2026-10-11T10:00:00+09:00';
// dateModified: same as publication - the text has not changed since.
const DATE_MODIFIED = '2026-10-11T10:00:00+09:00';

const TITLE = '川崎の足・脚マッサージ｜立ち仕事・歩き疲れのリラクゼーション選び｜Ri Beauty Spa';
const DESCRIPTION =
  '川崎で足・脚のマッサージをお探しの方へ。立ち仕事や長く歩いた日に気になる足裏・ふくらはぎの重だるさについて、フットケアと全身ケアの選び分け、60分・90分の時間の決め方、初めての方が確認しておきたい点をまとめました。';

export const BlogKawasakiLegFootPage: React.FC = () => {
  return (
    <>
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        canonicalPath="/blog/kawasaki-leg-foot-relaxation/"
        image={HERO_IMAGE}
        ogType="article"
        structuredData={[
          {
            '@type': 'BlogPosting',
            headline: TITLE,
            description: DESCRIPTION,
            mainEntityOfPage: `${SITE_ORIGIN}/blog/kawasaki-leg-foot-relaxation/`,
            image: {
              '@type': 'ImageObject',
              url: `${SITE_ORIGIN}${HERO_IMAGE}`,
              width: 1600,
              height: 900,
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
                name: '足裏だけを受けることはできますか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'ボディケアの「フットケア」として、足裏からふくらはぎを中心にお受けいただけます。ご予約時に「足が気になる」とお伝えください。',
                },
              },
              {
                '@type': 'Question',
                name: '60分と90分、どちらを選べばいいですか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '足・脚を中心に受けたい方は60分、腰や背中もあわせてゆったり過ごしたい方は90分が選ばれやすいです。',
                },
              },
              {
                '@type': 'Question',
                name: '足が冷えやすい日はどうすればよいですか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '遠赤外線ヒートケア（20分）やホットストーン（15分）など、温かさを感じられるオプションを組み合わせていただけます。',
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
              KAWASAKI LEG &amp; FOOT RELAXATION
            </p>
            <h1 className="text-3xl md:text-5xl font-serif leading-tight tracking-wide">
              川崎で足・脚の疲れが気になる方へ｜立ち仕事・歩き疲れのリラクゼーション選び
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-justify">
              一日立ちつづけた日や、思っていたよりも長く歩いた日は、帰り道で足もとが重だるく感じられることがあります。
              ここでは、川崎で足・脚のケアを探すときに、どんな視点でメニューと時間を選ぶとよいかをまとめました。
              ※当店の施術はリラクゼーションを目的とした一般的なサービスであり、医療行為ではありません。
            </p>
          </header>

          <figure className="mb-16 max-w-3xl mx-auto">
            <div className="aspect-[16/9] overflow-hidden rounded-sm border border-gray-100 shadow-sm bg-white">
              <img
                src={HERO_IMAGE}
                width={1600}
                height={900}
                alt="仰向けで横になった方のふくらはぎを、施術者が両手で下から上へ包み込むようにたどっている様子"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-[13px] text-gray-500 text-center">
              脚は、足先に近いところから順に手をあてていきます。
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
              <h2 className="text-2xl font-serif tracking-wide">1. 立ち仕事・歩き疲れのあと、足や脚が気になるとき</h2>
              <p className="text-gray-700 text-justify">
                接客や調理、販売のように立った姿勢が続く仕事では、夕方になるほど足裏やふくらはぎに張りを感じやすくなります。
                外回りや買い物、旅行のように歩く距離が長い日も同じで、靴の種類や歩く路面、荷物を持つ側のくせが重なって、片側だけ重く感じることもあります。
              </p>
              <p className="text-gray-700 text-justify">
                靴を脱いだときに「今日はよく歩いたな」と気づく日が続くようなら、自分でさすって終わりにせず、時間をとって人の手にゆだねてみるのもひとつの選択です。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">2. 足だけでなく、脚から全身のバランスで選ぶ</h2>
              <p className="text-gray-700 text-justify">
                足裏が気になっていても、立ち方や歩き方のくせは、ふくらはぎや太もも、腰のほうに出ていることがあります。
                当店では、気になる部位をうかがったうえで、足・脚を中心にするか、全身をひととおりお受けいただくかをご相談いただけます。
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>足裏からふくらはぎを中心に受けたい：ボディケアの「フットケア」</li>
                <li>脚から腰、背中まで続けて受けたい：ベトナム伝統ボディトリートメント（オイル）やアロマリンパトリートメント</li>
                <li>足もとの冷えが気になる：遠赤外線ヒートケア（20分）やよもぎ温熱ケア（20分）を組み合わせて</li>
              </ul>
              <p className="text-gray-700 text-justify">
                立ち仕事で腕や肩も使う方は、ハンド・腕ケア（15分）や首・肩ほぐし（15分／30分）を加える方もいらっしゃいます。
              </p>
              <figure className="pt-2 max-w-3xl mx-auto">
                <div className="aspect-[16/9] overflow-hidden rounded-sm border border-gray-100 shadow-sm bg-white">
                  <img
                    src={FOOT_IMAGE}
                    width={2048}
                    height={1152}
                    loading="lazy"
                    alt="タオルを敷いたベッドの上で、施術者の両手が足の甲と足首をやさしく支えているフットケアの様子"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-[13px] text-gray-500 text-center">
                  足裏は、強さを確かめながら進めます。
                </figcaption>
              </figure>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">3. 60分・90分｜時間の選び方</h2>
              <p className="text-gray-700 text-justify">
                気になるところが足もとにはっきりしている方は60分から。
                一日歩きつづけて脚全体が重い日や、足・脚に加えて腰や背中まで受けたい日は、90分が選ばれやすい時間です。
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>60分：足裏からふくらはぎへ、下半身に時間をかけたい日に</li>
                <li>90分：全身をひととおり受けたうえで、足・脚に配分を寄せたい日に</li>
              </ul>
              <p className="text-gray-700 text-justify">
                迷ったときは、当日の状態をうかがいながらご提案します。ご予約時は「足が気になる」とお伝えいただくだけで十分です。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">4. 初めての方が確認しておきたいポイント</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>いちばん気になる部位（足裏・ふくらはぎ・太もも・腰など）を、ご予約時か施術前にお伝えください</li>
                <li>足裏の強さは好みが分かれます。くすぐったさを感じたときも、その場でお知らせいただけます</li>
                <li>そのあと歩く予定が長い日は、短めの時間から試していただくと安心です</li>
                <li>当日は脱ぎ履きしやすい靴と、動きやすい服装が楽に過ごせます</li>
              </ul>
              <p className="text-gray-600 text-justify">
                ※足やひざに痛みや腫れがある方、治療中の方、妊娠中の方などは、施術前にお申し出ください。必要に応じて、事前に医師へご相談のうえご利用ください。感じ方には個人差があり、効果を保証するものではありません。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">5. Ri Beauty Spaでの過ごし方</h2>
              <p className="text-gray-700 text-justify">
                当店は川崎市幸区にあるサロンです。施術の前後には、アーティチョークのハーブティーをお出ししています。
                照明を落とした静かな個室なので、靴を脱いで横になったところから、少しずつ力を抜いていただけます。
              </p>
              <figure className="pt-2 max-w-3xl mx-auto">
                <div className="aspect-[16/9] overflow-hidden rounded-sm border border-gray-100 shadow-sm bg-white">
                  <img
                    src={ROOM_IMAGE}
                    width={2048}
                    height={1152}
                    loading="lazy"
                    alt="やわらかな照明のもと、タオルを整えた施術ベッドが並ぶ落ち着いた個室の様子"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-[13px] text-gray-500 text-center">
                  歩いたあとでも、静かに過ごしていただける個室です。
                </figcaption>
              </figure>
              <p className="text-gray-700 text-justify">
                仕事を終えたあとや、出かけた帰りに立ち寄って、足もとの重さをいったん脇に置いて、すっきりした感覚で帰っていただければと思います。
              </p>
              <p className="text-gray-700">
                メニューの一覧は{' '}
                <Link to="/services/body-wellness/" className="underline underline-offset-4 hover:opacity-70">
                  ボディケア（Body Wellness）のページ
                </Link>
                、川崎でマッサージをお探しの方へのご案内は{' '}
                <Link to="/kawasaki-massage/" className="underline underline-offset-4 hover:opacity-70">
                  こちらのページ
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
                  <strong>Q. 足裏だけを受けることはできますか？</strong>
                  <br />
                  A. ボディケアの「フットケア」として、足裏からふくらはぎを中心にお受けいただけます。ご予約時に「足が気になる」とお伝えください。
                </p>
                <p>
                  <strong>Q. 60分と90分、どちらを選べばいいですか？</strong>
                  <br />
                  A. 足・脚を中心に受けたい方は60分、腰や背中もあわせてゆったり過ごしたい方は90分が選ばれやすいです。
                </p>
                <p>
                  <strong>Q. 足が冷えやすい日はどうすればよいですか？</strong>
                  <br />
                  A. 遠赤外線ヒートケア（20分）やホットストーン（15分）など、温かさを感じられるオプションを組み合わせていただけます。
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
                  to="/blog/kawasaki-aroma-lymphatic-massage/"
                  className="inline-block px-6 py-3 bg-white border border-gray-100 shadow-sm rounded-sm text-[11px] uppercase tracking-[0.25em] font-bold hover:opacity-70"
                >
                  川崎のアロマリンパマッサージを読む
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
              川崎で足・脚のケアをご検討中の方は、公式予約ページから空き状況をご確認ください。
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
