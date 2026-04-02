import { useState } from 'react';
import LangToggle from '../../components/LangToggle';
import { createOrder } from '../../utils/api';

const itemCategories = [
  { id: 'veg', icon: '🥬', en: 'Vegetables', hi: 'सब्ज़ियाँ' },
  { id: 'fish', icon: '🐟', en: 'Fish & Meat', hi: 'मछली-मांस' },
  { id: 'grocery', icon: '🛒', en: 'Grocery', hi: 'किराना' },
  { id: 'clothes', icon: '👗', en: 'Clothes', hi: 'कपड़े' },
  { id: 'spices', icon: '🌶', en: 'Spices', hi: 'मसाले' },
  { id: 'sweets', icon: '🍬', en: 'Sweets', hi: 'मिठाई' },
  { id: 'other', icon: '📦', en: 'Other', hi: 'अन्य' },
];

const units = ['kg', 'g', 'litre', 'piece', 'dozen', 'packet', 'bundle'];

const villages = ['Hindnagar Hijrar', 'Khariyara', 'Shitalpur', 'Durgapur', 'Louni', 'Mirjapur', 'Other'];

export default function Order() {
  const [form, setForm] = useState({ customerName: '', phone: '', village: '', address: '', paymentMethod: 'cod', notes: '' });
  const [items, setItems] = useState([{ id: 1, category: '', itemName: '', itemNameHi: '', quantity: 1, unit: 'kg' }]);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const addItem = () => setItems([...items, { id: Date.now(), category: '', itemName: '', itemNameHi: '', quantity: 1, unit: 'kg' }]);
  const removeItem = id => items.length > 1 && setItems(items.filter(i => i.id !== id));
  const updateItem = (id, field, val) => setItems(items.map(i => i.id === id ? { ...i, [field]: val } : i));

  const handleSubmit = async () => {
    if (!form.customerName || !form.phone || !form.village) return alert('Please fill all required fields · सभी ज़रूरी जानकारी भरें');
    if (items.some(i => !i.itemName)) return alert('Please enter item names · सभी आइटम का नाम भरें');
    setLoading(true);
    try {
      const orderData = {
        ...form,
        items: items.map(i => ({ itemName: i.itemName, itemNameHi: i.itemNameHi, category: i.category, quantity: Number(i.quantity), unit: i.unit })),
        totalItems: items.length,
      };
      const res = await createOrder(orderData);
      window.open(res.data.whatsappUrl, '_blank');
      setDone(true);
    } catch {
      const itemsList = items.map(i => `• ${i.itemName} — ${i.quantity} ${i.unit}`).join('\n');
      const msg = `🛒 *New Order — Jain Babu Haat*\n\n👤 ${form.customerName}\n📞 ${form.phone}\n🏘️ ${form.village}\n${form.address ? '📍 ' + form.address + '\n' : ''}\n📦 *Items:*\n${itemsList}\n\n💳 Payment: ${form.paymentMethod.toUpperCase()}\n${form.notes ? '📝 Notes: ' + form.notes : ''}`;
      window.open(`https://wa.me/919934468181?text=${encodeURIComponent(msg)}`, '_blank');
      setDone(true);
    } finally {
      setLoading(false);
    }
  };

  const inp = { width: '100%', padding: '10px 14px', border: '0.5px solid var(--border)', borderRadius: 10, fontSize: 13, background: '#fff', fontFamily: "'Noto Sans Devanagari', sans-serif", outline: 'none', color: '#1a1a1a' };

  if (done) return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ fontSize: 60, marginBottom: 16 }}>✅</div>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, color: '#0f2a4a', textAlign: 'center' }}>Order Sent!</h2>
      <p style={{ fontSize: 14, color: '#c9973a', marginTop: 4 }}>ऑर्डर भेज दिया गया!</p>
      <p style={{ fontSize: 12, color: '#6a6a6a', marginTop: 12, textAlign: 'center', lineHeight: 1.8 }}>Your order has been sent via WhatsApp. We will confirm delivery soon.<br/><span style={{ fontSize: 11 }}>आपका ऑर्डर WhatsApp पर भेज दिया गया है। हम जल्द डिलीवरी की पुष्टि करेंगे।</span></p>
      <button onClick={() => { setDone(false); setForm({ customerName: '', phone: '', village: '', address: '', paymentMethod: 'cod', notes: '' }); setItems([{ id: 1, category: '', itemName: '', quantity: 1, unit: 'kg' }]); }} style={{ marginTop: 20, background: '#0f2a4a', color: '#fff', border: 'none', borderRadius: 10, padding: '12px 28px', fontSize: 13, cursor: 'pointer' }}>
        New Order · नया ऑर्डर
      </button>
      <div className="bottom-spacer" />
    </div>
  );

  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      <div className="page-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div className="gold-bar" />
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 700, color: '#fff' }}>Order &amp; Delivery</h1>
            <p style={{ fontSize: 12, color: '#e8b85c', marginTop: 3 }}>ऑर्डर और डिलीवरी · Delivery ~5 km</p>
          </div>
          <LangToggle dark />
        </div>
      </div>

      <div style={{ padding: '12px 12px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>

        {/* Customer info */}
        <div style={{ background: '#fff', borderRadius: 12, border: '0.5px solid var(--border)', padding: '14px' }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#0f2a4a', marginBottom: 12, letterSpacing: 0.5 }}>आपकी जानकारी · Your Details</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#0f2a4a', marginBottom: 5 }}>नाम · Name <span style={{ color: '#ef4444' }}>*</span></div>
              <input style={inp} placeholder="Enter your name · अपना नाम लिखें" value={form.customerName} onChange={e => setForm({ ...form, customerName: e.target.value })} />
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#0f2a4a', marginBottom: 5 }}>मोबाइल · Phone <span style={{ color: '#ef4444' }}>*</span></div>
              <input style={inp} type="tel" placeholder="10-digit number · 10 अंकों का नंबर" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#0f2a4a', marginBottom: 5 }}>गाँव · Village <span style={{ color: '#ef4444' }}>*</span></div>
              <select style={{ ...inp, appearance: 'none' }} value={form.village} onChange={e => setForm({ ...form, village: e.target.value })}>
                <option value="">Select village · गाँव चुनें</option>
                {villages.map(v => <option key={v} value={v}>{v}</option>)}
              </select>
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#0f2a4a', marginBottom: 5 }}>पूरा पता · Full Address</div>
              <input style={inp} placeholder="House / landmark · घर / पहचान" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />
            </div>
          </div>
        </div>

        {/* Items section */}
        <div style={{ background: '#fff', borderRadius: 12, border: '0.5px solid var(--border)', padding: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#0f2a4a', letterSpacing: 0.5 }}>सामान की सूची · Items List</div>
            <button onClick={addItem} style={{ background: '#c9973a', color: '#fff', border: 'none', borderRadius: 8, padding: '5px 12px', fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>+ Add Item</button>
          </div>

          {/* Category quick select */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 10, color: '#7a7a7a', marginBottom: 6 }}>Quick select category · श्रेणी चुनें</div>
            <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 4 }}>
              {itemCategories.map(cat => (
                <button key={cat.id} onClick={() => updateItem(items[items.length - 1].id, 'category', cat.en)}
                  style={{ flexShrink: 0, background: 'rgba(15,42,74,0.05)', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 10px', fontSize: 10, color: '#0f2a4a', cursor: 'pointer', textAlign: 'center', minWidth: 60 }}>
                  <div style={{ fontSize: 16, marginBottom: 2 }}>{cat.icon}</div>
                  <div>{cat.hi}</div>
                </button>
              ))}
            </div>
          </div>

          {items.map((item, idx) => (
            <div key={item.id} style={{ background: 'var(--cream)', borderRadius: 10, padding: '12px', marginBottom: 8, border: '0.5px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#0f2a4a' }}>Item {idx + 1} · आइटम {idx + 1}</div>
                {items.length > 1 && <button onClick={() => removeItem(item.id)} style={{ background: '#fee2e2', color: '#b91c1c', border: 'none', borderRadius: 6, padding: '3px 8px', fontSize: 10, cursor: 'pointer' }}>✕ Remove</button>}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 8 }}>
                <input style={{ ...inp, fontSize: 12 }} placeholder="Item name · नाम" value={item.itemName} onChange={e => updateItem(item.id, 'itemName', e.target.value)} />
                <input style={{ ...inp, fontSize: 12 }} placeholder="हिंदी नाम" value={item.itemNameHi} onChange={e => updateItem(item.id, 'itemNameHi', e.target.value)} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                <div>
                  <div style={{ fontSize: 10, color: '#7a7a7a', marginBottom: 4 }}>Quantity · मात्रा</div>
                  <input type="number" min="1" style={{ ...inp, fontSize: 12 }} value={item.quantity} onChange={e => updateItem(item.id, 'quantity', e.target.value)} />
                </div>
                <div>
                  <div style={{ fontSize: 10, color: '#7a7a7a', marginBottom: 4 }}>Unit · इकाई</div>
                  <select style={{ ...inp, fontSize: 12, appearance: 'none' }} value={item.unit} onChange={e => updateItem(item.id, 'unit', e.target.value)}>
                    {units.map(u => <option key={u} value={u}>{u}</option>)}
                  </select>
                </div>
              </div>
            </div>
          ))}

          <button onClick={addItem} style={{ width: '100%', background: 'transparent', border: '1px dashed rgba(201,151,58,0.4)', borderRadius: 10, padding: '10px', fontSize: 12, color: '#c9973a', fontWeight: 600, cursor: 'pointer' }}>
            + Add Another Item · और आइटम जोड़ें
          </button>
        </div>

        {/* Payment */}
        <div style={{ background: '#fff', borderRadius: 12, border: '0.5px solid var(--border)', padding: '14px' }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#0f2a4a', marginBottom: 10, letterSpacing: 0.5 }}>भुगतान · Payment Method</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {[{ val: 'cod', icon: '💵', en: 'Cash on Delivery', hi: 'कैश ऑन डिलीवरी' }, { val: 'upi', icon: '📲', en: 'UPI Payment', hi: 'यूपीआई भुगतान' }].map(p => (
              <div key={p.val} onClick={() => setForm({ ...form, paymentMethod: p.val })}
                style={{ border: `1.5px solid ${form.paymentMethod === p.val ? '#c9973a' : 'var(--border)'}`, background: form.paymentMethod === p.val ? 'rgba(201,151,58,0.06)' : '#fff', borderRadius: 10, padding: '12px 10px', textAlign: 'center', cursor: 'pointer' }}>
                <div style={{ fontSize: 24, marginBottom: 5 }}>{p.icon}</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#0f2a4a' }}>{p.en}</div>
                <div style={{ fontSize: 10, color: '#7a7a7a', marginTop: 2 }}>{p.hi}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 10 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#0f2a4a', marginBottom: 5 }}>Notes · नोट्स (Optional)</div>
            <textarea rows={2} style={{ ...inp, resize: 'none' }} placeholder="Special instructions · विशेष निर्देश" value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} />
          </div>
        </div>

        {/* Order summary */}
        <div style={{ background: 'rgba(15,42,74,0.04)', borderRadius: 10, border: '0.5px solid var(--border)', padding: '12px 14px' }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#0f2a4a', marginBottom: 6 }}>Order Summary · ऑर्डर सारांश</div>
          <div style={{ fontSize: 11, color: '#4a4a4a', lineHeight: 1.8 }}>
            👤 {form.customerName || '—'} &nbsp;|&nbsp; 📞 {form.phone || '—'}<br/>
            🏘️ {form.village || '—'}<br/>
            📦 {items.length} item(s) · {items.length} आइटम &nbsp;|&nbsp; 💳 {form.paymentMethod.toUpperCase()}
          </div>
        </div>

        <button onClick={handleSubmit} disabled={loading}
          style={{ background: '#25d366', color: '#fff', border: 'none', borderRadius: 12, padding: '15px', fontSize: 14, fontWeight: 700, cursor: 'pointer', lineHeight: 1.5, opacity: loading ? 0.7 : 1 }}>
          {loading ? 'Sending...' : '✓ WhatsApp पर ऑर्डर भेजें'}
          <br/><span style={{ fontSize: 11, opacity: 0.85 }}>Send Order on WhatsApp</span>
        </button>

        <div style={{ background: 'rgba(15,42,74,0.04)', borderRadius: 10, padding: '10px 14px', fontSize: 11, color: '#6a6a6a', lineHeight: 1.8, textAlign: 'center', marginBottom: 0 }}>
          📦 5 किमी के भीतर डिलीवरी · Delivery within ~5 km<br/>
          <span style={{ fontSize: 10 }}>Hindnagar · Khariyara · Shitalpur · Durgapur · Louni · Mirjapur</span>
        </div>
      </div>
      <div className="bottom-spacer" />
    </div>
  );
}
