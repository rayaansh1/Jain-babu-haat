import { useState } from 'react';
import LangToggle from '../../components/LangToggle';

const permanentShops = [
  {
    id: 1, name: 'General Store', nameHi: 'सामान्य किराना दुकान',
    complex: 'Ravi Complex', owner: 'Shailendra Narayan Singh', ownerHi: 'शैलेन्द्र नारायण सिंह',
    img: '/images/ravi-1.png', phone: '+91 99344 68181',
    desc: 'Your one-stop shop for daily essentials — groceries, pulses, oil, sugar, tea, soaps, and all household items. Open every day.',
    descHi: 'रोज़मर्रा की ज़रूरतों के लिए — किराना, दालें, तेल, चीनी, चाय, साबुन और सभी घरेलू सामान। रोज़ खुला।',
    items: ['Groceries · किराना', 'Pulses · दालें', 'Oil · तेल', 'Sugar · चीनी', 'Tea · चाय', 'Soaps · साबुन', 'Household items · घरेलू सामान'],
    timing: 'Open Daily · रोज़ 8AM – 8PM',
  },
  {
    id: 2, name: 'Mobile & Electronics', nameHi: 'मोबाइल और इलेक्ट्रॉनिक्स',
    complex: 'Ravi Complex', owner: 'Shailendra Narayan Singh', ownerHi: 'शैलेन्द्र नारायण सिंह',
    img: '/images/ravi-2.png', phone: '+91 99344 68181',
    desc: 'All mobile services — recharge, SIM cards, mobile accessories, basic electronics, phone repair, and charging. Open daily.',
    descHi: 'सभी मोबाइल सेवाएं — रिचार्ज, सिम कार्ड, मोबाइल एक्सेसरीज़, बेसिक इलेक्ट्रॉनिक्स, फोन रिपेयर। रोज़ खुला।',
    items: ['Mobile Recharge · रिचार्ज', 'SIM Cards · सिम', 'Accessories · एक्सेसरीज़', 'Phone Repair · रिपेयर', 'Charging · चार्जिंग'],
    timing: 'Open Daily · रोज़ 9AM – 7PM',
  },
  {
    id: 3, name: 'Sweets Shop', nameHi: 'मिठाई की दुकान',
    complex: 'Ravi Complex', owner: 'Shailendra Narayan Singh', ownerHi: 'शैलेन्द्र नारायण सिंह',
    img: '/images/shop-snacks.png', phone: '+91 99344 68181',
    desc: 'Fresh sweets, namkeen, snacks, cold drinks, biscuits, and refreshments. Special sweets on festivals. Open daily.',
    descHi: 'ताज़ी मिठाई, नमकीन, स्नैक्स, कोल्ड ड्रिंक, बिस्किट। त्योहारों पर विशेष मिठाइयाँ। रोज़ खुला।',
    items: ['Fresh Sweets · ताज़ी मिठाई', 'Namkeen · नमकीन', 'Cold Drinks · कोल्ड ड्रिंक', 'Biscuits · बिस्किट', 'Snacks · स्नैक्स'],
    timing: 'Open Daily · रोज़ 8AM – 9PM',
  },
];

