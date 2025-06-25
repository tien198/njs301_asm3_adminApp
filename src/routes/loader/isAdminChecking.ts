import { ServerAPI as API } from "../../ulties/serverAPIs";
import type { IUser } from "../../interfaces/user";
import { store } from "../../store";
import { setAuthen } from "../../store/slices/authen";

export type AuthStatus = { user: IUser }

export async function isAdmin(): Promise<void> {
    const res = await fetch(API.getStatus, {
        credentials: 'include',
    })

    if (!res.ok) {
        throw {... await res.json(), status: res.status}
    }

    const user = (await res.json()).user as IUser;

    store.dispatch(setAuthen(user))
}