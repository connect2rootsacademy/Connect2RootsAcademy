import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { enterpreneushipCategories } from '../../data/enterpreneushipData';
import { Briefcase } from 'lucide-react';

const Enterpreneuship = () => {
  const cardImages = [
    'https://images.unsplash.com/photo-1688124968558-974cf707348b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwc29sYXIlMjBwYW5lbHN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1wb3J0JTIwZXhwb3J0fGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1596630746584-70e37fe6c313?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZm9vZCUyMGZhY3Rvcnl8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1582228096960-7f5d2ec4aa8e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1681491777884-70dd799fd210?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGluZGlhbiUyMGhvdGVsJTIwc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hhcmUlMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1565373679107-344d38dbf734?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cnVwZWV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1701844279504-e3a974aaafb5?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1695667424131-a9680e0307ee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3VyZ2FvbnxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1594233666755-d1cb282abd25?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWElMjBidXNpbmVzc3xlbnwwfHwwfHx8MA%3D%3D',
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
  const CourseCard = ({ course, index }) => {
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
        to={`/freecourses?category=${encodeURIComponent(course)}`}
        className="rounded-xl shadow-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer w-full max-w-xs sm:max-w-sm bg-white mx-auto"
        onMouseMove={handleMoveLocal}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        <img
          src={cardImages[index]}
          alt={course}
          className="w-full h-52 object-cover"
        />
        <h3 className="mt-3 px-4 pt-3 mb-1 text-xl font-extrabold text-neutral-800">
          {course}
        </h3>
        <p className="text-sm px-4 pb-6 text-neutral-500">
          {descriptions[index]}
        </p>
      </Link>
    );
  };
  return (
    <>
      <section className=" py-10 sm:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col mx-auto items-center">
            <div className="inline-flex uppercase items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
              <Briefcase className="w-4 h-4" />
              Programs
            </div>
          </div>
          <div className="w-full flex justify-center ">
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-semibold tracking-tighter text-neutral-900 max-w-7xl mx-auto text-center leading-[1.15]">
              <span className="relative inline-block tracking-tight font-bold z-10">
                Entrepreneurship Programs
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
            {enterpreneushipCategories.map((category, index) => (
              <CourseCard course={category} index={index} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Enterpreneuship;
