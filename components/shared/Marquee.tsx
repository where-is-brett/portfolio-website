'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ImagesPayload {
  images: string;
}

const images = [
  '/icons/react.svg',
  '/icons/next.svg',
  '/icons/sanity.svg',
  '/icons/tailwind.svg',
];

const ImageMarquee = () =>
  // { images }: ImagesPayload
  {
    return (
      <div className='overflow-hidden'>
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: 'linear',
          }}
          className='flex space-x-4'
        >
          {images.map((image: string, index: number) => (
            <Image
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              width={0}
              height={0}
              className='h-32 w-32 '
              draggable={false}
            />
          ))}
        </motion.div>
      </div>
    );
  };

export default ImageMarquee;
