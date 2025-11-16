'use client';
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
import { MoveRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CoursesCard = ({
  title,
  backgroundLabel,
  backgroundPosition = 'left',
  posts = [],
  className,
  onPostClick,
}) => {
  return (
    <section
      className={cn('container relative mt-30 py-10 mx-auto px-4', className)}
    >
      {/* Title */}
      <h1 className="mb-12 text-5xl text-center font-bold text-black sm:text-5xl lg:text-6xl">
        <span className="relative inline-block">
          <span className="absolute bottom-0 left-0 w-full h-3 sm:h-4 bg-[#4ADE80] -z-10 rounded-md"></span>
          {title}
        </span>{' '}
        with the Right Courses
      </h1>

      {/* Background Label */}
      {backgroundLabel && (
        <span
          className={cn(
            'absolute -top-10 -z-50 select-none text-[180px] font-extrabold leading-[1] text-black/[0.05] md:text-[250px] lg:text-[400px] text-foreground/[0.025]',
            backgroundPosition === 'left' ? '-left-[18%]' : '-right-[28%]'
          )}
        >
          {backgroundLabel}
        </span>
      )}

      {/* Blog Grid */}
      <div className="grid h-auto grid-cols-1 gap-5 md:h-[650px] md:grid-cols-2 lg:grid-cols-[1fr_0.5fr]">
        {posts.map((post, index) => {
          const {
            id,
            title: postTitle,
            category,
            imageUrl,
            views,
            totalCourse,
            rating = 4,
            className: postClassName,
          } = post;

          const isPrimary = index === 0;

          return (
            <Link
              to={post.href}
              key={id || index}
              style={{ backgroundImage: `url(${imageUrl})` }}
              className={cn(
                'group relative row-span-1 flex size-full cursor-pointer flex-col justify-end overflow-hidden rounded-[20px] bg-cover bg-center bg-no-repeat p-5 text-white max-md:h-[300px] transition-all duration-300 hover:scale-[0.98] hover:rotate-[0.3deg]',
                isPrimary &&
                  'col-span-1 row-span-1 md:col-span-2 md:row-span-2 lg:col-span-1',
                postClassName
              )}
              onClick={() => onPostClick?.(post)}
            >
              {/* Overlay */}
              <div className="absolute inset-0 -z-0 h-[130%] w-full bg-gradient-to-t from-black/80 to-transparent transition-all duration-500 group-hover:h-full" />

              {/* Post Content */}
              <article className="relative z-0 flex items-end">
                <div className="flex flex-1 flex-col gap-3">
                  <h1 className="text-3xl font-semibold md:text-4xl">
                    {postTitle}
                  </h1>

                  <div className="flex flex-col gap-3">
                    <span className="text-base capitalize py-px px-2 rounded-md bg-white/40 w-fit text-white backdrop-blur-md">
                      {category}
                    </span>

                    {/* Rating & Views */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star
                            width={20}
                            height={20}
                            key={idx}
                            stroke={idx < rating ? '#ffa534' : '#B9B8B8aa'}
                            fill={idx < rating ? '#ffa534' : '#B9B8B8aa'}
                          />
                        ))}
                      </div>
                      <span className="text-lg font-thin">({views} Views)</span>
                    </div>

                    {/* Read Time */}
                    {totalCourse && (
                      <div className="text-xl font-semibold">
                        {totalCourse} + courses available
                      </div>
                    )}
                  </div>
                </div>

                {/* Arrow Icon */}
                <MoveRight
                  className="transition-all duration-300 group-hover:translate-x-2"
                  color="white"
                  width={40}
                  height={40}
                  strokeWidth={1.25}
                />
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CoursesCard;
