import { redirect } from "react-router";
import { ServerAPI } from "../../ulties/serverAPIs";
import { store } from "../../store";
import { clearAuthen } from "../../store/slices/authen";
import { AppRoutes_Abs as AbsRoute } from "../../ulties/appRoutes";

export async function action() {
    await fetch(ServerAPI.logout, {
        method: 'POST',
        credentials: 'include',
    })
    store.dispatch(clearAuthen())
    return redirect(AbsRoute.Login)
}