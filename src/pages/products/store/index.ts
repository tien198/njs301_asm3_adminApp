import type { IProduct } from "../../../interfaces/product";
import type { ProductsStore } from "./types";

import { createStore } from "zustand";


const productsStore = createStore<ProductsStore>(set => ({
    products: undefined,
    query: '',
    // isFiltered decide whether product was displayed in the table
    setProducts: (products: IProduct[]) => set(state => ({ ...state, products })),
    removeProduct: (prodId) => set(state => {
        const filtered = state.products?.filter(i => i.id !== prodId)
        return { ...state, products: filtered }
    }),
    setQuery: (query: string) => set(state => ({ ...state, query })),
}))

export default productsStore;