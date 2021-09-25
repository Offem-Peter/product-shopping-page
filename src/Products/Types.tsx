export type ProductType = {
    productId: string,
    name: string,
    price: number,
    imageUrl: string,
    category: string,
}

export type CartType = ProductType & {
    quantity: number,
}

export type CartFunctionsType = {
    add: (product: ProductType) => void,
    remove: (productId: string) => void,
    increaseQty: (productId: string) => void,
    reduceQty: (productId: string) => void,

}