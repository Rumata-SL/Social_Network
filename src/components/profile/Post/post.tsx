import React from "react";
import po from "./post.module.css"

export function Post() {
    return (
        <div className={po.container_post}>
            <div>
                <h6>My post</h6>
                <textarea>post</textarea>
                <button>Add post</button>
            </div>
            <div>post1</div>
            <div>post2</div>
            <div>post3</div>
            <div>post4</div>

        </div>
    )
}