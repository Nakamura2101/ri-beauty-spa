import React from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { SITE_ORIGIN, SQUARE_BOOKING_LINK } from '../constants';

// Representative image for this article (also rendered in the page body).
const HERO_IMAGE = '/images/body/neckshoulder.jpg';
// Upper-body oil treatment image used in the menu-selection section.
const SHOULDER_IMAGE = '/images/salon/shoulder-back-massage.webp';
// Treatment room image used in the "Ri Beauty Spaでの過ごし方" section.
const ROOM_IMAGE = '/images/salon/treatment-room-warm.webp';

// Dates come from this article's real git history, not the build clock.
// datePublished: initial publication of this post.
const DATE_PUBLISHED = '2026-10-01T10:00:00+09:00';
// dateModified: same as publication - the text has not changed since.
const DATE_MODIFIED = '2026-10-01T10:00:00+09:00';

const TITLE = '川崎の首・肩マッサージ｜デスクワーク疲れのリラクゼーション選び｜Ri Beauty Spa';
const DESCRIPTION =
  '川崎で首・肩まわりのマッサージをお探しの方へ。長時間のデスクワークのあとに気になる首から肩の重さについて、部分ケアと全身ケアの選び分け、60分・90分の時間の決め方、初めての方が確認しておきたい点をまとめました。';

