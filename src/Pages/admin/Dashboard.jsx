import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { getUsers } from "../../api/usersApi";
import { getProjects } from "../../api/projectsApi";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const users = await getUsers();
        const projects = await getProjects();

        // Stats avec configuration visuelle
        setStats([
          { 
            label: "Total Utilisateurs", 
            value: users.length, 
            change: "+12%", 
            isPositive: true,
            icon: "👥",
            gradient: "from-blue-500 to-blue-600",
            bgGradient: "from-blue-50 to-blue-100"
          },
          { 
            label: "Projets Actifs", 
            value: projects.filter(p => p.status === "en-cours").length, 
            change: "+8%", 
            isPositive: true,
            icon: "📊",
            gradient: "from-emerald-500 to-emerald-600",
            bgGradient: "from-emerald-50 to-emerald-100"
          },
          { 
            label: "Messages", 
            value: 89, 
            change: "+23%", 
            isPositive: true,
            icon: "📧",
            gradient: "from-purple-500 to-purple-600",
            bgGradient: "from-purple-50 to-purple-100"
          },
          { 
            label: "Vues Totales", 
            value: "45.2K", 
            change: "+18%", 
            isPositive: true,
            icon: "👁️",
            gradient: "from-amber-500 to-amber-600",
            bgGradient: "from-amber-50 to-amber-100"
          }
        ]);

        // Recent Activity avec icônes et couleurs
        const recent = [
          ...projects.slice(-3).map(p => ({ 
            action: "Projet créé", 
            project: p.title, 
            time: `Année ${p.year}`,
            icon: "📁",
            color: "text-blue-600"
          })),
          ...users.slice(-3).map(u => ({ 
            action: "Utilisateur ajouté", 
            project: u.name, 
            time: u.role,
            icon: "👤",
            color: "text-purple-600"
          }))
        ];
        setRecentActivity(recent);

        // Chart data : projets par année
        const years = [...new Set(projects.map(p => p.year))].sort();
        const chart = years.map(y => ({
          year: y,
          projects: projects.filter(p => p.year === y).length
        }));
        setChartData(chart);

        setLoading(false);
      } catch (error) {
        console.error("Erreur fetch dashboard:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[600px]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Chargement du tableau de bord...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Bannière de bienvenue */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Bienvenue sur votre tableau de bord 👋
          </h1>
          <p className="text-blue-100 text-lg">
            Voici un aperçu de vos statistiques et activités récentes
          </p>
        </div>
      </div>

      {/* Cartes statistiques */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 transform hover:-translate-y-2 relative overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            
            <div className="relative z-10">
              <div className={`w-14 h-14 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center text-white text-3xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>

              <p className="text-sm text-gray-500 mb-1 font-medium">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
              
              <div className="flex items-center gap-2">
                <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${
                  stat.isPositive 
                    ? 'text-green-700 bg-green-100' 
                    : 'text-red-700 bg-red-100'
                }`}>
                  {stat.isPositive ? '↑' : '↓'}
                  {stat.change}
                </span>
                <span className="text-xs text-gray-400">vs mois dernier</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Grille principale de contenu */}
      <div className="grid lg:grid-cols-3 gap-6">
        
        {/* Activité récente */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl">
                ⏰
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Activité Récente</h2>
            </div>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-semibold hover:underline">
              Voir tout →
            </button>
          </div>
          
          <div className="space-y-3">
            {recentActivity.map((act, idx) => (
              <div 
                key={idx} 
                className="group flex items-center justify-between p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 border border-transparent hover:border-blue-200"
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {act.icon}
                  </div>
                  <div>
                    <p className={`font-semibold ${act.color} group-hover:text-blue-700 transition-colors`}>
                      {act.action}
                    </p>
                    <p className="text-sm text-gray-500 group-hover:text-gray-700">
                      {act.project}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-medium text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                    {act.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions rapides */}
        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl shadow-lg p-6 border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white text-xl">
              ➕
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Actions Rapides</h2>
          </div>
          
          <div className="space-y-3">
            <button 
              onClick={() => navigate("/admin/projects/new")} 
              className="group w-full flex items-center gap-3 px-4 py-4 bg-white rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 hover:border-blue-300"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-2xl group-hover:bg-blue-600 transition-all">
                📁
              </div>
              <span className="font-semibold text-gray-700 group-hover:text-blue-600">
                Nouveau Projet
              </span>
            </button>
            
            <button 
              onClick={() => navigate("/admin/users")} 
              className="group w-full flex items-center gap-3 px-4 py-4 bg-white rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 hover:border-purple-300"
            >
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-2xl group-hover:bg-purple-600 transition-all">
                👤
              </div>
              <span className="font-semibold text-gray-700 group-hover:text-purple-600">
                Ajouter Utilisateur
              </span>
            </button>
            
            <button 
              onClick={() => navigate("/admin/analytics")} 
              className="group w-full flex items-center gap-3 px-4 py-4 bg-white rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 hover:border-green-300"
            >
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-2xl group-hover:bg-green-600 transition-all">
                📈
              </div>
              <span className="font-semibold text-gray-700 group-hover:text-green-600">
                Voir Statistiques
              </span>
            </button>
          </div>

          {/* Mini indicateur de performance */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-600">Performance</span>
              <span className="text-sm font-bold text-green-600">Excellent</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-full rounded-full transition-all duration-1000" style={{width: '87%'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Section graphiques */}
      <div className="grid lg:grid-cols-2 gap-6">
        
        {/* Graphique en barres */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl">
              📊
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Projets par Année</h2>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis 
                  dataKey="year" 
                  stroke="#9CA3AF"
                  style={{ fontSize: '12px', fontWeight: '600' }}
                />
                <YAxis 
                  stroke="#9CA3AF"
                  style={{ fontSize: '12px', fontWeight: '600' }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '12px',
                    color: '#fff',
                    fontWeight: '600'
                  }}
                />
                <Bar 
                  dataKey="projects" 
                  fill="url(#colorGradient)" 
                  radius={[10, 10, 0, 0]}
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Carte de performance globale */}
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-lg p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl">
                🏆
              </div>
              <h2 className="text-2xl font-bold">Performance Globale</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm opacity-90">Taux de réussite</span>
                  <span className="text-xl font-bold">94%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-full rounded-full transition-all duration-1000" style={{width: '94%'}}></div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm opacity-90">Engagement utilisateurs</span>
                  <span className="text-xl font-bold">87%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-full rounded-full transition-all duration-1000" style={{width: '87%'}}></div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm opacity-90">Satisfaction</span>
                  <span className="text-xl font-bold">92%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-full rounded-full transition-all duration-1000" style={{width: '92%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}