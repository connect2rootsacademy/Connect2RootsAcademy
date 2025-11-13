import React from 'react';
import { Link } from 'react-router-dom';
import { enterpreneushipCategories } from '../../data/enterpreneushipData';

const Enterpreneuship = () => {
  const cardImages = [
    'https://plus.unsplash.com/premium_vector-1719419318644-42b0cd4440af?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U29sYXIlMjBpbmR1c3RyeXxlbnwwfHwwfHx8MA%3D%3D',
    'https://plus.unsplash.com/premium_vector-1745473409263-f0b9d29456a3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1wb3J0JTIwZXhwb3J0fGVufDB8fDB8fHww',
    'https://plus.unsplash.com/premium_vector-1731112640799-66db8e44d8bb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZCUyMHBvcmNlc3Npbmd8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_vector-1748882412177-a3880243aa74?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZCUyMGJ1c2luZXNzJTIwbWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D',
    'https://plus.unsplash.com/premium_vector-1739828894699-1ff49c2b0355?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9zcGl0YWxpdHl8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_vector-1726141392735-8c571e422b4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN0b2NrJTIwbWFya2V0fGVufDB8fDB8fHww',
    'https://plus.unsplash.com/premium_vector-1754930159716-6d47e3264084?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmluYW5jaWFsJTIwbWFya2V0fGVufDB8fDB8fHww',
    'https://plus.unsplash.com/premium_vector-1723630934133-939b5872c190?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww',
    'https://plus.unsplash.com/premium_vector-1697729754328-5ebdebd57ddc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_vector-1725442980021-569363feadc5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGJ1c2luZXNzJTIwbWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D',
  ];
  const descriptions = [
    'Learn the fundamentals of financial systems, investments, and modern banking practices to strengthen your professional skills.',
    'Explore the world of AI and data science, from machine learning models to data visualization techniques.',
    'Understand the principles of cloud computing and IT infrastructure, including services from AWS, Azure, and Google Cloud.',
    'Master the art of web development, from front-end frameworks like React to back-end technologies like Node.js.',
    'Enhance your professional skills with courses on resume building, interview preparation, and workplace communication.',
    'Improve your communication and process management skills for a successful career in the BPO sector.',
    'Learn the strategies behind effective sales and marketing, from digital marketing to customer relationship management.',
    'Get a solid foundation in accounting and financial management, including bookkeeping, financial analysis, and reporting.',
    'Unleash your creativity with courses on design principles, user experience (UX), and innovative thinking.',
    'Discover the opportunities in rural development and entrepreneurship, from sustainable agriculture to small business management.',
  ];
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
              “The best brains of the nation may be found on the last benches of
              the classroom – Dr. A.P.J. Abdul Kalam"
            </h2>
            <h1 className="text-3xl text-center font-bold text-black sm:text-5xl lg:text-5xl">
              Choose a Sector to Discover
              <span className="relative inline-block">
                <span className="absolute bottom-0 left-0 w-full h-3 sm:h-4 bg-[#4ADE80] -z-10 rounded-md"></span>
                Entrepreneurial Learning
              </span>{' '}
            </h1>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enterpreneushipCategories.map((category, index) => (
              <div className="p-4" key={category}>
                <Link
                  to={`/freecourses?category=${encodeURIComponent(category)}`}
                  className="no-underline"
                >
                  <div className="flex flex-wrap items-center justify-center gap-8 pt-12">
                    <div className="max-w-72 w-full hover:-translate-y-1  transition duration-300">
                      <img
                        className="rounded-xl max-h-40 w-full object-cover"
                        src={cardImages[index]}
                        alt={category}
                      />
                      <h3 className=" text-slate-900 font-semibold text-lg mt-3">
                        {category}
                      </h3>
                      <p className="text-xs text-neutral-600 font-medium mt-1">
                        {descriptions[index]}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Enterpreneuship;
