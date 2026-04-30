import React, { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaDatabase,
  FaMobile,
  FaLaptopCode,
  FaGamepad,
  FaServer,
  FaGlobe,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaImages,
} from "react-icons/fa";
import Reveal from "../Commun/Reveal.jsx";

import { useTranslation } from "react-i18next";

// ── Leave Management demo images ─────────────────────────────────────
import leave1 from "../../assets/leave/leave_1.png";
import leave2 from "../../assets/leave/leave_2.png";
import leave3 from "../../assets/leave/leave_3.png";
import leave4 from "../../assets/leave/leave_4.png";
import leave5 from "../../assets/leave/leave_5.png";
import leave6 from "../../assets/leave/leave_6.png";
import leave7 from "../../assets/leave/leave_7.png";
import leave8 from "../../assets/leave/leave_8.png";
import leave9 from "../../assets/leave/leave_9.png";
import leave10 from "../../assets/leave/leave_10.png";
import leave11 from "../../assets/leave/leave_11.png";
import leave12 from "../../assets/leave/leave_12.png";
import leave13 from "../../assets/leave/leave_13.png";
import leave14 from "../../assets/leave/leave_14.png";
import leave15 from "../../assets/leave/leave_15.png";
import leave16 from "../../assets/leave/leave_16.png";

const leaveDemoImages = [
  { src: leave1, label: "Leave Management View 1" },
  { src: leave2, label: "Leave Management View 2" },
  { src: leave3, label: "Leave Management View 3" },
  { src: leave4, label: "Leave Management View 4" },
  { src: leave5, label: "Leave Management View 5" },
  { src: leave6, label: "Leave Management View 6" },
  { src: leave7, label: "Leave Management View 7" },
  { src: leave8, label: "Leave Management View 8" },
  { src: leave9, label: "Leave Management View 9" },
  { src: leave10, label: "Leave Management View 10" },
  { src: leave11, label: "Leave Management View 11" },
  { src: leave12, label: "Leave Management View 12" },
  { src: leave13, label: "Leave Management View 13" },
  { src: leave14, label: "Leave Management View 14" },
  { src: leave15, label: "Leave Management View 15" },
  { src: leave16, label: "Leave Management View 16" },
];

// ── Study With Me demo images ────────────────────────────────────────
import studyImg1 from "../../assets/study/Capture d'écran 2025-12-07 000835.png";
import studyImg2 from "../../assets/study/Capture d'écran 2025-12-07 000855.png";
import studyImg3 from "../../assets/study/Capture d'écran 2025-12-07 001000.png";
import studyImg4 from "../../assets/study/Capture d'écran 2025-12-07 122903.png";
import studyImg5 from "../../assets/study/Capture d'écran 2025-12-07 122944.png";
import studyImg6 from "../../assets/study/Capture d'écran 2025-12-07 123006.png";
import studyImg7 from "../../assets/study/Capture d'écran 2025-12-07 132152.png";
import studyImg8 from "../../assets/study/Capture d'écran 2025-12-07 132212.png";
import studyImg9 from "../../assets/study/Capture d'écran 2025-12-07 154316.png";
import studyImg10 from "../../assets/study/Capture d'écran 2025-12-10 000543.png";
import studyImg11 from "../../assets/study/Capture d'écran 2025-12-10 000614.png";
import studyImg12 from "../../assets/study/Capture d'écran 2025-12-10 000634.png";
import studyImg13 from "../../assets/study/Capture d'écran 2026-04-29 235035.png";
import studyImg14 from "../../assets/study/Capture d'écran 2026-04-29 235158.png";
import studyImg15 from "../../assets/study/Capture d'écran 2026-04-29 235306.png";
import studyImg16 from "../../assets/study/Capture d'écran 2026-04-29 235328.png";

