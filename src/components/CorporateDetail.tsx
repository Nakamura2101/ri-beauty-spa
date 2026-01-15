
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
}

export const CorporateDetail: React.FC<Props> = ({ onBack }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    phone: '',
    address: '',
    email: '',
    note: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `法人向けお問い合わせ: ${formData.company}`;
    const body = `会社名: ${formData.company}%0D%0A電話番号: ${formData.phone}%0D%0A住所: ${formData.address}%0D%0Aメール: ${formData.email}%0D%0A備考: ${formData.note}`;
    window.location.href = `mailto:ribeauty.jp@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

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
              法人向けサービス
            </h1>
            <p className="text-[10px] tracking-[0.6em] text-spa-green/60 font-bold uppercase ml-[0.6em]">CORPORATE SERVICES</p>
          </div>
          <div className="w-12 h-px bg-spa-green/20 mt-12"></div>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:w-1/2 space-y-10">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-spa-deep font-light">
                従業員の皆さまの心身の健康と、<br/>
                企業の活力を支えるリラクゼーション。
              </h2>
              <div className="w-12 h-px bg-spa-green/20"></div>
              <p className="text-gray-500 font-light leading-relaxed text-justify">
                Ri Beauty Spa は、個人のお客様だけでなく、従業員のウェルビーイング（福利厚生）を大切にする企業様のご利用も承っております。
                長時間のデスクワークによる肩こりや眼精疲労、ストレスを抱えるスタッフの皆さまへ、プロフェッショナルなケアによる「心身のリセット」をご提案します。
              </p>
            </div>
            
            <ul className="space-y-6">
              {[
                { title: "福利厚生利用", desc: "従業員さま向けの優待価格設定や定期的なリフレッシュプラン。" },
                { title: "コンディショニング支援", desc: "デスクワーク等による身体の不調をケアし、集中力の向上をサポート。" },
                { title: "ギフトカード・優待券", desc: "社内表彰や記念品としてのギフトチケット発行。" }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-6 group">
                  <span className="text-spa-green font-serif italic text-2xl opacity-40 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                  <div className="space-y-1">
                    <h4 className="text-spa-deep font-bold text-sm tracking-widest">{item.title}</h4>
                    <p className="text-gray-400 text-sm font-light">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-10 md:p-16 shadow-2xl border border-gray-50 rounded-sm">
              {submitted ? (
                <div className="text-center py-10 space-y-6">
                  <div className="w-16 h-16 bg-spa-green/10 text-spa-green rounded-full flex items-center justify-center mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif text-spa-deep">お問い合わせありがとうございます</h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    メールアプリを起動しました。詳細を送信してください。内容を確認次第、担当者よりご連絡させていただきます。
                  </p>
                  <button onClick={() => setSubmitted(false)} className="text-[10px] uppercase tracking-widest font-bold text-spa-green border-b border-spa-green/20 pb-1">
                    別の問い合わせを送信
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif text-spa-deep">お問い合わせフォーム</h3>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-spa-green font-bold opacity-60">CONTACT FORM</p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[9px] uppercase tracking-widest text-spa-green font-bold opacity-70">会社名</label>
                        <input required value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} type="text" className="w-full border-b border-gray-200 py-2 focus:border-spa-green outline-none transition-colors font-light text-spa-deep bg-transparent" placeholder="Company Name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] uppercase tracking-widest text-spa-green font-bold opacity-70">電話番号</label>
                        <input required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} type="tel" className="w-full border-b border-gray-200 py-2 focus:border-spa-green outline-none transition-colors font-light text-spa-deep bg-transparent" placeholder="Phone Number" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-widest text-spa-green font-bold opacity-70">メールアドレス</label>
                      <input required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} type="email" className="w-full border-b border-gray-200 py-2 focus:border-spa-green outline-none transition-colors font-light text-spa-deep bg-transparent" placeholder="Email Address" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-widest text-spa-green font-bold opacity-70">住所</label>
                      <input required value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} type="text" className="w-full border-b border-gray-200 py-2 focus:border-spa-green outline-none transition-colors font-light text-spa-deep bg-transparent" placeholder="Office Address" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-widest text-spa-green font-bold opacity-70">備考</label>
                      <textarea value={formData.note} onChange={e => setFormData({...formData, note: e.target.value})} className="w-full border border-gray-100 p-4 h-32 focus:border-spa-green outline-none transition-colors font-light text-spa-deep text-sm bg-gray-50/30" placeholder="Notes or Questions..."></textarea>
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-spa-deep text-white py-6 text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-spa-green transition-all shadow-xl rounded-sm">
                    情報を送信する
                  </button>
                  <p className="text-center text-[9px] text-gray-400 font-light">
                    送信ボタンを押すとメールアプリが起動します。
                  </p>
                </form>
              )}
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
