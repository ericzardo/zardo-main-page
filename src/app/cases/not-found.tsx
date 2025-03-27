"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <article className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <Link 
          href="/" 
          className="text-blue-500 hover:text-blue-700 underline"
          aria-label="Return to homepage"
        >
          Return to Home
        </Link>
      </article>
    </main>
  );
};

export default NotFound;
