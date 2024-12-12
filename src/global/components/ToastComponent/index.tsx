import React from 'react'
import Toast from 'react-native-toast-message'
import ToastView from './ToastView'

const toastConfig = {
    success: (props) => (
        <ToastView {...props} />
    ),
    error: (props) => (
        <ToastView {...props} />
    ),
    info: (props) => (
        <ToastView {...props} />
    )
}

const ToastComponent = () => {
    return (
        <Toast config={toastConfig} />
    )
}

export default ToastComponent