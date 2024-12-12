import { fontFamily } from '@helpers/constants'
import React from 'react'
import { StyleSheet } from 'react-native'
import Toast, { BaseToast } from 'react-native-toast-message'

const icons = {
    success: require('./assets/success/success.png'),
    error: require('./assets/error/error.png'),
    info: require('./assets/info/info.png'),
}

const iconColor = {
    success: '#69C779',
    error: '#FE6301',
    info: '#FAD787',
}

const ToastView = (props) => {
    const { style = {} } = props.props
    return (
        <BaseToast
            {...props}
            style={{ borderLeftColor: iconColor[props.type], ...style }}
            contentContainerStyle={styles.contentContainerStyle}
            text1Style={styles.text1Style}
            text2Style={styles.text2Style}
            text2NumberOfLines={6}
            leadingIcon={icons[props.type]}
            leadingIconStyle={{ tintColor: iconColor[props.type], ...styles.leadingIconStyle }}
            onTrailingIconPress={() => Toast.hide()}
        />)
}

export default ToastView

const styles = StyleSheet.create({
    contentContainerStyle: {
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    text1Style: {
        fontFamily, fontSize: 12, color: 'gray',
    },
    text2Style: {
        fontFamily, fontSize: 12
    },
    leadingIconStyle: {
        width: 25, height: 25
    }
})