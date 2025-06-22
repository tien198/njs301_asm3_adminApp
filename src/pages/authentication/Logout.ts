import { redirect } from "react-router";
import { ServerAPI } from "../../ulties/serverAPIs";

export async function action() {
    await fetch(ServerAPI.logout, {
        method: 'POST',
        credentials: 'include',
    })
    return redirect('/')
}