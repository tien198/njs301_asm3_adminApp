import type { IProduct } from "../../interfaces/product";

import { getDefer } from "../../ulties/fetcher/getDerfer";
import { ServerAPI } from "../../ulties/serverAPIs";

export type ProdLoader = {
    products: Promise<IProduct[] | null>
}

export async function loader(): Promise<ProdLoader> {

    const products = (getDefer<IProduct[]>(ServerAPI.products, true))
        .catch(() => null)
    return { products }
}