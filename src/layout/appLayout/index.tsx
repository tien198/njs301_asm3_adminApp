import { Outlet, useLoaderData, useNavigate } from "react-router";
import MainNav from "../MainNav";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setAuthen } from "../../store/slices/authen";
import type { AuthStatus } from "./loader";

export default function AppLayout() {
    const loader: AuthStatus = useLoaderData()
    const dispatch = useAppDispatch()
    const nav = useNavigate()
    useEffect(() => {
        if (!loader)
            nav('/login', { replace: true })
        else
            dispatch(setAuthen(loader.user))

    }, [loader, nav, dispatch])
    return <div>
        <MainNav />
        <Outlet />
    </div>

}