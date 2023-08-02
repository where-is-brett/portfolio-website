import Image, { ImageProps } from 'next/image';
import ReactIcon from '@/public/icons/react.svg'
import NextIcon from '@/public/icons/next.svg'
import SanityIcon from '@/public/icons/sanity.svg'
import VercelIcon from '@/public/icons/vercel.svg'
import AWSIcon from '@/public/icons/aws.svg'

import { useRef } from 'react';
import {
    motion,
    MotionValue,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from 'framer-motion';

export type WithChildrenProps = {
    children: React.ReactNode;
};


type TestimonialProps = WithChildrenProps & {
    className?: string;
    parallax: MotionValue<number>;
};


function ParallaxContainer({ children, parallax }: TestimonialProps) {
    return (
        <motion.div
            className={'flex items-center justify-center gap-8'}
            style={{ x: parallax }}>
            {children}
        </motion.div>
    );
}

function useParallax(value: MotionValue<number>, start: number, end: number) {
    return useTransform(value, [0, 1], [start, end]);
}

function useReverseParallax(value: MotionValue<number>, start: number, end: number) {
    return useTransform(useParallax(value, start, end), (v) => -v);
}



export function ScrollAnimation() {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });

    const x1 = useParallax(scrollYProgress, -700, 400);
    const x2 = useParallax(scrollYProgress, -700, 400);
    const x3 = useReverseParallax(scrollYProgress, -700, 400);
    const x4 = useReverseParallax(scrollYProgress, -700, 400);


    return (
        <div
            className="h-full w-full flex flex-col items-center justify-center gap-12 lg:p-16"
        >
            <div className="flex items-center justify-between gap-16">
                <ParallaxContainer className="" parallax={x1}>
                    <ImageContainer src={NextIcon} alt="Next.js logo" />
                </ParallaxContainer>
                <ParallaxContainer className="" parallax={x2}>
                    <ImageContainer src={SanityIcon} alt="Sanity logo" />
                </ParallaxContainer>

            </div>
            <div className="flex items-center justify-between gap-16">
                <ParallaxContainer className="" parallax={x3}>
                    <ImageContainer src={AWSIcon} alt="AWS logo" />
                </ParallaxContainer>
                <ParallaxContainer className="" parallax={x4}>
                    <ImageContainer src={VercelIcon} alt="Vercel logo" />
                </ParallaxContainer>
            </div>

        </div>
    );
}

function ImageContainer({ src, alt }: ImageProps) {
    return (

        <div className="w-full">
            <Image src={src} alt={alt} height={40} className="" />
        </div>

    );
}