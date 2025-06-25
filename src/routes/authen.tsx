import { Outlet, type RouteObject } from "react-router";
import { AppRoutes } from "../ulties/appRoutes";
import Login from "../pages/authentication/Login";
import Signup from "../pages/authentication/Signup";

const authenRouter: RouteObject = {
    path: '',
    element: <Outlet />,
    children: [
        {
            path: AppRoutes.Login,
            element: <Login />,
            action: (args) => import('../pages/authentication/Login/action').then(i => i.action(args))
        },
        {
            path: AppRoutes.Singup,
            element: <Signup />,
            action: (args) => import('../pages/authentication/Signup/action').then(i => i.action(args))

        },
        {
            path: AppRoutes.Logout,
            action: () => import('../pages/authentication/Logout').then(i => i.action())
        }
    ]
}

export default authenRouter