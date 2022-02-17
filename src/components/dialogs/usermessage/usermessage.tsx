import React, {FC} from "react";


type MessageProps = {
    message: string;
}

export const UserMessage: FC<MessageProps> = ({message}) => {
    return (
        <div>
            <p>{message}</p>
        </div>
    )
}