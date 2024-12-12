import React from 'react'
import { ActivityIndicator } from 'react-native'

import Icon from '@components/Icon'

import { ButtonContainer, GradientView, Text, RightButton } from './styles'
import colors from '@assets/colors'

export interface ButtonProps {
    text: string
    onPress: () => void
    color?: string
    enabled?: boolean
    isLoading?: boolean
    marginTop?: number
    marginBottom?: number
    backgroundColor?: string
    iconRightName?: string
    borderRadius?: number
    borderColor?: string
    borderWidth?: number
}

const ButtonComponent = (props: ButtonProps) => {
    const {
        text, enabled = true, color = 'white', isLoading = false, onPress = null,
        marginTop = 0, marginBottom = 0,
        backgroundColor = null, iconRightName = null,
        borderRadius = 16, borderColor = colors.TRANSPARENT, borderWidth = 0,
    } = props
    return (
        <ButtonContainer
            marginTop={marginTop}
            marginBottom={marginBottom}
            disabled={!enabled || isLoading}
            onPress={onPress}
            borderRadius={borderRadius}
            borderColor={borderColor}
            borderWidth={borderWidth}
        >
            <GradientView enabled={enabled} backgroundColor={backgroundColor}>
                {isLoading ?
                    <ActivityIndicator color={'white'} /> :
                    <Text color={color}>{text}</Text>
                }
                {iconRightName &&
                    <RightButton>
                        <Icon name='arrowRightWithCircle' width={52} height={52}/>
                    </RightButton>
                }
            </GradientView>
        </ButtonContainer>
    )
}

export default ButtonComponent