import React, { useRef, useEffect, useState } from 'react';
import './RecommendedVideos.css';

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
      imageAlt: 'Entrepreneurship tips for rural youth.',
      duration: '3:45',
      title: 'गाँव में युवाओं के लिए उद्यमिता के टिप्स!',
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.clientWidth;

      if (direction === 'right') {
        const atEnd =
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 10;
        container.scrollTo({
          left: atEnd ? 0 : container.scrollLeft + scrollAmount,
          behavior: 'smooth',
        });
      } else {
        const atStart = container.scrollLeft <= 0;
        container.scrollTo({
          left: atStart
            ? container.scrollWidth
            : container.scrollLeft - scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      scroll('right');
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="relative">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-5xl lg:px-8 -mt-10">
        <div className="relative">
          <div
            ref={scrollRef}
            className="recommended-videos-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {products.map((product) => (
              <div key={product.id} className="recommended-video-card">
                <div className="relative">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="w-full h-44 rounded-lg object-cover group-hover:opacity-50 group-hover:scale-95 transition duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center border-2 border-white rounded-full bg-black bg-opacity-40"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.5 5.5l7 4.5-7 4.5v-9z" />
                      </svg>
                    </a>
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
                  </div>
                  <p className="text-sm ml-2 font-medium text-gray-700 underline">
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
