'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import React, { useState, useEffect, useRef } from "react";
import { Transition } from '@headlessui/react';
import ContactPage from "../pages/contact/ContactPage";
import useMediaQuery from "@/utils/useMediaQuery";


const Navbar = ({ breakpoint }: {breakpoint: number}) => {

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        // Monitor window size
        const handleResize = () => {
            // setIsSmallScreen(window.innerWidth < breakpoint);
            // Close menu when entering medium viewport
            window.innerWidth >= breakpoint && setIsMenuOpen(false);
        };
        window.addEventListener('resize', handleResize); // Listen for resize events

        // Close menu when clicked outside
        const handleOutsideClick = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }

        }
        window.addEventListener('click', handleOutsideClick);

        return () => {
            // Clean up event listeners
            // window.removeEventListener('resize', handleResize);
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [breakpoint]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [isContactOpen, setIsContactOpen] = useState(false);
    const handleContactClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        setIsMenuOpen(false);
        setIsContactOpen(true);
    };

    const pathname = usePathname();

    return (
        <>
            {useMediaQuery(breakpoint)
                ?
                <div ref={dropdownRef} className="font-raleway z-40">
                    <div className="z-40 fixed top-0 bottom-auto left-0 right-0 h-14 border-2 border-primary bg-bg-primary">
                        <div className=""></div>
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
                        enterTo="transform translate-y-0"
                        leave="transition-transform duration-500"
                        leaveFrom="transform translate-y-0"
                        leaveTo="transform -translate-y-full"
                        className={'z-30 fixed w-full bg-bg-primary'}
                    >
                        <div className="flex">
                            <Link href="/about" onClick={() => { setIsContactOpen(false) }} className={`text-primary w-full h-[3rem] leading-[3rem] text-2xl font-[500] text-center border-2 border-border border-t-0 ${pathname === '/about' && 'bg-bg-secondary'}`}>ABOUT</Link>
                        </div>
                        <div className="flex">
                            <Link href="#" onClick={handleContactClick} className="text-primary w-full h-[3rem] leading-[3rem] text-2xl font-[500] text-center border-2 border-border border-t-0 ">CONNECT</Link>
                        </div>
                    </Transition>
                </div>
                :
                <>
                    <div className="fixed bottom-0 left-0 right-0 z-40 flex p-0 m-0  border-border border-2 rounded-b-1 bg-bg-primary font-raleway">
                        <div className="w-full h-12 flex border-r border-border">
                            <Link href="/about" onClick={() => { setIsContactOpen(false) }} className={`text-primary w-full h-[3rem] leading-[3rem] text-center text-2xl font-[500] ${pathname === '/about' && 'bg-bg-secondary'}`}>ABOUT</Link>
                        </div>
                        {/* <div className="w-32 h-12 flex">
                            <Link href="/" className="text-primary w-full h-[3rem] leading-[3rem] text-center text-2xl border-x-2 border-border">
                                <Image src="/topography.svg" alt="Zeyi Yang" width={0} height={0} layout="responsive"/>
                            </Link>
                        </div> */}
                        <div className="w-full h-12 flex border-l border-border">
                            <Link href="#" onClick={handleContactClick} className="text-primary w-full h-[3rem] leading-[3rem] text-center text-2xl font-[500]">CONNECT</Link>
                        </div>
                    </div>
                </>
            }
            <ContactPage isOpen={isContactOpen} setIsOpen={setIsContactOpen} />
        </>
    )
}


export default Navbar;