export enum AppRoutes {
    Home = "/",

    Auth = 'auth',
    Login = "login",
    Logout = "logout",
    Singup = "signup",

    Admin = "admin",

    Products = "products",
    Product = "product",

    EditProduct = "edit-product",
    CreateProduct = "create-product",
    DeleteProduct = "delete-product",

    Orders = "orders",
    Order = "order",
}


export enum AppRoutes_Abs {
    Home = "/",

    Auth = '/' + AppRoutes.Auth,
    Login = '/' + AppRoutes.Login,
    Logout = '/' + AppRoutes.Logout,
    Singup = '/' + AppRoutes.Singup,

    Admin = '/' + AppRoutes.Admin,

    Products = '/' + AppRoutes.Products,
    Product = '/' + AppRoutes.Product,

    EditProduct = '/' + AppRoutes.EditProduct,
    CreateProduct = '/' + AppRoutes.CreateProduct,
    DeleteProduct = '/' + AppRoutes.DeleteProduct,

    Orders = '/' + AppRoutes.Orders,
    Order = '/' + AppRoutes.Order,
}