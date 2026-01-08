"use client"
import React, { useMemo } from 'react'
import { useGetAvailableChefs, useGetUserMeeting } from '@/hooks/use-meetings'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Calendar, Clock, MapPinIcon, PhoneIcon, StarIcon } from 'lucide-react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { setChef, setCurrentStep } from '@/redux/features/BookChefs/BookChefsSlice'
import { useUser } from '@clerk/nextjs'
import { LoadingPage } from '../LandingPage/Navbar'

type PropTypes = {
    dispatch: Function,
    currStep: number,
    chefId: string
}


const SelectChef = ({ dispatch, currStep, chefId }: PropTypes) => {
    const { data, isLoading } = useGetAvailableChefs();
    const { user } = useUser();
    const { data: userMeetings, isFetchedAfterMount: userMeetingsFetched } = useGetUserMeeting(user?.id);
    const nextThreeMeetings = useMemo(() => {
        if (!userMeetings?.length) return [];

        const now = new Date();

        return userMeetings
            .filter(meeting => {
                const meetingDateTime = new Date(
                    meeting?.date
                );
                return meetingDateTime >= now;
            })
            .slice(0, 3);
    }, [userMeetingsFetched  ]);


    return (
        <>
            {(isLoading && !user && !userMeetings && !nextThreeMeetings) && (<LoadingPage />)}

            <section className='space-y-10'>
                <h1 className='text-4xl'>Choose Your Chef</h1>
                <div className='w-fit  grid grid-cols-1 md:grid-cols-2 mb-8 gap-10 '>
                    {data?.map((chef) => (
                        <Card key={chef.id} className={`px-3 py-6 ${chef?.id === chefId && 'outline-2 outline-primary'}`} onClick={() => dispatch(setChef(chef.id))} >
                            <CardHeader className='flex gap-4'>
                                <div className='size-24 rounded-full  outline-2 outline-primary flex items-center justify-center overflow-hidden'>
                                    {
                                        chef.profileImage && (
                                            <img src={chef.profileImage} alt='' className='w-full h-full object-cover' loading='lazy' />
                                        )
                                    }
                                </div>
                                <div>
                                    <CardTitle className='text-3xl'>Chef. {chef.name}</CardTitle>
                                    <CardDescription>
                                        <h1 className='text-xl text-primary'>{chef.speciality}</h1>

                                        <div className="flex items-center gap-2 mt-2 text-lg">

                                            <div className="flex items-center gap-1">
                                                <StarIcon className="w-5 h-5 fill-amber-400 text-amber-400" />
                                                <span className="font-medium">5</span>
                                            </div>
                                            <span className="text-muted-foreground">
                                                ({chef._count.meetings} appointments)
                                            </span>
                                        </div>
                                    </CardDescription>
                                </div>

                            </CardHeader>

                            <CardContent className='space-y-5 text-2xl'>
                                <div className="flex items-center gap-2  text-muted-foreground">
                                    <MapPinIcon className="w-7 h-7" />
                                    <span>Modern Kitchen</span>
                                </div>
                                <div className="flex items-center gap-2  text-muted-foreground">
                                    <PhoneIcon className="w-7 h-7" />
                                    <span>{chef.phone}</span>
                                </div>
                                <p className=" text-muted-foreground">
                                    {chef.bio || "Experienced chefs providing professional guidance for any cullinary you want to prepare."}
                                </p>
                                <Badge variant="outline" className='py-1 px-3 text-xl text-primary'>Licensed Professional</Badge>
                            </CardContent>
                        </Card>
                    ))}

                    {nextThreeMeetings && nextThreeMeetings?.length !== 0 && (
                        <div>
                            <h1 className='text-4xl mb-8'>Your Meetings</h1>
                            {nextThreeMeetings?.map((meeting) => (
                                <Card key={meeting.id} className='px-3 py-6 mb-8' >
                                    <CardHeader className='flex gap-4'>
                                        <div className='size-15 rounded-full  outline-2 outline-primary flex items-center justify-center overflow-hidden'>
                                            {
                                                meeting?.chef && (
                                                    <img src={meeting?.chef?.profileImage} alt='' className='w-full h-full object-cover' loading='lazy' />
                                                )
                                            }
                                        </div>
                                        <div>
                                            <CardTitle className='text-3xl'>Chef. {meeting?.chef.name}</CardTitle>
                                            <CardDescription>
                                                <h1 className='text-xl text-primary'>{meeting?.chef?.speciality}</h1>
                                            </CardDescription>
                                        </div>

                                    </CardHeader>
                                    <CardContent className='space-y-1 text-2xl'>
                                        <div className='flex gap-3 items-center'>
                                            <Calendar />
                                            <h2 className='text-muted-foreground'>{new Date(meeting?.date).toDateString()}</h2>
                                        </div>

                                        <div className='flex gap-3 items-center'>
                                            <Clock />
                                            <h2 className='text-muted-foreground'>{meeting?.time}</h2>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}

                </div>

                {!isLoading &&
                    (
                        <div className=' flex justify-end '>
                            <Button className='text-3xl px-5 py-6 text-black' onClick={() => dispatch(setCurrentStep(currStep + 1))} disabled={chefId === ""} >
                                Proceed to Date & Time Selection
                            </Button>
                        </div>
                    )}

            </section >
        </>
    )
}

export default SelectChef