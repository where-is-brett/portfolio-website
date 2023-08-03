'use client'
import React, { useState, useEffect, useRef } from "react"
import ContactPage from "../pages/contact/ContactPage"
import useMediaQuery from "@/utils/useMediaQuery"
import DesktopNavbar from "./DesktopNavbar"
import MobileNavbar from "./MobileNavbar"


const Navbar = ({ breakpoint }: { breakpoint: number }) => {

    const isSmallScreen = useMediaQuery(breakpoint)
    // Check client-side or server-side
    const [isBrowser, setIsBrowser] = useState(false)

    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setIsBrowser(true)
        // Monitor window size
        const handleResize = () => {
            // Close menu when entering medium viewport
            window.innerWidth >= breakpoint && setIsMenuOpen(false);
        };
        window.addEventListener('resize', handleResize); // Listen for resize events

        // Close menu when clicked outside
        const handleOutsideClick = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false)
            }
        }
        window.addEventListener('click', handleOutsideClick);

        return () => {
            // Clean up event listeners
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [breakpoint]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen)
    };

    const [isContactOpen, setIsContactOpen] = useState(false);
    const handleContactClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault()
        setIsMenuOpen(false)
        setIsContactOpen(true)
    }

    const scrollToTop = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        if (!isBrowser) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    return (
        <div className="font-redtone">
            {isBrowser && isSmallScreen && 
                <MobileNavbar 
                    dropdownRef={dropdownRef}
                    isMenuOpen={isMenuOpen}
                    handleMenuClick={handleMenuClick}
                    setIsContactOpen={setIsContactOpen}
                    handleContactClick={handleContactClick}
                    scrollToTop={scrollToTop}
                />
            }
            {isBrowser && !isSmallScreen && 
                <DesktopNavbar 
                    setIsContactOpen={setIsContactOpen}
                    handleContactClick={handleContactClick}
                    scrollToTop={scrollToTop}
                />
            }
            <ContactPage isOpen={isContactOpen} setIsOpen={setIsContactOpen} />
        </div>
    )
}


export default Navbar;