import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CheckInProps } from '../interfaces/NavigationInterfaces'
import { styles } from '../styles/styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface IuserInfo {
	name: string
	email: string
	photo: string
}

const CheckInScreen: React.FC<CheckInProps> = ({ route, navigation }) => {
	const [confirmed, setConfirmed] = useState<boolean>(false)
	const [longPress, setLongPress] = useState<boolean>(false)
	const [userInfo, setUserInfo] = useState<IuserInfo>()

	const userData = async () => {
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
	}
	userData()

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.infoContainer}>
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
							Client name: {userInfo.name}
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
					{/* <Text style={styles.tableText}>Number of Guests: 2</Text> */}
					<Text style={styles.tableTextPrice}>Total Price: €400</Text>
				</View>
			</View>
			<Pressable
				onPress={() => (confirmed ? navigation.navigate('Home') : null)}
				onLongPress={() => {
					setConfirmed(true)
				}}
				onPressIn={() => {
					setLongPress(true)
				}}
				onPressOut={() => {
					setLongPress(false)
				}}
				delayLongPress={1500}
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
		</SafeAreaView>
	)
}

export default CheckInScreen