const studyDemoImages = [
  { src: studyImg1, label: "Register Page" },
  { src: studyImg2, label: "Login Page" },
  { src: studyImg3, label: "Onboarding" },
  { src: studyImg4, label: "Change Password" },
  { src: studyImg5, label: "Profile Settings" },
  { src: studyImg6, label: "Study Planner" },
  { src: studyImg7, label: "Ambient Sound" },
  { src: studyImg8, label: "Sound Player" },
  { src: studyImg9, label: "Study Session" },
  { src: studyImg10, label: "Calendar View" },
  { src: studyImg11, label: "Task List" },
  { src: studyImg12, label: "Mood Tracker" },
  { src: studyImg13, label: "Pomodoro Timer" },
  { src: studyImg14, label: "Session Details" },
  { src: studyImg15, label: "Statistics" },
  { src: studyImg16, label: "Settings" },
];

// ── Projects data ────────────────────────────────────────────────────
const projects = [
  {
    title: "Home Services Platform – Mobile Application",
    description:
      "A home services mobile application that allows clients to book service providers, track locations, chat in real time and receive notifications.",
    technologies: [
      "Flutter",
      "Spring Boot",
      "MySQL",
      "REST API",
      "Google Maps",
      "WebSocket",
    ],
    features: [
      "Authentication with client, provider and admin roles",
      "Home service booking flow",
      "Real-time chat using WebSocket",
      "Push notifications for messages and bookings",
      "GPS tracking and route display on the map",
      "Admin dashboard for provider validation",
    ],
    icon: <FaMobile className="text-4xl" />,
    color: "from-blue-500 to-cyan-500",
    status: "Final Year Project",
    year: "2026",
    github: "",
    demo: "",
    demoImages: null,
  },
  {
    title: "Leave Management Web Application",
    description:
      "A leave management web application developed during a professional internship at IIT Sfax, with role management, dashboards and notifications.",
    technologies: ["Laravel", "Angular", "MySQL", "REST API"],
    features: [
      "Authentication and role-based access control",
      "Leave request management",
      "Dashboards for employees and HR managers",
      "Tracking of 3 leave types",
      "Notifications and status management",
    ],
    icon: <FaLaptopCode className="text-4xl" />,
    color: "from-purple-500 to-pink-500",
    status: "Completed",
    year: "2025",
    github:
      "https://github.com/chaimahamdaoui858-dev/leave-management-system",
    demo: "",
    demoImages: leaveDemoImages,
  },
  {
    title: "Medical Center – Microservices Architecture",
    description:
      "A backend system based on a microservices architecture for managing patients, doctors and appointments.",
    technologies: ["Spring Boot", "Eureka", "API Gateway", "REST API"],
    features: [
      "Microservices architecture",
      "Service discovery with Eureka",
      "Centralized routing using API Gateway",
      "REST APIs for communication between services",
      "Management of patients, doctors and appointments",
    ],
    icon: <FaServer className="text-4xl" />,
    color: "from-green-500 to-teal-500",
    status: "Completed",
    year: "2025",
    github:
      "https://github.com/chaimahamdaoui858-dev/medical-center-microservices",
    demo: "",
    demoImages: null,
  },
  {
    title: "Pharmacy Management Application",
    description:
      "A pharmacy management web application for managing medicines, prescriptions and user accounts.",
    technologies: ["ASP.NET MVC", "C#", "SQL Server"],
    features: [
      "Medicine management",
      "Prescription management",
      "User account management",
      "Complete CRUD operations",
      "MVC architecture",
    ],
    icon: <FaDatabase className="text-4xl" />,
    color: "from-orange-500 to-red-500",
    status: "Completed",
    year: "2025",
    github:
      "https://github.com/chaimahamdaoui858-dev/pharmacy-management-application",
    demo: "",
    demoImages: null,
  },
  {
    title: "Study With Me – Mobile Application",
    description:
      "A mobile application designed for students to plan study sessions and receive reminders.",
    technologies: ["Flutter", "Dart"],
    features: [
      "Study session planning",
      "Reminders and notifications",
      "Simple and intuitive mobile interface",
      "Study time organization",
    ],
    icon: <FaMobile className="text-4xl" />,
    color: "from-cyan-500 to-blue-500",
    status: "Completed",
    year: "2025",
    github:
      "https://github.com/chaimahamdaoui858-dev/study-with-me-flutter-app",
    demo: "",
    demoImages: studyDemoImages,
  },
  {
    title: "3D Ball Runner Game",
    description:
      "A 3D game developed with Unity and C#, based on runner gameplay with obstacles, item collection and multiple levels.",
    technologies: ["Unity", "C#"],
    features: [
      "Physics-based ball movement",
      "Obstacles and collision detection",
      "Item collection",
      "Score tracking",
      "Multiple levels",
    ],
    icon: <FaGamepad className="text-4xl" />,
    color: "from-pink-500 to-rose-500",
    status: "Completed",
    year: "2025",
    github: "https://github.com/chaimahamdaoui858-dev/3DBallRunner",
    demo: "",
    demoImages: null,
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A personal portfolio website developed with React to present my profile, skills, projects and contact information.",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    features: [
      "Professional home page",
      "Projects section",
      "Skills section",
      "Contact form",
      "Responsive design",
    ],
    icon: <FaGlobe className="text-4xl" />,
    color: "from-indigo-500 to-purple-500",
    status: "In Progress",
    year: "2026",
    github:
      "https://github.com/chaimahamdaoui858-dev/mon-premiersiteweb-reference1",
    demo: "",
    demoImages: null,
  },
  {
    title: "Interactive Educational Platform",
    description:
      "A modern web application built with React and Vite that allows users to explore courses, track their progress, and interact with dynamic lessons in a smooth and intuitive interface.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "LocalStorage",
    ],
    features: [
      "Course browsing and management",
      "Interactive lessons using dynamic modals",
      "User progress tracking dashboard",
      "Dark / Light mode support",
      "Onboarding system for new users",
      "Data persistence using LocalStorage",
    ],
    icon: <FaLaptopCode className="text-4xl" />,
    color: "from-indigo-500 to-blue-500",
    status: "Completed",
    year: "2026",
    github: "",
    demo: "",
    demoImages: null,
  },
];

