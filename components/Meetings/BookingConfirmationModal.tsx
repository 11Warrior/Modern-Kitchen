"use client"

import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'
import { DialogDescription, DialogTrigger } from '@radix-ui/react-dialog'
import { CalendarIcon, CheckCircleIcon, Clock, MailIcon, User } from 'lucide-react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useUser } from '@clerk/nextjs'
import CalendarAnimation from '../../lib/LottieAnimations/CalendarAnimation.json'
import { resetBookingState } from '@/redux/features/BookChefs/BookChefsSlice'
import { Button } from '../ui/button'
import Link from 'next/link'
import { QueryClient } from '@tanstack/react-query'

type BookingConfirmationType = {

    modal: boolean
    bookedMeeting: any
    toggleModal: (modal: boolean) => (void)
    dispatch: Function

}

const BookingConfirmationModal = ({ modal, toggleModal, bookedMeeting, dispatch }: BookingConfirmationType) => {
    const { user } = useUser();
    const userEmail = user?.emailAddresses?.[0]?.emailAddress;

    // console.log(bookedMeeting);
    const appointmentDate = new Date(bookedMeeting?.date)

    return (
        <Dialog open={modal}
            onOpenChange={
                () => {
                    toggleModal(false)
                    dispatch(resetBookingState())
                }

            }>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent >
                <DialogHeader className='text-center space-y-4 '>
                    <DialogTitle className=' text-center space-y-2'>
                        <div className='flex justify-center'>
                            <div className='size-15 rounded-full bg-primary/20 flex items-center justify-center '>
                                <CheckCircleIcon className='size-10' color='#7033ff' />
                            </div>
                        </div>

                        <p className='text-3xl '>Appointment Confirmed</p>
                        <p className='text-2xl text-muted-foreground'>Your appointment has been sucessfully booked.</p>

                        <div>
                            <DotLottieReact
                                data={CalendarAnimation}
                                autoplay
                            />
                        </div>

                        <div className='space-y-1'>
                            <h2 className='text-2xl items-center justify-center text-primary flex gap-2'>
                                <span><MailIcon /></span>
                                Check your inbox for more details.
                            </h2>
                            <p className='text-1xl text-muted-foreground'>{userEmail}</p>
                        </div>

                    </DialogTitle>
                </DialogHeader>
                <div className='bg-primary/3 rounded-lg px-2 py-3'>
                    <h1 className='text-center text-2xl'>Quick Summary</h1>

                    <div className='mt-5 space-y-1 text-xl'>
                        <div className='flex gap-2 '>
                            <User className='text-muted-foreground size-5.5' />
                            <h2>Chef. {bookedMeeting?.chef?.name}</h2>
                        </div>

                        <div className='flex gap-2 '>
                            <CalendarIcon className='text-muted-foreground size-5.5' />
                            <h2>{appointmentDate.toDateString()}</h2>
                        </div>

                        <div className='flex gap-2 '>
                            <Clock className='text-muted-foreground size-5.5' />
                            <h2>{bookedMeeting?.time}</h2>
                        </div>

                    </div>

                </div>
                <Link href={'/admin/dashboard'} >
                    <Button onClick={() => {
                    }} variant={'default'} className='w-full text-2xl rounded-2xl text-black'>
                        View my appointments
                    </Button>
                </Link>

                <DialogFooter className=' flex flex-col'>
                    <DialogClose asChild>
                        <Button variant={'outline'} className='w-full text-2xl rounded-2xl'>
                            Close
                        </Button>
                    </DialogClose>

                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default BookingConfirmationModal