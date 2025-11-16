import { useId } from 'react';

export default function FeaturesCard() {
  return (
    <div className="py-20 lg:py-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-6xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b  from-neutral-100  to-neutral-150 p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-neutral-800 relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-600 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: 'Personalized Learning Paths',
    description:
      'Learn at your own pace with tailored courses designed to match your goals and skill level.',
  },
  {
    title: 'Expert-Led Sessions',
    description:
      'Gain real-world insights directly from industry professionals and certified trainers.',
  },
  {
    title: 'Career-Focused Curriculum',
    description:
      'Every course is designed to enhance employability and build in-demand skills.',
  },
  {
    title: 'Interactive Live Workshops',
    description:
      'Engage in hands-on sessions that make learning practical, fun, and impactful.',
  },
  {
    title: 'Comprehensive Skill Growth',
    description:
      'From fundamentals to advanced topics — develop both technical and soft skills.',
  },
  {
    title: 'Global Learning Community',
    description:
      'Connect, collaborate, and grow with learners and mentors from across the world.',
  },
  {
    title: 'Flexible Access Anytime',
    description:
      'Learn anywhere, anytime with lifetime access to your enrolled courses.',
  },
  {
    title: 'Certification of Achievement',
    description:
      'Earn recognized certificates that boost your resume and showcase your expertise.',
  },
];

export const Grid = ({ pattern, size }) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];

  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]  from-green-100/30 to-green-300/30  opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }) {
  const patternId = useId();
  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y], i) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}-${i}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
