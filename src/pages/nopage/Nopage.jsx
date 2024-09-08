import React from 'react';

const Nopage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-white mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <a 
          href="/" 
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-red-500 transition duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}

export default Nopage;
