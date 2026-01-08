"use client"

import React, { useEffect } from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Brain, Calendar, Clock, MessageSquareIcon, UserIcon } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useUser } from '@clerk/nextjs'
import { useGetMeetingStats, useGetUserMeeting } from '@/hooks/use-meetings'

const AppointmentsStats = () => {
    const { user } = useUser();
    // console.log(user);
    const memberSince = user?.createdAt?.toString().split(' ');
    // console.log(memberSince)
    if (!user) {
        return null;
    }
    const { data: meetingStats, isFetchedAfterMount: statsFetched } = useGetMeetingStats(user?.id);
    // console.log(meetingStats);

    const { data: userMeetings, isFetchedAfterMount: userMeetingsFetched } = useGetUserMeeting(user?.id);

    const nextMeetings = userMeetings?.filter((meeting) => {
        const currentDateTime = new Date();
        const upcommingMeetingDateTime = new Date(meeting.date);
        // console.log(upcommingMeetingDateTime);
        return upcommingMeetingDateTime >= currentDateTime && meeting.status === "CONFIRMED";
    });

    let rightNextMeeting = nextMeetings?.[0]

    {/**UI LOGIC NEEDS TO BE CHANGED  LATER = CHEF NAME, LOCAL TIME AND STUFF*/ }
    return (
        <section>
            {(statsFetched && userMeetingsFetched) && (
                <div className='flex gap-10'>
                    <Card className='w-[80%] hover:bg-linear-to-br hover:to-primary/60 hover:outline-2 hover:outline-[#7033ff]'>
                        <CardHeader>
                            <div className='flex gap-2 items-center'>
                                <div className='size-9'>
                                    <Brain className='w-full h-full text-primary' />
                                </div>
                                <h1 className='text-3xl'>Your Appointment Status</h1>
                            </div>
                            <h2 className='text-2xl text-muted-foreground'>Keep track of your appointment status.</h2>
                        </CardHeader>

                        <CardContent className='space-y-8'>
                            <div className='flex gap-3 justify-between'>
                                <Card className='flex flex-col gap-1 items-center justify-center  w-[30%] h-[20vh]'>
                                    <h1 className='text-4xl text-primary'>
                                        {meetingStats?.completedMeetings}
                                    </h1>
                                    <p className='text-muted-foreground text-2xl'>Completed Appointments</p>
                                </Card>
                                <Card className='flex flex-col gap-1 items-center justify-center  w-[30%] h-[20vh]'>
                                    <h1 className='text-4xl text-primary'>{meetingStats?.totalMeetings}</h1>
                                    <p className='text-muted-foreground text-2xl'>Total Appointments</p>
                                </Card>
                                <Card className='flex flex-col gap-1 items-center justify-center  w-[30%] h-[20vh]'>
                                    <h1 className='text-4xl text-primary'>
                                        {memberSince?.[1]} {memberSince?.[2]}, {memberSince?.[3]}
                                    </h1>
                                    <p className='text-muted-foreground text-2xl'>Member Since</p>
                                </Card>
                            </div>

                            <Card className='bg-linear-to-r from-primary/50 via-primary/10 to-primary/5 h-[30vh]'>
                                <CardHeader className=' flex gap-2 '>
                                    <div className='size-15 p-4 bg-linear-to-br from-primary/90 to-primary/10 rounded-lg'>
                                        <MessageSquareIcon className='w-full h-full'></MessageSquareIcon>
                                    </div>

                                    <div>
                                        <h1 className='text-3xl text-primary'>Ready to get started ?</h1>
                                        <p className='text-2xl text-muted-foreground'>Book your appointment or try our ModernKitchen AI voice assistant for instant service.</p>

                                        <div className='flex gap-2 mt-4'>
                                            <Link href={'/admin/voice'}>
                                                <Button className='text-3xl px-8 text-black font-medium py-2 h-full rounded-2xl'>Try AI Assistant</Button>
                                            </Link>

                                            <Link href={'/admin/meetings'}>
                                                <Button className='text-3xl px-8 text-white bg-background/40 font-medium py-2 h-full rounded-2xl'>Book Appointments</Button>
                                            </Link>

                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>
                        </CardContent>
                    </Card>

                    {rightNextMeeting && (
                        <Card className='w-[45%] hover:bg-linear-to-br hover:to-primary/60 hover:outline-2 hover:outline-[#7033ff]'>
                            <CardHeader>
                                <div className='flex gap-2 items-center'>
                                    <div className='size-9'>
                                        <Calendar className='w-full h-full text-primary' />
                                    </div>
                                    <h1 className='text-3xl'>Upcomming Appointment</h1>
                                </div>
                            </CardHeader>

                            <CardContent className='mt-15'>
                                <div className='flex  justify-between'>
                                    <div className='space-y-10'>
                                        <div className='bg-linear-to-br from-primary/90 to-primary/10 rounded-full flex gap-1 items-center px-4 py-1 w-fit'>
                                            <div className='size-2.5  animate-pulse bg-accent-foreground rounded-full' />
                                            <p className='text-white text-lg'>Upcomming</p>
                                        </div>

                                        <div className='flex gap-2'>
                                            <div className='size-13 p-3 bg-linear-to-br from-primary/90 to-primary/10 rounded-2xl'>
                                                <UserIcon className='w-full h-full'></UserIcon>
                                            </div>

                                            <div className=''>
                                                <h1 className='text-2xl'>Chef. {rightNextMeeting?.chef?.name}</h1>
                                                <p className='text-xl text-muted-foreground'>Butter Chicken recipe</p>
                                            </div>
                                        </div>

                                        <div className='flex gap-2'>
                                            <div className='size-13 p-3 bg-linear-to-br from-primary/90 to-primary/10 rounded-2xl'>
                                                <Calendar className='w-full h-full'></Calendar>
                                            </div>

                                            <div className=''>
                                                <h1 className='text-2xl'>{rightNextMeeting?.date?.toDateString()}</h1>
                                                <p className='text-xl text-muted-foreground'>Thursday</p>
                                            </div>
                                        </div>

                                        <div className='flex gap-2'>
                                            <div className='size-13 p-3 bg-linear-to-br from-primary/90 to-primary/10 rounded-2xl'>
                                                <Clock className='w-full h-full'></Clock>
                                            </div>

                                            <div className=''>
                                                <h1 className='text-2xl'>{rightNextMeeting?.time}</h1>
                                                <p className='text-xl text-muted-foreground'>Local Time</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className=''>
                                        <div className='p-2 bg-muted-foreground/5 rounded-2xl'>
                                            {rightNextMeeting?.status}
                                        </div>
                                    </div>
                                </div>

                                <div className='flex items-center justify-center  mt-10'>
                                    <p className=' text-xl text-muted-foreground'>

                                        {
                                            nextMeetings && nextMeetings?.length > 0 && (
                                                "+1 upcomming appointments"
                                            )
                                        }

                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            )}
        </section>


    )
}

export default AppointmentsStats