'use client';

import { useRef } from 'react';
import Image from 'next/image';
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion';

const MotionImage = motion(Image);

export function OpacityTransitionImage(props) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 65%', 'end 25%'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const filter = useMotionTemplate`opacity(${opacity})`;

  return (
    <div ref={ref} className='group relative'>
      <MotionImage alt='' style={{ filter }} {...props} />
    </div>
  );
}
