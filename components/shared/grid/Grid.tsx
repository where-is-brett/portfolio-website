'use client';
import { GridItemPayload } from '@/types';
import useMediaQuery from '@/utils/useMediaQuery';
import Image from 'next/image';
import { FadeIn, FadeInStagger } from '../FadeIn';

const Grid = ({ gridItems }: { gridItems: GridItemPayload[] }) => {
  const isSmallScreen = useMediaQuery(1024);

  return (
    <FadeInStagger>
      <div className='grid grid-cols-1 gap-x-14 gap-y-8 lg:grid-cols-2'>
        {gridItems.map((item: GridItemPayload, key: number) => {
          return (
            <FadeIn key={key}>
              {isSmallScreen ? (
                <div className='flex flex-col items-start justify-start gap-8'>
                  <div className='flex items-center gap-4'>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      className='my-0 w-12 flex-shrink-0'
                      draggable={false}
                    />
                    <h2 className='mb-2 font-raleway text-xl font-bold md:text-2xl'>
                      {item.title}
                    </h2>
                  </div>
                  <p className=''>{item.description}</p>
                </div>
              ) : (
                <div className='flex items-start justify-start gap-8'>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    className='my-auto w-16 flex-shrink-0'
                    draggable={false}
                  />
                  <div>
                    <h2 className='mb-2 font-raleway text-xl font-bold md:text-2xl'>
                      {item.title}
                    </h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              )}
            </FadeIn>
          );
        })}
      </div>
    </FadeInStagger>
  );
};

export default Grid;
