import React from "react";
import {Mypost} from "./Mypost/mypost";
import {Post} from "./Post/post";
import p from "./profile.module.css"


export function Profile() {
    return (
        <div className={p.content}>
            <Mypost/>
            <Post/>
        </div>
    )
}