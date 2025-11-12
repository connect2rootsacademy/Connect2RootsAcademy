import React from 'react';
// import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Linkedin, Instagram, Youtube, Facebook } from 'lucide-react';
import icon from '../../assets/c2r-course-thumbnail.png';

const defaultSections = [
  {
    title: 'Product',
    links: [
      { name: 'Overview', href: '/' },
      { name: 'Professional', href: '/professional' },
      { name: 'Certificated', href: '/certified' },
      { name: 'Entrepreneurship', href: '/entrepreneuship' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/ourmembers' },
      { name: 'Team', href: '/ourteam' },
      { name: 'Contact', href: '/contact' },
      { name: 'Apply for Trainer', href: '/applyastrainer' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Webinars', href: '/webinar' },
      { name: 'Workshops', href: '/workshops' },
      { name: 'Partnerships', href: '/corporate' },
      { name: 'Coporate Training', href: '/coptraining' },
    ],
  },
];

const defaultSocialLinks = [
  {
    icon: <Instagram className="size-5" />,
    href: 'https://connect2roots.org/',
    label: 'Instagram',
  },
  {
    icon: <Facebook className="size-5" />,
    href: 'https://www.facebook.com/connect2rootsacademy/',
    label: 'Facebook',
  },
  {
    icon: <Youtube className="size-5" />,
    href: 'https://www.youtube.com/@Connect2RootsAcademy',
    label: 'Twitter',
  },
  {
    icon: <Linkedin className="size-5" />,
    href: 'https://www.linkedin.com/company/connect2roots-academy/',
    label: 'LinkedIn',
  },
];

const defaultLegalLinks = [
  { name: 'Terms and Conditions', href: '/termsconditions' },
  { name: 'Privacy Policy', href: '/privacy' },
];

export const Footer = ({
  logo = {
    url: '/',
    // src: 'https://www.shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg',
    src: icon,
    alt: 'logo',
    title: 'Connect2Roots Academy',
  },
  sections = defaultSections,
  description = 'Join Connect2Roots Academy and take the next step toward personal growth, career advancement, and lifelong learning',
  socialLinks = defaultSocialLinks,
  copyright = '© 2025 Connect2Roots Academy. All rights reserved.',
  legalLinks = defaultLegalLinks,
}) => {
  return (
    <section className="py-10 border-t border-gray-200 relative">
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
      <div className="container mx-auto">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <a href={logo.url}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-15"
                />
              </a>
              <h1 className="text-xl font-bold text-black sm:text-lg lg:text-2xl">
                <span className="relative inline-block">
                  <span className="absolute bottom-[-1px] left-0 w-full h-2 sm:h-3 bg-[#4ADE80] -z-10 rounded-full"></span>
                  {logo.title}
                </span>{' '}
              </h1>
            </div>
            <p className="max-w-[70%] text-sm text-muted-foreground">
              {description}
            </p>
            <ul className="flex items-center space-x-6 text-muted-foreground">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-green-600">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                {/* <h3 className="mb-4 font-bold">{section.title}</h3>h3 */}
                <h3 className="font-bold text-black sm:text-lg mb-4">
                  <span className="relative inline-block">
                    <span className="absolute bottom-1 left-0 w-full h-1 sm:h-2 bg-[#4ADE80] -z-10 rounded-full"></span>
                    {section.title}
                  </span>{' '}
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
