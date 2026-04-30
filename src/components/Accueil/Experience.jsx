import React from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCalendar,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaUsers,
  FaBrain,
  FaHeart,
} from "react-icons/fa";
import Reveal from "../Commun/Reveal.jsx";

import { useTranslation } from "react-i18next";

const professionalExperience = [
  {
    title: "Professional Internship",
    company: "All Soft Multimedia",
    location: "Sfax, Tunisia",
    date: "Feb 2026 – Present",
    status: "Present",
    subtitle: "Home Services Mobile Application",
    description: "Leading the development of a full-stack mobile platform connecting clients and service providers.",
    technologies: ["Flutter", "Spring Boot", "MySQL", "REST API", "WebSocket", "Google Maps"],
    achievements: [
      "Engineered a cross-platform mobile application using Flutter, integrated with a robust Spring Boot REST API.",
      "Designed a secure role-based system for clients, providers, and administrators.",
      "Delivered key features: booking system, authentication, real-time chat (WebSocket), notifications, and live tracking.",
      "Integrated Google Maps for geolocation, navigation, and real-time provider tracking.",
      "Built an admin dashboard to manage users, validate providers, and monitor complaints."
    ],
    icon: <FaBriefcase />,
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Professional Internship",
    company: "International Institute of Technology",
    location: "Sfax, Tunisia",
    date: "Jul 27 – Sep 1, 2025",
    status: "Completed",
    subtitle: "Leave Management Web Application",
    description:
      "Completed a 5-week internship focused on developing a leave management web application for employees and HR managers.",
    technologies: ["Laravel", "Angular", "MySQL", "REST API"],
    achievements: [
      "Developed REST APIs for leave request management.",
      "Implemented role-based access control for employees and HR managers.",
      "Managed MySQL database structure and application data.",
      "Delivered dashboards for employees and HR managers.",
      "Added notifications and tracked 3 leave types: sick leave, vacation and personal leave.",
    ],
    icon: <FaBriefcase />,
    color: "from-blue-500 to-cyan-500",
  },
];

const education = [
  {
    degree: "Software Engineering and Information Systems",
    institution: "International Institute of Technology",
    location: "Sfax, Tunisia",
    period: "2023 – Present",
    status: "3rd Year",
    description:
      "Training focused on software development, databases, web technologies, mobile development, software architecture, information systems and project-based learning.",
    highlights: [
      "Software development",
      "Web and mobile development",
      "Databases and information systems",
      "Software architecture",
    ],
  },
  {
    degree: "Baccalaureate in Experimental Sciences",
    institution: "Gremda High School",
    location: "Sfax, Tunisia",
    period: "2023",
    status: "Completed",
    description:
      "Scientific baccalaureate providing a strong foundation in analytical thinking and problem-solving.",
    highlights: [
      "Scientific background",
      "Analytical thinking",
      "Problem-solving",
    ],
  },
];

const certifications = [
  {
    title: "AWS Academy Graduate – Cloud Foundations",
    institution: "AWS Academy",
    date: "20/12/2025",
    description:
      "Certification validating foundational knowledge of cloud computing, AWS services (EC2, S3, IAM), architecture, security and deployment best practices.",
    icon: <FaBrain />,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "AI Tools for Coding",
    institution: "Masterclass Training",
    date: "2026",
    description:
      "Training focused on using AI-powered tools to improve software development, including code generation, debugging, and productivity enhancement.",
    icon: <FaBrain />,
    color: "from-purple-500 to-pink-500",
  },
];

const activities = [
  {
    title: "IEEE Student Branch",
    date: "2023 – Present",
    description:
      "Participated in technical events, workshops and student activities at the International Institute of Technology of Sfax.",
    icon: <FaUsers />,
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "SOS Village Club",
    date: "2026",
    description: "Participated in volunteer and social activities.",
    icon: <FaHeart />,
    color: "from-pink-500 to-rose-500",
  },
];

