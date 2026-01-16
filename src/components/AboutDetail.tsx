import React from 'react';

interface Props {
  onBack: () => void;
}

export const AboutDetail: React.FC<Props> = ({ onBack }) => {
  const aboutBodyParagraphsJp = [
    'Ri Beauty Spa は、忙しい毎日の中でふっと肩の力を抜き、心と身体を整えるための“小さな休息の場所”として生まれました。',
    '私たちは、技術だけでなく「安心して任せられる」「きちんと向き合ってもらえる」と感じていただける時間こそが、本当のリラックスにつながると考えています。',
    '【私たちのこだわり】',
    '1) 厳選された素材: 使用するすべてのハーブ、オイル、そしてお出しするお茶に至るまで、私たちは妥協しません。ベトナムの伝統的な知恵と日本の繊細な感性を融合させ、自然の生命力が宿る最高級の素材を選び抜いています。',
    '2) 手に宿る心: マシンでは届かない、人の手だからこそ伝えられる温もりがあります。スタッフ一人ひとりが、お客様の身体の微かなサインを捉え、筋肉の緊張を緩めるだけでなく、心まで解きほぐす施術を心がけています。',
    '3) 空間の調和: 店内のしつらえ、柔らかな照明、心地よいハーブの香り。すべては、ご来店いただいた瞬間から自然と気持ちがほどけていくような体験のためにデザインされています。',
    '【ご提供するケア】',
    '・お身体の疲れや緊張をやわらげ、深い休息へ導くボディケア',
    '・デスクワークや立ち仕事で負担がかかりやすい、足元・首肩・背中・腰まわりの集中ケア',
    '・よもぎ蒸しなど、ハーブを取り入れた温活・リフレッシュケア',
    '・肌の状態に合わせたスキンケア（クレンジング〜保湿、毛穴・くすみ・乾燥・フェイスラインなどのお悩みサポート）',
    'Ri Beauty Spa は、個人のお客様はもちろん、従業員の皆さまの心身の健やかさを支える法人向けサービスにも対応しております。',
    '私たちは、関わるすべての方にとっての「癒やしの拠点」でありたいと願っています。',
    'そして、Ri Beauty Spa の価値は“人”にあると考えています。',
    '経験を積んだスタッフが、確かな技術と丁寧さを大切にしながら、お一人おひとりの状態やご要望に合わせて施術内容を調整いたします。身体はそれぞれ違うからこそ、無理なく、心地よく、安心できるケアを。',
    'Ri Beauty Spa は、Akatsuki Tokyo 株式会社の管理・運営のもと、長く信頼いただけるサロンを目指しています。',
    'お客様の満足 ya 安全、そして心地よい体験を第一に、これからも丁寧に積み重ねてまいります。',
    '「少し休みたい」「整えたい」「軽くなりたい」',
    'そんな時は、どうぞ Ri Beauty Spa へお越しください。皆さまのご来店を心よりお待ちしております。'
  ];

  return (
    <div className="min-h-screen bg-[#fdfdfb] pt-32 pb-24 animate-fadeIn">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-24 flex flex-col items-center text-center">
          <button 
            onClick={onBack}
            className="mb-12 text-[10px] uppercase tracking-[0.4em] font-bold text-spa-green flex items-center gap-3 hover:opacity-60 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            BACK TO HOME
          </button>
          
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-spa-deep italic tracking-tight">
              私たちについて
            </h1>
            <p className="text-[10px] tracking-[0.6em] text-spa-green/60 font-bold uppercase ml-[0.6em]">ABOUT RI BEAUTY SPA</p>
          </div>
          <div className="w-12 h-px bg-spa-green/20 mt-12"></div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto">
          {/* Ảnh to và không bị cắt aspect ratio */}
          <div className="relative mb-24 overflow-hidden rounded-sm shadow-2xl">
            <img 
              src="https://i.postimg.cc/DfG42dLr/QPSF7611.jpg" 
              loading="lazy"
              className="w-full h-auto block"
              alt="Spa Atmosphere"
            />
            <div className="absolute inset-0 bg-spa-deep/5 pointer-events-none"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="contentTight text-gray-600 font-light text-lg text-justify">
              {aboutBodyParagraphsJp.map((paragraph, idx) => (
                <p key={idx}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="bg-eucalyptus/30 p-12 md:p-16 rounded-sm border border-spa-green/5 space-y-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-serif text-spa-deep italic tracking-wide">Akatsuki Tokyo 株式会社</h2>
                <p className="text-[10px] uppercase tracking-[0.4em] text-spa-green font-bold opacity-60">MANAGEMENT & OPERATION</p>
              </div>
              <div className="w-10 h-px bg-spa-green/20"></div>
              <p className="text-gray-500 font-light leading-relaxed">
                Ri Beauty Spa は、Akatsuki Tokyo 株式会社の管理・運営のもと、長く信頼いただけるサロンを目指しています。お客様の満足 và 安全、そして心地よい体験を第一に、これからも丁寧に積み重ねてまいります。
              </p>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-40 text-center">
          <div className="w-20 h-px bg-spa-green/20 mx-auto mb-12"></div>
          <button 
            onClick={onBack}
            className="px-16 py-6 bg-spa-deep text-white text-[10px] uppercase tracking-[0.5em] font-bold transition-all hover:bg-spa-green shadow-2xl rounded-sm"
          >
            ホームへ戻る
          </button>
        </div>
      </div>
    </div>
  );
};