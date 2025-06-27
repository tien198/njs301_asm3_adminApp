import { ServerAPI as API } from "../../ulties/serverAPIs";
import type { IUser } from "../../interfaces/user";
import { store } from "../../store";
import { setAuthen } from "../../store/slices/authen";
import modalStore from "../../components/modal/store";
import type { ErrorResponse } from "react-router";



export type AuthStatus = { user: IUser }

export async function isAdmin(): Promise<void> {
    try {
        const show = modalStore.getState().show

        const res = await fetch(API.isAdmin, {
            credentials: 'include',
        })

        const json = await res.json();
        if (!res.ok) {
            show("error", { ...json, status: res.status } as ErrorResponse)
            throw Response.json(
                { ...json.data },
                {
                    statusText: json.statusText,
                    status: res.status
                }
            )
        }

        const user = json as IUser;

        store.dispatch(setAuthen(user))

    } catch (error: any) {
        // Error without status is a network error (Not error response)
        if (!error.status)
            throw Response.json(
                { message: 'Couldn\'t to check your authorization' },
                { statusText: error.message }
            )
        else throw error
    }

}