import React, {FC} from "react";
import du from "../dialogs.module.css";
import {NavLink} from "react-router-dom";
import {Post} from "../../profile/Mypost/post/post";

type UsersProps = {
    id: number;
    name: string;
}
const DUsers = [
    {id:1, name: "Satoshi"},
    {id:2, name: "Djun"},
    {id:3, name: "Acira"},
    {id:4, name: "Kero"},
    {id:5, name: "Ymy"},
]

export const DialogsUsers: FC= () => {
    let DUser = DUsers.map(item => {
        return (
            <div key={item.id} className={du.item}>
                <p><NavLink to={`${item.id}`}>{item.name}</NavLink></p>
            </div>
        )
    });

    return (
        <div className={du.item}>
            {DUser}
        </div>
    )
}