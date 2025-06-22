export enum ServerAPI {
    // base = 'https://rjs301asm3backend-production.up.railway.app/',
    base = 'http://localhost:5000/',
    api = base + 'api/',
    admin = 'admin/',

    products = api + admin + 'products/',
    
    findByCategory = api + admin + 'find-by-category/',

    // admin

    getOrders = api + admin + 'orders',
    getOrderById = api + admin + 'order',

    // auth
    signup = api + 'auth/signup/',
    login = api + 'auth/login/',
    logout = api + 'auth/logout/',
    getStatus = api + 'auth/status/',
}   