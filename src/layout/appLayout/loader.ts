import { data } from "react-router";
import { ServerAPI as API } from "../../ulties/serverAPIs";
import type { IUser } from "../../interfaces/user";

export type AuthStatus = { user: IUser }

export async function loader(): Promise<AuthStatus | undefined> {
    try {
        const res = await fetch(API.getStatus, {
            credentials: 'include',
        })

        if (!res.ok) {
            return undefined
        }

        return await res.json();
    } catch (error) {
        console.error(error);
        // Handle the error appropriately, e.g., redirect to an error page or return a default value
        throw data({ message: "Failed to connect to server! Please check your network!" }, { status: 500 });
    }
}