const Experience = () => {
  const { t } = useTranslation();

  // We can map over the translated arrays directly in the render, or re-map them here
  const translatedProfessionalExperience = t('experience.jobs', { returnObjects: true }).map((job, index) => ({
    ...professionalExperience[index],
    ...job
  }));

  const translatedEducation = t('experience.education', { returnObjects: true }).map((edu, index) => ({
    ...education[index],
    ...edu
  }));

  const translatedCertifications = t('experience.certificationItems', { returnObjects: true }).map((cert, index) => ({
    ...certifications[index],
    ...cert
  }));

  const translatedActivities = t('experience.activityItems', { returnObjects: true }).map((activity, index) => ({
    ...activities[index],
    ...activity
  }));

  const TimelineCard = ({ data, index }) => {
    const isActive = index === 0;

    return (
      <div className="relative pl-10 md:pl-16 group">
        <div className={`absolute -left-[21px] md:-left-[25px] top-0 w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white flex items-center justify-center transition-all duration-300 z-10 
          ${isActive ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.6)] animate-pulse' : 'bg-gray-300 text-white group-hover:bg-blue-500 group-hover:scale-110'}`}>
          <div className="text-white text-sm md:text-lg">{data.icon}</div>
        </div>

        <div className={`glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 transform hover:-translate-y-2 hover-float 
          ${isActive ? 'shadow-2xl border border-emerald-100 ring-2 ring-emerald-500/20' : 'shadow-xl hover:shadow-2xl'}`}>
          
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-1">{data.title}</h4>
              <p className="text-blue-600 font-semibold">{data.subtitle}</p>
            </div>
            <span className={`inline-block px-4 py-2 rounded-full font-semibold text-sm w-fit
              ${isActive ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'}`}>
              {data.status}
            </span>
          </div>

          <div className="flex flex-wrap gap-4 text-gray-600 text-sm mb-6">
            <div className="flex items-center gap-2"><FaBriefcase className="text-gray-400"/><span>{data.company}</span></div>
            <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-gray-400"/><span>{data.location}</span></div>
            <div className="flex items-center gap-2"><FaCalendar className="text-gray-400"/><span>{data.date}</span></div>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">{data.description}</p>
          <ul className="space-y-3 mb-6">
            {data.achievements?.map((a, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                <FaCheckCircle className={`mt-1 flex-shrink-0 ${isActive ? 'text-emerald-500' : 'text-blue-500'}`} />
                <span>{a}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
            {data.technologies?.map((tech, i) => (
              <span key={i} className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300
                ${isActive ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'}`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const EducationCard = ({ data, index }) => {
    const isActive = index === 0;

    return (
      <div className="relative pl-10 md:pl-16 group">
        <div className={`absolute -left-[21px] md:-left-[25px] top-0 w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white flex items-center justify-center transition-all duration-300 z-10 
          ${isActive ? 'bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)]' : 'bg-gray-300 text-white group-hover:bg-purple-500 group-hover:scale-110'}`}>
          <FaGraduationCap className="text-white text-sm md:text-lg" />
        </div>

        <div className={`glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 transform hover:-translate-y-2 hover-float 
          ${isActive ? 'shadow-2xl border border-purple-100 ring-2 ring-purple-500/20' : 'shadow-xl hover:shadow-2xl'}`}>
          
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-1">{data.degree}</h4>
              <div className="flex flex-wrap gap-4 text-gray-600 text-sm mt-2">
                <div className="flex items-center gap-2"><FaGraduationCap className="text-purple-400"/><span>{data.institution}</span></div>
                <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-gray-400"/><span>{data.location}</span></div>
                <div className="flex items-center gap-2"><FaCalendar className="text-gray-400"/><span>{data.period}</span></div>
              </div>
            </div>
            <span className={`inline-block px-4 py-2 rounded-full font-semibold text-sm w-fit
              ${isActive ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'}`}>
              {data.status}
            </span>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">{data.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 border-t border-gray-100">
            {data.highlights?.map((h, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                <FaCheckCircle className="text-purple-500 flex-shrink-0" /> 
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const ActivityCard = ({ data }) => (
    <div className="glass-card rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group hover-float">
      <div className={`bg-gradient-to-r ${data.color} p-6 text-white transition-opacity group-hover:opacity-90`}>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl">{data.icon}</div>
          <div>
            <h4 className="text-xl font-bold">{data.title}</h4>
            <p className="text-white/90 text-sm">{data.date}</p>
          </div>
        </div>
      </div>
      <div className="p-6 text-gray-700">{data.description}</div>
    </div>
  );

  return (
    <section className="py-24 section-shell">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16 relative">
          <span className="inline-block px-4 py-2 glass-card rounded-full text-sm font-semibold mb-4 text-purple-700">
            {t("experience.badge", "My Journey")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-display">
            {t("experience.title", "Experience & Education")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t("experience.subtitle", "My academic and professional journey.")}
          </p>
        </Reveal>

        <div className="flex flex-col gap-16 relative max-w-4xl mx-auto">
          {/* ── Professional Experience ── */}
          <div>
            <Reveal className="flex items-center gap-3 mb-12">
              <FaBriefcase className="text-3xl text-blue-600" />
              <h3 className="text-3xl font-bold text-gray-900 font-display">
                {t("experience.professional", "Professional Experience")}
              </h3>
            </Reveal>
            <div className="relative border-l-2 border-gray-200 ml-4 md:ml-6 space-y-12 pb-4 theme-border">
              {translatedProfessionalExperience.map((exp, index) => (
                <Reveal key={index} delay={index * 90}>
                  <TimelineCard data={exp} index={index} />
                </Reveal>
              ))}
            </div>
          </div>

          {/* ── Academic Background ── */}
          <div>
            <Reveal className="flex items-center gap-3 mb-12">
              <FaGraduationCap className="text-3xl text-purple-600" />
              <h3 className="text-3xl font-bold text-gray-900 font-display">
                {t("experience.academic", "Academic Background")}
              </h3>
            </Reveal>
            <div className="relative border-l-2 border-gray-200 ml-4 md:ml-6 space-y-12 pb-4 theme-border">
              {translatedEducation.map((edu, index) => (
                <Reveal key={index} delay={index * 90}>
                  <EducationCard data={edu} index={index} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* ── Additional Sections (Trainings & Activities) ── */}
        <div className="flex flex-col gap-12 mt-16 relative max-w-4xl mx-auto">
          {/* ── Trainings ── */}
          <div>
            <Reveal className="flex items-center gap-3 mb-8">
              <FaBrain className="text-3xl text-pink-600" />
              <h3 className="text-2xl font-bold text-gray-900 font-display">
                {t("experience.trainings", "Trainings & Masterclasses")}
              </h3>
            </Reveal>
            <div className="grid gap-6">
              {translatedCertifications.map((item, index) => (
                <Reveal key={index} delay={index * 90}>
                  <ActivityCard data={item} />
                </Reveal>
              ))}
            </div>
          </div>

          {/* ── Extracurricular Activities ── */}
          <div>
            <Reveal className="flex items-center gap-3 mb-8">
              <FaUsers className="text-3xl text-indigo-600" />
              <h3 className="text-2xl font-bold text-gray-900 font-display">
                {t("experience.activities", "Extracurricular Activities")}
              </h3>
            </Reveal>
            <div className="grid gap-6">
              {translatedActivities.map((item, index) => (
                <Reveal key={index} delay={index * 90}>
                  <ActivityCard data={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <Reveal className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-12 text-center text-white hover-float" delay={120}>
          <h3 className="text-3xl font-bold mb-4">
            Interested in my profile?
          </h3>

          <p className="text-xl mb-8 text-white/90">
            I am looking for a final year internship to apply my skills and
            contribute to real software projects.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/projects"
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View My Projects
            </a>

            <a
              href="/contact"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-xl font-bold hover:bg-white/30 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Experience;