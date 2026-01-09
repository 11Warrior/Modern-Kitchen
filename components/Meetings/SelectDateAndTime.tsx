"use client"
import React, { useEffect, useMemo } from 'react'
import { Button } from '../ui/button'
import { ChevronLeftIcon, ClockIcon } from 'lucide-react'
import { BookingType, setBookingDate, setBookingTime, setBookingType, setCurrentStep } from '@/redux/features/BookChefs/BookChefsSlice'
import { availableMeetingDates, availableMeetingTimes, MeetingTypes } from '@/lib/utils'
import { Card, CardContent } from '../ui/card'
import { useGetBookedMeetingTime } from '@/hooks/use-meetings'

type PropTypes = {
    dispatch: Function,
    chefId: string,
    currStep: number,
    bookingType: BookingType,
    bookingDate: string,
    bookingTime: string
}

const SelectDateAndTime = ({ dispatch, currStep, bookingType, bookingDate, bookingTime, chefId }: PropTypes) => {

    const availableDates = availableMeetingDates();
    const { data: bookedTimeSlots, isFetching } = useGetBookedMeetingTime(chefId, bookingDate);
    // console.log(bookedTimeSlots, isFetching);


    const bookedTimeSlotSet = new Set(bookedTimeSlots || []);
   
    const memoizedBookedTimeSlots = useMemo(() => {
        return (
            availableMeetingTimes.map((time) => ({
                time,
                isBooked: bookedTimeSlotSet.has(time)
            })))
    }, [bookedTimeSlots])


    return (
        <section className='space-y-6'>
            <div className="flex items-center gap-4 mb-6">
                <Button className='text-xl' variant="ghost" onClick={() => dispatch(setCurrentStep(currStep - 1))}>
                    <ChevronLeftIcon className="size-7 mr-2" />
                    Back
                </Button>

                <h2 className="text-2xl font-semibold">Select Date & Time</h2>
            </div>

            <div className='grid lg:grid-cols-2 gap-8'>
                <div className='space-y-3'>
                    <h1 className='text-3xl'>Appointment Type</h1>
                    {
                        MeetingTypes.map((type) => (
                            <Card
                                key={type.id}
                                className={`cursor-pointer transition-all hover:shadow-sm ${bookingType.title === type.title ? "ring-2 ring-primary" : ""
                                    }`}
                                onClick={() => dispatch(setBookingType(type))}
                            // onChange={() => dispatch(setBookingDate(" "))}
                            >
                                <CardContent className="py-2">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h4 className="font-medium text-3xl">{type.title}</h4>
                                            <p className="text-xl text-muted-foreground">{type.description}</p>
                                        </div>
                                        <div>
                                            <span className="font-semibold text-primary text-4xl">${type.price}</span>
                                            <h4 className='text-xl'>{type.duration} min</h4>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>

                <div className='space-y-5'>
                    <h1 className='text-3xl'>Appointment Date</h1>
                    <div className='grid grid-cols-2 gap-3'>

                        {availableDates.map((date, index) => (
                            <Button
                                key={index}
                                variant={bookingDate === date.bookingDate ? "default" : "outline"}
                                onClick={() => dispatch(setBookingDate(date.bookingDate))}
                                // onChange={() => {
                                //     dispatch(setBookingType())

                                // }}
                                className="h-12 p-3"
                            >
                                <div className="text-center">
                                    <div className="font-medium text-3xl">
                                        {date.label}
                                    </div>
                                </div>
                            </Button>
                        ))}
                    </div>

                    {bookingDate && (
                        <div className="space-y-3">
                            <h1 className="text-3xl">Available Times</h1>
                            <div className="grid grid-cols-3 gap-3">
                                {memoizedBookedTimeSlots.map(({ time, isBooked }) => {
                                    return (
                                        <Button
                                            key={time}
                                            variant={bookingTime === time ? "default" : "outline"}
                                            onClick={() => {
                                                dispatch(setBookingTime(time))
                                                bookedTimeSlotSet.add(time)

                                            }
                                            }
                                            size="lg"
                                            disabled={isBooked}
                                            className={isBooked ? "opacity-50 cursor-not-allowed" : ""}
                                        >
                                            <ClockIcon className="size-7 mr-1" />
                                            <span className='text-3xl'>
                                                {time}
                                                {isBooked && " (Booked)"}
                                            </span>
                                        </Button>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>

            </div>

            <div className='flex justify-end'>
                <Button className='text-3xl px-5 py-4 text-black rounded-md' onClick={() => dispatch(setCurrentStep(currStep + 1))} disabled={bookingDate === " "}>
                    Review Booking
                </Button>
            </div>

        </section>
    )
}

export default SelectDateAndTime