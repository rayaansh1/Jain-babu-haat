import { useTranslation } from 'react-i18next';
export default function LangToggle({ dark = false }) {
  const { i18n } = useTranslation();
  const isHi = i18n.language === 'hi';
  return (
    <button onClick={() => i18n.changeLanguage(isHi ? 'en' : 'hi')} style={{ background: dark ? 'rgba(255,255,255,0.12)' : 'rgba(15,42,74,0.07)', border: `1px solid ${dark ? 'rgba(201,151,58,0.4)' : 'rgba(15,42,74,0.15)'}`, borderRadius: 20, padding: '4px 14px', cursor: 'pointer', fontSize: 11, fontWeight: 700, fontFamily: "'Noto Sans Devanagari',sans-serif", color: dark ? '#e8b85c' : '#0f2a4a', transition: 'all 0.2s' }}>
      {isHi ? 'EN' : 'हिं'}
    </button>
  );
}
