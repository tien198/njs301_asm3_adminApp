export enum AppRoutes {
    Home = "/",

    Auth = 'auth',
    Login = "login",
    Logout = "logout",
    Singup = "signup",

    Admin = "admin",

    Products = "products",
    Product = "product",

    CreateProduct = "create-product",
    EditProduct = "edit-product",
    DeleteProduct = "delete-product",

    Orders = "orders",
    Order = "order",
}


export enum AppRoutes_Abs {
    Home = "/",

    Admin = '/' + AppRoutes.Admin+ '/',

    Auth = Admin + AppRoutes.Auth,
    Login = Admin + AppRoutes.Login,
    Logout = Admin + AppRoutes.Logout,
    Singup = Admin + AppRoutes.Singup,


    Products = Admin + AppRoutes.Products,
    Product = Admin + AppRoutes.Product,

    CreateProduct = Admin + AppRoutes.CreateProduct,
    EditProduct = Admin + AppRoutes.EditProduct,
    DeleteProduct = Admin + AppRoutes.DeleteProduct,

    Orders = Admin + AppRoutes.Orders,
    Order = Admin + AppRoutes.Order,
}