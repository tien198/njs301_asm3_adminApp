import { useCallback, useEffect, useState } from "react";
import type { NavLinkRenderProps } from "react-router";
import { NavLink, useFetcher } from "react-router";
import Container from "../components/UI/Container";

// css
import classes from "./MainNav.module.css";
import { AppRoutes_Abs as AbsRoute } from "../ulties/appRoutes";

import { FaUser } from "react-icons/fa";
import { useAppSelector } from "../hooks/reduxHooks";


function navLinkStateClass({ isActive }: NavLinkRenderProps) {
    const active = isActive ? 'text-orange-700' : ''
    return active + ' flex  gap-2 hover:cursor-pointer'
}

function NavLeftUl() {
    return (
        <ul className="flex gap-4 items-center">
            <li>
                <NavLink to={AbsRoute.Admin} className={navLinkStateClass}>
                    <span>Admin</span>
                    <span>Boutique</span>
                </NavLink>
            </li>
            <li>
                <NavLink to={AbsRoute.Products} className={navLinkStateClass}>
                    Products
                </NavLink>
            </li>
        </ul>
    )
}

function NavRightUl() {
    const isLogin = !!useAppSelector(state => state.authen.email)
    const userInfo = useAppSelector(state => state.authen)

    // set user name to re-render
    const [userName, setUserName] = useState(userInfo?.name)
    useEffect(() => setUserName(userInfo?.name), [userInfo])

    // submit to logout
    const submit = useFetcher().submit

    const logout = useCallback(function logout() {
        submit(null, { action: AbsRoute.Logout, method: 'POST' })
    }, [])

    return (
        <ul className="flex gap-6 w-full justify-end md:w-auto">

            {!isLogin && <li>
                <NavLink to={AbsRoute.Login} className={navLinkStateClass}>
                    <FaUser className="mr-1" />
                    <span className="hidden md:inline">Sign in</span>
                </NavLink>
            </li>}
            {isLogin && <li>
                <NavLink to={AbsRoute.Login} className={navLinkStateClass}>
                    <span className="hidden md:inline capitalize">{userName}</span>
                </NavLink>
            </li>}
            {isLogin && <li>
                <button onClick={logout}>( Logout )</button>
            </li>}
        </ul>
    )
}


// EXPORT DEFAULT ----------------------------------------------
export default function MainNav() {

    return (
        <>
            <header className="fixed w-full font-medium h-16 bg-white z-30">

                <Container className=" py-4 relative z-10">
                    <nav className={`flex items-center justify-between w-full h-full ${classes['nav']}`}>
                        <span className="block md:hidden"></span>
                        <span className="flex flex-wrap-reverse flex-row-reverse md:flex-row justify-between w-56 md:w-full">
                            <NavLeftUl />
                            <NavRightUl />
                        </span>
                    </nav>
                </Container>

            </header>
            <div className="h-32"></div>
        </>
    );
}