import type { ArticleItem } from './types';

export const SQUARE_BOOKING_LINK = "https://ribeautyspa.square.site/";
export const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/3J9Y9BoVDvfHbAcY7";
export const LOGO_URL = "https://i.postimg.cc/DzvhJFS9/324805976-1526449427857383-1970399124163669440-n-(1).png";

export const HERO_IMAGES = [
  "https://i.postimg.cc/V665QX19/RUSZ4198.jpg",
  "https://i.postimg.cc/J7scjkJY/GFBX4590.jpg",
  "https://i.postimg.cc/sfKkrsBk/TMUP4682.jpg"
];

export const NAV_ITEMS = [
  { labelEn: 'ABOUT US', labelJp: '私たちについて', href: '#about' },
  { 
    labelEn: 'SERVICES', labelJp: 'サービス', href: '#personal-services',
    subItems: [
      { id: 'rituals', labelEn: 'HERBAL RITUALS', labelJp: 'ハーブの儀式' },
      { id: 'body', labelEn: 'BODY WELLNESS', labelJp: 'ボディケア' },
      { id: 'skin', labelEn: 'SKIN THERAPY', labelJp: 'スキンケア' },
    ]
  },
  { labelEn: 'CORPORATE', labelJp: '法人向け', href: '#corporate-services' },
];

export const FEATURED_POSTS: ArticleItem[] = [
  { id: 'f1', titleEn: 'Vietnamese Traditional Massage', titleJp: 'ベトナム伝統マッサージ', content: 'ベトナム伝統の指圧とロングストロークを組み合わせた手技で、凝り固まった筋肉を深く解きほぐします。', image: 'https://i.postimg.cc/Bvc83h2h/LIZQ2957.jpg', tagEn: 'SIGNATURE', tagJp: 'シグネチャー' },
  { id: 'f2', titleEn: 'Yomogi Steam', titleJp: 'よもぎ蒸し', content: '伝統的な方法で体内から浄化し温めます. 内側から溢れ出す活力を体感してください。', image: 'https://i.postimg.cc/x8WVHPVN/7f512228703f67fecf0f0ae41437a4a0.jpg', tagEn: 'TRADITION', tagJp: '伝統' },
  { id: 'f3', titleEn: 'Herbal Peel', titleJp: 'ハーブピーリング', content: '希少な生薬エキスで輝く滑らかな肌へ. 肌本来の美しさを引き出す特別なケアです。', image: 'https://i.postimg.cc/VNnD9cnM/74e619c7f06b390c7dda738925a695d7.jpg', tagEn: 'RADIANCE', tagJp: '輝き' },
  { id: 'f4', titleEn: 'Holistic Care', titleJp: 'ホリスティックケア', content: '持続可能な美しさのための心身の調和。トータルバランスを整えるケア。', image: 'https://i.postimg.cc/ydLTTh6v/RYMU3477.jpg', tagEn: 'HOLISTIC', tagJp: 'ホリスティック' }
];

// Fix for HerbalRitualsDetail.tsx: Exported missing HERBAL_ARTICLES array
export const HERBAL_ARTICLES: ArticleItem[] = [
  { id: 'h1', titleEn: 'Vietnamese Traditional Massage', titleJp: 'ベトナム伝統マッサージ', content: '伝統的な手技で血行を促進し、深いリラックスへと導きます。', image: 'https://i.postimg.cc/Bvc83h2h/LIZQ2957.jpg' },
  { id: 'h2', titleEn: 'Yomogi Steam', titleJp: 'よもぎ蒸し', content: '伝統的な方法で体内から浄化し温めます。内側から溢れ出す活力を体感してください。', image: 'https://i.postimg.cc/x8WVHPVN/7f512228703f67fecf0f0ae41437a4a0.jpg' }
];

export type RitualContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'highlight'; text: string }
  | { type: 'bullets'; title?: string; items: string[] }
  | { type: 'note'; text: string }
  | { type: 'qa'; items: Array<{ question: string; answers: string[] }> }
  | { type: 'checklist'; items: string[] };

export type HerbalRitualsSection = {
  id: '01' | '02' | '03' | '04';
  titleJp: string;
  titleEn: string;
  image: string;
  blocks: RitualContentBlock[];
};

