import React from "react";
import img from "./mypostimage/social_logo.png"
import mp from "./mypost.module.css"
import {Post} from "./post/post";

const users = [
    {id: 1, message: "I am samurai", likes: 5},
    {id: 2, message: "I am ninja", likes: 10},
    {id: 3, message: "I am Satoshi Nakamoto", likes: 15},
]

export const Mypost = () => {

    let user = users.map(item => {
        return (
            <div key={item.id}>
                <Post message={item.message} likes={item.likes}/>
            </div>
        )
    })

    return (
        <div className={mp.content}>
            <div className={mp.container_content_social_logo}>

                <div className={mp.box1}>
                    <img className={mp.content_social_logo} src={img} alt="ninja"/>
                </div>

                <div className={mp.box2}>
                    <h4>AVA Description</h4>
                </div>

            </div>
            <div>
                <h6>My post</h6>
                <textarea>post</textarea>
                <button>Add post</button>
            </div>
            {user}
        </div>
    )
}