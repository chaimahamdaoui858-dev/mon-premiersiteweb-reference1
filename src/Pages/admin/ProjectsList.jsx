import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProjects, deleteProject } from '../../api/projectsApi';

export default function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    try {
      setLoading(true);
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      alert('Erreur de chargement: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm('Supprimer ce projet ?')) return;

    try {
      await deleteProject(id);
      setProjects(projects.filter(p => p.id !== id));
      alert('Projet supprimé !');
    } catch (error) {
      alert('Erreur: ' + error.message);
    }
  }

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.status === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const statusConfig = {
    'en-cours': { label: 'En cours', color: 'bg-amber-50 text-amber-700 border-amber-200', icon: '⚡' },
    'termine': { label: 'Terminé', color: 'bg-emerald-50 text-emerald-700 border-emerald-200', icon: '✓' },
    'planifie': { label: 'Planifié', color: 'bg-blue-50 text-blue-700 border-blue-200', icon: '◯' }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[600px]">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <p className="text-gray-600 font-medium text-lg">Chargement des projets...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header with gradient banner */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
                Mes Projets 🚀
              </h1>
              <p className="text-indigo-100 text-lg">
                {projects.length} projet{projects.length > 1 ? 's' : ''} au total
              </p>
            </div>
            <Link
              to="/admin/projects/new"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-indigo-600 rounded-2xl hover:shadow-2xl transition-all duration-300 font-bold text-lg transform hover:-translate-y-1"
            >
              <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Nouveau Projet
            </Link>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Search */}
          <div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Rechercher un projet..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Filter buttons */}
          <div className="flex gap-2">
            {['all', 'en-cours', 'termine', 'planifie'].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  filter === status
                    ? 'bg-indigo-600 text-white shadow-lg scale-105'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {status === 'all' ? 'Tous' : statusConfig[status]?.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl border-2 border-dashed border-gray-300">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full mb-6">
            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-700 mb-2">
            {searchTerm ? 'Aucun projet trouvé' : 'Aucun projet'}
          </h3>
          <p className="text-gray-500 mb-6">
            {searchTerm 
              ? 'Essayez de modifier vos critères de recherche'
              : 'Commencez par créer votre premier projet'}
          </p>
          {!searchTerm && (
            <Link
              to="/admin/projects/new"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 font-semibold transition-all hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Créer le premier projet
            </Link>
          )}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const status = statusConfig[project.status] || statusConfig['en-cours'];
            
            return (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Card Header with gradient */}
                <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                
                <div className="p-6 space-y-4">
                  {/* Title and Status */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                    <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border whitespace-nowrap ${status.color}`}>
                      {status.icon} {status.label}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 min-h-[32px]">
                    {project.techStack?.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-lg text-xs font-semibold border border-indigo-100"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack?.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-semibold">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Year badge */}
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">Année {project.year}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100">
                    <Link
                      to={`/admin/projects/${project.id}`}
                      className="flex items-center justify-center gap-2 px-3 py-2.5 bg-indigo-50 text-indigo-600 rounded-xl hover:bg-indigo-100 transition-all font-semibold text-sm group/btn"
                    >
                      <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Voir
                    </Link>
                    <Link
                      to={`/admin/projects/edit/${project.id}`}
                      className="flex items-center justify-center gap-2 px-3 py-2.5 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-100 transition-all font-semibold text-sm group/btn"
                    >
                      <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Éditer
                    </Link>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="flex items-center justify-center gap-2 px-3 py-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-all font-semibold text-sm group/btn"
                      title="Supprimer"
                    >
                      <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Stats footer */}
      {projects.length > 0 && (
        <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-2xl border border-indigo-100 p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">{projects.length}</div>
              <div className="text-sm text-gray-600 mt-1">Total</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">
                {projects.filter(p => p.status === 'en-cours').length}
              </div>
              <div className="text-sm text-gray-600 mt-1">En cours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">
                {projects.filter(p => p.status === 'termine').length}
              </div>
              <div className="text-sm text-gray-600 mt-1">Terminés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">
                {projects.filter(p => p.status === 'planifie').length}
              </div>
              <div className="text-sm text-gray-600 mt-1">Planifiés</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}