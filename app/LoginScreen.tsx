import {
	View,
	Text,
	TextInput,
	Pressable,
	KeyboardAvoidingView,
	Platform,
	ActivityIndicator,
	Alert,
} from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { styles } from '../styles/styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LoginProps } from '../interfaces/NavigationInterfaces'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import {
	initialLoginState,
	selectLoginInfo,
} from '../features/login/loginSlice'
import { userLogin } from '../features/login/loginThunks'

const LoginScreen: FC<LoginProps> = ({ navigation }) => {
	const dispatch = useAppDispatch()
	const loginInitialState = useAppSelector(initialLoginState)
	const loginInfo = useAppSelector(selectLoginInfo)
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [loading, setLoading] = useState<boolean>(false)

	useEffect(() => {
		if (loginInitialState === 'rejected') {
			setLoading(false)
		}
		if (loginInitialState === 'pending') {
			setLoading(true)
		}
		if (loginInitialState === 'fulfilled') {
			navigation.navigate('Home')
			setLoading(false)
		}
	}, [loginInitialState])

	const authUser = async () => {
		dispatch(userLogin({ email: email, password: password }))
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
					authUser()
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
