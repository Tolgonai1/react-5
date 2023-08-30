import {Navbar} from "./Navbar/Navbar.jsx";
import {Outlet} from "react-router-dom";

export function Layout(){
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}