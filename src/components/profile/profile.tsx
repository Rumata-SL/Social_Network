import React from "react";
import {Mypost} from "./Mypost/mypost";
import p from "./profile.module.css"
import logos from "./image_profile/content_logo.jpg";

export type PostType = { id: number, message: string, likes: number }

const posts: Array<PostType> = [
    {id: 1, message: "I am samurai", likes: 5},
    {id: 2, message: "I am ninja", likes: 10},
    {id: 3, message: "I am Satoshi Nakamoto", likes: 15},
]

export const Profile = () => {
    return (
        <div className={p.content}>
            <div>
                <img className={p.content_logo} src={logos} alt="fudzi"/>
            </div>
            <Mypost posts={posts}/>
        </div>
    )
}