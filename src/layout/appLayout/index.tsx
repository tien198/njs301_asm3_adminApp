import { Outlet } from "react-router";
import MainNav from "../MainNav";

export default function AppLayout() {
    return <div>
        <MainNav />
        <Outlet />
    </div>

}