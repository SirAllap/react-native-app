import { createAsyncThunk } from '@reduxjs/toolkit'
import { ILogin } from '../../interfaces/LoginInterfaces'
import { API_URL } from '@env'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const userLogin = createAsyncThunk(
	'login/userLogin',
	async (data: ILogin) => {
		try {
			const response = await fetch(`${API_URL}/login`, {
				method: 'POST',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
				},
				body: JSON.stringify({
					email: data.email,
					password: data.password,
				}),
			})
			if (!response.ok) {
				Alert.alert('Email or password incorrect')
				throw new Error(`Status ${response.status}`)
			} else {
				const data = await response.json()
				await AsyncStorage.setItem('token', data.token)
				await AsyncStorage.setItem(
					'userData',
					JSON.stringify({
						name: data.payload.userInfo.name,
						email: data.payload.userInfo.email,
						photo: data.payload.userInfo.photo,
					})
				)
				return data
			}
		} catch (error) {
			console.error('An error occurred during login:', error)
			throw new Error('Login failed. Please try again.')
		}
	}
)
