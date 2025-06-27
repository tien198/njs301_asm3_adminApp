import type { ActionFunctionArgs } from "react-router";
import { ServerAPI as API } from "../../../ulties/serverAPIs";
import modalStore from "../../../components/modal/store";
import type { IRes } from "../../../interfaces/response";

export async function action(args: ActionFunctionArgs) {
    const showModal = modalStore.getState().show
    try {
        const res = await fetch(API.products+args.params.id, {
            method: args.request.method,
            body: (await args.request.formData()),
            credentials: "include"
        })
        const json = await res.json()
        if (!res.ok)
            showModal("error", json as IRes)
        showModal("inform", json as IRes)

    } catch (error) {
        showModal('error', error as IRes)
    }
}