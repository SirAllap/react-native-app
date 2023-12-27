import {
	NativeStackNavigationProp,
	NativeStackScreenProps,
} from '@react-navigation/native-stack'

export type RootStackParamList = {
	InfoScreen: { name: string }
	Home: undefined
}

export type HomeProps = {
	navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>
}

export type InfoProps = NativeStackScreenProps<RootStackParamList, 'InfoScreen'>
