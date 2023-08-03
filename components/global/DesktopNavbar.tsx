import Link from "next/link"
import { usePathname } from "next/navigation";
import Logo from "@/public/logo.svg"
import Image from "next/image";

interface NavProps {
    setIsContactOpen: React.Dispatch<React.SetStateAction<boolean>>
    handleContactClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
    scrollToTop:(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}



const DesktopNavbar = ({ setIsContactOpen, handleContactClick, scrollToTop }: NavProps) => {


    const pathname = usePathname();
    return (
        <div className="z-50 fixed bottom-0 left-0 right-0 flex p-0 m-0 border-border border-2 rounded-b-1 bg-bg-primary">
            <div className="w-full h-12 flex border-r border-border">
                <Link href="/about" onClick={() => { setIsContactOpen(false) }} className={`text-primary w-full h-[3rem] leading-[3rem] text-center text-2xl ${pathname === '/about' && 'bg-bg-secondary'}`}>ABOUT</Link>
            </div>
            <Link href="#" onClick={scrollToTop} className="w-28 h-12 flex items-center justify-center border-x border-border active:bg-bg-secondary">
                    <Image src={Logo} alt="logo" width={40} />
            </Link>
            <div className="w-full h-12 flex border-l border-border">
                <Link href="" onClick={handleContactClick} className="text-primary w-full h-[3rem] leading-[3rem] text-center text-2xl">CONNECT</Link>
            </div>
        </div>
    )
}

export default DesktopNavbar;