"use client"
import React, { useEffect } from 'react'
import { delay, motion } from 'framer-motion';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Testimonials = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const scrollHt = window.innerHeight * 3;
        const cards = document.querySelectorAll(".card");
        const contents = document.querySelectorAll(".content");
    
        ScrollTrigger.create({
            trigger: ".horizontal-section",
            start: "top top",
            end: `+=${scrollHt}`,
            pin: true,
            pinSpacing: true,
    
            onUpdate: (self) => {
                const progress = self.progress;
    
                cards.forEach((card, index) => {
                    const delay = index * 0.1326;
                    const cardProgress = Math.max(0, Math.min((progress - delay) * 2, 1));
    
                    if (cardProgress > 0) {
                        const startX = 50;
                        const endX = -1000;
    
                        const currX = gsap.utils.interpolate(startX, endX, cardProgress);
                        
                        gsap.set(card, {xPercent : currX, opacity: 1});
                    }else{
                        gsap.set(card, {opacity: 0})
                    }
                })

                contents.forEach((content, item) => {
                    const progress = self.progress;
                    const delay = 0.1223;

                    const cardProgress = Math.max(0, Math.min((progress - delay) * 2, 1));

                    if (cardProgress > 0) {

                    }
                })
            }
        })
    }, [])


    return (
        <section className='w-full min-h-screen bg-[#FFDCDC] horizontal-section overflow-hidden'>
            <motion.div className='flex rotate-180'>
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "100%" }}>
                    <path d="M0,0 C100,100 200,100 300,0 C400,100 500,100 600,0 C700,100 800,100 900,0 C1000,100 1100,100 1200,0 L1200,120 L0,120 Z" fill="#CFCEFF" />

                </svg>
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "100%" }}>
                    <path d="M0,0 C100,100 200,100 300,0 C400,100 500,100 600,0 C700,100 800,100 900,0 C1000,100 1100,100 1200,0 L1200,120 L0,120 Z" fill="#CFCEFF" />
                </svg>
            </motion.div>
            <h1 className='text-[8vw] text-black/60'>Hear Our Family</h1>

            <div className='testimonials '>
                <svg
                    className="ribbon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 990 100"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,10 Q200,0 500,30 T1000,10"
                        fill="none"
                        stroke="#fdc900"
                        strokeWidth="3"
                        strokeLinecap="square"
                        vectorEffect="scaling-stroke"
                    >
                        <animate
                            attributeName='stroke-dasharray'
                            values='0, 1000; 1000, 0'
                            dur='4'
                            repeatCount='definite'
                        />

                    </path>
                </svg>

                <section className=' w-full h-full relative'>
                    <div className='cards w-[200vw] flex gap-[10vw] px-10 whitespace-wrap relative'>
                        <div className='card w-[15vw] h-[40vh] bg-red-500 shrink-0 rounded-lg overflow-hidden  '>
                            <div className="pin flex items-center justify-center pt-[4vh]"><div className=' w-4 h-4 rounded-full bg-yellow-300 flex items-center justify-center'></div></div>
                            <div className='content mt-[7vh] p-3  w-full h-full   bg-white/90 rounded-lg'>
                                <div className='w-10 h-10 rounded-full bg-white/9 flex gap-2 border  items-center   border-black'>
                                    <Image objectFit='cover' objectPosition='center' width='100' height='100' src={'/logo.png'} alt='Profile-Image' />
                                    <h3 className='text-gray-500/80'>@ModernKitchen</h3>
                                </div>
                                <div className='overflow-hidden text-black' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, asperiores consectetur laboriosam quas repellat sapiente officia ducimus eos hic non numquam voluptas nemo, dolorum, sunt itaque nulla aliquid? Expedita, praesentium.</div>
                            </div>
                        </div>

                        <div className='card w-[15vw] h-[40vh] bg-red-500 shrink-0 rounded-lg overflow-hidden '>
                            <div className="pin flex items-center justify-center pt-[4vh]"><div className=' w-4 h-4 rounded-full bg-yellow-300 flex items-center justify-center'></div></div>
                            <div className='content mt-[7vh] p-3  w-full h-full   bg-white/90 rounded-lg'>
                                <div className=' w-10 h-10 rounded-full bg-white/9 flex gap-2 border  items-center   border-black'>
                                    <Image objectFit='cover' objectPosition='center' width='100' height='100' src={'/logo.png'} alt='Profile-Image' />
                                    <h3 className='text-gray-500/80'>@ModernKitchen</h3>
                                </div>
                                <div className='overflow-hidden text-black' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, asperiores consectetur laboriosam quas repellat sapiente officia ducimus eos hic non numquam voluptas nemo, dolorum, sunt itaque nulla aliquid? Expedita, praesentium.</div>
                            </div>
                        </div>

                        <div className='card w-[15vw] h-[40vh] bg-red-500 shrink-0 rounded-lg overflow-hidden '>
                            <div className="pin flex items-center justify-center pt-[4vh]"><div className=' w-4 h-4 rounded-full bg-yellow-300 flex items-center justify-center'></div></div>
                            <div className='content mt-[7vh] p-3  w-full h-full   bg-white/90 rounded-lg'>
                                <div className='w-10 h-10 rounded-full bg-white/9 flex gap-2 border  items-center   border-black'>
                                    <Image objectFit='cover' objectPosition='center' width='100' height='100' src={'/logo.png'} alt='Profile-Image' />
                                    <h3 className='text-gray-500/80'>@ModernKitchen</h3>
                                </div>
                                <div className='overflow-hidden text-black' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, asperiores consectetur laboriosam quas repellat sapiente officia ducimus eos hic non numquam voluptas nemo, dolorum, sunt itaque nulla aliquid? Expedita, praesentium.</div>
                            </div>
                        </div>

                        <div className='card w-[15vw] h-[40vh] bg-red-500 shrink-0 rounded-lg overflow-hidden '>
                            <div className="pin flex items-center justify-center pt-[4vh]"><div className=' w-4 h-4 rounded-full bg-yellow-300 flex items-center justify-center'></div></div>
                            <div className='content mt-[7vh] p-3  w-full h-full   bg-white/90 rounded-lg'>
                                <div className='w-10 h-10 rounded-full bg-white/9 flex gap-2 border  items-center   border-black'>
                                    <Image objectFit='cover' objectPosition='center' width='100' height='100' src={'/logo.png'} alt='Profile-Image' />
                                    <h3 className='text-gray-500/80'>@ModernKitchen</h3>
                                </div>
                                <div className='overflow-hidden text-black' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, asperiores consectetur laboriosam quas repellat sapiente officia ducimus eos hic non numquam voluptas nemo, dolorum, sunt itaque nulla aliquid? Expedita, praesentium.</div>
                            </div>
                        </div>

                        <div className='card w-[15vw] h-[40vh] bg-red-500 shrink-0 rounded-lg overflow-hidden '>
                            <div className="pin flex items-center justify-center pt-[4vh]"><div className=' w-4 h-4 rounded-full bg-yellow-300 flex items-center justify-center'></div></div>
                            <div className='content mt-[7vh] p-3  w-full h-full   bg-white/90 rounded-lg'>
                                <div className='w-10 h-10 rounded-full bg-white/9 flex gap-2 border  items-center   border-black'>
                                    <Image objectFit='cover' objectPosition='center' width='100' height='100' src={'/logo.png'} alt='Profile-Image' />
                                    <h3 className='text-gray-500/80'>@ModernKitchen</h3>
                                </div>
                                <div className='overflow-hidden text-black' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, asperiores consectetur laboriosam quas repellat sapiente officia ducimus eos hic non numquam voluptas nemo, dolorum, sunt itaque nulla aliquid? Expedita, praesentium.</div>
                            </div>
                        </div>

                        <div className='card w-[15vw] h-[40vh] bg-red-500 shrink-0 rounded-lg overflow-hidden '>
                            <div className="pin flex items-center justify-center pt-[4vh]"><div className=' w-4 h-4 rounded-full bg-yellow-300 flex items-center justify-center'></div></div>
                            <div className='content mt-[7vh] p-3  w-full h-full   bg-white/90 rounded-lg'>
                                <div className='w-10 h-10 rounded-full bg-white/9 flex gap-2 border  items-center   border-black'>
                                    <Image objectFit='cover' objectPosition='center' width='100' height='100' src={'/logo.png'} alt='Profile-Image' />
                                    <h3 className='text-gray-500/80'>@ModernKitchen</h3>
                                </div>
                                <div className='overflow-hidden text-black' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, asperiores consectetur laboriosam quas repellat sapiente officia ducimus eos hic non numquam voluptas nemo, dolorum, sunt itaque nulla aliquid? Expedita, praesentium.</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


        </section>
    )
}

export default Testimonials