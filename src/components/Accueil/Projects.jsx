import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaDatabase,
  FaMobile,
  FaLaptopCode,
  FaGamepad,
  FaServer,
  FaGlobe,
} from "react-icons/fa";

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
    github: "https://github.com/chaimahamdaoui858-dev/leave-management-system",
    demo: "",
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
    github: "https://github.com/chaimahamdaoui858-dev/medical-center-microservices",
    demo: "",
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
    github: "https://github.com/chaimahamdaoui858-dev/study-with-me-flutter-app",
    demo: "",
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
  },
];

const Projects = () => {
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
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Portfolio
          </span>

          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my academic, professional and personal projects in web
            development, mobile development, backend systems and game
            development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
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
                    Main Features
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
                    Technologies Used
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-medium hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
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
                      <span>Source Code</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 px-4 py-2 bg-gray-300 text-gray-500 rounded-lg font-medium cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      <FaGithub />
                      <span>Private</span>
                    </button>
                  )}

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center gap-2"
                    >
                      <FaExternalLinkAlt />
                      <span>Demo</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="px-4 py-2 border-2 border-gray-200 text-gray-400 rounded-lg font-medium cursor-not-allowed flex items-center gap-2"
                    >
                      <FaExternalLinkAlt />
                      <span>Demo</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white rounded-2xl shadow-lg p-8">
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
        </div>
      </div>
    </section>
  );
};

export default Projects;