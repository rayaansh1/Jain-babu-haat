import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import './i18n';
import './index.css';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import About from './pages/About';
import Shops from './pages/Shops';
import Order from './pages/Order';
import MapPage from './pages/MapPage';
import VillagePage from './pages/Village';
import AdminLogin from './pages/Admin/Login';
import AdminDashboard from './pages/Admin/Dashboard';

function Guard({ children }) {
  const { admin, loading } = useAuth();
  if (loading) return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7a7a7a' }}>Loading...</div>;
  return admin ? children : <Navigate to="/admin" replace />;
}

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/order" element={<Order />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/village/:slug" element={<VillagePage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Guard><AdminDashboard /></Guard>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <BottomNav />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
