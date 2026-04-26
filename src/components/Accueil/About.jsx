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
} from "react-icons/fa";

const skills = [
  {
    title: "Programming Languages",
    icon: <FaCode />,
    items: ["Java", "C#", "PHP", "JavaScript", "SQL", "HTML", "CSS"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Web / Mobile Development",
    icon: <FaMobile />,
    items: [
      "Flutter",
      "Spring Boot",
      "Laravel",
      "Angular",
      "React",
      "ASP.NET MVC",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Databases",
    icon: <FaDatabase />,
    items: ["MySQL", "Oracle", "PL/SQL", "SQL Server"],
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Tools",
    icon: <FaTools />,
    items: ["Git", "GitHub", "Docker", "Postman", "VS Code", "IntelliJ IDEA"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Other Technologies",
    icon: <FaServer />,
    items: ["Power BI", "Talend", "AWS", "Machine Learning", "Unity"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Languages",
    icon: <FaLanguage />,
    items: ["Arabic", "French", "English"],
    color: "from-pink-500 to-rose-500",
  },
];

const strengths = [
  "REST API development",
  "Role-based access control",
  "Database design",
  "Mobile UI development",
  "API testing with Postman",
  "Software architecture",
];

const About = () => {
  return (
    <section className="py-24 bg-white px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            About Me
          </span>

          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Who Am I?
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I am a third-year Software Engineering and Information Systems
            student at the International Institute of Technology of Sfax,
            passionate about web development, mobile development, and innovative
            software solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg p-8 border border-blue-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
                <FaGraduationCap />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Academic Profile
                </h3>
                <p className="text-gray-600">
                  Software Engineering and Information Systems
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              I develop web and mobile applications using modern technologies
              such as Flutter, Spring Boot, Laravel, Angular, React, ASP.NET
              MVC, Unity, and MySQL. My goal is to contribute to real software
              projects while strengthening my technical skills.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <FaMapMarkerAlt className="text-blue-600" />
                <span>Sfax, Tunisia</span>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <FaBriefcase className="text-purple-600" />
                <span>Looking for a Final Year Internship</span>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <FaCheckCircle className="text-green-600" />
                <span>Junior Full Stack / Mobile Developer</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
                <FaBriefcase />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Internship Experience
                </h3>
                <p className="text-gray-600">
                  International Institute of Technology
                </p>
              </div>
            </div>

            <div className="mb-5">
              <h4 className="font-bold text-gray-900 text-lg">
                Leave Management Web Application
              </h4>
              <p className="text-sm text-gray-500">
                Jul 27 – Sep 1, 2025 • Sfax, Tunisia
              </p>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-700">
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                Completed a 5-week internship focused on developing a leave
                management web application.
              </li>

              <li className="flex items-start gap-3 text-gray-700">
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                Developed REST APIs, role-based access control, and MySQL
                database management.
              </li>

              <li className="flex items-start gap-3 text-gray-700">
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                Delivered dashboards for employees and HR managers with
                notifications and leave tracking.
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-6">
              {["Laravel", "Angular", "MySQL", "REST API"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 mb-16 text-white">
          <h3 className="text-3xl font-bold mb-6 text-center">
            Relevant Skills
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {strengths.map((item, index) => (
              <div
                key={index}
                className="bg-white/15 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3"
              >
                <FaCheckCircle className="text-green-300 flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h3>
            <p className="text-gray-600 text-lg">
              Technologies, tools, and languages used in my academic and
              professional projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((group, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div
                  className={`bg-gradient-to-r ${group.color} p-5 text-white`}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-3 rounded-lg text-2xl">
                      {group.icon}
                    </div>
                    <h4 className="text-xl font-bold">{group.title}</h4>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/projects"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;