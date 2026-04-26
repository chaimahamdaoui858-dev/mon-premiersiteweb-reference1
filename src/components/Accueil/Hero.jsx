import React from "react";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaLaptop,
  FaMobile,
  FaRocket,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaServer,
  FaDatabase,
  FaGamepad,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-700">
                Looking for a Final Year Internship
              </span>
            </div>

            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="text-gray-900">Hi, I am</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Chaima HAMDAOUI
                </span>
              </h1>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium text-sm">
                  Junior Full Stack Developer
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-medium text-sm">
                  Mobile Developer
                </span>
                <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-lg font-medium text-sm">
                  Software Engineering Student
                </span>
              </div>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed">
              Third-year{" "}
              <span className="font-semibold text-gray-800">
                Software Engineering and Information Systems
              </span>{" "}
              student at the International Institute of Technology of Sfax.
              Passionate about web and mobile development, I build applications
              using React, Angular, Laravel, Spring Boot, Flutter, ASP.NET MVC,
              Unity and MySQL.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md">
                <FaCode className="text-cyan-600 text-xl" />
                <span className="text-sm font-medium text-gray-700">React</span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md">
                <FaLaptop className="text-red-600 text-xl" />
                <span className="text-sm font-medium text-gray-700">Angular</span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md">
                <FaServer className="text-green-600 text-xl" />
                <span className="text-sm font-medium text-gray-700">
                  Spring Boot
                </span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md">
                <FaCode className="text-blue-600 text-xl" />
                <span className="text-sm font-medium text-gray-700">Laravel</span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md">
                <FaMobile className="text-blue-500 text-xl" />
                <span className="text-sm font-medium text-gray-700">Flutter</span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md">
                <FaDatabase className="text-purple-600 text-xl" />
                <span className="text-sm font-medium text-gray-700">MySQL</span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md">
                <FaGamepad className="text-pink-600 text-xl" />
                <span className="text-sm font-medium text-gray-700">Unity</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 font-semibold"
              >
                <FaRocket className="group-hover:animate-bounce" />
                View My Projects
              </Link>

              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-purple-600 font-semibold"
              >
                Contact Me
              </Link>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/chaimahamdaoui858-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                title="GitHub"
              >
                <FaGithub className="text-2xl text-gray-800" />
              </a>

              <a
                href="https://www.linkedin.com/in/chaima-hamdaoui"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                title="LinkedIn"
              >
                <FaLinkedin className="text-2xl text-blue-600" />
              </a>

              <a
                href="mailto:chaima.hamdaoui101@gmail.com"
                className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                title="Email"
              >
                <FaEnvelope className="text-2xl text-purple-600" />
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl shadow-2xl transform rotate-6 hover:rotate-0 transition-all duration-500"></div>

              <div className="absolute top-10 -left-10 w-52 h-32 bg-white rounded-xl shadow-xl p-4 transform hover:scale-110 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FaServer className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Backend</div>
                    <div className="font-bold text-gray-800">
                      Spring Boot + Laravel
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 -right-10 w-52 h-32 bg-white rounded-xl shadow-xl p-4 transform hover:scale-110 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FaLaptop className="text-purple-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Frontend</div>
                    <div className="font-bold text-gray-800">
                      React + Angular
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-20 w-52 h-32 bg-white rounded-xl shadow-xl p-4 transform hover:scale-110 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                    <FaMobile className="text-pink-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Mobile</div>
                    <div className="font-bold text-gray-800">
                      Flutter + Dart
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 left-16 w-52 h-28 bg-white rounded-xl shadow-xl p-4 transform hover:scale-110 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <FaDatabase className="text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Database</div>
                    <div className="font-bold text-gray-800">
                      MySQL + SQL Server
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              6+
            </div>
            <div className="text-gray-600 font-medium">Completed Projects</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              10+
            </div>
            <div className="text-gray-600 font-medium">Technologies</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2">
              3rd
            </div>
            <div className="text-gray-600 font-medium">Academic Year</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              PFE
            </div>
            <div className="text-gray-600 font-medium">
              Internship Search
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;