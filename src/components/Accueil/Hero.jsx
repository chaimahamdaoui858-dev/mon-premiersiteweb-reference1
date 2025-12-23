// src/components/Accueil/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaLaptop, FaMobile, FaRocket, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-700">Disponible pour un stage PFE</span>
            </div>

            {/* Main Title */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="text-gray-900">Bonjour, je suis</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Chaima HAMDAOUI
                </span>
              </h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium text-sm">
                  Développeuse Full Stack
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-medium text-sm">
                  Étudiante GL & SI
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed">
              Étudiante en 3ᵉ année <span className="font-semibold text-gray-800">Génie Logiciel et Systèmes d'Information</span> à l'Institut International de Technologie, Sfax. 
              Passionnée par le développement web et mobile, je transforme des idées en applications innovantes.
            </p>

            {/* Tech Stack Icons */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md">
                <FaCode className="text-blue-600 text-xl" />
                <span className="text-sm font-medium text-gray-700">Laravel</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md">
                <FaLaptop className="text-red-600 text-xl" />
                <span className="text-sm font-medium text-gray-700">Angular</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md">
                <FaCode className="text-cyan-600 text-xl" />
                <span className="text-sm font-medium text-gray-700">React</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md">
                <FaMobile className="text-blue-500 text-xl" />
                <span className="text-sm font-medium text-gray-700">Flutter</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/projects" 
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 font-semibold"
              >
                <FaRocket className="group-hover:animate-bounce" />
                Voir mes projets
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white text-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-purple-600 font-semibold"
              >
                Me contacter
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="text-2xl text-gray-800" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin className="text-2xl text-blue-600" />
              </a>
              <a 
                href="mailto:chaima@example.com"
                className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
              >
                <FaEnvelope className="text-2xl text-purple-600" />
              </a>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Main Card */}
              <div className="w-96 h-96 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl shadow-2xl transform rotate-6 hover:rotate-0 transition-all duration-500"></div>
              
              {/* Floating Cards */}
              <div className="absolute top-10 -left-10 w-48 h-32 bg-white rounded-xl shadow-xl p-4 transform hover:scale-110 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FaCode className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Backend</div>
                    <div className="font-bold text-gray-800">Laravel + PHP</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 -right-10 w-48 h-32 bg-white rounded-xl shadow-xl p-4 transform hover:scale-110 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FaLaptop className="text-purple-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Frontend</div>
                    <div className="font-bold text-gray-800">Angular + React</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-20 w-48 h-32 bg-white rounded-xl shadow-xl p-4 transform hover:scale-110 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                    <FaMobile className="text-pink-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Mobile</div>
                    <div className="font-bold text-gray-800">Flutter + Dart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              3+
            </div>
            <div className="text-gray-600 font-medium">Projets réalisés</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              5+
            </div>
            <div className="text-gray-600 font-medium">Technologies</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2">
              3
            </div>
            <div className="text-gray-600 font-medium">Années d'études</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-gray-600 font-medium">Motivation</div>
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