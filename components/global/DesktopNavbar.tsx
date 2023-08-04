import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/public/logo/logo.svg';
import Image from 'next/image';

interface NavProps {
  setIsContactOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleContactClick: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
  scrollToTop: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const DesktopNavbar = ({
  setIsContactOpen,
  handleContactClick,
  scrollToTop,
}: NavProps) => {
  const pathname = usePathname();
  return (
    <div className='rounded-b-1 fixed bottom-0 left-0 right-0 z-50 m-0 flex border-2 border-border bg-bg-primary p-0'>
      <div className='flex h-12 w-full border-r border-border'>
        <Link
          href='/about'
          onClick={() => {
            setIsContactOpen(false);
          }}
          className={`h-[3rem] w-full text-center text-2xl leading-[3rem] text-primary ${
            pathname === '/about' && 'bg-bg-secondary'
          }`}
        >
          ABOUT
        </Link>
      </div>
      <Link
        href='#'
        onClick={scrollToTop}
        className='flex h-12 w-28 items-center justify-center border-x border-border active:bg-bg-secondary'
      >
        <Image src={Logo} alt='logo' width={40} draggable={false} />
      </Link>
      <div className='flex h-12 w-full border-l border-border'>
        <Link
          href='#'
          onClick={handleContactClick}
          className='h-[3rem] w-full text-center text-2xl leading-[3rem] text-primary'
        >
          CONNECT
        </Link>
      </div>
    </div>
  );
};

export default DesktopNavbar;
