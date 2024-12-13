import TextComponent from "@components/TextComponent"

import AddRemoveComponent from "@components/AddRemoveComponent"

import { formatToMoney } from "@helpers/functions"

import { Container, LeftView, RightView } from "./style"

type ProductProps = {
    id: number
    name: string
    quantity: number
    unityPrice: number
    onPressAdd: () => void
    onPressRemove: () => void
    onPressDelete: () => void
}
const Product = (props: ProductProps) => {
    const {
        name = '',
        unityPrice = 0,
        quantity = 0,
        onPressDelete,
        onPressAdd,
        onPressRemove,
    } = props

    return (
        <Container>
            <LeftView>
                <TextComponent fontWeight={'bold'}>{name}</TextComponent>
                <TextComponent fontSize={10}>Preço Unit: R$ {formatToMoney(unityPrice)}</TextComponent>
                <AddRemoveComponent onPressAdd={onPressAdd} onPressRemove={onPressRemove} quantity={quantity} />
                <TextComponent fontWeight={'bold'} fontSize={12}>Total: R$ {formatToMoney(quantity * unityPrice)}</TextComponent>
            </LeftView>
            <RightView onPress={onPressDelete}>
                <TextComponent>deletar</TextComponent>
            </RightView>
        </Container>
    )
}

export default Product