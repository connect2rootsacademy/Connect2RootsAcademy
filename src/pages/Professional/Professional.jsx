import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { professionalCourses } from '../../data/videoData';

const Professional = () => {
  const getCourseLink = (category) => {
    switch (category) {
      case 'Banking & Financial Services':
        return '/bankingandfinance';
      case 'AI & Data Science':
        return '/aianddatascience';
      case 'Cloud Computing & IT':
        return '/cloudcomputing';
      case 'Web Development':
        return '/webdev';
      case 'Career Development':
        return '/careerdevelopment';
      case 'BPO & Communication':
        return '/bpo';
      case 'Sales & Marketing Strategy':
        return '/salesandmarketing';
      case 'Accounting & Financial Management':
        return '/accountingandfinance';
      case 'Design & Creative Arts':
        return '/design';
      case 'Rural Development & Entrepreneurship':
        return '/ruraldevelopment';
      default:
        return '/professional';
    }
  };

  const CourseCard = ({ course }) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const threshold = 12;

    const handleMoveLocal = (e) => {
      const { left, top, width, height } =
        e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      setTilt({ x: y * -threshold, y: x * threshold });
    };

    return (
      <Link
        to={getCourseLink(course.category)}
        className="rounded-xl shadow-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer max-w-80 bg-white"
        onMouseMove={handleMoveLocal}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        <img
          src={course.image}
          alt={course.category}
          className="w-full h-52 object-cover"
        />
        <h3 className="mt-3 px-4 pt-3 mb-1 text-xl font-extrabold text-neutral-800">
          {course.category}
        </h3>
        <p className="text-sm px-4 pb-6 text-neutral-500 w-5/6">
          {course.description}
        </p>
      </Link>
    );
  };
  return (
    <>
      <section>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-100">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
        </div>
      </section>
      <div className=" py-10 sm:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="mb-5 mt-3 text-center text-base/5 font-semibold text-gray-600">
              “The roots of education are bitter, but the fruit is sweet –
              Aristotle"
            </h2>
            <h1 className="text-4xl text-center font-bold text-black sm:text-5xl lg:text-5xl">
              Choose a Sector to Discover
              <span className="relative inline-block">
                <span className="absolute bottom-0 left-0 w-full h-3 sm:h-4 bg-[#4ADE80] -z-10 rounded-md"></span>
                Professional Courses
              </span>{' '}
            </h1>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalCourses.map((course) => (
              <CourseCard course={course} key={course.category} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Professional;
