const NotFoundScreen = () => {
  return (
    <div className="text-center pt-16">
      <h1 className="text-6xl font-bold mb-6 text-sky-600">404</h1>
      <p className="text-2xl mb-8 text-slate-300">Oops! Page not found.</p>
      <a
        href="/"
        className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default NotFoundScreen;
