import { useEffect, useState } from "react"
import { MaskService } from "react-native-masked-text"

import storage from '@services/storage'
import { isEmpty, showToast } from "@helpers/functions"

import NewProductView from "./view"

const NewProduct = () => {
    const [productName, setProductName] = useState<string>('')
    const [quantity, setQuantity] = useState<string>('')
    const [price, setPrice] = useState<string>('')
    const [errorName, setErrorName] = useState<string>('')
    const [errorQuantity, setErrorQuantity] = useState<string>('')

    useEffect(() => {
        onLoad()
    }, [])

    const onLoad = async () => {
    }

    const onChangeProductName = (text: string) => {
        setProductName(text)
        setErrorName('')
    }

    const onChangeQuantity = (newQuantity: string) => {
        setQuantity(newQuantity.replace(/[^0-9]/g, ''))
        setErrorQuantity('')
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

    const onBlur = (text, field) => {
        switch (field) {
            case 'name':
                if (isEmpty(text)) {
                    setErrorName('Insira um nome para o produto')
                } else {
                    setErrorName('')
                }
                break

            case 'quantity':
                if (isEmpty(text) || text === '0') {
                    setErrorQuantity('O produto deve ter pelo menos um item')
                } else {
                    setErrorQuantity('')
                }
                break

            default:
                break
        }
    }

    const viewProps = {
        productName,
        quantity,
        price,
        errorName,
        errorQuantity,
        onBlur,
        onChangeProductName,
        onChangeQuantity,
        onChangePrice,
        onPressSave,
    }
    return <NewProductView {...viewProps} />
}

export default NewProduct