import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'
import { ILoginState, IUserInfo } from '../../interfaces/SlicesInterfaces'
import { userLogin } from './loginThunks'

const initialState: ILoginState = {
	loginInfo: {} as IUserInfo,
	status: 'idle',
	error: null,
}

const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		resetState: (state) => {
			state.status = 'idle'
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(userLogin.pending, (state, action) => {
				state.status = 'pending'
			})
			.addCase(userLogin.rejected, (state, action) => {
				state.status = 'rejected'
			})
			.addCase(userLogin.fulfilled, (state, action) => {
				state.loginInfo = action.payload.userInfo
				state.status = 'fulfilled'
			})
	},
})

export default loginSlice.reducer

export const selectLoginInfo = (state: RootState) => state.login.loginInfo
export const initialLoginState = (state: RootState) => state.login.status
export const { resetState } = loginSlice.actions
