import React, { useEffect, useState } from "react";
import { getUsers } from "../../api/usersApi";
import { getProjects } from "../../api/projectsApi";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";

export default function AdminAnalytics() {
  const [usersCount, setUsersCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const users = await getUsers();
        const projects = await getProjects();

        setUsersCount(users.length);
        setProjectsCount(projects.length);

        const years = [...new Set(projects.map(p => p.year))].sort();
        setChartData(years.map(y => ({
          year: y,
          projects: projects.filter(p => p.year === y).length
        })));
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[600px]">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <p className="text-gray-600 font-medium text-lg">Chargement des statistiques...</p>
        </div>
      </div>
    );
  }

  // Calcul des statistiques supplémentaires
  const totalItems = usersCount + projectsCount;
  const userPercentage = totalItems > 0 ? Math.round((usersCount / totalItems) * 100) : 0;
  const projectPercentage = totalItems > 0 ? Math.round((projectsCount / totalItems) * 100) : 0;

  return (
    <div className="space-y-8">
      
      {/* Header avec gradient */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-8 md:p-10 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Statistiques & Analyses 📊
            </h1>
          </div>
          <p className="text-indigo-100 text-lg">
            Vue d'ensemble de vos données et métriques clés
          </p>
        </div>
      </div>

      {/* Cartes de statistiques principales */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Carte Utilisateurs */}
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 transform hover:-translate-y-2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                👥
              </div>
              <div className="text-right">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Total</div>
              </div>
            </div>

            <p className="text-sm text-gray-600 font-semibold mb-1">Utilisateurs</p>
            <p className="text-4xl font-bold text-gray-900 mb-3">{usersCount}</p>
            
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full transition-all duration-1000"
                  style={{ width: `${userPercentage}%` }}
                ></div>
              </div>
              <span className="text-xs font-bold text-gray-500">{userPercentage}%</span>
            </div>
          </div>
        </div>

        {/* Carte Projets */}
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 transform hover:-translate-y-2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                📁
              </div>
              <div className="text-right">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Total</div>
              </div>
            </div>

            <p className="text-sm text-gray-600 font-semibold mb-1">Projets</p>
            <p className="text-4xl font-bold text-gray-900 mb-3">{projectsCount}</p>
            
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-600 h-full rounded-full transition-all duration-1000"
                  style={{ width: `${projectPercentage}%` }}
                ></div>
              </div>
              <span className="text-xs font-bold text-gray-500">{projectPercentage}%</span>
            </div>
          </div>
        </div>

        {/* Carte Total Items */}
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 transform hover:-translate-y-2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                📊
              </div>
              <div className="text-right">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Combiné</div>
              </div>
            </div>

            <p className="text-sm text-gray-600 font-semibold mb-1">Total Éléments</p>
            <p className="text-4xl font-bold text-gray-900 mb-3">{totalItems}</p>
            
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full text-emerald-700 bg-emerald-100">
                ✓ Actif
              </span>
            </div>
          </div>
        </div>

        {/* Carte Moyenne */}
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 transform hover:-translate-y-2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                📈
              </div>
              <div className="text-right">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Ratio</div>
              </div>
            </div>

            <p className="text-sm text-gray-600 font-semibold mb-1">Projets/Utilisateur</p>
            <p className="text-4xl font-bold text-gray-900 mb-3">
              {usersCount > 0 ? (projectsCount / usersCount).toFixed(1) : '0'}
            </p>
            
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full text-amber-700 bg-amber-100">
                ↑ Moyenne
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Graphique principal */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
              📊
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Distribution des Projets</h2>
              <p className="text-sm text-gray-500">Évolution par année</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200">
            <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
            <span className="text-sm font-semibold text-gray-700">Projets</span>
          </div>
        </div>

        {chartData.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">Aucune donnée disponible</h3>
            <p className="text-gray-500">Créez des projets pour voir les statistiques</p>
          </div>
        ) : (
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366F1" stopOpacity={0.9} />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0.7} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                <XAxis 
                  dataKey="year" 
                  stroke="#6B7280"
                  style={{ fontSize: '14px', fontWeight: '600' }}
                  tickLine={false}
                />
                <YAxis 
                  stroke="#6B7280"
                  style={{ fontSize: '14px', fontWeight: '600' }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '12px',
                    color: '#fff',
                    fontWeight: '600',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                  }}
                  cursor={{ fill: 'rgba(99, 102, 241, 0.1)' }}
                  labelStyle={{ color: '#A5B4FC', marginBottom: '4px' }}
                />
                <Bar 
                  dataKey="projects" 
                  fill="url(#barGradient)" 
                  radius={[12, 12, 0, 0]}
                  maxBarSize={80}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* Section d'insights supplémentaires */}
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Répartition */}
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-lg p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                🎯
              </div>
              <h3 className="text-2xl font-bold">Répartition</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold opacity-90">Utilisateurs</span>
                  <span className="text-lg font-bold">{usersCount}</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-white h-full rounded-full transition-all duration-1000"
                    style={{ width: `${userPercentage}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold opacity-90">Projets</span>
                  <span className="text-lg font-bold">{projectsCount}</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-white h-full rounded-full transition-all duration-1000"
                    style={{ width: `${projectPercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
              💡
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Insights</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Base d'utilisateurs</p>
                <p className="text-sm text-gray-600">{usersCount} utilisateur{usersCount > 1 ? 's' : ''} enregistré{usersCount > 1 ? 's' : ''}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl border border-purple-100">
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Portfolio de projets</p>
                <p className="text-sm text-gray-600">{projectsCount} projet{projectsCount > 1 ? 's' : ''} au total</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Moyenne d'engagement</p>
                <p className="text-sm text-gray-600">
                  {usersCount > 0 ? (projectsCount / usersCount).toFixed(1) : '0'} projet{projectsCount / usersCount > 1 ? 's' : ''} par utilisateur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}