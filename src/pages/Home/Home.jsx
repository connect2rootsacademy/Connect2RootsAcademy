'use client';
import { useState, useEffect } from 'react';
import './Home.css';
import RecommendedVideos from '../../ui/RecommendedVideos/RecommendedVideos';
import { Link } from 'react-router-dom';
import heroimg from '../../assets/hero-img.png';
import FeaturesCard from '../../ui/FeaturesCard/FeaturesCard';
import Testimonials from '../../ui/Testmonials/Testmonials';
import Aos from 'aos';
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

  //AOS ANIMATION INITIALIZATION
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      {/* 1st SECTION - HERO SECTION */}
      <section className="relative min-h-screen flex items-center">
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

        <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-6 -mt-30">
          <div className="grid items-center grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2 pt-8 sm:pt-12 md:pt-16">
            <div className="text-center lg:text-left">
              <p className="mb-3 text-green-600 font-semibold tracking-tight leading-snug text-base sm:text-lg md:mb-4 md:text-lg">
                Level Up Your Future
              </p>

              <h1 className="text-3xl font-bold text-black sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Building Strong Skills for a{' '}
                <div className="relative inline-flex mt-2 sm:mt-0 sm:inline">
                  <span className="absolute inset-x-0 bottom-0 border-b-[16px] border-[#4ADE80] sm:border-b-[20px] md:border-b-[24px] lg:border-b-[30px]"></span>
                  <span className="relative text-3xl font-bold text-black sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                    Stronger Future.
                  </span>
                </div>
              </h1>

              <p className="mt-6 text-sm text-black sm:text-base md:mt-8 md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0">
                At Connect2Roots Academy, we guide learners to unlock their true
                potential with world-class courses and practical learning
              </p>

              <div className="mt-8 justify-center flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-4 sm:space-y-0 sm:gap-5 sm:justify-start">
                <div className="relative inline-flex items-center justify-center group mx-auto sm:mx-0 ">
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

                <button className="text-sm font-semibold text-gray-900 hover:text-green-600 sm:text-sm/6 mx-auto sm:mx-0">
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
                'https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900',
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
                'https://images.unsplash.com/photo-1709715357520-5e1047a2b691?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW50cmVwcmVuZXVyc2hpcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900',
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
                'https://plus.unsplash.com/premium_photo-1661475855862-3f61f5b580e6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGhpcmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900',
              views: 987,
              totalCourse: 6,
              rating: 4,
            },
          ]}
          className="mb-16"
        />
      </section>

      {/* 3rd SECTION- RECOMMENDED COURSES & RECOMMENDED VIDEOS SECTION  */}
      <section className="mt-30 mb-10">
        <h1 className="text-6xl text-center font-semibold tracking-tight mb-10 text-black">
          <span className="relative inline-block">
            <span className="absolute bottom-0 left-0 w-full h-3 sm:h-4 bg-[#4ADE80] -z-10 rounded-md"></span>
            Learn
          </span>{' '}
          What Truly Matters
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-8 pt-12">
          <Link to="/aianddatascience" className="max-w-72 w-full block group">
            <div className="overflow-hidden rounded-xl">
              <img
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1677691820099-a6e8040aa077?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900"
                alt="AI and Data Science Course"
              />
            </div>
            <h3 className="text-base text-slate-900 font-medium mt-3">
              AI and Data Science
            </h3>
            <p className="text-xs text-green-600 font-medium mt-1 hover:underline">
              Enroll Now
            </p>
          </Link>
          <Link to="/webdev" className="max-w-72 w-full block group">
            <div className="overflow-hidden rounded-xl">
              <img
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1732020743205-9a1da14e36fd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900"
                alt="Web Development Course"
              />
            </div>
            <h3 className="text-base text-slate-900 font-medium mt-3">
              Web Development
            </h3>
            <p className="text-xs text-green-600 font-medium mt-1 hover:underline">
              Enroll Now
            </p>
          </Link>
          <Link to="/careerdevelopment" className="max-w-72 w-full block group">
            <div className="overflow-hidden rounded-xl">
              <img
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1614029655965-2464911905a4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJhbmtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900"
                alt="Banking and Finance Course"
              />
            </div>
            <h3 className="text-base text-slate-900 font-medium mt-3">
              Banking and Finance
            </h3>
            <p className="text-xs inline text-green-600 font-medium mt-1 hover:underline">
              Enroll Now
            </p>
          </Link>
          <Link to="/careerdevelopment" className="max-w-72 w-full block group">
            <div className="overflow-hidden rounded-xl">
              <img
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                src="https://plus.unsplash.com/premium_photo-1661266819853-ac00dcaf21d2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyZWVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900"
                alt="Career Development "
              />
            </div>
            <h3 className="text-base text-slate-900 font-medium mt-3">
              Career Development
            </h3>
            <p className="text-xs inline text-green-600 font-medium mt-1 hover:underline">
              Enroll Now
            </p>
          </Link>
        </div>
      </section>
      <RecommendedVideos />

      {/* 4th SECTION - FEATURES SECTION */}
      <section className="first-page">
        <div>
          <h1 className=" text-center text-5xl sm:text-6xl font-bold tracking-tight text-pretty text-black">
            <span className="relative inline-block">
              <span className="absolute bottom-0 left-0 w-full h-3 sm:h-4 bg-[#4ADE80] -z-10 rounded-md"></span>
              Why Choose
            </span>{' '}
            Connect2Roots Academy?
          </h1>
        </div>
      </section>
      <div className="w-full">
        <div className="-mt-10 top-0 left-0 w-full">
          <FeaturesCard />
        </div>
      </div>

      {/* 5TH SECTION - OUR MISSION SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4 -mt-10 mb-10 md:mb-20">
        <div className="relative shadow-2xl shadow-green-600/40 rounded-2xl overflow-hidden shrink-0">
          <img
            className="max-w-md w-full object-cover rounded-2xl"
            src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
            alt=""
          />
          <div className="flex items-center gap-1 max-w-72 absolute bottom-8 left-8 bg-white p-4 rounded-xl">
            <div className="flex -space-x-4 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="image"
                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-1"
              />
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt="image"
                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[2]"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                alt="image"
                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[3]"
              />
              <div className="flex items-center justify-center text-xs  text-white size-9 rounded-full border-[3px] border-white bg-green-600 hover:-translate-y-1 transition z-[4]">
                50+
              </div>
            </div>
            <p className="text-sm font-medium text-slate-800">
              Join our academy community
            </p>
          </div>
        </div>
        <div className="text-sm text-slate-600 max-w-lg">
          <h1 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Enspiring Growth
            <span className="relative inline-block">
              <span className="absolute bottom-0 left-0 w-full h-3 sm:h-4 bg-[#4ADE80] -z-10 rounded-md"></span>
              Building Tomorrow
            </span>{' '}
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
            className="group inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-green-500 to-emerald-400 py-3.5 px-8 rounded-full text-white font-semibold transition-all duration-500 hover:from-green-400 hover:to-emerald-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-400/40"
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
      <section className=" relative md:grid md:grid-cols-2 max-w-4xl mx-4 md:mx-auto rounded-xl mt-10 mb-30">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-300"
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
        <img
          src={heroimg}
          alt="trainer"
          className="hidden md:block w-full max-w-lg rounded-l-xl"
        />
        <div className="relative flex items-center justify-center">
          <div className="max-md:py-20 px-6 md:px-10 text-center">
            <h2 className="text-2xl sm:text-2xl font-bold tracking-tight text-pretty text-black">
              <span className="relative inline-block">
                <span className="absolute bottom-0 left-0 w-full h-3 sm:h-3 bg-[#4ADE80] -z-10 rounded-md"></span>
                Share your expertise with us
              </span>{' '}
            </h2>
            <p className="mt-4 text-gray-500">
              Your journey matters. When you join us, you’re not just learning,
              you’re shaping communities, inspiring change, and empowering
              others. <br />
            </p>
            <div className="mt-10">
              <Link
                to="/applyastrainer"
                className="rounded-lg bg-green-600 hover:bg-green-700 text-sm px-14 py-3 text-white"
              >
                Apply Now as a Trainer
              </Link>
              <h2 className="px-8 py-3 mt-4 text-sm text-gray-800">
                Send us your resume: <span>xyz@gmail.com</span>
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
            {/* <h1 className="text-3xl font-semibold">Looking for answer?</h1> */}
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-pretty text-black">
              <span className="relative inline-block">
                <span className="absolute bottom-0 left-0 w-full h-3 sm:h-4 bg-[#4ADE80] -z-10 rounded-md"></span>
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
