// "use client"

import React, { useId } from 'react'
import { Button } from '../ui/button'
import { ChevronLeftIcon } from 'lucide-react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { useGetChefById } from '@/hooks/use-chefs'
import { BookingType, resetBookingState, setBookedMeeting, setCurrentStep } from '@/redux/features/BookChefs/BookChefsSlice'
import { useAddMeeting } from '@/hooks/use-meetings'
import { currentUser } from '@clerk/nextjs/server'
import { useUser } from '@clerk/nextjs'

type PropTypes = {
  dispatch: Function,
  chefId: string,
  currStep: number,
  bookingType: BookingType,
  bookingDate: string,
  bookingTime: string
}

const ConfirmBooking = ({ chefId, dispatch, bookingType, bookingDate, bookingTime, currStep }: PropTypes) => {
  const { user } = useUser();
  // console.log(user?.id);
  const addMeetingMutation = useAddMeeting();

  function handleBookingAction() {
    addMeetingMutation.mutate({
      chefId: chefId as string,
      date: bookingDate as string,
      notes: "" as string,
      time: bookingTime as string,

    },
      {
        onSuccess: (meeting) => {
          dispatch(resetBookingState());
          dispatch(setBookedMeeting(meeting))
        },
        onError: (error) => {
          console.log("Error adding new meeting", error?.message);
        }
      }
    )

  }

  const { data: bookedChef } = useGetChefById(chefId);

  return (
    <section className='space-y-6'>
      <div className="flex items-center gap-4 mb-6">
        <Button className='text-xl' variant="ghost" onClick={() => dispatch(setCurrentStep(currStep - 1))}>
          <ChevronLeftIcon className="size-7 mr-2" />
          Back
        </Button>
        <h2 className="text-2xl font-semibold">Select Date & Time</h2>
      </div>

      <Card className='space-y-4 w-[50vw]'>
        <CardHeader className='space-y-6'>
          <h1 className='text-3xl'>Meeting Summary</h1>

          <div className='flex gap-4 items-center'>
            <div className='size-20 rounded-full'>
              <img src={bookedChef?.profileImage} className='w-full h-full object-cover' alt="" />
            </div>

            <div>
              <h1 className='text-3xl'>Chef. {bookedChef?.name}</h1>
              <h3 className='text-2xl text-muted-foreground'>{bookedChef?.speciality}</h3>
            </div>

          </div>

        </CardHeader>

        <CardContent className='grid grid-cols-2 gap-4 pt-4 border-t'>
          <div>
            <p className="text-2xl text-muted-foreground">Appointment Type</p>
            <p className="text-2xl">{bookingType.title}</p>
          </div>
          <div>
            <p className="text-2xl text-muted-foreground">Duration</p>
            <p className="text-2xl">{bookingType?.duration}</p>
          </div>
          <div>
            <p className="text-3xl text-muted-foreground">Date</p>
            <p className="text-3xl">
              {new Date(bookingDate).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <div>
            <p className="text-2xl text-muted-foreground">Time</p>
            <p className="text-2xl">{bookingTime}</p>
          </div>
          <div>
            <p className="text-2xl text-muted-foreground">Location</p>
            <p className="text-2xl">Modern Kitchen</p>
          </div>
          <div>
            <p className="text-2xl text-muted-foreground">Cost</p>
            <p className="text-2xl text-primary">$ {bookingType?.price}</p>
          </div>
        </CardContent>
      </Card>


      <div className='flex gap-3 '>
        <Button variant={'outline'} className='px-5 py-3 text-2xl rounded-[10px]'>
          Modify Meeting
        </Button>

        <Button className='px-3 py-2 text-2xl rounded-[10px] text-black' onClick={() => handleBookingAction()}>
          Confirm Meeting
        </Button>

      </div>

    </section>
  )
}

export default ConfirmBooking