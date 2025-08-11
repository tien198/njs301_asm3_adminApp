export enum ServerAPI {
    // base = 'http://localhost:5000/',
    // base = 'https://njs301asm3server-production.up.railway.app/',
    base = 'https://minhtien-j6a6.onrender.com/',

    api = base + 'api/',
    admin = 'admin/',

    products = api + admin + 'products/',

    findByCategory = api + admin + 'find-by-category/',

    // admin
    
    orders = api + admin + 'orders',
    
    userCount = api + admin + 'user-count',
    ordersCount = api + admin + 'order-count',
    
    // auth
    signup = api + 'auth/signup/',
    login = api + 'auth/login/',
    logout = api + 'auth/logout/',
    isAdmin = api + 'auth/is-admin/',
}