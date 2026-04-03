import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LangToggle from '../../components/LangToggle';
import { getNotices } from '../../utils/api';

const heroSlides = ['/images/hero-en.png', '/images/hero-hi.png'];

const tickerItems = ['सब्ज़ियाँ · Vegetables','मछली · Fish & Meat','कपड़े · Clothes','मसाले · Spices','मिठाई · Sweets','मोबाइल · Electronics','कीटनाशक · Pesticides','नाश्ता · Snacks'];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [notices, setNotices] = useState([]);
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    getNotices().then(r => setNotices(r.data)).catch(() => {});
  }, []);

  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>

      {/* HERO */}
      <div style={{ position: 'relative', height: 320, overflow: 'hidden', background: '#0f2a4a' }}>
        {heroSlides.map((src, i) => (
          <img key={i} src={src} alt="Jain Babu Haat" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: slide === i ? 0.72 : 0, transition: 'opacity 1.2s ease' }} />
        ))}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(15,42,74,0.1) 0%, rgba(15,42,74,0.88) 100%)' }} />

        {/* Top bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px', zIndex: 10 }}>
          <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', letterSpacing: 1.5, textTransform: 'uppercase' }}>Banka, Bihar</span>
          <LangToggle dark />
        </div>

        {/* Slide dots */}
        <div style={{ position: 'absolute', bottom: 78, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6, zIndex: 10 }}>
          {heroSlides.map((_, i) => (
            <div key={i} onClick={() => setSlide(i)} style={{ width: slide === i ? 20 : 6, height: 5, borderRadius: 3, background: slide === i ? '#c9973a' : 'rgba(255,255,255,0.35)', cursor: 'pointer', transition: 'all 0.3s' }} />
          ))}
        </div>

        {/* Hero text */}
        <div style={{ position: 'absolute', bottom: 18, left: 18, right: 18, zIndex: 10 }}>
          <div style={{ width: 32, height: 2, background: '#c9973a', marginBottom: 10 }} />
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 30, fontWeight: 700, color: '#fff', lineHeight: 1.1 }}>Jain Babu Haat</h1>
          <p style={{ fontSize: 13, color: '#e8b85c', marginTop: 4 }}>जैन बाबू हाट · बांका, बिहार · Est. 2020</p>
        </div>
      </div>

      {/* STATS BAR */}
      <div style={{ background: '#0f2a4a', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        {[
          { en: 'Tue & Sat', hi: 'मंगल · शनि', sub: 'Haat Days · बाज़ार' },
          { en: '2–6 PM', hi: '2 – 6 बजे', sub: 'Timings · समय' },
          { en: '7 km', hi: 'बांका से', sub: 'From Banka · दूरी' },
        ].map((s, i) => (
          <div key={i} style={{ padding: '10px 6px', textAlign: 'center', borderRight: i < 2 ? '0.5px solid rgba(201,151,58,0.2)' : 'none' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 13, fontWeight: 600, color: '#e8b85c' }}>{s.en}</div>
            <div style={{ fontSize: 10, color: '#c9973a', marginTop: 1 }}>{s.hi}</div>
            <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* TICKER */}
      <div style={{ background: '#c9973a', overflow: 'hidden', padding: '6px 0' }}>
        <div style={{ display: 'inline-block', whiteSpace: 'nowrap', animation: 'ticker 24s linear infinite' }}>
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} style={{ fontSize: 11, fontWeight: 600, color: '#0f2a4a', padding: '0 16px' }}>{item} {i % tickerItems.length !== tickerItems.length - 1 ? '·' : ''}</span>
          ))}
        </div>
      </div>

      {/* NOTICE BOARD */}
      {notices.length > 0 && (
        <div style={{ margin: '12px 12px 0', background: '#fff9ec', border: '0.5px solid rgba(201,151,58,0.3)', borderRadius: 10, padding: '10px 14px' }}>
          <div style={{ fontSize: 9, fontWeight: 700, color: '#c9973a', letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 6 }}>📢 नोटिस · Notice Board</div>
          {notices.slice(0, 2).map(n => (
            <div key={n._id} style={{ fontSize: 12, color: '#0f2a4a', fontWeight: 500, marginBottom: 3 }}>
              • {n.titleHi || n.title}
            </div>
          ))}
        </div>
      )}

      {/* CTA BUTTONS */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, padding: '12px 12px 8px' }}>
        <button onClick={() => navigate('/order')} style={{ background: '#0f2a4a', color: '#fff', border: 'none', borderRadius: 10, padding: '13px 8px', fontSize: 12, fontWeight: 600, lineHeight: 1.5 }}>
          अभी ऑर्डर करें<br/><span style={{ fontSize: 10, opacity: 0.6, fontWeight: 400 }}>Order Now</span>
        </button>
        <button onClick={() => navigate('/map')} style={{ background: '#c9973a', color: '#0f2a4a', border: 'none', borderRadius: 10, padding: '13px 8px', fontSize: 12, fontWeight: 600, lineHeight: 1.5 }}>
          हमें खोजें<br/><span style={{ fontSize: 10, opacity: 0.7, fontWeight: 400 }}>Find Us on Map</span>
        </button>
      </div>

      {/* LEGACY SECTION */}
      <div className="sec-card">
        <div className="sec-head">
          <div className="sec-stripe" />
          <div>
            <div className="sec-head-label">हमारी विरासत · Our Legacy</div>
            <div className="sec-head-sub">In honour of Shri Jay Narayan Singh Ji</div>
          </div>
        </div>

        {/* Big blue shirt photo */}
        <div style={{ position: 'relative' }}>
          <img src="/images/jay-blue.png" alt="Jay Narayan Singh Ji" style={{ width: '100%', height: 270, objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(15,42,74,0.92) 0%, transparent 100%)', padding: '24px 18px 16px' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>Jay Narayan Singh Ji</h2>
            <p style={{ fontSize: 12, color: '#e8b85c', marginTop: 4 }}>जय नारायण सिंह जी · जन्म: 31 जनवरी 1938</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 8 }}>
              {['प्रधानाध्यापक · Headmaster', '40+ वर्ष योग', 'समाज सेवक'].map(t => (
                <span key={t} className="tag tag-white">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* HINDI heading + summary */}
        <div style={{ padding: '20px 18px', borderBottom: '1px solid rgba(201,151,58,0.15)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 14 }}>
            <div style={{ width: 3, minHeight: 36, background: '#c9973a', borderRadius: 2, flexShrink: 0, marginTop: 2 }} />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 15, fontWeight: 700, color: '#0f2a4a', lineHeight: 1.5 }}>
              श्री जय नारायण सिंह जी  के सम्मान में – सेवा और ग्रामीण विकास की जीवित विरासत
            </h3>
          </div>
          {[
            'जैन बाबू हाट की स्थापना <strong>श्री जय नारायण सिंह जी </strong> के प्रति गहरे सम्मान और उनके जीवनभर के समर्पण को मान्यता देने के उद्देश्य से की गई है। यह केवल एक बाजार नहीं है, बल्कि उनके विचारों, उनकी दृष्टि और गांव के विकास के प्रति उनके निरंतर प्रयासों का प्रतीक है।',
            '<p>इस पहल की स्थापना वर्ष 2020 में उनके मंझले पुत्र <strong>श्री शैलेन्द्र नारायण सिंह जी</strong> द्वारा की गई, तथा इसमें उनके बड़े पुत्र <strong>श्री अमरेन्द्र नारायण सिंह जी</strong> और सबसे छोटे पुत्र <strong>श्री बीरेन्द्र नारायण सिंह जी</strong> का भी महत्वपूर्ण योगदान रहा </p>, जिनका उद्देश्य पारंपरिक ग्रामीण बाजारों को एक संगठित, सुलभ और स्थायी आर्थिक केंद्र के रूप में विकसित करना था। उनके प्रयासों ने इस विचार को एक मजबूत दिशा और संरचना प्रदान की।',
            'श्री जय नारायण सिंह जी ने हमेशा अपने गांव और समाज के कल्याण को प्राथमिकता दी है। उनका जीवन सादगी, ईमानदारी और समावेशिता का उदाहरण है। वे मानते हैं कि वास्तविक विकास जमीनी स्तर से शुरू होता है, और उनके कार्य इसी सोच को दर्शाते हैं।',
            'जैन बाबू हाट की अवधारणा इसी सोच से प्रेरित है — एक ऐसा संगठित और सम्मानजनक बाजार बनाना, जहां ग्रामीण लोग व्यापार कर सकें, जुड़ सकें और आर्थिक रूप से आगे बढ़ सकें।',
            'इस हाट के माध्यम से स्थानीय विक्रेताओं को बेहतर सुविधाएं, स्वच्छ वातावरण और एक विश्वसनीय मंच मिलता है। इससे उनकी आय में वृद्धि होती है और खरीदारों को भी बेहतर अनुभव मिलता है। यह बाजार सामुदायिक एकता और ग्रामीण अर्थव्यवस्था को मजबूत करता है।',
            'इस बाजार का नाम श्री जय नारायण सिंह जी के नाम पर रखना उनके प्रति सम्मान और कृतज्ञता का प्रतीक है। विशेष रूप से यह सम्मान उनके जीवनकाल में दिया जाना इसे और भी महत्वपूर्ण बनाता है।',
            '<strong>जैन बाबू हाट आज उनके आदर्शों का प्रतीक है — जहाँ सेवा, समाज और विकास एक साथ आगे बढ़ते हैं।</strong>',
          ].map((p, i) => (
            <p key={i} style={{ fontSize: 12, color: i === 6 ? '#0f2a4a' : '#3a3a3a', lineHeight: 2, marginBottom: 10 }} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>

        {/* ENGLISH heading + summary */}
        <div style={{ padding: '20px 18px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 14 }}>
            <div style={{ width: 3, minHeight: 36, background: '#c9973a', borderRadius: 2, flexShrink: 0, marginTop: 2 }} />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 15, fontWeight: 700, color: '#0f2a4a', lineHeight: 1.5, fontStyle: 'italic' }}>
              In Honor of Shri Jay Narayan Singh – A Legacy of Service and Rural Development
            </h3>
          </div>
          {[
            'Jain Babu Haat has been established as a mark of deep respect and recognition for the lifelong dedication and unwavering commitment of <strong>Shri Jay Narayan Singh</strong>, a respected and visionary individual who continues to inspire generations through his service to society and rural development.',
            'The initiative was formally established in 2020 by <strong>Shri Shailendra Narayan Singh</strong>, with a clear vision of transforming traditional rural marketplaces into organized, accessible, and sustainable centers of economic activity.',
            'Shri Jay Narayan Singh has always worked with a strong sense of responsibility toward the welfare of his village and surrounding communities. His approach is guided by simplicity, integrity, and inclusiveness. He firmly believes that true development begins at the grassroots level.',
            'The concept of Jain Babu Haat is inspired by this vision — creating a well-organized and dignified marketplace where villagers can trade, connect, and grow economically. Traditional haat bazaars have long been central to rural life, and this initiative enhances that tradition.',
            'The market provides improved infrastructure, cleaner surroundings, and a reliable platform for local vendors. It not only increases livelihood opportunities but also creates a better experience for both buyers and sellers. It strengthens the rural economy and fosters a sense of community.',
            'Naming the market after Shri Jay Narayan Singh reflects deep respect and appreciation for his continued contributions. Recognizing his work during his lifetime adds even greater significance.',
            '<strong>Jain Babu Haat stands today as a reflection of his ideals — where service, community, and development come together to create lasting impact.</strong>',
          ].map((p, i) => (
            <p key={i} style={{ fontSize: 12, color: i === 6 ? '#0f2a4a' : '#3a3a3a', lineHeight: 2, marginBottom: 10, fontFamily: 'Georgia, serif' }} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
          <button onClick={() => navigate('/about')} style={{ marginTop: 6, background: 'rgba(15,42,74,0.06)', border: '0.5px solid rgba(15,42,74,0.18)', borderRadius: 8, padding: '9px 18px', fontSize: 11, color: '#0f2a4a', fontWeight: 700 }}>
            पूरी जीवनी पढ़ें · Read Full Story →
          </button>
        </div>
      </div>

      {/* OFFICE SECTION */}
      <div className="sec-card">
        <div className="sec-head">
          <div className="sec-stripe" />
          <div>
            <div className="sec-head-label">कार्यालय · Office</div>
            <div className="sec-head-sub">Jain Babu Haat, Ravi Complex</div>
          </div>
        </div>
        <div style={{ padding: '20px 18px' }}>
          <div style={{ display: 'flex', gap: 18, alignItems: 'stretch' }}>
            <div style={{ flexShrink: 0, position: 'relative' }}>
              <img src="/images/shailendra.png" alt="Shailendra Narayan Singh" style={{ width: 130, height: 165, objectFit: 'cover', objectPosition: 'center top', borderRadius: 12, border: '2px solid rgba(201,151,58,0.35)', display: 'block' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(15,42,74,0.88)', borderRadius: '0 0 10px 10px', padding: '5px 6px', textAlign: 'center' }}>
                <span style={{ fontSize: 8, fontWeight: 700, color: '#c9973a', letterSpacing: 0.5 }}>संस्थापक · Founder</span>
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8 }}>
              <div>
                <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: 1.5, color: '#c9973a', textTransform: 'uppercase', marginBottom: 5 }}>Founder · संस्थापक</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 17, fontWeight: 700, color: '#0f2a4a', lineHeight: 1.25 }}>Shailendra Narayan Singh</h3>
                <p style={{ fontSize: 12, color: '#c9973a', marginTop: 3, fontWeight: 500 }}>शैलेन्द्र नारायण सिंह</p>
              </div>
              <div style={{ width: 24, height: 1.5, background: '#c9973a', borderRadius: 2 }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                {[
                  ['Founded Jain Babu Haat in 2020', '2020 में स्थापित'],
                  ['Ravi Complex, Hindnagar Hijrar', 'रवि कॉम्प्लेक्स'],
                  ['Banka, Bihar — 813109', 'बांका, बिहार'],
                ].map(([en, hi], i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 7 }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#c9973a', marginTop: 5, flexShrink: 0 }} />
                    <span style={{ fontSize: 11, color: '#3a3a3a', lineHeight: 1.5 }}>{en} · <span style={{ color: '#6a6a6a' }}>{hi}</span></span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 2 }}>
                <span className="tag tag-gold">Est. 2020</span>
                <span className="tag tag-gold">Ravi Complex</span>
                <span className="tag tag-navy">Banka, Bihar</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COUPLE PHOTO */}
      <div style={{ margin: '0 12px 12px', borderRadius: 14, overflow: 'hidden', position: 'relative' }}>
        <img src="/images/jay-wife.png" alt="Jay Narayan Singh Ji with Nirmala Singh Ji" style={{ width: '100%', height: 210, objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,42,74,0.88) 0%, transparent 55%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '18px' }}>
          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 600, color: '#fff', lineHeight: 1.3 }}>Jay Narayan Singh Ji &amp; Nirmala Singh Ji</h4>
          <p style={{ fontSize: 11, color: '#e8b85c', marginTop: 4 }}>जय नारायण सिंह जी और निर्मला सिंह जी</p>
        </div>
      </div>

      {/* CONTACT STRIP */}
      <div style={{ margin: '0 12px 14px', background: '#0f2a4a', borderRadius: 12, padding: '16px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>संपर्क · Contact</div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 600, color: '#fff' }}>+91 99344 68181</div>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', marginTop: 3 }}>Hindnagar Hijrar, Banka, Bihar</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <a href="https://wa.me/919934468181" style={{ background: '#25d366', color: '#fff', borderRadius: 8, padding: '8px 16px', fontSize: 11, fontWeight: 700, textDecoration: 'none', textAlign: 'center' }}>WhatsApp</a>
          <a href="tel:+919934468181" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: 8, padding: '8px 16px', fontSize: 11, fontWeight: 600, textDecoration: 'none', textAlign: 'center', border: '0.5px solid rgba(255,255,255,0.2)' }}>Call Us</a>
        </div>
      </div>

      <div className="bottom-spacer" />
    </div>
  );
}
