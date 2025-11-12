import React from 'react';
import { Link } from 'react-router-dom';

const ApplyAsATrainerModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-neutral-900/50 to-neutral-900/50 backdrop-blur-md">
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div> */}

      <div className="relative bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-w-lg w-full mx-4 border border-white/20">
        <button
          className="absolute top-3 right-2 text-red-500 bg-red-500 hover:bg-red-500 hover:text-white rounded-full text-lg font-light transition-all duration-300  w-5 h-5 flex items-center justify-center backdrop-blur-sm"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <div className="relative mb-6 rounded-md overflow-hidden shadow-lg">
          <img
            src="https://i.pinimg.com/736x/7a/c5/30/7ac5303006515dd94915d56dd37cb281.jpg"
            alt="Apply as Trainer"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
        <h2 className="text-5xl font-bold tracking-normal text-gray-800 mb-2 leading-tight">
          <span className="text-green-600 tracking-tight  font-extrabold  uppercase">
            Apply{' '}
          </span>
          <span className="text-gray-800">as a Trainer</span>
        </h2>

        <p className="mb-8 text-gray-600 font-light text-base leading-sm">
          Share your expertise and join our team of trainers at C2R Academy.
          Help learners grow and make an impact in their careers!
        </p>
        <Link
          to="/applyastrainer"
          onClick={onClose}
          type="button"
          className="inline-flex items-center gap-2 justify-center relative shadow-xl text-lg bg-white backdrop-blur-md font-semibold border-2 border-green-600 before:absolute before:w-0 before:h-full before:top-0 before:left-0 before:rounded-full before:bg-green-600 before:transition-all before:duration-700 hover:text-white hover:before:w-full before:-z-10 px-6 py-2 overflow-hidden rounded-full group"
        >
          <span>Apply Now</span>
          <svg
            className="w-6 h-6 ml-1 transform rotate-45 transition-transform duration-300 group-hover:rotate-90 rounded-full border border-gray-700 group-hover:border-white p-1"
            viewBox="0 0 16 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              className="fill-gray-800 group-hover:fill-white"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ApplyAsATrainerModal;
