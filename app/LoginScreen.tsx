import {
	View,
	Text,
	TextInput,
	Pressable,
	KeyboardAvoidingView,
	Platform,
	Alert,
	ActivityIndicator,
} from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { styles } from '../styles/styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LoginProps } from '../interfaces/NavigationInterfaces'

const LoginScreen: FC<LoginProps> = ({ navigation }) => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [loading, setLoading] = useState<boolean>(false)

	type ILogin = {
		email: string
		password: string
	}

	const loginUser = async (data: ILogin) => {
		setLoading(true)
		try {
			const response = await fetch(
				`https://i19d9hr144.execute-api.eu-west-1.amazonaws.com/login`,
				{
					method: 'POST',
					mode: 'cors',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						email: data.email,
						password: data.password,
					}),
				}
			)
			if (!response.ok) {
				Alert.alert('Email or password incorrect')
				setLoading(false)
				throw new Error(`Status ${response.status}`)
			} else {
				const data = await response.json()
				await AsyncStorage.setItem('token', data.token)
				await AsyncStorage.setItem(
					'userData',
					JSON.stringify({
						name: data.payload.userInfo.name,
						email: data.payload.userInfo.email,
						photo: data.payload.userInfo.photo,
					})
				)
				navigation.navigate('Home')
				setLoading(false)
				return data
			}
		} catch (error) {
			console.error('An error occurred during login:', error)
			throw new Error('Login failed. Please try again.')
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.loginContainer}>
				<KeyboardAvoidingView
					behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
				>
					<Text style={styles.tableTitle}>Login</Text>
					{loading ? (
						<ActivityIndicator size='large' color='#BEAD8E' />
					) : null}

					<View>
						<Text nativeID='inputEmail' style={styles.inputLabel}>
							Email:
						</Text>
						<TextInput
							style={styles.inputStyle}
							onChangeText={setEmail}
							value={email}
							placeholder='E.g: myemail@gmail.com'
							placeholderTextColor='#a5a4a4'
							accessibilityLabel='input'
							accessibilityLabelledBy='inputEmail'
							keyboardType='email-address'
							textContentType='emailAddress'
							autoComplete='email'
							autoFocus
							autoCapitalize='none'
							autoCorrect={false}
						/>
					</View>
					<View>
						<Text
							nativeID='inputPassword'
							style={styles.inputLabel}
						>
							Password:
						</Text>
						<TextInput
							style={styles.inputStyle}
							onChangeText={setPassword}
							value={password}
							secureTextEntry={true}
							placeholder='E.g: 1234567890'
							placeholderTextColor='#a5a4a4'
							accessibilityLabel='input'
							accessibilityLabelledBy='inputPassword'
							textContentType='password'
							autoCapitalize='none'
						/>
					</View>
				</KeyboardAvoidingView>
			</View>
			<Pressable
				onPress={() => {
					loginUser({ email: email, password: password })
				}}
				style={
					!(email.length >= 5 && password.length >= 5)
						? styles.buttonDisabled
						: styles.buttonStyle
				}
				disabled={
					!(email.length >= 5 && password.length >= 5) ? true : false
				}
			>
				<Text style={styles.buttonText}>Login</Text>
			</Pressable>
		</SafeAreaView>
	)
}

export default LoginScreen
