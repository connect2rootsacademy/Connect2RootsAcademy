import React, { useRef, useEffect, useState } from 'react';
import './RecommendedVideos.css';
import { PlayIcon } from 'lucide-react';

const RecommendedVideos = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const products = [
    {
      id: 1,
      category: 'Banking & Financial Services',
      href: 'https://www.youtube.com/watch?v=AE_CRBaK56A&t=115s',
      imageSrc:
        'https://images.unsplash.com/photo-1537724326059-2ea20251b9c8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFua2luZ3xlbnwwfHwwfHx8MA%3D%3D',
      imageAlt: 'Essential data science questions for BFSI career preparation.',
      duration: '10:08',
      title: '30 Must Know Data Science Questions for career in BFSI',
    },
    {
      id: 2,
      category: 'Artificial Intelligence & Data Science',
      href: 'https://www.youtube.com/watch?v=QonfNCHiHzU',
      imageSrc:
        'https://images.unsplash.com/photo-1718241905696-cb34c2c07bed?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRhdGElMjBzY2llbmNlfGVufDB8fDB8fHww',
      imageAlt: 'Best AI projects for beginners to start their journey.',
      duration: '4:28',
      title: 'Top 10 Beginner AI Projects',
    },
    {
      id: 3,
      category: 'Cloud Computing & IT Infrastructure',
      href: 'https://www.youtube.com/watch?v=CtyGkm1kJI4&t=10s',
      imageSrc:
        'https://plus.unsplash.com/premium_photo-1661386253258-64ab9521ce89?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdWQlMjBpdHxlbnwwfHwwfHx8MA%3D%3D',
      imageAlt: 'Best cloud career paths and certifications for 2025',
      duration: '6:02',
      title: 'Top Cloud Careers and Certifications in 2025',
    },
    {
      id: 4,
      category: 'Web Development & Engineering',
      href: 'https://www.youtube.com/watch?v=0P104hPWLB8&t=5s',
      imageSrc:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGV2fGVufDB8fDB8fHww',
      imageAlt: 'Job search strategies for web developers.',
      duration: '3:48',
      title: 'How do I find Job Opportunities in the field of Web Development?',
    },
    {
      id: 5,
      category: 'Professional Career Development',
      href: 'https://www.youtube.com/watch?v=4rk0-tMtSXc',
      imageSrc:
        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcmVlcnxlbnwwfHwwfHx8MA%3D%3D',
      imageAlt: 'Master the most common interview question.',
      duration: '1:11',
      title: "How to answer 'Tell me about yourself' in an interview?",
    },
    {
      id: 6,
      category: 'Business Process Management & Communication',
      href: 'https://www.youtube.com/watch?v=xt8JriZun5o&t=65s',
      imageSrc:
        'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbW11bmljYXRpb258ZW58MHx8MHx8fDA%3D',
      imageAlt: 'Professional communication skills for BPO.',
      duration: '5:17',
      title: 'Telephone Etiquettes and Soft Skills: Job Opportunity in BPO.',
    },
    {
      id: 7,
      category: 'Sales, Marketing & Strategy',
      href: 'https://www.youtube.com/watch?v=ZkiZJ8R5AgA',
      imageSrc:
        'https://plus.unsplash.com/premium_photo-1678871480887-e71988d52031?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2FsZXN8ZW58MHx8MHx8fDA%3D',
      imageAlt: 'Complete guide to sales associate responsibilities.',
      duration: '12:03',
      title: 'Roles & Responsibilities of a Sales Associate',
    },
    {
      id: 8,
      category: 'Rural Development & Entrepreneurship',
      href: 'https://www.youtube.com/watch?v=0_I1z8f-wxo&t=35s',
      imageSrc:
        'https://media.istockphoto.com/id/610451052/photo/construction-site.webp?a=1&b=1&s=612x612&w=0&k=20&c=YFhqejJldfnhsCREw3QxyFgcW9HNlB6j8w_bOL3YK94=',
      //   imageSrc:
      //     'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg',
      imageAlt: 'Entrepreneurship tips for rural youth.',
      duration: '3:45',
      title: 'गाँव में युवाओं के लिए उद्यमिता के टिप्स!',
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;

      if (direction === 'right') {
        // If near end, reset to start
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 10
        ) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: 300, behavior: 'smooth' });
        }
      } else {
        // If near start, jump to end
        if (container.scrollLeft <= 0) {
          container.scrollTo({
            left: container.scrollWidth,
            behavior: 'smooth',
          });
        } else {
          container.scrollBy({ left: -300, behavior: 'smooth' });
        }
      }
    }
  };

  // Auto scroll effect
  useEffect(() => {
    if (isPaused) return; // pause on hover

    const interval = setInterval(() => {
      scroll('right');
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-10 bg-linear-to-tr from-[#04ff00] to-[#00ff04] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>
      <div className="-mt-15 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div>
          {/* Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-10 top-1/2 -translate-y-1/2 bg-green-600 p-3 rounded-full shadow hover:bg-green-700 z-10"
          >
            <PlayIcon className="rotate-180 text-white" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-10 top-1/2 -translate-y-1/2 bg-green-600 p-3 rounded-full shadow hover:bg-green-700 z-10"
          >
            <PlayIcon className="text-white" />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth"
            onMouseEnter={() => setIsPaused(true)} // pause on hover
            onMouseLeave={() => setIsPaused(false)} // resume on leave
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative w-64 flex-shrink-0"
              >
                <div className="relative">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="w-full h-44 rounded-lg object-cover group-hover:opacity-50 group-hover:scale-95 transition duration-300"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="w-12 h-12 flex items-center justify-center border-2 border-white rounded-full bg-black bg-opacity-40">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.5 5.5l7 4.5-7 4.5v-9z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-green-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.category}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.title}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-700 underline">
                    {product.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedVideos;
