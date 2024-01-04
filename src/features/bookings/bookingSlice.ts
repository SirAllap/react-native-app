import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'
import { BookingState, IBooking } from '../../interfaces/BookingInterfaces'
import { singleBooking } from './bookingThunks'

const initialState: BookingState = {
	singleBookingData: {} as IBooking,
	status: 'idle',
	error: 'null',
}

const bookingSlice = createSlice({
	name: 'bookings',
	initialState,
	reducers: {
		resetState: (state) => {
			state.status = 'idle'
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(singleBooking.pending, (state) => {
				state.status = 'pending'
			})
			.addCase(singleBooking.rejected, (state) => {
				state.status = 'rejected'
			})
			.addCase(singleBooking.fulfilled, (state, action) => {
				state.singleBookingData = action.payload
				state.status = 'fulfilled'
			})
	},
})

export default bookingSlice.reducer

export const selectBookingData = (state: RootState) =>
	state.booking.singleBookingData
export const initialBookingState = (state: RootState) => state.booking.status
export const { resetState } = bookingSlice.actions
