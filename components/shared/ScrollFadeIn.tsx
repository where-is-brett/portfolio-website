import { Variants, motion } from "framer-motion";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import ReactIcon from '@/public/icons/react.svg'
import NextIcon from '@/public/icons/next.svg'
import SanityIcon from '@/public/icons/sanity.svg'
import TailwindIcon from '@/public/icons/tailwind.svg'
import VercelIcon from '@/public/icons/vercel.svg'
import AWSIcon from '@/public/icons/aws.svg'


const introHeaderVariants: Variants = {
    hide: {
        opacity: 0,
        x: -500,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2,
        },
    },
};
const introPictureVariants: Variants = {
    hide: {
        opacity: 0,
        x: 500,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2,
        },
    },
};

interface ContentPayload {
    title: string
    description?: string
    images: StaticImport[]
}

const content = {
    title: 'Ahead of the Curve',
    description: `I swear by the power of Next.js and Sanity CMS to streamline my front-end workflow.
    These tools, coupled with an eye for design, allow me to create visually appealing and highly functional web applications.`,
    images: [ReactIcon, NextIcon, SanityIcon, TailwindIcon]
}

const ScrollFadeIn = (
    // { content }: { content: ContentPayload }
) => {

    return (
        <div className="space-y-12 lg:space-y-0 lg:space-x-16 lg:flex">
            <motion.header
                className='flex gap-x-8 justify-center lg:justify-end w-full'
                initial="hide"
                whileInView="show"
                exit="hide"
                variants={introHeaderVariants}>

                <Image src={ReactIcon} alt="React icon" className="h-12 w-36 md:h-16 md:w-48" />
                <Image src={NextIcon} alt="Next icon" className="h-12 w-36 md:h-16 md:w-48" />
                
            </motion.header>
            <motion.div
                className="flex gap-x-16 justify-center lg:justify-start w-full"
                initial="hide"
                whileInView="show"
                exit="hide"
                variants={introPictureVariants}>

                <Image src={SanityIcon} alt="Sanity icon" className="h-12 w-36 md:h-16 md:w-48" />
                <Image src={VercelIcon} alt="Vercel icon" className="h-12 w-36 md:h-16 md:w-48" />
                
            </motion.div>
        </div>
    )
}

export default ScrollFadeIn