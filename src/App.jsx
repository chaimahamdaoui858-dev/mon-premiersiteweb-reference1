import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';

import ProtectedRoute from './components/ProtectedRouter.jsx';
import { ThemeProvider } from "./context/ThemeContext.jsx";
import ScrollToTop from "./components/Commun/ScrollToTop.jsx";
import PageLoader from "./components/Commun/PageLoader.jsx";

// Layouts
const Layout = lazy(() => import('./Pages/Layout.jsx'));
const AdminLayout = lazy(() => import('./Pages/AdminLayout.jsx'));

// Pages publiques
const Hero = lazy(() => import('./components/Accueil/Hero.jsx'));
const About = lazy(() => import('./components/Accueil/About.jsx'));
const Experience = lazy(() => import('./components/Accueil/Experience.jsx'));
const Projects = lazy(() => import('./components/Accueil/Projects.jsx'));
const ContactForm = lazy(() => import('./components/Formulaire/FormulaireG6.jsx'));
const NotFound = lazy(() => import("./components/NotFound.jsx"));

// Pages admin
const AdminDashboard = lazy(() => import('./Pages/admin/Dashboard.jsx'));
const AdminUsers = lazy(() => import('./Pages/admin/Users.jsx'));
const AdminAnalytics = lazy(() => import('./Pages/admin/AdminAnalytics.jsx'));
const AdminSettings = lazy(() => import('./Pages/admin/Settings.jsx'));

// 🆕 CRUD Projets
const ProjectsList = lazy(() => import('./Pages/admin/ProjectsList.jsx'));
const ProjectForm = lazy(() => import('./Pages/admin/ProjectForm.jsx'));
const ProjectView = lazy(() => import('./Pages/admin/ProjectView.jsx'));

// Auth
const Login = lazy(() => import('./Pages/Login.jsx'));
const Logout = lazy(() => import('./Pages/Logout.jsx'));

function App() {
  // Récupération du token + user
  const token = localStorage.getItem('authToken');
  const user = JSON.parse(localStorage.getItem('user'));

  // Vérification stricte : token existant + rôle admin
  const isAuthenticated = token && user?.role === 'admin';

  return (
    <ThemeProvider>
      <Suspense fallback={<PageLoader />}>
        <ScrollToTop />
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
            
            {/* 🆕 CRUD PROJETS */}
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
      </Suspense>
    </ThemeProvider>
  );
}

export default App;