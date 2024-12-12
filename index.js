import React from 'react'
import { AppRegistry, StatusBar } from 'react-native'
import { name as appName } from './app.json'
import Routes from '@routes/app'
import colors from '@assets/colors'

import ToastComponent from '@components/ToastComponent'

const App = () => {
	return (
		<>
			<StatusBar
				barStyle={'light-content'}
				backgroundColor={colors.BACKGROUND_COLOR}
			/>
			<Routes />
			<ToastComponent />
		</>
	)
}
AppRegistry.registerComponent(appName, () => App)
