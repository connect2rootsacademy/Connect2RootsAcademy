import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { enterpreneushipCategories } from '../../data/enterpreneushipData';

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
        className="rounded-xl shadow-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer max-w-80 bg-white"
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
        <p className="text-sm px-4 pb-6 text-neutral-500 w-5/6">
          {descriptions[index]}
        </p>
      </Link>
    );
  };
  return (
    <>
      <section className=" py-10 sm:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="mb-5 mt-3 text-center text-base/5 font-semibold text-gray-600">
              “The best brains of the nation may be found on the last benches of
              the classroom – Dr. A.P.J. Abdul Kalam"
            </h2>
            <h1 className="text-3xl text-center font-bold text-black sm:text-5xl lg:text-5xl">
              Choose a Sector to Discover
              <span className="relative inline-block">
                <span className="absolute bottom-0 left-0 w-full h-3 sm:h-4 border-b-[12px] border-orange-300 sm:border-b-[16px] md:border-b-[20px] lg:border-b-[24px] -z-10 rounded-md"></span>
                Entrepreneurial Learning
              </span>{' '}
            </h1>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
