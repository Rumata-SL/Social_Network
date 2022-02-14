import React from "react";
import logos from "./image_profile/content_logo.jpg";
import img from "./image_profile/social_logo.png"
import profile from "./profile.module.css"

export function Profile() {
    return (
        <div className={profile.content}>
            <div><img className={profile.content_logo} src={logos} alt="fudzi"/></div>
            <div className={profile.container_content_social_log}>
                <div><img className={profile.content_social_logo} src={img} alt="ninja"/></div>
                <div>
                    <h3>Description</h3>
                </div>
            </div>
            <div>My post</div>
            <div>New post</div>
            <div>Post one</div>
            <div>Post two</div>
        </div>
    )
}