import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const squareData = [
  {
    id: 1,
    src: 'https://plus.unsplash.com/premium_photo-1661765192121-f398fd1e8fa2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SVR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1581092918484-8313ada2183a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHNvZnR3YXJlJTIwZW5naW5lZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1580894895938-bd31a62ed8ba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHNvZnR3YXJlJTIwZW5naW5lZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900',
  },
  {
    id: 4,
    src: 'https://plus.unsplash.com/premium_photo-1663013333799-4df1b15f605e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVzaWduZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900',
  },
  {
    id: 5,
    src: 'https://plus.unsplash.com/premium_photo-1661695498472-3ab2d503c776?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlmZmVyZW50JTIwam9ic3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900',
  },
  {
    id: 6,
    src: 'https://plus.unsplash.com/premium_photo-1731617405869-16d6c14b969f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhdGhjYXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900',
  },
  {
    id: 7,
    src: 'https://plus.unsplash.com/premium_photo-1661942126259-fb08e7cce1e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1660794486044-ff1072c442f9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHB1YmxpYyUyMHNwZWFrZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1557804506-e969d7b32a4b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHB1YmxpYyUyMHNwZWFrZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900',
  },
  {
    id: 10,
    src: 'https://plus.unsplash.com/premium_photo-1661962333436-016953dbf74e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHNwb3J0c21hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1637249876871-b1a93c13ed1e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHZpZGVvJTIwZWRpdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900',
  },
  {
    id: 12,
    src: 'https://plus.unsplash.com/premium_photo-1681074651819-e3a6ef2783b3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG11c2ljaWFuJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900',
  },
  {
    id: 13,
    src: 'https://plus.unsplash.com/premium_photo-1674815482030-ffbd0492eb5a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0aXN0JTIwaW5kaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900',
  },
  {
    id: 14,
    src: 'https://images.unsplash.com/photo-1742203103007-8b79bdede0f8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGVtcGxveWVlJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900',
  },
  {
    id: 15,
    src: 'https://plus.unsplash.com/premium_photo-1682089468743-5a31e96f8dd3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHNhbGVzbWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900',
  },
  {
    id: 16,
    src: 'https://plus.unsplash.com/premium_photo-1664478244612-d4b3238abd81?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxlbXBsb3llZSUyMGluZGlhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900',
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
    <motion.div
      key={sq.id}
      layout // Key Framer Motion property for shuffling animation
      transition={{ duration: 1.5, type: 'spring' }}
      className="w-full h-full rounded-xl overflow-hidden shadow-md"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></motion.div>
  ));
};

// Component that handles the shuffling logic
const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());
    // Schedule the next shuffle
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-3 sm:grid-cols-4 sm:grid-rows-4 h-[300px] sm:aspect-square sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px] gap-1 sm:gap-2 md:gap-3 p-1 sm:p-2 max-w-[90vw] mx-auto">
      {squares.map((sq) => sq)}{' '}
    </div>
  );
};

// The main hero component structure
const ShuffleHero = () => {
  return (
    <div className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] 2xl:max-w-[900px] mx-auto px-2 sm:px-4">
      <ShuffleGrid />
    </div>
  );
};

export default ShuffleHero;