// Full AI Studio copy + structure for the Herbal Rituals detail page
export const HERBAL_RITUALS_SECTIONS: HerbalRitualsSection[] = [
  {
    id: '01',
    titleJp: '特製アーティチョーク・ハーブティー',
    titleEn: 'ARTICHOKE TEA',
    // Uses a local file placed in /public/images/artichoke-tea.png
    image: '/images/artichoke-tea.png',
    blocks: [
      {
        type: 'paragraph',
        text: 'Ri Beauty Spaでは、すべてのサービスを通してアーティチョークのハーブティーを提供しています。'
      },
      {
        type: 'paragraph',
        text: 'これは単なる飲み物ではなく、私たちがお客様に届けたいリラクゼーション体験の重要な一部です。'
      },
      {
        type: 'highlight',
        text: '🌿 アーティチョークティー —「一口で、体が和らぐ感覚」'
      },
      {
        type: 'paragraph',
        text: 'アーティチョークはベトナムで非常に人気のあるハーブで、さわやかで飲みやすく、自然なめぐりを後押しするのが特徴です。'
      },
      {
        type: 'paragraph',
        text: '丁寧に淹れられたアーティチョークティーは、緑茶のような渋みや刺激がなく、マッサージやスキンケアと自然に調和します。'
      },
      {
        type: 'bullets',
        title: '✨ 皆様に愛される理由:',
        items: [
          '清涼感と心地よさ：仕事終わりの体に「軽さ」をもたらします',
          '消化のサポート：お腹を落ち着かせ、内側からリラックス',
          'ストレス緩和：優しいハーブの香りが、高ぶった気分を鎮めます',
          '洗練されたデトックス感：内側からスッキリ、軽やかで心地よい感覚へ'
        ]
      },
      {
        type: 'note',
        text: '※ ハーブティーは健康維持をサポートする飲料であり、医薬品ではありません。'
      }
    ]
  },
  {
    id: '02',
    titleJp: 'よもぎ蒸し（Yomogi Mushi）',
    titleEn: 'YOMOGI STEAMING',
    image: HERBAL_ARTICLES[1]?.image ?? 'https://i.postimg.cc/x8WVHPVN/7f512228703f67fecf0f0ae41437a4a0.jpg',
    blocks: [
      {
        type: 'highlight',
        text: '🌿 よもぎ蒸し — Ri Beauty Spaで体験する、日本人に愛される「内側から温める」至福の時間'
      },
      {
        type: 'paragraph',
        text: '「温活（onkatsu）」という言葉をご存知ですか？'
      },
      {
        type: 'paragraph',
        text: '体の芯から温めて健やかさを整えるよもぎ蒸しは、Ri Beauty Spaでも人気のメニューです。'
      },
      {
        type: 'qa',
        items: [
          {
            question: '1) よもぎとは？その由来は？',
            answers: [
              'よもぎは、古くから東洋で親しまれてきた伝統的なハーブです。',
              '日本ではお灸や薬草として、また自然な健康法として、私たちの生活に深く根付いています。'
            ]
          },
          {
            question: '2) よもぎ蒸しとは、具体的にどのようなもの？',
            answers: [
              '一般的なサウナとは異なり、ハーブの蒸気で体を温めます。',
              '専用の椅子に座り、蒸気が全身を優しく包み込むようにします。',
              '体の内側からじわじわと温まり、息苦しさのない、とても心地よい感覚です。'
            ]
          }
        ]
      },
      {
        type: 'paragraph',
        text: '3) どのような効果が期待できる？'
      },
      {
        type: 'checklist',
        items: [
          '✅ 体の芯から温まる — 特に冷え性の方や、日本の寒い冬に最適',
          '✅ 心地よい汗でスッキリ — 体が「軽く」なるような爽快感',
          '✅ ストレス解消 — 長い一日の終わりに、心身をリセット',
          '✅ 良質な睡眠のサポート — 「その晩はぐっすり眠れた」という声も多数'
        ]
      }
    ]
  },
  {
    id: '03',
    titleJp: 'アロマ（精油）のこだわり',
    titleEn: 'ESSENTIAL OILS',
    // Uses a local file placed in /public/images/aroma.jpg
    image: '/images/aroma.jpg',
    blocks: [
      {
        type: 'paragraph',
        text: '今日はRi Beauty Spaの、小さくても多くのお客様がすぐに「ほぐれる」秘訣をお話ししたいと思います。それは、私たちが使用するアロマオイルです。'
      },
      {
        type: 'paragraph',
        text: '疲れ切った表情、凝り固まった肩、緊張の解けない瞳でお越しになるお客様がいます。'
      },
      {
        type: 'paragraph',
        text: '「本当にリラックスしたいんです」'
      },
      {
        type: 'paragraph',
        text: 'その一言に、私たちは香りの力で応えます。'
      },
      {
        type: 'paragraph',
        text: '体力を回復させるのはマッサージの手技だけではありません。'
      },
      {
        type: 'paragraph',
        text: '香りが、まず心に届くのです。'
      },
      {
        type: 'paragraph',
        text: 'Ri Beauty Spaでは、「どのお客様にも同じ香り」という選び方はしません。'
      },
      {
        type: 'paragraph',
        text: 'その時、そのお客様が必要としている感覚に合わせてお選びいただきます。'
      },
      {
        type: 'paragraph',
        text: '頭をスッキリさせたい方、筋肉を温めて緩めたい方、ぐっすり眠りたい方。'
      },
      {
        type: 'paragraph',
        text: 'それぞれの想いに寄り添う香りをご提案します。'
      }
    ]
  },
  {
    id: '04',
    titleJp: 'ハーブの香り — 心安らぐひととき',
    titleEn: 'HERBAL SCENT',
    // Uses a local file placed in /public/images/HERBAL.jpg
    image: '/images/HERBAL.jpg',
    blocks: [
      {
        type: 'paragraph',
        text: 'Ri Beauty Spaに一歩足を踏み入れた瞬間、施術台に横たわる前に、多くのお客様が口にされる言葉があります。'
      },
      {
        type: 'paragraph',
        text: '「ここ、すごく良い香りがしますね。」'
      },
      {
        type: 'paragraph',
        text: '香りは、感情に最も早く届くものだと私たちは信じています。'
      },
      {
        type: 'paragraph',
        text: '満員電車、仕事、絶え間ない会話や締め切り。'
      },
      {
        type: 'paragraph',
        text: 'そんな日常から離れ、当店のドアを開けて深く息を吸い込んだ時、体は自然と「緩む」準備を始めます。'
      },
      {
        type: 'paragraph',
        text: 'それは魔法ではなく、空間そのものが「もう、休んでもいいんですよ」とあなたに語りかけているからです。'
      },
      {
        type: 'paragraph',
        text: '私たちが選んでいるのは、人工的な芳香剤の強い香りではありません。'
      },
      {
        type: 'paragraph',
        text: '丁寧に蒸し上げられたハーブそのものの、清潔で温かく、穏やかな香りです。'
      },
      {
        type: 'paragraph',
        text: '香りに敏感な方でも心地よく感じられるよう、決して主張しすぎず、空気の中にそっと寄り添うような香りを大切にしています。'
      }
    ]
  }
];

// Fix for BodyCareDetail.tsx: Exported missing BODY_CARE_ARTICLES array
export const BODY_CARE_ARTICLES: ArticleItem[] = [
  { id: 'b1', titleEn: 'Body Wellness Massage', titleJp: 'ボディマッサージ', content: '凝り固まった筋肉を深く解きほぐします。', image: 'https://i.postimg.cc/J7scjkJY/GFBX4590.jpg' },
  { id: 'b2', titleEn: 'Hot Stone Therapy', titleJp: 'ストーンセラピー', content: '温めた石で身体の深部からリラックス。', image: 'https://i.postimg.cc/sfKkrsBk/TMUP4682.jpg', tagEn: 'OPTION', tagJp: 'オプション' }
];

export type BodyWellnessMainTherapy = {
  id: string;
  tag: 'BODY' | 'TRADITION' | 'ENERGY' | 'DETOX';
  titleJp: string;
  subtitleEn: string;
  imageSrc: string;
  description: string[];
  ctaLabel: string;
  ctaHref: string;
};

export type BodyWellnessOption = {
  id: string;
  titleJp: string;
  subtitleEn: string;
  imageSrc: string;
  descriptionShort: string;
};

export const BODY_WELLNESS_MAIN_THERAPIES: BodyWellnessMainTherapy[] = [
  {
    id: 'bw-main-1',
    tag: 'BODY',
    titleJp: 'フットケア',
    subtitleEn: 'FOOT CARE',
    imageSrc: 'https://i.postimg.cc/J7scjkJY/GFBX4590.jpg',
    description: [
      '「第二の心臓」と呼ばれる足を丁寧にケアします。',
      '立ち仕事や歩き疲れで重くなった足を、専門の技術でほぐしていきます。',
      '足裏の反射区（ツボ）を心地よく刺激することで、血行を促進し、全身の血流を整えます。',
      'ふくらはぎのむくみや足の冷えが気になる方、また「足が軽くなる感覚」を味わいたい方に最適のコースです。'
    ],
    ctaLabel: 'EXPERIENCE NOW',
    ctaHref: SQUARE_BOOKING_LINK
  },
  {
    id: 'bw-main-2',
    tag: 'TRADITION',
    titleJp: 'ベトナム伝統ボディトリートメント（オイル）',
    subtitleEn: 'VIETNAMESE TRADITIONAL',
    imageSrc: 'https://i.postimg.cc/Bvc83h2h/LIZQ2957.jpg',
    description: [
      'ベトナムに古くから伝わる伝統的な技法を用いた、全身オイルトリートメントです。',
      '指圧とロングストロークを組み合わせた独特の手技により、筋肉の深層部まで働きかけ、',
      '凝り固まった体を根底から解きほぐします。',
      'ベトナム産の良質なハーブオイルを使用し、エネルギーを整えることで、',
      '「活力の回復」を促します。'
    ],
    ctaLabel: 'EXPERIENCE NOW',
    ctaHref: SQUARE_BOOKING_LINK
  },
  {
    id: 'bw-main-3',
    tag: 'ENERGY',
    titleJp: 'ホットストーン・エナジーアップトリートメント',
    subtitleEn: 'HOT STONE THERAPY',
    imageSrc: 'https://i.postimg.cc/sfKkrsBk/TMUP4682.jpg',
    description: [
      '温められた天然の火山石（ホットストーン）を使用した贅沢なケアです。',
      '石から発せられる熱が筋肉の深部まで浸透し、慢性的な疲れや冷えを解消します。',
      '石の滑らかな肌触りと心地よい重みにより、究極のリラクゼーションをご提供します。'
    ],
    ctaLabel: 'EXPERIENCE NOW',
    ctaHref: SQUARE_BOOKING_LINK
  },
  {
    id: 'bw-main-4',
    tag: 'DETOX',
    titleJp: 'アロマリンパトリートメント',
    subtitleEn: 'LYMPHATIC DRAINAGE',
    imageSrc: 'https://i.postimg.cc/ydLTTh6v/RYMU3477.jpg',
    description: [
      'リンパの流れを整える優しいタッチのトリートメントです。',
      '体内に滞った余分な水分や老廃物の排出を促すデトックスに重点を置いています。',
      '精油の薬理成分が嗅覚を通じて脳をリラックスさせ、',
      '自律神経のバランスを整えます。'
    ],
    ctaLabel: 'EXPERIENCE NOW',
    ctaHref: SQUARE_BOOKING_LINK
  }
];

