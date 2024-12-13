import { StatusBar } from "react-native"

import TextInputComponent from "@components/TextInputComponent"
import ButtonComponent from "@components/ButtonComponent"

import { isEmpty } from "@helpers/functions"

import { Container, InputsView } from "./style"

const NewProductView = (props) => {
    const {
        productName,
        errorName,
        quantity,
        errorQuantity,
        price,
        onChangeProductName,
        onChangeQuantity,
        onChangePrice,
        onPressSave,
        onBlur,
    } = props
    const formattedUnityPrice = price.toString().replace(/[^0-9]+/g, "")
    const isEnableSave = !isEmpty(productName) && quantity > 0 && formattedUnityPrice > 0

    return (
        <Container>
            <StatusBar barStyle={'dark-content'} />
            <InputsView>
                <TextInputComponent
                    title="Nome"
                    placeholder="Nome do produto"
                    value={productName}
                    onChangeText={(text) => onChangeProductName(text)}
                    error={errorName}
                    onBlur={() => onBlur(productName, 'name')}
                />
                <TextInputComponent
                    title="Quantidade"
                    placeholder="Quantidade do produto"
                    value={quantity}
                    error={errorQuantity}
                    keyboardType="number-pad"
                    onBlur={() => onBlur(quantity, 'quantity')}
                    onChangeText={(text) => onChangeQuantity(text)}
                />
                <TextInputComponent
                    title="Preço por unidade"
                    placeholder="Preço por unidade"
                    value={price}
                    keyboardType="numeric"
                    onBlur={() => onBlur(price, 'unityPrice')}
                    onChangeText={(text) => onChangePrice(text)}
                />
                <ButtonComponent
                    marginTop={30}
                    text="Salvar"
                    enabled={isEnableSave}
                    onPress={() => onPressSave(productName, quantity, price)}
                />
            </InputsView>
        </Container>
    )
}

export default NewProductView