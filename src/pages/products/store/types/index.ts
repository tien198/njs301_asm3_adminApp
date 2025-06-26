import type { IProduct } from "../../../../interfaces/product"

export type ProductsState = {
    products?: IProduct[]
    query: string
}
export type ProductsActions = {
    setProducts: (products: IProduct[]) => void
    removeProduct?: (prodId: string) => void
    setQuery: (query: string) => void
}

export type ProductsStore = ProductsState & ProductsActions
