import { useParams, useNavigate } from 'react-router-dom';

const villagesData = {
  'hindnagar-hijrar': {
    name: 'Hindnagar (Hijrar)', hi: 'हिन्दनगर (हिजरार)',
    dist: '~0.5 km', lat: 24.9291, lng: 86.9630,
    population: '~2,000', panchayat: 'Khariyara', block: 'Barahat',
    desc: 'The closest village to Jain Babu Haat. Hindnagar Hijrar is the primary catchment area for the market. Most permanent shop customers come from this village.',
    descHi: 'जैन बाबू हाट के सबसे नज़दीक का गाँव। हिन्दनगर हिजरार हाट का प्राथमिक क्षेत्र है। अधिकांश स्थायी दुकानों के ग्राहक इसी गाँव से आते हैं।',
    nearbyPlaces: [
      { name: 'Jain Babu Haat', dist: '0.5 km', type: 'Market · बाज़ार' },
      { name: 'Shardaram Industries (Rice Mill)', dist: '0.3 km', type: 'Industry · उद्योग' },
      { name: 'Khariyara Panchayat Office', dist: '1.5 km', type: 'Government · सरकारी' },
    ],
    howToReach: 'Direct road from Ajit Nagar Path. From Banka town, take auto towards Hindnagar Hijrar More.',
    howToReachHi: 'अजीत नगर पथ से सीधा रास्ता। बांका शहर से हिन्दनगर हिजरार मोड़ की ओर ऑटो लें।',
  },
  'khariyara': {
    name: 'Khariyara', hi: 'खरियारा',
    dist: '~1.5 km', lat: 24.9267, lng: 86.9484,
    population: '~1,800', panchayat: 'Khariyara', block: 'Barahat',
    desc: 'Khariyara serves as the Panchayat headquarters for the surrounding area. Located about 1.5 km from the haat, it is one of the major villages served by Jain Babu Haat.',
    descHi: 'खरियारा आसपास के क्षेत्र का पंचायत मुख्यालय है। हाट से लगभग 1.5 किमी दूर, यह जैन बाबू हाट द्वारा सेवित प्रमुख गाँवों में से एक है।',
    nearbyPlaces: [
      { name: 'Jain Babu Haat', dist: '1.5 km', type: 'Market · बाज़ार' },
      { name: 'Khariyara Gram Panchayat', dist: '0.2 km', type: 'Government · सरकारी' },
      { name: 'Primary School Khariyara', dist: '0.5 km', type: 'Education · शिक्षा' },
    ],
    howToReach: 'From Jain Babu Haat via Ajit Nagar Path, turn towards Khariyara. About 15 minutes walk.',
    howToReachHi: 'जैन बाबू हाट से अजीत नगर पथ पर खरियारा की ओर मुड़ें। लगभग 15 मिनट की पैदल दूरी।',
  },
  'shitalpur': {
    name: 'Shitalpur', hi: 'शीतलपुर',
    dist: '~0.8 km', lat: 24.9283, lng: 86.9748,
    population: '~1,200', panchayat: 'Khariyara', block: 'Barahat',
    desc: 'Shitalpur is a nearby village well connected to Jain Babu Haat. Many vendors from Shitalpur participate in the weekly haat on Tuesday and Saturday.',
    descHi: 'शीतलपुर जैन बाबू हाट से अच्छी तरह जुड़ा हुआ पास का गाँव है। शीतलपुर के कई विक्रेता मंगलवार और शनिवार के साप्ताहिक हाट में भाग लेते हैं।',
    nearbyPlaces: [
      { name: 'Jain Babu Haat', dist: '0.8 km', type: 'Market · बाज़ार' },
      { name: 'Shardaram Rice Mill', dist: '1 km', type: 'Industry · उद्योग' },
    ],
    howToReach: 'Short walk from Jain Babu Haat via the main road.',
    howToReachHi: 'मुख्य सड़क से जैन बाबू हाट से थोड़ी दूर पैदल।',
  },
  'durgapur': {
    name: 'Durgapur', hi: 'दुर्गापुर',
    dist: '~1.8 km', lat: 24.9370, lng: 86.9754,
    population: '~1,500', panchayat: 'Khariyara', block: 'Barahat',
    desc: 'Durgapur lies to the north of Jain Babu Haat. Residents of Durgapur regularly visit the haat for weekly shopping and daily essentials from the permanent shops.',
    descHi: 'दुर्गापुर जैन बाबू हाट के उत्तर में स्थित है। दुर्गापुर के निवासी साप्ताहिक खरीदारी और स्थायी दुकानों से रोज़मर्रा की ज़रूरतों के लिए नियमित रूप से हाट आते हैं।',
    nearbyPlaces: [
      { name: 'Jain Babu Haat', dist: '1.8 km', type: 'Market · बाज़ार' },
      { name: 'Louni Village', dist: '0.5 km', type: 'Village · गाँव' },
    ],
    howToReach: 'Via Ajit Nagar Path, heading north from Hindnagar.',
    howToReachHi: 'हिन्दनगर से उत्तर की ओर अजीत नगर पथ से।',
  },
  'louni': {
    name: 'Louni', hi: 'लौनी',
    dist: '~1.9 km', lat: 24.9391, lng: 86.9689,
    population: '~1,100', panchayat: 'Khariyara', block: 'Barahat',
    desc: 'Louni is connected to Jain Babu Haat via Ajit Nagar Path. The village residents benefit from the haat for agricultural supplies and fresh produce every week.',
    descHi: 'लौनी अजीत नगर पथ से जैन बाबू हाट से जुड़ा हुआ है। गाँव के निवासियों को हर सप्ताह कृषि सामग्री और ताज़े उत्पादों के लिए हाट से लाभ मिलता है।',
    nearbyPlaces: [
      { name: 'Jain Babu Haat', dist: '1.9 km', type: 'Market · बाज़ार' },
      { name: 'Durgapur Village', dist: '0.5 km', type: 'Village · गाँव' },
    ],
    howToReach: 'From Jain Babu Haat, take Ajit Nagar Path heading northwest.',
    howToReachHi: 'जैन बाबू हाट से अजीत नगर पथ पर उत्तर-पश्चिम दिशा में।',
  },
  'mirjapur': {
    name: 'Mirjapur', hi: 'मिर्जापुर',
    dist: '~2.1 km', lat: 24.9302, lng: 86.9845,
    population: '~1,300', panchayat: 'Khariyara', block: 'Barahat',
    desc: 'Mirjapur is the easternmost village in the delivery zone of Jain Babu Haat. Located about 2 km east, it is well served by the weekly haat and delivery services.',
    descHi: 'मिर्जापुर जैन बाबू हाट की डिलीवरी ज़ोन में सबसे पूर्वी गाँव है। लगभग 2 किमी पूर्व में स्थित, यह साप्ताहिक हाट और डिलीवरी सेवाओं द्वारा अच्छी तरह सेवित है।',
    nearbyPlaces: [
      { name: 'Jain Babu Haat', dist: '2.1 km', type: 'Market · बाज़ार' },
      { name: 'Barahat Police Station', dist: '4 km', type: 'Police · पुलिस' },
    ],
    howToReach: 'From Jain Babu Haat, head east via main road towards Mirjapur.',
    howToReachHi: 'जैन बाबू हाट से मुख्य सड़क पर पूर्व दिशा में मिर्जापुर की ओर।',
  },
};

export default function VillagePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const village = villagesData[slug];

  if (!village) return (
    <div style={{ padding: 24, textAlign: 'center' }}>
      <p style={{ color: '#6a6a6a' }}>Village not found</p>
      <button onClick={() => navigate('/map')} style={{ marginTop: 12, background: '#0f2a4a', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 20px', cursor: 'pointer' }}>← Back to Map</button>
    </div>
  );

  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ background: '#0f2a4a', padding: '18px 16px 22px' }}>
        <button onClick={() => navigate('/map')} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'rgba(255,255,255,0.7)', borderRadius: 8, padding: '5px 12px', fontSize: 11, cursor: 'pointer', marginBottom: 12 }}>← Back to Map</button>
        <div style={{ width: 32, height: 2, background: '#c9973a', marginBottom: 8 }} />
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 700, color: '#fff' }}>{village.name}</h1>
        <p style={{ fontSize: 13, color: '#e8b85c', marginTop: 3 }}>{village.hi}</p>
      </div>

      {/* Photo placeholder */}
      <div style={{ margin: '12px 12px 0', height: 180, background: 'rgba(15,42,74,0.06)', borderRadius: 14, border: '0.5px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 6 }}>
        <div style={{ fontSize: 40 }}>🏘️</div>
        <div style={{ fontSize: 12, color: '#7a7a7a' }}>Village photo coming soon · फोटो जल्द</div>
      </div>

      {/* Key stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, padding: '12px 12px 0' }}>
        {[
          { label: 'Distance · दूरी', value: village.dist },
          { label: 'Population · जनसंख्या', value: village.population },
          { label: 'Block · ब्लॉक', value: village.block },
        ].map((s, i) => (
          <div key={i} style={{ background: '#fff', borderRadius: 10, border: '0.5px solid var(--border)', padding: '10px 8px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 13, fontWeight: 700, color: '#0f2a4a' }}>{s.value}</div>
            <div style={{ fontSize: 9, color: '#7a7a7a', marginTop: 2, lineHeight: 1.3 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* About village */}
      <div className="sec-card" style={{ margin: '12px' }}>
        <div style={{ padding: '16px 18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <div style={{ width: 3, height: 16, background: '#c9973a', borderRadius: 2 }} />
            <div style={{ fontSize: 11, fontWeight: 700, color: '#0f2a4a' }}>About Village · गाँव के बारे में</div>
          </div>
          <p style={{ fontSize: 12, color: '#3a3a3a', lineHeight: 1.8, marginBottom: 10 }}>{village.desc}</p>
          <p style={{ fontSize: 12, color: '#6a6a6a', lineHeight: 1.8 }}>{village.descHi}</p>
        </div>
      </div>

      {/* Nearby places */}
      <div className="sec-card" style={{ margin: '0 12px 12px' }}>
        <div className="sec-head">
          <div className="sec-stripe" />
          <div>
            <div className="sec-head-label">Nearby Places · आसपास के स्थान</div>
          </div>
        </div>
        <div style={{ padding: '14px 18px' }}>
          {village.nearbyPlaces.map((place, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 12, marginBottom: 12, borderBottom: i < village.nearbyPlaces.length - 1 ? '0.5px solid var(--border)' : 'none' }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: '#0f2a4a' }}>{place.name}</div>
                <div style={{ fontSize: 10, color: '#7a7a7a', marginTop: 2 }}>{place.type}</div>
              </div>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#c9973a', flexShrink: 0 }}>{place.dist}</span>
            </div>
          ))}
        </div>
      </div>

      {/* How to reach */}
      <div className="sec-card" style={{ margin: '0 12px 12px' }}>
        <div className="sec-head">
          <div className="sec-stripe" />
          <div>
            <div className="sec-head-label">How to Reach · कैसे पहुँचें</div>
          </div>
        </div>
        <div style={{ padding: '14px 18px' }}>
          <p style={{ fontSize: 12, color: '#3a3a3a', lineHeight: 1.8, marginBottom: 8 }}>{village.howToReach}</p>
          <p style={{ fontSize: 12, color: '#6a6a6a', lineHeight: 1.8 }}>{village.howToReachHi}</p>
          <a href={`https://www.google.com/maps/dir/24.9266,86.9688/${village.lat},${village.lng}`} target="_blank" rel="noreferrer"
            style={{ display: 'block', marginTop: 14, background: '#0f2a4a', color: '#fff', borderRadius: 10, padding: '11px', textAlign: 'center', fontSize: 12, fontWeight: 600 }}>
            🗺️ Get Directions · दिशा-निर्देश पाएं
          </a>
        </div>
      </div>

      <div className="bottom-spacer" />
    </div>
  );
}
