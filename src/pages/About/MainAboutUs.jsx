'use client';
import React from 'react';
import {
  Users,
  CheckCircle,
  Sparkles,
  Star,
  ArrowRight,
  Zap,
  TrendingUp,
  Target,
  Lightbulb,
  Globe,
  Video,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MainAboutUs() {
  const services = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      secondaryIcon: (
        <Star className="w-4 h-4 absolute -top-1 -right-1 text-neutral-400" />
      ),
      title: 'Inspiration',
      description:
        'Born from a vision to bridge the gap between learning and opportunity, Connect2Roots Academy inspires individuals to grow, adapt, and thrive in an evolving world.',
      position: 'left',
    },
    {
      icon: <Target className="w-6 h-6" />,
      secondaryIcon: (
        <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-neutral-400" />
      ),
      title: 'Mission',
      description:
        'Our mission is to make quality education accessible to all by delivering skill-based, practical, and transformative learning experiences.',
      position: 'left',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      secondaryIcon: (
        <Star className="w-4 h-4 absolute -top-1 -right-1 text-neutral-400" />
      ),
      title: 'Innovation',
      description:
        'We embrace innovative teaching methods and digital platforms to foster creativity, curiosity, and problem-solving.',
      position: 'left',
    },
    {
      icon: <Users className="w-6 h-6" />,
      secondaryIcon: (
        <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-neutral-400" />
      ),
      title: 'Community',
      description:
        'A supportive ecosystem of learners, educators, and professionals sharing growth and inspiration.',
      position: 'right',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      secondaryIcon: (
        <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-neutral-400" />
      ),
      title: 'Empowerment',
      description:
        'Equipping learners with confidence, tools, and skills for lifelong success.',
      position: 'right',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      secondaryIcon: (
        <Star className="w-4 h-4 absolute -top-1 -right-1 text-neutral-400" />
      ),
      title: 'Impact',
      description:
        'Creating long-term social and professional impact through accessible education.',
      position: 'right',
    },
  ];

  // const stats = [
  //   { icon: <Video />, value: '100+', label: 'Videos' },
  //   { icon: <Zap />, value: '50+', label: 'Specializations' },
  //   { icon: <Users />, value: '20+', label: 'Crew' },
  //   { icon: <TrendingUp />, value: '98%', label: 'Satisfaction Rate' },
  // ];

  return (
    <section className="w-full py-24 px-4 text-neutral-800 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex flex-col mx-auto items-center">
            <div className="inline-flex uppercase items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              DISCOVER OUR STORY
            </div>
          </div>
          <div className="w-full flex justify-center ">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tighter text-neutral-900 max-w-7xl mx-auto text-center leading-[1.15]">
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
        <p className="text-center max-w-2xl mx-auto mb-16 text-neutral-600">
          Connect2Roots Academy empowers graduates through structured courses,
          expert mentorship, and skill-based programs bridging academics and
          industry.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left */}
          <div className="space-y-16">
            {services
              .filter((s) => s.position === 'left')
              .map((service, idx) => (
                <ServiceItem key={idx} {...service} />
              ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center order-first md:order-none">
            <div className="relative w-full max-w-xs">
              <div className="rounded-md overflow-hidden shadow-xl">
                <img
                  src="https://plus.unsplash.com/premium_photo-1679093464015-a9611b7490ce"
                  alt="Connect2Roots"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-end justify-center p-4">
                  <Link
                    to="/contact"
                    className="bg-white text-neutral-800 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium hover:bg-neutral-100"
                  >
                    Connect with us <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="absolute inset-0 border-4 border-green-600 rounded-md -m-3 -z-10" />
            </div>
          </div>

          {/* Right */}
          <div className="space-y-16">
            {services
              .filter((s) => s.position === 'right')
              .map((service, idx) => (
                <ServiceItem key={idx} {...service} />
              ))}
          </div>
        </div>

        {/* Stats */}
        {/* <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div> */}
      </div>
    </section>
  );
}

/* ---------- Components ---------- */

function ServiceItem({ icon, secondaryIcon, title, description }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-green-500/20 p-3 rounded-lg relative">
          {icon}
          {secondaryIcon}
        </div>
        <h3 className="text-xl font-medium text-neutral-800">{title}</h3>
      </div>
      <p className="text-sm text-neutral-600 leading-relaxed pl-12">
        {description}
      </p>
    </div>
  );
}

function StatCard({ icon, value, label }) {
  return (
    <div className="bg-slate-50 p-6 rounded-xl flex flex-col items-center text-center">
      <div className="w-14 h-14 rounded-full bg-green-600/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <div className="text-3xl font-bold text-neutral-800">{value}</div>
      <p className="text-neutral-700 text-sm mt-1">{label}</p>
      <div className="w-10 h-0.5 bg-green-600 mt-3" />
    </div>
  );
}
