import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import profileImage from "../../assets/jj.jpg";
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
} from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const token = localStorage.getItem("authToken");
  const user = JSON.parse(localStorage.getItem("user"));
  const isAuthenticated = token && user?.role === "admin";

  const navigation = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaUser /> },
    { name: "Experience", path: "/experience", icon: <FaBriefcase /> },
    { name: "Projects", path: "/projects", icon: <FaFolderOpen /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-black ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/80 backdrop-blur-sm shadow-md"
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
              <p className="text-xs text-gray-700">
                Software Engineering and Information Systems
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
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {!isAuthenticated && (
              <Link
                to="/login"
                className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition"
              >
                <FaSignInAlt />
                Sign In
              </Link>
            )}

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

          <div className="md:hidden">
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
        <div className="md:hidden bg-white border-t border-gray-100 text-black shadow-lg">
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
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              );
            })}

            {!isAuthenticated ? (
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50"
              >
                <FaSignInAlt />
                Sign In
              </Link>
            ) : (
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