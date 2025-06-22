import { redirect, type ActionFunctionArgs } from "react-router"
import { ServerAPI } from "../../ulties/serverAPIs"

export async function action(args: ActionFunctionArgs) {

    await fetch(ServerAPI.products + args.params.id, {
        method: 'DELETE',
        credentials: 'include',
    })
    return redirect('/')
}