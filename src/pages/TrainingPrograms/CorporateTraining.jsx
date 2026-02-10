import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { MoveRight, Building, Building2 } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Information Technology (IT) & Software',
    href: '#',
    imageSrc:
      'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29mdHdhcmUlMjBlbmdpbmVlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900',
  },
  {
    id: 2,
    name: 'Banking, Financial Services & Insurance (BFSI)',
    href: '#',
    imageSrc:
      'https://plus.unsplash.com/premium_photo-1682090819491-f2e6ccfec254?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RmluYW5jZSUyMGluZGlhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900',
  },
  {
    id: 3,
    name: 'Healthcare & Pharmaceuticals',
    href: '#',
    imageSrc:
      'https://plus.unsplash.com/premium_photo-1726797682911-9a8edd9c0e63?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhbHRoY2FyZSUyMGluZGlhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900',
  },
  {
    id: 4,
    name: 'Education & EdTech',
    href: '#',
    imageSrc:
      'https://plus.unsplash.com/premium_photo-1682089789852-e3023ff6df24?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWR1Y2F0aW9uJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900',
  },
  {
    id: 5,
    name: 'Retail & E-commerce',
    href: '#',
    imageSrc:
      'https://plus.unsplash.com/premium_photo-1661868396884-243cfa257d7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHNob3AlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900',
  },
  {
    id: 6,
    name: 'Manufacturing & Engineering',
    href: '#',
    imageSrc:
      'https://images.unsplash.com/photo-1702128411101-64f518101f03?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVuZ2luZWVyaW5nJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900',
  },
  {
    id: 7,
    name: 'Marketing & Digital Media',
    href: '#',
    imageSrc:
      'https://images.unsplash.com/photo-1663560453399-f972f1e58d03?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRpZ2l0YWwlMjBtZWRpYSUyMGluZGlhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900',
  },
  {
    id: 8,
    name: 'Telecommunications & ITES (BPO/KPO)',
    href: '#',
    imageSrc:
      'https://plus.unsplash.com/premium_photo-1681483561994-e91bc8ce5a23?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fENhbGwlMjBjZW50ZXIlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900',
  },
  {
    id: 9,
    name: 'Consulting & Professional Services',
    href: '#',
    imageSrc:
      'https://plus.unsplash.com/premium_photo-1661420128622-4a5267435ce4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fENvbnN1bHRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900',
  },
  {
    id: 10,
    name: 'Hospitality & Travel Management',
    href: '#',
    imageSrc:
      'https://plus.unsplash.com/premium_photo-1747038289308-5466825dd51b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjBzZXJ2aWNlJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900',
  },
];

const CorporateTraining = () => {
  const nextSectionRef = useRef(null);

  const handleScroll = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section>
      <div className="w-full">
        <div className="container mx-auto">
          <div className="flex gap-8 py-20  items-center justify-center flex-col">
            <div className="flex gap-4 flex-col">
              <div className="flex flex-col mx-auto items-center">
                <div className="inline-flex uppercase items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
                  <Building2 className="w-4 h-4" />
                  Corporate Training
                </div>
              </div>
              <div className="w-full flex justify-center ">
                <h1 className="text-4xl sm:text-5xl md:text-5xl font-semibold tracking-tighter text-neutral-900 max-w-7xl mx-auto text-center leading-[1.15]">
                  Empowering Workforces <br />
                  <span className="relative inline-block tracking-tight font-bold z-10">
                    Enhancing Performance
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
              <p className="text-lg p-2 md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                Connect2Roots Academy partners with organizations to deliver
                tailored corporate training programs that strengthen workforce
                capabilities and accelerate business growth. Our industry
                aligned modules focus on upskilling teams, improving
                productivity, and fostering a culture of continuous learning.
                From technical expertise to leadership and communication
                development, we empower professionals to perform with confidence
                and align seamlessly with organizational goals.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 p-5 items-center justify-center">
              <button
                onClick={handleScroll}
                size="lg"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 border border-neutral-600 text-slate-600 rounded-xl hover:bg-neutral-100 text-sm sm:text-base lg:text-base whitespace-normal text-center sm:h-9 sm:px-3 lg:h-11 lg:px-8"
              >
                <span className="leading-tight max-w-[220px] sm:max-w-none">
                  Explore Industries We Serve
                </span>
                <Building className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                size="lg"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 border border-neutral-600 text-neutral-100 bg-neutral-800 rounded-xl text-sm sm:text-base whitespace-normal text-center sm:h-9 sm:px-3 lg:h-11 lg:px-8"
              >
                <span className="leading-tight max-w-[220px] sm:max-w-none">
                  Discover Our Impact
                </span>
                <MoveRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <section id="industry">
        <div>
          <div
            ref={nextSectionRef}
            className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8"
          >
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter font-regular">
              <span className="relative inline-block">
                <span className="absolute bottom-0 left-0 w-full h-3 sm:h-4 border-b-[12px] border-green-300 sm:border-b-[16px] md:border-b-[20px] lg:border-b-[24px] -z-10 rounded-md"></span>
                Industries
              </span>{' '}
              We Serve
            </h1>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-x-6 sm:gap-y-10 md:grid-cols-3 lg:grid-cols-5 xl:gap-x-8">
              {products.map((product) => {
                const slug = product.name
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, '-')
                  .replace(/(^-|-$)/g, '');

                return (
                  <div key={product.id} className="group relative p-2">
                    <Link
                      to={`/coptraining/industry/${slug}`}
                      className="block"
                    >
                      <img
                        alt={product.imageAlt || product.name}
                        src={product.imageSrc}
                        className="w-full rounded-md bg-gray-200 object-cover h-44 sm:h-56 lg:h-80 group-hover:opacity-80 group-hover:scale-105 transition duration-500"
                      />
                    </Link>

                    <div className="mt-3 flex justify-between items-start px-1">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <Link
                            to={`/coptraining/industry/${slug}`}
                            className="hover:underline"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.name}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CorporateTraining;
