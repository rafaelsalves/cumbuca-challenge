import { useEffect, useState } from "react"
import { MaskService } from "react-native-masked-text"

import storage from '@services/storage'

import NewProductView from "./view"
import { showToast } from "@helpers/functions"

const NewProduct = () => {
    const [productName, setProductName] = useState<string>('')
    const [quantity, setQuantity] = useState<string>('')
    const [price, setPrice] = useState<string>('')

    useEffect(() => {
        onLoad()
    }, [])

    const onLoad = async () => {
    }

    const onChangeProductName = (text: string) => {
        setProductName(text)
    }

    const onChangeQuantity = (newQuantity: string) => {
        setQuantity(newQuantity.replace(/[^0-9]/g, ''))
    }

    const onChangePrice = (newPrice: string) => {
        setPrice(MaskService.toMask('money', newPrice, {
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: 'R$',
            suffixUnit: ''
        }))
    }

    const onPressSave = async (newProductName, newQuantity, newPrice) => {
        try {
            const formattedUnityPrice = newPrice.toString().replace(/[^0-9]+/g, "")
            await storage.addProduct({
                name: newProductName,
                quantity: parseInt(newQuantity),
                unityPrice: parseInt(formattedUnityPrice),
            })
            setProductName('')
            setQuantity('')
            setPrice('')
            showToast({ type: 'success', message: 'Produto adicionado com sucesso!' })
        } catch (error) {
            showToast({ message: 'Houve um problema ao adicionar o produto!' })
        }
    }

    const viewProps = {
        productName,
        quantity,
        price,
        onChangeProductName,
        onChangeQuantity,
        onChangePrice,
        onPressSave,
    }
    return <NewProductView {...viewProps} />
}

export default NewProduct