import React, { useState } from 'react'
import { MaskService } from 'react-native-masked-text'
import { useNavigation } from '@react-navigation/native'

import LoginView from './view'

import { isEmpty, isValidCPF } from '@helpers/functions'
import PathRoutes from '@routes/PathRoutes'
import storage from '@services/storage'

const LoginScreen = () => {
    const [cpf, setCpf] = useState('')
    const [errorCpf, setErrorCpf] = useState('')
    const [password, setPassword] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [isLoading, setLoading] = useState(false)

    const navigation = useNavigation()

    const onChangeCPF = (text: string) => {
        setErrorCpf('')
        setCpf(MaskService.toMask('cpf', text, {}))
    }

    const onChangePassword = (text) => {
        setErrorPassword('')
        setPassword(text)
    }

    const onBlur = (text, field) => {
        switch (field) {
            case 'cpf':
                if (isEmpty(text)) {
                    setErrorCpf('INFORME SEU CPF')
                }
                else if (!isValidCPF(text)) {
                    setErrorCpf('CPF INVÁLIDO')
                } else {
                    setErrorCpf('')
                }
                break

            case 'password':
                setErrorPassword(text.length < 8 ? 'SUA SENHA DEVE TER NO MÍNIMO 8 CARACTERES' : '')
                break

            default:
                break
        }
    }

    const onPressLogin = async (typedCpf, typedPassword) => {
        try {
            setLoading(true)

            navigation.navigate(PathRoutes.LOGGED)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    const onPressCreateAccount = () => {
        navigation.navigate(PathRoutes.SIGN_UP)
    }

    const viewProps = {
        isLoading,
        cpf, errorCpf, onChangeCPF,
        password, errorPassword, onChangePassword,
        onBlur,
        onPressLogin,
        onPressCreateAccount,
    }

    return (
        <LoginView {...viewProps} />
    )
}

export default LoginScreen