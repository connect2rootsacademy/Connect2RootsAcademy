import React from 'react';

const Privacy = () => {
  return (
    <section className="privacy">
      {/* BACKGROUND SECTION */}
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
      {/* CONTENT SE4CTION - PRIVACY POLICY */}
      <div className="mt-10 mb-10 mx-auto max-w-2xl lg:text-center">
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
          <mark className="bg-green-600 text-white rounded-xl px-5 py-2 m-2">
            Privacy Policy
          </mark>
        </h2>
        <p className="mt-6 text-lg/8 text-gray-700">
          Your privacy is important to us, and we are committed to protecting
          the personal information you choose to share. This Privacy Policy
          explains how we collect, use, and safeguard your data when you
          interact with our website. We may collect basic information such as
          your name, email address, or any details you voluntarily provide when
          signing up, contacting us, or using our services. This information is
          used only to improve your experience, respond to your queries, and
          provide relevant updates. We do not sell, rent, or share your personal
          information with third parties, except when required by law or to
          protect our rights and security. While we take reasonable steps to
          maintain the safety of your information, we cannot guarantee complete
          protection against unauthorized access, breaches, or misuse beyond our
          control. Our website may contain links to third-party platforms, and
          we are not responsible for their privacy practices. By using this
          website, you consent to the collection and use of information as
          outlined in this policy. We may update this Privacy Policy from time
          to time, and it is your responsibility to review it for any changes.
          Continued use of the site after updates indicates your acceptance of
          the revised policy.
        </p>
      </div>
    </section>
  );
};

export default Privacy;
