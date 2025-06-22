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

    Admin = '/' + AppRoutes.Admin+ '/',

    Auth = Admin + AppRoutes.Auth,
    Login = Admin + AppRoutes.Login,
    Logout = Admin + AppRoutes.Logout,
    Singup = Admin + AppRoutes.Singup,


    Products = Admin + AppRoutes.Products,
    Product = Admin + AppRoutes.Product,

    EditProduct = Admin + AppRoutes.EditProduct,
    CreateProduct = Admin + AppRoutes.CreateProduct,
    DeleteProduct = Admin + AppRoutes.DeleteProduct,

    Orders = Admin + AppRoutes.Orders,
    Order = Admin + AppRoutes.Order,
}