import { useCallback, useEffect, useMemo, useState } from "react";
import type { NavLinkRenderProps } from "react-router";
import { NavLink, useFetcher } from "react-router";
import Container from "../components/UI/Container";

// css
import classes from "./MainNav.module.css";
import { AppRoutes } from "../ulties/appRoutes";

import { FaUser } from "react-icons/fa";
import { getUserInfor } from "../ulties/storageUltil/authenInfor";


function navLinkStateClass({ isActive }: NavLinkRenderProps) {
    const active = isActive ? 'link-active' : ''
    return active + ' flex items-center gap-2'
}

function NavLeftUl() {
    return (
        <ul className="flex gap-4">
            <li>
                <NavLink to={AppRoutes.Home} className={navLinkStateClass}>
                    <span>Admin</span>
                    <span>Boutique</span>
                </NavLink>
            </li>
        </ul>
    )
}

function NavRightUl() {
    const isLogin = !!getUserInfor()
    const userInfo = useMemo(() => getUserInfor(), [isLogin])

    // set user name to re-render
    const [userName, setUserName] = useState(userInfo?.name)
    useEffect(() => setUserName(userInfo?.name), [userInfo])

    // submit to logout
    const submit = useFetcher().submit

    const logout = useCallback(function logout() {
        submit(null, { action: AppRoutes.Logout, method: 'POST' })
    }, [])

    return (
        <ul className="flex gap-6 w-full justify-end md:w-auto">

            {!isLogin && <li>
                <NavLink to={AppRoutes.Login} className={navLinkStateClass}>
                    <FaUser className="mr-1" />
                    <span className="hidden md:inline">Sign in</span>
                </NavLink>
            </li>}
            {isLogin && <li>
                <NavLink to={AppRoutes.Login} className={navLinkStateClass}>
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