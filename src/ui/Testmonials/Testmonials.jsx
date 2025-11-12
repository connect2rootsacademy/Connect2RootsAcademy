// 'use client';
// import React from 'react';
// import { motion } from 'framer-motion';

// const testimonials = [
//   {
//     name: 'Aarav Sharma',
//     role: 'Software Engineer, Google',
//     text: 'Connect2Roots helped me bridge the gap between theory and real-world practice. The mentors truly care about your growth!',
//     img: 'https://randomuser.me/api/portraits/men/32.jpg',
//   },
//   {
//     name: 'Priya Mehta',
//     role: 'UX Designer, Adobe',
//     text: 'Their approach is creative and impactful. The learning experience was unlike any traditional setup!',
//     img: 'https://randomuser.me/api/portraits/women/45.jpg',
//   },
//   {
//     name: 'Rahul Verma',
//     role: 'Marketing Analyst, Swiggy',
//     text: 'Practical sessions and real case studies made a huge difference. I could apply everything directly in my work.',
//     img: 'https://randomuser.me/api/portraits/men/56.jpg',
//   },
//   {
//     name: 'Sneha Kapoor',
//     role: 'Product Manager, Zomato',
//     text: 'The courses and mentors helped me think strategically. I’m more confident in my professional journey.',
//     img: 'https://randomuser.me/api/portraits/women/60.jpg',
//   },
//   {
//     name: 'Karan Gupta',
//     role: 'AI Researcher, Microsoft',
//     text: 'I love how Connect2Roots connects education to real career outcomes. Highly recommended!',
//     img: 'https://randomuser.me/api/portraits/men/78.jpg',
//   },
//   {
//     name: 'Karan Gupta',
//     role: 'AI Researcher, Microsoft',
//     text: 'I love how Connect2Roots connects education to real career outcomes. Highly recommended!',
//     img: 'https://randomuser.me/api/portraits/men/78.jpg',
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section className="px-6 py-20">
//       <div className="max-w-7xl mx-auto">
//         <h2 className=" mb-10 text-center text-5xl sm:text-6xl font-bold tracking-tight text-pretty text-black">
//           <span className="relative inline-block">
//             <span className="absolute bottom-0 left-0 w-full h-3 sm:h-4 bg-[#4ADE80] -z-10 rounded-md"></span>
//             Success Stories
//           </span>{' '}
//           from Our Community
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px] lg:auto-rows-[250px] ">
//           {testimonials.map((t, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: i * 0.1 }}
//               viewport={{ once: true }}
//               className={`relative bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between hover:bg-green-300 hover:scale-105 hover:shadow-xl transition-all ${
//                 i === 0
//                   ? 'sm:row-span-2'
//                   : i === 2
//                   ? 'lg:col-span-2'
//                   : i === 4
//                   ? 'sm:col-span-2 lg:col-span-1'
//                   : ''
//               }`}
//             >
//               <p className="text-gray-700 italic mb-4 ">“{t.text}”</p>
//               <div className="flex items-center gap-3 mt-auto ">
//                 <img
//                   src={t.img}
//                   alt={t.name}
//                   className="w-12 h-12 rounded-full object-cover"
//                 />
//                 <div>
//                   <h4 className="font-semibold text-gray-800">{t.name}</h4>
//                   <p className="text-sm text-gray-500">{t.role}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';
import { TestimonialsColumn } from './testimonials-columns';

const testimonials = [
  {
    text: 'This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    name: 'Briana Patton',
    role: 'Operations Manager',
  },
  {
    text: 'Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    name: 'Bilal Ahmed',
    role: 'IT Manager',
  },
  {
    text: 'The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    name: 'Saman Malik',
    role: 'Customer Support Lead',
  },
  {
    text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    name: 'Omar Raza',
    role: 'CEO',
  },
  {
    text: 'Its robust features and quick support have transformed our workflow, making us significantly more efficient.',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    name: 'Zainab Hussain',
    role: 'Project Manager',
  },
  {
    text: 'The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    name: 'Aliza Khan',
    role: 'Business Analyst',
  },
  {
    text: 'Our business functions improved with a user-friendly design and positive customer feedback.',
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
    name: 'Farhan Siddiqui',
    role: 'Marketing Director',
  },
  {
    text: 'They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    name: 'Sana Sheikh',
    role: 'Sales Manager',
  },
  {
    text: 'Using this ERP, our online presence and conversions significantly improved, boosting business performance.',
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
