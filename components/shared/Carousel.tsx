'use client'
import React, { useState } from "react"
import { motion, AnimatePresence, PanInfo } from "framer-motion"
import { wrap } from "@popmotion/popcorn"

interface CarouselProps {
    imageURLs: string[];
}
const sliderVariants = {
    incoming: (direction: number) => ({
        x: direction > 0 ? "100%" : "-100%",
        scale: 1.2,
        opacity: 0,
    }),
    active: { x: 0, scale: 1, opacity: 1 },
    exit: (direction: number) => ({
        x: direction > 0 ? "-100%" : "100%",
        scale: 1,
        opacity: 0.2,
    }),
};

const sliderTransition = {
    duration: 1,
    ease: [0.56, 0.03, 0.12, 1.04],
};

const Carousel: React.FC<CarouselProps> = ({ imageURLs }) => {
    const [[imageCount, direction], setImageCount] = useState<[number, number]>([0, 0]);

    const activeImageIndex = wrap(0, imageURLs.length, imageCount);

    const swipeToImage = (swipeDirection: number) => {
        setImageCount([imageCount + swipeDirection, swipeDirection]);
    };

    const dragEndHandler = (dragInfo: PanInfo) => {
        const draggedDistance = dragInfo.offset.x;
        const swipeThreshold = 50;
        if (draggedDistance > swipeThreshold) {
            swipeToImage(-1);
        } else if (draggedDistance < -swipeThreshold) {
            swipeToImage(1);
        }
    };

    return (
        <div className="space-y-4">
            <div className="relative h-96 xl:h-[500px] w-full overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={imageCount}
                        style={{
                            backgroundImage: `url(${imageURLs[activeImageIndex]})`,
                            willChange: `transform, opacity`,
                        }}
                        custom={direction}
                        variants={sliderVariants}
                        initial="incoming"
                        animate="active"
                        exit="exit"
                        transition={sliderTransition}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
                        className="absolute w-full h-full bg-contain bg-no-repeat bg-center hover:cursor-grab active:cursor-grabbing"
                    />
                </AnimatePresence>
            </div>

            <div className="flex gap-4 justify-end">
                <button
                    className="block w-fit h-fit text-primary"
                    onClick={() => swipeToImage(-1)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button
                    className="block w-fit h-fit text-primary"
                    onClick={() => swipeToImage(1)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Carousel;