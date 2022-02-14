import React from "react";
import logos from "./image/content_logo.jpg";
import img from "./image/social_logo.png"
import mp from "./mypost.module.css"
import {Post} from "./post/post";

export function Mypost() {
    return (
        <div className={mp.content}>

            <div>
                <img className={mp.content_logo} src={logos} alt="fudzi"/>
            </div>

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
            <Post/>
            <Post/>
            <Post/>

        </div>
    )
}