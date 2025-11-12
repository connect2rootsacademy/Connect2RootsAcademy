'use client';

import CategoryTabs from '../../ui/CategoryTabs/CategoryTabs';
import coursethumbnail from '../../assets/c2r-course-thumbnail.png';
export default function VideoList({
  activeCategory,
  videos,
  activeVideoId,
  onVideoSelect,
  onCategoryChange,
}) {
  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="mb-6">
        <CategoryTabs
          activeCategory={activeCategory}
          onChange={onCategoryChange}
        />
      </div>

      {/* Video Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {videos.map((video) => (
          <button
            key={video.id}
            onClick={() => onVideoSelect(video)}
            className={`text-left bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-600 transform hover:-translate-y-1 ${
              activeVideoId === video.id
                ? 'ring-2 ring-green-600 shadow-lg'
                : ''
            }`}
          >
            <div className="aspect-video w-full overflow-hidden bg-gray-100">
              <img
                src={coursethumbnail}
                alt={video.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h4
                className={`text-sm font-semibold line-clamp-2 mb-2 ${
                  activeVideoId === video.id
                    ? 'text-green-800'
                    : 'text-gray-900'
                }`}
              >
                {video.title}
              </h4>
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-600">
                  <span className="block mb-1">{video.category}</span>
                  <span className="inline-block bg-green-700 text-white text-[10px] font-medium px-2 py-1 rounded-full">
                    {video.language}
                  </span>
                </div>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {video.duration}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
