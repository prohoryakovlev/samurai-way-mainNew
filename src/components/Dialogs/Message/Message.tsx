import React from 'react';
import s from './../Dialogs.module.css'

type MessageType = {
    id: number
    message: string
}

const Message:React.FC<MessageType> = (props ) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

export default Message;