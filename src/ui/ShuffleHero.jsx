import React, { useState, useEffect, useRef } from 'react';
import { motion as Motion } from 'framer-motion';

const squareData = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwZG9jdG9yfGVufDB8fDB8fHww',
  },
  {
    id: 2,
    src: 'https://plus.unsplash.com/premium_photo-1661964461399-c090141a6c34?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGluZGlhbiUyMGpvYnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1652565437094-ce12e77dcf0e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwb2ZmaWNlJTIwam9ifGVufDB8fDB8fHww',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1659355894117-0ae6f8f28d0b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwb2ZmaWNlJTIwam9ifGVufDB8fDB8fHww',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1642364861013-2c33f2dcfbcf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwb2ZmaWNlJTIwam9ifGVufDB8fDB8fHww',
  },
  {
    id: 6,
    src: 'https://plus.unsplash.com/premium_photo-1681483558416-8429dd57366b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwb2ZmaWNlJTIwam9ifGVufDB8fDB8fHww',
  },
  {
    id: 7,
    src: 'https://plus.unsplash.com/premium_photo-1681074963522-00ca908dce4e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGluZGlhbiUyMG9mZmljZSUyMGpvYnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 8,
    src: 'https://plus.unsplash.com/premium_photo-1676106975756-178b02b65d4c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGluZGlhbiUyMG9mZmljZSUyMGpvYnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 9,
    src: 'https://plus.unsplash.com/premium_photo-1723867284593-efdafa494c31?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwbGF3eWVyfGVufDB8fDB8fHww',
  },
  {
    id: 10,
    src: 'https://plus.unsplash.com/premium_photo-1664478244612-d4b3238abd81?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwbGF3eWVyfGVufDB8fDB8fHww',
  },
  {
    id: 11,
    src: 'https://plus.unsplash.com/premium_photo-1682089949039-131eca5d7285?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGluZGlhbiUyMGxhd3llcnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 12,
    src: 'https://plus.unsplash.com/premium_photo-1677165653237-145cb5db3339?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGluZGlhbiUyMGZlbWFsZSUyMGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 13,
    src: 'https://plus.unsplash.com/premium_photo-1723780922822-8771671c7bd7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGluZGlhbiUyMHdvcmt8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 14,
    src: 'https://plus.unsplash.com/premium_photo-1663047373614-1ca1b13b7334?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhbiUyMGVuZ2luZWVyfGVufDB8fDB8fHww',
  },
  {
    id: 15,
    src: 'https://plus.unsplash.com/premium_photo-1661416506409-e50f71a61bf0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHxpbmRpYW4lMjB3b3JrfGVufDB8fDB8fHww',
  },
  {
    id: 16,
    src: 'https://images.unsplash.com/photo-1648577739099-f1e18f8563f0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGluZGlhbiUyMHN0dWRlbnR8ZW58MHx8MHx8fDA%3D',
  },
];

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <Motion.div
      key={sq.id}
      layout // Key Framer Motion property for shuffling animation
      transition={{ duration: 1.5, type: 'spring' }}
      className="w-full h-full rounded-xl overflow-hidden shadow-md"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></Motion.div>
  ));
};

// Component that handles the shuffling logic
const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    // Declare shuffling function inside effect to avoid stale dependency warnings
    const shuffleSquares = () => {
      setSquares(generateSquares());
      // Schedule the next shuffle
      timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    shuffleSquares();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-3 grid-rows-3 sm:grid-cols-4 sm:grid-rows-4 h-[395px] sm:aspect-square sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px] gap-1 sm:gap-2 md:gap-3 sm:p-2 max-w-[90vw] mx-auto">
      {squares.map((sq) => sq)}{' '}
    </div>
  );
};

// The main hero component structure
const ShuffleHero = () => {
  return (
    <div className="w-full lg:-mt-10 sm:mt-10 max-w-[400px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] 2xl:max-w-[900px] mx-auto px-2 sm:px-4">
      <ShuffleGrid />
    </div>
  );
};

export default ShuffleHero;
