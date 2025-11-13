import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { MoveRight, Building } from 'lucide-react';

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
      <section className="w-full">
        <div className="container mx-auto">
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
          <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
            <div className="flex gap-4 flex-col">
              <h1 className="text-4xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                Empowering Workforces{' '}
                <span className="relative inline-block">
                  <span className="absolute bottom-0 left-0 w-full h-3 sm:h-4 bg-[#4ADE80] -z-10 rounded-md"></span>
                  Enhancing Performance
                </span>{' '}
              </h1>
              <p className="text-lg p-2 md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                Connect2Roots Academy collaborates with organizations to provide
                tailored corporate training programs that enhance workforce
                skills and drive growth. Our industry-aligned modules focus on
                upskilling, boosting productivity, and fostering continuous
                learning. From technical expertise to leadership and
                communication, we help teams perform with confidence and align
                seamlessly with business goals.
              </p>
            </div>
            <div className="flex flex-row gap-3 p-5">
              <button
                onClick={handleScroll}
                size="lg"
                className="gap-4 px-4 py-2 border border-neutral-600 text-slate-600  rounded-xl inline-flex items-center justify-center hover:bg-neutral-100 sm:h-9 sm:px-3 lg:h-11 lg:px-8"
              >
                Explore Industries We Serve <Building className="w-4 h-4" />
              </button>
              <button
                size="lg"
                className="gap-4 border px-4 py-2  border-neutral-600 text-neutral-100 bg-neutral-800 rounded-xl inline-flex items-center justify-center sm:h-9 sm:px-3 lg:h-11 lg:px-8"
              >
                Discover Our Impact <MoveRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div
            ref={nextSectionRef}
            className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
          >
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter font-regular">
              <span className="relative inline-block">
                <span className="absolute bottom-0 left-0 w-full h-3 sm:h-4 bg-[#4ADE80] -z-10 rounded-md"></span>
                Industries
              </span>{' '}
              We Serve
            </h1>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
              {products.map((product) => {
                const slug = product.name
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, '-')
                  .replace(/(^-|-$)/g, '');

                return (
                  <div key={product.id} className="group relative">
                    <Link
                      to={`/coptraining/industry/${slug}`}
                      className="block"
                    >
                      <img
                        alt={product.imageAlt || product.name}
                        src={product.imageSrc}
                        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-80 lg:aspect-auto lg:h-80 group-hover:scale-105 transition duration-500"
                      />
                    </Link>

                    <div className="mt-4 flex justify-between">
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
