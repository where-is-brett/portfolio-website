'use client'
import { Balancer } from "react-wrap-balancer";
import Board from "@/components/shared/board/Board";
import AnimatedWords from "@/components/shared/AnimateWords";
import { motion } from "framer-motion";
import { riseWithFade } from "@/utils/animations";

import { services, projects } from "@/data/about";
import Grid from "@/components/shared/grid/Grid";
import ScrollFadeIn from "@/components/shared/ScrollFadeIn";



const Page = () => {

    return (
        <>
            <div className="space-y-16 text-base md:text-xl lg:text-2xl">


                <div className="space-y-8 flex flex-col items-center">
                    <AnimatedWords title="Welcome" titleClasses="uppercase font-bold text-5xl md:text-7xl lg:text-8xl" />
                    <p className="">
                        {`I'm Brett, a dedicated front-end engineer with a keen eye for detail and a love for all things web.
                        With a firm belief in the power of code to shape the digital landscape,
                        I take pride in crafting beautiful and functional web applications.`}
                    </p>
                </div>




                {/* Introduction */}
                <motion.div
                    className="space-y-8"
                    initial="hide"
                    whileInView="show"
                    exit="hide"
                    animate="animate"
                    variants={riseWithFade}
                >
                    <p className=""><Balancer ratio={0.2}>
                        My journey in the world of web began with the drive to create user-centric experiences that bridge the gap between design and functionality.
                        With a background in physics, I bring a unique perspective to problem-solving and crafting intuitive user interfaces.
                        My mission is to leverage cutting-edge technologies to create elegant, scalable web solutions.
                    </Balancer></p>
                </motion.div>


                {/* Services */}
                <div className="space-y-10 flex flex-col items-center">
                    <AnimatedWords title="What I Do" titleClasses="uppercase font-bold text-5xl md:text-7xl lg:text-8xl" />
                    <Grid gridItems={services} />
                </div>


                {/* TECH STACK */}
                <div className="space-y-10 flex flex-col items-center">
                    <AnimatedWords title="Ahead of the Curve" titleClasses="uppercase font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl" />
                    <p>I swear by the power of Next.js and Tailwind CSS to streamline my front-end workflow. These tools, coupled with an eye for design, allow me to create visually appealing and highly functional web applications.</p>
                    <ScrollFadeIn />
                </div>


                {/* Projects */}
                <div className="space-y-10 flex flex-col items-center">
                    <AnimatedWords title="Selected Projects" titleClasses="uppercase font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl" />
                    <Board posts={projects} />
                </div>

            </div>
        </>

    )
}

export default Page;