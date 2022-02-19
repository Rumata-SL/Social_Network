import React, {FC} from "react";


type MessageProps = {
    id: number;
    message: string;
}
const UsMessages = [
    {id: 1, message: "Hello, i am Satoshi"},
    {id: 2, message: "Hello, i am Djun"},
    {id: 3, message: "Hello, i am Acira"},
    {id: 4, message: "Hello, i am Kero"},
    {id: 5, message: "Hello, i am Ymy"},
]

export const UserMessage: FC = () => {
    const UMessage = UsMessages.map(item => {
        return (
            <div key={item.id}>
                <p>{item.message}</p>
            </div>
        )
    });
    return (
        <div>
            {UMessage}
        </div>
    )
}