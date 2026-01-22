import { MessageSquare, Quote, ThumbsUp } from 'lucide-react';
import React from 'react';

const Testmonials = () => {
  const cardsData = [
    {
      image:
        'https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D',
      name: 'Gautam Sharma',
      handle: '@gautamsharma',
      date: 'April 20, 2025',
      review:
        'Connect2Roots Academy delivers an exceptional learning experience. The mentors break down complex concepts into simple, practical insights that genuinely helped me grow. Their support made a huge difference in my learning journey.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1653379670414-68e7f2ed0ce7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D',
      name: 'Seema Patel',
      handle: '@seemapatel',
      date: 'May 10, 2025',
      review:
        'I am impressed with the academy’s structured approach and focus on real-world skills. Every session felt purposeful, engaging, and well-designed. Connect2Roots Academy truly cares about student success.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1739958742515-6fe41e461664?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGluZGlhbiUyMHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww',
      name: 'Sourav Das',
      handle: '@souravdas',
      date: 'June 5, 2025',
      review:
        'The guidance I received at Connect2Roots Academy was outstanding. The trainers were patient, knowledgeable, and always ready to help. It’s one of the best learning environments I’ve been a part of.',
    },
    {
      image:
        'https://plus.unsplash.com/premium_photo-1682096108814-b53765f48ba5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxpbmRpYW4lMjBnaXJsJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
      name: 'Ishita Kapoor',
      handle: '@ishitakapoor',
      date: 'May 10, 2025',
      review:
        'Connect2Roots Academy provided clarity, confidence, and direction. Their teaching style is practical, hands-on, and highly effective. I would definitely recommend them to anyone looking to advance their skills.',
    },
  ];

  const CreateCard = ({ card }) => (
    <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0">
      <div className="flex gap-2">
        <img
          className="size-11 rounded-full object-cover"
          src={card.image}
          alt="User Image"
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <p>{card.name}</p>
            <svg
              className="mt-0.5"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z"
                fill="#2196F3"
              />
            </svg>
          </div>
          <span className="text-xs text-slate-500">{card.handle}</span>
        </div>
      </div>
      <p className="text-sm py-4 text-gray-800">{card.review}</p>
      <div className="flex items-center justify-between text-slate-500 text-xs">
        <div className="flex items-center gap-1">
          <span>Posted on</span>
          <p>{card.date}</p>
        </div>
      </div>
    </div>
  );
  return (
    <section>
      <>
        <style>{`
            @keyframes marqueeScroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }

            .marquee-inner {
                animation: marqueeScroll 25s linear infinite;
            }

            .marquee-reverse {
                animation-direction: reverse;
            }
        `}</style>
        <div className="flex flex-col mx-auto items-center">
          <div className="inline-flex uppercase items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
            <ThumbsUp className="w-4 h-4" />
            Testimonial
          </div>
        </div>
        <div className="w-full flex justify-center ">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tighter text-neutral-900 max-w-7xl mx-auto text-center leading-[1.15]">
            <span className="relative inline-block tracking-tight font-bold z-10">
              Success Stories
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
            From Our Community
          </h1>
        </div>

        <div className="mb-20 mbmarquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
          <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
            {[...cardsData, ...cardsData].map((card, index) => (
              <CreateCard key={index} card={card} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
        </div>
      </>
    </section>
  );
};

export default Testmonials;
