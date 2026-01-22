import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { professionalCourses } from '../../data/videoData';
import { Briefcase, Layers } from 'lucide-react';

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
        className="rounded-xl shadow-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer w-full max-w-xs sm:max-w-sm bg-white mx-auto"
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
        <p className="text-sm px-4 pb-6 text-neutral-500">
          {course.description}
        </p>
      </Link>
    );
  };
  return (
    <>
      <section className=" py-10 sm:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="text-3xl text-center font-bold text-black sm:text-5xl lg:text-5xl">
              <span className="relative inline-block">
                <span className="absolute bottom-0 left-0 w-full h-3 sm:h-4 md:h-5 lg:h-6 border-b-[12px] border-orange-300 sm:border-b-[15px] md:border-b-[15px] lg:border-b-[15px] -z-10 rounded-md"></span>
                <span className="whitespace-nowrap inline-block">
                  Professional Courses
                </span>
              </span>{' '}
            </h1>
          </div> */}
          <div className="flex flex-col mx-auto items-center">
            <div className="inline-flex uppercase items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
              <Briefcase className="w-4 h-4" />
              Programs
            </div>
          </div>
          <div className="w-full flex justify-center ">
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-semibold tracking-tighter text-neutral-900 max-w-7xl mx-auto text-center leading-[1.15]">
              <span className="relative inline-block tracking-tight font-bold z-10">
                Professional Programs
                <span className="absolute -bottom-1 left-0 w-full h-full -z-10 flex items-end opacity-80 text-green-500">
                  <svg
                    className="w-full h-auto"
                    viewBox="0 0 280 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M3 18C17.6 18 33.4 14.8 47.6 12.8C61.2 10.9 75.1 9.9 88.8 10.4C101.1 10.8 113.3 13 125.6 14.8C139.9 16.9 154.3 18.8 168.8 19.4C184.9 20.1 201 19.1 217.1 17.2C228.9 15.8 240.8 13.7 252.4 11.8C260.7 10.4 271.6 9.39999 277 13"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 19C34.7 17.4 63.3 12.5 92.3 13.2C119.2 13.8 145.8 20.4 172.8 21.2C199.6 22 226.4 17.1 253 16C261 15.7 269.1 15.4 274 17"
                      stroke="currentColor"
                      strokeWidth="3"
                      opacity="0.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>{' '}
            </h1>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center px-2 sm:px-6">
            {professionalCourses.map((course) => (
              <CourseCard course={course} key={course.category} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Professional;
