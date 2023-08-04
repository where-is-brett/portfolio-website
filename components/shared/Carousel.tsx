'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import Image from 'next/image';

interface CarouselProps {
  imageURLs: string[];
}
const sliderVariants = {
  incoming: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    scale: 1,
    opacity: 0.2,
  }),
};

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

const Carousel: React.FC<CarouselProps> = ({ imageURLs }) => {
  const [[imageCount, direction], setImageCount] = useState<[number, number]>([
    0, 0,
  ]);

  const activeImageIndex = wrap(0, imageURLs.length, imageCount);

  const swipeToImage = (swipeDirection: number) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (dragInfo: PanInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 30;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  return (
    <div className='z-0 space-y-4'>
      <div className='relative z-0 w-full overflow-hidden h-[512px]'>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={imageCount}
            custom={direction}
            variants={sliderVariants}
            initial='incoming'
            animate='active'
            exit='exit'
            transition={sliderTransition}
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
            className='absolute h-full w-full hover:cursor-grab active:cursor-grabbing flex items-center justify-center'
          >
            <Image 
              src={imageURLs[activeImageIndex]} 
              alt={`Carousel image item ${activeImageIndex}`} 
              width={625}
              height={512}
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className='flex justify-end gap-4'>
        <button
          className='block h-fit w-fit text-primary'
          onClick={() => swipeToImage(-1)}
          title='Swipe left'
        >
          <svg 
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2.5}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5'
            />
          </svg>
        </button>
        <button
          className='block h-fit w-fit text-primary'
          onClick={() => swipeToImage(1)}
          title='Swipe right'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2.5}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
