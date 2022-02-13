import React from "react";
import logos from "./image_profile/content_logo.jpg";
import img from "./image_profile/social_logo.png"
import "./profile.css"

export function Profile() {
    return (
        <div className="content">
            <div><img className="content_logo" src={logos} alt="fudzi"/></div>
            <div><img className="content_social_logo" src={img} alt="ninja"/></div>

            Main content
        </div>
    )
}