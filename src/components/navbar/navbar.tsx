import React from "react";
import nav from "./navbar.module.css"


export const Navbar = () => {
    return (
        <nav className={nav.nav}>
            <div className={`${nav.link} ${nav.active}`}><a>Profile</a></div>
            <div className={nav.link}><a>Messages</a></div>
            <div><a>News</a></div>
            <div><a>Music</a></div>
            <div><a>Settings</a></div>
        </nav>
    )
}