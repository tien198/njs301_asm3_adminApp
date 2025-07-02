import type { LoaderFunctionArgs } from "react-router";
import { getDefer } from "../../ulties/fetcher/getDerfer";
import { ServerAPI } from "../../ulties/serverAPIs";
import type { IOrder } from "../../interfaces/order";


export type OrderLoader = {
    order: Promise<IOrder>
}


export function loader(args: LoaderFunctionArgs): OrderLoader {
    const orderId = args.params['id']
    const order = getDefer(ServerAPI.orders + '/' + orderId, true)
        .catch(error => console.error(error))
    return { order }
}