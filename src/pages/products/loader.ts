import type { IProduct } from "../../interfaces/product";

import { getDefer } from "../../ulties/fetcher/getDerfer";
import { ServerAPI } from "../../ulties/serverAPIs";

export type ProdLoader = {
    products: Promise<IProduct[] | null>
}

export function loader(): ProdLoader {
    try {
        const products = getDefer<IProduct[]>(ServerAPI.products, true)
        return { products }
    } catch (error) {
        console.error(error)
        return { products: Promise.resolve(null) }
    }
}