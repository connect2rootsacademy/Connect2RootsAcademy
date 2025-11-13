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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <a href={logo.url}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-12 sm:h-15"
                />
              </a>
              <h1 className="text-lg font-bold text-black sm:text-xl lg:text-2xl">
                <span className="relative inline-block">
                  <span className="absolute bottom-[-1px] left-0 w-full h-2 sm:h-3 bg-[#4ADE80] -z-10 rounded-full"></span>
                  {logo.title}
                </span>{' '}
              </h1>
            </div>
            <p className="max-w-full text-sm text-muted-foreground lg:max-w-[70%]">
              {description}
            </p>
            <ul className="flex items-center space-x-4 text-muted-foreground">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-green-600">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
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
        <div className="mt-8 flex flex-col-reverse items-center justify-between gap-4 border-t pt-8 text-xs font-medium text-muted-foreground sm:flex-row sm:items-center sm:text-left">
          <p className="text-center sm:text-left">{copyright}</p>
          <ul className="flex flex-col gap-2 sm:flex-row sm:gap-4">
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
