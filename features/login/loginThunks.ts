import { createAsyncThunk } from '@reduxjs/toolkit'
import { ILogin } from '../../interfaces/LoginInterfaces'

export const userLogin = createAsyncThunk(
	'login/userLogin',
	async (data: ILogin) => {
		try {
			const response = await fetch('')
		} catch (error) {}
	}
)
