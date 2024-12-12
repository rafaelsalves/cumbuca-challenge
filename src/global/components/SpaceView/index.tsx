import React from 'react'

import { SpaceContainer, SpaceFlex } from './style'

type Props = {
    vertical?: number
    horizontal?: number
    flex?: boolean
}
const SpaceView = (props: Props) => {
    const { vertical = 0, horizontal = 0, flex = false } = props
    return (flex ?
        <SpaceFlex /> :
        <SpaceContainer vertical={vertical} horizontal={horizontal} />
    )
}

export default SpaceView