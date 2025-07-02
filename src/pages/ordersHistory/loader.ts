import type { IOrder } from "../../interfaces/order";
import { getDefer } from "../../ulties/fetcher/getDerfer";
import { ServerAPI as API } from "../../ulties/serverAPIs";

export type OrderLoader = {
    userCount: Promise<number | undefined>;
    orderCount: Promise<number | undefined>;
    orders: Promise<IOrder[] | undefined>;
}

export function loader(): OrderLoader {
    const orders = getDefer(API.orders, true).catch(() => null)
    const userCount = getDefer(API.userCount, true).catch(() => null)
    const orderCount = getDefer(API.ordersCount, true).catch(() => null)

    return {
        userCount, orderCount, orders
    }
}