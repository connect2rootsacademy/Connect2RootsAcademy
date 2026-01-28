

"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, Award, Zap, X, ChevronDown, MonitorSpeaker, Projector, Video, Handshake, Building, GraduationCap, Globe2, Landmark, HandCoins } from "lucide-react";
import { NavLink, Link, useLocation } from 'react-router-dom';
import navlogo from "../../assets/c2r-course-thumbnail.png"
import SearchBar from '../../ui/SearchBar/SearchBar';
import AuthProvider from '../../context/AuthContext';

// --- Utility for merging classes (simulating 'cn') ---
// This ensures conditional classes work correctly without needing the 'clsx' library
const cn = (...classes) => classes.filter(Boolean).join(" ");

const defaultLogo = {
  url: "/",
  src: navlogo,
  alt: "logo",
  title: "Connect2Roots Academy",
};

const defaultMenu = [

  {
    title: "Programs",
    url: "#",
    items: [
      {
        title: "Viksit Bharat 2047",
        description: "The latest industry news, updates, and info",
        icon: <Globe2 className="size-5 shrink-0" />,
        url: "/viksitbharat2047",
      },
      {
        title: "Professional Courses",
        description: "Our mission is to innovate and empower the world",
        icon: <Landmark className="size-5 shrink-0" />,
        url: "/professional",
      },
      {
        title: "Entrepreneurship Courses",
        description: "Browse job listing and discover our workspace",
        icon: <HandCoins className="size-5 shrink-0" />,
        url: "/entrepreneuship",
      },
      {
        title: "Certification Courses",
        description: "Industry recognized certifications in modern technology",
        icon: <Award className="size-5 shrink-0" />,
        url: "/",
      },

    ],
  },
  {
    title: "Corporate Training",
    url: "#",
    items: [
      {
        title: "Corporate Training",
        description: "Get all the answers you need right here",
        icon: <Zap className="size-5 shrink-0" />,
        url: "/coptraining",
      },
      {
        title: "Workshops",
        description: "We are here to help you with any questions you have",
        icon: <Projector className="size-5 shrink-0" />,
        url: "/workshops",
      },
      {
        title: "Webinars",
        description: "Check the current status of our services and APIs",
        icon: <Video className="size-5 shrink-0" />,
        url: "/webinar",
      },
      {
        title: "Trainer Registration",
        description: "Our terms and conditions for using our services",
        icon: <MonitorSpeaker className="size-5 shrink-0" />,
        url: "/applyastrainer",
      },
    ],
  },
  {
    title: "Partnership",
    url: "/partnerships",
    items: [
      {
        title: "Corporate Partnership",
        description: "Empowering businesses through strategic alliances",
        icon: <Building className="size-5 shrink-0" />,
        url: "/corporate",
      },
      {
        title: "Institutional Partnership",
        description: "Strengthening institutions for sustainable success",
        icon: <GraduationCap className="size-5 shrink-0" />,
        url: "/institutional",
      }
    ]
  },
  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "Connect2Roots Foundation",
    url: "https://connect2roots.org/",
    external: true,
  },
];

const defaultAuth = {

  signup: { title: "Get Started", url: "/register" },
};

// --- Main Navbar Component ---



