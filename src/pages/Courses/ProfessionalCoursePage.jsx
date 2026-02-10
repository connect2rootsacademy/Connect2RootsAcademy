import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSearchParams, useParams } from 'react-router-dom';
import { videos, videoCategories } from '../../data/videoData';
import VideoList from '../../components/VideoList/VideoList';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import RecommendedVideos from '../../ui/RecommendedVideos/RecommendedVideos';
import AuthProvider from '../../context/AuthContext';
import { toast } from 'react-toastify';
import { ChevronRightIcon } from 'lucide-react';

export default function ProfessionalCoursePage() {
  const { useAuth } = AuthProvider;
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { courseName } = useParams();
  const categoryFromUrl = searchParams.get('category');

  const [activeCategory, setActiveCategory] = useState(
    categoryFromUrl || videoCategories[0]
  );
  const [currentVideo, setCurrentVideo] = useState(null);
  const [filteredVideos, setFilteredVideos] = useState([]);

  const handleRegister = () => {
    if (currentUser) {
      toast.info('You are already logged in.');
    } else {
      navigate('/login');
    }
  };

  useEffect(() => {
    if (categoryFromUrl) {
      setActiveCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  useEffect(() => {
    const filtered = videos.filter(
      (video) => video.category === activeCategory
    );
    setFilteredVideos(filtered);
    setCurrentVideo(filtered[0] || null);
  }, [activeCategory]);

  const handleVideoSelect = (video) => {
    setCurrentVideo(video);
  };

  // formatted names for breadcrumbs
  const formattedCourseName = courseName
    ? courseName
      .replace(/-/g, ' ')
      .replace(/([A-Z])/g, ' $1')
      .trim()
    : '';
  const breadcrumbSub = activeCategory;

  return (
    <div className="min-h-screen">
      <section className="course-heading">
        <div className="relative isolate overflow-hidden py-16 sm:py-24">
          {/* BREADCRUMBS */}
          <nav
            className="hidden lg:block absolute top-4 left-4 z-50 text-sm text-gray-500"
            aria-label="Breadcrumb"
          >
            <ol className="flex flex-wrap items-center gap-2 ml-5">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li aria-hidden="true">
                <ChevronRightIcon className="size-5 text-gray-400" />
              </li>
              <li>
                <Link to="/professional">Professional Courses</Link>
              </li>
              <li aria-hidden="true">
                <ChevronRightIcon className="size-5 text-gray-400" />
              </li>
              <li className="text-gray-500">{breadcrumbSub}</li>
              <li aria-hidden="true">
                <ChevronRightIcon className="size-5 text-gray-400" />
              </li>
              <li className="text-gray-800 capitalize">
                {formattedCourseName}
              </li>
            </ol>
          </nav>
          <div
            aria-hidden="true"
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#01ff23] to-[#fea500] opacity-15"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff7746] to-[#ff6f79] opacity-15"
            />
          </div>
          <div id="heading" className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto ">
              <h2 className="-mt-5 text-4xl text-center capitalize font-extrabold tracking-tight text-black sm:text-6xl md:text-7xl lg:text-8xl">
                {courseName
                  .replace(/-/g, ' ')
                  .replace(/([A-Z])/g, ' $1')
                  .trim()}
              </h2>
            </div>
          </div>
          <div className="text-center mt-5 text-gray-600 font-light">
            <p>
              Ready to learn something new? Log in or register to dive into this
              course and take the next step in your skill development.
            </p>
          </div>

          <section className="tags">
            <div className="py-24 sm:py-10 -mt-10">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 gap-x-4 gap-y-8 sm:max-w-xl sm:grid-cols-3 sm:gap-x-6 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                  <div className="border-1 border-neutral-300 rounded-lg p-2 flex flex-col items-center justify-center text-center">
                    <h1 className="text-base sm:text-lg md:text-xl border-b border-neutral-300 text-neutral-400 font-bold capitalize tracking-tight mb-2">
                      course duration
                    </h1>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl capitalize font-bold text-neutral-700">
                      Self paced
                    </h1>
                  </div>
                  <div className="border-1 border-neutral-300 rounded-lg p-2 flex flex-col items-center justify-center text-center">
                    <h1 className="text-base sm:text-lg md:text-xl border-b border-neutral-300 text-neutral-400 font-bold capitalize tracking-tight mb-2">
                      batch starts from
                    </h1>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl capitalize font-bold text-neutral-700">
                      Open Enroll
                    </h1>
                  </div>
                  <div className="border-1 border-neutral-300 rounded-lg p-2 flex flex-col items-center justify-center text-center">
                    <h1 className="text-base sm:text-lg md:text-xl border-b border-neutral-300 text-neutral-400 font-bold capitalize tracking-tight mb-2">
                      Course fees
                    </h1>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl capitalize font-bold text-neutral-700">
                      ₹0
                    </h1>
                  </div>
                  <div className="border-1 border-neutral-300 rounded-lg p-2 flex flex-col items-center justify-center text-center">
                    <h1 className="text-base sm:text-lg md:text-xl border-b border-neutral-300 text-neutral-400 font-bold capitalize tracking-tight mb-2">
                      mode of learning
                    </h1>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl capitalize font-bold text-neutral-700">
                      Online
                    </h1>
                  </div>
                  <div className="border-1 border-neutral-300 rounded-lg p-2 flex flex-col items-center justify-center text-center">
                    <h1 className="text-base sm:text-lg md:text-xl border-b border-neutral-300 text-neutral-400 font-bold capitalize tracking-tight mb-2">
                      Language
                    </h1>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl capitalize font-bold text-neutral-700">
                      Bilingual
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="registerbtn">
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={handleRegister}
                disabled={currentUser}
                className="relative group rounded-2xl bg-green-600 px-6 py-4 text-lg font-bold tracking-wide text-white shadow-sm focus-visible:outline-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed overflow-hidden"
              >
                <span className="block transition-all duration-300 ease-in-out group-hover:translate-y-[-100%] group-hover:opacity-0">
                  Enroll Now to Begin Learning
                  <span aria-hidden="true" className="ml-2">
                    &rarr;
                  </span>
                </span>
                <span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                  Join Connect2Roots Academy
                </span>
              </button>
            </div>
          </section>
        </div>
      </section>

      {/* Page 2 */}
      {currentUser ? (
        <section className="videos">
          <div className="container mx-auto px-6 py-8">
            {/* Video Player - Full width centered */}
            <div className="max-w-6xl mx-auto mb-8">
              {/* Video Title */}
              {currentVideo && (
                <div className="mb-6">
                  <h1 className="text-2xl md:text-5xl font-bold tracking-tight text-gray-700 text-center">
                    {currentVideo.title}
                  </h1>
                </div>
              )}

              {currentVideo && (
                <VideoPlayer
                  videoUrl={currentVideo.videoUrl}
                  title={currentVideo.title}
                  duration={currentVideo.duration}
                  description={currentVideo.description}
                />
              )}
            </div>

            {/* Video List - Cards layout below */}
            <div className="max-w-7xl mx-auto">
              <VideoList
                videos={filteredVideos}
                activeVideoId={currentVideo?.id}
                onVideoSelect={handleVideoSelect}
              />
            </div>
          </div>
        </section>
      ) : (
        <div className="max-w-7xl mx-auto opacity-40">
          <VideoList videos={filteredVideos} />
        </div>
      )}

      <RecommendedVideos />
    </div>
  );
}
