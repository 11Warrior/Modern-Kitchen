"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Calendar, MicIcon } from 'lucide-react'
import { SignIn, SignInButton, SignUpButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'

const TalkWithAI = () => {
  const { isSignedIn } = useUser();

  return (
    <section className='w-full  px-20 py-10 ' id='explore'>

      <h1 className='text-[6vw] '>Start <span className='text-primary'> Exploring</span></h1>
      <div className='w-full flex justify-between items-center'>

        <div className='w-full space-y-14'>
          <div className='space-y-1 leading-10'>
            <div className='flex gap-5 items-center'>
              <h1 className='text-[3vw] text-muted-foreground leading-0 '>
                Start your cooking
              </h1>
              <div className='w-[8vw] h-[8vh] rounded-lg overflow-hidden outline-2 outline-primary'>
                <video src="/cooking.mp4" className='object-center' autoPlay muted loop></video>
              </div>
            </div>
            <div>
              <h1 className='text-[3vw] text-muted-foreground'>journey with <span className='text-primary'>  &#123;  Modern</span> Kitchen &#125;</h1>
            </div>
          </div>

          <p className='text-[2vw] text-muted-foreground pr-15'>Join 1, 500+ clients who trust our AI to get instant cooking guidance and claim it helped them a lot trying out a new recipe for their family.</p>

          <div className='flex gap-2 '>
            {isSignedIn ? (
              <>
                <Link href={'/admin/voice'}>
                  <Button className='text-2xl px-3 py-2 rounded-2xl'> <MicIcon /> Start AI Call</Button>
                </Link>

                <Link href={'/admin/meetings'}>
                  <Button className='text-2xl px-3 py-2 rounded-2xl' variant={'outline'}><Calendar /> Book Appointment</Button>
                </Link>
              </>
            ) :
              <div className='flex gap-2'>
                <SignUpButton mode='modal' >
                  <Button className='text-2xl px-3 py-2 rounded-2xl'> <MicIcon /> Start AI Call</Button>
                </SignUpButton>
                <SignUpButton mode='modal'>
                  <Button className='text-2xl px-3 py-2 rounded-2xl' variant={'outline'}><Calendar /> Book Appointment</Button>
                </SignUpButton>
              </div>
            }
          </div>

        </div>

        <div className='w-[45vw] h-[30vw] overflow-hidden rounded-full bg-linear-to-br from-primary/90 to-primary/10 flex items-center justify-center  outline-2 outline-primary hover:shadow-5xl hover:shadow-amber-400 cursor-pointer mb-25'>
          {isSignedIn  ? (
            <Link href={'/admin/voice'}>
              <Image src={'/logo.png'} alt='logo' width={500} height={500} className='w-full h-full' />
            </Link>
          ) :
            <SignUpButton mode='modal'>
              <Image src={'/logo.png'} alt='logo' width={500} height={500} className='w-full h-full' />
            </SignUpButton>
          }
        </div>
      </div>
    </section>
  )
}

export default TalkWithAI