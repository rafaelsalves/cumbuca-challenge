import React, { Fragment } from 'react'

import colors from '@assets/colors'

import { Modal, WrapperActivityIndicator, ActivityIndicator } from './styles'

export interface LoadingProps {
    color?: string
    size?: 'small' | 'large'
    isVisible: boolean
    bgColor?: string
    isFullScreen?: boolean
}

const Loading = (props: LoadingProps) => {
    const {
        bgColor = colors.BACKGROUND_COLOR,
        isVisible = false,
        size = 'large',
        color = 'gray',
        isFullScreen = false,
    } = props

    const LoadingView = ({ children }) =>
        isFullScreen ? (
            <Modal visible={isVisible}>{children}</Modal>
        ) : (
            <Fragment>{children}</Fragment>
        )

    return (
        isVisible && (
            <LoadingView>
                <WrapperActivityIndicator bgColor={bgColor}>
                    <ActivityIndicator size={size} color={color} />
                </WrapperActivityIndicator>
            </LoadingView>
        )
    )
}

export default Loading
