import React from "react";
import nav from "./navbar.module.css"
import {NavLink} from "react-router-dom";



export const Navbar = () => {
    return (
        <nav className={nav.nav}>
            {/*<div className={`${nav.link} ${nav.active}`}><a>Profile</a></div>
            <div className={nav.link}><a>Messages</a></div>
            <div><a>News</a></div>
            <div><a>Music</a></div>
            <div><a>Settings</a></div>*/}
            <ul>
                <li><NavLink to="Profile">Profile</NavLink></li>
                <li><NavLink to="Dialogs">Messages</NavLink></li>
                <li><NavLink to="News">News</NavLink></li>
                <li><NavLink to="Music">Music</NavLink></li>
                <li><NavLink to="Settings">Settings</NavLink></li>
            </ul>
        </nav>
    )
}