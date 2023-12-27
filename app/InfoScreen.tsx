import { SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import { InfoProps } from '../interfaces/NavigationInterfaces'
import { styles } from '../styles/styles'

const InfoScreen: React.FC<InfoProps> = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.infoContainer}>
				<Text style={styles.tableTitle}>HOTEL INFO</Text>
				<View>
					<View>
						<Text style={styles.tableText}>
							Reception Phone number: +34 910 555 555
						</Text>
					</View>
					<View>
						<Text style={styles.tableText}>
							ROOM Phone NUMBER: +34 910 555 556 #EXT (Room
							number)
						</Text>
					</View>
					<View>
						<Text style={styles.tableText}>
							24H HELPLINE: +34 912 555 555
						</Text>
					</View>
					<View>
						<Text style={styles.tableText}>
							Address: CALLE DE LA PRINCESA, 31. Madrid 28008
						</Text>
					</View>
					<View>
						<Text style={styles.tableText}>
							EMERGENCY NUMBER: 112
						</Text>
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default InfoScreen
