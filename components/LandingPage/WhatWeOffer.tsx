"use client";

import { ArrowRight, ArrowRightCircle, BrainCogIcon, BrainIcon, Calendar1Icon, Mic, MicIcon } from 'lucide-react'
import { Space_Grotesk } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { Calendar } from '../ui/calendar'

import { easeInOut, motion } from 'framer-motion'
import { Button } from '../ui/button';
import Link from 'next/link';

const WhatWeOffer = () => {
    return (
        <section className='w-full  ' id='learnMore'>
            <div className='text-center  text-black relative'>
                <motion.div className='flex rotate-180'>
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "100%" }}>
                        <path d="M0,0 C100,100 200,100 300,0 C400,100 500,100 600,0 C700,100 800,100 900,0 C1000,100 1100,100 1200,0 L1200,120 L0,120 Z" fill="black" />
                    </svg>
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "100%" }}>
                        <path d="M0,0 C100,100 200,100 300,0 C400,100 500,100 600,0 C700,100 800,100 900,0 C1000,100 1100,100 1200,0 L1200,120 L0,120 Z" fill="black" />
                    </svg>
                </motion.div>
                <h1 className='text-[6.5vw] word-spacing-4 z-99 inline text-primary '>What We Offer </h1>
            </div>

            <div className='cards relative  w-full min-h-[80vh] flex items-center justify-center '>
                <div className='flex gap-[13vw] perspective-distant '>

                    <motion.div initial={{ y: 0 }} animate={{ y: [0, 40, 0] }} transition={{ duration: 3, ease: easeInOut, repeat: Infinity }} className='w-[20vw] h-[50vh] flex flex-col space-y-4  bg-linear-to-bl from-primary via-primary/70  -rotate-40  translate-y-10 rounded-lg py-4 px-2 cursor-pointer border border-muted-foreground/20 '>
                        <div className='flex items-center flex-col space-y-3'>
                            <MicIcon color='#7033ff' width={70} height={70} className='bg-secondary/10  rounded-lg  p-2' />
                            <h1 className='font-semibold text-3xl tracking-wider'>Ask Anything</h1>
                        </div>
                        <p className='text-center text-[1.1vw]'>
                            Chat with our AI culinary assistant about any recipe idea, ingredient substitution, or cooking technique. Get instant answers and professional tips for any dish.
                        </p>
                        <div className='flex gap-3 items-center justify-center'>
                            <div className='rounded-lg bg-white/10 p-2 flex gap-2 items-center'><div className='w-1.5 h-1.5 rounded-full bg-primary animate-pulse'></div><h1 className=''>24/7 Availability</h1></div>
                            <div className='rounded-lg bg-white/10 p-2 flex gap-2 items-center'><div className='w-1.5 h-1.5 rounded-full bg-primary animate-pulse'></div><h1 className=''>Instant Recipe Help</h1></div>

                        </div>

                    </motion.div>

                    <motion.div initial={{ y: 0 }} animate={{ y: [0, 40, 0] }} transition={{ duration: 3, ease: easeInOut, repeat: Infinity }} className='w-[20vw] h-[50vh] flex flex-col space-y-4 bg-primary/70  -translate-y-40 rounded-lg py-4 px-2 cursor-pointer border border-muted-foreground/20'>
                        <div className='flex items-center flex-col space-y-3'>
                            <BrainIcon color='#4ac885' width={70} height={70} className='bg-secondary/10  rounded-lg  p-2' />
                            <h1 className='font-semibold text-3xl tracking-wider'>Get Expert Advise</h1>
                        </div>
                        <p className='text-center text-[1.1vw]'>
                            Receive personalized recipe recommendations based on your pantry, dietary needs, and flavor preferences. Our AI provides thousands of tested, high-quality recipe insights.
                        </p>
                        <div className='flex gap-3 items-center justify-center'>
                            <div className='rounded-lg bg-white/10 p-2 flex gap-2 items-center'><div className='w-1.5 h-1.5 rounded-full bg-primary animate-pulse'></div><h1 className=''>AI Powered</h1></div>
                            <div className='rounded-lg bg-white/10 p-2 flex gap-2 items-center'><div className='w-1.5 h-1.5 rounded-full bg-primary animate-pulse'></div><h1 className=''>Personalized Plans</h1></div>

                        </div>
                    </motion.div>

                    <motion.div initial={{ y: 0 }} animate={{ y: [0, 40, 0] }} transition={{ duration: 3, ease: easeInOut, repeat: Infinity }} className='w-[20vw] h-[50vh] flex flex-col space-y-4 bg-linear-to-br from-primary via-primary/70  rotate-40 translate-y-10 rounded-lg py-4 px-2 cursor-pointer border border-muted-foreground/20'>
                        <div className='flex items-center flex-col space-y-3'>
                            <Calendar1Icon color='#fd822b' width={70} height={70} className='bg-secondary/10  rounded-lg  p-2' />
                            <h1 className='font-semibold text-3xl tracking-wider'>Cook And Create</h1>
                        </div>
                        <p className='text-center text-[1.1vw] '>
                            Schedule and save your favorite recipes generated by the chatbot. Track your progress, meal prep effortlessly, and share your culinary successes seamlessly.
                        </p>
                        <div className='flex gap-3 items-center justify-center'>
                            <div className='rounded-lg bg-white/10 p-2 flex gap-2 items-center'><div className='w-1.5 h-1.5 rounded-full bg-primary animate-pulse'></div><h1 className=''>Verified Recipes</h1></div>
                            <div className='rounded-lg bg-white/10 p-2 flex gap-2 items-center'><div className='w-1.5 h-1.5 rounded-full bg-primary animate-pulse'></div><h1 className=''>Seamless Meal Tracking</h1></div>

                        </div>
                    </motion.div>
                </div>
                <div className='flex items-center justify-center absolute top-[90%]'>
                    <Link href={'/#explore'}>
                        <Button className='text-2xl p-1 ' > <ArrowRight color='pink' /> Get Started</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default WhatWeOffer