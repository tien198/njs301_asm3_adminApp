import type { RouteObject } from "react-router";
import { AppRoutes } from "../ulties/appRoutes";
import Product from "../pages/products";
import NewProduct from '../pages/newProduct';

const productRouter: RouteObject = {
    path: '',
    loader: () => import('./loader/isAdminChecking').then(mod => mod.isAdmin()),
    children: [
        {
            path: AppRoutes.Products,
            element: <Product />,
            loader: () => import('../pages/products/loader').then(m => m.loader())
        },
        {
            path: AppRoutes.CreateProduct,
            element: <NewProduct />,
        },
        {
            path: AppRoutes.EditProduct,
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