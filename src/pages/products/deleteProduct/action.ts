import { redirect, type ActionFunctionArgs } from "react-router"
import { ServerAPI } from "../../../ulties/serverAPIs"
import { AppRoutes_Abs as AbsRoute } from "../../../ulties/appRoutes"
import productsStore from "../store"
import modalStore from "../../../components/modal/store"

export async function action(args: ActionFunctionArgs) {
    const prodId = args.params.id
    const showModal = modalStore.getState().show
    if (!prodId)
        return

    try {
        const res = await fetch(ServerAPI.products + prodId, {
            method: 'DELETE',
            credentials: 'include',
        })
        const json = await res.json()
        if (!res.ok) {
            showModal('error', {
                status: res.status,
                message: `Couldn't delete product with id: "${prodId}"`,
                ...json
            })
            return
        }
        productsStore.getState().removeProduct?.(prodId)
        return redirect(AbsRoute.Products)
    } catch (error: any) {
        if (!error.status)
            showModal('error', {
                statusText: `Couldn't delete product with id: "${prodId}"`
            })
    }
}