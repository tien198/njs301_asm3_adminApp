import type { RouteObject } from "react-router";

import OrdersHistory from "../pages/ordersHistory";
import Order from "../pages/order";

const orderRouter: RouteObject = {
    path: '',
    loader: () => import('./loader/isAdminChecking').then(mod => mod.isAdmin()),
    children: [
        {
            index: true,
            element: <OrdersHistory />,
            loader: () => import('../pages/ordersHistory/loader').then(m => m.loader())
        },
        {
            path: 'order/:id',
            element: <Order />,
            loader: () => import('../pages/ordersHistory/loader').then(m => m.loader())
        }
    ]
}

export default orderRouter