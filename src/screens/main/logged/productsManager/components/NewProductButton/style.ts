import styled from "styled-components/native";
import colors from "@assets/colors";

export const Pressable = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: ${colors.BUTTON_COLOR};
    position: absolute;
    bottom: 100px;
    right: 10px;
    justify-content: center;
    align-items: center;
`