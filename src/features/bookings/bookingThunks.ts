import { createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL } from '@env'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const singleBooking = createAsyncThunk(
	'bookings/singleBooking',
	async (ref_number: string) => {
		try {
			const response = await fetch(
				`${API_URL}/bookings/ref/${ref_number}`,
				{
					method: 'GET',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
						token: `${await AsyncStorage.getItem('token')}`,
					},
				}
			)

			if (!response.ok) {
				Alert.alert(
					'Reference number incorrect',
					`Sorry but there is not a booking with ${ref_number} as a reference number`
				)
				throw new Error(`Status ${response.status}`)
			} else {
				const data = await response.json()
				return data
			}
		} catch (error) {
			console.log(
				`There is not a booking with ${ref_number} as a reference number`
			)
			throw new Error('No available booking with that reference number.')
		}
	}
)
