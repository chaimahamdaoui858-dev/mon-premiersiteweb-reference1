import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';

// Layouts
import Layout from './Pages/Layout.jsx';
import AdminLayout from './Pages/AdminLayout.jsx';

// Pages publiques
import Hero from './components/Accueil/Hero.jsx';
import About from './components/Accueil/About.jsx';
import Experience from './components/Accueil/Experience.jsx';
import Projects from './components/Accueil/Projects.jsx';
import ContactForm from './components/Formulaire/FormulaireG6.jsx';
import NotFound from "./components/NotFound.jsx";

// Pages admin
import AdminDashboard from './Pages/admin/Dashboard.jsx';
import AdminUsers from './Pages/admin/Users.jsx';
import AdminAnalytics from './Pages/admin/AdminAnalytics.jsx';
import AdminSettings from './Pages/admin/Settings.jsx';

// 🆕 CRUD Projets (AJOUTER CES IMPORTS)
import ProjectsList from './Pages/admin/ProjectsList.jsx';
import ProjectForm from './Pages/admin/ProjectForm.jsx';
import ProjectView from './Pages/admin/ProjectView.jsx';

// Auth
import Login from './Pages/Login.jsx';
import Logout from './Pages/Logout.jsx';
import ProtectedRoute from './components/ProtectedRouter.jsx';

function App() {
  // Récupération du token + user
  const token = localStorage.getItem('authToken');
  const user = JSON.parse(localStorage.getItem('user'));

  // Vérification stricte : token existant + rôle admin
  const isAuthenticated = token && user?.role === 'admin';

  return (
    <Routes>
      {/* Pages publiques */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Hero />} />
        <Route path="about" element={<About />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<ContactForm />} />
      </Route>

      {/* Login */}
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/admin" replace /> : <Login />}
      />

      {/* Logout */}
      <Route path="/logout" element={<Logout />} />

      {/* Pages admin protégées */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute isAllowed={isAuthenticated} redirectPath="/login">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        
        {/* 🆕 CRUD PROJETS - AJOUTER CES ROUTES */}
        <Route path="projects" element={<ProjectsList />} />
        <Route path="projects/new" element={<ProjectForm />} />
        <Route path="projects/edit/:id" element={<ProjectForm />} />
        <Route path="projects/:id" element={<ProjectView />} />
        
        {/* Routes existantes */}
        <Route path="users" element={<AdminUsers />} />
        <Route path="analytics" element={<AdminAnalytics />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>

      {/* Page 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;