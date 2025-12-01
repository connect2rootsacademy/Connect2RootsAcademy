import React from 'react';
import { useNavigate } from 'react-router-dom';

const ViksitBharat = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="w-full max-w-3xl bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-orange-500">
          Coming Soon
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold text-orange-300">
          Stay tuned
        </h2>

        <p className="mt-6 text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
          We're building a dedicated page with upcoming job-ready skills, short
          professional courses, and hands-on projects to help you land your next
          role. Expect curated content on web development, data fundamentals,
          cloud essentials, and career support — launching soon.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-semibold text-white shadow-md transform transition hover:scale-[1.01] bg-gradient-to-r from-orange-500 to-yellow-400"
          >
            Go Back to Home
          </button>

          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-semibold text-orange-600 border-2 border-orange-200 bg-white/70 shadow-sm hover:bg-orange-50 transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViksitBharat;
