// import React from 'react';

// const VisionandMission = () => {
//   return (
//     <div>
//       <div className="mx-auto max-w-2xl lg:text-center">
//         <h2 className="mb-5 mt-10 text-base/7 font-semibold text-gray-600">
//           "You cannot believe in God until you believe in yourself - Swami
//           Vivekananda"
//         </h2>
//         <h1 className="text-4xl font-bold text-black sm:text-5xl lg:text-5xl">
//           Vision to Inspire
//           <span className="relative inline-block">
//             <span className="absolute bottom-0 left-0 w-full h-3 sm:h-4 bg-[#4ADE80] -z-10 rounded-md"></span>
//             Mission to Empower
//           </span>{' '}
//         </h1>

//         <p className="mb-10 mt-6 text-lg/8 text-gray-700">
//           <span className="font-extrabold text-3xl text-green-600 underline tracking-tight">
//             Vision:
//           </span>{' '}
//           Our vision at Connect2Roots Academy is to build a world where learning
//           never stops and knowledge becomes the foundation for empowerment. We
//           aspire to bridge the gap between education and employability by
//           creating a platform that fosters continuous skill development,
//           innovation, and personal growth. Through accessible and engaging
//           learning experiences, we aim to nurture individuals who are confident,
//           capable, and future-ready — shaping a society that thrives on
//           knowledge, creativity, and purpose.
//         </p>
//         <p className="mb-10 mt-6 text-lg/8 text-gray-700">
//           <span className="font-extrabold text-3xl text-green-600 underline tracking-tight">
//             Mission:
//           </span>{' '}
//           The mission of Connect2Roots Academy is to make high-quality education
//           and skill development opportunities accessible to everyone, regardless
//           of background or experience. As an initiative of Connect2Roots
//           Foundation, we are committed to fostering a culture of lifelong
//           learning through interactive content, expert-led training, and
//           real-world applications. Our goal is to empower learners with the
//           practical skills, critical thinking abilities, and professional
//           competencies required to succeed in an ever-evolving world. By
//           connecting knowledge to action, we strive to unlock every individual’s
//           potential and contribute to a more skilled and inspired global
//           community.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default VisionandMission;

import React from 'react';

const VisionandMission = () => {
  return (
    <section className="relative p-5">
      <div>
        <h1 className="text-4xl text-center font-regular text-black sm:text-5xl lg:text-5xl">
          Guided by
          <span className="relative inline-block">
            <span className="absolute bottom-0 left-0 w-full h-3 sm:h-4 border-b-[12px] border-orange-300 sm:border-b-[16px] md:border-b-[20px] lg:border-b-[24px] -z-10 rounded-md"></span>
            "Vision"
          </span>{' '}
        </h1>
        <h1 className="text-4xl text-center font-regular text-black sm:text-5xl lg:text-5xl">
          Driven by
          <span className="relative inline-block">
            <span className="absolute bottom-0 left-0 w-full h-3 sm:h-4 border-b-[12px] border-orange-300 sm:border-b-[16px] md:border-b-[20px] lg:border-b-[24px] -z-10 rounded-md"></span>
            "Mission"
          </span>{' '}
        </h1>
      </div>
      <div className="w-full py-20 lg:py-40">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
            <div className="bg-muted rounded-md py-5 px-2 flex gap-4 pl-0 lg:pl-10 flex-col flex-1">
              <div>
                <div className="text-neutral-900 bg-neutral-100 inline-flex items-center rounded-full px-2.5 py-0.5 m-2 text-xs font-regular">
                  Vision
                </div>
              </div>
              <div className="flex gap-2 p-2 flex-col">
                <h2 className="text-white text-xl sm:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                  A World Where Learning Never Stops
                </h2>
                <p className="text-white/80 text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                  To create a world where learning never stops, empowering
                  individuals through continuous growth, innovation, and
                  opportunities that bridge education with real-world impact.
                </p>
              </div>
            </div>
            <div className="flex gap-4 pl-0 lg:pl-20 flex-col flex-1">
              <div>
                <div className="bg-neutral-900 text-neutral-100 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-regular ">
                  Mission
                </div>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-xl sm:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                  Turning Knowledge Into Action And Growth
                </h2>
                <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                  To make quality education and skill development accessible to
                  all by providing practical, engaging, and future-ready
                  learning experiences that inspire lifelong growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionandMission;
