import styled from 'styled-components/native'
import { Platform } from 'react-native'
import colors from '@assets/colors'

export const KeyboardAvoidingView = styled.KeyboardAvoidingView.attrs({
    behavior: 'position',
    contentContainerStyle: { flex: 1 },
    keyboardVerticalOffset: Platform.OS === 'ios' ? -300 : -300,
})`
    flex: 1;
    background: ${colors.BACKGROUND_COLOR};
    padding: 44px 12px 0px 12px;
`

export const ContentView = styled.View`
    flex: 3;
    margin: 20px 0px 0px 0px;
    flex-direction: column;
    justify-content: center;
    background: ${colors.BACKGROUND_COLOR};
`

export const WrapperData = styled.View`
    height: 300px;
    background: ${colors.BACKGROUND_COLOR};
`

export const FlexView = styled.View`
    flex: 1;
`

export const CreateAccountButton = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    margin-top: 14px;
    justify-content: center;
    align-items: center;
`