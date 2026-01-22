import { CloudIcon, Compass, LockIcon, PackageIcon } from 'lucide-react';

const ViksitBharat = () => {
  return (
    <section className="min-h-screen max-w-[100vw]">
      <div className=" w-full relative">
        {/* Dashed Center Fade Grid */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      `,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 0',
            maskImage: `
       repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
          radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
      `,
            WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
          radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
      `,
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in',
          }}
        />
        <div className="min-h-screen pb-20 -mt-20">
          <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black">
            <div className="flex items-center mt-24">
              <div className="flex items-center mt-24">
                <div className="flex -space-x-3 pr-3">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                    alt="user3"
                    className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-1"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                    alt="user1"
                    className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-2"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                    alt="user2"
                    className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-3"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                    alt="user3"
                    className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-4"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/men/75.jpg"
                    alt="user5"
                    className="size-8 rounded-full border-2 border-white hover:-translate-y-0.5 transition z-5"
                  />
                </div>

                <div>
                  <div className="flex ">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-star text-transparent fill-yellow-600"
                          aria-hidden="true"
                        >
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                      ))}
                  </div>
                  <p className="text-sm text-gray-700">Used by 10,000+ users</p>
                </div>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-extrabold max-w-4xl text-center mt-4 md:leading-17.5">
              Preparing Bharat’s Youth for{' '}
              <span className="bg-linear-to-r from-green-500 to-green-900 bg-clip-text text-transparent text-nowrap">
                2047:
              </span>{' '}
              Future Jobs, Mentorship & Leadership
            </h1>

            {/* Subheading */}
            <p className="max-w-2xl text-center text-base my-7">
              We connect students with industry mentors, futuristic skills, and
              corporate partnerships, building a bridge from classroom to career
              in AI, Fintech, Global Captives, and beyond.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              <a
                href="/"
                className="bg-green-500 hover:bg-green-600 text-white rounded-xl px-9 h-12 m-1 ring-offset-2 ring-1 ring-green-400 flex items-center transition-colors"
              >
                View Courses
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="ml-1 size-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>

              <button className="flex items-center gap-2 border border-slate-400 hover:bg-green-50 transition rounded-xl px-7 h-12 text-slate-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                  <rect x="2" y="6" width="14" height="12" rx="2" />
                </svg>
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
          <svg
            className="size-full absolute -z-10 inset-0"
            width="1440"
            height="720"
            viewBox="0 0 1440 720"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="#86EFAC"
              strokeOpacity=".7"
              d="M-15.227 702.342H1439.7"
            />
            <circle
              cx="711.819"
              cy="372.562"
              r="308.334"
              stroke="#86EFAC"
              strokeOpacity=".7"
            />
            <circle
              cx="16.942"
              cy="20.834"
              r="308.334"
              stroke="#86EFAC"
              strokeOpacity=".7"
            />
            <path
              stroke="#86EFAC"
              strokeOpacity=".7"
              d="M-15.227 573.66H1439.7M-15.227 164.029H1439.7"
            />
            <circle
              cx="782.595"
              cy="411.166"
              r="308.334"
              stroke="#86EFAC"
              strokeOpacity=".7"
            />
          </svg>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <div className="inline-flex uppercase items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
                    <Compass className="w-4 h-4" />
                    VISION 2047
                  </div>
                  <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                    Why 2047?
                  </h1>
                  <p className="mt-6 text-xl/8 text-gray-700">
                    India is entering a decisive phase where its young
                    population can become its greatest strength or its biggest
                    missed opportunity. As technology reshapes how we learn,
                    work, and grow, preparing students for the future is no
                    longer optional; it is essential.
                  </p>
                </div>
              </div>
            </div>
            <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src="https://plus.unsplash.com/premium_photo-1670002518021-22f130a91f7e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZGVudHMlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D"
                className="w-3xl max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
              />
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base/7 text-gray-600 lg:max-w-lg">
                  <p>
                    India stands at a defining moment in its growth journey. As
                    the nation approaches 2047, the centenary of its
                    independence, the challenge is no longer just population
                    size but preparedness. India’s demographic dividend must
                    transform into a skills dividend. With rapid technological
                    advancement reshaping industries, more than 60% of future
                    jobs will demand new-age digital and technical competencies.
                    Our mission is to ensure that every student, regardless of
                    background, is equipped to participate meaningfully in this
                    future so no potential is left behind.
                  </p>
                  <ul role="list" className="mt-8 space-y-8 text-gray-600">
                    <li className="flex gap-x-3">
                      <CloudIcon
                        aria-hidden="true"
                        className="mt-1 size-5 flex-none text-green-600"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Future-ready skills:
                        </strong>{' '}
                        Preparing students with in-demand digital, technical,
                        and problem-solving capabilities aligned with emerging
                        industries.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <LockIcon
                        aria-hidden="true"
                        className="mt-1 size-5 flex-none text-green-600"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Inclusive access:
                        </strong>{' '}
                        Bridging the urban–rural and socio-economic skill gap
                        through equitable learning opportunities.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <PackageIcon
                        aria-hidden="true"
                        className="mt-1 size-5 flex-none text-green-600"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Nation-building impact:
                        </strong>{' '}
                        Empowering youth to contribute to India’s economic
                        growth, innovation, and global competitiveness by 2047.
                      </span>
                    </li>
                  </ul>
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                    Why does 2047 matter?
                  </h2>
                  <p className="mt-6">
                    By 2047, over 60% of jobs will require advanced digital and
                    technical skills that many students today do not have access
                    to. 2047 represents a national milestone—and an urgent
                    deadline—to convert India’s demographic advantage into a
                    skilled, confident, and globally competitive workforce,
                    ensuring no student is left behind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ViksitBharat;