export const BlogKawasakiNeckShoulderPage: React.FC = () => {
  return (
    <>
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        canonicalPath="/blog/kawasaki-neck-shoulder-relaxation/"
        image={HERO_IMAGE}
        ogType="article"
        structuredData={[
          {
            '@type': 'BlogPosting',
            headline: TITLE,
            description: DESCRIPTION,
            mainEntityOfPage: `${SITE_ORIGIN}/blog/kawasaki-neck-shoulder-relaxation/`,
            image: {
              '@type': 'ImageObject',
              url: `${SITE_ORIGIN}${HERO_IMAGE}`,
              width: 1280,
              height: 720,
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
                name: '首・肩まわりだけを短時間で受けることはできますか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '「首・肩ほぐし」は15分・30分のオプションとしてご用意しています。ボディケアと組み合わせてお選びいただけます。',
                },
              },
              {
                '@type': 'Question',
                name: '60分と90分、どちらを選べばいいですか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '首・肩まわりを中心に受けたい方は60分、全身もあわせてゆったり過ごしたい方は90分が選ばれやすいです。',
                },
              },
              {
                '@type': 'Question',
                name: '圧の強さは相談できますか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'ご希望にあわせて調整します。施術中に強い・弱いと感じた場合も、その場でお申しつけください。',
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
              KAWASAKI NECK &amp; SHOULDER RELAXATION
            </p>
            <h1 className="text-3xl md:text-5xl font-serif leading-tight tracking-wide">
              川崎で首・肩まわりの疲れが気になる方へ｜デスクワーク後のリラクゼーションの選び方
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-justify">
              パソコンに向かう時間が続いた日は、夕方になると首から肩にかけて重さを感じることがあります。
              ここでは、川崎で首・肩まわりのケアを探すときに、どんな視点でメニューと時間を選ぶとよいかをまとめました。
              ※当店の施術はリラクゼーションを目的とした一般的なサービスであり、医療行為ではありません。
            </p>
          </header>

          <figure className="mb-16 max-w-3xl mx-auto">
            <div className="aspect-[16/9] overflow-hidden rounded-sm border border-gray-100 shadow-sm bg-white">
              <img
                src={HERO_IMAGE}
                width={1280}
                height={720}
                alt="仰向けで横になった方の首の付け根に、施術者が指をあてて肩まわりをゆっくりほぐしている様子"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-[13px] text-gray-500 text-center">
              首の付け根から肩にかけては、圧を確かめながら進めます。
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
              <h2 className="text-2xl font-serif tracking-wide">1. 長時間のデスクワークのあと、首・肩まわりが気になるとき</h2>
              <p className="text-gray-700 text-justify">
                同じ姿勢でパソコンに向かう時間が長くなると、首の付け根から肩、肩甲骨のまわりにかけて張りを感じやすくなります。
                画面の高さ、椅子に座るときのくせ、荷物を持つ側の偏りなど、日々の小さな習慣が重なっていることも少なくありません。
              </p>
              <p className="text-gray-700 text-justify">
                一日の終わりに「なんとなく重い」と感じる日が続くようなら、自分でほぐすだけでなく、時間をとって人の手にゆだねてみるのもひとつの選択です。
                秋から年末にかけては予定が立て込みやすく、気づかないうちに同じ姿勢で過ごす時間が増えていることもあります。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">2. 首・肩だけでなく、全身の状態も見ながら選ぶ</h2>
              <p className="text-gray-700 text-justify">
                首や肩に重さを感じていても、姿勢のくせは背中や腰、脚のほうに出ていることがあります。
                当店では、気になる部位をうかがったうえで、上半身を中心にするか、全身をひととおりお受けいただくかをご相談いただけます。
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>首から肩だけを短い時間でほぐしたい：オプションの「首・肩ほぐし（15分／30分）」</li>
                <li>全身をゆったり受けたい：ベトナム伝統ボディトリートメント（オイル）やアロマリンパトリートメント</li>
                <li>温かさも一緒に感じたい：ホットストーンや遠赤外線ヒートケアを組み合わせて</li>
              </ul>
              <p className="text-gray-700 text-justify">
                画面を見る時間が長く、頭まで重く感じる日は、ドライヘッドスパ（15分）を加える方もいらっしゃいます。
              </p>
              <figure className="pt-2 max-w-3xl mx-auto">
                <div className="aspect-[16/9] overflow-hidden rounded-sm border border-gray-100 shadow-sm bg-white">
                  <img
                    src={SHOULDER_IMAGE}
                    width={1600}
                    height={900}
                    loading="lazy"
                    alt="うつ伏せの方の肩に、施術者が両手を重ねてゆっくり圧をかけているオイルトリートメントの様子"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-[13px] text-gray-500 text-center">
                  上半身を中心に受けたい日は、肩から背中にかけて時間を配分します。
                </figcaption>
              </figure>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">3. 60分・90分｜時間の選び方</h2>
              <p className="text-gray-700 text-justify">
                初めての方や、気になるところがはっきりしている方は60分から。
                全身の疲労感が強い日や、首・肩に加えて背中や脚まで受けたい日は、90分が選ばれやすい時間です。
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>60分：上半身を中心に、首・肩まわりへ時間をかけたい日に</li>
                <li>90分：全身をひととおり受けたうえで、首・肩に配分を寄せたい日に</li>
              </ul>
              <p className="text-gray-700 text-justify">
                迷ったときは、当日の状態をうかがいながらご提案します。ご予約時は「首・肩が気になる」とお伝えいただくだけで十分です。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">4. 初めての方が確認しておきたいポイント</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>いちばん気になる部位（首・肩・背中など）を、ご予約時か施術前にお伝えください</li>
                <li>圧の強さは好みが分かれます。施術中に感じたことは、その場でお知らせいただけます</li>
                <li>施術後のご予定（そのまま外出するか、帰って休めるか）にあわせて時間をお選びください</li>
                <li>当日は動きやすい服装が安心です。詳細は予約時のご案内をご確認ください</li>
              </ul>
              <p className="text-gray-600 text-justify">
                ※首や肩に痛みがある方、治療中の方、妊娠中の方などは、施術前にお申し出ください。必要に応じて、事前に医師へご相談のうえご利用ください。感じ方には個人差があり、効果を保証するものではありません。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif tracking-wide">5. Ri Beauty Spaでの過ごし方</h2>
              <p className="text-gray-700 text-justify">
                当店は川崎市幸区にあるサロンです。施術の前後には、アーティチョークのハーブティーをお出ししています。
                照明を落とした静かな個室で、施術が終わったあとも少し呼吸を整えてからお帰りいただけます。
              </p>
              <figure className="pt-2 max-w-3xl mx-auto">
                <div className="aspect-[16/9] overflow-hidden rounded-sm border border-gray-100 shadow-sm bg-white">
                  <img
                    src={ROOM_IMAGE}
                    width={1600}
                    height={900}
                    loading="lazy"
                    alt="間接照明のやわらかい光のなか、タオルを整えた2台の施術ベッドが並ぶ個室の様子"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-[13px] text-gray-500 text-center">
                  仕事のあとでも、静かに過ごしていただける個室です。
                </figcaption>
              </figure>
              <p className="text-gray-700 text-justify">
                一日の終わりや、予定と予定のあいだの時間に、首・肩まわりの重さをいったん脇に置いて、心地よく過ごしていただければと思います。
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
                  <strong>Q. 首・肩まわりだけを短時間で受けることはできますか？</strong>
                  <br />
                  A. 「首・肩ほぐし」は15分・30分のオプションとしてご用意しています。ボディケアと組み合わせてお選びいただけます。
                </p>
                <p>
                  <strong>Q. 60分と90分、どちらを選べばいいですか？</strong>
                  <br />
                  A. 首・肩まわりを中心に受けたい方は60分、全身もあわせてゆったり過ごしたい方は90分が選ばれやすいです。
                </p>
                <p>
                  <strong>Q. 圧の強さは相談できますか？</strong>
                  <br />
                  A. ご希望にあわせて調整します。施術中に強い・弱いと感じた場合も、その場でお申しつけください。
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
                  to="/blog/kawasaki-mens-massage/"
                  className="inline-block px-6 py-3 bg-white border border-gray-100 shadow-sm rounded-sm text-[11px] uppercase tracking-[0.25em] font-bold hover:opacity-70"
                >
                  川崎のメンズマッサージを読む
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
              川崎で首・肩まわりのケアをご検討中の方は、公式予約ページから空き状況をご確認ください。
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
