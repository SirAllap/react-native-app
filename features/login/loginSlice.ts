import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'
import { ILoginState } from '../../interfaces/SlicesInterfaces'
import { userLogin } from './loginThunks'

const initialState: ILoginState = {
	data: { email: '', password: '' },
	status: 'idle',
	error: null,
}

const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(userLogin.pending, (state, action) => {
				state.status = 'pending'
			})
			.addCase(userLogin.rejected, (state, action) => {
				state.status = 'rejected'
			})
			.addCase(userLogin.fulfilled, (state, action) => {
				state.status = 'fulfilled'
			})
	},
})

export default loginSlice.reducer
