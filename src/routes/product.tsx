import type { RouteObject } from "react-router";
import { AppRoutes } from "../ulties/appRoutes";
import Product from "../pages/products";
import CreateProduct from '../pages/products/create';
import EditProduct from '../pages/products/edit';

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
            element: <CreateProduct />,
            action: (args) => import('../pages/products/create/action').then(i => i.action(args))
        },
        {
            path: AppRoutes.EditProduct + '/:id',
            element: <EditProduct />,
            loader: (args) => import('../pages/products/edit/loader').then(m => m.loader(args)),
            action: (args) => import('../pages/products/edit/action').then(m => m.action(args))
        },
        {
            path: AppRoutes.DeleteProduct + '/:id',
            action: (args) => import('../pages/products/deleteProduct/action').then(m => m.action(args))
        }
    ]
}

export default productRouter