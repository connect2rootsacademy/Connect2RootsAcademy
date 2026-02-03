import { BookOpen, MoveRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const CoursesCard = ({
    title,
    description,
    backgroundLabel,
    backgroundPosition = "left",
    posts = [],
    className = "",
    onPostClick,
}) => {
    return (
        <section className={`container relative my-20 py-10 mx-auto px-4 ${className}`}>
            {/* Title */}
            <div className="flex flex-col mx-auto items-center mb-10 -mt-10">
                <div className="inline-flex uppercase items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
                    <BookOpen className="w-4 h-4" />
                    Courses
                </div>
            </div>
            {/* <h1 className="text-center text-4xl font-semibold -mt-10 capitalize leading-[1.4] md:text-5xl lg:text-6xl mb-2">
                {title}
            </h1> */}
            <div className="w-full flex justify-center -mt-10">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter text-neutral-900 max-w-7xl mx-auto text-center leading-[1.15]">
                    <span className="relative inline-block tracking-tight font-bold z-10">
                        Discover
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
                    Our Learning Programs
                </h1>
            </div>
            {/* Background Label */}
            {backgroundLabel && (
                <span
                    className={`absolute -top-10 -z-50 select-none font-extrabold leading-[1] text-neutral-100
            text-[180px] md:text-[250px] lg:text-[400px]
            ${backgroundPosition === "left" ? "-left-[18%]" : "-right-[28%]"}
          `}
                >
                    {backgroundLabel}
                </span>
            )}

            {/* Description */}
            <p className="mx-auto max-w-[800px] text-center text-xl leading-[2] text-foreground/50 md:text-2xl mb-8">
                {description}
            </p>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-5 md:h-[650px] md:grid-cols-2 lg:grid-cols-[1fr_0.5fr]">
                {posts.map((post, index) => {
                    const isPrimary = index === 0;
                    const rating = post.rating || 4;

                    const CardContent = (
                        <>
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 -z-0 h-[130%] w-full bg-gradient-to-t from-black/80 to-transparent transition-all duration-500 group-hover:h-full" />

                            {/* Content */}
                            <article className="relative z-10 flex items-end">
                                <div className="flex flex-1 flex-col gap-3">
                                    <h2 className="text-3xl font-semibold md:text-4xl">
                                        {post.title}
                                    </h2>

                                    <div className="flex flex-col gap-3">
                                        <span className="w-fit rounded-md bg-white/40 px-2 py-px text-base capitalize text-white backdrop-blur-md">
                                            {post.category}
                                        </span>

                                        {/* Rating + Views */}
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-0.5">
                                                {Array.from({ length: 5 }).map((_, idx) => (
                                                    <Star
                                                        key={idx}
                                                        width={20}
                                                        height={20}
                                                        stroke={idx < rating ? "#ffa534" : "#B9B8B8aa"}
                                                        fill={idx < rating ? "#ffa534" : "#B9B8B8aa"}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-lg font-thin">
                                                ({post.views} Views)
                                            </span>
                                        </div>

                                        {/* Read Time */}
                                        {post.totalTopics && (
                                            <div className="text-xl font-semibold">
                                                {post.totalTopics} + topics to discover
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <MoveRight
                                    className="transition-all duration-300 group-hover:translate-x-2"
                                    width={40}
                                    height={40}
                                    strokeWidth={1.25}
                                />
                            </article>
                        </>
                    );

                    const cardClasses = `
                        group relative flex cursor-pointer flex-col justify-end overflow-hidden
                        rounded-[20px] bg-cover bg-center bg-no-repeat p-5 text-white
                        transition-all duration-300 hover:scale-[0.98] hover:rotate-[0.3deg]
                        max-md:h-[300px]
                        ${isPrimary ? "md:col-span-2 md:row-span-2 lg:col-span-1" : ""}
                        ${post.className || ""}
                    `;

                    if (post.href) {
                        return (
                            <Link
                                key={post.id || index}
                                to={post.href}
                                style={{ backgroundImage: `url(${post.imageUrl})` }}
                                className={cardClasses}
                            >
                                {CardContent}
                            </Link>
                        )
                    }

                    return (
                        <div
                            key={post.id || index}
                            onClick={() => onPostClick && onPostClick(post)}
                            style={{ backgroundImage: `url(${post.imageUrl})` }}
                            className={cardClasses}
                        >
                            {CardContent}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default CoursesCard;
