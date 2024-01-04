import React, { FC, useEffect, useState } from 'react'
import {
	SafeAreaView,
	Text,
	View,
	TextInput,
	Pressable,
	Alert,
	ActivityIndicator,
} from 'react-native'
import { HomeProps } from '../interfaces/NavigationInterfaces'
import { styles } from '../../styles/styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { singleBooking } from '../features/bookings/bookingThunks'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import {
	initialBookingState,
	selectBookingData,
} from '../features/bookings/bookingSlice'

interface IuserInfo {
	name: string
	email: string
	photo: string
}
const HomeScreen: FC<HomeProps> = ({ navigation }) => {
	const dispatch = useAppDispatch()
	const bookingInitialState = useAppSelector(initialBookingState)
	const bookingDataSelector = useAppSelector(selectBookingData)
	const [refNumber, setRefNumber] = useState<string>('')
	const [userInfo, setUserInfo] = useState<IuserInfo>()
	const [loading, setLoading] = useState<boolean>(false)

	useEffect(() => {
		if (bookingInitialState === 'rejected') {
			setLoading(false)
		}
		if (bookingInitialState === 'pending') {
			setLoading(true)
		}
		if (bookingInitialState === 'fulfilled') {
			navigation.navigate('CheckInScreen', {
				checkInRef: refNumber,
				checkIn: formatedDate(bookingDataSelector.check_in),
				checkOut: formatedDate(bookingDataSelector.check_out),
				roomType: bookingDataSelector.room_type,
				roomNumber: bookingDataSelector.room_number,
				roomId: bookingDataSelector.roomId,
			})
			setRefNumber('')
			setLoading(false)
		}
	}, [bookingInitialState])
	;(async () => {
		try {
			const data = await AsyncStorage.getItem('userData')
			if (data !== null) {
				setUserInfo(JSON.parse(data))
			} else {
				console.log('User data is null')
			}
		} catch (error) {
			console.error('Error retrieving user data:', error)
		}
	})()

	const formatedDate = (date: string) => {
		return date.replace(/\d{2}:\d{2}:\d{2} GMT\+0000 \(GMT\)/, '')
	}

	const bookingData = (ref_number: string) => {
		dispatch(singleBooking(ref_number))
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.homeContainer}>
				{userInfo !== undefined && (
					<View>
						<Text style={styles.userWelcome}>
							Welcome {userInfo.name}
						</Text>
						<Text style={{ color: 'white', paddingTop: 10 }}>
							Kindly review your email inbox for the booking
							details following your reservation at Miranda Hotel
						</Text>
					</View>
				)}
				{loading ? (
					<ActivityIndicator size='large' color='#BEAD8E' />
				) : (
					<>
						<View>
							<Text
								nativeID='inputRefNum'
								style={styles.inputLabel}
							>
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
					</>
				)}
			</View>
			<Pressable
				onPress={() => {
					bookingData(refNumber)
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
