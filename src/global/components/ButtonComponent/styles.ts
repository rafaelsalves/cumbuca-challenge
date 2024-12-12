import styled from 'styled-components/native'
import colors from '@assets/colors'
import { fontFamily } from '@helpers/constants';

interface ButtonContainerProps {
    marginTop: number
    marginBottom: number
    borderRadius?: number
    borderColor?: string
    borderWidth? : number
}
export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
    height: 50px;
    width: 100%;
    margin: 10px 0px 10px 0px;
    overflow: hidden;
    margin-top: ${({ marginTop })=> marginTop}px;
    margin-bottom: ${({ marginBottom })=> marginBottom}px;
    border-radius: ${({ borderRadius }) => borderRadius}px;
    border-color: ${({ borderColor }) => borderColor};
    border-width: ${({ borderWidth }) => borderWidth}px;
`

interface TextProps{
    color?: string
}
export const Text = styled.Text<TextProps>`
    color: ${({ color }) => color || colors.WHITE};
    font-family: ${fontFamily};
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    text-align: center;
`

export const RightButton = styled.View`
    position: absolute;
    right: 2px;
    top: 4px;
    width: 50px;
    justify-content: center;
    align-items: center;
`

interface GradientViewProps {
    enabled: boolean
    backgroundColor: string
}
export const GradientView = styled.View.attrs(({ enabled }) => ({
    opacity: enabled ? 1 : 0.5,
}))`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: ${({ backgroundColor }) => backgroundColor || colors.BUTTON_COLOR};
`

interface ViewProps {
    borderColor: string
}
export const View = styled.View<ViewProps>`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-color: ${({ borderColor }) => borderColor || 'transparent'};
    border-width: 2px;
`

export const Space = styled.View`
    width: 20px;
`