import { Platform, StyleSheet } from 'react-native'

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
	homeContainer: {
		flex: 1,
		alignContent: 'center',
		justifyContent: 'center',
		gap: 50,
		height: 100,
		width: '90%',
	},
	loginContainer: {
		flex: 1,
		alignContent: 'center',
		justifyContent: 'center',
		gap: 30,
		height: 100,
		width: '90%',
	},
	text: {
		color: 'white',
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
	userWelcome: {
		color: 'white',
		fontSize: 22,
	},
	buttonStyle: {
		position: 'absolute',
		bottom: Platform.OS == 'ios' ? 25 : 10,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 32,
		width: '95%',
		borderRadius: Platform.OS == 'ios' ? 40 : 5,
		backgroundColor: '#BEAD8E',
	},
	buttonStyleLongPress: {
		position: 'absolute',
		bottom: Platform.OS == 'ios' ? 25 : 10,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 32,
		width: '95%',
		borderRadius: Platform.OS == 'ios' ? 40 : 5,
		backgroundColor: '#BEAD8E70',
	},
	buttonDisabled: {
		position: 'absolute',
		bottom: Platform.OS == 'ios' ? 25 : 10,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 32,
		width: '95%',
		borderRadius: Platform.OS == 'ios' ? 40 : 5,
		backgroundColor: 'gray',
		opacity: 0.5,
	},
	buttonText: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'white',
		textTransform: 'uppercase',
	},
	imageStyle: {
		width: 120,
		height: 45,
		resizeMode: 'contain',
	},
	infoContainer: {
		flex: 1,
		alignContent: 'center',
		justifyContent: 'center',
		gap: 30,
		width: '90%',
	},
	tableTitle: {
		color: 'white',
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center',
		textTransform: 'uppercase',
	},
	tableTitleNone: {
		display: 'none',
	},
	tableTextTitle: {
		color: '#222222',
		fontWeight: 'bold',
		backgroundColor: 'white',
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: 'white',
		width: '100%',
		padding: 10,
		textAlign: 'center',
		fontSize: 20,
	},
	tableText: {
		color: 'white',
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: 'white',
		width: '100%',
		padding: 10,
		textAlign: 'center',
		fontSize: 15,
	},
	infoTableText: {
		color: 'white',
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: 'white',
		width: '100%',
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 5,
		paddingRight: 5,
		textAlign: 'center',
		fontSize: 14,
	},
})
