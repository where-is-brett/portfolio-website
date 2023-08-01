import Image from "next/image";

const Socials = () => {

    return (
        <div className="flex flex-wrap justify-center items-center border-2 border-border border-t-0 flex-col w-full 
            md:min-w-[48vw] md:border-0 md:border-l"
        >
            <div className="grid grid-rows-2 grid-cols-2 gap-x-1 gap-y-1 text-center py-16 md:pt-4">
                <div className="flex flex-col items-center justify-center w-40 h-40 text-xs transition duration-500 ease transform hover:scale-125 md:w-48 md:h-48">
                    <Image src="/icons/linkedin.svg" alt="Linkedin logo" height="0" width="0" className="w-24 h-24 md:w-32 md:h-32" />
                    <p className="pt-2 text-sm">LINKEDIN</p>
                </div>
                <div className="flex flex-col items-center justify-center w-40 h-40 text-xs transition duration-500 ease transform hover:scale-125 md:w-48 md:h-48">
                    <Image src="/icons/github.svg" alt="GitHub logo" height="0" width="0" className="w-24 h-24 md:w-32 md:h-32" />
                    <p className="pt-2 text-sm">GITHUB</p>
                </div>
                <div className="flex flex-col items-center justify-center w-40 h-40 text-xs transition duration-500 ease transform hover:scale-125 md:w-48 md:h-48">
                    <Image src="/icons/instagram.svg" alt="Instagram Logo" height="0" width="0" className="w-24 h-24 md:w-32 md:h-32" />
                    <p className="pt-2 text-sm">INSTAGRAM</p>
                </div>
                <div className="flex flex-col items-center justify-center w-40 h-40 text-xs transition duration-500 ease transform hover:scale-125 md:w-48 md:h-48">
                    <Image src="/icons/facebook.svg" alt="Facebook logo" height="0" width="0" className="w-24 h-24 md:w-32 md:h-32" />
                    <p className="pt-2 text-sm">FACEBOOK</p>
                </div>
            </div>
            <div className="block relative bottom-8 top-auto grow-0 md:absolute md:bottom-24">
                COPYRIGHT 2023 © ZEYI YANG
            </div>
        </div>
    )
}

export default Socials;