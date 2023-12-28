import { Alert, Linking, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import { InfoProps } from '../interfaces/NavigationInterfaces'
import { styles } from '../styles/styles'

const InfoScreen: React.FC<InfoProps> = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.infoContainer}>
				<Text style={styles.tableTitle}>HOTEL INFO</Text>
				<View>
					<Text
						style={styles.infoTableText}
						onPress={() => {
							Alert.alert(
								'Calling the reception',
								'Are you sure?',
								[
									{
										text: 'Cancel',
										onPress: () =>
											console.log('Cancel Pressed'),
										style: 'cancel',
									},
									{
										text: 'OK',
										onPress: () =>
											Linking.openURL(
												`tel:+34 910 555 555`
											),
									},
								]
							)
						}}
					>
						Reception Phone number: +34 910 555 555
					</Text>
					<Text
						style={styles.infoTableText}
						onPress={() => {
							Alert.alert('Calling a room.', 'Are you sure?', [
								{
									text: 'Cancel',
									onPress: () =>
										console.log('Cancel Pressed'),
									style: 'cancel',
								},
								{
									text: 'OK',
									onPress: () =>
										Linking.openURL(`tel:+34 910 555 556`),
								},
							])
						}}
					>
						ROOM Phone NUMBER: +34 910 555 556 #EXT (Room number)
					</Text>
					<Text
						style={styles.infoTableText}
						onPress={() => {
							Alert.alert(
								'Calling the 24H Helpline',
								'Are you sure?',
								[
									{
										text: 'Cancel',
										onPress: () =>
											console.log('Cancel Pressed'),
										style: 'cancel',
									},
									{
										text: 'OK',
										onPress: () =>
											Linking.openURL(
												`tel:+34 912 555 555`
											),
									},
								]
							)
						}}
					>
						24H HELPLINE: +34 912 555 555
					</Text>
					<Text
						style={styles.infoTableText}
						onPress={() => {
							Alert.alert('Open maps', 'Are you sure?', [
								{
									text: 'Cancel',
									onPress: () =>
										console.log('Cancel Pressed'),
									style: 'cancel',
								},
								{
									text: 'OK',
									onPress: () =>
										Linking.openURL(
											`https://www.google.com/maps/search/?api=1&query=CALLE+DE+LA+PRINCESA,+31.+Madrid+28008`
										),
								},
							])
						}}
					>
						Address: CALLE DE LA PRINCESA, 31. Madrid 28008
					</Text>
					<Text
						style={styles.infoTableText}
						onPress={() => {
							Alert.alert('Calling emergency', 'Are you sure?', [
								{
									text: 'Cancel',
									onPress: () =>
										console.log('Cancel Pressed'),
									style: 'cancel',
								},
								{
									text: 'OK',
									onPress: () => Linking.openURL(`tel:112`),
								},
							])
						}}
					>
						EMERGENCY NUMBER: 112
					</Text>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default InfoScreen
