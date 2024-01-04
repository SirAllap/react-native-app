import {
	NativeStackNavigationProp,
	NativeStackScreenProps,
} from '@react-navigation/native-stack'

export type RootStackParamList = {
	Login: { email: string; password: string }
	Home: undefined
	CheckInScreen: {
		checkInRef: string
		checkIn: string
		checkOut: string
		roomType: string
		roomNumber: string
		roomId: string
	}
	InfoScreen: undefined
}

export type HomeProps = {
	navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>
}

export type LoginProps = {
	navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>
}

export type HeaderProps = {
	navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>
}

export type InfoProps = NativeStackScreenProps<RootStackParamList, 'InfoScreen'>

export type CheckInProps = NativeStackScreenProps<
	RootStackParamList,
	'CheckInScreen'
>
