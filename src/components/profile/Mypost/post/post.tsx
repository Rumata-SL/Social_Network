import React, {FC} from "react";
import post from "./post.module.css"
import avatar from "./postimage/avatar.png"

type postProps = {
    message: string,
    likes: number
}

export const Post:FC<postProps>=({message,likes})=> {
    return (
        <div className={post.container_post}>
           <span>{likes}</span>
            <img className={post.ava} src={avatar} alt={avatar}/>
            {message}
        </div>
    )
}