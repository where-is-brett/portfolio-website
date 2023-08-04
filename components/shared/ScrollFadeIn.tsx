import { Variants, motion } from 'framer-motion';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import ReactIcon from '@/public/icons/react.svg';
import NextIcon from '@/public/icons/next.svg';
import SanityIcon from '@/public/icons/sanity.svg';
import TailwindIcon from '@/public/icons/tailwind.svg';
import VercelIcon from '@/public/icons/vercel.svg';
import AWSIcon from '@/public/icons/aws.svg';

const introHeaderVariants: Variants = {
  hide: {
    opacity: 0,
    x: -500,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};
const introPictureVariants: Variants = {
  hide: {
    opacity: 0,
    x: 500,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

const ScrollFadeIn = () =>
  // { content }: { content: ContentPayload }
  {
    return (
      <div className='mx-0 flex w-screen space-x-16 space-y-0 px-0'>
        <motion.div
          className='flex w-full justify-end gap-x-10'
          initial='hide'
          whileInView='show'
          exit='hide'
          variants={introHeaderVariants}
        >
          <Image src={SanityIcon} alt='Sanity icon' className='h-16 w-48' />
          <Image src={NextIcon} alt='Next icon' className='h-16 w-48' />
        </motion.div>
        <motion.div
          className='flex w-full justify-start gap-x-8'
          initial='hide'
          whileInView='show'
          exit='hide'
          variants={introPictureVariants}
        >
          <Image src={VercelIcon} alt='Vercel icon' className='h-16 w-48' />
          <Image src={AWSIcon} alt='AWS icon' className='h-16 w-48' />
        </motion.div>
      </div>
    );
  };

export default ScrollFadeIn;
