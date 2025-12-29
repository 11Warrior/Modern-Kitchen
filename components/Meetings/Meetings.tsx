"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Steps from './Steps';
import SelectChef from './SelectChef';
import SelectDateAndTime from './SelectDateAndTime';
import ConfirmBooking from './ConfirmBooking';

const Meetings = () => {
  // const appointmentState = useSelector()
  //handle meeting confirmed modal here using useState rather than redux setup
  const {currentStep, chefId, bookingType, bookingDate, bookingTime} = useSelector((state : any) => state.chefMeetings);
  const dispatch = useDispatch();

  return (
    <section className='min-h-screen px-20 py-10 space-y-10'>
      <div className="mb-8">
        <h1 className="text-6xl font-bold mb-2">Book a Meeting</h1>
        <p className="text-muted-foreground text-3xl">Find and book with verified chefs in your area</p>
      </div>

      {/**Progressing steps */}
      <Steps currStep={currentStep} />

      {currentStep === 1 && (
        <SelectChef currStep={currentStep} chefId={chefId} dispatch={dispatch}/>
      )}

      {currentStep === 2 && (
        <SelectDateAndTime chefId={chefId} bookingDate={bookingDate} bookingTime={bookingTime} bookingType={bookingType} dispatch={dispatch} currStep={currentStep} />
      )}

      {currentStep === 3 && (
        <ConfirmBooking chefId={chefId} dispatch={dispatch} bookingDate={bookingDate} bookingTime={bookingTime} bookingType={bookingType} currStep={currentStep} />
      )}

    </section>
  )
}

export default Meetings