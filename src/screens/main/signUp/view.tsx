import { Keyboard, TouchableWithoutFeedback } from 'react-native'

import TextComponent from '@components/TextComponent'
import TextInputComponent from '@components/TextInputComponent'
import ButtonComponent from '@components/ButtonComponent'
import SpaceView from '@components/SpaceView'
import Loading from '@components/Loading'

import { isEmpty } from '@helpers/functions'

import { Container, InputView, InputWrapper } from './style'

const SignUpView = (props) => {
    const {
        isLoading,
        cpf, errorCpf, onChangeCPF,
        password, errorPassword, onChangePassword,
        onBlur,
        onPressCreateAccount,
    } = props
    const isEnabledCreate =
        !isEmpty(cpf) &&
        isEmpty(errorCpf) &&
        !isEmpty(password) &&
        isEmpty(errorPassword)

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Container>
                <InputView>
                    <TextComponent fontWeight={'bold'} fontSize={16} textAlign='left'>Faça seu cadastro{`\n`}para ter acesso a plataforma</TextComponent>
                    <TextComponent marginTop={6} marginBottom={30} fontSize={12} textAlign='left'>Precisamos apenas do seu cpf{`\n`}e uma senha de no mínimo 8 caracteres</TextComponent>
                    <InputWrapper>
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
                            placeholder='Insira uma senha'
                            placeholderTextColor='gray'
                            error={errorPassword}
                            secureTextEntry={true}
                            onBlur={() => onBlur(password, 'password')}
                        />
                        <TextInputComponent
                            title={'CONFIRMAR SENHA'}
                            value={password}
                            onChangeText={(text) => onChangePassword(text)}
                            placeholder='Repita a senha para confirmar'
                            placeholderTextColor='gray'
                            error={errorPassword}
                            secureTextEntry={true}
                            onBlur={() => onBlur(password, 'password')}
                        />
                    </InputWrapper>
                    <ButtonComponent
                        text='Enviar'
                        enabled={isEnabledCreate}
                        onPress={() => onPressCreateAccount(cpf, password)}
                    />
                </InputView>
                <SpaceView flex />
                <Loading isVisible={isLoading} />
            </Container>
        </TouchableWithoutFeedback>
    )
}

export default SignUpView