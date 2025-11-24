import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, LogInIcon, ChevronRightIcon } from 'lucide-react';
import CourseQuickview from '../../../ui/CourseQuickview/CourseQuickview';

const course = {
  name: 'Accounting & Financial Management',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Professional Courses', href: '/professional' },
  ],
  description:
    'Learn to manage, analyze, and optimize financial resources for effective decision-making, business growth, and long-term profitability.',
};

const callouts = [
  {
    name: 'Accounting & Financial Management',
    title: 'Foundations of Accounting & Financial Management',
    imageSrc:
      'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWNjb3VudGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    imageAlt: 'Accounting and Financial Management Courses Pictures',
    description:
      'Understand core principles of accounting, budgeting, and financial management for business success.',
    mainPageDesc:
      'This course offers a clear and practical understanding of accounting principles and financial management concepts. Learners explore topics like bookkeeping, financial statements, budgeting, cost analysis, and financial planning. Emphasis is placed on interpreting financial data to make informed business decisions and improve organizational efficiency. Through practical exercises and real-world examples, participants develop the analytical mindset required to manage finances effectively. By course completion, learners gain a strong grasp of both accounting fundamentals and strategic financial management — essential for aspiring accountants, entrepreneurs, and business professionals.',
    highlights: [
      'Learn to interpret financial statements and assess business performance.',
      'Understand how to plan and control financial operations effectively.',
      'Gain insights into compliance, tax laws, and audit processes.',
      'Explore methods to manage assets and maximize returns responsibly.',
    ],
    tags: ['free', 'online', 'diy', 'bilingual'],
  },
];
const AccountingAndFinance = () => {
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
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
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
        <div className="relative z-10">
          <div className="pt-6">
            {/* BREADCRUMBS */}
            <nav aria-label="Breadcrumb">
              <ol
                role="list"
                className="mx-auto flex max-w-2xl items-center space-x-2 px-5 sm:px-6 lg:max-w-7xl lg:px-8"
              >
                {course.breadcrumbs.map((breadcrumb) => (
                  <li key={breadcrumb.id}>
                    <div className="flex items-center">
                      <a
                        href={breadcrumb.href}
                        className="mr-2 text-sm font-regular text-gray-500"
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
                    className="font-regular text-sm text-gray-900 hover:text-gray-600"
                  >
                    {course.name}
                  </a>
                </li>
              </ol>
            </nav>

            {/* Course info */}
            <div>
              <div class="mx-auto max-w-4xl text-center">
                <p class="mt-20  font-extrabold tracking-tight text-balance text-black text-5xl sm:text-8xl sm:leading-19">
                  <span className="text-green-600">Accounting</span> and
                  Financial Management
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
                          5 videos
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

export default AccountingAndFinance;
