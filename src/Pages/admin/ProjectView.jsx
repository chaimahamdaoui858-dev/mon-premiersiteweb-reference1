import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getProjectById, deleteProject } from '../../api/projectsApi';

export default function ProjectView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadProject();
  }, [id]);

  async function loadProject() {
    try {
      setLoading(true);
      const data = await getProjectById(id);
      setProject(data);
      setError(null);
    } catch (err) {
      setError('Projet introuvable');
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete() {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) {
      return;
    }

    try {
      await deleteProject(id);
      alert('Projet supprimé avec succès !');
      navigate('/admin/projects');
    } catch (err) {
      alert('Erreur lors de la suppression');
    }
  }

  function StatusBadge({ status }) {
    const config = {
      'en-cours': {
        bg: 'bg-amber-50',
        text: 'text-amber-700',
        border: 'border-amber-200',
        label: 'En cours',
        icon: '⚡',
        gradient: 'from-amber-500 to-orange-500'
      },
      'termine': {
        bg: 'bg-emerald-50',
        text: 'text-emerald-700',
        border: 'border-emerald-200',
        label: 'Terminé',
        icon: '✓',
        gradient: 'from-emerald-500 to-green-500'
      },
      'planifie': {
        bg: 'bg-blue-50',
        text: 'text-blue-700',
        border: 'border-blue-200',
        label: 'Planifié',
        icon: '◯',
        gradient: 'from-blue-500 to-indigo-500'
      }
    };

    const style = config[status] || config['en-cours'];

    return (
      <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border-2 ${style.bg} ${style.text} ${style.border}`}>
        <span className="text-lg">{style.icon}</span>
        {style.label}
      </span>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[600px]">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <p className="text-gray-600 font-medium text-lg">Chargement du projet...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="max-w-3xl mx-auto mt-16">
        <div className="bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-500 rounded-2xl p-8 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-red-800 mb-2">Erreur</h2>
              <p className="text-red-700 mb-6">{error || 'Projet introuvable'}</p>
              <Link
                to="/admin/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Retour à la liste
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      
      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-8 md:p-10 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        
        <div className="relative z-10">
          <Link
            to="/admin/projects"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-medium">Retour à la liste</span>
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3">
                <StatusBadge status={project.status} />
                <span className="text-white/60">•</span>
                <div className="flex items-center gap-2 text-indigo-100">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-bold">Année {project.year}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to={`/admin/projects/edit/${project.id}`}
                className="group flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-xl hover:shadow-xl transition-all font-bold transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span>Modifier</span>
              </Link>
              <button
                onClick={handleDelete}
                className="group flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 hover:shadow-xl transition-all font-bold transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span>Supprimer</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Description Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Description du projet</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              {project.description}
            </p>
          </div>

          {/* Features Card */}
          {project.features && project.features.length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Fonctionnalités principales</h2>
              </div>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-emerald-50 transition-colors">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          
          {/* Technologies Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Technologies</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack && project.techStack.length > 0 ? (
                project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-lg font-semibold text-sm border border-indigo-200 hover:shadow-md transition-all"
                  >
                    {tech}
                  </span>
                ))
              ) : (
                <p className="text-gray-400 text-sm">Aucune technologie spécifiée</p>
              )}
            </div>
          </div>

          {/* Links Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Liens</h3>
            </div>
            <div className="space-y-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-900 hover:text-white transition-all border border-gray-200 hover:border-gray-900"
                >
                  <div className="w-10 h-10 bg-gray-900 group-hover:bg-white rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-white group-hover:text-gray-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 group-hover:text-white">GitHub</div>
                    <div className="text-xs text-gray-500 group-hover:text-gray-300">Code source</div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all border border-blue-200 hover:border-transparent"
                >
                  <div className="w-10 h-10 bg-blue-600 group-hover:bg-white rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-white group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-blue-900 group-hover:text-white">Live Demo</div>
                    <div className="text-xs text-blue-700 group-hover:text-blue-100">Voir en ligne</div>
                  </div>
                  <svg className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}

              {!project.githubUrl && !project.liveUrl && (
                <div className="text-center py-8 px-4 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                  <svg className="w-10 h-10 text-gray-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  <p className="text-gray-400 text-sm font-medium">Aucun lien disponible</p>
                </div>
              )}
            </div>
          </div>

          {/* Project Info Card */}
          <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-6 border border-indigo-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Informations</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                <span className="text-sm font-semibold text-gray-600">ID du projet</span>
                <span className="font-bold text-indigo-600">#{project.id}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                <span className="text-sm font-semibold text-gray-600">Catégorie</span>
                <span className="font-bold text-gray-900 capitalize">
                  {project.category || 'Web'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                <span className="text-sm font-semibold text-gray-600">Année</span>
                <span className="font-bold text-gray-900">{project.year}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}