import type { IProduct } from "../../../interfaces/product";
import type { ProductsStore } from "./types";

import { createStore } from "zustand";


const productsStore = createStore<ProductsStore>(set => ({
    products: undefined,
    query: '',
    // isFiltered decide whether product was displayed in the table
    setProducts: (products: IProduct[]) => set(state => ({ ...state, products })),
    setQuery: (query: string) => set(state => ({ ...state, query })),
}))

export default productsStore;