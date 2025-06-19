import type { IProduct } from "../../interfaces/product";

import { getDefer } from "../../ulties/fetcher/getDerfer";
import { ServerAPI } from "../../ulties/serverAPIs";
import productsStore from "./store";

export type LoaderData = {
    products: Promise<IProduct[]>
}

export async function loader() {
    try {
        const products = await getDefer<IProduct[]>(ServerAPI.products, true)
        productsStore.getState().setProducts(products)
        return products
    } catch (error) {
        console.error(error)
        return null
    }
}