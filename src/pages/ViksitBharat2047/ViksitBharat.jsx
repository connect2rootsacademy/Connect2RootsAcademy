import { CloudIcon, Compass, LockIcon, PackageIcon } from 'lucide-react';

const ViksitBharat = () => {
  return (
    <section className="min-h-screen max-w-[100vw] -mt-20">
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
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Preparing Bharat’s Youth for <span className="bg-linear-to-r from-green-500 to-green-900 bg-clip-text text-transparent text-nowrap">2047:</span> Future Jobs, Mentorship & Leadership
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
          <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-24 lg:col-start-2 lg:row-span-2 lg:row-start-1">
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
  );
};

export default ViksitBharat;
