import { createContext, useContext, useState, useEffect } from 'react';
import { adminLogin, getAdminProfile } from '../utils/api';
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = localStorage.getItem('adminToken');
    if (t) getAdminProfile().then(r => setAdmin(r.data)).catch(() => localStorage.removeItem('adminToken')).finally(() => setLoading(false));
    else setLoading(false);
  }, []);
  const login = async (email, password) => {
    const r = await adminLogin({ email, password });
    localStorage.setItem('adminToken', r.data.token);
    setAdmin(r.data); return r.data;
  };
  const logout = () => { localStorage.removeItem('adminToken'); setAdmin(null); };
  return <AuthContext.Provider value={{ admin, login, logout, loading }}>{children}</AuthContext.Provider>;
};
export const useAuth = () => useContext(AuthContext);
