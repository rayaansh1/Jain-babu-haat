import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const navItems = [
  { path: '/', hi: 'होम', en: 'Home', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { path: '/about', hi: 'परिचय', en: 'About', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
  { path: '/shops', hi: 'दुकानें', en: 'Shops', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg> },
  { path: '/order', hi: 'ऑर्डर', en: 'Order', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> },
  { path: '/map', hi: 'नक्शा', en: 'Map', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg> },
];

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  if (location.pathname.startsWith('/admin')) return null;
  return (
    <nav style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100, background: '#fff', borderTop: '0.5px solid rgba(15,42,74,0.12)', display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', boxShadow: '0 -2px 16px rgba(15,42,74,0.08)', paddingBottom: 'env(safe-area-inset-bottom)' }}>
      {navItems.map(item => {
        const active = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
        return (
          <button key={item.path} onClick={() => navigate(item.path)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2, padding: '7px 4px 6px', background: 'none', border: 'none', cursor: 'pointer', color: active ? '#c9973a' : '#aaa', transition: 'color 0.2s' }}>
            {item.icon}
            <span style={{ fontSize: 8, fontWeight: active ? 700 : 400, fontFamily: "'Noto Sans Devanagari', sans-serif", lineHeight: 1.2, color: active ? '#0f2a4a' : '#aaa', textAlign: 'center' }}>
              {item.hi} · {item.en}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
