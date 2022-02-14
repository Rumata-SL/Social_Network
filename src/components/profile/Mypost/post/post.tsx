import React from "react";
import post from "./post.module.css"
import avatar from "./postimage/avatar.png"

export function Post() {
    return (
        <div className={post.container_post}>
            <img className={post.ava} src={avatar} alt={avatar}/>
            Post
        </div>
    )
}