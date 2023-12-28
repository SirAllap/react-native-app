import React, { FC, useState } from 'react'
import {
	SafeAreaView,
	Text,
	View,
	TextInput,
	Pressable,
	Alert,
} from 'react-native'
import { HomeProps } from '../interfaces/NavigationInterfaces'
import { styles } from '../styles/styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HomeScreen: FC<HomeProps> = ({ navigation }) => {
	const [refNumber, setRefNumber] = useState<string>('')

	const loginUser = async () => {
		try {
			const response = await fetch(
				`https://i19d9hr144.execute-api.eu-west-1.amazonaws.com/login`,
				{
					method: 'POST',
					mode: 'cors',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						email: 'david.pr.developer@gmail.com',
						password: 'ilovebaguettes',
					}),
				}
			)
			if (!response.ok) {
				throw new Error(`Status ${response.status}`)
			} else {
				const data = await response.json()
				await AsyncStorage.setItem('token', data.token)
				bookingData(refNumber)
				return data
			}
		} catch (error) {
			console.error('An error occurred during login:', error)
			throw new Error('Login failed. Please try again.')
		}
	}
	const bookingData = async (ref_number: string) => {
		try {
			const response = await fetch(
				`https://i19d9hr144.execute-api.eu-west-1.amazonaws.com/bookings/ref/${ref_number}`,
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
				throw new Error(`Status ${response.status}`)
			} else {
				const data = await response.json()
				navigation.navigate('CheckInScreen', {
					checkInRef: refNumber,
				})
				return data
			}
		} catch (error) {
			console.log(
				`There is not a booking with ${ref_number} as a  reference number`
			)
			Alert.alert(
				'Reference number incorrect',
				`Sorry but there is not a booking with ${ref_number} as a  reference number`
			)
			console.error(error)
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.bodyContainer}>
				<Text nativeID='inputRefNum' style={styles.inputLabel}>
					Booking reference number:
				</Text>
				<TextInput
					style={styles.inputStyle}
					onChangeText={setRefNumber}
					value={refNumber}
					placeholder='E.g: SwcJ3'
					placeholderTextColor='#a5a4a4'
					maxLength={5}
					accessibilityLabel='input'
					accessibilityLabelledBy='inputRefNum'
				/>
			</View>
			<Pressable
				onPress={() => {
					setRefNumber('')
					loginUser()
				}}
				style={
					refNumber.length !== 5
						? styles.buttonDisabled
						: styles.buttonStyle
				}
				disabled={refNumber.length !== 5 ? true : false}
			>
				<Text style={styles.buttonText}>Check</Text>
			</Pressable>
		</SafeAreaView>
	)
}

export default HomeScreen