const Navbar = ({
  logo = defaultLogo,
  menu = defaultMenu,
  auth = defaultAuth,
  className,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { useAuth } = AuthProvider;
  const { currentUser } = useAuth();
  const location = useLocation();

  const getNavLinkClass = (paths) => {
    return paths.some((path) => location.pathname.startsWith(path))
      ? 'text-green-600'
      : 'text-gray-900';
  };

  return (
    <section className={cn("sticky top-0 z-50 py-2 bg-white border-b border-slate-200", className)}>
      <div className="container mx-auto px-4 md:px-6">
        {/* --- Desktop Navigation --- */}
        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo Section */}
            <Link to={logo.url} className="flex items-center gap-2">
              <img
                src={navlogo}
                className="h-15 w-auto"
                alt={logo.alt}
              />
              <span className="text-lg font-semibold tracking-tighter text-slate-900 sm:hidden">
                {logo.title}
              </span>
            </Link>


            {/* Desktop Menu Items */}
            <div className="flex items-center">
              <ul className="flex items-center gap-1">
                {menu.map((item, index) => (
                  <DesktopMenuItem key={index} item={item} />
                ))}
              </ul>
            </div>
            <div><SearchBar /></div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {currentUser ? (
              <NavLink
                to="/profile"
                className={`nav-link text-sm font-semibold ${getNavLinkClass([
                  '/profile',
                ])}`}
              >
                <div className="relative flex items-center justify-center w-9 h-9 bg-neutral-600 rounded-full text-white text-lg font-regular hover:bg-neutral-800">
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
                    {auth.signup.title}
                  </span>
                </div>
              </NavLink>
            )}
          </div>
        </nav>

        {/* --- Mobile Navigation --- */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Mobile Logo */}
            <Link to={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className="h-10 w-auto"
                alt={logo.alt}
              />
              <span className="text-lg font-semibold tracking-tighter text-slate-900">
                {logo.title}
              </span>
            </Link>

            {/* Mobile Menu Trigger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-sm font-medium transition-colors hover:bg-slate-100 focus:outline-none"
            >
              <Menu className="size-4" />
            </button>
          </div>
        </div>

        {/* --- Mobile Menu Overlay (Replaces Sheet) --- */}
        <MobileDrawer
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          logo={logo}
          menu={menu}
          auth={auth}
          currentUser={currentUser}
        />
      </div>
    </section>
  );
};

// --- Sub-Component: Desktop Menu Item with Dropdown Logic ---
const DesktopMenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  // Handle hover interactions for dropdown
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 100); // Small delay to prevent flickering
  };

  if (item.items) {
    return (
      <li
        className="relative group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className={cn(
            "group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50",
            isOpen ? "bg-slate-100 text-slate-900" : "text-slate-500"
          )}
        >
          {item.title}
          <ChevronDown
            className={cn(
              "relative top-[1px] ml-1 h-3 w-3 transition duration-200",
              isOpen && "rotate-180"
            )}
            aria-hidden="true"
          />
        </button>

        {/* Dropdown Content */}
        {isOpen && (
          <div className="absolute left-0 top-full z-50 mt-1 w-[600px] origin-top-left rounded-md border border-slate-200 bg-white p-4 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95">
            <ul className="grid grid-cols-2 gap-3">
              {item.items.map((subItem, idx) => (
                <li key={idx}>
                  <Link
                    to={subItem.url}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900"
                  >
                    <div className="flex items-center gap-2 text-sm font-medium leading-none text-slate-900">
                      {subItem.icon && <span className="text-slate-500">{subItem.icon}</span>}
                      {subItem.title}
                    </div>
                    {subItem.description && (
                      <p className="line-clamp-2 text-sm leading-snug text-slate-500 mt-1 pl-7">
                        {subItem.description}
                      </p>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </li>
    );
  }

  // Simple Link (No Dropdown)
  return (
    <li>
      {item.external ? (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:outline-none"
        >
          {item.title}
        </a>
      ) : (
        <Link
          to={item.url}
          className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:outline-none"
        >
          {item.title}
        </Link>
      )}
    </li>
  );
};

// --- Sub-Component: Mobile Drawer (Replaces Sheet) ---
const MobileDrawer = ({ isOpen, onClose, logo, menu, auth, currentUser }) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative h-full w-full max-w-sm bg-white p-6 shadow-xl transition-transform animate-in slide-in-from-right duration-300 sm:w-3/4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link to={logo.url} className="flex items-center gap-2" onClick={onClose}>
            <img src={logo.src} className="h-10 w-auto" alt={logo.alt} />
            <span className="text-lg font-semibold tracking-tighter text-slate-900">
              {logo.title}
            </span>
          </Link>
          <button
            onClick={onClose}
            className="rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex flex-col gap-6 overflow-y-auto h-[calc(100vh-100px)] pb-10">
          <div className="flex flex-col gap-4">
            {menu.map((item, index) => (
              <MobileMenuItem key={index} item={item} onClose={onClose} />
            ))}
          </div>

          <div className="flex flex-col gap-3 mt-4 border-t border-slate-200 pt-6">
            {currentUser ? (
              <Link
                to="/profile"
                onClick={onClose}
                className="flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-slate-100"
              >
                <div className="relative flex items-center justify-center w-9 h-9 bg-neutral-600 rounded-full text-white text-lg font-regular">
                  <div>
                    {currentUser.firstName
                      ? currentUser.firstName.charAt(0).toUpperCase()
                      : ''}
                    <span className="absolute bottom-0 end-0 size-3 rounded-full border-2 border-white bg-emerald-500">
                      <span className="sr-only">Online</span>
                    </span>
                  </div>
                </div>
                <div className="font-medium text-slate-900">Profile</div>
              </Link>
            ) : (
              <Link
                to="/login"
                onClick={onClose}
                className="inline-flex h-10 items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-slate-50 shadow transition-colors hover:bg-slate-900/90 focus:outline-none"
              >
                {auth.signup.title}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Sub-Component: Mobile Accordion Item ---
const MobileMenuItem = ({ item, onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (item.items) {
    return (
      <div className="border-b border-slate-100 last:border-0">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex flex-1 w-full items-center justify-between py-4 font-medium transition-all hover:underline hover:text-slate-900 text-slate-700"
        >
          {item.title}
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 transition-transform duration-200 text-slate-500",
              isExpanded && "rotate-180"
            )}
          />
        </button>

        {/* Accordion Content */}
        <div
          className={cn(
            "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
            isExpanded ? "max-h-screen pb-4 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col space-y-2">
            {item.items.map((subItem, idx) => (
              <Link
                key={idx}
                to={subItem.url}
                onClick={onClose}
                className="flex items-start gap-3 rounded-md p-2 transition-colors hover:bg-slate-100"
              >
                <span className="text-slate-500 mt-0.5">{subItem.icon}</span>
                <div>
                  <div className="font-medium text-slate-900">{subItem.title}</div>
                  {subItem.description && (
                    <div className="text-slate-500 text-xs mt-0.5">
                      {subItem.description}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Simple Mobile Link
  return (
    <div className="border-b border-slate-100 last:border-0">
      {item.external ? (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="flex items-center py-4 font-medium text-slate-700 hover:text-slate-900"
        >
          {item.title}
        </a>
      ) : (
        <Link
          to={item.url}
          onClick={onClose}
          className="flex items-center py-4 font-medium text-slate-700 hover:text-slate-900"
        >
          {item.title}
        </Link>
      )}
    </div>
  );
};

export default Navbar;