import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { corporateIndustriesData } from './CorporateIndustriesData';

const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const IndustryDetail = () => {
  const { slug } = useParams();

  const industry = corporateIndustriesData.find(
    (item) => slugify(item.category) === slug
  );

  if (!industry) {
    return (
      <div className="max-w-3xl mx-auto py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-700">Industry not found</h2>
        <p className="mt-4 text-gray-600">
          We couldn't find the requested industry.
        </p>
        <Link
          to="/coptraining"
          className="inline-block mt-6 text-green-600 underline"
        >
          Back to Industries
        </Link>
      </div>
    );
  }

  return (
    <section className="work-with-us">
      <div className="relative isolate overflow-hidden bg-white min-h-screen  py-24 sm:py-32">
        <img
          alt={industry.category}
          src={industry.image}
          className="absolute inset-0 -z-10 size-full object-cover object-right opacity-15 md:object-center"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="-mt-5 text-5xl font-light tracking-tight text-gray-700 sm:text-7xl">
              <span className="text-green-600 font-extrabold">
                {industry.category}
              </span>{' '}
            </h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-700 sm:text-xl/8">
              {industry.description}
            </p>
          </div>
          <div className="mt-8">
            <Link to="/coptraining" className="text-green-600 hover:underline">
              ← Back to Industries
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryDetail;
