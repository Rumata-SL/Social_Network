import React from "react";
import logo from "./header_image/logotyp.png";
import header from "./header.module.css";


export function Header() {
    return (
        <header className={header.header}>
            <div className={header.header_logo}><img className={header.logo} src={logo} alt="logo"/></div>
            <div className={header.header_title}><h2>SOCIAL NETWORK</h2></div>

        </header>
    )
}