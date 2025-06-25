import { ServerAPI as API } from "../../ulties/serverAPIs";
import type { IUser } from "../../interfaces/user";
import { store } from "../../store";
import { setAuthen } from "../../store/slices/authen";
import modalStore from "../../components/modal/store";

export type AuthStatus = { user: IUser }

export async function isAdmin(): Promise<void> {
    const show = modalStore.getState().show

    const res = await fetch(API.getStatus, {
        credentials: 'include',
    })

    const json = await res.json();
    if (!res.ok) {
        show("error", {
            status: res.status,
            ...json
        })
        throw { ...json, status: res.status }
    }

    const user = json.user as IUser;

    store.dispatch(setAuthen(user))

}