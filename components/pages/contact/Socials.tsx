import Image from 'next/image';
import LinkedinIcon from '@/public/icons/linkedin.svg';
import InstagramIcon from '@/public/icons/instagram.svg';
import FacebookIcon from '@/public/icons/facebook.svg';
import GithubIcon from '@/public/icons/github.svg';

const Socials = () => {
  return (
    <div
      className="bg-[url('/images/overlay.svg') flex h-screen w-full flex-col flex-wrap items-center justify-center border-2
            border-t-0
            border-border lg:min-w-[48vw] lg:border-0 lg:border-l"
    >
      <div className='grid grid-cols-2 grid-rows-2 gap-2 py-16 text-center lg:pt-4'>
        <a
          href='https://www.linkedin.com/in/brettyang/'
          className='ease flex transform flex-col items-center justify-center transition duration-500 hover:scale-110'
          target='_blank'
          rel='noreferrer'
        >
          <Image
            src={LinkedinIcon}
            alt='Linkedin logo'
            className='h-40 w-40 p-4'
          />
        </a>
        <a
          href='https://github.com/where-is-brett'
          className='ease flex transform flex-col items-center justify-center transition duration-500 hover:scale-110 '
          target='_blank'
          rel='noreferrer'
        >
          <Image src={GithubIcon} alt='GitHub logo' className='h-40 w-40 p-4' />
        </a>
        <a
          href='https://www.instagram.com/b._.rett/'
          className='ease flex transform flex-col items-center justify-center transition duration-500 hover:scale-110'
          target='_blank'
          rel='noreferrer'
        >
          <Image
            src={InstagramIcon}
            alt='Instagram Logo'
            className='h-40 w-40 p-4'
          />
        </a>
        <a
          href='https://www.facebook.com/brettyang17'
          className='ease flex transform flex-col items-center justify-center transition duration-500 hover:scale-110'
          target='_blank'
          rel='noreferrer'
        >
          <Image
            src={FacebookIcon}
            alt='Facebook logo'
            className='h-40 w-40 p-4'
          />
        </a>
      </div>
      <div className='relative bottom-8 top-auto block grow-0 font-redtone text-lg lg:absolute lg:bottom-24'>
        COPYRIGHT 2023 © BRETT YANG
      </div>
    </div>
  );
};

export default Socials;
