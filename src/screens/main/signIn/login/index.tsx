import React, { useState, useEffect } from 'react'
import { MaskService } from 'react-native-masked-text'
import { useNavigation } from '@react-navigation/native'
import BootSplash from 'react-native-bootsplash'
import * as Keychain from 'react-native-keychain'

import LoginView from './view'

import { isEmpty, isValidCPF, showToast } from '@helpers/functions'
import PathRoutes from '@routes/PathRoutes'
import storage from '@services/storage'

const LoginScreen = () => {
    const [cpf, setCpf] = useState('')
    const [errorCpf, setErrorCpf] = useState('')
    const [password, setPassword] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [isLoading, setLoading] = useState(false)

    const navigation = useNavigation()

    useEffect(() => {
        onLoad()
    }, [])

    const onLoad = async () => {
        try {
            const credentials = await Keychain.getGenericPassword({
                accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY_OR_DEVICE_PASSCODE,
            })

            if (credentials) {
                navigation.replace(PathRoutes.PRODUCT_MANAGER)
            } else {
                BootSplash.hide({ fade: true })
            }
        } catch (error) {
            console.log(error)
            BootSplash.hide({ fade: true })
        }
    }

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
            const login = await storage.getLogin()

            if (!isEmpty(login)) {
                if ((typedCpf != login.cpf) || (login.password != typedPassword)) {
                    showToast({ message: 'Usuário ou senha incorretos' })
                    setLoading(false)
                    return
                }

                navigation.navigate(PathRoutes.PRODUCT_MANAGER)
            }
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