import React from 'react'
import SvgIcon from 'react-native-svg-icon'

import svgs, { IconName } from './svgs'

import { Pressable } from './style'

export interface IconProps {
    name: IconName
    width?: number | string
    height?: number | string
    fill?: string
    fillRule?: string
    stroke?: string
    strokeWidth?: number | string
    style?: object
    viewBox?: string
    isPressable?: boolean
    onPress?: () => void
}

const Icon = (props: IconProps) => {
    const { style = {}, isPressable = false, onPress = () => { }, ...propsWithoutStyle } = props

    return (
        <Pressable disabled={!isPressable} onPress={() => onPress()} style={style}>
            <SvgIcon {...propsWithoutStyle} svgs={svgs} />
        </Pressable>
    )
}

export default Icon;
