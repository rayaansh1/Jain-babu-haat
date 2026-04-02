import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { getOrders, updateOrder, getShops, createShop, deleteShop, getNotices, createNotice, deleteNotice } from '../../utils/api';

const statusColor = { pending: '#f59e0b', confirmed: '#3b82f6', out_for_delivery: '#8b5cf6', delivered: '#22c55e', cancelled: '#ef4444' };

export default function AdminDashboard() {
  const { admin, logout } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState('orders');
  const [orders, setOrders] = useState([]);
  const [shops, setShops] = useState([]);
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newShop, setNewShop] = useState({ name: '', nameHi: '', category: '', type: 'daily', phone: '' });
  const [newNotice, setNewNotice] = useState({ title: '', titleHi: '' });

  useEffect(() => {
    Promise.all([getOrders(), getShops(), getNotices()])
      .then(([o, s, n]) => { setOrders(o.data); setShops(s.data); setNotices(n.data); })
      .finally(() => setLoading(false));
  }, []);

  const inp = { width: '100%', padding: '9px 12px', border: '0.5px solid var(--border)', borderRadius: 8, fontSize: 12, marginBottom: 8, fontFamily: "'Noto Sans Devanagari',sans-serif", outline: 'none' };

  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      <div style={{ background: '#0f2a4a', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, color: '#fff' }}>Admin Dashboard</h1>
          <p style={{ fontSize: 11, color: '#c9973a', marginTop: 2 }}>Jain Babu Haat · {admin?.name}</p>
        </div>
        <button onClick={() => { logout(); navigate('/admin'); }} style={{ background: 'rgba(255,255,255,0.1)', border: '0.5px solid rgba(255,255,255,0.2)', borderRadius: 8, padding: '6px 14px', color: '#fff', fontSize: 11, cursor: 'pointer' }}>Logout</button>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, padding: '12px 12px 0' }}>
        {[
          { label: 'Total Orders · ऑर्डर', value: orders.length },
          { label: 'Pending · बाकी', value: orders.filter(o => o.status === 'pending').length },
          { label: 'Shops · दुकानें', value: shops.length },
        ].map((s, i) => (
          <div key={i} style={{ background: '#fff', borderRadius: 10, border: '0.5px solid var(--border)', padding: 10, textAlign: 'center' }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#0f2a4a', fontFamily: 'var(--font-serif)' }}>{s.value}</div>
            <div style={{ fontSize: 9, color: '#7a7a7a', marginTop: 2, lineHeight: 1.3 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', margin: '12px 12px 0', background: '#fff', borderRadius: 10, border: '0.5px solid var(--border)', overflow: 'hidden' }}>
        {[['orders', 'Orders · ऑर्डर'], ['shops', 'Shops · दुकानें'], ['notices', 'Notices · नोटिस']].map(([val, label]) => (
          <button key={val} onClick={() => setTab(val)} style={{ flex: 1, padding: '10px 4px', border: 'none', background: tab === val ? '#0f2a4a' : 'transparent', color: tab === val ? '#fff' : '#6a6a6a', fontSize: 11, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}>{label}</button>
        ))}
      </div>

      <div style={{ padding: '12px' }}>
        {loading && <div style={{ textAlign: 'center', padding: 30, color: '#7a7a7a' }}>Loading...</div>}

        {/* ORDERS */}
        {!loading && tab === 'orders' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {orders.length === 0 && <div style={{ textAlign: 'center', padding: 30, color: '#7a7a7a', fontSize: 13 }}>No orders yet · अभी कोई ऑर्डर नहीं</div>}
            {orders.map(order => (
              <div key={order._id} style={{ background: '#fff', borderRadius: 12, border: '0.5px solid var(--border)', padding: '12px 14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#0f2a4a' }}>{order.customerName}</div>
                    <div style={{ fontSize: 11, color: '#7a7a7a', marginTop: 2 }}>📞 {order.phone} · 🏘️ {order.village}</div>
                  </div>
                  <span style={{ background: statusColor[order.status] + '20', color: statusColor[order.status], borderRadius: 20, padding: '3px 10px', fontSize: 10, fontWeight: 700, alignSelf: 'flex-start' }}>{order.status}</span>
                </div>
                {order.items?.length > 0 && (
                  <div style={{ background: 'var(--cream)', borderRadius: 8, padding: '8px 10px', marginBottom: 8, fontSize: 11, color: '#4a4a4a', lineHeight: 1.8 }}>
                    {order.items.map((it, i) => <div key={i}>• {it.itemName} — {it.quantity} {it.unit}</div>)}
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 10, color: '#7a7a7a' }}>{order.paymentMethod?.toUpperCase()} · {new Date(order.createdAt).toLocaleDateString('en-IN')}</span>
                  <select value={order.status} onChange={async e => { await updateOrder(order._id, { status: e.target.value }); setOrders(orders.map(o => o._id === order._id ? { ...o, status: e.target.value } : o)); }}
                    style={{ padding: '4px 8px', borderRadius: 8, border: '0.5px solid var(--border)', fontSize: 11, outline: 'none', cursor: 'pointer' }}>
                    {['pending', 'confirmed', 'out_for_delivery', 'delivered', 'cancelled'].map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SHOPS */}
        {!loading && tab === 'shops' && (
          <div>
            <div style={{ background: '#fff', borderRadius: 12, border: '0.5px solid var(--border)', padding: 14, marginBottom: 12 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#0f2a4a', marginBottom: 10 }}>Add Shop · दुकान जोड़ें</div>
              <input placeholder="Shop name (English)" value={newShop.name} onChange={e => setNewShop({ ...newShop, name: e.target.value })} style={inp} />
              <input placeholder="दुकान का नाम (हिंदी)" value={newShop.nameHi} onChange={e => setNewShop({ ...newShop, nameHi: e.target.value })} style={inp} />
              <input placeholder="Category" value={newShop.category} onChange={e => setNewShop({ ...newShop, category: e.target.value })} style={inp} />
              <select value={newShop.type} onChange={e => setNewShop({ ...newShop, type: e.target.value })} style={{ ...inp, appearance: 'none' }}>
                <option value="daily">Daily · रोज़</option>
                <option value="weekly">Weekly (Tue & Sat)</option>
              </select>
              <button onClick={async () => { await createShop(newShop); const r = await getShops(); setShops(r.data); setNewShop({ name: '', nameHi: '', category: '', type: 'daily', phone: '' }); }}
                style={{ background: '#0f2a4a', color: '#fff', border: 'none', borderRadius: 8, padding: '10px', width: '100%', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>+ Add Shop</button>
            </div>
            {shops.map(shop => (
              <div key={shop._id} style={{ background: '#fff', borderRadius: 10, border: '0.5px solid var(--border)', padding: '12px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#0f2a4a' }}>{shop.name}</div>
                  <div style={{ fontSize: 10, color: '#7a7a7a', marginTop: 2 }}>{shop.category} · {shop.type}</div>
                </div>
                <button onClick={async () => { await deleteShop(shop._id); setShops(shops.filter(s => s._id !== shop._id)); }}
                  style={{ background: '#fee2e2', color: '#b91c1c', border: 'none', borderRadius: 8, padding: '6px 12px', fontSize: 11, cursor: 'pointer' }}>Remove</button>
              </div>
            ))}
          </div>
        )}

        {/* NOTICES */}
        {!loading && tab === 'notices' && (
          <div>
            <div style={{ background: '#fff', borderRadius: 12, border: '0.5px solid var(--border)', padding: 14, marginBottom: 12 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#0f2a4a', marginBottom: 10 }}>Post Notice · सूचना जोड़ें</div>
              <input placeholder="Notice (English)" value={newNotice.title} onChange={e => setNewNotice({ ...newNotice, title: e.target.value })} style={inp} />
              <input placeholder="सूचना (हिंदी)" value={newNotice.titleHi} onChange={e => setNewNotice({ ...newNotice, titleHi: e.target.value })} style={inp} />
              <button onClick={async () => { await createNotice(newNotice); const r = await getNotices(); setNotices(r.data); setNewNotice({ title: '', titleHi: '' }); }}
                style={{ background: '#c9973a', color: '#0f2a4a', border: 'none', borderRadius: 8, padding: '10px', width: '100%', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>📢 Post Notice</button>
            </div>
            {notices.map(n => (
              <div key={n._id} style={{ background: '#fff', borderRadius: 10, border: '0.5px solid var(--border)', padding: '12px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#0f2a4a' }}>{n.title}</div>
                  {n.titleHi && <div style={{ fontSize: 11, color: '#c9973a', marginTop: 2 }}>{n.titleHi}</div>}
                </div>
                <button onClick={async () => { await deleteNotice(n._id); setNotices(notices.filter(x => x._id !== n._id)); }}
                  style={{ background: '#fee2e2', color: '#b91c1c', border: 'none', borderRadius: 8, padding: '6px 12px', fontSize: 11, cursor: 'pointer' }}>Delete</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
