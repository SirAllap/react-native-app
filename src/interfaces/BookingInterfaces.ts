export interface IBooking {
	_id?: string
	guest: string
	phone_number: string
	order_date: string
	check_in: string
	check_out: string
	special_request: string
	room_type: string
	room_number: string
	status: string
	reference_number: string
	photos: string[]
	roomId: string
}

export type BookingState = {
	singleBookingData: IBooking
	status: 'idle' | 'pending' | 'rejected' | 'fulfilled'
	error: string | null
}