export const BODY_WELLNESS_ADDITIONAL_OPTIONS: BodyWellnessOption[] = [
  {
    id: 'bw-opt-01',
    titleJp: 'ヒップアップケア（30分）',
    subtitleEn: 'HIP UP CARE (30 MIN)',
    imageSrc: 'https://i.postimg.cc/sfKkrsBk/TMUP4682.jpg',
    descriptionShort: 'ヒップラインを整え、上向きのシルエットを目指す集中ケアです。'
  },
  {
    id: 'bw-opt-02',
    titleJp: 'ウエストケア（30分）',
    subtitleEn: 'WAIST CARE (30 MIN)',
    imageSrc: 'https://i.postimg.cc/J7scjkJY/GFBX4590.jpg',
    descriptionShort: '気になるウエスト周りにアプローチし、スッキリとしたラインをサポート。'
  },
  {
    id: 'bw-opt-03',
    titleJp: '遠赤外線ヒートケア（20分）',
    subtitleEn: 'FAR INFRARED HEAT (20 MIN)',
    imageSrc: 'https://i.postimg.cc/ydLTTh6v/RYMU3477.jpg',
    descriptionShort: '遠赤外線の熱で体の芯から温め、代謝を促しリラックスさせます。'
  },
  {
    id: 'bw-opt-04',
    titleJp: 'ホットストーン（15分）',
    subtitleEn: 'HOT STONE MINI (15 MIN)',
    imageSrc: 'https://i.postimg.cc/sfKkrsBk/TMUP4682.jpg',
    descriptionShort: '温めた石の熱で筋肉を緩める、短い時間でも効果的な温感ケアです。'
  },
  {
    id: 'bw-opt-05',
    titleJp: 'よもぎ温熱ケア（20分）',
    subtitleEn: 'YOMOGI THERMAL CARE (20 MIN)',
    imageSrc: 'https://i.postimg.cc/x8WVHPVN/7f512228703f67fecf0f0ae41437a4a0.jpg',
    descriptionShort: 'よもぎの成分を活かした温熱ケアで、冷えやすい部分を集中して温めます。'
  },
  {
    id: 'bw-opt-06',
    titleJp: 'ハーブ温熱パック（20分）',
    subtitleEn: 'HERBAL THERMAL PACK (20 MIN)',
    imageSrc: 'https://i.postimg.cc/Bvc83h2h/LIZQ2957.jpg',
    descriptionShort: '厳選されたハーブを使用した温かいパックで、じんわりと癒やします。'
  },
  {
    id: 'bw-opt-07',
    titleJp: 'ハイパーナイフ（15分）',
    subtitleEn: 'HYPER KNIFE BODY (15 MIN)',
    imageSrc: 'https://i.postimg.cc/DfG42dLr/QPSF7611.jpg',
    descriptionShort: '高周波マシンで効率よく温め、部分的なコリや引き締めにアプローチ。'
  },
  {
    id: 'bw-opt-08',
    titleJp: '首・肩ほぐし（15分）',
    subtitleEn: 'NECK & SHOULDER (15 MIN)',
    imageSrc: 'https://i.postimg.cc/J7scjkJY/GFBX4590.jpg',
    descriptionShort: '短時間で首から肩の緊張をピンポイントで解きほぐします。'
  },
  {
    id: 'bw-opt-09',
    titleJp: '首・肩ほぐし（30分）',
    subtitleEn: 'NECK & SHOULDER (30 MIN)',
    imageSrc: 'https://i.postimg.cc/ydLTTh6v/RYMU3477.jpg',
    descriptionShort: '頑固な首・肩のコリをじっくりと時間をかけて丁寧にケアします。'
  },
  {
    id: 'bw-opt-10',
    titleJp: 'ハンド・腕ケア（15分）',
    subtitleEn: 'HAND & ARM CARE (15 MIN)',
    imageSrc: 'https://i.postimg.cc/sfKkrsBk/TMUP4682.jpg',
    descriptionShort: '指先から腕にかけての疲れを癒やし、PC作業などの疲労を緩和します。'
  },
  {
    id: 'bw-opt-11',
    titleJp: 'ドライヘッドスパ（15分）',
    subtitleEn: 'DRY HEAD SPA (15 MIN)',
    imageSrc: 'https://i.postimg.cc/V665QX19/RUSZ4198.jpg',
    descriptionShort: '水を使わず頭皮をほぐし、眼精疲労や睡眠の質の向上をサポートします。'
  },
  {
    id: 'bw-opt-12',
    titleJp: 'バストケア（30分）',
    subtitleEn: 'BUST CARE (30 MIN)',
    imageSrc: 'https://i.postimg.cc/J7scjkJY/GFBX4590.jpg',
    descriptionShort: '女性らしいラインを保つための、優しく丁寧なバスト周辺のケアです。'
  }
];

