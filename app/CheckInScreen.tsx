import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CheckInProps } from '../interfaces/NavigationInterfaces'
import { styles } from '../styles/styles'

const CheckInScreen: React.FC<CheckInProps> = ({ route, navigation }) => {
	const [confirmed, setConfirmed] = useState<boolean>(false)
	const [longPress, setLongPress] = useState<boolean>(false)
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
					<Text style={styles.tableText}>
						Ref number: {route.params.checkInRef}
					</Text>
					<Text style={styles.tableText}>Checkin Date: 12/04/22</Text>
					<Text style={styles.tableText}>
						CheckOut Date: 16/04/22
					</Text>
					<Text style={styles.tableText}>Number of Guests: 2</Text>
					<Text style={styles.tableText}>Total Price: €400</Text>
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
