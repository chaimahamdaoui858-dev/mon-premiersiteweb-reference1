import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import profileImage from "../../assets/photochaima.png";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaBriefcase,
  FaFolderOpen,
  FaEnvelope,
  FaSignInAlt,
  FaSignOutAlt,
  FaUserShield,
  FaGlobe,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext.jsx";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const location = useLocation();
  const navigate = useNavigate();

  const token = localStorage.getItem("authToken");
  const user = JSON.parse(localStorage.getItem("user"));
  const isAuthenticated = token && user?.role === "admin";

  const navigation = [
    { name: t("navbar.home"), path: "/", icon: <FaHome /> },
    { name: t("navbar.about"), path: "/about", icon: <FaUser /> },
    { name: t("navbar.experience"), path: "/experience", icon: <FaBriefcase /> },
    { name: t("navbar.projects"), path: "/projects", icon: <FaFolderOpen /> },
    { name: t("navbar.contact"), path: "/contact", icon: <FaEnvelope /> },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate("/", { replace: true });
    setIsMobileMenuOpen(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "theme-surface-scrolled backdrop-blur-md shadow-lg"
          : "theme-surface backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-blue-200 group-hover:ring-purple-500 transition bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
              <img
                src={profileImage}
                alt="Chaima Hamdaoui"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="hidden lg:block">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Chaima Hamdaoui
              </span>
              <p className="text-xs theme-muted">
                {t("hero.title")}
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition flex items-center gap-2 ${
                    isActive
                      ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md"
                      : isDark
                        ? "text-slate-200 hover:text-white hover:bg-slate-800/60"
                        : "theme-muted hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative group">
              <button className={`flex items-center gap-2 px-3 py-2 rounded-xl transition font-medium ${
                isDark ? "text-slate-200 hover:bg-slate-800/60" : "theme-muted hover:bg-blue-50"
              }`}>
                <FaGlobe className="text-blue-600" />
                {i18n.language?.toUpperCase().substring(0, 2) || "EN"}
              </button>
              <div className="absolute right-0 mt-2 w-32 theme-panel rounded-xl shadow-xl border theme-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                <button
                  onClick={() => changeLanguage("en")}
                  className={`w-full text-left px-4 py-3 text-sm transition ${
                    i18n.language?.startsWith("en")
                      ? "text-blue-600 font-bold bg-blue-50/50"
                      : isDark
                        ? "text-slate-200 hover:bg-slate-800/60"
                        : "theme-muted hover:bg-blue-50"
                  }`}
                >
                  🇬🇧 English
                </button>
                <button
                  onClick={() => changeLanguage("fr")}
                  className={`w-full text-left px-4 py-3 text-sm transition ${
                    i18n.language?.startsWith("fr")
                      ? "text-blue-600 font-bold bg-blue-50/50"
                      : isDark
                        ? "text-slate-200 hover:bg-slate-800/60"
                        : "theme-muted hover:bg-blue-50"
                  }`}
                >
                  🇫🇷 Français
                </button>
              </div>
            </div>

            <button
              onClick={toggleTheme}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl transition font-medium ${
                isDark ? "text-slate-200 hover:bg-slate-800/60" : "theme-muted hover:bg-blue-50"
              }`}
              aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
            >
              {isDark ? <FaSun className="text-amber-400" /> : <FaMoon className="text-blue-600" />}
              {isDark ? "Clair" : "Sombre"}
            </button>

            {isAuthenticated && (
              <>
                <Link
                  to="/admin"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition"
                >
                  <FaUserShield />
                  Admin
                </Link>

                <button
                  onClick={logout}
                  className="flex items-center gap-2 px-4 py-2 border border-red-500 text-red-500 rounded-xl font-semibold hover:bg-red-50 transition"
                >
                  <FaSignOutAlt />
                  Logout
                </button>
              </>
            )}
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => changeLanguage(i18n.language?.startsWith("en") ? "fr" : "en")}
              className={`p-2 rounded-xl font-bold ${
                isDark ? "text-slate-200 hover:bg-slate-800/60" : "theme-muted hover:bg-blue-50"
              }`}
            >
              {i18n.language?.startsWith("en") ? "FR" : "EN"}
            </button>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl ${
                isDark ? "text-amber-400 hover:bg-slate-800/60" : "text-blue-600 hover:bg-blue-50"
              }`}
              aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
            >
              {isDark ? <FaSun className="text-2xl" /> : <FaMoon className="text-2xl" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-blue-600 hover:bg-blue-50 transition"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden theme-panel border-t shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : isDark
                        ? "text-slate-200 hover:bg-slate-800/60 hover:text-white"
                        : "theme-muted hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              );
            })}

            {isAuthenticated && (
              <>
                <Link
                  to="/admin"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold"
                >
                  <FaUserShield />
                  Admin
                </Link>

                <button
                  onClick={logout}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-red-500 text-red-500 rounded-xl font-semibold hover:bg-red-50"
                >
                  <FaSignOutAlt />
                  Logout
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