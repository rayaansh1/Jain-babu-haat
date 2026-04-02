import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function AdminLogin() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true); setError('');
    try { await login(form.email, form.password); navigate('/admin/dashboard'); }
    catch { setError('Invalid email or password · गलत ईमेल या पासवर्ड'); }
    finally { setLoading(false); }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0f2a4a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ marginBottom: 24, textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, color: '#fff' }}>Jain Babu Haat</h1>
        <p style={{ fontSize: 13, color: '#c9973a', marginTop: 4 }}>Admin Panel · एडमिन पैनल</p>
      </div>
      <div style={{ background: '#fff', borderRadius: 16, padding: 24, width: '100%', maxWidth: 360 }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, color: '#0f2a4a', marginBottom: 20 }}>Sign In · लॉगिन</h2>
        {error && <div style={{ background: '#fee2e2', color: '#b91c1c', borderRadius: 8, padding: '10px 14px', fontSize: 12, marginBottom: 16 }}>{error}</div>}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div>
            <label style={{ fontSize: 11, fontWeight: 600, color: '#0f2a4a', display: 'block', marginBottom: 5 }}>Email</label>
            <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="admin@jainbabuhaat.com" required style={{ width: '100%', padding: '10px 14px', border: '0.5px solid var(--border)', borderRadius: 8, fontSize: 13, outline: 'none' }} />
          </div>
          <div>
            <label style={{ fontSize: 11, fontWeight: 600, color: '#0f2a4a', display: 'block', marginBottom: 5 }}>Password · पासवर्ड</label>
            <input type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} placeholder="••••••••" required style={{ width: '100%', padding: '10px 14px', border: '0.5px solid var(--border)', borderRadius: 8, fontSize: 13, outline: 'none' }} />
          </div>
          <button type="submit" disabled={loading} style={{ background: '#0f2a4a', color: '#fff', border: 'none', borderRadius: 10, padding: 13, fontSize: 14, fontWeight: 600, cursor: 'pointer', opacity: loading ? 0.7 : 1, marginTop: 4 }}>
            {loading ? 'Signing in...' : 'Sign In →'}
          </button>
        </form>
      </div>
    </div>
  );
}
