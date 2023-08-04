// 'use client'
import { Metadata } from 'next'
import Board from "@/components/shared/board/Board"
import { FadeIn, FadeInStagger } from '@/components/shared/FadeIn'
import { services, projects } from "@/data/about"
import Grid from "@/components/shared/grid/Grid"
import { OpacityTransitionImage } from "@/components/shared/OpacityTransitionImage"
import profile from "@/public/images/profile.jpg"
import Balancer from "react-wrap-balancer"

 
export const metadata: Metadata = {
  title: 'About',
  description: `Brett builds visually stunning and performant websites. Ready to elevate your online presence? Tap in using the contact form.`,
}

const snapClasses = `lg:h-[100vh] lg:snap-center lg:snap-always`;

const Page = () => {

    return (
        <>
            <div className="space-y-20 text-base lg:text-lg">

                <div className={`w-full h-[100vh] flex flex-col justify-center ${snapClasses}`}>
                    <FadeInStagger className="space-y-20">
                        <FadeIn transition={{ duration: 1 }}>
                            <h1 className="font-bergen font-bold uppercase text-6xl lg:text-8xl text-center">Hello,</h1>
                        </FadeIn>
                        <FadeIn transition={{ duration: 1 }}>
                            <h1 className="font-bergen font-bold uppercase text-6xl lg:text-8xl text-center">{`I'm Brett`}</h1>
                        </FadeIn>
                    </FadeInStagger>
                </div>

                <div className={`h-[100vh] flex flex-col lg:flex-row justify-center items-center gap-16 lg:px-20 ${snapClasses}`}>
                    <OpacityTransitionImage src={profile} alt={"Brett's profile picture"}
                        className="border-2 border-border rounded-full w-full max-w-[50vw] max-h-[40vh] lg:max-w-[45vw] lg:max-h-[60vh] z-0"
                    />
                    <FadeIn>
                        <p className="leading-8 font-medium">
                            <Balancer ratio={0.7}>
                                My journey began with the drive to create user-centric experiences that bridge the gap between design and functionality.
                                I specialise in buidling jamstack websites where business logic is decoupled from web experience.
                            </Balancer>
                        </p>
                    </FadeIn>
                </div>

                {/* Services */}
                <div className="space-y-12">
                    <FadeIn>
                        <div className={`flex justify-center items-center ${snapClasses}`}>
                            <h1 className="font-bergen font-bold uppercase text-6xl lg:text-8xl text-center">What I Do</h1>
                        </div>
                    </FadeIn>
                    <div className={`flex items-center ${snapClasses}`}  >
                        <Grid gridItems={services} />
                    </div>
                </div>

                {/* Projects */}
                <div className="space-y-12">
                    <FadeIn>
                        <div className={`flex justify-center items-center ${snapClasses}`} >
                            <h1 className="font-bergen font-bold uppercase text-6xl lg:text-8xl text-center">Selected Work</h1>
                        </div>
                    </FadeIn>

                    <FadeIn>
                        <div className={`min-h-full lg:snap-start lg:snap-normal lg:scroll-mb-20`} >
                            <Board posts={projects} />
                        </div>
                    </FadeIn>

                    <div className={`lg:snap-start`} ></div>

                </div>

            </div >
        </>

    )
}

export default Page;