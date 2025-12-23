// src/components/Formulaire/FormulaireG6.jsx
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaCommentDots, FaCheckCircle, FaPaperPlane, FaExclamationTriangle, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { sendEmail } from '../../Services/emailservice';

const ContactForm = () => {
  const [formValid, setFormValid] = useState({
    nom: false,
    email: false,
    message: false,
    priorité: true,
    send: false,
    sended: false,
    sending: false
  });

  const errorMessage = {
    nom: "Le nom doit contenir au moins 3 caractères",
    email: "Merci d'entrer un email valide",
    message: "Le message doit contenir au moins 10 caractères"
  };

  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
    priorité: "moyenne",
  });

  const [touched, setTouched] = useState({
    nom: false,
    email: false,
    message: false
  });

  const verificationFormulaire = () => {
    const newValidState = {
      nom: formData.nom.length > 3,
      email: formData.email.includes('@') && formData.email.includes('.'),
      message: formData.message.length > 10,
      priorité: true,
    };

    const allValid = newValidState.nom && newValidState.email && newValidState.message;

    setFormValid({
      ...formValid,
      ...newValidState,
      send: allValid
    });

    return allValid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
    if (touched[e.target.name]) {
      setTimeout(() => verificationFormulaire(), 100);
    }
  };

  const handleBlur = (fieldName) => {
    setTouched({ ...touched, [fieldName]: true });
    verificationFormulaire();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!verificationFormulaire()) {
      return;
    }

    setFormValid({ ...formValid, sending: true });

    try {
      const result = await sendEmail(formData);
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Resultat : ", result);
      
      setFormValid({ ...formValid, sended: true, sending: false });
      
      setFormData({
        nom: "",
        email: "",
        message: "",
        priorité: "moyenne",
      });
      
      setTouched({
        nom: false,
        email: false,
        message: false
      });

      setTimeout(() => {
        setFormValid({
          nom: false,
          email: false,
          message: false,
          priorité: true,
          send: false,
          sended: false,
          sending: false
        });
      }, 5000);

    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setFormValid({ ...formValid, sending: false });
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: "Email",
      content: "chaima.hamdaoui101@gmail.com",
      link: "mailto:chaima.hamdaoui101@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaPhone className="text-3xl" />,
      title: "Téléphone",
      content: "+216 92260283",
      link: "tel:+216 92260283",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: "Localisation",
      content: "Sfax, Tunisie",
      link: "#",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-2xl" />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/chaima-hamdaoui/",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: <FaGithub className="text-2xl" />,
      name: "GitHub",
      link: "https://github.com",
      color: "bg-gray-800 hover:bg-gray-900"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contactez-moi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une question ? Un projet en tête ? N'hésitez pas à me contacter !
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Side - Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="block bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center text-white mb-4 shadow-lg`}>
                  {info.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{info.title}</h3>
                <p className="text-gray-600">{info.content}</p>
              </a>
            ))}

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Réseaux sociaux</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 ${social.color} text-white rounded-xl p-4 flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="font-bold mb-3 text-lg">💡 Disponibilité</h3>
              <p className="text-white/90">
                Je suis actuellement à la recherche d'un stage PFE. Disponible immédiatement pour discuter de vos projets !
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:col-span-2">
            {/* Success Message */}
            {formValid.sended && (
              <div className="mb-8 bg-green-50 border-l-4 border-green-500 rounded-2xl shadow-lg overflow-hidden animate-fade-in">
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaCheckCircle className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-800 mb-1">
                        Message envoyé avec succès ! 🎉
                      </h3>
                      <p className="text-green-600">
                        Je vous répondrai dans les plus brefs délais.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Form Container */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              
              {/* Form Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-8">
                <h3 className="text-3xl font-bold text-white mb-2">Envoyez-moi un message</h3>
                <p className="text-blue-100">
                  Remplissez le formulaire ci-dessous et je vous répondrai rapidement
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                
                {/* Nom */}
                <div>
                  <label htmlFor="nom" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <FaUser className="text-blue-600" />
                    Nom et Prénom
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    onBlur={() => handleBlur('nom')}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 ${
                      touched.nom
                        ? formValid.nom
                          ? 'border-green-500 focus:ring-green-200 bg-green-50'
                          : 'border-red-500 focus:ring-red-200 bg-red-50'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
                    }`}
                    placeholder="Entrez votre nom complet"
                    required
                  />
                  {touched.nom && !formValid.nom && (
                    <div className="flex items-center gap-2 mt-2 text-red-600 text-sm font-medium">
                      <FaExclamationTriangle />
                      <span>{errorMessage.nom}</span>
                    </div>
                  )}
                  {touched.nom && formValid.nom && (
                    <div className="flex items-center gap-2 mt-2 text-green-600 text-sm font-medium">
                      <FaCheckCircle />
                      <span>Nom valide ✓</span>
                    </div>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <FaEnvelope className="text-blue-600" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur('email')}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 ${
                      touched.email
                        ? formValid.email
                          ? 'border-green-500 focus:ring-green-200 bg-green-50'
                          : 'border-red-500 focus:ring-red-200 bg-red-50'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
                    }`}
                    placeholder="votre.email@gmail.com"
                    required
                  />
                  {touched.email && !formValid.email && (
                    <div className="flex items-center gap-2 mt-2 text-red-600 text-sm font-medium">
                      <FaExclamationTriangle />
                      <span>{errorMessage.email}</span>
                    </div>
                  )}
                  {touched.email && formValid.email && (
                    <div className="flex items-center gap-2 mt-2 text-green-600 text-sm font-medium">
                      <FaCheckCircle />
                      <span>Email valide ✓</span>
                    </div>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <FaCommentDots className="text-blue-600" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={() => handleBlur('message')}
                    rows="6"
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 resize-none ${
                      touched.message
                        ? formValid.message
                          ? 'border-green-500 focus:ring-green-200 bg-green-50'
                          : 'border-red-500 focus:ring-red-200 bg-red-50'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
                    }`}
                    placeholder="Écrivez votre message ici..."
                    required
                  />
                  {touched.message && !formValid.message && (
                    <div className="flex items-center gap-2 mt-2 text-red-600 text-sm font-medium">
                      <FaExclamationTriangle />
                      <span>{errorMessage.message}</span>
                    </div>
                  )}
                  {touched.message && formValid.message && (
                    <div className="flex items-center gap-2 mt-2 text-green-600 text-sm font-medium">
                      <FaCheckCircle />
                      <span>Message valide ✓</span>
                    </div>
                  )}
                </div>

                {/* Priorité */}
                <div>
                  <label htmlFor="priorité" className="block text-sm font-semibold text-gray-700 mb-2">
                    Priorité du message
                  </label>
                  <select
                    name="priorité"
                    id="priorité"
                    onChange={handleChange}
                    value={formData.priorité}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300 cursor-pointer bg-white"
                  >
                    <option value="haute">🔴 Haute - Urgent</option>
                    <option value="moyenne">🟡 Moyenne - Normal</option>
                    <option value="basse">🟢 Basse - Non urgent</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!formValid.send || formValid.sending}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    formValid.send && !formValid.sending
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-2xl transform hover:scale-[1.02]'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {formValid.sending ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </button>

                {/* Form Info */}
                <p className="text-center text-sm text-gray-500">
                  🔒 Vos données sont protégées et ne seront jamais partagées
                </p>
              </form>
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
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ContactForm;