import React, {FC} from "react";
import d from "./dialogs.module.css"
import {UserMessage} from "./usermessage/usermessage"
import {DialogsUsers} from "./dialogsusers/dialogsuser"


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





