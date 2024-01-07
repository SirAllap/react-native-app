import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
	Alert,
	Button,
	Platform,
	StatusBar,
	Text,
	TouchableHighlight,
} from 'react-native'
import HomeScreen from './app/HomeScreen'
import InfoScreen from './app/InfoScreen'
import CheckInScreen from './app/CheckInScreen'
import { RootStackParamList } from './interfaces/NavigationInterfaces'
import Header from './components/Logo'
import LoginScreen from './app/LoginScreen'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useAppSelector } from './store/hooks'
import { initialLoginState } from './features/login/loginSlice'
import { useDispatch } from 'react-redux'
import SignupScreen from './app/SignupScreen'

const Stack = createNativeStackNavigator<RootStackParamList>()

const Navigation = () => {
	const loginInitialState = useAppSelector(initialLoginState)
	const dispatch = useDispatch()
	const [logged, setlogged] = useState<boolean>(false)

	useEffect(() => {
		if (loginInitialState === 'fulfilled') {
			setlogged(true)
		}
	}, [loginInitialState])

	return (
		<NavigationContainer>
			<StatusBar backgroundColor='#222222' barStyle='default' />
			<Stack.Navigator
				initialRouteName='Login'
				screenOptions={({ navigation }) => ({
					headerTitle: (props) => <Header />,
					headerRight: () =>
						logged ? (
							<>
								<Button
									title='Info'
									color={
										Platform.OS == 'ios'
											? 'white'
											: '#BEAD8E'
									}
									onPress={() =>
										navigation.navigate('InfoScreen')
									}
								/>
								<TouchableHighlight style={{ marginLeft: 20 }}>
									<Button
										title='Logout'
										color={
											Platform.OS == 'ios'
												? 'white'
												: '#BEAD8E'
										}
										onPress={async () => {
											await AsyncStorage.removeItem(
												'userData'
											)
											setlogged(false)
											navigation.navigate('Login')
										}}
									/>
								</TouchableHighlight>
							</>
						) : null,
					headerStyle: {
						backgroundColor: '#BEAD8E',
					},
					headerTintColor: '#fff',
					headerTitleStyle: {
						fontWeight: 'bold',
						fontSize: 20,
					},
				})}
			>
				{!logged ? (
					<>
						<Stack.Screen
							name='Login'
							component={LoginScreen}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name='SignUp'
							component={SignupScreen}
							options={{
								headerShown: false,
							}}
						/>
					</>
				) : (
					<>
						<Stack.Screen
							name='Home'
							component={HomeScreen}
							options={{ title: 'Check In' }}
						/>
						<Stack.Screen
							name='InfoScreen'
							component={InfoScreen}
							options={({ navigation }) => ({
								title: 'Info',
								headerRight: () => (
									<>
										<Button
											title='Home'
											color='#BEAD8E'
											onPress={() =>
												navigation.navigate('Home')
											}
										/>
										<TouchableHighlight
											style={{ marginLeft: 20 }}
										>
											<Button
												title='Logout'
												color={
													Platform.OS == 'ios'
														? 'white'
														: '#BEAD8E'
												}
												onPress={async () => {
													await AsyncStorage.removeItem(
														'userData'
													)
													setlogged(false)
													navigation.navigate('Login')
												}}
											/>
										</TouchableHighlight>
									</>
								),
							})}
						/>
						<Stack.Screen
							name='CheckInScreen'
							component={CheckInScreen}
							options={{ title: 'Check In' }}
						/>
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigation
