import React from "react";
import img from "./mypostimage/social_logo.png"
import mp from "./mypost.module.css"
import {Post} from "./post/post";
import {PostType} from "../profile";

type MyPostProps = {
    posts: Array<PostType>
}

export const Mypost: React.FC<MyPostProps> = (props) => {

    let user = props.posts.map(item => {
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
                <div><textarea>post</textarea></div>
                <div><button>Add post</button></div>

            </div>
            <div className={mp.user}>
                {user}
            </div>

        </div>
    )
}