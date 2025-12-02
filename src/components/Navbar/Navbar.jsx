import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '../../assets/c2r-course-thumbnail.png';

import {
  BuildingIcon,
  GraduationCapIcon,
  HeadsetIcon,
  HandshakeIcon,
  CircleUserIcon,
  EarthIcon,
  LandmarkIcon,
  HandCoinsIcon,
  AwardIcon,
  ProjectorIcon,
  VideoIcon,
  PencilRulerIcon,
  MonitorSpeakerIcon,
  ChevronRightIcon,
  User,
  Globe2Icon,
} from 'lucide-react';
import './Navbar.css';
import AuthProvider from '../../context/AuthContext';
import SearchBar from '../../ui/SearchBar/SearchBar';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { useAuth } = AuthProvider;
  const { currentUser } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [partnershipDropdownOpen, setPartnershipDropdownOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  // const [aboutUsDropdownOpen, setAboutUsDropdownOpen] = useState(false);
  const [trainingDropdownOpen, setTrainingDropdownOpen] = useState(false);
  const [timer, setTimer] = useState(null);
  const location = useLocation();

  // useEffect(() => {
  //   if (mobileMenuOpen) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'unset';
  //   }
  //   return () => {
  //     document.body.style.overflow = 'unset';
  //   };
  // }, [mobileMenuOpen]);

  const getNavLinkClass = (paths) => {
    return paths.some((path) => location.pathname.startsWith(path))
      ? 'text-green-600'
      : 'text-gray-900';
  };

  const handleMouseEnter = (setDropdownOpen) => {
    clearTimeout(timer);
    setDropdownOpen(true);
  };

  const handleMouseLeave = (setDropdownOpen) => {
    const newTimer = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
    setTimer(newTimer);
  };

  const [industriesOpen, setIndustriesOpen] = useState(false);

  const industries = [
    'Information Technology (IT) & Software',
    'Banking, Financial Services & Insurance (BFSI)',
    'Healthcare & Pharmaceuticals',
    'Education & EdTech',
    'Retail & E-commerce',
    'Manufacturing & Engineering',
    'Marketing & Digital Media',
    'Telecommunications & ITES (BPO/KPO)',
    'Consulting & Professional Services',
    'Hospitality & Travel Management',
  ];

  return (
    <header className="bg-white border-b border-gray-200/60 sticky top-0 z-50 w-full">
      {/* DESKTOP NAVIGATION */}
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-9xl items-center justify-between lg:justify-center p-4 lg:px-8"
      >
        {/* Logo */}
        <div className="flex lg:flex-1 items-center order-1 lg:order-none">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center ">
            <div className="h-10 w-auto flex items-center scale-280">
              {' '}
              <img
                src={logo}
                alt="Logo"
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-x-10  items-center">
          {/* =============== EXPLORE COURSES TAB DESKTOP =============== */}
          <section
            className="relative"
            onMouseEnter={() => handleMouseEnter(setCoursesDropdownOpen)}
            onMouseLeave={() => handleMouseLeave(setCoursesDropdownOpen)}
          >
            <button
              type="button"
              className={`nav-link flex items-center gap-x-2 font-medium transition-all duration-200 ${
                coursesDropdownOpen
                  ? 'text-green-600'
                  : 'text-gray-700 hover:text-green-600'
              } ${getNavLinkClass(['/entrepreneuship', '/professional'])}`}
            >
              <span className="text-sm font-semibold tracking-normal text-neutral-600 hover:text-neutral-900">
                Explore Courses
              </span>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className={`size-5 text-gray-400 transition-transform duration-300 ease-in-out ${
                  coursesDropdownOpen ? 'rotate-180 text-green-600' : ''
                }`}
              >
                <path
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                />
              </svg>
            </button>

            {/* ======= Dropdown Panel ======= */}
            <section
              className={`absolute left-0 mt-3 w-80 bg-white/95 backdrop-blur-xl shadow-2xl rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 ease-out transform origin-top z-50 ${
                coursesDropdownOpen
                  ? 'opacity-100 scale-100 translate-y-0 visible'
                  : 'opacity-0 scale-95 -translate-y-2 invisible'
              }`}
              style={{
                boxShadow:
                  '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Dropdown header */}
              <div className="px-4 py-3 border-b border-gray-100/80 bg-gradient-to-r from-gray-50/50 to-white/30">
                <h3 className="text-sm font-semibold text-gray-700">
                  Learning Paths
                </h3>
                <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-2">
                  <Globe2Icon className="h-3 w-3 text-gray-400" />
                  <span>Choose your career direction</span>
                </p>
              </div>

              {/* Dropdown items */}
              <div className="p-2.5">
                <NavLink
                  to="/viksitbharat2047"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-green-50/80 hover:to-emerald-50/60 hover:text-green-700 transition-all duration-200 group border border-transparent hover:border-green-100/60"
                  onClick={() => {
                    setCoursesDropdownOpen(false);
                  }}
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-200">
                    <Globe2Icon className="size-5 text-green-700" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 text-sm group-hover:text-green-800">
                      Viksit Bharat 2047
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5 group-hover:text-green-600/80">
                      Boost your career with expert-led programs
                    </p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <svg
                      className="w-4 h-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </NavLink>
                <NavLink
                  to="/professional"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-blue-50/60 hover:text-blue-700 transition-all duration-200 group border border-transparent hover:border-blue-100/60"
                  onClick={() => {
                    setCoursesDropdownOpen(false);
                  }}
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-blue-100 to-blue-100 group-hover:from-blue-200 group-hover:to-blue-200 transition-all duration-200">
                    <LandmarkIcon className="size-5 text-blue-700" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 text-sm group-hover:text-blue-800">
                      Professional Courses
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5 group-hover:text-blue-600/80">
                      Boost your career with expert-led programs
                    </p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <svg
                      className="w-4 h-4 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </NavLink>

                <div className="my-2">
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200/40 to-transparent"></div>
                </div>

                <NavLink
                  to="/entrepreneuship"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-amber-50/80 hover:to-orange-50/60 hover:text-amber-700 transition-all duration-200 group border border-transparent hover:border-amber-100/60"
                  onClick={() => {
                    setCoursesDropdownOpen(false);
                  }}
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-amber-100 to-orange-100 group-hover:from-amber-200 group-hover:to-orange-200 transition-all duration-200">
                    <HandCoinsIcon className="size-5 text-amber-700" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 text-sm group-hover:text-amber-800">
                      Entrepreneurship Courses
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5 group-hover:text-amber-600/80">
                      Learn to launch, grow, and scale your business
                    </p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <svg
                      className="w-4 h-4 text-amber-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </NavLink>
              </div>

              {/* Footer section */}
              <div className="px-4 py-3 border-t border-gray-100/80 bg-gradient-to-r from-gray-50/30 to-white/10">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500">Need guidance?</p>
                  <Link
                    to="/contact"
                    className="text-xs font-medium text-green-600 hover:text-green-700 transition-colors duration-200"
                  >
                    Contact us →
                  </Link>
                </div>
              </div>
            </section>
          </section>

          {/* =============== TRAINING PROGRAMS TAB DESKTOP =============== */}
          <section
            className="relative"
            onMouseEnter={() => handleMouseEnter(setTrainingDropdownOpen)}
            onMouseLeave={() => handleMouseLeave(setTrainingDropdownOpen)}
          >
            <button
              type="button"
              className={`nav-link flex items-center gap-x-2 font-medium transition-all duration-300 ${
                trainingDropdownOpen
                  ? 'text-green-600'
                  : 'text-gray-700 hover:text-green-600'
              } ${getNavLinkClass([
                '/workshops',
                '/webinar',
                '/corporatetraining',
              ])}`}
            >
              <span className="text-sm font-semibold tracking-normal text-neutral-600 hover:text-neutral-900">
                Training Programs
              </span>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className={`size-5 text-gray-400 transition-transform duration-300 ease-in-out ${
                  trainingDropdownOpen ? 'rotate-180 text-green-600' : ''
                }`}
              >
                <path
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                />
              </svg>
            </button>

            {/* ===== Dropdown Panel ===== */}
            <section
              className={`absolute left-0 mt-3 w-72 bg-white/95 backdrop-blur-xl shadow-2xl rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 ease-out transform origin-top z-50 ${
                trainingDropdownOpen
                  ? 'opacity-100 scale-100 translate-y-0 visible'
                  : 'opacity-0 scale-95 -translate-y-2 invisible'
              }`}
              style={{
                boxShadow:
                  '0 20px 40px -15px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Header Section */}
              <div className="px-5 py-3.5 border-b border-gray-100/80 bg-gradient-to-r from-gray-50/50 to-white/30">
                <h3 className="text-sm font-semibold text-gray-800">
                  Training Solutions
                </h3>
                <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-2">
                  <AwardIcon className="h-3 w-3 text-gray-400" />
                  <span>Empower your team with expert-led sessions</span>
                </p>
              </div>

              {/* Dropdown Items */}
              <div className="p-3">
                {/* Corporate Training with Submenu */}
                <div
                  className="relative"
                  onMouseEnter={() => setIndustriesOpen(true)}
                  onMouseLeave={() => setIndustriesOpen(false)}
                >
                  <NavLink
                    to="/coptraining"
                    className="flex items-center gap-3 px-4 py-3.5 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-green-50/80 hover:to-emerald-50/60 hover:text-green-700 transition-all duration-200 group border border-transparent hover:border-green-100/60"
                    onClick={() => {
                      setTrainingDropdownOpen(false);
                    }}
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-200">
                      <PencilRulerIcon className="size-4 text-green-700" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-gray-800 group-hover:text-green-800 truncate">
                        Corporate Training
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5 group-hover:text-green-600/80 truncate">
                        Upskill your workforce with custom sessions
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                      <ChevronRightIcon className="size-4 text-gray-400 group-hover:text-green-500 transition-colors duration-200 flex-shrink-0" />
                    </div>
                  </NavLink>

                  {/* Industries Submenu - Enhanced */}
                  <div
                    className={`absolute left-full top-0 ml-2 w-80 bg-white/95 backdrop-blur-xl shadow-2xl rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 ease-out transform origin-left z-50 ${
                      industriesOpen
                        ? 'opacity-100 scale-100 translate-x-0 visible'
                        : 'opacity-0 scale-95 -translate-x-2 invisible pointer-events-none'
                    }`}
                    style={{
                      boxShadow:
                        '0 20px 40px -15px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <div className="p-4">
                      {/* Submenu Header */}
                      <div className="px-3 pb-3 border-b border-gray-100/80">
                        <h3 className="text-sm font-semibold text-gray-800 mb-1">
                          Industries We Serve
                        </h3>
                        <p className="text-xs text-gray-500">
                          Custom training solutions for your sector
                        </p>
                      </div>

                      {/* Industries List */}
                      <div className="flex flex-col gap-1.5 mt-3 max-h-80 overflow-y-auto custom-scrollbar">
                        {industries.map((industry, index) => {
                          const slug = industry
                            .toLowerCase()
                            .replace(/[^a-z0-9]+/g, '-')
                            .replace(/(^-|-$)/g, '');

                          return (
                            <Link
                              to={`/coptraining/industry/${slug}`}
                              key={index}
                              className="flex items-center gap-3 px-3 py-2.5 text-left text-gray-700 rounded-lg hover:bg-gradient-to-r hover:from-green-50/80 hover:to-emerald-50/60 hover:text-green-700 transition-all duration-200 group border border-transparent hover:border-green-100/60"
                              onClick={() => {
                                setIndustriesOpen(false);
                                setTrainingDropdownOpen(false);
                              }}
                            >
                              <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-200">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 group-hover:bg-green-600"></div>
                              </div>
                              <span className="text-sm font-medium text-gray-800 group-hover:text-green-800 flex-1">
                                {industry}
                              </span>
                              <svg
                                className="w-4 h-4 text-gray-400 group-hover:text-green-500 opacity-0 group-hover:opacity-100 transition-all duration-200"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    {/* Submenu Footer */}
                    <div className="px-4 py-3 border-t border-gray-100/80 bg-gradient-to-r from-gray-50/30 to-white/10">
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-500">
                          Can't find your industry?
                        </p>
                        <button className="text-xs font-medium text-green-600 hover:text-green-700 transition-colors duration-200">
                          Contact us →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-2">
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200/40 to-transparent"></div>
                </div>

                {/* Workshops */}
                <NavLink
                  to="/workshops"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-cyan-50/60 hover:text-blue-700 transition-all duration-200 group border border-transparent hover:border-blue-100/60"
                  onClick={() => {
                    setTrainingDropdownOpen(false);
                  }}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-200">
                    <ProjectorIcon className="size-4 text-blue-700" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-gray-800 group-hover:text-blue-800">
                      Workshops
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5 group-hover:text-blue-600/80">
                      Hands-on sessions for practical learning
                    </p>
                  </div>
                </NavLink>

                {/* Webinar */}
                <NavLink
                  to="/webinar"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-purple-50/80 hover:to-fuchsia-50/60 hover:text-purple-700 transition-all duration-200 group border border-transparent hover:border-purple-100/60"
                  onClick={() => {
                    setTrainingDropdownOpen(false);
                  }}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-100 to-fuchsia-100 group-hover:from-purple-200 group-hover:to-fuchsia-200 transition-all duration-200">
                    <VideoIcon className="size-4 text-purple-700" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-gray-800 group-hover:text-purple-800">
                      Webinar
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5 group-hover:text-purple-600/80">
                      Live expert sessions from anywhere
                    </p>
                  </div>
                </NavLink>

                {/* Trainer Registration */}
                <NavLink
                  to="/applyastrainer"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-amber-50/80 hover:to-orange-50/60 hover:text-amber-700 transition-all duration-200 group border border-transparent hover:border-amber-100/60"
                  onClick={() => {
                    setTrainingDropdownOpen(false);
                  }}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-amber-100 to-orange-100 group-hover:from-amber-200 group-hover:to-orange-200 transition-all duration-200">
                    <MonitorSpeakerIcon className="size-4 text-amber-700" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-gray-800 group-hover:text-amber-800">
                      Trainer Registration
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5 group-hover:text-amber-600/80">
                      Share expertise, inspire learners, grow together
                    </p>
                  </div>
                </NavLink>
              </div>

              {/* Footer Section */}
              <div className="px-5 py-3 border-t border-gray-100/80 bg-gradient-to-r from-gray-50/30 to-white/10">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500">Need custom training?</p>
                  <button className="text-xs font-medium text-green-600 hover:text-green-700 transition-colors duration-200">
                    Get quote →
                  </button>
                </div>
              </div>
            </section>
          </section>

          {/* =============== PARTNERSHIP TAB DESKTOP =============== */}
          <section
            className="relative"
            onMouseEnter={() => handleMouseEnter(setPartnershipDropdownOpen)}
            onMouseLeave={() => handleMouseLeave(setPartnershipDropdownOpen)}
          >
            <button
              type="button"
              className={`nav-link flex items-center gap-x-2 font-medium transition-all duration-300 ${
                partnershipDropdownOpen
                  ? 'text-green-600'
                  : 'text-gray-700 hover:text-green-600'
              } ${getNavLinkClass(['/corporate', '/institutional'])}`}
            >
              <span className="text-sm font-semibold tracking-normal text-neutral-600 hover:text-neutral-900">
                Partnership
              </span>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className={`size-5 text-gray-400 transition-transform duration-300 ease-in-out ${
                  partnershipDropdownOpen ? 'rotate-180 text-green-600' : ''
                }`}
              >
                <path
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                />
              </svg>
            </button>

            {/* ======= Dropdown Panel ======= */}
            <section
              className={`absolute left-0 mt-3 w-72 bg-white/95 backdrop-blur-xl shadow-2xl rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 ease-out transform origin-top z-50 ${
                partnershipDropdownOpen
                  ? 'opacity-100 scale-100 translate-y-0 visible'
                  : 'opacity-0 scale-95 -translate-y-2 invisible'
              }`}
              style={{
                boxShadow:
                  '0 20px 40px -15px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Header Section */}
              <div className="px-5 py-3.5 border-b border-gray-100/80 bg-gradient-to-r from-gray-50/50 to-white/30">
                <h3 className="text-sm font-semibold text-gray-800">
                  Partnership Programs
                </h3>
                <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-2">
                  <HandshakeIcon className="h-3 w-3 text-gray-400" />
                  <span>Collaborate for mutual growth and success</span>
                </p>
              </div>

              {/* Dropdown Items */}
              <div className="p-3">
                {/* Corporate Partnership */}
                <NavLink
                  to="/corporate"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-indigo-50/60 hover:text-blue-700 transition-all duration-200 group border border-transparent hover:border-blue-100/60"
                  onClick={() => {
                    setPartnershipDropdownOpen(false);
                  }}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-200">
                    <BuildingIcon className="size-5 text-blue-700" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-gray-800 group-hover:text-blue-800">
                      Corporate Partnership
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5 group-hover:text-blue-600/80 leading-relaxed">
                      Empowering businesses through strategic alliances
                    </p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <svg
                      className="w-4 h-4 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </NavLink>

                {/* Divider */}
                <div className="my-2">
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200/40 to-transparent"></div>
                </div>

                {/* Institutional Partnership */}
                <NavLink
                  to="/institutional"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50/80 hover:to-teal-50/60 hover:text-emerald-700 transition-all duration-200 group border border-transparent hover:border-emerald-100/60"
                  onClick={() => {
                    setPartnershipDropdownOpen(false);
                  }}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 group-hover:from-emerald-200 group-hover:to-teal-200 transition-all duration-200">
                    <GraduationCapIcon className="size-5 text-emerald-700" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-gray-800 group-hover:text-emerald-800">
                      Institutional Partnership
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5 group-hover:text-emerald-600/80 leading-relaxed">
                      Strengthening institutions for sustainable success
                    </p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <svg
                      className="w-4 h-4 text-emerald-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </NavLink>
              </div>

              {/* Footer Section */}
              <div className="px-5 py-3 border-t border-gray-100/80 bg-gradient-to-r from-gray-50/30 to-white/10">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500">
                    Interested in partnering?
                  </p>
                  <Link
                    to="/contact"
                    className="text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    Contact us →
                  </Link>
                </div>
              </div>
            </section>
          </section>

          {/* =============== ABOUT US TAB DESKTOP =============== */}
          <section>
            <NavLink to="/about">
              <span className="text-sm mr-5 font-semibold tracking-normal text-neutral-600 hover:text-neutral-900">
                About Us
              </span>
            </NavLink>
          </section>

          {/* =============== CONTACT US TAB DESKTOP =============== */}
          <section>
            <NavLink to="/contact">
              <span className="text-sm mr-5 font-semibold tracking-normal text-neutral-600 hover:text-neutral-900">
                Contact Us
              </span>
            </NavLink>
          </section>

          {/* =============== SEARCHBAR =============== */}
          <section>
            <SearchBar />
          </section>
        </div>

        {/* =============== DESKTOP LOGIN =============== */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {currentUser ? (
            <NavLink
              to="/profile"
              className={`nav-link text-sm font-semibold ${getNavLinkClass([
                '/profile',
              ])}`}
            >
              <div className="flex items-center justify-center w-9 h-9 bg-neutral-600 rounded-full text-white text-lg font-regular hover:bg-neutral-800">
                <div>
                  {currentUser.firstName
                    ? currentUser.firstName.charAt(0).toUpperCase()
                    : ''}
                  <span className="absolute bottom-0 end-0 size-3 rounded-full border-2 border-white bg-emerald-500">
                    <span className="sr-only">Online</span>
                  </span>
                </div>
              </div>
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className={`nav-link text-sm  ${getNavLinkClass(['/login'])}`}
            >
              <div className="flex gap-2 items-center justify-center">
                <span className="text-center font-semibold tracking-wide text-neutral-100 bg-neutral-800 hover:bg-neutral-700 p-2 rounded-md">
                  Get Started
                </span>
              </div>
            </NavLink>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="flex lg:hidden order-2 items-center gap-3">
          <div className="flex flex-1 justify-end">
            {currentUser ? (
              <NavLink
                to="/profile"
                className={`nav-link text-sm font-semibold ${getNavLinkClass([
                  '/profile',
                ])}`}
              >
                <div className="flex items-center justify-center w-9 h-9 bg-neutral-600 rounded-full text-white text-lg font-regular hover:bg-neutral-800">
                  <div>
                    {currentUser.firstName
                      ? currentUser.firstName.charAt(0).toUpperCase()
                      : ''}
                    <span className="absolute bottom-0 end-0 size-3 rounded-full border-2 border-white bg-emerald-500">
                      <span className="sr-only">Online</span>
                    </span>
                  </div>
                </div>
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className={`nav-link text-sm  ${getNavLinkClass(['/login'])}`}
              >
                <div className="flex gap-2 items-center justify-center">
                  <span className="text-center font-semibold tracking-wide text-neutral-100 bg-neutral-800 hover:bg-neutral-700 p-2 rounded-md">
                    Get Started
                  </span>
                </div>
              </NavLink>
            )}
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center p-1 hover:scale-[0.98] active:scale-[0.96] transition"
            aria-expanded={mobileMenuOpen}
            aria-label="Open main menu"
          >
            <span className="sr-only">Open main menu</span>
            <motion.svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
              className="h-6 w-6 text-gray-900"
              initial={false}
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
            role="dialog"
            aria-modal="true"
          >
            {/* Backdrop with subtle blur */}
            <motion.button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/9 backdrop-blur-[3px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-hidden="true"
            />

            {/* Panel: Clean top sheet */}
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{
                type: 'tween',
                stiffness: 300,
                damping: 30,
              }}
              className="absolute top-0 left-0 right-0 w-full bg-white backdrop-blur-xl rounded-b-2xl border-b border-gray-200/60 shadow-[0_20px_40px_rgba(0,0,0,0.08)] overflow-hidden"
            >
              {/* Header - Minimalist */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100/60 active:bg-neutral-100">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-2 -ml-2 rounded-2xl active:bg-gray-100/50 transition-colors"
                >
                  <div className="flex items-center lg:order-none mr-3">
                    <Link to="/" className="-m-1.5 p-1.5 flex items-center ">
                      <div className="h-10 w-auto flex items-center scale-280">
                        {' '}
                        <img
                          src={logo}
                          alt="Logo"
                          className="h-full w-auto object-contain"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-bold text-neutral-700">
                      Connect2Roots Academy
                    </span>
                    <span className="text-xs text-gray-500">
                      Learn practical skills
                    </span>
                  </div>
                </Link>

                <div className="flex items-center gap-2">
                  <Link
                    to="/get-started"
                    className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-gray-900 text-sm font-medium text-white hover:bg-gray-800 active:scale-95 transition-all"
                  >
                    Get Started
                  </Link>

                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-2xl hover:bg-gray-100/80 active:scale-95 transition-all"
                    aria-label="Close menu"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-6 w-6 text-gray-600"
                    >
                      <path
                        d="M6 18L18 6M6 6l12 12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content - Clean list style */}
              <div className="px-4 py-3 max-h-[75vh] overflow-y-auto">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.04,
                        delayChildren: 0.08,
                      },
                    },
                  }}
                >
                  {/* Courses */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="mb-1"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setCoursesDropdownOpen(!coursesDropdownOpen)
                      }
                      className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-2xl hover:bg-gray-50/80 active:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-none p-2.5 rounded-xl bg-green-500/30">
                          <EarthIcon className="h-5 w-5 text-gray-700" />
                        </div>
                        <div className="text-left">
                          <div className="text-base font-medium text-gray-900">
                            Explore Courses
                          </div>
                          <div className="text-sm text-gray-500 mt-0.5">
                            Browse curated courses
                          </div>
                        </div>
                      </div>

                      <motion.span
                        animate={{ rotate: coursesDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-none text-gray-400"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" />
                        </svg>
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {coursesDropdownOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-1 space-y-1 px-4"
                        >
                          <NavLink
                            to="/viksitbharat2047"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
                          >
                            <div className="flex-none p-2.5 rounded-xl bg-green-100">
                              <Globe2Icon className="h-5 w-5 text-green-700" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                Viksit Bharat 2047
                              </div>
                              <div className="text-xs text-gray-500 mt-0.5">
                                Stay connected with the growth
                              </div>
                            </div>
                          </NavLink>

                          <NavLink
                            to="/professional"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
                          >
                            <div className="flex-none p-2.5 rounded-xl bg-blue-100">
                              <LandmarkIcon className="h-5 w-5 text-blue-700" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                Professional Courses
                              </div>
                              <div className="text-xs text-gray-500 mt-0.5">
                                In-depth career tracks
                              </div>
                            </div>
                          </NavLink>

                          <NavLink
                            to="/entrepreneuship"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
                          >
                            <div className="flex-none p-2.5 rounded-xl bg-amber-100">
                              <HandCoinsIcon className="h-5 w-5 text-amber-700" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                Entrepreneurship
                              </div>
                              <div className="text-xs text-gray-500 mt-0.5">
                                Start and grow a business
                              </div>
                            </div>
                          </NavLink>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Separator */}
                  <div className="h-px bg-neutral-200 mx-4 my-3" />

                  {/* Training Programs */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="mb-1"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setTrainingDropdownOpen(!trainingDropdownOpen)
                      }
                      className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-2xl hover:bg-gray-50/80 active:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-none p-2.5 rounded-xl bg-green-500/30">
                          <AwardIcon className="h-5 w-5 text-gray-700" />
                        </div>
                        <div className="text-left">
                          <div className="text-base font-medium text-gray-900">
                            Training Programs
                          </div>
                          <div className="text-sm text-gray-500 mt-0.5">
                            Workshops and corporate training
                          </div>
                        </div>
                      </div>

                      <motion.span
                        animate={{ rotate: trainingDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-none text-gray-400"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" />
                        </svg>
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {trainingDropdownOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-1 space-y-1 px-4"
                        >
                          <NavLink
                            to="/coptraining"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
                          >
                            <div className="flex-none p-2.5 rounded-xl bg-green-100">
                              <PencilRulerIcon className="h-5 w-5 text-green-700" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                Corporate Training
                              </div>
                              <div className="text-xs text-gray-500 mt-0.5">
                                Custom programs for teams
                              </div>
                            </div>
                          </NavLink>

                          <NavLink
                            to="/workshops"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
                          >
                            <div className="flex-none p-2.5 rounded-xl bg-blue-100">
                              <ProjectorIcon className="h-5 w-5 text-blue-700" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                Workshops
                              </div>
                              <div className="text-xs text-gray-500 mt-0.5">
                                Hands-on project sessions
                              </div>
                            </div>
                          </NavLink>

                          <NavLink
                            to="/webinar"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
                          >
                            <div className="flex-none p-2.5 rounded-xl bg-purple-100">
                              <VideoIcon className="h-5 w-5 text-purple-700" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                Webinars
                              </div>
                              <div className="text-xs text-gray-500 mt-0.5">
                                Live talks with experts
                              </div>
                            </div>
                          </NavLink>

                          <NavLink
                            to="/applyastrainer"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
                          >
                            <div className="flex-none p-2.5 rounded-xl bg-amber-100">
                              <MonitorSpeakerIcon className="h-5 w-5 text-amber-700" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                Apply as a trainer
                              </div>
                              <div className="text-xs text-gray-500 mt-0.5">
                                Share expertise with our community
                              </div>
                            </div>
                          </NavLink>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Separator */}
                  <div className="h-px bg-neutral-200 mx-4 my-3" />

                  {/* Partnership */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="mb-1"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setPartnershipDropdownOpen(!partnershipDropdownOpen)
                      }
                      className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-2xl hover:bg-gray-50/80 active:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-none p-2.5 rounded-xl bg-green-500/30">
                          <HandshakeIcon className="h-5 w-5 text-gray-700" />
                        </div>
                        <div className="text-left">
                          <div className="text-base font-medium text-gray-900">
                            Partnership
                          </div>
                          <div className="text-sm text-gray-500 mt-0.5">
                            Collaborate with us
                          </div>
                        </div>
                      </div>

                      <motion.span
                        animate={{ rotate: partnershipDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-none text-gray-400"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" />
                        </svg>
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {partnershipDropdownOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-1 space-y-1 px-4"
                        >
                          <NavLink
                            to="/corporate"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
                          >
                            <div className="flex-none p-2.5 rounded-xl bg-blue-100">
                              <BuildingIcon className="h-5 w-5 text-blue-700" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                Corporate Partnership
                              </div>
                              <div className="text-xs text-gray-500 mt-0.5">
                                Enterprise skilling and hiring
                              </div>
                            </div>
                          </NavLink>

                          <NavLink
                            to="/institutional"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
                          >
                            <div className="flex-none p-2.5 rounded-xl bg-emerald-100">
                              <GraduationCapIcon className="h-5 w-5 text-emerald-700" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                Institutional Partnership
                              </div>
                              <div className="text-xs text-gray-500 mt-0.5">
                                Work with colleges and NGOs
                              </div>
                            </div>
                          </NavLink>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Separator */}
                  <div className="h-px bg-neutral-200 mx-4 my-3" />

                  {/* About Us & Contact Us */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 6 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="mt-2 flex gap-2 px-4"
                  >
                    <NavLink
                      to="/about"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex-1 flex items-center justify-center gap-3 px-4 py-3 rounded-2xl hover:bg-gray-50/80 active:bg-gray-100 transition-colors border border-gray-200/60"
                    >
                      <div className="flex-none p-2 rounded-xl bg-neutral-200">
                        <User
                          className="h-4 w-4 text-gray-700"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="text-sm font-medium text-gray-900 whitespace-nowrap">
                        About Us
                      </div>
                    </NavLink>

                    <NavLink
                      to="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex-1 flex items-center justify-center gap-3 px-4 py-3 rounded-2xl hover:bg-gray-50/80 active:bg-gray-100 transition-colors border border-gray-200/60"
                    >
                      <div className="flex-none p-2 rounded-xl bg-neutral-200">
                        <HeadsetIcon
                          className="h-4 w-4 text-neutral-700"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="text-sm font-medium text-gray-900 whitespace-nowrap">
                        Contact Us
                      </div>
                    </NavLink>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
