function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center section-shell">
      <div className="text-center glass-card rounded-3xl p-10 max-w-md mx-4 hover-float">
        <h1 className="text-6xl font-bold text-gray-900 mb-4 font-display">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page non trouvée</p>

        <a
          href="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover-float inline-flex"
        >
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
}

export default NotFound;
