const Error = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Error 404</h1>
        <p className="text-xl text-gray-800 mb-4">Oops! Page not found.</p>
        <p className="text-gray-600 mb-4">
          The page you are looking for might have been removed or temporarily
          unavailable.
        </p>
        <button
          onClick={() => window.history.back()}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Error;
