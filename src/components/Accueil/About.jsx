import React from 'react';

const About = () => {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">À propos de moi</h2>
        <p className="text-gray-700 mb-4">
          Étudiante en 3ᵉ année Génie Logiciel et Systèmes d'Information à l'IIT Sfax, passionnée par le développement Web et Mobile.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Compétences</h3>
        <div className="grid md:grid-cols-2 gap-4 text-left">
          <div>
            <p className="font-semibold">Langages de programmation:</p>
            <p>C, Java, PHP, JavaScript, SQL</p>
          </div>
          <div>
            <p className="font-semibold">Développement Web et Mobile:</p>
            <p>Laravel, Angular, React, Flutter, HTML, CSS, MySQL, Spring Boot</p>
          </div>
          <div>
            <p className="font-semibold">Outils & Technologies:</p>
            <p>Docker, API REST, gestion des rôles</p>
          </div>
          <div>
            <p className="font-semibold">Soft skills:</p>
            <p>Esprit d'équipe, créativité, curiosité, apprentissage continu</p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Langues</h3>
        <p>Arabe | Français | Anglais</p>
      </div>
    </section>
  );
};

export default About;