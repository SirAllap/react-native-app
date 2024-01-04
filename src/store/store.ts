import { configureStore } from '@reduxjs/toolkit'
import loginSlice from '../features/login/loginSlice'
import bookingSlice from '../features/bookings/bookingSlice'

export const store = configureStore({
	reducer: {
		login: loginSlice,
		booking: bookingSlice,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
