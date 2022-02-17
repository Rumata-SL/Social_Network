import React, {FC} from "react";
import d from "./dialogs.module.css"
import {NavLink} from "react-router-dom";

type UsersProps = {
    id: number;
    name: string;
}

const DialogsUsers: FC<UsersProps> = ({id, name}) => {
    return (
        <div className={d.item}>
            <NavLink to={`${id}`}>{name}</NavLink>
        </div>
    )
}
type MessageProps = {
    message: string;
}
const UserMessage: FC<MessageProps> = ({message}) => {
    return (
        <div>
            <p>{message}</p>
        </div>
    )
}


export const Dialogs = () => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialog_items}>
                <DialogsUsers id={1} name="Satoshi"/>
                <DialogsUsers id={2} name="Djun"/>
                <DialogsUsers id={3} name="Acira"/>
                <DialogsUsers id={4} name="Kero"/>
                <DialogsUsers id={5} name="Ymy"/>
            </div>
            <div className={d.dialog_messages}>
                <UserMessage message="Hi"/>
                <UserMessage message="Hi"/>
                <UserMessage message="Hi"/>
                <UserMessage message="Hi"/>
                <UserMessage message="Hi"/>
                <UserMessage message="Hi"/>
            </div>

        </div>
    )
}





