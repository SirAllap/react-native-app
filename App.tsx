import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { StatusBar } from 'react-native'
import HomeScreen from './app/HomeScreen'
import InfoScreen from './app/InfoScreen'
import { RootStackParamList } from './interfaces/NavigationInterfaces'

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
	return (
		<NavigationContainer>
			<StatusBar backgroundColor='#222222' barStyle='default' />
			<Stack.Navigator>
				<Stack.Screen
					name='Home'
					component={HomeScreen}
					options={{ title: 'Welcome' }}
				/>
				<Stack.Screen
					name='InfoScreen'
					component={InfoScreen}
					options={{ title: 'Info' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
