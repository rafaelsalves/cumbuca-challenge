import React from 'react'

import colors from '@assets/colors'

import { Text } from './style'
import { TextProps } from 'react-native'

type TextComponentProps = TextProps & {
    children: React.ReactNode | undefined
    color?: string
    fontSize?: number
    fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number
    textAlign?: 'center' | 'left' | 'right'
    marginTop?: number
    marginBottom?: number
    marginLeft?: number
    marginRight?: number
    underline?: boolean
}

const TextComponent = (props: TextComponentProps) => {
    const {
        children,
        color = colors.TEXT_COLOR,
        fontSize = 14,
        fontWeight = 'normal',
        textAlign = 'center',
        marginBottom = 0,
        marginTop = 0,
        marginLeft = 0,
        marginRight = 0,
        underline = false
    } = props

    return (
        <Text
            {...props}
            fontSize={fontSize}
            underline={underline}
            fontWeight={fontWeight}
            textAlign={textAlign}
            marginTop={marginTop}
            marginBottom={marginBottom}
            marginLeft={marginLeft}
            marginRight={marginRight}
            color={color}>
            {children}
        </Text>
    )
}

export default TextComponent
