import { Briefcase, Calendar, MessageCircle } from 'lucide-react';
import React from 'react';

const CorporateCoaching = () => {
  return (
    <section>
      <div className="w-full">
        <div className="container mx-auto">
          <div className="flex gap-8 py-20  items-center justify-center flex-col">
            <div className="flex gap-4 flex-col">
              <div className="flex flex-col mx-auto items-center">
                <div className="inline-flex uppercase items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
                  <Briefcase className="w-4 h-4" />
                  Executive Growth
                </div>
              </div>
              <div className="w-full flex justify-center ">
                <h1 className="text-4xl sm:text-5xl md:text-5xl font-semibold tracking-tighter text-neutral-900 max-w-7xl mx-auto text-center leading-[1.15]">
                  Personalized Coaching for <br />
                  <span className="relative inline-block tracking-tight font-bold z-10">
                    Corporate Professionals
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
                Accelerate your career with tailored 1 on 1 coaching designed
                for working professionals. Improve decision making,
                communication, confidence, and workplace performance through
                structured guidance aligned with your corporate goals.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 p-5 items-center justify-center">
              <button
                size="lg"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 border border-neutral-600 text-slate-600 rounded-xl hover:bg-neutral-100 text-sm sm:text-base whitespace-normal text-center sm:h-9 sm:px-3 lg:h-11 lg:px-8"
              >
                <span className="leading-tight max-w-[220px] sm:max-w-none">
                  Schedule a Free Consultation
                </span>
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                size="lg"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 border border-neutral-600 text-neutral-100 bg-neutral-800 rounded-xl text-sm sm:text-base whitespace-normal text-center sm:h-9 sm:px-3 lg:h-11 lg:px-8"
              >
                <span className="leading-tight max-w-[220px] sm:max-w-none">
                  Request a Callback
                </span>
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateCoaching;
