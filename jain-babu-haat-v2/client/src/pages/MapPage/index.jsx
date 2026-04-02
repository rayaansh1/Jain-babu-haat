import { useNavigate } from 'react-router-dom';
import LangToggle from '../../components/LangToggle';

const villages = [
  { slug: 'hindnagar-hijrar', name: 'Hindnagar (Hijrar)', hi: 'हिन्दनगर (हिजरार)', dist: '~0.5 km', lat: 24.9291, lng: 86.9630 },
  { slug: 'shitalpur', name: 'Shitalpur', hi: 'शीतलपुर', dist: '~0.8 km', lat: 24.9283, lng: 86.9748 },
  { slug: 'khariyara', name: 'Khariyara', hi: 'खरियारा', dist: '~1.5 km', lat: 24.9267, lng: 86.9484 },
  { slug: 'durgapur', name: 'Durgapur', hi: 'दुर्गापुर', dist: '~1.8 km', lat: 24.9370, lng: 86.9754 },
  { slug: 'louni', name: 'Louni', hi: 'लौनी', dist: '~1.9 km', lat: 24.9391, lng: 86.9689 },
  { slug: 'mirjapur', name: 'Mirjapur', hi: 'मिर्जापुर', dist: '~2.1 km', lat: 24.9302, lng: 86.9845 },
];

const landmarks = [
  { name: 'Shardaram Industries', hi: 'शारदाराम इंडस्ट्रीज (राइस मिल)', icon: '🏭', dist: '~0.3 km', detail: 'Rice Mill near the haat' },
  { name: 'Barahat Police Station', hi: 'बाराहट थाना', icon: '🚔', dist: '~6 km', detail: 'Nearest police station' },
  { name: 'Punsia Railway Station', hi: 'पुनसिया रेलवे स्टेशन', icon: '🚂', dist: '~6 km', detail: 'Nearest railway station' },
  { name: 'District Court Banka', hi: 'जिला न्यायालय बांका', icon: '⚖️', dist: '~12 km', detail: 'District headquarters' },
];

export default function MapPage() {
  const navigate = useNavigate();

  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      <div className="page-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div className="gold-bar" />
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 700, color: '#fff' }}>Location &amp; Nearby</h1>
            <p style={{ fontSize: 12, color: '#e8b85c', marginTop: 3 }}>स्थान और आसपास</p>
          </div>
          <LangToggle dark />
        </div>
      </div>

      {/* Map embed */}
      <div style={{ margin: 12, borderRadius: 14, overflow: 'hidden', border: '0.5px solid var(--border)', height: 200 }}>
        <iframe title="Jain Babu Haat" src={`https://maps.google.com/maps?q=24.9266,86.9688&z=15&output=embed`} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" />
      </div>

      {/* Address */}
      <div style={{ margin: '0 12px 12px', background: '#fff', borderRadius: 12, border: '0.5px solid var(--border)', padding: '14px 18px' }}>
        <div style={{ fontSize: 9, color: '#c9973a', fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 8 }}>Official Address · आधिकारिक पता</div>
        <p style={{ fontSize: 12, color: '#4a4a4a', lineHeight: 2 }}>
          Jain Babu Haat, Ravi Complex<br/>
          Village: Hindnagar Hijrar · ग्राम: हिन्दनगर हिजरार<br/>
          Panchayat: Khariyara · Block: Barahat<br/>
          District: Banka, Bihar — PIN 813109<br/>
          Road: Ajit Nagar Path
        </p>
        <a href="https://maps.google.com/?q=24.9266,86.9688" target="_blank" rel="noreferrer"
          style={{ display: 'inline-block', marginTop: 10, background: '#0f2a4a', color: '#fff', borderRadius: 8, padding: '8px 16px', fontSize: 11, fontWeight: 600 }}>
          Open in Google Maps →
        </a>
      </div>

      {/* Villages - clickable */}
      <div style={{ padding: '0 12px' }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#0f2a4a', marginBottom: 8 }}>
          आसपास के गाँव · Nearby Villages &nbsp;
          <span style={{ fontSize: 9, color: '#7a7a7a', fontWeight: 400 }}>— tap to explore · टैप करें</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 12 }}>
          {villages.map(v => (
            <div key={v.slug} onClick={() => navigate(`/village/${v.slug}`)}
              style={{ background: '#fff', border: '0.5px solid var(--border)', borderRadius: 12, padding: '12px', cursor: 'pointer', display: 'flex', gap: 10, alignItems: 'center', transition: 'border-color 0.2s' }}>
              <div style={{ width: 44, height: 44, background: 'rgba(15,42,74,0.06)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>🏘️</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: '#0f2a4a', lineHeight: 1.2 }}>{v.name}</div>
                <div style={{ fontSize: 10, color: '#c9973a', marginTop: 1 }}>{v.hi}</div>
                <div style={{ fontSize: 9, color: '#7a7a7a', marginTop: 2 }}>{v.dist} from haat</div>
              </div>
              <span style={{ color: '#c9973a', fontSize: 14, flexShrink: 0 }}>›</span>
            </div>
          ))}
        </div>
      </div>

      {/* How to reach */}
      <div className="sec-card" style={{ margin: '0 12px 12px' }}>
        <div className="sec-head">
          <div className="sec-stripe" />
          <div>
            <div className="sec-head-label">कैसे पहुँचें · How to Reach</div>
          </div>
        </div>
        <div style={{ padding: '14px 18px' }}>
          {[
            { icon: '🏙️', en: 'From Banka Town', hi: 'बांका शहर से', detail: '7 km via Ajit Nagar Path' },
            { icon: '🚂', en: 'From Punsia Station', hi: 'पुनसिया स्टेशन से', detail: '6 km — nearest railway station' },
            { icon: '🚌', en: 'Bus Stop', hi: 'बस स्टॉप', detail: 'Dhakamore — 7 km' },
            { icon: '🛺', en: 'Auto Route', hi: 'ऑटो मार्ग', detail: 'Hindnagar Hijrar More → Jhummak → Mahavir Chowk' },
            { icon: '🛣️', en: 'Road', hi: 'सड़क', detail: 'Ajit Nagar Path' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', paddingBottom: i < 4 ? 12 : 0, marginBottom: i < 4 ? 12 : 0, borderBottom: i < 4 ? '0.5px solid var(--border)' : 'none' }}>
              <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: '#0f2a4a' }}>{item.en} · <span style={{ fontWeight: 400, color: '#6a6a6a' }}>{item.hi}</span></div>
                <div style={{ fontSize: 11, color: '#7a7a7a', marginTop: 2 }}>{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Landmarks */}
      <div className="sec-card" style={{ margin: '0 12px 12px' }}>
        <div className="sec-head">
          <div className="sec-stripe" />
          <div>
            <div className="sec-head-label">प्रमुख स्थान · Key Landmarks</div>
          </div>
        </div>
        <div style={{ padding: '14px 18px' }}>
          {landmarks.map((l, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', paddingBottom: i < landmarks.length - 1 ? 12 : 0, marginBottom: i < landmarks.length - 1 ? 12 : 0, borderBottom: i < landmarks.length - 1 ? '0.5px solid var(--border)' : 'none' }}>
              <span style={{ fontSize: 22, flexShrink: 0 }}>{l.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: '#0f2a4a' }}>{l.name}</div>
                <div style={{ fontSize: 10, color: '#6a6a6a', marginTop: 1 }}>{l.hi}</div>
              </div>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#c9973a', flexShrink: 0 }}>{l.dist}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bottom-spacer" />
    </div>
  );
}
