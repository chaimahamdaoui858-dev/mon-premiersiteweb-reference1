// src/components/Accueil/Projects.jsx
import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaMobile, FaLaptopCode } from 'react-icons/fa';

const projects = [
  {
    title: "Application web de gestion des congés",
    description: "Système complet de gestion des demandes de congés avec authentification, gestion des rôles (admin, employé, manager) et notifications automatiques.",
    technologies: ["Laravel", "Angular", "MySQL", "API REST"],
    features: [
      "Authentification et gestion des rôles",
      "Dashboard administrateur avec statistiques",
      "Notifications en temps réel",
      "Validation des demandes multi-niveaux",
      "Génération de rapports PDF"
    ],
    icon: <FaLaptopCode className="text-4xl" />,
    color: "from-blue-500 to-cyan-500",
    status: "En cours",
    year: "2023 - Présent"
  },
  {
    title: "Application de gestion de pharmacie",
    description: "Plateforme de gestion complète pour pharmacies avec système d'ordonnances électroniques et suivi des stocks en temps réel.",
    technologies: ["ASP.NET MVC", "C#", "SQL Server", "Entity Framework"],
    features: [
      "Gestion des ordonnances électroniques",
      "Suivi intelligent des stocks",
      "Gestion des fournisseurs",
      "Alertes de péremption",
      "Système de facturation"
    ],
    icon: <FaDatabase className="text-4xl" />,
    color: "from-purple-500 to-pink-500",
    status: "Terminé",
    year: "2023"
  },
  {
    title: "Site web de restauration",
    description: "Site vitrine moderne et interactif pour un restaurant avec menu dynamique, système de commande en ligne et espace client.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    features: [
      "Interface responsive moderne",
      "Menu interactif avec filtres",
      "Formulaire de réservation",
      "Galerie photo dynamique",
      "Intégration Google Maps"
    ],
    icon: <FaCode className="text-4xl" />,
    color: "from-orange-500 to-red-500",
    status: "Terminé",
    year: "2023"
  },
  {
    title: "Application mobile (À venir)",
    description: "Projet de développement d'une application mobile cross-platform utilisant Flutter pour une expérience utilisateur optimale.",
    technologies: ["Flutter", "Dart", "Firebase", "API REST"],
    features: [
      "Design moderne et intuitif",
      "Architecture clean code",
      "Intégration Firebase",
      "Notifications push",
      "Mode hors ligne"
    ],
    icon: <FaMobile className="text-4xl" />,
    color: "from-green-500 to-teal-500",
    status: "Planifié",
    year: "2025"
  }
];

const Projects = () => {
  const getStatusBadge = (status) => {
    const badges = {
      "En cours": "bg-blue-100 text-blue-800 border-blue-300",
      "Terminé": "bg-green-100 text-green-800 border-green-300",
      "Planifié": "bg-purple-100 text-purple-800 border-purple-300"
    };
    return badges[status] || "bg-gray-100 text-gray-800 border-gray-300";
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Mes Projets
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez mes réalisations académiques et professionnelles en développement web et mobile
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${project.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4">
                  {project.icon}
                </div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                      {project.icon}
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold border-2 ${getStatusBadge(project.status)}`}>
                        {project.status}
                      </span>
                      <span className="text-sm opacity-90">{project.year}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Fonctionnalités principales
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                        <span className="text-blue-500 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Technologies utilisées
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

                {/* Action Buttons */}
                <div className="mt-6 pt-6 border-t border-gray-100 flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
                    <FaGithub />
                    <span>Code source</span>
                  </button>
                  <button className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center gap-2">
                    <FaExternalLinkAlt />
                    <span>Démo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Intéressé par mes projets ?</h3>
          <p className="text-gray-600 mb-6">
            N'hésitez pas à me contacter pour en discuter ou découvrir d'autres réalisations
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;