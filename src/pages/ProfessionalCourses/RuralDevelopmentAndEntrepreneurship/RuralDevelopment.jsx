import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, LogInIcon, ChevronRightIcon } from 'lucide-react';
import 'react-toastify/dist/ReactToastify.css';
import CourseQuickview from '../../../ui/CourseQuickview/CourseQuickview';

const course = {
  name: 'Rural Development & Entrepreneurship',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Professional Courses', href: '/professional' },
  ],
  description:
    'Learn how innovation and entrepreneurship can drive sustainable growth, empowerment, and opportunities in rural communities.',
};

const callouts = [
  {
    name: 'Rural Development & Entrepreneurship',
    title: 'Foundations of Rural Development and Entrepreneurship',
    imageSrc:
      'https://plus.unsplash.com/premium_photo-1664478063149-295e8449a105?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHJ1cmFsJTIwZGV2ZWxvcG1lbnQlMjB0ZWNobm9sb2d5fGVufDB8fDB8fHww',
    imageAlt: 'Rural Development and Entrepreneurship Courses Pictures',
    description:
      'Understand grassroots challenges, business creation, and community-based development.',
    mainPageDesc:
      'This course explores the vital link between rural development and entrepreneurship, focusing on sustainable growth and community empowerment. Learners gain insight into rural economies, resource management, government initiatives, and social enterprise creation. The curriculum emphasizes practical approaches to problem-solving and innovation in rural contexts. By studying successful rural business models, participants understand how entrepreneurship can drive economic development and improve livelihoods. By course completion, learners are equipped with the knowledge and vision to design impactful rural development strategies and initiate ventures that create lasting social value.',
    highlights: [
      'Explore strategies to enhance rural economies and livelihoods.',
      'Learn to start and manage small-scale rural enterprises.',
      'Understand how to create jobs and support local initiatives.',
      'Use modern technology to solve rural challenges effectively.',
    ],
    tags: ['free', 'online', 'diy', 'bilingual'],
  },
];
const RuralDevelopment = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const openQuickView = (course) => {
    setSelectedCourse(course);
  };

  const closeQuickView = () => {
    setSelectedCourse(null);
  };

  return (
    <>
      {/* Page1 */}
      <section className="relative">
        <div className="relative z-10">
          <div className="pt-6">
            {/* BREADCRUMBS */}
            <nav aria-label="Breadcrumb">
              <ol
                role="list"
                className="mx-auto  flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
              >
                {course.breadcrumbs.map((breadcrumb) => (
                  <li key={breadcrumb.id}>
                    <div className="flex items-center">
                      <a
                        href={breadcrumb.href}
                        className="mr-2 text-sm font-medium text-gray-500"
                      >
                        {breadcrumb.name}
                      </a>
                      <ChevronRightIcon className="size-5 text-gray-400" />
                    </div>
                  </li>
                ))}
                <li className="text-sm">
                  <a
                    href={course.href}
                    aria-current="page"
                    className="font-medium text-gray-900 hover:text-gray-600"
                  >
                    {course.name}
                  </a>
                </li>
              </ol>
            </nav>

            {/* Course info */}
            <div>
              <div class="mx-auto max-w-4xl text-center">
                <p class="mt-20 font-extrabold tracking-tight text-balance text-black text-5xl sm:text-8xl sm:leading-19">
                  <span className="text-green-600">Rural</span> Development and
                  Entrepreneurship Arts
                </p>
              </div>
              <p class="mx-auto mt-4 max-w-2xl text-center font-light text-pretty text-gray-700 p-2 text-sm sm:text-xl/8">
                {course.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Page 2 */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
              <h2 className="text-2xl font-medium text-gray-900 tracking-tight">
                Available Courses
              </h2>

              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
                {callouts.map((callout) => (
                  <div key={callout.name} className="group relative">
                    <div className="relative ">
                      <Link
                        to={`/courses/professional/${callout.title
                          .toLowerCase()
                          .replace(/\s+/g, '-')}/?category=${encodeURIComponent(
                          callout.name
                        )}`}
                      >
                        <img
                          alt={callout.imageAlt}
                          src={callout.imageSrc}
                          className="w-full rounded-xl bg-white object-cover group-hover:opacity-80 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                        />
                      </Link>
                      <span className="absolute top-2 right-2 bg-green-600 text-white text-xs font-bold tracking-wider py-1 px-2 rounded-full ">
                        ONLINE
                      </span>
                      <button
                        onClick={() => openQuickView(callout)}
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out px-4 py-2 bg-black/70 text-white rounded-md cursor-pointer flex items-center justify-center gap-2 w-[calc(100%-2rem)]"
                      >
                        Quick View <ArrowUpRight className="size-5" />
                      </button>
                    </div>
                    <Link
                      to={`/courses/professional/${callout.title
                        .toLowerCase()
                        .replace(/\s+/g, '-')}/?category=${encodeURIComponent(
                        callout.name
                      )}`}
                    >
                      <h3 className="mt-6 text-sm text-gray-500">
                        {callout.name}
                      </h3>
                      <p className="text-xl  font-bold text-gray-900">
                        {callout.title}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className=" bg-green-100 text-green-800 hover:bg-green-800 hover:text-green-100 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                          Beginner
                        </span>
                        <span className=" bg-blue-100 text-blue-800 hover:bg-blue-800 hover:text-blue-100 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                          4 videos
                        </span>
                        <span className=" bg-yellow-100 text-yellow-800 hover:bg-yellow-800 hover:text-yellow-100 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                          Bilingual
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <CourseQuickview course={selectedCourse} onClose={closeQuickView} />
    </>
  );
};

export default RuralDevelopment;
