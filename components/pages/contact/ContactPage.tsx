import ContactForm from '@/components/pages/contact/ContactForm';
import { Transition } from '@headlessui/react';
import Socials from './Socials';
import CloseButton from '../../shared/CloseButton';

interface ContactPageProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactPage = ({ isOpen, setIsOpen }: ContactPageProps) => {
  const handleClose = (): void => {
    setIsOpen(false);
  };

  return (
    <Transition
      show={isOpen}
      enter='transition duration-700 ease-out transform'
      enterFrom='translate-y-full'
      enterTo='translate-y-0'
      leave='transition duration-700 ease-out transform'
      leaveFrom='translate-y-0'
      leaveTo='translate-y-full'
      className={`fixed bottom-0 left-0 right-0 top-0 z-40 m-0 h-full w-full overflow-x-hidden overflow-y-scroll bg-bg-primary
            p-0 font-raleway font-[500] lg:flex lg:overflow-hidden lg:border-2 lg:border-border`}
    >
      <CloseButton handleClose={handleClose} />
      <ContactForm />
      <Socials />
    </Transition>
  );
};

export default ContactPage;
