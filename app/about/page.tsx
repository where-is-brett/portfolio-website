import { Metadata } from 'next';
import Board from '@/components/shared/board/Board';
import { FadeIn, FadeInStagger } from '@/components/shared/FadeIn';
import { services, projects } from '@/data/about';
import Grid from '@/components/shared/grid/Grid';
import { OpacityTransitionImage } from '@/components/shared/OpacityTransitionImage';
import profile from '@/public/images/profile.jpg';
import Balancer from 'react-wrap-balancer';

export const metadata: Metadata = {
  title: 'About',
  description: `Brett builds visually stunning and performant websites. Ready to elevate your online presence? Tap in using the contact form.`,
};

const snapClasses = `lg:h-[100vh] lg:snap-center lg:snap-always`;

const Page = () => {
  return (
    <>
      <div className='space-y-28 text-base lg:text-lg'>
        <div
          className={`flex h-[100vh] w-full flex-col justify-center ${snapClasses}`}
        >
          <FadeInStagger className='space-y-20'>
            <FadeIn transition={{ duration: 1 }}>
              <h1 className='text-center font-bergen text-6xl font-bold uppercase lg:text-8xl'>
                Hello,
              </h1>
            </FadeIn>
            <FadeIn transition={{ duration: 1 }}>
              <h1 className='text-center font-bergen text-6xl font-bold uppercase lg:text-8xl'>{`I'm Brett`}</h1>
            </FadeIn>
          </FadeInStagger>
        </div>

        {/* Profile */}
        <div
          className={`flex h-[100vh] flex-col items-center justify-center gap-16 lg:flex-row lg:px-20 ${snapClasses}`}
        >
          <OpacityTransitionImage
            src={profile}
            alt={"Brett's profile picture"}
            className='z-0 w-[50vw] max-w-[400px] rounded-full border-2 border-border'
          />
          <FadeIn>
            <p className='leading-8'>
              {/* <Balancer ratio={0.7}> */}
                My journey began with the drive to create user-centric
                experiences that bridge the gap between design and
                functionality. I specialise in buidling jamstack websites where
                business logic is decoupled from web experience.
              {/* </Balancer> */}
            </p>
          </FadeIn>
        </div>

        {/* Services */}
        <div className='space-y-12'>
          <FadeIn>
            <div className={`flex items-center justify-center ${snapClasses}`}>
              <h1 className='text-center font-bergen text-6xl font-bold uppercase lg:text-8xl'>
                What I Do
              </h1>
            </div>
          </FadeIn>
          <div className={`flex items-center ${snapClasses}`}>
            <Grid gridItems={services} />
          </div>
        </div>

        {/* Projects */}
        <div className='space-y-12'>
          <FadeIn>
            <div className={`flex items-center justify-center ${snapClasses}`}>
              <h1 className='text-center font-bergen text-6xl font-bold uppercase lg:text-8xl'>
                Selected Work
              </h1>
            </div>
          </FadeIn>

          <FadeIn>
            <div className={`min-h-full lg:snap-start lg:snap-normal`}>
              <Board posts={projects} />
            </div>
          </FadeIn>

          <div className={`lg:snap-start lg:scroll-mb-16`}></div>
        </div>
      </div>
    </>
  );
};

export default Page;
