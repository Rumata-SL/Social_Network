import React from "react";
import logos from "../../image/content_logo.jpg";
import "./profile.css"

export function Profile() {
    return (
        <div className="content">
            <div><img className="content_logo" src={logos} alt="fudzi"/></div>
            Main content
        </div>
    )
}