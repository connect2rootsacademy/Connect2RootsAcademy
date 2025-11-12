import React from 'react';

const Institutional = () => {
  return (
    <div>
      <div className="mx-auto max-w-2xl lg:text-center">
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
        <h1 className="mt-10 text-4xl font-regular text-black sm:text-5xl lg:text-5xl">
          <span className="relative inline-block">
            <span className="absolute bottom-0 left-0 w-full h-2 sm:h-3 bg-[#4ADE80] -z-10 rounded-md"></span>
            Institutional Partnership
          </span>{' '}
        </h1>
        <p className="mt-5 mb-5 text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
          At Connect2Roots Academy, we foster partnerships with schools,
          colleges, and universities to bridge the gap between education and
          employability. Through our Institutional Partnership Program, we
          collaborate on faculty development, student training, curriculum
          integration, and placement initiatives. Together, we aim to empower
          learners with industry-relevant skills and help institutions enhance
          their academic excellence and real-world impact.
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
