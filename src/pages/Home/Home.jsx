'use client';
import { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import heroimg from '../../assets/hero-img.png';
import FeaturesCard from '../../ui/FeaturesCard/FeaturesCard';
import Testimonials from '../../ui/Testmonials/Testmonials';
import 'aos/dist/aos.css';
import bottompic from '../../assets/before.png';
import toppic from '../../assets/after.png';
import ShuffleHero from '../../ui/ShuffleHero';
import MainAboutUs from '../About/MainAboutUs';
import {
  BadgeCheck,
  BarChart3,
  Briefcase,
  Flag,
  GripVertical,
  HelpCircle,
  Rocket,
  ShieldCheck,
  TrendingUp,
  User,
  Video,
  Zap,
} from 'lucide-react';

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: 'Why should I join Connect2Roots Academy?',
      answer:
        'We provide skill based, career focused learning designed to help you grow personally and professionally.',
    },
    {
      question: 'What makes Connect2Roots different from other platforms?',
      answer:
        'Our learning approach combines expert guidance, real world projects, and community support for complete development.',
    },
    {
      question: 'Are the programs suitable for businesses of all sizes?"?',
      answer:
        'Yes! Our training solutions are designed to support organizations of every scale, from startups to large enterprises, with flexible and industry aligned learning programs.',
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
  const stats = [
    { icon: <Video />, value: '100+', label: 'Videos' },
    { icon: <Zap />, value: '50+', label: 'Specializations' },
    { icon: <User />, value: '20+', label: 'Crew' },
    { icon: <TrendingUp />, value: '98%', label: 'Satisfaction Rate' },
  ];
  function StatCard({ icon, value, label }) {
    return (
      <div className="bg-neutral-100 p-6 rounded-xl flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-full bg-green-600/20 flex items-center justify-center mb-4">
          {icon}
        </div>
        <div className="text-3xl font-bold text-neutral-900">{value}</div>
        <p className="text-neutral-600 text-sm mt-1">{label}</p>
        <div className="w-10 h-0.5 bg-green-600 mt-3" />
      </div>
    );
  }

  const [inset, setInset] = useState(50);
  const [dragging, setDragging] = useState(false);
  const handleMove = (e) => {
    if (!dragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clientX =
      e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;

    let percentage = ((clientX - rect.left) / rect.width) * 100;
    percentage = Math.max(0, Math.min(100, percentage));
    setInset(percentage);
  };

  return (
    <>
      {/* <div className="fixed inset-0 -z-10 bg-white">
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
      </div> */}

      {/* 1st SECTION - HERO SECTION */}
      <section className="relative flex items-center">
        <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-6">
          <div className="grid items-center grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2 pt-8 sm:pt-12 md:pt-16">
            <div className="text-center lg:text-left">
              <div className="inline-flex uppercase items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
                <BarChart3 className="w-4 h-4" />
                Level Up Your Future
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black">
                Building Business Ready Skills for{' '}
                <div className="relative inline-flex mt-2 sm:mt-0">
                  <span className="absolute rounded-sm inset-x-0 bottom-0 border-b-[12px] border-green-600/50 sm:border-b-[16px] md:border-b-[20px] lg:border-b-[24px]"></span>
                  <span className="relative text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black">
                    Scalable Growth
                  </span>
                </div>
              </h1>

              <p className="mt-6 text-sm text-neutral-700 sm:text-base md:mt-8 md:text-lg lg:text-lg max-w-2xl mx-auto lg:mx-0 leading-5">
                At Connect2Roots Academy, we partner with organizations to build
                job ready talent through industry aligned programs and practical
                learning.
              </p>

              <div className="mt-8 flex items-center justify-center lg:justify-start space-x-4">
                <div className="relative inline-flex items-center justify-center group">
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 opacity-60 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-lg blur-lg filter transition-all duration-1000 group-hover:opacity-100 group-hover:duration-300 animate-gradient-x"></div>

                  {/* Main button */}
                  <Link
                    to="/explore-courses"
                    role="button"
                    className="relative inline-flex items-center justify-center bg-neutral-900 px-6 py-3 sm:px-8 sm:py-3 rounded-lg text-neutral-100 font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-neutral-900 hover:shadow-2xl hover:-translate-y-1 hover:shadow-indigo-500/25 border border-neutral-200 hover:border-gray-600 group/btn w-full sm:w-auto"
                    title="Start learning"
                    rel="noopener noreferrer"
                  >
                    <span className="relative z-10">Explore Courses</span>

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

                <Link
                  to="/about"
                  className="text-sm font-semibold text-gray-900 hover:text-green-600 sm:text-sm/6"
                >
                  Our Approach <span aria-hidden="true">→</span>
                </Link>
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

      {/* Number section */}
      <section className="relative px-15">
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>
      </section>

      {/* 3rd SECTION- RECOMMENDED COURSES & RECOMMENDED VIDEOS SECTION  */}
      <section className="relative py-16 mt-5 mb-30 px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col mx-auto items-center -mb-20">
          <div className="inline-flex uppercase items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
            <BadgeCheck className="w-4 h-4" />
            Recommended
          </div>
        </div>

        <div className="w-full flex justify-center py-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter text-neutral-900 max-w-7xl mx-auto text-center leading-[1.15]">
            <span className="relative inline-block tracking-tight font-bold z-10">
              Building Skills
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
            That Drive Business Impact
          </h1>
        </div>
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 -mt-12 mb-10">
          {[
            {
              icon: Flag,
              label: 'Viksit Bharat 2047',
              color: 'text-green-600',
            },
            {
              icon: Briefcase,
              label: 'Professional Programs',
              color: 'text-purple-600',
            },
            {
              icon: Rocket,
              label: 'Entrepreneurship Courses',
              color: 'text-orange-600',
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`
        flex items-center cursor-pointer gap-2.5 px-3 py-2 rounded-md
        border border-neutral-200 bg-neutral-50/50 text-neutral-500
        transition-all hover:bg-white hover:border-neutral-300 hover:text-neutral-900
        ${index === 2 ? 'col-span-2 justify-center sm:col-span-1' : ''}
      `}
            >
              <div
                className={`p-1 rounded-md bg-white border border-neutral-100 shadow-sm ${item.color}`}
              >
                <item.icon className="w-3 h-3" />
              </div>
              <span className="text-xs uppercase tracking-wide font-semibold pr-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4 items-stretch">
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
        <div className="-mb-10">
          <div className="flex flex-col mx-auto items-center">
            <div className="inline-flex uppercase items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
              <ShieldCheck className="w-4 h-4" />
              Our Advantage
            </div>
          </div>
          <div className="w-full flex justify-center ">
            <h1 className="text-3xl sm:text-5xl md:text-5xl font-semibold tracking-tighter text-neutral-900 max-w-7xl mx-auto text-center leading-[1.15]">
              Why Organizations Choose{' '}
              <span className="relative inline-block tracking-tight font-bold z-10">
                Connect2Roots Academy
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
        </div>
        <div className="w-full p-10">
          <div className="-mt-10 top-0 left-0 w-full">
            <FeaturesCard />
          </div>
        </div>
      </section>

      {/* new section */}
      {/* <section className="py-10 px-4 text-center -mt-20 mb-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center uppercase gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4" />
            Participation Framework
          </div>
          <div className="w-full flex justify-center ">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter text-neutral-900 max-w-7xl mx-auto text-center leading-[1.15]">
              Opportunities for Collaboration and{' '}
              <span className="relative inline-block tracking-tight font-bold z-10">
                Engagement
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
        </div>

        <div className="flex items-center gap-6 h-100 w-full max-w-5xl mt-20 mx-auto">
          <div className="relative group grow transition-all w-56 h-100 duration-500 hover:w-full">
            <img
              className="h-full w-full rounded-xl object-cover object-center"
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ycG9yYXRlfGVufDB8fDB8fHww"
              alt="image"
            />
            <div className="absolute inset-0 rounded-xl items-start  flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="text-5xl mb-3 font-medium">
                Corporate Training Programs
              </h1>
              <p className="text-sm">
                Customized, industry aligned training solutions designed to
                upskill teams, close capability gaps, and drive measurable
                business performance across organizations.
              </p>
            </div>
          </div>
          <div className="relative group grow transition-all w-56 h-100 duration-500 hover:w-full">
            <img
              className="h-full w-full rounded-xl object-cover object-right"
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmtzaG9wfGVufDB8fDB8fHww"
              alt="image"
            />
            <div className="absolute rounded-xl  inset-0 flex flex-col items-start justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="text-5xl mb-3 font-medium">
                Webinars & Workshops
              </h1>
              <p className="text-sm">
                Expert led webinars and hands-on workshops focused on emerging
                skills, practical insights, and real-world business challenges
                for professionals and teams.
              </p>
            </div>
          </div>
          <div className="relative group grow transition-all w-56 h-100 duration-500 hover:w-full">
            <img
              className="h-full w-full rounded-xl  object-cover object-center"
              src="https://plus.unsplash.com/premium_photo-1664910070114-33ab91630e46?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29ycG9yYXRlJTIwcGFydG5lcnNoaXB8ZW58MHx8MHx8fDA%3D"
              alt="image"
            />
            <div className="absolute rounded-xl inset-0 flex flex-col items-start justify-end  p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="text-5xl mb-3 font-medium">
                Corporate Partnerships
              </h1>
              <p className="text-sm">
                Collaborate with us to co-create training initiatives, talent
                pipelines, and workforce development programs aligned with your
                organizational goals.
              </p>
            </div>
          </div>
          <div className="relative group grow transition-all w-56 h-100 duration-500 hover:w-full">
            <img
              className="h-full w-full rounded-xl  object-cover object-center"
              src="https://plus.unsplash.com/premium_photo-1682787495095-134403f5196d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5zdGl0dXRpb258ZW58MHx8MHx8fDA%3D"
              alt="image"
            />
            <div className="absolute inset-0 rounded-xl flex flex-col items-start justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="text-5xl mb-3 font-medium">
                Institutional Training
              </h1>
              <p className="text-sm">
                Structured training programs for colleges, universities, and
                institutions aimed at enhancing employability, industry
                readiness, and outcome driven skill development.
              </p>
            </div>
          </div>
        </div>
      </section> */}

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
            Inspiring Growth, Building Tomorrow
          </h1>
          <p className="mt-8">
            We partner with organizations to develop future ready talent through
            continuous learning and professional upskilling. Our corporate
            programs are designed to strengthen workforce capability, enhance
            performance, and support long term business growth.
          </p>
          <p className="mt-4">
            Through structured training modules, industry aligned courses, and
            tailored mentorship, we help bridge the gap between academic
            foundations and real world organizational demands. Teams gain
            practical expertise, role specific skills, and the confidence to
            deliver measurable impact.
          </p>
          <p className="mt-4">
            Our mission is to empower companies by cultivating skilled,
            adaptable, and purpose driven professionals. By investing in talent
            development today, we help businesses build stronger leadership,
            higher productivity, and a brighter tomorrow.
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

      {/* CONNECT2ROOTS FOUNDATION SECTION */}
      {/* <section
        className="flex flex-col items-center justify-center mb-6 md:mb-30 my-10 md:mx-auto max-w-5xl w-full text-center md:rounded-2xl  px-4 md:px-8 py-12 md:py-24 bg-[url('https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZGlhbiUyMGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{
          backgroundBlendMode: 'multiply',
          backgroundColor: 'rgba(34, 197, 94, 0.7)',
          backdropFilter: 'blur(2px)',
        }}
      >
        <h1 className="text-2xl md:text-5xl font-extrabold text-white max-w-2xl">
          <span className="text-orange-400">Connect2Roots Foundation</span> From
          Where Journey Began
        </h1>
        <div className="h-[3px] w-32 my-1 bg-gradient-to-l from-transparent to-orange-600"></div>
        <p className="text-sm md:text-xl tracking-tight font-regular text-white max-w-xl">
          Connect to Roots Foundations (C2R) is a citizen-driven nonprofit
          enabling individuals to support community development through
          volunteering, donations, and guided local projects.
        </p>
        <Link
          to="https://connect2roots.org/"
          target="_blank"
          rel="noopener noreferrer"
          type="button"
          className="px-8 py-2.5 mt-4 text-sm bg-gradient-to-r from-orange-600 to-orange-500 hover:scale-105 transition duration-300 text-white rounded-full"
        >
          Visit Our Platform &nbsp;{' '}
          <span aria-hidden="true" className="inline-block">
            →
          </span>
        </Link>
      </section> */}

      {/* ABOUT US C2R ACADEMY */}
      <MainAboutUs />

      {/* Compare yourself with other */}
      <section className="w-full py-20 lg:py-32 ">
        <div className="mx-auto max-w-7xl px-6 bg-[#046528] p-10 md:p-16 rounded-xl">
          <div className="inline-flex uppercase items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            IMPACT & PROGRESS
          </div>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <div className="flex flex-col gap-6 max-w-xl">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-100">
                Transforming Lives Through Skills That Create Opportunity
              </h2>

              <p className="text-base leading-relaxed text-neutral-100">
                By equipping teams with practical, industry relevant
                capabilities, we enable stronger performance, sustainable
                workforce development, and long term business success. Our skill
                first approach bridges gaps between potential and productivity,
                empowering organizations to adapt to evolving market demands,
                unlock new opportunities, and build high impact professionals
                across every level.
              </p>
              <div className=" mt-8 flex items-center justify-center lg:justify-start space-x-4">
                <div className="relative inline-flex items-center justify-center group">
                  <div className="absolute inset-0 opacity-60 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-lg blur-lg filter transition-all duration-1000 group-hover:opacity-100 group-hover:duration-300 animate-gradient-x"></div>
                  <Link
                    to="/professional"
                    role="button"
                    className="relative inline-flex items-center justify-center bg-neutral-900 px-6 py-3 sm:px-8 sm:py-3 rounded-lg text-neutral-100 font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-neutral-900 hover:shadow-2xl hover:-translate-y-1 hover:shadow-indigo-500/25 border border-neutral-900 hover:border-gray-600 group/btn w-full sm:w-auto"
                    title="Start learning"
                    rel="noopener noreferrer"
                  >
                    <span className="relative z-10">Read More</span>
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
              </div>
            </div>

            {/* RIGHT COMPARISON BOX */}
            <div className="w-full max-w-lg ml-auto">
              <div
                className="relative aspect-video w-full overflow-hidden rounded-xl select-none"
                onMouseMove={handleMove}
                onMouseUp={() => setDragging(false)}
                onMouseLeave={() => setDragging(false)}
                onTouchMove={handleMove}
                onTouchEnd={() => setDragging(false)}
              >
                {/* Divider line */}
                <div
                  className="absolute top-0 z-20 h-full w-0.5 bg-green-500"
                  style={{ left: `${inset}%` }}
                >
                  <button
                    className="absolute top-1/2 -translate-y-1/2 -ml-3 flex h-10 w-6 items-center justify-center rounded-md bg-white shadow border cursor-ew-resize hover:scale-110 transition"
                    onMouseDown={(e) => {
                      setDragging(true);
                      handleMove(e);
                    }}
                    onTouchStart={(e) => {
                      setDragging(true);
                      handleMove(e);
                    }}
                  >
                    <GripVertical className="h-4 w-4 text-green-600" />
                  </button>
                </div>

                {/* Top image */}
                <img
                  src={toppic}
                  alt="Before"
                  className="absolute inset-0 z-10 h-full w-full object-cover rounded-2xl border border-neutral-400"
                  style={{ clipPath: `inset(0 0 0 ${inset}%)` }}
                  draggable={false}
                />

                {/* Bottom image */}
                <img
                  src={bottompic}
                  alt="After"
                  className="absolute inset-0 h-full w-full object-cover rounded-2xl border-2 border-neutral-400"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6TH SECTION - TESTMONIALS SECTION */}
      <section>
        <Testimonials />
      </section>

      {/* 7TH SECTION - APPLY AS A TARINER CTA  SECTION*/}
      <section className="bg-[#046528] p-1 sm:p-5 md:grid md:grid-cols-[1fr_auto_1fr] max-w-6xl mx-4 md:mx-auto rounded-2xl mt-10 mb-30">
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
        <div className="max-w-6xl mx-auto mb-10 flex flex-col md:flex-row items-start justify-center gap-10 px-4 md:px-0">
          <img
            className="max-w-sm w-full rounded-xl h-full object-cover"
            src="https://images.unsplash.com/photo-1544535830-9df3f56fff6a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW5zd2VyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900"
            alt=""
          />
          <div>
            <div className="flex flex-col mx-auto items-start">
              <div className="inline-flex uppercase items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
                <HelpCircle className="w-4 h-4" />
                FAQ's
              </div>
            </div>
            <div className="flex flex-col items-start justify-center w-full">
              <h1 className="text-4xl sm:text-5xl md:text-4xl font-semibold tracking-tighter text-neutral-900 max-w-5xl text-left leading-[1.15]">
                <span className="relative inline-block tracking-tight font-bold z-10">
                  Looking for answer?
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
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-medium leading-6">
                    {faq.question}
                  </h3>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${
                      openIndex === index ? 'rotate-180' : ''
                    } transition-all duration-500 ease-in-out w-4 h-4 flex-shrink-0 mt-1`}
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
