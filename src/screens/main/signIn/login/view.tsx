import React from 'react'
import { TouchableWithoutFeedback, Keyboard, StatusBar } from 'react-native'

import { isEmpty } from '@helpers/functions'
import colors from '@assets/colors'

import ButtonComponent from '@components/ButtonComponent'
import SpaceView from '@components/SpaceView'
import TextInputComponent from '@components/TextInputComponent'
import TextComponent from '@components/TextComponent'

import {
	KeyboardAvoidingView,
	ContentView,
	WrapperData,
	FlexView,
	CreateAccountButton,
} from './style'

const LoginView = (props) => {
	const {
		isLoading,
		cpf, errorCpf, onChangeCPF,
		password, errorPassword, onChangePassword,
		onBlur,
		onPressLogin,
		onPressCreateAccount,
	} = props

	const isEnableLogin =
		!isEmpty(cpf) &&
		isEmpty(errorCpf) &&
		!isEmpty(password) &&
		isEmpty(errorPassword)

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<KeyboardAvoidingView>
				<StatusBar barStyle={'dark-content'} backgroundColor={colors.BACKGROUND_COLOR} />
				<SpaceView vertical={30} />
				<ContentView>
					<WrapperData>
						<TextInputComponent
							title={'CPF'}
							value={cpf}
							onChangeText={(text) => onChangeCPF(text)}
							placeholder='Digite seu cpf'
							placeholderTextColor='gray'
							error={errorCpf}
							keyboardType='number-pad'
							onBlur={() => onBlur(cpf, 'cpf')}
						/>
						<TextInputComponent
							title={'SENHA'}
							value={password}
							onChangeText={(text) => onChangePassword(text)}
							placeholder='Insira sua senha'
							placeholderTextColor='gray'
							error={errorPassword}
							secureTextEntry={true}
							onBlur={() => onBlur(password, 'password')}
						/>
						<SpaceView vertical={20} />
						<ButtonComponent
							isLoading={isLoading}
							text={'Entrar'}
							enabled={isEnableLogin}
							onPress={() => onPressLogin(cpf, password)}
						/>
						<CreateAccountButton onPress={onPressCreateAccount}>
							<TextComponent fontWeight={500}>Não tem uma conta? <TextComponent underline fontWeight={500} color={colors.BUTTON_COLOR}>Crie uma conta</TextComponent></TextComponent>
						</CreateAccountButton>
					</WrapperData>
				</ContentView>
				<FlexView />
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	)
}

export default LoginView
