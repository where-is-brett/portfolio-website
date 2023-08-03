import Image from "next/image";
import Link from "next/link";
import LinkedinIcon from "@/public/icons/linkedin.svg"
import InstagramIcon from "@/public/icons/instagram.svg"
import FacebookIcon from "@/public/icons/facebook.svg"
import GithubIcon from "@/public/icons/github.svg"

const Socials = () => {

    return (
        <div className="flex flex-wrap justify-center items-center border-2 border-border border-t-0 flex-col w-full
            bg-[url('/images/overlay.svg')
            lg:min-w-[48vw] lg:border-0 lg:border-l h-screen"
        >
            <div className="grid grid-rows-2 grid-cols-2 gap-2 text-center py-16 lg:pt-4">
                <Link href="https://github.com/where-is-brett" className="flex flex-col items-center justify-center transition duration-500 ease transform hover:scale-110 ">
                    <Image src={LinkedinIcon} alt="Linkedin logo" className="w-40 h-40 p-4" />
                    {/* <p className="pt-2 text-sm">LINKEDIN</p> */}
                </Link>
                <Link href="https://github.com/where-is-brett" className="flex flex-col items-center justify-center transition duration-500 ease transform hover:scale-110 ">
                    <Image src={GithubIcon} alt="GitHub logo" className="w-40 h-40 p-4" />
                    {/* <p className="pt-2 text-sm">GITHUB</p> */}
                </Link>
                <Link href="https://www.instagram.com/b._.rett/" className="flex flex-col items-center justify-center transition duration-500 ease transform hover:scale-110">
                    <Image src={InstagramIcon} alt="Instagram Logo" className="w-40 h-40 p-4" />
                    {/* <p className="pt-2 text-sm">INSTAGRAM</p> */}
                </Link>
                <Link href="https://www.facebook.com/brettyang17" className="flex flex-col items-center justify-center transition duration-500 ease transform hover:scale-110">
                    <Image src={FacebookIcon} alt="Facebook logo" className="w-40 h-40 p-4" />
                    {/* <p className="pt-2 text-sm">FACEBOOK</p> */}
                </Link>
            </div>
            <div className="block relative bottom-8 top-auto grow-0 lg:absolute lg:bottom-24 font-redtone text-lg">
                COPYRIGHT 2023 © BRETT YANG
            </div>
        </div>
    )
}

export default Socials;