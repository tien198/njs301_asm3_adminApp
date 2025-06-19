export async function getDefer<T = any>(
    url: string, includeCookie: boolean = false, token?: string
): Promise<T> {
    const headers: HeadersInit = {}
    if (token)
        headers['Authorization'] = `Bearer ${token}`

    const res = await fetch(url, {
        headers,
        credentials: includeCookie ? 'include' : 'same-origin'
    })
    if (!res.ok) {
        throw new Error('Failed to fetch products')
    }
    return await res.json()
}