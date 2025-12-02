import { useRef } from 'react';
import { MoveRight, PhoneCall } from 'lucide-react';

const Contact = () => {
  const nextSectionRef = useRef(null);

  const handleScroll = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      {/* WORK WITH US SECTION */}
      <section className="w-full">
        <div className="fixed inset-0 -z-10 bg-white">
          <div
            className={[
              'pointer-events-none absolute inset-0',
              'bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]',
              '[background-size:16px_16px]',
              '[mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]',
              '[-webkit-mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]',
              '[mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat]',
            ].join(' ')}
          />
        </div>
        <div className="container mx-auto -mt-20">
          <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
            <div className="flex gap-4 flex-col">
              <h1 className="text-4xl mt-10 md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                Connect With Us For{' '}
                <span className="relative inline-block">
                  <span className="absolute bottom-0 left-0 w-full h-3 sm:h-4 border-b-[12px] border-orange-300 sm:border-b-[16px] md:border-b-[20px] lg:border-b-[24px] -z-10 rounded-md"></span>
                  Guidance And Support
                </span>{' '}
              </h1>
              <p className="text-lg p-2 md:text-xl leading-tight tracking-tight text-muted-foreground max-w-2xl text-center">
                At Connect2Roots Academy, we believe in the power of
                collaboration to create meaningful change. We invite passionate
                individuals, professionals, and partners to join us in our
                mission of empowering graduates and strengthening communities.
                Whether you are looking to contribute your expertise,
                collaborate as an organization, or volunteer your time, there is
                a place for you in the C2R family. Our volunteers play a vital
                role in extending our reach, offering guidance, mentorship, and
                support to learners across diverse backgrounds. By working with
                us, you not only help shape the future of students but also
                become part of a movement dedicated to building a stronger and
                more prosperous India.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 p-5 items-center justify-center">
              <button
                onClick={handleScroll}
                size="lg"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 border border-neutral-600 text-slate-600 rounded-xl hover:bg-neutral-100 text-sm sm:text-base whitespace-normal text-center sm:h-9 sm:px-3 lg:h-11 lg:px-8"
              >
                <span className="leading-tight max-w-[220px] sm:max-w-none">
                  Send Message
                </span>
                <MoveRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                size="lg"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 border border-neutral-600 text-neutral-100 bg-neutral-800 rounded-xl text-sm sm:text-base whitespace-normal text-center sm:h-9 sm:px-3 lg:h-11 lg:px-8"
              >
                <span className="leading-tight max-w-[220px] sm:max-w-none">
                  Schedule a Call
                </span>
                <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT US FROM - EMAIL.JS */}
      {/* <iframe
        ref={nextSectionRef}
        src="https://docs.google.com/forms/d/e/1FAIpQLSfENueMcb5n9hoVXZzprvsvwmUqTcFhxyKko-cWKYvkAMLHag/viewform?embedded=true"
        width="640"
        height="1991"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        className="mt-20 flex justify-around align-middle mx-auto w-full h-screen"
      >
        Loading…
      </iframe> */}
      <div ref={nextSectionRef} className="relative min-h-screen pt-20 px-4">
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
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfENueMcb5n9hoVXZzprvsvwmUqTcFhxyKko-cWKYvkAMLHag/viewform?embedded=true"
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
      </div>

      {/* IFRAME MAP SECTION */}
      <address className="max-w-6xl mx-auto px-4 mb-20">
        {/* Map Container */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200/60 overflow-hidden transform hover:shadow-2xl transition-all duration-300">
          <div className="relative">
            {/* Map Header Bar */}
            <div className="bg-neutral-900 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium text-sm">
                    Live Location
                  </span>
                </div>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <span className="text-gray-300 text-sm">
                  Bengaluru, Karnataka
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-3 py-1 bg-green-500/20 rounded-full">
                  <span className="text-green-300 text-sm font-medium">
                    📍 Active
                  </span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative p-1 bg-gradient-to-br from-gray-100 to-gray-50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.5665945681!2d77.4661267466638!3d12.95428023526899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1757606757833!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[500px] rounded-2xl border-0 shadow-inner"
                title="Our Location in Bengaluru, Karnataka"
              ></iframe>

              {/* Location Pin Overlay */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="animate-bounce">
                  <div className="bg-red-500 text-white px-3 py-1 rounded-lg shadow-lg font-semibold text-sm transform -translate-y-8">
                    📍 We are here!
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Info */}
            <div className="bg-gray-50 border-t border-gray-200/60 p-6">
              <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
                <div className="flex flex-col items-center md:items-start">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mb-2">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">Location</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Bengaluru, Karnataka
                  </p>
                </div>

                <div className="flex flex-col items-center md:items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-2">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">
                    Business Hours
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Mon - Sat: 9AM - 6PM
                  </p>
                </div>

                <div className="flex flex-col items-center md:items-start">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-2">
                    <svg
                      className="w-5 h-5 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">Contact</h3>
                  <p className="text-gray-600 text-sm mt-1">+91 XXXXXXXXXX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </address>
    </>
  );
};

export default Contact;
