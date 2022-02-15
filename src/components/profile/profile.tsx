import React from "react";
import {Mypost} from "./Mypost/mypost";
import p from "./profile.module.css"
import logos from "./image_profile/content_logo.jpg";


export const Profile = () => {
    return (
        <div className={p.content}>
            <div>
                <img className={p.content_logo} src={logos} alt="fudzi"/>
            </div>
            <Mypost/>
        </div>
    )
}