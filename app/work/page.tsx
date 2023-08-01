'use client'
import { Balancer } from "react-wrap-balancer";
import Board from "@/components/shared/board/Board";
import AnimatedWords from "@/components/shared/AnimateWords";
import { motion } from "framer-motion";
import { riseWithFade } from "@/utils/animations";

import Image from "next/image";
import ReactIcon from '@/public/icons/react.svg'
import NextIcon from '@/public/icons/next.svg'
import SanityIcon from '@/public/icons/sanity.svg'
import TailwindIcon from '@/public/icons/tailwind.svg'

import { services, projects } from "@/data/about";
import Grid from "@/components/shared/grid/Grid";
import ScrollFadeIn from "@/components/shared/ScrollFadeIn";



const Page = () => {

    return (
        <>
            <div className="p-12 space-y-16">


                    <div className="space-y-8 flex flex-col items-center">
                        <AnimatedWords title="Welcome" titleClasses="uppercase font-bold text-center text-6xl md:text-8xl" />
                        <p className="text-xl md:text-2xl">
                            I'm Brett, a dedicated front-end engineer with a keen eye for detail and a love for all things web.
                            With a firm belief in the power of code to shape the digital landscape,
                            I take pride in crafting beautiful and functional web applications.
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
                        <p className="text-xl md:text-2xl"><Balancer ratio={0.2}>
                            My journey in the world of web began with the drive to create user-centric experiences that bridge the gap between design and functionality.
                            With a background in physics, I bring a unique perspective to problem-solving and crafting intuitive user interfaces.
                            My mission is to leverage cutting-edge technologies to create elegant, scalable web solutions.
                        </Balancer></p>
                    </motion.div>


                    {/* Services */}
                    <div className="space-y-8 flex flex-col items-center">
                        <AnimatedWords title="What I Do" titleClasses="uppercase font-bold text-center text-6xl md:text-8xl" />
                        <Grid gridItems={services} />
                    </div>


                    {/* TECH STACK */}
                    <AnimatedWords title="Ahead of the Curve" titleClasses="uppercase font-bold text-center text-6xl lg:text-7xl" />
                    I swear by the power of Next.js and Tailwind CSS to streamline my front-end workflow. These tools, coupled with an eye for design, allow me to create visually appealing and highly functional web applications.
                    <ScrollFadeIn />



                    {/* Projects */}
                    <Board posts={projects} />

                
            </div>
        </>

    )
}

export default Page;