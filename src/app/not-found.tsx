// src/pages/NotFound.js
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold tracking-widest">404</h1>
        <p className="text-lg mt-4">Oops! The page you are looking for does not exist.</p>
        
        <Link href="/">
          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-lg transition">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
