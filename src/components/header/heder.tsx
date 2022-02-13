import React from "react";
import logo from "./header_image/logo_social_network.png";
import "./header.css"


export function Header() {
    return (
        <header className="header">
            <div className="header_logo"><img className="logo" src={logo} alt="logo"/></div>
            <div className="header_title"><h2>SOCIAL NETWORK</h2></div>

        </header>
    )
}