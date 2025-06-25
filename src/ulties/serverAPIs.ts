export enum ServerAPI {
    // base = 'https://njs301asm3server-production.up.railway.app/',
    base = 'http://localhost:5000/',
    api = base + 'api/',
    admin = 'admin/',

    products = api + admin + 'products/',

    findByCategory = api + admin + 'find-by-category/',

    // admin

    getOrders = api + admin + 'orders',
    getOrderById = api + admin + 'order',

    userCount = api + admin + 'user-count',
    orderCount = api + admin + 'order-count',

    // auth
    signup = api + 'auth/signup/',
    login = api + 'auth/login/',
    logout = api + 'auth/logout/',
    getStatus = api + 'auth/status/',
}