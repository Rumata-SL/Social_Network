import React from "react";
import logo from "../../image/logo_social_network.png";
import "./header.css"


export function Header() {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="logo"/>

        </header>
    )
}