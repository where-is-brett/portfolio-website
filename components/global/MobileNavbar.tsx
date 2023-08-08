import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/public/logo/logo.svg';
import Image from 'next/image';

interface NavProps {
  dropdownRef: React.RefObject<HTMLDivElement>;
  isMenuOpen: boolean;
  handleMenuClick: () => void;
  setIsContactOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleContactClick: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
  scrollToTop: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const MobileNavbar = ({
  dropdownRef,
  isMenuOpen,
  handleMenuClick,
  setIsContactOpen,
  handleContactClick,
  scrollToTop,
}: NavProps) => {
  const pathname = usePathname();
  return (
    <div ref={dropdownRef} className='z-40'>
      <div className='fixed left-0 right-0 top-0 z-30 h-14 border-2 border-primary bg-bg-primary'>
        <div className='absolute left-4 w-full py-3'>
          <Link href='#' onClick={scrollToTop}>
            <Image src={Logo} alt='logo' height={28} draggable={false} />
          </Link>
        </div>
        <button
          title="Dropdown menu"
          type='button'
          onClick={handleMenuClick}
          className='absolute bottom-2 right-4 top-2 m-auto h-6 w-6 border-0 bg-transparent p-0'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </button>
      </div>
      <Transition
        show={isMenuOpen}
        enter='transition-transform duration-500'
        enterFrom='transform -translate-y-full'
        enterTo='transform translate-y-[3.5rem]'
        leave='transition-transform duration-500'
        leaveFrom='transform translate-y-0'
        leaveTo='transform -translate-y-[3.5rem]'
        className={'fixed z-20 w-full bg-bg-primary'}
      >
        <div className='flex'>
          <Link
            href='/about'
            onClick={() => {
              setIsContactOpen(false);
              handleMenuClick();
            }}
            className={`h-[3rem] w-full border-2 border-t-0 border-border text-center text-2xl leading-[3rem] text-primary ${pathname === '/about' && 'bg-bg-secondary'
              }`}
          >
            ABOUT
          </Link>
        </div>
        <div className='flex'>
          <Link
            href='#'
            onClick={handleContactClick}
            className='h-[3rem] w-full border-2 border-t-0 border-border text-center text-2xl leading-[3rem] text-primary '
          >
            CONNECT
          </Link>
        </div>
      </Transition>
    </div>
  );
};

export default MobileNavbar;
