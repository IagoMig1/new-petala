import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation, Link } from 'react-router-dom';
import { getUser } from '../utils/supabase';
import { LayoutDashboard, FileText, LogOut } from 'lucide-react';
const AdminLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const checkAuth = async () => {
      const user = await getUser();
      setIsAuthenticated(!!user);
      // If not authenticated and not on login page, redirect to login
      if (!user && location.pathname !== '/admin') {
        navigate('/admin');
      }
    };
    checkAuth();
  }, [navigate, location.pathname]);
  // Show loading state while checking auth
  if (isAuthenticated === null) {
    return <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
      </div>;
  }
  // If on login page, just render the login component
  if (location.pathname === '/admin') {
    return <Outlet />;
  }
  return <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Pétala Lacerda
            </span>
          </Link>
          <p className="mt-1 text-sm text-gray-500">Painel Administrativo</p>
        </div>
        <nav className="mt-4">
          <Link to="/admin/dashboard" className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${location.pathname === '/admin/dashboard' ? 'bg-gray-100 border-l-4 border-pink-500' : ''}`}>
            <LayoutDashboard size={20} className="mr-3" />
            Dashboard
          </Link>
          <Link to="/admin/editor" className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${location.pathname === '/admin/editor' ? 'bg-gray-100 border-l-4 border-pink-500' : ''}`}>
            <FileText size={20} className="mr-3" />
            Novo Post
          </Link>
          <button onClick={() => {
          // Handle logout here
          navigate('/admin');
        }} className="w-full flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
            <LogOut size={20} className="mr-3" />
            Sair
          </button>
        </nav>
      </div>
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>;
};
export default AdminLayout;