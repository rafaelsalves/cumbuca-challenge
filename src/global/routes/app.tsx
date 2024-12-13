import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import {
	createStackNavigator,
} from '@react-navigation/stack'
import React from 'react'

import colors from '@assets/colors'
import PathRoutes from '@routes/PathRoutes'

import NewProduct from '@screens/main/logged/newProduct'
import ProductsManager from '@screens/main/logged/productsManager'
import Settings from '@screens/main/logged/settings'
import SignIn from '@screens/main/signIn/login'
import SignUp from '@screens/main/signUp'

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
					component={SignUp}
					options={{
						headerBackTitle: ' ',
						title: '',
						headerTransparent: true,
						headerTintColor: colors.BLUE,
					}}
				/>
				<Stack.Screen
					name={PathRoutes.PRODUCT_MANAGER}
					component={ProductsManager}
					options={{
						headerBackTitle: ' ',
						headerLeft: () => null,
						gestureEnabled: false,
						title: 'PRODUTOS',
						headerTintColor: colors.BLUE,
					}}
				/>
				<Stack.Screen
					name={PathRoutes.NEW_PRODUCT}
					component={NewProduct}
					options={{
						headerBackTitle: ' ',
						title: 'CADASTRO DE PRODUTO',
						headerTintColor: colors.BLUE,
					}}
				/>
				<Stack.Screen
					name={PathRoutes.SETTINGS}
					component={Settings}
					options={{
						headerBackTitle: ' ',
						title: 'CONFIGURAÇOES',
						headerTintColor: colors.BLUE,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
