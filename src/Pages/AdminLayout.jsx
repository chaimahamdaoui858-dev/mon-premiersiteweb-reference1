import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import {
  FaHome, FaUsers, FaChartBar, FaCog,
  FaSignOutAlt, FaFolderOpen, FaBars, FaTimes
} from 'react-icons/fa';
import { useState } from 'react';

export default function AdminLayout() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login', { replace: true });
  };

  const menuItems = [
    { path: '/admin', icon: <FaHome />, label: 'Dashboard', end: true },
    { path: '/admin/projects', icon: <FaFolderOpen />, label: 'Projets', badge: '🆕' },
    { path: '/admin/users', icon: <FaUsers />, label: 'Utilisateurs' },
    { path: '/admin/analytics', icon: <FaChartBar />, label: 'Statistiques' },
    { path: '/admin/settings', icon: <FaCog />, label: 'Paramètres' },
  ];

  return (
    <div className="min-h-screen flex section-shell">

      {/* Sidebar Desktop */}
      <aside className="hidden lg:flex w-64 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white flex-col shadow-2xl">

        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-lg">
              CH
            </div>
            <div>
              <h2 className="text-xl font-bold">Admin Panel</h2>
              <p className="text-xs text-gray-400">Gestion du portfolio</p>
            </div>
          </div>

          {user && (
            <div className="mt-3 p-2 bg-white/10 rounded-lg">
              <p className="text-sm text-gray-300">
                👋 Bienvenue <span className="font-semibold text-white">{user.email}</span>
              </p>
            </div>
          )}
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                ${isActive
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'}`
              }
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
              {item.badge && <span className="ml-auto text-xs">{item.badge}</span>}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition font-medium"
          >
            <FaSignOutAlt />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-4 lg:p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