// Fix for SkinTherapyDetail.tsx: Exported missing SKIN_CARE_ARTICLES array
export const SKIN_CARE_ARTICLES: ArticleItem[] = [
  { id: 's1', titleEn: 'Herbal Peeling', titleJp: 'ハーブピーリング', content: '希少な生薬エキスで輝く滑らかな肌へ。', image: 'https://i.postimg.cc/VNnD9cnM/74e619c7f06b390c7dda738925a695d7.jpg' },
  { id: 's2', titleEn: 'Signature Facial', titleJp: 'フェイシャルケア', content: '肌本来の美しさを引き出す特別なケア。', image: 'https://i.postimg.cc/DfG42dLr/QPSF7611.jpg', tagEn: 'OPTION', tagJp: 'オプション' }
];

// Fix for multiple components: Added missing properties aboutTitleEn, servicesTitleEn, bookingTitleEn, qrCodeLabel, contactTitleJp, viewMap
export const UI_STRINGS = {
  sloganEn: "RESTORE YOUR INNER RADIANCE",
  sloganJp: "内なる輝きを、呼び覚ます休息。",
  bookingCta: "RESERVE YOUR MOMENT",
  aboutTitleEn: "OUR PHILOSOPHY",
  aboutTitleJp: "私たちの哲学",
  aboutTeaserJp: "Ri Beauty Spa は、忙しい毎日の中でふっと肩の力を抜き、心と身体を整えるため\nの“小さな休息の場所”として生まれました。\n私たちが大切にしているのは、単なる施術の提供ではなく、五感を解き放つ「調\n和」の体験です。\n一歩足を踏み入れた瞬間に漂うハーブの香り、温かなお迎え、そしてお一人おひとり\nの呼吸に合わせた丁寧な手技。\nそれは、都会の喧騒を忘れ、自分自身と対話するための、至福のひとときをご提案\nします。",
  aboutFullContentJp: "Ri Beauty Spa は、忙しい毎日の中でふっと肩の力を抜き、心と身体を整えるため\nの“小さな休息の場所”として生まれました。\n私たちが大切にしているのは、単なる施術の提供ではなく、五感を解き放つ「調\n和」の体験です。\n一歩足を踏み入れた瞬間に漂うハーブの香り、温かなお迎え、そしてお一人おひとり\nの呼吸に合わせた丁寧な手技。\nそれは、都会の喧騒を忘れ、自分自身と対話するための、至福のひとときをご提案\nします。",
  servicesTitleEn: "FEATURED SERVICES",
  servicesTitleJp: "注目のサービス",
  bookingTitleEn: "ONLINE RESERVATION",
  bookingTitleJp: "オンライン予約",
  bookingContent: "自分を愛し, いたわる時間を作りましょう. 最高のケアをご用意してお待ちしております.",
  qrCodeLabel: "SCAN FOR MAP",
  contactTitleEn: "CONTACT US",
  contactTitleJp: "お問い合わせ",
  addressLabel: "住所",
  phoneLabel: "電話番号",
  emailLabel: "メール",
  viewMap: "GOOGLE MAPS",
  disclaimerTitle: "免責事項",
  disclaimerContent: "当店の施術は、疲労感の緩和およびリラクゼーションを目的とした一般的なサービスであり、医療行為ではありません。治療や診断、医療上の助言の代替を目的とするものではありません。\n\n心疾患、高血圧、糖尿病、皮膚疾患、感染症、骨・関節の痛みや外傷、妊娠中など健康上の不安がある方は、施術前に必ずスタッフへお申し出ください。必要に応じて、事前に医師へご相談ください。\n\n施術中に痛み・不快感・体調不良を感じた場合は、直ちにスタッフへお知らせください。安全のため施術を中止する場合があります。\n\n体質差や既往症の自己申告漏れ、注意事項に従わなかったこと等により生じた不調・事故・損害について、当店は一切の責任を負いかねます。\n\n万一、事故や紛争が生じた場合は、当店の法的代理人を通じて対応し、その判断を最終とします。\n\nご理解とご協力のほど、よろしくお願い申し上げます。皆さまのご来店を心よりお待ちしております。"
};