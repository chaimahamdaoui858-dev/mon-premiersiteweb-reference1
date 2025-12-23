import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaBars, FaTimes, FaHome, FaUser, FaBriefcase,
  FaFolderOpen, FaEnvelope, FaSignInAlt, FaSignOutAlt, FaUserShield
} from "react-icons/fa";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  const user = JSON.parse(localStorage.getItem("user"));
  const isAuthenticated = token && user?.role === 'admin';
  const navigation = [
    { name: "Accueil", path: "/", icon: <FaHome /> },
    { name: "À propos", path: "/about", icon: <FaUser /> },
    { name: "Expérience", path: "/experience", icon: <FaBriefcase /> },
    { name: "Projets", path: "/projects", icon: <FaFolderOpen /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate("/", { replace: true });
  };
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-black ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/80 backdrop-blur-sm shadow-md"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-gray-200 group-hover:ring-black transition">
              <img src="assets/jj.jpg" alt="chaima hamdaoui" className="w-full h-full object-cover" />
            </div>
            <div className="hidden lg:block">
              <span className="text-xl font-bold text-black">
                Chaima Hamdaoui
              </span>
              <p className="text-xs text-gray-700">Développeuse Full Stack</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition ${location.pathname === item.path ? "text-white bg-black" : "text-black hover:text-gray-800"}`}
              >
                <span className="relative flex items-center gap-2">{item.icon}{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Right Section Desktop */}
          <div className="hidden md:flex items-center gap-3">
            {!isAuthenticated && (
              <Link to="/login" className="flex items-center gap-2 px-4 py-2 border border-black text-black rounded-xl font-semibold hover:bg-gray-100 transition">
                Se connecter
              </Link>
            )}
            {isAuthenticated && (
              <>
                <Link to="/admin" className="px-4 py-2 bg-black text-white rounded-xl font-semibold">
                  Admin
                </Link>
                <button onClick={logout} className="px-4 py-2 bg-black text-white rounded-xl">
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-xl text-black hover:bg-gray-100">
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t text-black">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100"
              >
                {item.icon}{item.name}
              </Link>
            ))}

            {!isAuthenticated ? (
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 border border-black text-black rounded-xl font-semibold hover:bg-gray-100"
              >
                <FaSignInAlt /> Se connecter
              </Link>
            ) : (
              <>
                <Link
                  to="/admin"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-black text-white rounded-xl font-semibold"
                >
                  <FaUserShield /> Admin
                </Link>
                <button
                  onClick={logout}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-red-500 text-red-500 rounded-xl font-semibold"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
