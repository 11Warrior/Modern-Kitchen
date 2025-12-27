import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Calendar, MessageSquareIcon, MicIcon } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

const ActionCards = () => {
    return (
        <div className='flex gap-10'>
            <Card className='w-[50%] py-12 hover:bg-linear-to-br hover:to-primary/60 hover:outline-2 hover:outline-[#7033ff]'>
                <CardHeader className='flex  '>
                    <div className='size-20 bg-linear-to-br to-primary/60 rounded-2xl p-6' >
                        <MicIcon size={"100%"} color='#7033ff' />
                    </div>
                    <div>
                        <h1 className='text-[2.1em]'>AI Voice Assistant</h1>
                        <p className='text-muted-foreground text-[1.3em]'>Get Instant cooking guidance through voice calls.</p>
                    </div>
                </CardHeader>

                <CardContent className='-mt-4 h-full'>
                    <div className='mt-5 w-full h-full space-y-7 text-[1.4em]'>
                        <div className='flex gap-2 items-center'>
                            <div className='size-2 rounded-full bg-primary animate-pulse' />24/7 Availability.
                        </div>

                        <div className='flex gap-2 items-center'>
                            <div className='size-2 rounded-full bg-primary animate-pulse' />Professional level guidance to book appointments with chefs.
                        </div>

                        <div className='flex gap-2 items-center'>
                            <div className='size-2 rounded-full bg-primary animate-pulse' />Instant AI detailed cooking guidance.
                        </div>

                        <Link href={'/admin/voice'}>
                            <Button className='w-full text-3xl p-2 gap-3'>
                                <div className=''>
                                    <MessageSquareIcon width={200} height={200} />

                                </div>
                                <h1 className='text-2xl'>
                                    Start Voice Call
                                </h1>
                            </Button>
                        </Link>

                    </div>
                </CardContent>

            </Card>

            <Card className='w-[50%] py-12  hover:bg-linear-to-br hover:to-primary/60 hover:outline-2 hover:outline-[#7033ff]'>
                <CardHeader className='flex  '>
                    <div className='size-20 bg-linear-to-br to-primary/60 rounded-2xl p-6' >
                        <Calendar size={"100%"} color='#7033ff' />
                    </div>
                    <div>
                        <h1 className='text-[2.1em]'>Book Appointments</h1>
                        <p className='text-muted-foreground text-[1.3em]'>Schedule your appointments with professional chefs.</p>
                    </div>
                </CardHeader>

                <CardContent className='-mt-4 h-full'>


                    <div className='mt-5 w-full h-full space-y-7 text-[1.4em]'>
                        <div className='flex gap-2 items-center'>
                            <div className='size-2 rounded-full bg-primary animate-pulse' />Verified Professionals.
                        </div>

                        <div className='flex gap-2 items-center'>
                            <div className='size-2 rounded-full bg-primary animate-pulse' />Flexible Scheduling.
                        </div>

                        <div className='flex gap-2 items-center'>
                            <div className='size-2 rounded-full bg-primary animate-pulse' />Instant Confirmations.
                        </div>

                        <Link href={'/admin/meetings'}>
                            <Button className='w-full text-3xl p-2 gap-3 bg-muted-foreground/10 hover:bg-muted-foreground/20'>
                                <div className=''>
                                    <Calendar width={200} height={200} />

                                </div>
                                <h1 className='text-2xl'>
                                    Shedule Now
                                </h1>
                            </Button>
                        </Link>
                    </div>
                </CardContent>

            </Card>
        </div>
    )
}

export default ActionCards