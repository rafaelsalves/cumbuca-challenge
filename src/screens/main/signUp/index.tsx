import { useState } from "react"
import { MaskService } from "react-native-masked-text"

import { isEmpty, isValidCPF, showToast } from "@helpers/functions"

import SignUpView from "./view"

const SignUp = (props) => {
    const navigation = props.navigation
    const [cpf, setCpf] = useState('')
    const [errorCpf, setErrorCpf] = useState('')
    const [password, setPassword] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [isLoading, setLoading] = useState(false)

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

    const onPressCreateAccount = async (typedCpf: string, typedPassword: string) => {
        try {
            setLoading(true)
            //await Keychain.setGenericPassword(typedCpf, typedPassword)
            setLoading(false)
            navigation.goBack()
            showToast({ type: 'success', message: 'O cadastro foi realizado com sucesso!' })
        } catch (error) {
            console.log(error)
            setLoading(false)
            showToast({ message: 'Houve um problema, tente novamente!' })
        }
    }

    const viewProps = {
        isLoading,
        cpf, errorCpf, onChangeCPF,
        password, errorPassword, onChangePassword,
        onBlur,
        onPressCreateAccount
    }

    return <SignUpView {...viewProps} />
}

export default SignUp