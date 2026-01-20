"use client";
import { GridScan } from '../GridScan';
import { Button } from '../ui/button';
import { ArrowBigDown, ArrowDown } from 'lucide-react';
import { easeIn, easeInOut, motion } from 'framer-motion';
import Link from 'next/link';
import { SignUpButton, useUser } from '@clerk/nextjs';

const HeroSection = () => {
    const { isSignedIn } = useUser();

    return (
        <section >
            <div style={{ width: '100%', height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <GridScan
                    sensitivity={0.55}
                    lineThickness={1}
                    linesColor="#392e4e"
                    gridScale={0.1}
                    scanColor="#7033ff"
                    scanOpacity={0.4}
                    scanGlow={0.5}
                    enablePost
                    bloomIntensity={0.6}
                    chromaticAberration={0.002}
                    noiseIntensity={0.01}

                />
                {/* <div>
                    Hello World
                </div> */}

            </div>

            <div className='inline left-[25%] absolute top-[30%]  px-10  ' >
                <div className='h-0 w-[45vw] rounded-full  px-3 py-1  flex flex-col items-center gap-3 backdrop-blur-lg '>
                    <p className='text-[3vw] text-center'>Welcome to the future of cooking <span className='text-white/40'> guided by AI and real chefs.</span>
                    </p>
                    <div className='flex gap-2'>
                        {isSignedIn ? (
                            <Link href={'/admin/voice'}>
                                <Button variant='destructive' className='text-[1.2vw] ' >Get Recipe</Button>
                            </Link>
                        ) : (
                            <SignUpButton mode='modal'>
                                <Link href={''}>
                                    <Button variant='destructive' className='text-[1.2vw] ' >Get Recipe</Button>
                                </Link>
                            </SignUpButton>
                        )}

                        <Link href={'/#learnMore'}>
                            <Button variant='outline' className='text-[1.2vw]'>Learn More</Button>
                        </Link>
                    </div>
                    <motion.div className='mt-[5vh]' initial={{ y: 0 }} animate={{ y: [0, 15, 0] }} transition={{ ease: easeInOut, duration: 1.6, repeat: Infinity }}>
                        <h1 className='text-center'>Scroll Down and Find Out</h1>
                        <ArrowDown width={200} />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection