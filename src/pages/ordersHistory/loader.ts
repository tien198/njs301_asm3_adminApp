import type { IOrder } from "../../interfaces/order";
import { getDefer } from "../../ulties/fetcher/getDerfer";
import { ServerAPI as API } from "../../ulties/serverAPIs";

export type OrderLoader = {
    userCount: Promise<number | undefined>;
    orderCount: Promise<number | undefined>;
    orders: Promise<IOrder[] | undefined>;
}

export function loader(): OrderLoader {
    const orders = getDefer(API.getOrders, true).catch(() => undefined)
    const userCount = getDefer(API.userCount, true).catch(() => undefined)
    const orderCount = getDefer(API.orderCount, true).catch(() => undefined)

    return {
        userCount, orderCount, orders
    }
}