// ── Main Projects component ──────────────────────────────────────────
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const { t } = useTranslation();

  const translatedProjects = projects.map((proj, index) => ({
    ...proj,
    title: t(`projects.list.${index}.title`, proj.title),
    description: t(`projects.list.${index}.description`, proj.description),
    status: t(`projects.list.${index}.status`, proj.status),
    features: t(`projects.list.${index}.features`, { returnObjects: true }) || proj.features,
  }));

  const openGallery = (images) => {
    setGalleryImages(images);
    setCurrentImageIndex(0);
    setGalleryOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    setGalleryOpen(false);
    document.body.style.overflow = "";
  };

  const goToPrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const getStatusBadge = (status) => {
    const badges = {
      "In Progress": "bg-blue-100 text-blue-800 border-blue-300",
      Completed: "bg-green-100 text-green-800 border-green-300",
      "Final Year Project": "bg-pink-100 text-pink-800 border-pink-300",
      Planned: "bg-purple-100 text-purple-800 border-purple-300",
    };
    return badges[status] || "bg-gray-100 text-gray-800 border-gray-300";
  };

  return (
    <section className="py-24 section-shell px-4">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <span className="inline-block px-4 py-2 glass-card rounded-full text-sm font-semibold mb-4 text-blue-700">
            {t("projects.badge", "Portfolio")}
          </span>

          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-display">
            {t("projects.title", "My Projects")}
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("projects.subtitle", "Explore my academic, professional and personal projects in web development, mobile development, backend systems and game development.")}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {translatedProjects.map((project, index) => (
            <Reveal
              key={index}
              className="glass-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover-float"
              delay={index * 80}
            >
              <div
                className={`bg-gradient-to-r ${project.color} p-6 text-white relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4">
                  {project.icon}
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                      {project.icon}
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold border-2 ${getStatusBadge(
                          project.status
                        )}`}
                      >
                        {project.status}
                      </span>

                      <span className="text-sm opacity-90">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {t("projects.featuresTitle", "Main Features")}
                  </h4>

                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-gray-600 text-sm flex items-start gap-2"
                      >
                        <span className="text-blue-500 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    {t("projects.technologiesTitle", "Technologies Used")}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 glass-card rounded-full text-sm font-medium text-gray-700 hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100 flex gap-3">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
                    >
                      <FaGithub />
                      <span>{t("projects.buttonSource", "Source Code")}</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 px-4 py-2 bg-gray-300 text-gray-500 rounded-lg font-medium cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      <FaGithub />
                      <span>{t("projects.buttonSourcePrivate", "Private")}</span>
                    </button>
                  )}

                  {/* Demo button — opens gallery modal if images exist */}
                  {project.demoImages ? (
                    <button
                      onClick={() => openGallery(project.demoImages)}
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                      <FaImages />
                      <span>{t("projects.buttonDemo", "Demo")}</span>
                    </button>
                  ) : project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center gap-2"
                    >
                      <FaExternalLinkAlt />
                      <span>{t("projects.buttonDemo", "Demo")}</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="px-4 py-2 border-2 border-gray-200 text-gray-400 rounded-lg font-medium cursor-not-allowed flex items-center gap-2"
                    >
                      <FaExternalLinkAlt />
                      <span>{t("projects.buttonDemo", "Demo")}</span>
                    </button>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 text-center glass-card rounded-2xl shadow-lg p-8 hover-float" delay={120}>
          <h3 className="text-2xl font-bold mb-4">
            Interested in my projects?
          </h3>

          <p className="text-gray-600 mb-6">
            Feel free to contact me to discuss a final year internship
            opportunity or a software project.
          </p>

          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Contact Me
          </a>
        </Reveal>
      </div>

      {/* ══════════════════════════════════════════════════════════
          FULLSCREEN GALLERY MODAL
          ══════════════════════════════════════════════════════════ */}
      {galleryOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col">
          {/* ── Top bar ─────────────────────────────────────────── */}
          <div className="flex items-center justify-between px-6 py-4">
            <div className="text-white">
              <span className="text-lg font-bold">Demo Screenshots</span>
              <span className="text-white/50 ml-3 text-sm">
                {currentImageIndex + 1} / {galleryImages.length}
              </span>
            </div>

            <button
              onClick={closeGallery}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>

          {/* ── Main image area ─────────────────────────────────── */}
          <div className="flex-1 flex items-center justify-center px-16 relative">
            {/* Prev button */}
            <button
              onClick={goToPrev}
              className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 z-10"
            >
              <FaChevronLeft className="text-xl" />
            </button>

            {/* Image */}
            <div className="max-w-5xl max-h-[70vh] w-full flex items-center justify-center">
              <img
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].label}
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Next button */}
            <button
              onClick={goToNext}
              className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 z-10"
            >
              <FaChevronRight className="text-xl" />
            </button>
          </div>

          {/* ── Label ───────────────────────────────────────────── */}
          <div className="text-center py-2">
            <span className="text-white font-medium text-sm bg-white/10 px-4 py-1.5 rounded-full">
              {galleryImages[currentImageIndex].label}
            </span>
          </div>

          {/* ── Thumbnail strip ─────────────────────────────────── */}
          <div className="px-6 py-4">
            <div className="flex gap-2 justify-center overflow-x-auto pb-2">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${idx === currentImageIndex
                      ? "border-purple-500 shadow-lg shadow-purple-500/30 scale-110"
                      : "border-white/20 opacity-50 hover:opacity-80 hover:border-white/40"
                    }`}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;