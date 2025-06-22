import type { IAuthenResponse } from "../../../interfaces/response/fullfill/authenResponse"

import { redirect, type ActionFunctionArgs } from "react-router"
import { ServerAPI } from "../../../ulties/serverAPIs"
import { store } from "../../../store"
import { setAuthen } from "../../../store/slices/authen"

export async function action(args: ActionFunctionArgs) {
    // args
    const data = Object.fromEntries((await args.request.formData()).entries())

    const response = await fetch(ServerAPI.signup, {
        method: args.request.method,
        headers: {
            // MIME type (media type || content type)
            'content-type': 'application/json'
        },
        body: JSON.stringify(data),
        credentials: 'include'
    })
    if (response.status === 422)
        return response

    if (response.status === 201) {
        const authenRes: IAuthenResponse = (await response.json())
        store.dispatch(setAuthen(authenRes.user))

    }
    return redirect('/')
}