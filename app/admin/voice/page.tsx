import FeatureLocked from '@/components/ProPage/FeatureLocked';
import CallWidget from '@/components/VoicePage/CallWidget';
import Navbar from '@/components/Navbar/Navbar'
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { auth } from '@clerk/nextjs/server'
import { Calendar, MicIcon, Shield } from 'lucide-react';
import React from 'react'

const Voice = async () => {
  const { has } = await auth();

  const proPlans = has({ plan: 'ai_basic' }) || has({ plan: 'ai_pro' });
  if (!proPlans) return <FeatureLocked />


  // console.log(user)

  return (
      <>
        <Navbar />
        <section className='min-h-screen px-20 py-10 space-y-10'>
          <div className='w-full h-[30vh] bg-linear-to-br from-primary/90 to-primary/10 rounded-lg p-7'>
            <div className='h-full  flex justify-between'>
              <div className='  flex flex-col space-y-5'>
                <div className='w-[9vw] h-[3vh] bg-background rounded-full flex gap-3 items-center px-4'>
                  <div className='size-2  animate-pulse bg-accent-foreground rounded-full' />
                  <p className='text-white'>AI Chef Ready</p>
                </div>
                <div className='space-y-2 text-white'>
                  <h1 className='text-6xl' >AI Chef Assistance</h1>
                  <p className='text-4xl text-background/50'>Talk to our AI Chef assistance using natural voice commands. Get instant guidance.</p>
                </div>
              </div>

              <div className=' right flex items-center justify-end'>
                <div className=' size-46 p-8 rounded-full  flex items-center bg-primary/40  justify-center border border-black'>
                  <MicIcon size={"100%"} color='#7033ff' />
                </div>
              </div>

            </div>
          </div>

          <div className='flex gap-10'>

            <Card className='w-[50%] h-[50vh]  hover:bg-linear-to-br hover:to-primary/60 hover:outline-2 hover:outline-[#7033ff]'>
              <CardHeader className='flex items-center '>
                <div className='size-11 bg-linear-to-br to-primary/60 rounded-2xl p-2' >
                  <MicIcon size={"100%"} color='#7033ff' />
                </div>
                <h1 className='text-[2.1em]'>How To Use</h1>
              </CardHeader>

              <CardContent className='-mt-4 h-full'>
                <p className='text-muted-foreground text-[1.3em]'>Simple steps to get started with voice assistance.</p>

                <div className='mt-5 w-full h-full space-y-7 text-[1.4em]'>
                  <div className='flex gap-2 items-center'>
                    <div className='size-2 rounded-full bg-primary animate-pulse' />Click on microphone icon to start talking to AI assistant.
                  </div>

                  <div className='flex gap-2 items-center'>
                    <div className='size-2 rounded-full bg-primary animate-pulse' />Ask about the recipe you are planning to prepare.
                  </div>

                  <div className='flex gap-2 items-center'>
                    <div className='size-2 rounded-full bg-primary animate-pulse' />Get instant voice response from AI.
                  </div>

                  <div className='flex gap-2 items-center'>
                    <div className='size-2 rounded-full bg-primary animate-pulse' />View conversation transcript in real-time.
                  </div>

                </div>
              </CardContent>

            </Card>

            <Card className='w-[50%] h-[50vh] hover:bg-linear-to-br hover:to-primary/60 hover:outline-2 hover:outline-[#7033ff]'>
              <CardHeader className='flex items-center '>
                <div className='size-11 bg-linear-to-br to-primary/60 rounded-2xl p-2' >
                  <Shield size={"100%"} color='#7033ff' />
                </div>
                <h1 className='text-[2.1em]'>Features</h1>
              </CardHeader>

              <CardContent className='-mt-4 h-full'>
                <p className='text-muted-foreground text-[1.3em]'>Advanced capabilities for cooking guidance.</p>

                <div className='mt-5 w-full h-full space-y-7 text-[1.4em]'>

                  <div className='flex gap-2 items-center'>
                    <div className='size-7 rounded-[9px] p-1 bg-linear-to-br to-primary/60 '>
                      <MicIcon size={"100%"} color='#7033ff' />
                    </div>
                    Real-time voice recognition.
                  </div>

                  <div className='flex gap-2 items-center'>
                    <div className='size-7 rounded-[9px] p-1 bg-linear-to-br to-primary/60 '>
                      <Shield size={"100%"} color='#7033ff' />
                    </div>
                    AI powered response.
                  </div>

                  <div className='flex gap-2 items-center'>
                    <div className='size-7 rounded-[9px] p-1 bg-linear-to-br to-primary/60 '>
                      <Calendar size={"100%"} color='#7033ff' />
                    </div>
                    Conversation history.
                  </div>
                </div>
              </CardContent>
            </Card>
            
          </div>

          <CallWidget />

        </section>
      </>
    )
}

export default Voice