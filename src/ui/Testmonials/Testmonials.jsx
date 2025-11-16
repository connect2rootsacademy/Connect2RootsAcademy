'use client';
import { TestimonialsColumn } from './testimonials-columns';

const testimonials = [
  {
    text: 'Connect2Roots Academy helped me build real skills with clear, practical learning. Highly recommended!',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    name: 'Briana Patton',
    role: 'Operations Manager',
  },
  {
    text: 'The courses are industry-focused and delivered with exceptional clarity. It was a game-changer for my career.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    name: 'Bilal Ahmed',
    role: 'IT Manager',
  },
  {
    text: 'Connect2Roots Academy transformed my confidence and understanding in just weeks.',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    name: 'Saman Malik',
    role: 'Customer Support Lead',
  },
  {
    text: 'Professional instructors and well-structured modules made learning seamless.',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    name: 'Omar Raza',
    role: 'Software Engineer',
  },
  {
    text: 'I gained job-ready skills that I could apply immediately.',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    name: 'Zainab Hussain',
    role: 'Project Manager',
  },
  {
    text: 'Connect2Roots Academy offers the perfect balance of theory and hands-on experience.',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    name: 'Aliza Khan',
    role: 'Business Analyst',
  },
  {
    text: 'The learning environment is supportive, modern, and highly efficient.',
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
    name: 'Farhan Siddiqui',
    role: 'Marketing Director',
  },
  {
    text: 'Every lesson added genuine value to my professional growth.',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    name: 'Sana Sheikh',
    role: 'Sales Manager',
  },
  {
    text: 'Connect2Roots Academy exceeded expectations with its quality and commitment to students.',
    image: 'https://randomuser.me/api/portraits/men/9.jpg',
    name: 'Hassan Ali',
    role: 'E-commerce Manager',
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Page() {
  return (
    <section className="relative py-10">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 text-center text-5xl sm:text-6xl font-bold tracking-tight text-pretty text-black">
          <span className="relative inline-block">
            <span className="absolute bottom-0 left-0 w-full h-3 sm:h-4 bg-[#4ADE80] -z-10 rounded-md"></span>
            Success Stories
          </span>{' '}
          from Our Community
        </h2>

        <div className="mt-10 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialsColumn duration={16} testimonials={firstColumn} />
          <TestimonialsColumn
            className="hidden md:block"
            duration={20}
            testimonials={secondColumn}
          />
          <TestimonialsColumn
            className="hidden lg:block"
            duration={18}
            testimonials={thirdColumn}
          />
        </div>
      </div>
    </section>
  );
}
