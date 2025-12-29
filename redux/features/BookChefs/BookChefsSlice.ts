
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type BookingType = {
    id: string,
    title: string,
    price: number,
    description: string,
    duration: number
}

const initialState = {
    chefId: "" as string,
    bookingDate: "" as string,
    bookingTime: "" as string,
    bookingType: {} as BookingType,
    currentStep: 1 as number,
    bookedMeeting: null as any
}

const BookChefsSlice = createSlice({
    name: "chefMeetings",
    initialState,
    reducers: {
        setChef: (state, action : PayloadAction<string>) => {
            state.chefId = action.payload
        },
        setBookingDate: (state, action : PayloadAction<string>) => {
            state.bookingDate = action.payload
        },
        setBookingTime: (state, action : PayloadAction<string>) => {
            state.bookingTime = action.payload
        },
        setBookingType: (state, action : PayloadAction<BookingType>) => {
            state.bookingType = action.payload
        },
        //not typical incremental process as we have to go back also 
        setCurrentStep: (state, action : PayloadAction<number>) => {
            state.currentStep = action.payload
        },
        setBookedMeeting: (state, action : PayloadAction<any>) => {
            state.bookedMeeting = action.payload
        },

        resetBookingState: () => {
            return initialState;
        }
    }
})

export const {
    setChef,
    setBookingDate,
    setBookingTime,
    setBookingType,
    setCurrentStep,
    setBookedMeeting,
    resetBookingState
} = BookChefsSlice.actions

export default BookChefsSlice.reducer;