import React from 'react'
import {
	SafeAreaView,
	Text,
	View,
	Image,
	Button,
	TextInput,
	Pressable,
} from 'react-native'
import { HomeProps } from '../interfaces/NavigationInterfaces'
import { styles } from '../styles/styles'

const HomeScreen: React.FC<HomeProps> = ({ navigation }) => {
	const [refNumber, setRefNumber] = React.useState<string>('')

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
					placeholder='0000'
					placeholderTextColor='#a5a4a4'
					maxLength={4}
					accessibilityLabel='input'
					accessibilityLabelledBy='inputRefNum'
				/>
				<Pressable
					onPress={() =>
						navigation.navigate('CheckInScreen', {
							checkInRef: refNumber,
						})
					}
					style={
						refNumber.length !== 4
							? styles.buttonDisabled
							: styles.buttonStyle
					}
					disabled={refNumber.length !== 4 ? true : false}
				>
					<Text style={styles.buttonText}>CHECK IN</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	)
}

export default HomeScreen
