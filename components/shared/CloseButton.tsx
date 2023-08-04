import Image from 'next/image';
import CloseIcon from '@/public/icons/circle-xmark.svg';

interface CloseButtonProps {
  handleClose: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({
  handleClose,
}: CloseButtonProps) => {
  return (
    <button
      type='button'
      onClick={handleClose}
      className='absolute right-4 top-4 z-50 border-0 bg-transparent p-0'
      title='Close menu'
    >
      <Image src={CloseIcon} alt='close icon: x mark' height='30' width='30' />
    </button>
  );
};

export default CloseButton;
