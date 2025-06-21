import { Outlet, useLoaderData, useNavigate } from "react-router";
import MainNav from "../MainNav";
import type { AuthStatus } from "./loader";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setAuthen } from "../../store/slices/authen";

export default function AppLayout() {
    const loader: AuthStatus = useLoaderData()
    const dispatch = useAppDispatch()
    const nav = useNavigate()
    useEffect(() => {
        if (!loader)
            nav('/login', { replace: true })
        else
            dispatch(setAuthen(loader))

    }, [loader, nav, dispatch])
    return <div>
        <MainNav />
        <Outlet />
    </div>

}