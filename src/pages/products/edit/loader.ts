import type { LoaderFunctionArgs } from "react-router";
import { getDefer } from "../../../ulties/fetcher/getDerfer";
import { ServerAPI } from "../../../ulties/serverAPIs";
import type { IProduct } from "../../../interfaces/product";



export type ProdLoader = {
    prod: Promise<IProduct>
}

export async function loader(args: LoaderFunctionArgs): Promise<ProdLoader> {
    const prod = getDefer(ServerAPI.products + args.params.id, true)
        .catch(() => null)
    return { prod }
}