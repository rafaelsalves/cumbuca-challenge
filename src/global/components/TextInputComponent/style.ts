import styled from 'styled-components/native'
import colors from '@assets/colors'
import {fontFamily} from '@helpers/constants'
import {TextInputProps} from 'react-native'

export const Container = styled.View`
    width: 100%;
    flex-direction: column;
    justify-content: center;
`

interface TitleTextProps {
    isFocused?: boolean
}
export const TitleText = styled.Text<TitleTextProps>`
    font-family: ${fontFamily};
    font-weight: bold;
    color: ${({isFocused}) =>
        isFocused ? colors.BLUE : colors.BLUE_1};
    font-size: 12px;
    margin-bottom: 4px;
    margin-left: 10px;
`

interface TextInputViewProps {
    height?: number
    isFocused: boolean
}
export const TextInputContainer = styled.View<TextInputViewProps>`
    height: ${({height}) => height}px;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    border-width: ${({isFocused}) => (isFocused ? 2 : 1)}px;
    border-color: ${({isFocused, hasError}) => hasError ? colors.RED_1 :
        isFocused ? colors.GRAY :colors.GRAY};
    border-radius: 10px;
    overflow: hidden;
    padding: 0px 0px 0px 0px;
    background: ${colors.GRAY_1};
`

export const TextInputWrapper = styled.TextInput<TextInputProps>`
    flex: 1;
    color: ${colors.BLACK};
    font-family: ${fontFamily};
    padding: 0px 8px 0px 8px;
`

export const ErrorText = styled.Text`
    font-family: ${fontFamily};
    font-weight: bold;
    border-color: ${colors.RED};
    color: ${colors.RED_1};
    font-size: 8px;
    margin-top: 4px;
`

export const IconView = styled.View`
    width: 40px;
    height: 100%;
    justify-content: center;
    align-items: center;
`

export const ButtonVisiblePassword = styled.TouchableOpacity`
    width: 40px;
    height: 100%;
    justify-content: center;
    align-items: center;
    border-width: 0;
`
