import { NavItem, ArticleItem } from './types';

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

// Fix for BodyCareDetail.tsx: Exported missing BODY_CARE_ARTICLES array
export const BODY_CARE_ARTICLES: ArticleItem[] = [
  { id: 'b1', titleEn: 'Body Wellness Massage', titleJp: 'ボディマッサージ', content: '凝り固まった筋肉を深く解きほぐします。', image: 'https://i.postimg.cc/J7scjkJY/GFBX4590.jpg' },
  { id: 'b2', titleEn: 'Hot Stone Therapy', titleJp: 'ストーンセラピー', content: '温めた石で身体の深部からリラックス。', image: 'https://i.postimg.cc/sfKkrsBk/TMUP4682.jpg', tagEn: 'OPTION', tagJp: 'オプション' }
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
  aboutTeaserJp: "Ri Beauty Spa は、忙しい毎日の中でふっと肩の力を抜き, 心と身体を整えるための“小さな休息の場所”として生まれました.",
  aboutFullContentJp: "Ri Beauty Spa は、忙しい毎日の中でふっと肩の力を抜き, 心と身体を整えるための“小さな休息の場所”として生まれました.",
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
  viewMap: "GOOGLE MAPS"
};