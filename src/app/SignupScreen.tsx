import {
	View,
	Text,
	TextInput,
	Pressable,
	KeyboardAvoidingView,
	ActivityIndicator,
	TouchableOpacity,
	Keyboard,
	Alert,
} from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { styles } from '../../styles/styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LoginProps } from '../interfaces/NavigationInterfaces'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import Animated, { FadeInDown } from 'react-native-reanimated'

const SignupScreen: FC<LoginProps> = ({ navigation }) => {
	const dispatch = useAppDispatch()
	const [fullName, setFullName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [repeatedPassword, setRepeatedPassword] = useState<string>('')
	const [message, setMessage] = useState<string>('')
	const [loading, setLoading] = useState<boolean>(false)
	const [keyboardStatus, setKeyboardStatus] = useState<string>('hided')

	const createUser = () => {
		// dispatch(
		// 	createNewUser({
		// 		fullName: fullName,
		// 		email: email,
		// 		password: password,
		// 	})
		// )
		Alert.alert('credential correct')
	}

	const validate = () => {
		if (password !== repeatedPassword) {
			setMessage('Passwords do not match')
			return false
		} else {
			setMessage('')
			return createUser()
		}
	}

	Keyboard.addListener('keyboardDidShow', () => {
		setKeyboardStatus('shown')
	})

	Keyboard.addListener('keyboardDidHide', () => {
		setKeyboardStatus('hided')
	})

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.loginContainer}>
				<KeyboardAvoidingView behavior='padding'>
					<Animated.View
						entering={FadeInDown.duration(1000).springify()}
						style={{ height: 100 }}
					>
						<Text style={styles.tableTitle}>Sign Up</Text>
					</Animated.View>
					{loading ? (
						<ActivityIndicator size='large' color='#BEAD8E' />
					) : (
						<View style={{ gap: 20 }}>
							<Animated.View
								entering={FadeInDown.delay(200)
									.duration(1000)
									.springify()}
							>
								<Text
									nativeID='inputName'
									style={styles.inputLabel}
								>
									Full name:
								</Text>
								<TextInput
									style={styles.inputStyle}
									onChangeText={setFullName}
									value={fullName}
									placeholder='E.g: David Pallarés Robaina'
									placeholderTextColor='#a5a4a4'
									accessibilityLabel='input'
									accessibilityLabelledBy='inputName'
									keyboardType='default'
									textContentType='name'
									autoComplete='name'
									autoCorrect={false}
								/>
							</Animated.View>
							<Animated.View
								entering={FadeInDown.delay(200)
									.duration(1000)
									.springify()}
							>
								<Text
									nativeID='inputEmail'
									style={styles.inputLabel}
								>
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
									autoCapitalize='none'
									autoCorrect={false}
								/>
							</Animated.View>
							<Animated.View
								entering={FadeInDown.delay(400)
									.duration(1000)
									.springify()}
							>
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
							</Animated.View>
							<Animated.View
								entering={FadeInDown.delay(400)
									.duration(1000)
									.springify()}
							>
								<Text
									nativeID='inputPassword'
									style={styles.inputLabel}
								>
									Repeat password:
								</Text>
								<TextInput
									style={styles.inputStyle}
									onChangeText={setRepeatedPassword}
									value={repeatedPassword}
									secureTextEntry={true}
									placeholder='E.g: 1234567890'
									placeholderTextColor='#a5a4a4'
									accessibilityLabel='input'
									accessibilityLabelledBy='inputPassword'
									textContentType='password'
									autoCapitalize='none'
								/>
							</Animated.View>
							<Text
								style={{
									color: 'red',
									fontSize: 20,
									fontWeight: 'bold',
								}}
							>
								{message}
							</Text>
							<Animated.View
								entering={FadeInDown.delay(600)
									.duration(1000)
									.springify()}
								style={{
									flexDirection: 'row',
									alignItems: 'center',
								}}
							>
								<Text
									style={{
										color: 'white',
									}}
								>
									Already have an account?{' '}
								</Text>
								<TouchableOpacity
									onPress={() => {
										navigation.push('Login', {
											email: email,
											password: password,
										})
									}}
								>
									<Text
										style={{
											color: '#BEAD8E',
											fontWeight: 'bold',
										}}
									>
										Log In
									</Text>
								</TouchableOpacity>
							</Animated.View>
						</View>
					)}
				</KeyboardAvoidingView>
			</View>
			<Pressable
				onPress={validate}
				style={
					keyboardStatus === 'shown'
						? styles.buttonNone
						: !(email.length >= 5 && password.length >= 5)
						? styles.buttonDisabled
						: styles.buttonStyle
				}
				disabled={
					!(email.length >= 5 && password.length >= 5) ? true : false
				}
			>
				<Text style={styles.buttonText}>Sign Up</Text>
			</Pressable>
		</SafeAreaView>
	)
}

export default SignupScreen
