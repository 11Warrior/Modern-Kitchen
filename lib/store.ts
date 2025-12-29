
import {configureStore} from '@reduxjs/toolkit'
import BookMeetingReducer from '../redux/features/BookChefs/BookChefsSlice'

export const store = configureStore({
    reducer: {
        chefMeetings: BookMeetingReducer,
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch