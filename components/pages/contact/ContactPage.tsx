import ContactForm from "@/components/pages/contact/ContactForm";
import { Transition } from "@headlessui/react";
import Socials from "./Socials";
import CloseButton from "../../shared/CloseButton";

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
            enter="transition duration-700 ease-out transform"
            enterFrom="translate-y-full"
            enterTo="translate-y-0"
            leave="transition duration-700 ease-out transform"
            leaveFrom="translate-y-0"
            leaveTo="translate-y-full"
            className={'fixed z-50 p-0 m-0 top-0 bottom-0 left-0 right-0 h-full w-full overflow-y-scroll overflow-x-hidden bg-bg-primary md:flex md:overflow-hidden md:border-2 md:border-border'}
        >
            <CloseButton handleClose={handleClose} />
            <ContactForm />
            <Socials />
        </Transition>

    );
};

export default ContactPage;