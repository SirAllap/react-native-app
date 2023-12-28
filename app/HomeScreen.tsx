import React, { FC, useState } from 'react'
import { SafeAreaView, Text, View, TextInput, Pressable } from 'react-native'
import { HomeProps } from '../interfaces/NavigationInterfaces'
import { styles } from '../styles/styles'

const HomeScreen: FC<HomeProps> = ({ navigation }) => {
	const [refNumber, setRefNumber] = useState<string>('')

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.bodyContainer}>
				<Text nativeID='inputRefNum' style={styles.inputLabel}>
					Booking reference number:
				</Text>
				<TextInput
					style={styles.inputStyle}
					keyboardType='numeric'
					onChangeText={setRefNumber}
					value={refNumber}
					placeholder='0000'
					placeholderTextColor='#a5a4a4'
					maxLength={4}
					accessibilityLabel='input'
					accessibilityLabelledBy='inputRefNum'
				/>
			</View>
			<Pressable
				onPress={() => {
					navigation.navigate('CheckInScreen', {
						checkInRef: refNumber,
					})
					setRefNumber('')
				}}
				style={
					refNumber.length !== 4
						? styles.buttonDisabled
						: styles.buttonStyle
				}
				disabled={refNumber.length !== 4 ? true : false}
			>
				<Text style={styles.buttonText}>Check</Text>
			</Pressable>
		</SafeAreaView>
	)
}

export default HomeScreen
