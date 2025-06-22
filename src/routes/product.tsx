import type { RouteObject } from "react-router";
import { AppRoutes } from "../ulties/appRoutes";
import Product from "../pages/products";

const productRouter: RouteObject = {
    path: '',
    children: [
        {
            path: AppRoutes.Products,
            element: <Product />,
            loader: () => import('../pages/products/loader').then(m => m.loader())
        },
        {
            path: AppRoutes.DeleteProduct,
            action: (args) => import('../pages/deleteProduct/action').then(m => m.action(args))
        }
    ]
}

export default productRouter