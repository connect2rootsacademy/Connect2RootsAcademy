import { Handshake } from 'lucide-react';
import React from 'react';

const Institutional = () => {
  return (
    <div>
      <div className="mx-auto max-w-2xl lg:text-center">
        <div className="flex flex-col mt-10 mx-auto items-center">
          <div className="inline-flex uppercase items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
            <Handshake className="w-4 h-4" />
            Partnerships
          </div>
        </div>
        <div className="w-full flex justify-center ">
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-semibold tracking-tighter text-neutral-900 max-w-7xl mx-auto text-center leading-[1.15]">
            <span className="relative inline-block tracking-tight font-bold z-10">
              Institutional Partnership
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
        <p className="mt-5 mb-5 p-2 text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
          At Connect2Roots Academy, we foster partnerships with schools,
          colleges, and universities to bridge the gap between education and
          employability. Through our Institutional Partnership Program, we
          collaborate on faculty development, student training, curriculum
          integration, and placement initiatives. Together, we aim to empower
          learners with industry relevant skills and help institutions enhance
          their academic excellence and real world impact.
        </p>
      </div>

      <section className="relative min-h-screen pt-20 px-4">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-100/20 via-transparent to-transparent"></div>

        <div className="relative max-w-6xl mx-auto">
          {/* Form Container */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200/60 overflow-hidden transform hover:shadow-2xl transition-all duration-300">
            <div className="grid lg:grid-cols-5">
              {/* Sidebar */}
              <div className="lg:col-span-1 bg-gradient-to-b from-green-600 to-emerald-700 p-8 text-white hidden lg:block">
                <div className="space-y-6">
                  <div>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-white/90">
                      Quick Response
                    </h3>
                    <p className="text-green-100/80 text-sm mt-1">
                      We reply within 24 hours
                    </p>
                  </div>

                  <div>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-white/90">
                      Secure & Private
                    </h3>
                    <p className="text-green-100/80 text-sm mt-1">
                      Your data is protected
                    </p>
                  </div>
                </div>
              </div>

              {/* Form Iframe */}
              <div className="lg:col-span-4">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeJAJ-FRicQPOsnlw23UhcanlxHmHjCnCV8ydcexWsZnAOj_A/viewform?embedded=true"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  className="w-full h-[70vh] min-h-[600px]"
                  title="Contact Form"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Institutional;
