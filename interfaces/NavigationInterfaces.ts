import {
	NativeStackNavigationProp,
	NativeStackScreenProps,
} from '@react-navigation/native-stack'

export type RootStackParamList = {
	Home: undefined
	CheckInScreen: { checkInRef: string }
	InfoScreen: undefined
}

export type HomeProps = {
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
