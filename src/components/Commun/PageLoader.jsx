const PageLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center section-shell">
      <div className="glass-card rounded-3xl px-8 py-6 flex items-center gap-4">
        <div className="h-4 w-4 rounded-full bg-blue-500 animate-pulse"></div>
        <div className="h-4 w-4 rounded-full bg-purple-500 animate-pulse [animation-delay:150ms]"></div>
        <div className="h-4 w-4 rounded-full bg-pink-500 animate-pulse [animation-delay:300ms]"></div>
        <span className="text-sm font-semibold text-gray-700">Chargement...</span>
      </div>
    </div>
  );
};

export default PageLoader;
