import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#222222',
		alignItems: 'center',
	},
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 100,
		width: '100%',
		backgroundColor: 'white',
	},
	navMenu: {
		padding: 20,
	},
	navText: {
		color: 'white',
		fontSize: 20,
	},
	bodyContainer: {
		flex: 1,
		alignContent: 'center',
		justifyContent: 'center',
		height: 100,
		width: '90%',
	},
	text: {
		color: 'red',
		alignSelf: 'center',
	},
	inputStyle: {
		color: '#a4a4a4',
		paddingTop: 16,
		paddingBottom: 16,
		borderWidth: 1,
		borderStyle: 'solid',
		borderBottomColor: '#BEAD8E',
		borderTopColor: 'transparent',
		borderLeftColor: 'transparent',
		borderRightColor: 'transparent',
		fontSize: 19,
	},
	inputLabel: {
		color: 'white',
		fontSize: 22,
	},
	buttonStyle: {
		position: 'absolute',
		bottom: 5,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 32,
		width: '100%',
		borderRadius: 5,
		backgroundColor: '#BEAD8E',
		color: 'white',
	},
	buttonText: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'white',
	},
	imageStyle: {
		width: 120,
		height: 35,
		resizeMode: 'contain',
	},
})
