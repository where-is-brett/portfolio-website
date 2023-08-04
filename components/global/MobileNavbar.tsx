import { Transition } from "@headlessui/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Logo from "@/public/logo/logo.svg"
import Image from "next/image";


interface NavProps {
    dropdownRef: React.RefObject<HTMLDivElement>
    isMenuOpen: boolean
    handleMenuClick: () => void
    setIsContactOpen: React.Dispatch<React.SetStateAction<boolean>>
    handleContactClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
    scrollToTop:(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}


const MobileNavbar = ({ dropdownRef, isMenuOpen, handleMenuClick, setIsContactOpen, handleContactClick, scrollToTop }: NavProps) => {
    const pathname = usePathname();
    return (
        <div ref={dropdownRef} className="z-40">
            <div className="z-30 fixed top-0 left-0 right-0 h-14 border-2 border-primary bg-bg-primary">
                <div className="absolute py-3 left-4 w-full">
                    <Link href="#" onClick={scrollToTop}>
                        <Image src={Logo} alt="logo" height={28} />
                    </Link>
                    
                </div>
                <button type="button" onClick={handleMenuClick} className="bg-transparent border-0 p-0 absolute m-auto right-4 top-2 bottom-2 h-6 w-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <Transition
                show={isMenuOpen}
                enter="transition-transform duration-500"
                enterFrom="transform -translate-y-full"
                enterTo="transform translate-y-[3.5rem]"
                leave="transition-transform duration-500"
                leaveFrom="transform translate-y-0"
                leaveTo="transform -translate-y-[3.5rem]"
                className={'z-20 fixed w-full bg-bg-primary'}
            >
                <div className="flex">
                    <Link href="/about" onClick={() => { setIsContactOpen(false) }} className={`text-primary w-full h-[3rem] leading-[3rem] text-2xl text-center border-2 border-border border-t-0 ${pathname === '/about' && 'bg-bg-secondary'}`}>ABOUT</Link>
                </div>
                <div className="flex">
                    <Link href="#" onClick={handleContactClick} className="text-primary w-full h-[3rem] leading-[3rem] text-2xl text-center border-2 border-border border-t-0 ">CONNECT</Link>
                </div>
            </Transition>
        </div>
    )
}

export default MobileNavbar;