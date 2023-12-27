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
			{/* <View style={styles.headerContainer}>
				<Image
					source={require('../assets/miranda_logo.png')}
					style={styles.imageStyle}
				/>
				<Pressable
					onPress={() => navigation.navigate('InfoScreen')}
					style={styles.navMenu}
				>
					<Text>Info</Text>
				</Pressable>
			</View> */}

			<View style={styles.bodyContainer}>
				<Text style={styles.inputLabel}>Booking reference number:</Text>
				<TextInput
					style={styles.inputStyle}
					keyboardType='numeric'
					onChangeText={setRefNumber}
					placeholder='0000'
					placeholderTextColor='#a5a4a4'
					value={refNumber}
					maxLength={4}
				/>
				<Pressable
					onPress={() =>
						navigation.navigate('CheckInScreen', {
							checkInRef: refNumber,
						})
					}
					style={styles.buttonStyle}
				>
					<Text style={styles.buttonText}>CHECK IN</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	)
}

export default HomeScreen
