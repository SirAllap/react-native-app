import { SafeAreaView, StyleSheet, Text } from 'react-native'
import React from 'react'
import { CheckInProps } from '../interfaces/NavigationInterfaces'
import { styles } from '../styles/styles'

const CheckInScreen: React.FC<CheckInProps> = ({ route }) => {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.text}>
				Your booking ref number is: {route.params.checkInRef}
			</Text>
		</SafeAreaView>
	)
}

export default CheckInScreen
