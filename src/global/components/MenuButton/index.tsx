import React from 'react'

import Icon from '@components/Icon'

import colors from '@assets/colors'

import { Container, ButtonMenu } from './style'

type Props = {
    onPress: () => void
    marginRight?: number
    iconName?: string
}
const MenuButton = (props:Props) => {
    const { marginRight = 0, iconName = 'menu', onPress } = props

    return (
        <ButtonMenu style={{ marginRight }} onPress={onPress}>
            <Container>
                <Icon name={iconName} width={26} height={26} fill={colors.BUTTON_COLOR} />
            </Container>
        </ButtonMenu>
    )
}

export default MenuButton