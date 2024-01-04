import {
	ActivityIndicator,
	Pressable,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import React, { useState } from 'react'
import { CheckInProps } from '../interfaces/NavigationInterfaces'
import { styles } from '../../styles/styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { changeBookingStatus } from '../features/bookings/bookingThunks'
import { useAppDispatch } from '../store/hooks'

interface IuserInfo {
	name: string
	email: string
	photo: string
}

const CheckInScreen: React.FC<CheckInProps> = ({ route, navigation }) => {
	const dispatch = useAppDispatch()
	const [confirmed, setConfirmed] = useState<boolean>(false)
	const [longPress, setLongPress] = useState<boolean>(false)
	const [userInfo, setUserInfo] = useState<IuserInfo>()
	const [loading, setLoading] = useState<boolean>(false)

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

	const confirmCheckIn = (id: string) => {
		dispatch(changeBookingStatus(id))
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.checkInContainer}>
				<Text
					style={
						!confirmed ? styles.tableTitleNone : styles.tableTitle
					}
				>
					Thank you, you have successfully checked in
				</Text>
				<View>
					<Text style={styles.tableTextTitle}>Booking Details</Text>
					{userInfo !== undefined && (
						<Text style={styles.tableText}>
							Client name: {route.params.guest}
						</Text>
					)}
					<Text style={styles.tableText}>
						Ref number: {route.params.checkInRef}
					</Text>
					<Text style={styles.tableText}>
						Room number: {route.params.roomNumber}
					</Text>
					<Text style={styles.tableText}>
						Room type: {route.params.roomType}
					</Text>
					<Text style={styles.tableText}>
						Checkin Date: {route.params.checkIn}
					</Text>
					<Text style={styles.tableText}>
						CheckOut Date: {route.params.checkOut}
					</Text>
					<Text style={styles.tableText}>
						Booking status:{' '}
						{route.params.status === 'CheckIn' ? 'Done' : 'Pending'}
					</Text>
					{/* <Text style={styles.tableText}>Number of Guests: 2</Text> */}
					<Text style={styles.tableTextPrice}>Total Price: €400</Text>
				</View>
				{loading ? (
					<ActivityIndicator size={100} color='#BEAD8E' />
				) : null}
				<Text
					style={{
						color: '#BEAD8E',
						fontWeight: 'bold',
						fontSize: 20,
						textAlign: 'center',
					}}
				>
					{route.params.status === 'CheckIn'
						? "You've already checked in for this booking"
						: null}
				</Text>
			</View>
			{route.params.status === 'CheckIn' ? (
				<Pressable
					onPressIn={() => navigation.navigate('InfoScreen')}
					style={
						!longPress
							? styles.buttonStyle
							: styles.buttonStyleLongPress
					}
				>
					<Text style={styles.buttonText}>Check Hotel info</Text>
				</Pressable>
			) : (
				<Pressable
					onLongPress={() => {
						confirmCheckIn(route.params.id)
						setConfirmed(true)
						setLoading(false)
					}}
					onPressIn={() => {
						setLongPress(true)
						setLoading(true)
					}}
					onPressOut={() => {
						setLongPress(false)
						setLoading(false)
					}}
					delayLongPress={1000}
					style={
						!longPress
							? styles.buttonStyle
							: styles.buttonStyleLongPress
					}
				>
					<Text style={styles.buttonText}>
						{!confirmed ? 'Longpress to confirm' : 'Done'}
					</Text>
				</Pressable>
			)}
		</SafeAreaView>
	)
}

export default CheckInScreen
