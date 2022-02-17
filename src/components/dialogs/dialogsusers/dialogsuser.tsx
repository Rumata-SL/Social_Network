import React, {FC} from "react";
import du from "../dialogs.module.css";
import {NavLink} from "react-router-dom";


type UsersProps = {
    id: number;
    name: string;
}

export const DialogsUsers: FC<UsersProps> = ({id, name}) => {
    return (
        <div className={du.item}>
            <NavLink to={`${id}`}>{name}</NavLink>
        </div>
    )
}