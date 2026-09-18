import React from "react";
import {
  FaCode,
  FaMobile,
  FaServer,
  FaDatabase,
  FaTools,
  FaLanguage,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaBriefcase,
  FaReact,
  FaAngular,
  FaJava,
  FaPhp,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaChartBar,
  FaShieldAlt,
  FaKey,
  FaComments,
  FaMapMarkedAlt,
  FaExchangeAlt,
  FaUsers,
  FaBrain,
} from "react-icons/fa";
import {
  SiFlutter,
  SiSpringboot,
  SiLaravel,
  SiDotnet,
  SiMysql,
  SiPostman,
  SiIntellijidea,
  SiUnity,
  SiTalend,
  SiDart,
  SiFirebase,
} from "react-icons/si";
import { useTranslation } from "react-i18next";
import Reveal from "../Commun/Reveal.jsx";

// ─── Skills data: each item has icon + name + color ──────────────────
const skills = [
  {
    title: "Programming Languages",
    icon: <FaCode />,
    color: "from-blue-500 to-cyan-500",
    items: [
      { name: "Java", icon: <FaJava />, iconColor: "#E76F00" },
      { name: "C#", icon: <FaCode />, iconColor: "#68217A" },
      { name: "PHP", icon: <FaPhp />, iconColor: "#777BB4" },
      { name: "JavaScript", icon: <FaJsSquare />, iconColor: "#F7DF1E" },
      { name: "Dart", icon: <SiDart />, iconColor: "#0175C2" },
      { name: "SQL", icon: <FaDatabase />, iconColor: "#336791" },
      { name: "HTML", icon: <FaHtml5 />, iconColor: "#E34F26" },
      { name: "CSS", icon: <FaCss3Alt />, iconColor: "#1572B6" },
    ],
  },
  {
    title: "Web / Mobile Development",
    icon: <FaMobile />,
    color: "from-purple-500 to-pink-500",
    items: [
      { name: "Flutter", icon: <SiFlutter />, iconColor: "#02569B" },
      { name: "Spring Boot", icon: <SiSpringboot />, iconColor: "#6DB33F" },
      { name: "Laravel", icon: <SiLaravel />, iconColor: "#FF2D20" },
      { name: "Angular", icon: <FaAngular />, iconColor: "#DD0031" },
      { name: "React", icon: <FaReact />, iconColor: "#61DAFB" },
      { name: "ASP.NET", icon: <SiDotnet />, iconColor: "#512BD4" },
    ],
  },
  {
    title: "Backend & Integrations",
    icon: <FaShieldAlt />,
    color: "from-sky-500 to-blue-600",
    items: [
      { name: "REST API", icon: <FaExchangeAlt />, iconColor: "#0EA5E9" },
      { name: "JWT", icon: <FaKey />, iconColor: "#D63AFF" },
      { name: "Spring Security", icon: <FaShieldAlt />, iconColor: "#6DB33F" },
      { name: "WebSocket", icon: <FaComments />, iconColor: "#1E88E5" },
      { name: "Firebase", icon: <SiFirebase />, iconColor: "#FFCA28" },
      { name: "Google Maps", icon: <FaMapMarkedAlt />, iconColor: "#34A853" },
    ],
  },
  {
    title: "Databases",
    icon: <FaDatabase />,
    color: "from-green-500 to-teal-500",
    items: [
      { name: "MySQL", icon: <SiMysql />, iconColor: "#4479A1" },
      { name: "Oracle", icon: <FaDatabase />, iconColor: "#F80000" },
      { name: "PL/SQL", icon: <FaDatabase />, iconColor: "#E48E00" },
      { name: "SQL Server", icon: <FaServer />, iconColor: "#CC2927" },
    ],
  },
  {
    title: "Tools",
    icon: <FaTools />,
    color: "from-orange-500 to-red-500",
    items: [
      { name: "Git", icon: <FaGitAlt />, iconColor: "#F05032" },
      { name: "GitHub", icon: <FaGithub />, iconColor: "#181717" },
      { name: "Docker", icon: <FaDocker />, iconColor: "#2496ED" },
      { name: "Postman", icon: <SiPostman />, iconColor: "#FF6C37" },
      { name: "VS Code", icon: <FaCode />, iconColor: "#007ACC" },
      { name: "IntelliJ", icon: <SiIntellijidea />, iconColor: "#FE315D" },
    ],
  },
  {
    title: "BI, Cloud & AI",
    icon: <FaServer />,
    color: "from-indigo-500 to-purple-500",
    items: [
      { name: "Power BI", icon: <FaChartBar />, iconColor: "#F2C811" },
      { name: "Talend", icon: <SiTalend />, iconColor: "#1675BC" },
      { name: "AWS", icon: <FaAws />, iconColor: "#FF9900" },
      { name: "Deep Learning", icon: <FaBrain />, iconColor: "#7B4FFF" },
      { name: "Unity", icon: <SiUnity />, iconColor: "#222222" },
    ],
  },
  {
    title: "Languages",
    icon: <FaLanguage />,
    color: "from-pink-500 to-rose-500",
    items: [
      { name: "Arabic", icon: <FaLanguage />, iconColor: "#059669" },
      { name: "French", icon: <FaLanguage />, iconColor: "#2563EB" },
      { name: "English", icon: <FaLanguage />, iconColor: "#DC2626" },
    ],
  },
];

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 section-shell px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Header ────────────────────────────────────────────── */}
        <Reveal className="text-center mb-16">
          <span className="inline-block px-4 py-2 glass-card rounded-full text-sm font-semibold mb-4 text-blue-700">
            {t("about.badge", "About Me")}
          </span>

          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-display">
            {t("about.title", "Who Am I?")}
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t(
              "about.description",
              "I am Chaima Hamdaoui, a Junior Full Stack Developer, graduate in Software Engineering and Information Systems from the International Institute of Technology of Sfax. Passionate about web and mobile development, I enjoy designing modern applications that are useful and tailored to users' needs. I am particularly interested in Frontend and Backend development, as well as building innovative software solutions."
            )}
          </p>
        </Reveal>

        {/* ── Academic Profile Card ───────────────────────── */}
        <div className="max-w-4xl mx-auto mb-16">
          <Reveal className="glass-card-strong rounded-2xl p-8 border theme-border hover-float">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
                <FaGraduationCap />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {t("about.academic.title", "Academic Profile")}
                </h3>
                <p className="text-gray-600">
                  {t("about.academic.subtitle")}
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              {t("about.academic.desc")}
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <FaMapMarkerAlt className="text-blue-600" />
                <span>{t("about.academic.location", "Sfax, Tunisia")}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <FaBriefcase className="text-purple-600" />
                <span>{t("about.academic.internship", "Looking for a Job Opportunity")}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <FaCheckCircle className="text-green-600" />
                <span>{t("about.academic.role", "Junior Full Stack / Mobile Developer")}</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t theme-border border-gray-200/50">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-gray-300"></span>
                {t("about.interests.title", "Interests")}
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-3 rounded-xl border border-blue-100/50 dark:border-blue-900/20">
                {t(
                  "about.interests.text",
                  "Technology and programming | Painting | Sport | Competitions and challenges"
                )}
              </p>
            </div>
          </Reveal>
        </div>

        {/* ── Relevant Skills Banner ───────────────────────────── */}
        <Reveal className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 mb-10 text-white hover-float" delay={80}>
          <h3 className="text-3xl font-bold mb-6 text-center">
            {t("about.skills.title", "Relevant Skills")}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <div
                key={index}
                className="bg-white/15 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3"
              >
                <FaCheckCircle className="text-green-300 flex-shrink-0" />
                <span className="font-medium">{t(`about.skills.items.${index}`)}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── Soft Skills ──────────────────────────────────────── */}
        <Reveal className="glass-card-strong rounded-2xl p-8 mb-16 border theme-border hover-float" delay={100}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">
              <FaUsers />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {t("about.soft.title", "Soft Skills")}
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {[0, 1, 2, 3, 4].map((index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-xl text-sm font-medium text-gray-700 glass-card border theme-border"
              >
                {t(`about.soft.items.${index}`)}
              </span>
            ))}
          </div>
        </Reveal>

        {/* ═══════════════════════════════════════════════════════════
            TECHNICAL SKILLS — ICON CARDS
            ═══════════════════════════════════════════════════════════ */}
        <div>
          <Reveal className="text-center mb-12">
            <span className="inline-block px-4 py-2 glass-card rounded-full text-sm font-semibold mb-4 text-purple-700">
              {t("about.tech.badge", "Tech Stack")}
            </span>
            <h3 className="text-4xl font-bold mb-3 font-display">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {t("about.tech.title", "Technical Skills")}
              </span>
            </h3>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              {t("about.tech.subtitle")}
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((group, index) => (
              <Reveal
                key={index}
                className="glass-card rounded-2xl hover:shadow-2xl transition-all duration-500 overflow-hidden border theme-border group hover-float"
                delay={index * 80}
              >
                {/* ── Category header ──────────────────────────── */}
                <div
                  className={`bg-gradient-to-r ${group.color} p-5 text-white relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl text-2xl">
                      {group.icon}
                    </div>
                    <h4 className="text-xl font-bold">{group.title}</h4>
                  </div>
                </div>

                {/* ── Icon grid ────────────────────────────────── */}
                <div className="p-5">
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
                    {group.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="group/card relative flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl glass-card cursor-default
                                   hover:border-purple-200 hover:shadow-lg hover:shadow-purple-100/60
                                   transform hover:scale-108 hover:-translate-y-0.5
                                   transition-all duration-300 ease-out"
                      >
                        {/* Glow effect on hover */}
                        <div
                          className="absolute inset-0 rounded-xl opacity-0 group-hover/card:opacity-10 transition-opacity duration-300"
                          style={{ backgroundColor: item.iconColor }}
                        ></div>

                        {/* Icon */}
                        <span
                          className="relative z-10 text-3xl transition-all duration-300 group-hover/card:scale-110 group-hover/card:drop-shadow-lg"
                          style={{ color: item.iconColor }}
                        >
                          {item.icon}
                        </span>

                        {/* Name */}
                        <span className="relative z-10 text-[11px] font-semibold text-gray-500 group-hover/card:text-gray-800 transition-colors duration-300 text-center leading-tight whitespace-nowrap">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── CTA ────────────────────────────────────────────────── */}
        <Reveal className="mt-16 text-center" delay={120}>
          <a
            href="/projects"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover-float"
          >
            {t("about.viewProjects", "View My Projects")}
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default About;