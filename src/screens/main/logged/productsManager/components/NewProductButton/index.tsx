import TextComponent from "@components/TextComponent"

import colors from "@assets/colors"

import { Pressable } from "./style"

type Props = {
    onPress: () => void
}
const NewProductButton = (props: Props) => {
    const { onPress } = props
    return (
        <Pressable onPress={onPress}>
            <TextComponent color={colors.WHITE} fontSize={40}>+</TextComponent>
        </Pressable>
    )
}

export default NewProductButton