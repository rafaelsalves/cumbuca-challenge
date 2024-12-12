import styled from 'styled-components/native'

type SpaceProps = {
    vertical: number
    horizontal: number
}
export const SpaceContainer = styled.View<SpaceProps>`
    margin-top: ${({ vertical }) => vertical}px;
    margin-bottom: ${({ vertical }) => vertical}px;
    margin-left: ${({ horizontal }) => horizontal}px;
    margin-right: ${({ horizontal }) => horizontal}px;
`

export const SpaceFlex = styled.View`
    flex: 1;
`