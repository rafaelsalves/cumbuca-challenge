import styled from "styled-components/native"
import colors from "@assets/colors"

export const Container = styled.View`
    width: 100%;
    border-color: ${colors.GRAY};
    border-width: 1px;
    flex-direction: row;
    padding: 10px;
`

export const LeftView = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex: 1;
`

export const RightView = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`
