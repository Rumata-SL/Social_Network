import React from "react";
import nav from "./navbar.module.css"
import {NavLink} from "react-router-dom";

const setActive = (navData: any) => navData.isActive ? nav.active : nav.item

export const Navbar = () => {

    return (
        <nav className={nav.nav}>
            <div className={nav.links}>
                <div><NavLink className={setActive} to="/profile">Profile</NavLink></div>
                <div><NavLink className={setActive} to="/dialogs">Messages</NavLink></div>
                <div><NavLink className={setActive} to="/news">News</NavLink></div>
                <div><NavLink className={setActive} to="/music">Music</NavLink></div>
                <div><NavLink className={setActive} to="/settings">Settings</NavLink></div>
            </div>
        </nav>
    )
}