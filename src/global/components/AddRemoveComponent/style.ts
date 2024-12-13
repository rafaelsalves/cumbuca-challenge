import styled from "styled-components/native";
import colors from "@assets/colors";

export const Container = styled.View`
    width: 90px;
    height: 40px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const ActionButton = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    background: ${colors.BLACK};
    border-radius: 12px;
    justify-content: center;
    align-items: center;
`