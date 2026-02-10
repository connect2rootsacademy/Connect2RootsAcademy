import React from 'react';
import { Linkedin, Youtube, Facebook, Globe, Twitter } from 'lucide-react';
import icon from '../../assets/c2r-course-thumbnail.png';

const defaultSections = [
  {
    title: 'Services',
    links: [
      { name: 'Coaching', href: '/' },
      { name: 'Corporate Training', href: '/coptraining' },
      { name: 'Psychometric Assessment', href: '/psychometricassessment' },
      {
        name: 'Competencies and skill management',
        href: '/comandskillmanagement',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'Partnership', href: '/corporate' },
      { name: 'About Us', href: '/about' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Apply as Trainer', href: '/applyastrainer' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Webinars', href: '/webinar' },
      { name: 'Workshops', href: '/workshops' },
    ],
  },
];

const defaultSocialLinks = [
  {
    icon: <Twitter className="size-5" />,
    href: 'https://x.com/Connect2Roots?s=09',
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
  {
    icon: <Globe className="size-5" />,
    href: 'https://connect2roots.org/',
    label: 'Connect2Roots Foundation',
  },
];

const defaultLegalLinks = [
  { name: 'Terms and Conditions', href: '/termsconditions' },
  { name: 'Privacy Policy', href: '/privacy' },
];

export const Footer = ({
  logo = {
    url: '/',
    src: icon,
    alt: 'logo',
    title: 'Connect2Roots Academy',
  },
  sections = defaultSections,
  description = 'Join Connect2Roots Academy and take the next step toward personal growth, career advancement, and lifelong learning.',
  socialLinks = defaultSocialLinks,
  copyright = `© ${new Date().getFullYear()} Connect2Roots Academy. All rights reserved.`,
  legalLinks = defaultLegalLinks,
}) => {
  return (
    <section className="py-10 border-t border-gray-200 bg-white relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full pointer-events-none select-none z-0 flex justify-center opacity-20 overflow-x-hidden">
        <h1 className="text-[12vw] font-bold text-neutral-300 uppercase tracking-wide whitespace-nowrap leading-none">
          Connect2Roots
        </h1>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
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
              <h1 className="text-xl font-bold text-black sm:text-xl lg:text-2xl">
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
        <div className="mt-8 flex flex-col-reverse items-center justify-between gap-4 pt-8 text-xs font-medium text-neutral-200 sm:flex-row sm:items-center sm:text-left">
          <p className="text-center sm:text-left text-neutral-700">
            {copyright}
          </p>
          <ul className="flex flex-row items-center gap-4 text-neutral-700">
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
