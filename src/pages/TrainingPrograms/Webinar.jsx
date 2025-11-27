import React from 'react';
import { MoveRight, Video } from 'lucide-react';

const Webinar = () => {
  return (
    <div className="w-full">
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
              Expland Your Horizon With{' '}
              <span className="relative inline-block">
                <span className="absolute bottom-0 left-0 w-full h-3 sm:h-4 border-b-[12px] border-orange-300 sm:border-b-[16px] md:border-b-[20px] lg:border-b-[24px] -z-10 rounded-md"></span>
                Our Live Webinars
              </span>{' '}
            </h1>
            <p className="text-lg p-2 md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              At Connect2Roots Academy, our webinars connect learners with
              industry experts and educators to share insights, trends, and
              practical strategies. These live, interactive sessions make
              learning engaging, accessible, and relevant helping participants
              explore new technologies, enhance soft skills, and stay ahead in
              an ever-evolving professional world.
            </p>
          </div>
          <div className="flex flex-row gap-3 p-5">
            <button
              size="lg"
              className="gap-4 px-4 py-2 border border-neutral-600 text-slate-600  rounded-xl inline-flex items-center justify-center hover:bg-neutral-100 sm:h-9 sm:px-3 lg:h-11 lg:px-8"
            >
              Watch Webinar Live <Video className="w-4 h-4" />
            </button>
            <button
              size="lg"
              className="gap-4 border px-4 py-2  border-neutral-600 text-neutral-100 bg-neutral-800 rounded-xl inline-flex items-center justify-center sm:h-9 sm:px-3 lg:h-11 lg:px-8"
            >
              Explore Webinars <MoveRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webinar;
