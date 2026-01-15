
import React, { useState } from 'react';

interface Props {
  onClose: () => void;
}

export const B2BForm: React.FC<Props> = ({ onClose }) => {
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
    setTimeout(() => onClose(), 4000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-spa-deep/60 backdrop-blur-md">
      <div className="bg-white w-full max-w-xl p-8 md:p-12 shadow-2xl relative animate-fadeIn rounded-sm">
        <button onClick={onClose} className="absolute top-6 right-6 text-spa-deep/40 hover:text-spa-deep transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-16 space-y-6">
            <div className="w-20 h-20 bg-spa-green/10 text-spa-green rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <p className="font-serif text-2xl text-spa-deep">メールアプリを起動しています...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-10 text-center">
               <h3 className="text-3xl font-serif text-spa-deep mb-2">法人向けお問い合わせ</h3>
               <p className="text-spa-green text-[10px] tracking-widest font-bold uppercase">Business Solutions</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-spa-green font-bold mb-2 block">会社名</label>
                  <input required value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} type="text" className="w-full border-b border-gray-200 py-3 focus:border-spa-green outline-none transition-colors font-light text-spa-deep" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-spa-green font-bold mb-2 block">電話番号</label>
                  <input required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} type="tel" className="w-full border-b border-gray-200 py-3 focus:border-spa-green outline-none transition-colors font-light text-spa-deep" />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-spa-green font-bold mb-2 block">メールアドレス</label>
                  <input required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} type="email" className="w-full border-b border-gray-200 py-3 focus:border-spa-green outline-none transition-colors font-light text-spa-deep" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-spa-green font-bold mb-2 block">住所</label>
                  <input required value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} type="text" className="w-full border-b border-gray-200 py-3 focus:border-spa-green outline-none transition-colors font-light text-spa-deep" />
                </div>
              </div>
            </div>
            
            <div className="mt-8">
               <label className="text-[10px] uppercase tracking-widest text-spa-green font-bold mb-2 block">備考</label>
               <textarea value={formData.note} onChange={e => setFormData({...formData, note: e.target.value})} className="w-full border border-gray-100 p-4 h-24 focus:border-spa-green outline-none transition-colors font-light text-spa-deep text-sm"></textarea>
            </div>

            <button type="submit" className="w-full bg-spa-accent text-white py-6 text-xs uppercase tracking-[0.5em] font-bold hover:brightness-110 transition-all shadow-2xl mt-8 rounded-sm">
              今すぐ送信
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
