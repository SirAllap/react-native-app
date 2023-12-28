import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Button, Platform, Pressable, StatusBar, Text } from 'react-native'
import HomeScreen from './app/HomeScreen'
import InfoScreen from './app/InfoScreen'
import CheckInScreen from './app/CheckInScreen'
import { RootStackParamList } from './interfaces/NavigationInterfaces'
import Header from './components/Logo'
import LoginScreen from './app/LoginScreen'

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
	return (
		<NavigationContainer>
			<StatusBar backgroundColor='#222222' barStyle='default' />
			<Stack.Navigator
				initialRouteName='Login'
				screenOptions={({ navigation }) => ({
					headerTitle: (props) => <Header />,
					headerRight: () => (
						<Button
							title='Info'
							color={Platform.OS == 'ios' ? 'white' : '#BEAD8E'}
							onPress={() => navigation.navigate('InfoScreen')}
						/>
					),
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
				<Stack.Screen
					name='Login'
					component={LoginScreen}
					options={{
						title: 'Login',
						headerRight: () => null,
						headerTitleAlign: 'center',
					}}
				/>
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
							<Button
								title='Home'
								color='#BEAD8E'
								onPress={() => navigation.navigate('Home')}
							/>
						),
					})}
				/>
				<Stack.Screen
					name='CheckInScreen'
					component={CheckInScreen}
					options={{ title: 'Check In' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
