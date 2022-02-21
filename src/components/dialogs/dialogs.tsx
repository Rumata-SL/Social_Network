import React, {FC} from "react";
import d from "./dialogs.module.css"
import {UserMessage} from "./usermessage/usermessage"
import {DialogsUsers} from "./dialogsusers/dialogsuser"


export const Dialogs = () => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialog}>
                <DialogsUsers />
            </div>
            <div className={d.message}>
                <UserMessage/>
            </div>
        </div>
    )
}





