import React from 'react'
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Image,
	Button,
} from 'react-native'
import { HomeProps } from '../interfaces/NavigationInterfaces'
import { styles } from '../styles/styles'

const HomeScreen: React.FC<HomeProps> = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerContainer}>
				<Image
					source={require('../assets/miranda_logo.png')}
					style={{
						width: 170,
						height: 100,
						resizeMode: 'contain',
					}}
				/>
				<Text style={styles.text}>
					Open up App.js to start working on your Application!
				</Text>
				<Button
					title='CHECK IN'
					onPress={() =>
						navigation.navigate('InfoScreen', { name: 'David' })
					}
					color='rebeccapurple'
					disabled={false}
				/>
			</View>
		</SafeAreaView>
	)
}

export default HomeScreen
