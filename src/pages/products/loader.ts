import type { IProduct } from "../../interfaces/product";

import { getDefer } from "../../ulties/fetcher/getDerfer";
import { ServerAPI } from "../../ulties/serverAPIs";

export type ProdLoader = {
    products: Promise<IProduct[] | undefined>
}

export async function loader(): Promise<ProdLoader> {
    // await isAdmin()

    const products = getDefer<IProduct[]>(ServerAPI.products, true)
    return { products }
}