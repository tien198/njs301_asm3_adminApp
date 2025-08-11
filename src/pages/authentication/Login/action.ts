import { type ActionFunctionArgs, redirect } from "react-router"
import type { IAuthenResponse } from "../../../interfaces/response/fullfill/authenResponse"

import { ServerAPI } from "../../../ulties/serverAPIs"
import { AppRoutes_Abs } from "../../../ulties/appRoutes"
import { store } from "../../../store"
import { setAuthen } from "../../../store/slices/authen"
import modalStore from "../../../components/modal/store"


export async function action(args: ActionFunctionArgs) {
    const show = modalStore.getState().show
    const data = Object.fromEntries((await args.request.formData()).entries())
    try {
        const response = await fetch(ServerAPI.login, {
            method: args.request.method,
            headers: {
                // MIME type (media type || content type)
                'content-type': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': 'https://minhtien-admin.vercel.app'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        })
        if (response.status === 422 || response.status === 401)
            return response
        if (response.status === 200) {
            const authenRes: IAuthenResponse = (await response.json())
            store.dispatch(setAuthen(authenRes.user))
        }

        return redirect(AppRoutes_Abs.Products)
    } catch (error: any) {
        // Error without status is a network error (Not error response)
        if (!error.status)
            show('error', {
                statusText: error.message,
                data: { message: 'Couldn\'t to check your authorization' }
            })
    }
}