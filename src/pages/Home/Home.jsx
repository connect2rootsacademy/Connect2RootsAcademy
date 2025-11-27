'use client';
import { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import heroimg from '../../assets/hero-img.png';
import FeaturesCard from '../../ui/FeaturesCard/FeaturesCard';
import Testimonials from '../../ui/Testmonials/Testmonials';
import 'aos/dist/aos.css';
import ShuffleHero from '../../ui/ShuffleHero';
import CoursesCard from '../../components/CoursesCard/CoursesCard';

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: 'Why should I join Connect2Roots Academy?',
      answer:
        'We provide skill-based, career-focused learning designed to help you grow personally and professionally.',
    },
    {
      question: 'What makes Connect2Roots different from other platforms?',
      answer:
        'Our learning approach combines expert guidance, real-world projects, and community support for complete development.',
    },
    {
      question: 'Are the courses beginner-friendly?',
      answer:
        'Yes! Our programs are structured for all levels, from absolute beginners to advanced learners.',
    },
    {
      question: 'Will I get a certificate after completing a course?',
      answer:
        'Absolutely! Every learner receives a recognized certificate to showcase their skills and achievements.',
    },
    {
      question: 'Can I learn at my own pace?',
      answer:
        'Yes, you get flexible access to learn anytime, anywhere, at your own comfort.',
    },
    {
      question: 'Do you provide live sessions or recorded classes?',
      answer:
        'We offer both - interactive live sessions for engagement and recorded classes for easy revision..',
    },
    {
      question: 'What kind of support will I receive?',
      answer:
        'You’ll have access to mentors, discussion groups, and a responsive support team for any assistance.',
    },
    {
      question: 'How does Connect2Roots help in career growth?',
      answer:
        'Our courses focus on real-world skills, interview readiness, and industry exposure to boost your career.',
    },
  ];
  const cards = [
    {
      href: '/aianddatascience',
      title: 'AI and Data Science',
      img: 'https://images.unsplash.com/photo-1677691820099-a6e8040aa077?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900',
      alt: 'AI and Data Science Course',
    },
    {
      href: '/webdev',
      title: 'Web Development',
      img: 'https://images.unsplash.com/photo-1732020743205-9a1da14e36fd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900',
      alt: 'Web Development Course',
    },
    {
      href: '/bankingandfinance',
      title: 'Banking and Finance',
      img: 'https://images.unsplash.com/photo-1614029655965-2464911905a4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJhbmtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900',
      alt: 'Banking and Finance Course',
    },
    {
      href: '/careerdevelopment',
      title: 'Career Development',
      img: 'https://plus.unsplash.com/premium_photo-1661266819853-ac00dcaf21d2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyZWVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900',
      alt: 'Career Development Course',
    },
    {
      href: '/cloudcomputing',
      title: 'Cloud Computing and IT',
      img: 'https://plus.unsplash.com/premium_photo-1661758351472-52ed02e99496?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNsb3VkJTIwY29tcHV0aW5nfGVufDB8fDB8fHww',
      alt: 'Cloud Computing and IT Course',
    },
    {
      href: '/salesandmarketing',
      title: 'Sales and Marketing',
      img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFya2V0aW5nfGVufDB8fDB8fHww',
      alt: 'Sales and Marketing Course',
    },
    {
      href: '/ruraldevelopment',
      title: 'Rural Development and Entrepreneurship',
      img: 'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9ydGljdWx0dXJlfGVufDB8fDB8fHww',
      alt: 'Rural Development and Entrepreneurship Course',
    },
    {
      href: '/design',
      title: 'Design and Creative Arts',
      img: 'https://images.unsplash.com/photo-1653647054667-c99dc7f914ef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzaWduZXIlMjBmaWdtYXxlbnwwfHwwfHx8MA%3D%3D',
      alt: 'Design and Creative Arts Course',
    },
  ];

  return (
    <>
      {/* 1st SECTION - HERO SECTION */}
      <section className="relative flex items-center">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute top-0 left-[max(50%,25rem)] h-64 w-full max-w-[100rem] -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200 sm:h-192 sm:max-w-[120rem] lg:h-256 lg:w-512"
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

        <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-6">
          <div className="grid items-center grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2 pt-8 sm:pt-12 md:pt-16">
            <div className="text-center lg:text-left">
              <p className="mb-3 text-green-600 font-semibold tracking-tight leading-snug text-base sm:text-lg md:mb-4 md:text-lg">
                Level Up Your Future
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black">
                Building Strong Skills for a{' '}
                <div className="relative inline-flex mt-2 sm:mt-0">
                  <span className="absolute rounded-sm inset-x-0 bottom-0 border-b-[12px] border-orange-300 sm:border-b-[16px] md:border-b-[20px] lg:border-b-[24px]"></span>
                  <span className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black">
                    Stronger Future
                  </span>
                </div>
              </h1>

              <p className="mt-6 text-sm text-black sm:text-base md:mt-8 md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0">
                At Connect2Roots Academy, we guide learners to unlock their true
                potential with world-class courses and practical learning
              </p>

              <div className="mt-8 flex items-center justify-center lg:justify-start space-x-4">
                <div className="relative inline-flex items-center justify-center group">
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 opacity-60 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-lg blur-lg filter transition-all duration-1000 group-hover:opacity-100 group-hover:duration-300 animate-gradient-x"></div>

                  {/* Main button */}
                  <Link
                    to="/professional"
                    role="button"
                    className="relative inline-flex items-center justify-center bg-neutral-900 px-6 py-3 sm:px-8 sm:py-3 rounded-lg text-neutral-100 font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-neutral-900 hover:shadow-2xl hover:-translate-y-1 hover:shadow-indigo-500/25 border border-neutral-200 hover:border-gray-600 group/btn w-full sm:w-auto"
                    title="Start learning"
                    rel="noopener noreferrer"
                  >
                    <span className="relative z-10">Start Learning</span>

                    {/* Animated arrow icon */}
                    <svg
                      viewBox="0 0 20 20"
                      height="18"
                      width="18"
                      fill="none"
                      className="ml-2 transition-all duration-300 transform group-hover/btn:translate-x-1"
                    >
                      <path
                        d="M4 10h12"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100"
                      />
                      <path
                        d="M10 4l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                </div>

                <button className="text-sm font-semibold text-gray-900 hover:text-green-600 sm:text-sm/6">
                  Learn more <span aria-hidden="true">→</span>
                </button>
              </div>

              <Link to="/login">
                <p className="mt-4 text-gray-600 font-light tracking-tight leading-snug hover:text-green-700 text-sm sm:text-base text-center lg:text-left">
                  Already a member? Log in
                </p>
              </Link>
            </div>

            <div className="w-full h-full flex items-center justify-center mt-8 sm:mt-12 lg:mt-0">
              <ShuffleHero />
            </div>
          </div>
        </div>
      </section>

      {/* 2nd SECTION - COURSES WE PROVIDE SECTION - CARDS */}
      <section>
        <CoursesCard
          title="Build Your Future"
          description="Discover the most engaging content from our amazing community of developers and designers"
          backgroundLabel="Courses"
          backgroundPosition="left"
          posts={[
            {
              id: 1,
              href: '/professional',
              title: 'Master In-Demand Professional Skills',
              category: 'Professional Courses',
              imageUrl:
                'https://plus.unsplash.com/premium_photo-1676666379051-383ed1b005e8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8am9iJTIwaW50ZXJ2aWV3fGVufDB8fDB8fHww',
              views: 2180,
              totalCourse: 10,
              rating: 5,
            },
            {
              id: 2,
              href: '/professional',
              title: 'Turn Ideas into Successful Ventures',
              category: 'Entrepreneurship Courses',
              imageUrl:
                'https://images.unsplash.com/photo-1565882694798-4c9d004e65b7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGluZGlhbiUyMHNvZnR3YXJlJTIwZGV2ZWxvcGVyJTIwdGVhbXxlbnwwfHwwfHx8MA%3D%3D',
              views: 1456,
              totalCourse: 12,
              rating: 4,
            },
            {
              id: 3,
              href: '/professional',
              title: 'Get Certified. Get Ahead.',
              category: 'Certificate Courses',
              imageUrl:
                'https://plus.unsplash.com/premium_photo-1754269207770-c8e32e26860e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGluZGlhbiUyMGVudHJlcHJlbmV1cnxlbnwwfHwwfHx8MA%3D%3D',
              views: 987,
              totalCourse: 6,
              rating: 4,
            },
          ]}
          className="mb-16"
        />
      </section>

      {/* 3rd SECTION- RECOMMENDED COURSES & RECOMMENDED VIDEOS SECTION  */}
      <section className="relative py-12 mb-30 px-4 sm:px-6 lg:px-0">
        <h1 className="text-5xl sm:text-6xl p-2 text-center font-semibold tracking-tight mb-20 text-black max-w-3xl mx-auto">
          <span className="relative inline-block">
            <span className="absolute bottom-0 left-0 w-full h-2 sm:h-3 border-b-[12px] border-orange-300 sm:border-b-[16px] md:border-b-[20px] lg:border-b-[24px] -z-10 rounded-md" />
            Master the Skills
          </span>{' '}
          That Matter
        </h1>

        <div
          id="recc-courses"
          className="max-w-5xl mx-auto grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4 items-stretch"
        >
          {cards.map((c) => (
            <Link
              key={c.href}
              to={c.href}
              className="group relative rounded-3xl overflow-hidden block shadow-sm"
            >
              <div className="w-full h-40 sm:h-44 md:h-48 lg:aspect-square lg:h-auto">
                <img
                  src={c.img}
                  alt={c.alt}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div
                className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 transition-all duration-300
"
              >
                <h2 className="text-lg md:text-xl font-medium">{c.title}</h2>
                <p className="flex items-center gap-2 text-sm text-white/90 mt-1">
                  Enroll Now
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block"
                  >
                    <path
                      d="M8.125 1.625H11.375V4.875"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.41602 7.58333L11.3743 1.625"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="h-6 md:hidden" />
      </section>

      {/* 4th SECTION - FEATURES SECTION */}
      <section>
        <div className="first-page -mb-10">
          <h1 className="text-center text-5xl sm:text-6xl font-bold tracking-tight text-pretty text-black">
            <span className="relative inline-block">
              <span className="absolute bottom-0 left-0 w-full h-3 sm:h-4 border-b-[12px] border-orange-300 sm:border-b-[16px] md:border-b-[20px] lg:border-b-[24px] -z-10 rounded-md"></span>
              Why Choose
            </span>{' '}
            Connect2Roots Academy?
          </h1>
        </div>
        <div className="w-full p-10">
          <div className="-mt-10 top-0 left-0 w-full">
            <FeaturesCard />
          </div>
        </div>
      </section>

      {/* 5TH SECTION - OUR MISSION SECTION */}
      <section className="bg-[#046528] p-8 flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4 -mt-10 mb-10 md:mb-20">
        <div className="relative shadow-2xl shadow-green-600/40 rounded-2xl overflow-hidden shrink-0">
          <img
            className="max-w-xl object-cover w-full rounded-2xl"
            src="https://plus.unsplash.com/premium_photo-1747889461984-ecf42eab7d80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwY29ycG9yYXRlfGVufDB8fDB8fHww"
            alt=""
          />
          <div className="flex items-center gap-1 max-w-72 absolute bottom-8 left-8 bg-white p-4 rounded-xl">
            <div className="flex -space-x-4 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1602492314031-f35f1b450677?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGluZGlhbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D"
                alt="image"
                className="size-9 object-cover  rounded-full border-[3px] border-white hover:-translate-y-1 transition z-1"
              />
              <img
                src="https://plus.unsplash.com/premium_photo-1708271598513-d30915fcfbb4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGluZGlhbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D"
                alt="image"
                className="size-9 object-cover rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[2]"
              />
              <img
                src="https://plus.unsplash.com/premium_photo-1722889134304-544e46f55deb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGluZGlhbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D"
                alt="image"
                className="size-9 object-cover rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[3]"
              />
              <div className="flex items-center justify-center text-xs  text-white size-9 rounded-full border-[3px] border-white bg-orange-400 hover:-translate-y-1 transition z-[4]">
                50+
              </div>
            </div>
            <p className="text-sm font-medium text-slate-800">
              Join our academy community
            </p>
          </div>
        </div>
        <div className="text-sm  text-neutral-300 max-w-lg">
          <h1 className="text-5xl font-bold text-neutral-100 sm:text-4xl lg:text-6xl tracking-tight">
            Enspiring Growth Building Tomorrow
          </h1>
          <p className="mt-8">
            We are committed to empowering graduates through a journey of
            continuous learning and professional growth. Our programs are
            designed to nurture talent, enhance capability, and instill a
            mindset of lifelong development.
          </p>
          <p className="mt-4">
            Through structured courses, hands-on training, and personalized
            mentorship, we bridge the gap between academic knowledge and
            real-world industry requirements. Each learner gains practical
            experience and professional insight to thrive in a competitive
            environment.
          </p>
          <p className="mt-4">
            Our mission is to cultivate confident, skilled, and purpose-driven
            individuals ready to make an impact. By empowering learners today,
            we help shape the professionals who will build a stronger and
            brighter tomorrow.
          </p>
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-green-500 to-green-400 py-3.5 px-8 rounded-full text-white font-semibold transition-all duration-500 hover:from-orange-400 hover:to-orange-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-400/40"
          >
            <span className="relative overflow-hidden">
              <span className="inline-block transition-transform duration-500 group-hover:-translate-y-6 group-hover:opacity-0">
                Read more
              </span>
              <span className="absolute left-0 inline-block transition-transform duration-500 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                Discover
              </span>
            </span>

            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="transition-all duration-500 group-hover:rotate-45"
            >
              <path
                d="M1 9H17M17 9L9 1M17 9L9 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* 6TH SECTION - TESTMONIALS SECTION */}
      <section>
        <Testimonials />
      </section>

      {/* 7TH SECTION - APPLY AS A TARINER CTA  SECTION*/}
      <section className="bg-[#046528] p-1 sm:p-5 md:grid md:grid-cols-[1fr_auto_1fr] max-w-5xl mx-4 md:mx-auto rounded-2xl mt-10 mb-30">
        <img
          src={heroimg}
          alt="trainer"
          className="hidden md:block w-full max-w-lg rounded-l-xl"
        />
        <div
          aria-hidden="true"
          className="hidden md:block w-px bg-white/40 rounded-full mx-6 my-6"
        ></div>
        <div className="relative flex items-center justify-center">
          <div className="max-md:py-20 px-6 md:px-10 text-center">
            <h2 className="text-4xl mt-2 sm:text-5xl font-regular tracking-tight text-pretty text-neutral-100">
              Share your{' '}
              <span className="text-neutral-100 font-bold">expertise</span> with
              us
            </h2>
            <p className="mt-4 text-neutral-300">
              Your journey matters. When you join us, you’re not just learning,
              you’re shaping communities, inspiring change, and empowering
              others. <br />
            </p>
            <div className="mt-10  flex flex-col items-center gap-4 text-center sm:gap-5">
              <Link
                to="/applyastrainer"
                className=" bg-green-600 hover:bg-green-700 cursour-pointer px-8 py-3 rounded-lg text-white font-regular text-md"
              >
                <span>Apply Now as a Trainer</span>
              </Link>
              <h2 className="px-8 py-3 text-sm text-neutral-300 sm:text-base">
                Send us your resume: <span>connect2rootsacademy@gmail.com</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* 8TH SECTION - FREQUENTLY ASKED QUESTIONS SECTION */}
      <section>
        <div className="max-w-4xl mx-auto mb-10 flex flex-col md:flex-row items-start justify-center gap-8 px-4 md:px-0">
          <img
            className="max-w-sm w-full rounded-xl h-full object-cover"
            src="https://images.unsplash.com/photo-1544535830-9df3f56fff6a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW5zd2VyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900"
            alt=""
          />
          <div>
            <p className="text-green-600 text-sm font-medium">FAQ's</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-pretty text-black">
              <span className="relative inline-block">
                <span className="absolute bottom-0 left-0 w-full h-3 sm:h-4 border-b-[12px] border-orange-300 sm:border-b-[16px] md:border-b-[20px] lg:border-b-[24px] -z-10 rounded-md"></span>
                Looking for answer?
              </span>{' '}
            </h2>
            <p className="text-sm text-slate-500 mt-2 pb-4">
              Find quick answers to common questions and start your learning
              journey confidently.
            </p>
            {faqs.map((faq, index) => (
              <div
                className="border-b border-slate-200 py-4 cursor-pointer"
                key={index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-medium">{faq.question}</h3>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${
                      openIndex === index ? 'rotate-180' : ''
                    } transition-all duration-500 ease-in-out`}
                  >
                    <path
                      d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                      stroke="#1D293D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p
                  className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${
                    openIndex === index
                      ? 'opacity-100 max-h-[300px] translate-y-0 pt-4'
                      : 'opacity-0 max-h-0 -translate-y-2'
                  }`}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
