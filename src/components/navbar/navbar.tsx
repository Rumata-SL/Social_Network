import React from "react";
import nav from "./navbar.module.css"


export function Navbar() {
    return (
        <nav className={nav.nav}>
            <div><a>Profile</a></div>
            <div><a>Messages</a></div>
            <div><a>News</a></div>
            <div><a>Music</a></div>
            <div><a>Settings</a></div>
        </nav>
    )
}