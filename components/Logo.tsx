import React from 'react'
import { Image } from 'react-native'
import { styles } from '../styles/styles'
import { HeaderProps } from '../interfaces/NavigationInterfaces'

const Header = () => {
	return (
		<Image
			source={require('../assets/miranda_logo.png')}
			style={styles.imageStyle}
		/>
	)
}

export default Header
