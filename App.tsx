import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Button, Pressable, StatusBar, Text } from 'react-native'
import HomeScreen from './app/HomeScreen'
import InfoScreen from './app/InfoScreen'
import CheckInScreen from './app/CheckInScreen'
import { RootStackParamList } from './interfaces/NavigationInterfaces'
import Header from './components/Logo'
import { styles } from './styles/styles'

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
	return (
		<NavigationContainer>
			<StatusBar backgroundColor='#222222' barStyle='default' />
			<Stack.Navigator
				screenOptions={({ navigation }) => ({
					headerTitle: (props) => <Header />,
					headerRight: () => (
						<Pressable
							onPress={() => navigation.navigate('InfoScreen')}
							style={styles.navMenu}
						>
							<Text style={styles.navText}>Info</Text>
						</Pressable>
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
							<Pressable
								onPress={() => navigation.navigate('Home')}
								style={styles.navMenu}
							>
								<Text style={styles.navText}>Home</Text>
							</Pressable>
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
