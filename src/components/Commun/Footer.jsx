import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
  FaArrowUp,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: t("nav.home", "Home"), path: "/" },
    { name: t("nav.about", "About"), path: "/about" },
    { name: t("nav.experience", "Experience"), path: "/experience" },
    { name: t("nav.projects", "Projects"), path: "/projects" },
    { name: t("nav.contact", "Contact"), path: "/contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="text-2xl" />,
      url: "https://github.com/chaimahamdaoui858-dev",
      color: "hover:text-gray-900 hover:bg-gray-100",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-2xl" />,
      url: "https://www.linkedin.com/in/chaima-hamdaoui",
      color: "hover:text-blue-600 hover:bg-blue-50",
    },
    {
      name: "Email",
      icon: <FaEnvelope className="text-2xl" />,
      url: "mailto:chaima.hamdaoui101@gmail.com",
      color: "hover:text-purple-600 hover:bg-purple-50",
    },
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-blue-600" />,
      text: "Sfax, Tunisia",
    },
    {
      icon: <FaPhone className="text-green-600" />,
      text: "+216 92 260 283",
    },
    {
      icon: <FaEnvelope className="text-purple-600" />,
      text: "chaima.hamdaoui101@gmail.com",
    },
  ];

  return (
    <footer className="theme-footer relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                CH
              </div>

              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Chaima HAMDAOUI
                </h3>
                <p className="text-sm theme-muted">
                  {t("footer.role", "Junior Full Stack / Mobile Developer")}
                </p>
              </div>
            </div>

            <p className="theme-muted mb-4 leading-relaxed">
              {t("footer.description", "Third-year Software Engineering and Information Systems student, passionate about web and mobile development. Looking for a final year internship to contribute to innovative software solutions.")}
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-xl theme-panel shadow-md flex items-center justify-center theme-muted transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold theme-text mb-4">
              {t("footer.quickLinks", "Quick Links")}
            </h3>

            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="theme-muted hover:text-blue-600 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold theme-text mb-4">{t("footer.contact", "Contact")}</h3>

            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 theme-muted"
                >
                  <span className="mt-1">{info.icon}</span>
                  <span className="text-sm">{info.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t theme-border my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 theme-muted text-sm">
            <span>{t("footer.rights", "© 2026 Chaima HAMDAOUI. All rights reserved.")}</span>
          </div>

          <div className="flex items-center gap-2 theme-muted text-sm">
            <span>{t("footer.madeWith", "Made with")}</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>React</span>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group z-40"
        aria-label="Back to top"
      >
        <FaArrowUp className="group-hover:animate-bounce" />
      </button>
    </footer>
  );
};

export default Footer;