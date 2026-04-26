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

const professionalExperience = [
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

const trainings = [
  {
    title: "Masterclass: AI Tools for Coding",
    date: "Additional Training",
    description:
      "Training focused on AI tools applied to web and mobile development.",
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
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Background
          </span>

          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience & Education
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic background, professional experience and student
            engagement activities.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
              <FaBriefcase className="text-2xl text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">
              Professional Experience
            </h3>
          </div>

          <div className="space-y-8">
            {professionalExperience.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${exp.color} p-6 text-white`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start gap-4 mb-4 md:mb-0">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-2xl">
                        {exp.icon}
                      </div>

                      <div>
                        <h4 className="text-2xl font-bold mb-1">
                          {exp.title}
                        </h4>
                        <p className="text-white/90 font-semibold mb-2">
                          {exp.subtitle}
                        </p>

                        <div className="flex flex-wrap gap-4 text-white/90">
                          <div className="flex items-center gap-2">
                            <FaBriefcase />
                            <span>{exp.company}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <FaMapMarkerAlt />
                            <span>{exp.location}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <FaCalendar />
                            <span>{exp.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <span className="inline-block px-4 py-2 rounded-full font-semibold text-sm bg-green-100 text-green-800">
                      {exp.status}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      Technologies Used
                    </h5>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-lg font-medium hover:from-purple-50 hover:to-pink-50 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Key Achievements
                    </h5>

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
              <FaGraduationCap className="text-2xl text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Education</h3>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      {edu.degree}
                    </h4>

                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <FaBriefcase className="text-blue-600" />
                      <span className="font-semibold">{edu.institution}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-2">
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-red-600" />
                        <span>{edu.location}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <FaCalendar className="text-green-600" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>

                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold text-sm shadow-lg mt-4 md:mt-0">
                    {edu.status}
                  </span>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {edu.description}
                </p>

                <div className="grid md:grid-cols-2 gap-3">
                  {edu.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Training Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
              <FaBrain className="text-2xl text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">
              Additional Training
            </h3>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            {trainings.map((training, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`bg-gradient-to-r ${training.color} p-6 text-white`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-2xl">
                      {training.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold">{training.title}</h4>
                      <p className="text-white/90">{training.date}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed">
                    {training.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center shadow-lg">
              <FaUsers className="text-2xl text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">
              Activities & Engagement
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`bg-gradient-to-r ${activity.color} p-6 text-white`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-2xl">
                      {activity.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold">{activity.title}</h4>
                      <p className="text-white/90">{activity.date}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-12 text-center text-white">
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
        </div>
      </div>
    </section>
  );
};

export default Experience;