import React from 'react';

const TermsAndCondition = () => {
  return (
    <section className="termsandcondition">
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

      {/*CONTENT SECTIONN - TERMS AND CONDITION */}
      <div className="mt-10 mb-10 mx-auto max-w-2xl lg:text-center">
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
          <mark className="bg-green-600 text-white rounded-xl px-5 py-2 m-2">
            Terms and Conditions
          </mark>
        </h2>
        <p className="mt-6 text-lg/8 text-gray-700">
          By accessing or using this website, you agree to be bound by the
          following terms and conditions. The content provided here, including
          videos, articles, graphics, and other resources, is intended solely
          for educational and informational purposes. You agree not to copy,
          reproduce, modify, distribute, or exploit any part of the website
          without prior written consent. We reserve the right to update, modify,
          or remove any content or features at our sole discretion without prior
          notice. While we make every effort to ensure accuracy and reliability,
          we do not guarantee that the information is error-free, complete, or
          suitable for your particular purpose, and we are not liable for any
          direct or indirect damages resulting from the use of this site. By
          using our services, you agree not to misuse the platform in any way,
          including but not limited to introducing harmful material, attempting
          unauthorized access, or engaging in activities that may disrupt
          functionality or compromise security. Any user data voluntarily
          provided will be handled responsibly, but we do not take
          responsibility for any third-party breaches or misuse beyond our
          control. These terms may be updated periodically, and it is your
          responsibility to review them for changes. Continued use of the site
          after updates indicates acceptance of the revised terms. If you do not
          agree with any part of these conditions, you should discontinue use of
          this website immediately.
        </p>
      </div>
    </section>
  );
};

export default TermsAndCondition;
