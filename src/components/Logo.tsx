import React from 'react'
import { Image } from 'react-native'
import { styles } from '../../styles/styles'

const Header = () => {
	return (
		<Image
			source={require('../assets/miranda_logo.png')}
			style={styles.imageStyle}
		/>
	)
}

export default Header
