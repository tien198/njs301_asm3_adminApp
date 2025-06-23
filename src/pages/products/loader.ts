import type { IProduct } from "../../interfaces/product";

import { getDefer } from "../../ulties/fetcher/getDerfer";
import { ServerAPI } from "../../ulties/serverAPIs";

export type ProdLoader = {
    products: Promise<IProduct[] | undefined>
}

export function loader(): ProdLoader {
    const products = getDefer<IProduct[]>(ServerAPI.products, true)
    return { products }

}