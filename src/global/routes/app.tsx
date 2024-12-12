import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import {
	TransitionPresets,
	createStackNavigator,
} from '@react-navigation/stack'

import PathRoutes from '@routes/PathRoutes'
import colors from '@assets/colors'

import SignIn from '@screens/main/signIn/login'
import EmailCollection from '@screens/main/signUp'

const Stack = createStackNavigator()

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: colors.BACKGROUND_COLOR
	}
}

const App = () => {
	return (
		<NavigationContainer theme={theme}>
			<Stack.Navigator
				initialRouteName={PathRoutes.SIGN_IN}
				screenOptions={{
					headerMode: 'screen'
				}}
			>
				<Stack.Screen
					name={PathRoutes.SIGN_IN}
					component={SignIn}
					options={{
						headerBackTitle: ' ',
						title: '',
						headerTransparent: true,
						headerTintColor: colors.BLUE
					}}
				/>
				<Stack.Screen
					name={PathRoutes.SIGN_UP}
					component={EmailCollection}
					options={{
						headerBackTitle: ' ',
						title: '',
						headerTransparent: true,
						headerTintColor: colors.BLUE,
					}}
				/>
				<Stack.Screen
					name={PathRoutes.SIGN_UP_EMAIL_COLLECTION}
					component={EmailCollection}
					options={{
						headerBackTitle: ' ',
						title: '',
						headerTransparent: true,
						headerTintColor: colors.BLUE,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
