// src/components/Accueil/Experience.jsx
import React from 'react';
import { FaBriefcase, FaGraduationCap, FaCode, FaCalendar, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const experiences = [
  {
    type: 'project',
    title: "Application web de gestion des congés",
    company: "IIT Sfax",
    location: "Sfax, Tunisie",
    date: "2023 – Présent",
    status: "En cours",
    description: "Développement d'une application complète de gestion des demandes de congés avec système d'authentification avancé.",
    technologies: ["Laravel", "Angular", "MySQL", "API REST"],
    achievements: [
      "Conception et implémentation de l'architecture backend avec Laravel",
      "Développement d'une interface utilisateur réactive avec Angular",
      "Mise en place d'un système de gestion des rôles (Admin, Manager, Employé)",
      "Intégration de notifications en temps réel",
      "Création de tableaux de bord analytiques"
    ],
    icon: <FaCode />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    type: 'project',
    title: "Application de gestion de pharmacie",
    company: "Projet académique",
    location: "IIT Sfax",
    date: "2023",
    status: "Terminé",
    description: "Système de gestion complet pour pharmacies incluant ordonnances électroniques et suivi des stocks.",
    technologies: ["ASP.NET MVC", "C#", "SQL Server", "Entity Framework"],
    achievements: [
      "Développement du système d'ordonnances électroniques",
      "Implémentation du suivi intelligent des stocks",
      "Gestion automatisée des alertes de péremption",
      "Création de rapports de vente détaillés",
      "Interface administrateur complète"
    ],
    icon: <FaBriefcase />,
    color: "from-purple-500 to-pink-500"
  },
  {
    type: 'project',
    title: "Site web de restauration",
    company: "Projet académique",
    location: "IIT Sfax",
    date: "2023",
    status: "Terminé",
    description: "Site vitrine moderne pour restaurant avec système de réservation et menu interactif.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    achievements: [
      "Design responsive et moderne",
      "Menu interactif avec système de filtres",
      "Formulaire de réservation en ligne",
      "Galerie photo dynamique",
      "Intégration Google Maps pour la localisation"
    ],
    icon: <FaCode />,
    color: "from-orange-500 to-red-500"
  }
];

const education = [
  {
    degree: "Licence en Génie Logiciel et Systèmes d'Information",
    institution: "Institut International de Technologie (IIT)",
    location: "Sfax, Tunisie",
    period: "2022 - Présent",
    status: "3ème année en cours",
    description: "Formation approfondie en développement logiciel, systèmes d'information et gestion de projets informatiques.",
    highlights: [
      "Développement Web & Mobile",
      "Bases de données avancées",
      "Architecture logicielle",
      "Gestion de projets Agile"
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Expérience & Formation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mon parcours académique et mes projets réalisés dans le domaine du développement logiciel
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
              <FaGraduationCap className="text-2xl text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Formation Académique</h3>
          </div>

          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <FaBriefcase className="text-blue-600" />
                    <span className="font-semibold">{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600 mb-2">
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
              
              <p className="text-gray-700 mb-4 leading-relaxed">{edu.description}</p>
              
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

        {/* Projects Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
              <FaBriefcase className="text-2xl text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Projets Académiques</h3>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${exp.color} p-6 text-white`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start gap-4 mb-4 md:mb-0">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-2xl">
                        {exp.icon}
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold mb-2">{exp.title}</h4>
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
                    <span className={`inline-block px-4 py-2 rounded-full font-semibold text-sm ${
                      exp.status === 'En cours' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {exp.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      Technologies utilisées
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

                  {/* Achievements */}
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Réalisations clés
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

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Intéressé par mon profil ?</h3>
          <p className="text-xl mb-8 text-white/90">
            Je suis à la recherche d'un stage PFE pour mettre en pratique mes compétences
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/projects"
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Voir mes projets
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-xl font-bold hover:bg-white/30 transition-all duration-300"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;