import { StatusBar } from "react-native"

import Product from "./components/Product"
import SpaceView from "@components/SpaceView"
import NewProductButton from "./components/NewProductButton"

import { Container, FlatList } from "./style"

const ProductsManagerView = (props) => {
    const {
        products,
        onPressDelete,
        onPressNewProduct,
        onPressAdd,
        onPressRemove,
    } = props
    return (
        <Container>
            <StatusBar barStyle={'dark-content'} />
            <FlatList
                data={products}
                ItemSeparatorComponent={() => <SpaceView vertical={4} />}
                renderItem={({ item }) => (
                    <Product {...item}
                        onPressAdd={() => onPressAdd(item.id, item.quantity)}
                        onPressRemove={() => onPressRemove(item.id, item.quantity)}
                        onPressDelete={() => onPressDelete(item.id)}
                    />
                )}
            />
            <NewProductButton onPress={onPressNewProduct} />
        </Container>
    )
}

export default ProductsManagerView