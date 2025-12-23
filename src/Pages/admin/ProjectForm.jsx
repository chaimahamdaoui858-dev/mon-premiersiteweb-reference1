import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createProject, updateProject, getProjectById } from '../../api/projectsApi';

export default function ProjectForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    techStack: [],
    status: 'en-cours',
    year: new Date().getFullYear().toString(),
    githubUrl: '',
    liveUrl: '',
  });

  const [techInput, setTechInput] = useState('');

  useEffect(() => {
    if (isEdit) {
      loadProject();
    }
  }, [id]);

  async function loadProject() {
    try {
      const data = await getProjectById(id);
      setFormData(data);
    } catch (error) {
      alert('Erreur de chargement');
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function addTech() {
    if (techInput.trim()) {
      setFormData(prev => ({
        ...prev,
        techStack: [...prev.techStack, techInput.trim()]
      }));
      setTechInput('');
    }
  }

  function removeTech(index) {
    setFormData(prev => ({
      ...prev,
      techStack: prev.techStack.filter((_, i) => i !== index)
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      if (isEdit) {
        await updateProject(id, formData);
        alert('Projet modifié !');
      } else {
        await createProject(formData);
        alert('Projet créé !');
      }
      navigate('/admin/projects');
    } catch (error) {
      alert('Erreur: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header with gradient */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-8 md:p-10 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -mr-36 -mt-36 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/10 rounded-full -ml-28 -mb-28 blur-3xl"></div>
        
        <div className="relative z-10">
          <button
            onClick={() => navigate('/admin/projects')}
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-medium">Retour à la liste</span>
          </button>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {isEdit ? '✏️ Modifier le projet' : '✨ Nouveau projet'}
          </h1>
          <p className="text-indigo-100 text-lg mt-2">
            {isEdit ? 'Mettez à jour les informations de votre projet' : 'Créez un nouveau projet exceptionnel'}
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Main Information Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Informations générales</h2>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Titre du projet *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
              placeholder="Ex: Application de gestion de tâches"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400 resize-none"
              placeholder="Décrivez votre projet en détail..."
              required
            />
            <p className="text-xs text-gray-500 mt-2">
              Expliquez l'objectif, les fonctionnalités principales et la valeur ajoutée de votre projet
            </p>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Technologies utilisées</h2>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-3">
              Stack technique
            </label>
            <div className="flex gap-3 mb-4">
              <input
                type="text"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTech())}
                className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder-gray-400"
                placeholder="Ex: React, Node.js, MongoDB..."
              />
              <button
                type="button"
                onClick={addTech}
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all font-semibold whitespace-nowrap"
              >
                + Ajouter
              </button>
            </div>
            
            {/* Tech Stack Display */}
            <div className="min-h-[60px] p-4 bg-gradient-to-br from-gray-50 to-indigo-50 rounded-xl border-2 border-dashed border-gray-200">
              {formData.techStack.length === 0 ? (
                <p className="text-gray-400 text-center text-sm py-2">
                  Aucune technologie ajoutée. Commencez par en ajouter une ci-dessus.
                </p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {formData.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="group inline-flex items-center gap-2 px-4 py-2 bg-white text-indigo-700 rounded-lg font-semibold border border-indigo-200 shadow-sm hover:shadow-md transition-all"
                    >
                      <span>{tech}</span>
                      <button
                        type="button"
                        onClick={() => removeTech(i)}
                        className="w-5 h-5 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                        title="Supprimer"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Liens du projet</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* GitHub URL */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  URL GitHub
                </span>
              </label>
              <input
                type="url"
                name="githubUrl"
                value={formData.githubUrl}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder-gray-400"
                placeholder="https://github.com/username/repo"
              />
            </div>

            {/* Live URL */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  URL Live (Démo)
                </span>
              </label>
              <input
                type="url"
                name="liveUrl"
                value={formData.liveUrl}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder-gray-400"
                placeholder="https://monprojet.com"
              />
            </div>
          </div>
        </div>

        {/* Status & Year Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Statut et période</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Status */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Statut du projet *
              </label>
              <div className="relative">
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all appearance-none bg-white text-gray-900 font-medium"
                  required
                >
                  <option value="en-cours">⚡ En cours</option>
                  <option value="termine">✓ Terminé</option>
                  <option value="planifie">◯ Planifié</option>
                </select>
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Year */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Année de réalisation *
              </label>
              <input
                type="text"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder-gray-400"
                placeholder="2024"
                required
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-xl transition-all font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enregistrement...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {isEdit ? 'Sauvegarder les modifications' : 'Créer le projet'}
              </>
            )}
          </button>
          
          <button
            type="button"
            onClick={() => navigate('/admin/projects')}
            className="flex-1 sm:flex-initial px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all font-semibold text-lg"
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Annuler
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}