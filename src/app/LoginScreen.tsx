import {
	View,
	Text,
	TextInput,
	Pressable,
	KeyboardAvoidingView,
	Platform,
	ActivityIndicator,
	Alert,
	Touchable,
	TouchableOpacity,
	Image,
} from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { styles } from '../../styles/styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LoginProps } from '../interfaces/NavigationInterfaces'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import {
	initialLoginState,
	selectLoginInfo,
} from '../features/login/loginSlice'
import { userLogin } from '../features/login/loginThunks'
import Animated, { FadeInDown } from 'react-native-reanimated'

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
					<Animated.View
						entering={FadeInDown.duration(1000).springify()}
						style={{ height: 100 }}
					>
						<Text style={styles.tableTitle}>Welcome</Text>
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
									autoFocus
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
									Don't have an account?{' '}
								</Text>
								<TouchableOpacity
									onPress={() => {
										navigation.push('SignUp')
									}}
								>
									<Text
										style={{
											color: '#BEAD8E',
											fontWeight: 'bold',
										}}
									>
										Sign Up
									</Text>
								</TouchableOpacity>
							</Animated.View>
						</View>
					)}
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
