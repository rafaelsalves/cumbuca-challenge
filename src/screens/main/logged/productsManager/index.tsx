
import { useEffect, useState } from 'react'
import BootSplash from 'react-native-bootsplash'

import MenuButton from '@components/MenuButton'

import storage from '@services/storage'
import PathRoutes from '@routes/PathRoutes'

import ProductsManagerView from './view'

const ProductsManager = (props) => {
    const navigation = props.navigation
    const [products, setProducts] = useState([])

    useEffect(() => {
        const onFocusListener = navigation.addListener('focus', () => {
            onLoad()
        })
        navigation.setOptions({
            headerRight: () => <MenuButton marginRight={12} onPress={() => onPressMenu()} />,
        })

        return () => { onFocusListener }
    }, [])

    const onLoad = async () => {
        const storedProducts = await storage.getProducts()
        setProducts(storedProducts)
        BootSplash.hide({ fade: true })
    }

    const onPressAdd = async (productId: number, productQuantity: number) => {
        let storedProducts = await storage.changeQuantityProduct(productId, productQuantity + 1)
        setProducts(storedProducts)
    }

    const onPressRemove = async (productId: number, productQuantity: number) => {
        let storedProducts = await storage.changeQuantityProduct(productId, productQuantity === 0 ? 0 : productQuantity - 1)
        setProducts(storedProducts)
    }

    const onPressDelete = async (itemId: number) => {
        let storedProducts = await storage.removeProduct(itemId)
        setProducts(storedProducts)
    }

    const onPressNewProduct = () => {
        navigation.navigate(PathRoutes.NEW_PRODUCT)
    }

    const onPressMenu = () => {
        navigation.navigate(PathRoutes.SETTINGS)
    }

    const viewProps = {
        products,
        onPressDelete,
        onPressAdd,
        onPressRemove,
        onPressNewProduct,
    }

    return <ProductsManagerView {...viewProps} />
}

export default ProductsManager