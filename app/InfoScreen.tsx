import { SafeAreaView, Text } from 'react-native'
import React from 'react'
import { InfoProps } from '../interfaces/NavigationInterfaces'
import { styles } from '../styles/styles'

const InfoScreen: React.FC<InfoProps> = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.text}>This is the info section!</Text>
		</SafeAreaView>
	)
}

export default InfoScreen
