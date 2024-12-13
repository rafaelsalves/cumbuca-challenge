import { saveItemByKey, getItemByKey } from '@models/LocalStorageModel'

import { isEmpty } from '@helpers/functions'

const keys = {
    login: 'LOGIN',
    products: 'PRODUCTS',
}

type Product = {
    id?: number
    name: string
    quantity: number
    unityPrice: number
}

type Login = {
    cpf: string
    password: string
    lastAccess: string
}

const getAvailableId = async (products) => {
    const existingIds = products.map(product => product.id)
    existingIds.sort((id1, id2) => id1 - id2)
    let nextId = 1

    for (const id of existingIds) {
        if (id === nextId) {
            nextId++
        } else {
            break
        }
    }

    return nextId
}

export const saveLogin = async (login: Login) => {
    await saveItemByKey(keys.login, login)
}

export const getLogin = async (): Promise<Login> => {
    return await getItemByKey(keys.login)
}

export const getProducts = async () => {
    let products = await getItemByKey(keys.products) || []
    if (isEmpty(products)) {
        return []
    }
    return products
}

export const addProduct = async (newProduct: Product) => {
    let products = await getProducts()
    const productId = await getAvailableId(products)
    products.push({ ...newProduct, id: productId })
    await saveItemByKey(keys.products, products)
}

export const removeProduct = async (productId: number) => {
    let products = await getProducts()
    let newProducts = products.filter((item) => item.id !== productId)
    await saveItemByKey(keys.products, newProducts)
    return newProducts
}

export const changeQuantityProduct = async (productId: number, newQuantity: number) => {
    let products = await getProducts()
    if(newQuantity === 0) {
        return await removeProduct(productId)
    } else {
        let productToChange = products.find((item) => item.id === productId)
        productToChange.quantity = newQuantity
        await saveItemByKey(keys.products, products)
    }

    return products
}

export const clear = async () => {
    await saveItemByKey(keys.products, '')
}

export default {
    saveLogin,
    getLogin,
    getProducts,
    addProduct,
    removeProduct,
    changeQuantityProduct,
    clear,
}
