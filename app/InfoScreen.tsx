import { SafeAreaView, StyleSheet, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { InfoProps } from '../interfaces/NavigationInterfaces'
import { styles } from '../styles/styles'

const Stack = createNativeStackNavigator()

const InfoScreen: React.FC<InfoProps> = ({ route }) => {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.text}>{route.params.name}</Text>
		</SafeAreaView>
	)
}

export default InfoScreen
