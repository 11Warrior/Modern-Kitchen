"use client"
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const WelcomeSection = () => {
    const { user } = useUser();
    return (
        <div className='w-full h-[30vh] bg-linear-to-br from-primary/90 to-primary/10 rounded-lg p-7'>
            <div className='h-full  flex justify-between'>
                <div className='  flex flex-col space-y-5'>
                    <div className='w-[9vw] h-[3vh] bg-background rounded-full flex gap-3 items-center px-4 outline-2 outline-primary'>
                        <div className='size-2  animate-pulse bg-accent-foreground rounded-full' />
                        <p className='text-white'>
                            Ready & Online
                        </p>
                    </div>
                    <div className='space-y-2 text-white'>
                        <h1 className='text-6xl' >
                            Good {new Date().getHours() < 12
                                ? "Morning"
                                : new Date().getHours() < 18 ?
                                    "Afternoon" : "Evening"
                            }, { user?.fullName}
                        </h1>
                        <p className='text-4xl text-background/50'>Your personal AI Chef assistant ready to help you with your cooking.</p>
                    </div>
                </div>

                <div className=' right flex items-center justify-end'>
                    <div className=' size-46 p-2 rounded-full  flex items-center bg-linear-to-br from-primary/90 to-primary/10 justify-center outline-2 outline-primary'>
                        <Image src={'/logo.png'} height={200} width={200} alt='' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WelcomeSection