const weeklyStalls = [
  { id: 4, icon: '🥬', name: 'Vegetables & Fruits', nameHi: 'सब्ज़ियाँ और फल', desc: 'Fresh seasonal vegetables and fruits from local farms', descHi: 'स्थानीय खेतों की ताज़ी सब्ज़ियाँ और फल', items: ['Tomato · टमाटर', 'Potato · आलू', 'Onion · प्याज़', 'Cauliflower · फूलगोभी', 'Seasonal fruits · मौसमी फल'] },
  { id: 5, icon: '🐟', name: 'Fish & Meat', nameHi: 'मछली और मांस', desc: 'Fresh fish and meat from local vendors', descHi: 'स्थानीय विक्रेताओं से ताज़ी मछली और मांस', items: ['Rohu · रोहू', 'Catfish · कैटफिश', 'Goat meat · बकरे का मांस', 'Chicken · मुर्गी'] },
  { id: 6, icon: '👗', name: 'Clothes & Fabric', nameHi: 'कपड़े और कपड़ा', desc: 'Sarees, shirts, daily wear, children clothes, fabric', descHi: 'साड़ी, शर्ट, रोज़ पहनावा, बच्चों के कपड़े', items: ['Sarees · साड़ी', 'Shirts · शर्ट', 'Fabric · कपड़ा', 'Children wear · बच्चों के कपड़े'] },
  { id: 7, icon: '🌶', name: 'Spices & Groceries', nameHi: 'मसाले और किराना', desc: 'All spices, dry goods, pulses, oil in bulk', descHi: 'सभी मसाले, सूखा सामान, दालें', items: ['Turmeric · हल्दी', 'Chilli · मिर्च', 'Cumin · जीरा', 'Coriander · धनिया', 'Dry pulses · सूखी दालें'] },
  { id: 8, icon: '🌿', name: 'Pesticides & Crop Supplies', nameHi: 'कीटनाशक और खेती सामग्री', desc: 'Fertilizers, pesticides, seeds and farming tools', descHi: 'खाद, कीटनाशक, बीज और कृषि उपकरण', items: ['Fertilizers · खाद', 'Pesticides · कीटनाशक', 'Seeds · बीज', 'Tools · औज़ार'] },
  { id: 9, icon: '🍢', name: 'Street Food Stalls', nameHi: 'खाने के स्टॉल', desc: 'Samosa, chaat, puri sabzi, local delicacies and snacks', descHi: 'समोसा, चाट, पूरी सब्ज़ी, स्थानीय व्यंजन', items: ['Samosa · समोसा', 'Chaat · चाट', 'Puri Sabzi · पूरी सब्ज़ी', 'Bhel · भेल'] },
];

function ShopModal({ shop, onClose }) {
  const isDaily = !!shop.img;
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(15,42,74,0.6)', zIndex: 200, display: 'flex', alignItems: 'flex-end' }} onClick={onClose}>
      <div style={{ background: '#fff', borderRadius: '20px 20px 0 0', padding: '0 0 20px', width: '100%', maxHeight: '85vh', overflowY: 'auto' }} onClick={e => e.stopPropagation()}>
        {shop.img
          ? <img src={shop.img} alt={shop.name} style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }} />
          : <div style={{ width: '100%', height: 120, background: 'rgba(15,42,74,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 56 }}>{shop.icon}</div>
        }
        <div style={{ padding: '16px 18px 0' }}>
          <div style={{ width: 36, height: 3, background: '#c9973a', borderRadius: 2, marginBottom: 12 }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: 8, fontWeight: 700, letterSpacing: 1.2, color: '#c9973a', textTransform: 'uppercase' }}>{isDaily ? 'Daily Open · रोज़ खुला' : 'Tue & Sat · मंगल और शनि'}</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, color: '#0f2a4a', marginTop: 4 }}>{shop.name}</h2>
              <p style={{ fontSize: 12, color: '#c9973a', marginTop: 2 }}>{shop.nameHi}</p>
            </div>
          </div>
          {shop.complex && <p style={{ fontSize: 11, color: '#6a6a6a', marginTop: 6 }}>📍 {shop.complex}</p>}
          {shop.owner && <p style={{ fontSize: 11, color: '#6a6a6a', marginTop: 2 }}>👤 {shop.owner} · {shop.ownerHi}</p>}
          {shop.timing && <p style={{ fontSize: 11, color: '#0f2a4a', fontWeight: 600, marginTop: 4 }}>🕐 {shop.timing}</p>}
          <p style={{ fontSize: 12, color: '#3a3a3a', marginTop: 10, lineHeight: 1.8 }}>{shop.desc}</p>
          <p style={{ fontSize: 11, color: '#6a6a6a', marginTop: 4, lineHeight: 1.8 }}>{shop.descHi}</p>
          {shop.items && (
            <div style={{ marginTop: 14 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#0f2a4a', marginBottom: 8, letterSpacing: 0.5 }}>Available Items · उपलब्ध सामान</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {shop.items.map(item => (
                  <span key={item} style={{ background: 'rgba(15,42,74,0.06)', color: '#0f2a4a', borderRadius: 20, padding: '4px 10px', fontSize: 10 }}>{item}</span>
                ))}
              </div>
            </div>
          )}
          {shop.phone && (
            <a href={`tel:${shop.phone}`} style={{ display: 'block', marginTop: 16, background: '#0f2a4a', color: '#fff', borderRadius: 10, padding: '12px', textAlign: 'center', fontSize: 13, fontWeight: 600 }}>
              📞 Call · {shop.phone}
            </a>
          )}
          <button onClick={onClose} style={{ display: 'block', width: '100%', marginTop: 8, background: 'transparent', border: '0.5px solid var(--border)', borderRadius: 10, padding: '10px', fontSize: 12, color: '#6a6a6a', cursor: 'pointer' }}>
            Close · बंद करें
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Shops() {
  const [selected, setSelected] = useState(null);
  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      <div className="page-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div className="gold-bar" />
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 700, color: '#fff' }}>Shops & Vendors</h1>
            <p style={{ fontSize: 12, color: '#e8b85c', marginTop: 3 }}>दुकानें और विक्रेता</p>
          </div>
          <LangToggle dark />
        </div>
      </div>

      {/* Ravi Complex banner */}
      <div style={{ margin: '12px 12px 0', background: '#0f2a4a', borderRadius: 12, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <img src="/images/ravi-1.png" alt="Ravi Complex" style={{ width: 64, height: 64, objectFit: 'cover', borderRadius: 10, flexShrink: 0 }} />
        <div>
          <div style={{ fontSize: 8, color: '#c9973a', fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 3 }}>स्थायी परिसर · Permanent Complex</div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 700, color: '#fff' }}>Ravi Complex</div>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>3 permanent shops · 3 स्थायी दुकानें · Daily open · रोज़ खुला</div>
        </div>
      </div>

      {/* Permanent shops */}
      <div style={{ padding: '12px 12px 6px' }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#0f2a4a', marginBottom: 8, letterSpacing: 0.5 }}>स्थायी दुकानें (रोज़ खुली) · Permanent Shops (Daily Open)</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {permanentShops.map(shop => (
            <div key={shop.id} onClick={() => setSelected(shop)} style={{ background: '#fff', border: '0.5px solid var(--border)', borderRadius: 12, overflow: 'hidden', display: 'flex', cursor: 'pointer', transition: 'box-shadow 0.2s' }}>
              <img src={shop.img} alt={shop.name} style={{ width: 88, height: 88, objectFit: 'cover', flexShrink: 0 }} />
              <div style={{ padding: '10px 12px', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#0f2a4a' }}>{shop.name}</div>
                    <div style={{ fontSize: 10, color: '#c9973a', marginTop: 1 }}>{shop.nameHi}</div>
                  </div>
                  <span style={{ background: 'rgba(15,42,74,0.08)', color: '#0f2a4a', borderRadius: 20, padding: '2px 8px', fontSize: 8, fontWeight: 700, flexShrink: 0 }}>Daily · रोज़</span>
                </div>
                <div style={{ fontSize: 10, color: '#7a7a7a', marginTop: 6, lineHeight: 1.5 }}>{shop.desc.substring(0, 60)}...</div>
                <div style={{ fontSize: 9, color: '#c9973a', marginTop: 4, fontWeight: 600 }}>Tap to view details · टैप करें →</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly stalls */}
      <div style={{ padding: '6px 12px 12px' }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#0f2a4a', marginBottom: 8, letterSpacing: 0.5 }}>साप्ताहिक स्टॉल · Weekly Stalls (Tue &amp; Sat Only)</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {weeklyStalls.map(shop => (
            <div key={shop.id} onClick={() => setSelected(shop)} style={{ background: '#fff', border: '0.5px solid var(--border)', borderRadius: 12, padding: '12px', cursor: 'pointer' }}>
              <div style={{ fontSize: 30, marginBottom: 8 }}>{shop.icon}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#0f2a4a', lineHeight: 1.3 }}>{shop.name}</div>
              <div style={{ fontSize: 10, color: '#c9973a', marginTop: 2 }}>{shop.nameHi}</div>
              <div style={{ fontSize: 9, color: '#7a7a7a', marginTop: 6, lineHeight: 1.5 }}>{shop.desc.substring(0, 40)}...</div>
              <span style={{ display: 'inline-block', marginTop: 8, background: 'rgba(201,151,58,0.12)', color: '#8a6020', borderRadius: 20, padding: '2px 8px', fontSize: 8, fontWeight: 700 }}>Tue · Sat · मंगल · शनि</span>
            </div>
          ))}
        </div>
      </div>

      {selected && <ShopModal shop={selected} onClose={() => setSelected(null)} />}
      <div className="bottom-spacer" />
    </div>
  );
}
