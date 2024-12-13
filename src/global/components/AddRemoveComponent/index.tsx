import TextComponent from "@components/TextComponent"

import colors from "@assets/colors"

import { ActionButton, Container } from "./style"

type Props = {
    quantity: number
    onPressAdd: () => void
    onPressRemove: () => void
}
const AddRemoveComponent = (props: Props) => {
    const {
        quantity = 0, onPressAdd, onPressRemove,
    } = props
    return (
        <Container>
            <ActionButton onPress={onPressRemove}>
                <TextComponent fontSize={20} color={colors.WHITE}>-</TextComponent>
            </ActionButton>
            <TextComponent marginLeft={8} marginRight={8}>{quantity}</TextComponent>
            <ActionButton onPress={onPressAdd}>
                <TextComponent fontSize={20} color={colors.WHITE}>+</TextComponent>
            </ActionButton>
        </Container>
    )
}

export default AddRemoveComponent