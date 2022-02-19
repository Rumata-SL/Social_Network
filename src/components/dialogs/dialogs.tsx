import React, {FC} from "react";
import d from "./dialogs.module.css"
import {UserMessage} from "./usermessage/usermessage"
import {DialogsUsers} from "./dialogsusers/dialogsuser"


export const Dialogs = () => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialog_items}>
                <DialogsUsers />
            </div>
            <div className={d.dialog_messages}>
                <UserMessage/>
            </div>
        </div>
    )
}





