import { useState } from "react"

import { showToast } from "@helpers/functions"

import SignUpView from "./view"

const SignUp = (props) => {
    const navigation = props.navigation
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [isLoading, setLoading] = useState(false)

    const onChangeName = (newText: string) => {
        setName(newText)
    }

    const onChangeEmail = (newText: string) => {
        setEmail(newText)
    }

    const onPressSend = async (typedEmail: string, typedName: string) => {
        try {
            setLoading(true)
            setLoading(false)
            navigation.goBack()
            showToast({ type: 'success', message: 'Em breve entraremos em contato com você!' })
        } catch (error) {
            setLoading(false)
            showToast({ message: 'Houve um problema, tente novamente!' })
        }
    }

    const viewProps = {
        isLoading, name, email, onChangeEmail, onPressSend, onChangeName,
    }

    return <SignUpView {...viewProps} />
}

export default SignUp